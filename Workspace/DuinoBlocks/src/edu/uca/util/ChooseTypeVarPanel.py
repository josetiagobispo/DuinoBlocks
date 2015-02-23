#!/usr/local/bin/python
# -*- coding: utf-8 -*-

from pyjamas.ui.HorizontalPanel import HorizontalPanel
from edu.uca.renderable.block import ArduinoBlocks
from edu.uca.renderable.block.Block import Block
from edu.uca.renderable.Element import Element
from pyjamas.ui.RadioButton import RadioButton
from pyjamas.ui.Label import Label
from pyjamas import DOM

class ChooseTypeVarPanel(HorizontalPanel):
    
    def __init__(self):
        HorizontalPanel.__init__(self, StyleName="type_block select_block")
        self.add(Label('Tipo:'))       
        
        fake = Element(Element=DOM.createDiv())
        
        self.booleanBlock = getattr(ArduinoBlocks, 'logicType')('logica', 'red', off=True)
        fake.append(self.booleanBlock)
        self.logicType = RadioButton("group1", fake.getElement().innerHTML, True)
        self.logicType.addClickListener(getattr(self, "onClickLogicType"))
        self.add(self.logicType)
        fake.removeAll()
        
        self.numberBlock = getattr(ArduinoBlocks, 'numericType')('numerica', 'red', off=True)
        fake.append(self.numberBlock)
        self.numericType = RadioButton("group1", fake.getElement().innerHTML, True)
        self.numericType.setChecked(True)
        self.numericType.addClickListener(getattr(self, "onClickNumericType"))
        self.add(self.numericType)
        fake.removeAll()
        
        self.stringBlock = getattr(ArduinoBlocks, 'alphaNumericType')('alfanumerica', 'red', off=True)
        fake.append(self.stringBlock)
        self.alphaNumericType = RadioButton("group1", fake.getElement().innerHTML, True)
        self.alphaNumericType.addClickListener(getattr(self, "onClickAlphanumericType"))
        self.add(self.alphaNumericType)
        
        self.onClickNumericType()
        
    def onClickLogicType(self, sender=None):
        self.selectedType = Block.BOOLEAN_BLOCK
        self.enableRadioButton(self.alphaNumericType, self.stringBlock,  False)
        self.enableRadioButton(self.numericType,      self.numberBlock,  False)
        self.enableRadioButton(self.logicType,        self.booleanBlock, True)
            
    def onClickNumericType(self, sender=None):
        self.selectedType = Block.NUMBER_BLOCK
        self.enableRadioButton(self.alphaNumericType, self.stringBlock,  False)
        self.enableRadioButton(self.numericType,      self.numberBlock,  True)
        self.enableRadioButton(self.logicType,        self.booleanBlock, False)
        
    def onClickAlphanumericType(self, sender=None):
        self.selectedType = Block.STRING_BLOCK
        self.enableRadioButton(self.alphaNumericType, self.stringBlock,  True)
        self.enableRadioButton(self.numericType,      self.numberBlock,  False)
        self.enableRadioButton(self.logicType,        self.booleanBlock, False)
        
    def enableRadioButton(self, radio, block, enable):
        fake = Element(Element=DOM.createDiv())
        if enable: block.removeStyleName('disabled')
        else: block.addStyleName('disabled')
        fake.append(block)
        radio.setHTML(fake.getElement().innerHTML)
