#!/usr/local/bin/python
# -*- coding: utf-8 -*-

from edu.uca.util.ChooseCategoryBlockPanel import ChooseCategoryBlockPanel
from edu.uca.util.ChooseTypeBlockPanel import ChooseTypeBlockPanel
from pyjamas.ui.HorizontalPanel import HorizontalPanel
from edu.uca.util.Popup import Popup, CONFIRM_CANCEL
from edu.uca.Workspace import vars, createdBlocks, getWorkspace
from edu.uca.renderable.Element import Element
from pyjamas.ui.TextBox import TextBox
from pyjamas.ui.Widget import Widget
from pyjamas.ui.Label import Label
from pyjamas import DOM
from edu.uca.renderable.block.Block import Block
from edu.uca.renderable.block import ArduinoBlocks
from edu.uca.util.PopupBlockEditor import PopupBlockEditor
from edu.uca.util.i18n import _

def popupConfirmNewBlock(nameBlock, categoryBlock, typeBlock, showPopup=True):
    if   categoryBlock == ChooseCategoryBlockPanel.CONTROL:   color = 'orange'
    elif categoryBlock == ChooseCategoryBlockPanel.OPERATORS: color = 'green'
    elif categoryBlock == ChooseCategoryBlockPanel.INPUT:     color = 'purple'
    elif categoryBlock == ChooseCategoryBlockPanel.OUTPUT:    color = 'blue'
    elif categoryBlock == ChooseCategoryBlockPanel.UTILITIES: color = 'darkblue'
    elif categoryBlock == ChooseCategoryBlockPanel.VARIBLES:  color = 'red'
    
    if   typeBlock == Block.STATEMENT_BLOCK: attribute = 'commandType'
    elif typeBlock == Block.NUMBER_BLOCK:    attribute = 'numericType'
    elif typeBlock == Block.BOOLEAN_BLOCK:   attribute = 'logicType'
    elif typeBlock == Block.STRING_BLOCK:    attribute = 'alphaNumericType'
        
    block = getattr(ArduinoBlocks, attribute)(nameBlock, color)       
    getattr(getWorkspace().getBlockList(), categoryBlock).addSubCategory(block)
    
    popup = PopupBlockEditor(block, categoryBlock, True)
    createdBlocks[nameBlock] = popup
    
    if showPopup:
        from edu.uca.util.Serializable import stateChange
        stateChange()
    
class PopupNewBlock(Popup):
        
    def __init__(self, okClick, cancelClick):
        Popup.__init__(self, '<b>'+_('New Block')+'</b>', okClick, cancelClick, CONFIRM_CANCEL)
        
    def draw(self):
        Popup.draw(self)
        #----------------------------------------------------------------------------------
        namePanel = HorizontalPanel()
        namePanel.add(Label(_('Name')+':'))        
        self.textBox = TextBox()
        self.textBox.setMaxLength(25)
        self.textBox.setStyleAttribute('marginLeft', 10)
        self.textBox.addInputListener(self)
        namePanel.add(self.textBox)
        self.center.add(namePanel)
        #----------------------------------------------------------------------------------
        self.chooseType = ChooseTypeBlockPanel()
        self.chooseCategory = ChooseCategoryBlockPanel(self.categoryChangeListener)
        #----------------------------------------------------------------------------------
        self.center.add(self.chooseCategory)
        self.center.add(self.chooseType)
        #----------------------------------------------------------------------------------                
        self.message = Element(Element=DOM.createDiv())
        self.message.add(Widget(Element=DOM.createDiv(), StyleName='not_image'))
        self.message.add(Label(text=_('Name already used'), wordWrap=False, StyleName='not_message'))
        #----------------------------------------------------------------------------------
        self.onInput()
        
    def categoryChangeListener(self, color):
        self.chooseType.changeColor(color)
        
    def onInput(self, sender):
        if self.textBox.getText().count(' ') == len(self.textBox.getText()):
            self.okButton.addStyleName('disabled')
            self.south.remove(self.message)
        elif self.textBox.getText() in vars or self.textBox.getText() in createdBlocks:
            self.okButton.addStyleName('disabled')
            self.south.add(self.message)    
        else:
            self.okButton.removeStyleName('disabled')
            self.south.remove(self.message)
        
    def myOkClick(self):
        if 'disabled' not in self.okButton.getStyleName():
            Popup.myOkClick(self)
            self.okClick(self.textBox.getText(), self.chooseCategory.selectedType, self.chooseType.selectedType)
            
    def myCancelClick(self):
        Popup.myCancelClick(self)
        if self.cancelClick is not None: self.cancelClick()
            
    def show(self):
        Popup.show(self)
        self.textBox.setFocus(True)
        