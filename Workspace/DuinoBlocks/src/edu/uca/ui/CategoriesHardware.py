#!/usr/local/bin/python
# -*- coding: utf-8 -*-

from edu.uca.Workspace import createdBlocks
from pyjamas.ui.HorizontalPanel import HorizontalPanel
from pyjamas.ui.VerticalPanel import VerticalPanel
from edu.uca.renderable.Element import Element
from pyjamas.ui.FocusWidget import FocusWidget
from edu.uca.util.Popup import Popup
from pyjamas.ui.Widget import Widget
from pyjamas.ui.Label import Label
from pyjamas import DOM

from edu.uca.renderable.hardware.ArduinoHardwares import component_led, component_button,\
    component_rgb_led, component_knob, component_ldr, component_servo,\
    component_buzzer, component_motor, component_thermistor, component_lcd,\
    component_display7seg, component_joystick, component_keypad, component_IR
    
from edu.uca.util.i18n import _

#----------------------------------------------------------------------------------------------------------------------------

class TabTitle(Widget):
    def __init__(self, tabName, tabId):
        Widget.__init__(self, Element=DOM.createElement('a')) 
        self.tabName = tabName   
        DOM.setInnerHTML(self.getElement(), self.tabName)
        self.setID(tabId)
        
    def changeTexts(self):
        DOM.setInnerHTML(self.getElement(), _(self.tabName))

#----------------------------------------------------------------------------------------------------------------------------

class CategoryPanel(VerticalPanel):
    def __init__(self):
        VerticalPanel.__init__(self)
        self.myBlocksSubCat = None
        self.label = ''
        
    def changeTexts(self):
        for subCat in self.children:
            subCat.changeTexts()
        
    def addSubCategory(self, block):
        if self.myBlocksSubCat == None:
            self.myBlocksSubCat = SubCategoryPanel(_('My Blocks'), self.label)
            self.add(self.myBlocksSubCat)
        self.myBlocksSubCat.addBlock(block)
        
#----------------------------------------------------------------------------------------------------------------------------

class SubCategoryPanel(VerticalPanel):
    
    def __init__(self, subCategoryName='', subCategoryClassName='', openList=True):
        self.list = VerticalPanel(StyleName='block_list')
        self.list.setStyleAttribute("display", "block")
        VerticalPanel.__init__(self, StyleName='SubCategoryPanel')
        self.subCategoryName = subCategoryName
        if subCategoryName != '':
            self.title = Element(Element=DOM.createElement('dt'), StyleName=subCategoryClassName)
            DOM.setInnerHTML(self.title.getElement(), self.subCategoryName)
            self.collapse = FocusWidget(Element=DOM.createDiv(), StyleName='collapse close_up')
            self.collapse.addClickListener(self.showHide)
            self.title.add(self.collapse)
            self.add(self.title)
            if openList:
                self.list.setStyleAttribute("display", "block")
                self.collapse.setStyleName('collapse close_up')
            else:
                self.list.setStyleAttribute("display", "none")
                self.collapse.setStyleName('collapse open_down')
        self.add(self.list) 
        self.blocks = []    
    
    def changeTexts(self):
        if self.subCategoryName != '':
            DOM.setInnerHTML(self.title.getElement(), _(self.subCategoryName))
            self.title.add(self.collapse)
        for block in self.blocks:
            block.changeTexts()
        
    def addBlock(self, block, classHelp='help_default', beforeIndex=None):
        panel = HorizontalPanel()
        panel.add(block)
        info = Label('i', StyleName='info_btn')
        info.block = block
        info.classHelp = classHelp
        info.addClickListener(self.showInfo)
        panel.add(info)
        if beforeIndex is not None: self.list.insert(panel, self.list.getBody(), 0)#deprecated
        else: self.list.add(panel)
        self.list.setStyleName(self.list.getWidgetTd(panel), 'block_info')
        self.blocks.append(block)
        
    def removeBlock(self, block):#deprecated
        self.list.remove(block.getParent())
        self.blocks.remove(block)
            
    def addWidget(self, widget):    
        self.list.add(widget)   
        
    def showInfo(self, sender):
        if sender.block.name in ['commandType', 'numericType', 'logicType', 'alphaNumericType']:
            createdBlocks[sender.block.varName].show()
        else:
            popup = Popup('<b>Ajuda</b>', None, None)
            popup.center.append(Widget(Element=DOM.createDiv(), StyleName=sender.classHelp))
            popup.caption.setStyleAttribute('text-align', 'center')
            popup.show()
            
    def showHide(self):
        if self.list.getStyleAttribute('display') == 'none':
            self.list.setStyleAttribute("display", "block")
            self.collapse.setStyleName('collapse close_up')
        else:
            self.list.setStyleAttribute("display", "none")
            self.collapse.setStyleName('collapse open_down')
              
    def changeTitle(self, count):# faz perder o collapse
        DOM.setInnerHTML(self.title.getElement(), self.subCategoryName+': #'+str(count))
        self.title.add(self.collapse)

#----------------------------------------------------------------------------------------------------------------------------

class Input(CategoryPanel): 
    def __init__(self):
        CategoryPanel.__init__(self)
        self.label = 'input_lbl'
        sub = SubCategoryPanel()
        sub.addBlock(component_button())
        sub.addBlock(component_knob())
        sub.addBlock(component_ldr())
        sub.addBlock(component_thermistor())
        sub.addBlock(component_joystick())
        sub.addBlock(component_keypad())
        sub.addBlock(component_IR())
        self.add(sub)
        
#----------------------------------------------------------------------------------------------------------------------------

class Output(CategoryPanel):
    def __init__(self):
        CategoryPanel.__init__(self)
        self.label = 'output_lbl'
        sub = SubCategoryPanel()
        sub.addBlock(component_led())
        sub.addBlock(component_rgb_led())
        sub.addBlock(component_buzzer())
        sub.addBlock(component_servo())
        sub.addBlock(component_motor())
        sub.addBlock(component_lcd())
        sub.addBlock(component_display7seg())
        self.add(sub)

#----------------------------------------------------------------------------------------------------------------------------
