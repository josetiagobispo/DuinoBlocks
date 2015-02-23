#!/usr/local/bin/python
# -*- coding: utf-8 -*-

from pyjamas.ui import HasHorizontalAlignment, KeyboardListener
from pyjamas.ui.KeyboardListener import KeyboardHandler
from pyjamas.ui.VerticalPanel import VerticalPanel
from edu.uca.renderable.Element import Element
from pyjamas.ui.RootPanel import RootPanel
from pyjamas.ui.DialogBox import DialogBox
from edu.uca.util.Button import Button
from pyjamas.ui.Widget import Widget
from pyjamas import Window
from pyjamas import DOM
from edu.uca.util.i18n import _

COMFIRM        = 0
CONFIRM_CANCEL = 1
    
class Popup(DialogBox, KeyboardHandler):
  
    def __init__(self, title, okClick=None, cancelClick=None, options=-1, hasBackground=True):
        DialogBox.__init__(self, autoHide=False, modal=hasBackground, centered=True, StyleName='dialog')
        KeyboardHandler.__init__(self)
        self.addKeyboardListener(self)#n�o funciona fora do input
        self.title = title
        self.okClick = okClick
        self.cancelClick = cancelClick
        self.options = options
        self.hasBackground = hasBackground
        self.center = VerticalPanel(StyleName='dialog_center')
        self.draw()
    
    def setPopupPosition(self, left, top):
        if top + self.getOffsetHeight() > Window.getClientHeight():
            top = Window.getClientHeight() - self.getOffsetHeight()
        if left + self.getOffsetWidth() > Window.getClientWidth():
            left = Window.getClientWidth() - self.getOffsetWidth()    
        DialogBox.setPopupPosition(self, left, top)    
            
    def onKeyUp(self, sender, keycode, modifiers):
        if keycode == KeyboardListener.KEY_ESCAPE: self.myCancelClick()
        elif keycode == KeyboardListener.KEY_ENTER: self.myOkClick()
    
    def draw(self):
        self.setHTML(self.title)
        panelSouth = VerticalPanel(StyleName='dialog_south')
        self.south = Element(Element=DOM.createDiv(), Width='100%')     
        
        if (self.options == CONFIRM_CANCEL):
            cancel = Button(_('Cancel'), self.myCancelClick, classIcon="icon-cancel")
            cancel.addStyleName('float_right')
            self.south.add(cancel)
             
        self.okButton = Button(_('Confirm'), self.myOkClick, classIcon="icon-ok")
        self.okButton.addStyleName('float_right')
        self.south.add(self.okButton)
        
        panelSouth.add(self.south)
        panelSouth.setCellHorizontalAlignment(self.south, HasHorizontalAlignment.ALIGN_RIGHT)
        
        widget = VerticalPanel(Width='100%')
        widget.add(self.center)
        widget.add(panelSouth)
        self.setWidget(widget)
    
    def myOkClick(self):
        self.hide()
        
    def myCancelClick(self):
        self.hide()
        
    def hide(self, autoClosed=False):
        if self.hasBackground: RootPanel().remove(self.background)
        return DialogBox.hide(self, autoClosed=autoClosed)
            
    def show(self):
        if self.hasBackground:
            self.background = Widget(Element=DOM.createDiv(), StyleName='diaglog_coverup')
            self.background.setHeight(RootPanel().getOffsetHeight())
            RootPanel().add(self.background)
        DialogBox.show(self)
        