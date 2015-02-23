#!/usr/local/bin/python
# -*- coding: utf-8 -*-

from pyjamas.ui.HorizontalPanel import HorizontalPanel
from edu.uca.renderable.block import ArduinoBlocks
from edu.uca.renderable.block.Block import Block
from edu.uca.renderable.Element import Element
from pyjamas.ui.RadioButton import RadioButton
from pyjamas.ui.Label import Label
from pyjamas import DOM
from edu.uca.util.i18n import _

class ChooseTypeBlockPanel(HorizontalPanel):
    
    def __init__(self):
        HorizontalPanel.__init__(self, StyleName="type_block select_block")
        self.add(Label(_('Type')+':'))       
        
        fake = Element(Element=DOM.createDiv())
        self.color = 'grey'
        
        self.commandBlock = getattr(ArduinoBlocks, 'commandType')('comando', 'grey', off=True)
        fake.append(self.commandBlock)
        self.commandType = RadioButton("groupType", fake.getElement().innerHTML, True)
        self.commandType.setChecked(True)
        self.commandType.addClickListener(getattr(self, "onClickCommandType"))
        self.add(self.commandType)
        fake.removeAll()
        
        self.booleanBlock = getattr(ArduinoBlocks, 'logicType')('logico', 'grey', off=True)
        fake.append(self.booleanBlock)
        self.logicType = RadioButton("groupType", fake.getElement().innerHTML, True)
        self.logicType.addClickListener(getattr(self, "onClickLogicType"))
        self.add(self.logicType)
        fake.removeAll()
        
        self.numberBlock = getattr(ArduinoBlocks, 'numericType')('numerico', 'grey', off=True)
        fake.append(self.numberBlock)
        self.numericType = RadioButton("groupType", fake.getElement().innerHTML, True)
        self.numericType.addClickListener(getattr(self, "onClickNumericType"))
        self.add(self.numericType)
        fake.removeAll()
        
        self.stringBlock = getattr(ArduinoBlocks, 'alphaNumericType')('alfanumerico', 'grey', off=True)
        fake.append(self.stringBlock)
        self.alphaNumericType = RadioButton("groupType", fake.getElement().innerHTML, True)
        self.alphaNumericType.addClickListener(getattr(self, "onClickAlphanumericType"))
        self.add(self.alphaNumericType)
        
        self.onClickCommandType()
        
    def changeColor(self, color):
        if self.color == color:return
        
        self.stringBlock.removeStyleName(self.color)
        self.numberBlock.removeStyleName(self.color)
        self.booleanBlock.removeStyleName(self.color)
        self.commandBlock.removeStyleName(self.color)
        
        self.color = color
        
        self.stringBlock.addStyleName(self.color)
        self.numberBlock.addStyleName(self.color)
        self.booleanBlock.addStyleName(self.color)
        self.commandBlock.addStyleName(self.color)
        
        self.enableRadioButton(self.commandType,      self.commandBlock, self.selectedType==Block.STATEMENT_BLOCK)
        self.enableRadioButton(self.numericType,      self.numberBlock,  self.selectedType==Block.NUMBER_BLOCK)
        self.enableRadioButton(self.logicType,        self.booleanBlock, self.selectedType==Block.BOOLEAN_BLOCK)
        self.enableRadioButton(self.alphaNumericType, self.stringBlock,  self.selectedType==Block.STRING_BLOCK)
        
    def onClickCommandType(self, sender=None):
        self.selectedType = Block.STATEMENT_BLOCK
        self.enableRadioButton(self.alphaNumericType, self.stringBlock,  False)
        self.enableRadioButton(self.numericType,      self.numberBlock,  False)
        self.enableRadioButton(self.logicType,        self.booleanBlock, False)
        self.enableRadioButton(self.commandType,      self.commandBlock, True)
        
    def onClickLogicType(self, sender=None):
        self.selectedType = Block.BOOLEAN_BLOCK
        self.enableRadioButton(self.alphaNumericType, self.stringBlock,  False)
        self.enableRadioButton(self.numericType,      self.numberBlock,  False)
        self.enableRadioButton(self.logicType,        self.booleanBlock, True)
        self.enableRadioButton(self.commandType,      self.commandBlock, False)
            
    def onClickNumericType(self, sender=None):
        self.selectedType = Block.NUMBER_BLOCK
        self.enableRadioButton(self.alphaNumericType, self.stringBlock,  False)
        self.enableRadioButton(self.numericType,      self.numberBlock,  True)
        self.enableRadioButton(self.logicType,        self.booleanBlock, False)
        self.enableRadioButton(self.commandType,      self.commandBlock, False)
        
    def onClickAlphanumericType(self, sender=None):
        self.selectedType = Block.STRING_BLOCK
        self.enableRadioButton(self.alphaNumericType, self.stringBlock,  True)
        self.enableRadioButton(self.numericType,      self.numberBlock,  False)
        self.enableRadioButton(self.logicType,        self.booleanBlock, False)
        self.enableRadioButton(self.commandType,      self.commandBlock, False)
        
    def enableRadioButton(self, radio, block, enable):
        fake = Element(Element=DOM.createDiv())
        if enable: block.removeStyleName('disabled')
        else: block.addStyleName('disabled')
        fake.append(block)
        radio.setHTML(fake.getElement().innerHTML)
