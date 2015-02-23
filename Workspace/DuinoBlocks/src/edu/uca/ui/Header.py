#!/usr/local/bin/python
# -*- coding: utf-8 -*-

from edu.uca.ui.listener.GenerateCodeButtonListener import GenerateCodeButtonListener
from pyjamas.ui.FlowPanel import FlowPanel
from edu.uca.Workspace import getWorkspace
from edu.uca.util.Button import Button
from edu.uca.util.PopupNewBlock import PopupNewBlock, popupConfirmNewBlock
from edu.uca.util.Serializable import saveState, loadState, undo, redo,\
    saveAllCustomBlocks, importCustomBlock, exportCustomBlocks
from edu.uca.util.Dropdown import Dropdown

from edu.uca.util.i18n import _, gettext_noop
from pyjamas import DOM
from edu.uca.renderable.Element import Element
from pyjamas.ui.Tooltip import TooltipListener

class Header(FlowPanel):
    
    def __init__(self, changeLanguage, **kwargs):
        FlowPanel.__init__(self, **kwargs)
        self.setID('header')
        
        #---------------------------------------------------------------------------------------------------
        div = Element(Element=DOM.createDiv(), StyleName='btn-group2')
        
        self.buttonBlocks = Button(_('Blocks'), self.showBlocks, classIcon="icon-selected")
        div.add(self.buttonBlocks)
                
        self.buttonHarwares = Button(_('Components'), self.showHardwares, classIcon="icon-deselected")
        div.add(self.buttonHarwares)    
        
        self.add(div)
        #--------------------------------------------------------------------------------------------------- 
        div = Element(Element=DOM.createDiv(), StyleName='btn-group2 groupHidden')
        
        self.buttonMakeBlock = Button(_('Building Block'), self.makeBlock, classIcon="icon-buildBlock")
        div.add(self.buttonMakeBlock)
        
        #self.dropdownMakeBlock = Dropdown('', None, self.makeBlockItemClick, StyleName='dropdown_btn', rootPanel=div)
        #self.dropdownMakeBlock.addValue('Importar Bloco', 'icon-ImportBlock')        
        #self.dropdownMakeBlock.addValue('Exportar Bloco', 'icon-ExportBlock')        
        #div.add(self.dropdownMakeBlock) 
        
        self.add(div)
        
        #--------------------------------------------------------------------------------------------------- 
        #div = Element(Element=DOM.createDiv(), StyleName='btn-group2')
                      
        #self.buttonReload = Button(_('Reload'), self.reloadClick, classIcon="icon-repeat")
        #div.add(self.buttonReload)
        
        #self.add(div)        
        
        #---------------------------------------------------------------------------------------------------        
        div = Element(Element=DOM.createDiv(), StyleName='btn-group2 groupHidden')
        
        self.buttonUndo = Button(_('Undo'), undo, classIcon="icon-undo")
        div.add(self.buttonUndo)
        
        self.buttonRedo = Button(_('Redo'), redo, classIcon="icon-redo")
        div.add(self.buttonRedo)
        
        self.add(div)
        
        #self.buttonUndo2 = Button("Desfazer2", self.undo2)
        #self.add(self.buttonUndo2)
        
        #self.buttonRedo2 = Button("Refazer2", self.redo2)
        #self.add(self.buttonRedo2)
        
        #---------------------------------------------------------------------------------------------------              
        div = Element(Element=DOM.createDiv(), StyleName='btn-group2 groupHidden')
        
        self.buttonOpen = Button(_('Open'), loadState, classIcon="icon-open")
        div.add(self.buttonOpen)
        
        self.buttonSave = Button(_('Save'), saveState, classIcon="icon-download")
        self.buttonSave.setID("btnSave")
        div.add(self.buttonSave)        
       
        self.add(div)        
       
        #---------------------------------------------------------------------------------------------------
        div = Element(Element=DOM.createDiv(), StyleName='btn-group')
        
        self.codeGenerator = GenerateCodeButtonListener(getWorkspace().getCodePanel())
        self.buttonTranslate = Button(_("Translate"), self.codeGenerator)
        self.buttonTranslate.addMouseListener(self)
        div.add(self.buttonTranslate)
        
        self.dropdownTranslate = Dropdown('', None, self.translateItemClick, StyleName='dropdown_btn', rootPanel=div)
        self.isAutomatic = False
        self.dropdownTranslate.addValue(gettext_noop('Manual'), 'icon-selected')        
        self.dropdownTranslate.addValue(gettext_noop('Automatic'), 'icon-deselected')        
        div.add(self.dropdownTranslate)        
        
        self.add(div)       
         
        #---------------------------------------------------------------------------------------------------        
        div = Element(Element=DOM.createDiv(), StyleName='btn-group2')
        
        self.changeLanguage = changeLanguage
        self.dropdownFlag = Dropdown('', None, self.flagItemClick, StyleName='dropdown_btn flag', classIcon='icon-pt_BR') 
        self.dropdownFlag.addValue('Portugu&ecirc;s', 'icon-pt_BR')
        self.dropdownFlag.addValue('English', 'icon-en_US')
        self.dropdownFlag.addValue('Espa&ntilde;ol', 'icon-es_ES')
        self.dropdownFlag.addValue('Italiano', 'icon-it_IT')
        self.dropdownFlag.addMouseListener(TooltipListener("Idioma"))
        div.add(self.dropdownFlag)
        
        self.add(div)
        #---------------------------------------------------------------------------------------------------
                
        self.mainStack = []
        
    def flagItemClick(self, style):
        self.dropdownFlag.changeIcon(style)
        self.changeLanguage(style.replace('icon-', ''))
        
    def translateItemClick(self, mechanism):
        self.isAutomatic = (not self.isAutomatic and mechanism=='icon-deselected') or (self.isAutomatic and mechanism=='icon-selected')
        
        if mechanism == 'icon-deselected':
            for value in self.dropdownTranslate.getValues():
                if value.getClassIcon() == 'icon-deselected':
                    value.setClassIcon('icon-selected')
                else: 
                    value.setClassIcon('icon-deselected')
                    
    def makeBlockItemClick(self, action):
        self.dropdownMakeBlock.popup.hide()
        if action == 'icon-ImportBlock' : 
            importCustomBlock()
        elif action == 'icon-ExportBlock' : 
            exportCustomBlocks()
        
    
    #def undo2(self):
    #    history.undo()
    
    #def redo2(self):
    #    history.redo()
    
    def changeTexts(self):
        #self.buttonReload.setText(_('Reload'))
        self.buttonMakeBlock.setText(_('Building Block'))
        self.buttonTranslate.setText(_('Translate'))
        self.dropdownTranslate.changeTexts()
        self.buttonHarwares.setText(_('Components'))        
        self.buttonBlocks.setText(_('Blocks'))        
        self.buttonSave.setText(_('Save'))        
        self.buttonOpen.setText(_('Open'))        
        self.buttonUndo.setText(_('Undo'))        
        self.buttonRedo.setText(_('Redo'))
    
    def showHardwares(self):
        self.buttonHarwares.changeIcon('icon-selected')
        self.buttonBlocks.changeIcon('icon-deselected')
    
    def showBlocks(self):
        self.buttonHarwares.changeIcon('icon-deselected')
        self.buttonBlocks.changeIcon('icon-selected')
        
    def makeBlock(self):
        popup = PopupNewBlock(popupConfirmNewBlock)
        popup.show()
            
    def reloadClick(self, sender):
        getWorkspace().reload()
        from edu.uca.util.Serializable import stateChange
        stateChange()
        
    def onMouseEnter(self, sender):
        rootSetupBlock = None
        if getWorkspace().getMainBlock() is not None:
            rootSetupBlock = getWorkspace().getMainBlock().getFirstBlock()
        self.mainStack = []
        self.createMainStack(rootSetupBlock)
        allBlocks = getWorkspace().getBlocks()
        for block in allBlocks:
            if block not in self.mainStack:
                block.addStyleName('disabled')
    
    def createMainStack(self, root):
        if root is None: return
        self.mainStack.append(root)
        for holder in root.holderArguments:
            self.createMainStack(holder.subBlock)
        for holder in root.holderChildren:
            self.createMainStack(holder.subBlock)
        if root.holderSiblingDown is not None:
            self.createMainStack(root.holderSiblingDown.subBlock)

    def onMouseLeave(self, sender):
        allBlocks = getWorkspace().getBlocks()
        for block in allBlocks: block.removeStyleName('disabled')

    def onMouseMove(self, sender, x, y):
        pass

    def onMouseDown(self, sender, x, y):
        pass

    def onMouseUp(self, sender, x, y):
        pass
    