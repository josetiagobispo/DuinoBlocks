#!/usr/local/bin/python
# -*- coding: utf-8 -*-

from pyjamas.ui.DropWidget import DropWidget
from edu.uca.renderable.Element import Element
from pyjamas import DOM
from edu.uca.Workspace import getWorkspace
from pyjamas.ui.FlowTabBar import FlowTabBar
from pyjamas.ui.TabPanel import TabPanel
from pyjamas.ui.DragWidget import DragContainer
from edu.uca.renderable.block.MainBlock import MainBlock
from pyjamas.ui.VerticalPanel import VerticalPanel
from edu.uca.ui import CategoriesBlock
from edu.uca.util.ResizeWidget import ResizeWidget
from edu.uca.renderable.block import ArduinoBlocks
from edu.uca.util.Constants import INPUT, OUTPUT
from edu.uca.util.DragElement import setDragStartPosition
from pyjamas.ui.Widget import Widget
from edu.uca.util.i18n import _

class BlockList(DropWidget, DragContainer, VerticalPanel):
    
    _blockDragListeners = []
    
    def __init__(self):
        VerticalPanel.__init__(self, StyleName='drophere')
        DropWidget.__init__(self)
        DragContainer.__init__(self)
    
    def changeTexts(self):
        for category in self.tabs.getChildren():
            category.changeTexts()
        
        for i in range(1, self.tabs.getTabBar().panel.getWidgetCount() - 1):
            self.tabs.getTabBar().panel.getWidget(i).getFocusablePanel().getWidget().changeTexts()
    
    def onLoad(self):   
        self.tabs = TabPanel(FlowTabBar())
        # self.tabs.getTabBar().addStyleName('shortcuts') === gwt-TabBar
        # self.tabs.getDeckPanel().addStyleName('blockDrawer') === gwt-TabPanelBottom{
        #------------------------------------------------------------------------------------------
        self.control = CategoriesBlock.Control()      
        self.tabs.add(self.control, CategoriesBlock.TabTitle(_('Control'), 'control_btn'))       
        #------------------------------------------------------------------------------------------
        self.operators = CategoriesBlock.Operators()    
        self.tabs.add(self.operators, CategoriesBlock.TabTitle(_('Operators'), 'operators_btn'))
        #------------------------------------------------------------------------------------------
        self.input = CategoriesBlock.Input()    
        self.tabs.add(self.input, CategoriesBlock.TabTitle(_('Input'), 'input_btn'))
        #------------------------------------------------------------------------------------------
        self.output = CategoriesBlock.Output()    
        self.tabs.add(self.output, CategoriesBlock.TabTitle(_('Output'), 'output_btn'))
        #------------------------------------------------------------------------------------------
        self.utilities = CategoriesBlock.Setup()   
        self.tabs.add(self.utilities, CategoriesBlock.TabTitle(_('Utilities'), 'config_btn'))
        #------------------------------------------------------------------------------------------
        self.variables = CategoriesBlock.Variables()
        self.tabs.add(self.variables, CategoriesBlock.TabTitle(_('Variables'), 'variables_btn'))
        #------------------------------------------------------------------------------------------
        self.tabs.selectTab(0)
        panel = Element(Element=DOM.createDiv(), Width='100%', Height='100%')
        panel.append(self.tabs)
        #------------------------------------------------------------------------------------------
        self.trashCan = Widget(Element=DOM.createDiv(), StyleName='trashCanClose')
        panel.append(self.trashCan)
        self.add(panel)
        #------------------------------------------------------------------------------------------
        bottom = Element(Element=DOM.createDiv(), StyleName='drawer_bottom')
        resize = ResizeWidget(self.parent, 200, 510)
        resize.addStyleName('float_right')
        bottom.append(resize)
        self.add(bottom)
        self.setCellHeight(bottom, '20px')
        
    def refreshComponentBlocks(self, components):
        self.input.removeAllSubComp()
        self.output.removeAllSubComp()
        listName = set([])
        for comp in components:
            if hasattr(comp, 'listBlockName'):
                for name in comp.listBlockName:
                    if not listName.__contains__(name):
                        listName.add(name)               
                        block = getattr(ArduinoBlocks, name)()
                        block.changeTexts()
                        if comp.mode == INPUT: self.input.getSubComp(comp.text).addBlock(block)
                        elif comp.mode == OUTPUT: self.output.getSubComp(comp.text).addBlock(block)
        self.input.changeTexts()
        self.output.changeTexts()
    
    def reload(self):
        self.showMainBlock()
        for cat in self.tabs.children: cat.reload()
        
    def onDragStart(self, event):
        #print "Left: onDragStart" 
        setDragStartPosition(event)#verificar se realmente � necess�rio REMOVI (talvez tenha que colocar para undo)
        for listener in self._blockDragListeners:
            listener.onBlockDragStart(event, getWorkspace().getMovingBlock())
        
    def onDragEnd(self, event):
        for listener in self._blockDragListeners:
            listener.onBlockDragEnd(event, getWorkspace().getMovingBlock())            
        getWorkspace().setMovingBlock(None)
        
    def onDragEnter(self, event):
        DOM.eventPreventDefault(event) 

    def onDragOver(self, event):
        if  getWorkspace().getMovingBlock() is None: return
        dt = event.dataTransfer
        dt.dropEffect = 'copy'
        if not getWorkspace().getMovingBlock().original: 
            self.addStyleName('dragover')
            self.trashCan.setStyleName('trashCanOpen')
            
        DOM.eventPreventDefault(event)

    def onDragLeave(self, event):
        #print "Left: onDragLeave"
        if  getWorkspace().getMovingBlock() is None: return
        dt = event.dataTransfer
        dt.dropEffect = 'none'
        if not getWorkspace().getMovingBlock().original: 
            self.removeStyleName('dragover')
            self.trashCan.setStyleName('trashCanClose trashCanCloseFadeIn')

    def onDrop(self, event):
        #print "Left: onDrop"       
        if  getWorkspace().getMovingBlock() is None: return 
        self.removeStyleName('dragover')        
        if not getWorkspace().getMovingBlock().original:
        
            #do = (self.removeBlocks, [getWorkspace().getMovingBlock()])
            self.removeBlocks(getWorkspace().getMovingBlock())#
            #history.add(do, getWorkspace().getUndo()) # � preciso saber de onde vem
            
            for listener in self._blockDragListeners:
                listener.onBlockDragEnd(event, getWorkspace().getMovingBlock())
            getWorkspace().getMovingBlock().onDragEnd()#finaliza - para undo
            getWorkspace().setMovingBlock(None)
            
            from edu.uca.util.Serializable import stateChange
            stateChange()
            
            self.trashCan.setStyleName("trashCanClose")
        
        
    def removeBlocks(self, root): # remove o bloco e seus subblocos da lista de blocos
        if root is None: return
        getWorkspace().removeBlock(root) # Tentando remover um bloco original
        for holder in root.holderArguments:    self.removeBlocks(holder.subBlock)
        for holder in root.holderChildren:     self.removeBlocks(holder.subBlock)
        if root.holderSiblingDown is not None: self.removeBlocks(root.holderSiblingDown.subBlock)
        if isinstance(root, MainBlock):
            self.showMainBlock()
            getWorkspace().setMainBlock(None)
        root.removeFromParent()
 
#--------------------------------------------------------------------------------------------------------------    
    def hideMainBlock(self):
        self.control.hideMainBlock()
    
    def showMainBlock(self):
        self.control.showMainBlock()
        
#--------------------------------------------------------------------------------------------------------------   
    def addBlockDragListener(self, listener):
        self._blockDragListeners.append(listener)

    def removeBlockDragListener(self, listener):
        self._blockDragListeners.remove(listener)
#--------------------------------------------------------------------------------------------------------------
