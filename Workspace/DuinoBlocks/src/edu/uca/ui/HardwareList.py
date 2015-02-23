#!/usr/local/bin/python
# -*- coding: utf-8 -*-

from pyjamas.ui.DropWidget import DropWidget
from edu.uca.renderable.Element import Element
from pyjamas import DOM
from edu.uca.Workspace import getWorkspace, hardwares
from pyjamas.ui.FlowTabBar import FlowTabBar
from pyjamas.ui.TabPanel import TabPanel
from pyjamas.ui.DragWidget import DragContainer
from pyjamas.ui.VerticalPanel import VerticalPanel
from edu.uca.ui import CategoriesHardware
from edu.uca.util.ResizeWidget import ResizeWidget
from edu.uca.util.DragElement import setDragStartPosition
from pyjamas.ui.Widget import Widget
from edu.uca.util.i18n import _

class HardwareList(DropWidget, DragContainer, VerticalPanel):
    
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
        self.tabs.getTabBar().addStyleName('shortcuts')
        self.tabs.getDeckPanel().addStyleName('blockDrawer')
        #------------------------------------------------------------------------------------------
        self.input = CategoriesHardware.Input()    
        self.tabs.add(self.input, CategoriesHardware.TabTitle(_('Input'), 'input_btn'))
        #------------------------------------------------------------------------------------------
        self.output = CategoriesHardware.Output()    
        self.tabs.add(self.output, CategoriesHardware.TabTitle(_('Output'), 'output_btn'))
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
        resize = ResizeWidget(self.parent, 200, 600)
        resize.addStyleName('float_right')
        bottom.append(resize)
        self.add(bottom)
        self.setCellHeight(bottom, '20px')
    
    def reload(self):
        pass
        
    def onDragStart(self, event):
        setDragStartPosition(event)
        
    def onDragEnd(self, event):          
        getWorkspace().setMovingBlock(None)

    def onDragOver(self, event):
        if  getWorkspace().getMovingBlock() is None: return
        dt = event.dataTransfer
        dt.dropEffect = 'copy'
        if hasattr(getWorkspace().getMovingBlock(), 'original'):
            if not getWorkspace().getMovingBlock().original:
                self.addStyleName('dragover')
                self.trashCan.setStyleName('trashCanOpen')
        DOM.eventPreventDefault(event)

    def onDragLeave(self, event):
        dt = event.dataTransfer
        dt.dropEffect = 'none'
        if hasattr(getWorkspace().getMovingBlock(), 'original'):
            if not getWorkspace().getMovingBlock().original: 
                self.removeStyleName('dragover')
                self.trashCan.setStyleName('trashCanClose trashCanCloseFadeIn')

    def onDrop(self, event):
        if  getWorkspace().getMovingBlock() is None: return
        self.removeStyleName('dragover')    
        if hasattr(getWorkspace().getMovingBlock(), 'original'):    
            if not getWorkspace().getMovingBlock().original:
                getWorkspace().getMovingBlock().removeFromParent()
                del hardwares[getWorkspace().getMovingBlock().getCompleteText()] # remove da lista de componentes
                getWorkspace().setMovingBlock(None)
                
                from edu.uca.util.Serializable import stateChange
                stateChange()
                
                self.trashCan.setStyleName("trashCanClose")
            
        DOM.eventPreventDefault(event)
