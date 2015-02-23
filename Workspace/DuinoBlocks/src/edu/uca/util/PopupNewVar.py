#!/usr/local/bin/python
# -*- coding: utf-8 -*-

from edu.uca.util.ChooseTypeVarPanel import ChooseTypeVarPanel
from pyjamas.ui.HorizontalPanel import HorizontalPanel
from edu.uca.util.Popup import Popup, CONFIRM_CANCEL
from edu.uca.Workspace import vars, createdBlocks
from edu.uca.renderable.Element import Element
from pyjamas.ui.TextBox import TextBox
from pyjamas.ui.Widget import Widget
from pyjamas.ui.Label import Label
from pyjamas import DOM
from edu.uca.util.i18n import _

class PopupNewVar(Popup):
        
    def __init__(self, okClick, cancelClick):
        Popup.__init__(self, '<b>Nova Vari&aacute;vel</b>', okClick, cancelClick, CONFIRM_CANCEL)
        
    def draw(self):
        Popup.draw(self)
        
        namePanel = HorizontalPanel()
        namePanel.add(Label(_('Name')+':'))        
        self.textBox = TextBox()
        self.textBox.setMaxLength(15)
        self.textBox.setStyleAttribute('marginLeft', 10)
        namePanel.add(self.textBox)
        self.center.add(namePanel)
        
        self.choose = ChooseTypeVarPanel()
        self.center.add(self.choose)
        
        self.textBox.addInputListener(self)
        
        self.message = Element(Element=DOM.createDiv())
        self.message.add(Widget(Element=DOM.createDiv(), StyleName='not_image'))
        self.message.add(Label(text=_('Name already used'), wordWrap=False, StyleName='not_message'))
        
        self.onInput()
        
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
            self.okClick(self.textBox.getText(), self.choose.selectedType)
            
    def myCancelClick(self):
        Popup.myCancelClick(self)
        if self.cancelClick is not None: self.cancelClick()
            
    def show(self):
        Popup.show(self)
        self.textBox.setFocus(True)