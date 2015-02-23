#!/usr/local/bin/python
# -*- coding: utf-8 -*-

from pyjamas.ui.HorizontalPanel import HorizontalPanel
from edu.uca.renderable.block import ArduinoBlocks
from pyjamas.ui.VerticalPanel import VerticalPanel
from edu.uca.renderable.Element import Element
from pyjamas.ui.RadioButton import RadioButton
from pyjamas.ui.Label import Label
from pyjamas import DOM

class ChooseCategoryBlockPanel(HorizontalPanel):
    
    CONTROL   = 'control'
    OPERATORS = 'operators'
    INPUT     = 'input'
    OUTPUT    = 'output'
    UTILITIES = 'utilities'
    VARIBLES  = 'variables'
    
    def __init__(self, categoryChangeListener):
        HorizontalPanel.__init__(self, StyleName="category_block select_block", Width='100%')
        self.categoryChangeListener = categoryChangeListener
        
        self.add(Label('Categoria:'))   
        verticalPanel = VerticalPanel(Width='100%')
        self.add(verticalPanel)   
        horizontalPanel = HorizontalPanel(Width='100%')
        verticalPanel.add(horizontalPanel)    
        
        fake = Element(Element=DOM.createDiv())
        
        self.control = getattr(ArduinoBlocks, 'alphaNumericType')('Controle', 'orange', off=True)
        fake.append(self.control)
        self.controlType = RadioButton("groupCategory", fake.getElement().innerHTML, True)
        self.controlType.setChecked(True)
        self.controlType.addClickListener(getattr(self, "onClickControlType"))
        horizontalPanel.add(self.controlType)
        fake.removeAll()
        
        self.operators = getattr(ArduinoBlocks, 'alphaNumericType')('Operadores', 'green', off=True)
        fake.append(self.operators)
        self.operatorsType = RadioButton("groupCategory", fake.getElement().innerHTML, True)
        self.operatorsType.addClickListener(getattr(self, "onClickOperatorsType"))
        horizontalPanel.add(self.operatorsType)
        horizontalPanel = HorizontalPanel(Width='100%')
        verticalPanel.add(horizontalPanel)
        fake.removeAll()
        
        self.input = getattr(ArduinoBlocks, 'alphaNumericType')('Entrada', 'purple', off=True)
        fake.append(self.input)
        self.inputType = RadioButton("groupCategory", fake.getElement().innerHTML, True)
        self.inputType.addClickListener(getattr(self, "onClickInputType"))
        horizontalPanel.add(self.inputType)
        fake.removeAll()
        
        self.output = getattr(ArduinoBlocks, 'alphaNumericType')('Saida', 'blue', off=True)
        fake.append(self.output)
        self.outputType = RadioButton("groupCategory", fake.getElement().innerHTML, True)
        self.outputType.addClickListener(getattr(self, "onClickOutputType"))
        horizontalPanel.add(self.outputType)
        horizontalPanel = HorizontalPanel(Width='100%')
        verticalPanel.add(horizontalPanel) 
        fake.removeAll()
        
        self.utilities = getattr(ArduinoBlocks, 'alphaNumericType')('Utilitarios', 'darkblue', off=True)
        fake.append(self.utilities)
        self.utilitiesType = RadioButton("groupCategory", fake.getElement().innerHTML, True)
        self.utilitiesType.addClickListener(getattr(self, "onClickUtilitiesType"))
        horizontalPanel.add(self.utilitiesType)
        fake.removeAll()
        
        self.variables = getattr(ArduinoBlocks, 'alphaNumericType')('Variaveis', 'red', off=True)
        fake.append(self.variables)
        self.variablesType = RadioButton("groupCategory", fake.getElement().innerHTML, True)
        self.variablesType.addClickListener(getattr(self, "onClickVariablesType"))
        horizontalPanel.add(self.variablesType)
        
        self.onClickControlType()
        
    def onClickControlType(self, sender=None):
        self.selectedType = ChooseCategoryBlockPanel.CONTROL
        self.enableRadioButton(self.variablesType, self.variables, False)
        self.enableRadioButton(self.utilitiesType, self.utilities, False)
        self.enableRadioButton(self.outputType,    self.output,    False)
        self.enableRadioButton(self.inputType,     self.input,     False)
        self.enableRadioButton(self.operatorsType, self.operators, False)
        self.enableRadioButton(self.controlType,   self.control,   True)
        self.categoryChangeListener('orange')
        
    def onClickOperatorsType(self, sender=None):
        self.selectedType = ChooseCategoryBlockPanel.OPERATORS
        self.enableRadioButton(self.variablesType, self.variables, False)
        self.enableRadioButton(self.utilitiesType, self.utilities, False)
        self.enableRadioButton(self.outputType,    self.output,    False)
        self.enableRadioButton(self.inputType,     self.input,     False)
        self.enableRadioButton(self.operatorsType, self.operators, True)
        self.enableRadioButton(self.controlType,   self.control,   False)
        self.categoryChangeListener('green')
            
    def onClickInputType(self, sender=None):
        self.selectedType = ChooseCategoryBlockPanel.INPUT
        self.enableRadioButton(self.variablesType, self.variables, False)
        self.enableRadioButton(self.utilitiesType, self.utilities, False)
        self.enableRadioButton(self.outputType,    self.output,    False)
        self.enableRadioButton(self.inputType,     self.input,     True)
        self.enableRadioButton(self.operatorsType, self.operators, False)
        self.enableRadioButton(self.controlType,   self.control,   False)
        self.categoryChangeListener('purple')
        
    def onClickOutputType(self, sender=None):
        self.selectedType = ChooseCategoryBlockPanel.OUTPUT
        self.enableRadioButton(self.variablesType, self.variables, False)
        self.enableRadioButton(self.utilitiesType, self.utilities, False)
        self.enableRadioButton(self.outputType,    self.output,    True)
        self.enableRadioButton(self.inputType,     self.input,     False)
        self.enableRadioButton(self.operatorsType, self.operators, False)
        self.enableRadioButton(self.controlType,   self.control,   False)
        self.categoryChangeListener('blue')
        
    def onClickUtilitiesType(self, sender=None):
        self.selectedType = ChooseCategoryBlockPanel.UTILITIES
        self.enableRadioButton(self.variablesType, self.variables, False)
        self.enableRadioButton(self.utilitiesType, self.utilities, True)
        self.enableRadioButton(self.outputType,    self.output,    False)
        self.enableRadioButton(self.inputType,     self.input,     False)
        self.enableRadioButton(self.operatorsType, self.operators, False)
        self.enableRadioButton(self.controlType,   self.control,   False)
        self.categoryChangeListener('darkblue')
        
    def onClickVariablesType(self, sender=None):
        self.selectedType = ChooseCategoryBlockPanel.VARIBLES
        self.enableRadioButton(self.variablesType, self.variables, True)
        self.enableRadioButton(self.utilitiesType, self.utilities, False)
        self.enableRadioButton(self.outputType,    self.output,    False)
        self.enableRadioButton(self.inputType,     self.input,     False)
        self.enableRadioButton(self.operatorsType, self.operators, False)
        self.enableRadioButton(self.controlType,   self.control,   False)
        self.categoryChangeListener('red')
        
    def enableRadioButton(self, radio, block, enable):
        fake = Element(Element=DOM.createDiv())
        if enable: block.removeStyleName('disabled')
        else: block.addStyleName('disabled')
        fake.append(block)
        radio.setHTML(fake.getElement().innerHTML)
