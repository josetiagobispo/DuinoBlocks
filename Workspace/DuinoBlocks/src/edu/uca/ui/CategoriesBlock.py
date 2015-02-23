#!/usr/local/bin/python
# -*- coding: utf-8 -*-

from edu.uca.Workspace import vars, numericVars, logicVars, alphaNumericVars, createdBlocks
from pyjamas.ui.HorizontalPanel import HorizontalPanel
from pyjamas.ui.VerticalPanel import VerticalPanel
from edu.uca.renderable.block.Block import Block
from edu.uca.util.PopupNewVar import PopupNewVar
from edu.uca.renderable.Element import Element
from pyjamas.ui.FocusWidget import FocusWidget
from edu.uca.util.Dropdown import Dropdown
from edu.uca.util.Button import Button
from edu.uca.util.Popup import Popup
from pyjamas.ui.Widget import Widget
from pyjamas.ui.Label import Label
from pyjamas import DOM

from edu.uca.renderable.block.ArduinoBlocks import forever, if_, if_else_,\
    repeat_, while_, delay_, plus, minus, multiply, divide, equals, lesser,\
    greater, and_, or_, not_, true_, false_, digitalRead, analogRead,\
    digitalWrite, analogWrite, println, intToStr, boolToStr, glue, setNumericVar,\
    getNumericVar, incNumericVar, setLogicVar, getLogicVar, setAlphaNumericVar,\
    getAlphaNumericVar, min_, max_, sqrt_, abs_, sin_, cos_, tan_, decNumericVar,\
    millis, random, random_min_max, StrToInt, str_equals, doWhile, round_,\
    getMsg, waitForAnyMsg, waitForTheMsg, available, delayUntil
    
from edu.uca.util.i18n import _
from pyjamas.ui.Tooltip import TooltipListener
from edu.uca.util.Serializable import stateChange

#----------------------------------------------------------------------------------------------------------------------------

class TabTitle(Widget): #esta igual ao categorieshardware, criar um classe so para os dois
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
        VerticalPanel.__init__(self, StyleName='CategoryPanel')#bug
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
        
    def reload(self):
        if self.myBlocksSubCat is not None: 
            self.remove(self.myBlocksSubCat)
            self.myBlocksSubCat = None
        
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
        self.count = 0
        
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
        
        if block.name in ['commandType', 'numericType', 'logicType', 'alphaNumericType']:
            panel.add(self.getRemoveCustomBlock(block))
            info.addMouseListener(TooltipListener("Editar"))
        else:
            info.addMouseListener(TooltipListener("Ajuda"))
            
    def getRemoveCustomBlock(self, block):
        remove = Label('x', StyleName='remove_btn')
        remove.addMouseListener(TooltipListener("Remover"))
        remove.block = block
        remove.addClickListener(self.RemoveCustomBlock)
        return remove
    
    def RemoveCustomBlock(self, sender):
        self.list.remove(sender.block.getParent())
        self.blocks.remove(sender.block)
        if len(self.blocks) == 0:
            self.getParent().reload()
        del createdBlocks[sender.block.varName]
        stateChange()
        
    def removeBlock(self, block):
        self.list.remove(block.getParent())
        self.blocks.remove(block)
    
    def removeAllBlocks(self):
        while len(self.blocks)>0: 
            self.removeBlock(self.blocks[0])
            
    def addWidget(self, widget):    
        self.list.add(widget)   
        
    def showInfo(self, sender):
        if sender.block.name in ['commandType', 'numericType', 'logicType', 'alphaNumericType']:
            createdBlocks[sender.block.varName].show()
        else:
            popup = Popup('<b>'+_('Help')+'</b>', None, None)
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
        DOM.setInnerHTML(self.title.getElement(), _(self.subCategoryName)+': #'+str(count))
        self.title.add(self.collapse)
        self.count = count
        
#----------------------------------------------------------------------------------------------------------------------------

class Control(CategoryPanel):
    def __init__(self):
        CategoryPanel.__init__(self)
        self.label = 'control_lbl'
        self.subLoop = SubCategoryPanel(_('Loops'), self.label)
        self.mainBlock = forever()
        self.subLoop.addBlock(self.mainBlock, 'help_forever')
        self.subLoop.addBlock(repeat_())
        self.subLoop.addBlock(while_())
        #self.subLoop.addBlock(doWhile()) todo: resize
        self.add(self.subLoop)
        self.sub = SubCategoryPanel(_('Flow Controls'), self.label)
        self.sub.addBlock(if_(), 'help_if')
        self.sub.addBlock(if_else_())
        self.sub.addBlock(delay_())
        self.sub.addBlock(delayUntil())
        self.add(self.sub)
    
    def hideMainBlock(self):
        DOM.setStyleAttribute(self.subLoop.list.getBody().firstChild, 'display', 'none')
    
    def showMainBlock(self):
        DOM.setStyleAttribute(self.subLoop.list.getBody().firstChild, 'display', '')
        
#----------------------------------------------------------------------------------------------------------------------------

class Operators(CategoryPanel):
    def __init__(self):
        CategoryPanel.__init__(self)
        self.label = 'operators_lbl'
        sub = SubCategoryPanel(_('Arithmetic'), self.label)
        sub.addBlock(plus())
        sub.addBlock(minus())
        sub.addBlock(multiply())
        sub.addBlock(divide())
        self.add(sub)
        sub = SubCategoryPanel(_('Relational'), self.label)
        sub.addBlock(equals())
        sub.addBlock(lesser())
        sub.addBlock(greater())
        self.add(sub)
        sub = SubCategoryPanel(_('Logic'), self.label)
        sub.addBlock(and_())
        sub.addBlock(or_())
        sub.addBlock(not_())
        sub.addBlock(true_())
        sub.addBlock(false_())
        self.add(sub)

#----------------------------------------------------------------------------------------------------------------------------

class Input(CategoryPanel): 
    def __init__(self):
        CategoryPanel.__init__(self)
        self.label = 'input_lbl'
        sub = SubCategoryPanel('Genéricos', self.label)
        sub.addBlock(digitalRead())
        sub.addBlock(analogRead())
        self.add(sub)
        self.subComp = {}
    def getSubComp(self, name):
        if name not in self.subComp:
            self.subComp[name] = SubCategoryPanel("Componente "+name, self.label)
            self.add(self.subComp[name])
        return self.subComp[name]    
    def removeAllSubComp(self):
        for sub in self.subComp.values():
            sub.removeAllBlocks()  
            self.remove(sub)
        self.subComp = {}
    def removeSubComp(self, name):
        self.subComp[name].removeAllBlocks()  
        self.remove(self.subComp[name])
        del self.subComp[name] 
    def reload(self):
        self.removeAllSubComp()    
#----------------------------------------------------------------------------------------------------------------------------

class Output(CategoryPanel):
    def __init__(self):
        CategoryPanel.__init__(self)
        self.label = 'output_lbl'
        sub = SubCategoryPanel('Genéricos', self.label)
        sub.addBlock(digitalWrite())
        sub.addBlock(analogWrite())
        self.add(sub)
        self.subComp = {}
    def getSubComp(self, name):
        if name not in self.subComp:
            self.subComp[name] = SubCategoryPanel("Componente "+name, self.label)
            self.add(self.subComp[name])
        return self.subComp[name]
    def removeAllSubComp(self):
        for sub in self.subComp.values():
            sub.removeAllBlocks()
            self.remove(sub)
        self.subComp = {}
    def removeSubComp(self, name):
        self.subComp[name].removeAllBlocks()  
        self.remove(self.subComp[name])
        del self.subComp[name]     
    def reload(self):
        self.removeAllSubComp()
#----------------------------------------------------------------------------------------------------------------------------
        
class Setup(CategoryPanel):
    def __init__(self):
        CategoryPanel.__init__(self)
        self.label = 'config_lbl'
        sub = SubCategoryPanel(_('Alphanumeris Commands'), self.label)        
        sub.addBlock(glue())
        sub.addBlock(intToStr())
        sub.addBlock(boolToStr())
        sub.addBlock(StrToInt())
        sub.addBlock(str_equals())
        self.add(sub)   
        sub = SubCategoryPanel('Comunica&ccedil;&atilde;o Serial', self.label, openList=False)   
        sub.addBlock(println())
        sub.addBlock(available())
        sub.addBlock(getMsg())
        sub.addBlock(waitForAnyMsg())
        sub.addBlock(waitForTheMsg()) 
        self.add(sub)
        sub = SubCategoryPanel(_('Math Functions'), self.label, openList=False)
        sub.addBlock(min_())
        sub.addBlock(max_())
        sub.addBlock(sqrt_())
        sub.addBlock(abs_())
        sub.addBlock(round_())
        #sub.addBlock(modulo_()) Operador
        #sub.addBlock(constrains_()) 
        #sub.addBlock(map_())
        #sub.addBlock(map2_())
        self.add(sub)
        sub = SubCategoryPanel(_('Trigonometrics Functions'), self.label, openList=False)
        sub.addBlock(sin_())
        sub.addBlock(cos_())
        sub.addBlock(tan_())
        self.add(sub)
        sub = SubCategoryPanel(_('Others'), self.label, openList=False)
        sub.addBlock(millis())
        sub.addBlock(random())
        sub.addBlock(random_min_max())
        #sub.addBlock(map_())
        self.add(sub)

#----------------------------------------------------------------------------------------------------------------------------

class Variables(CategoryPanel):
    def __init__(self):
        CategoryPanel.__init__(self)
        self.label = 'variables_lbl'
        
        buttonsTab = SubCategoryPanel()
        self.add(buttonsTab)
        
        self.buttonAddVar = Button(_('Add Variable'), self.addVarClick)
        buttonsTab.addWidget(self.buttonAddVar)
        
        self.dropdownRemoveVar = Dropdown(_('Remove Variable'), self.menuClick, self.itemClick, StyleName='dropdown_btn') 
        self.dropdownRemoveVar.setStyleAttribute('display', 'none')       
        buttonsTab.addWidget(self.dropdownRemoveVar)
        
        self.alphanumericTab = SubCategoryPanel(_('Alphanumerics'), self.label)
        self.numericTab = SubCategoryPanel(_('Numerics'), self.label)
        self.logicTab = SubCategoryPanel(_('Logics'), self.label)
        
        self.genericLogicBlocks = []
        self.genericNumericBlocks = []
        self.genericAlphaNumericBlocks = []
        
    def changeTexts(self):
        CategoryPanel.changeTexts(self)
        self.buttonAddVar.setText(_('Add Variable'))
        self.dropdownRemoveVar.setText(_('Remove Variable'))
    
    def addVarClick(self, sender):
        popup = PopupNewVar(self.popupConfirmNewVar)
        popup.show()
        
    def menuClick(self):
        v = vars#bug!            
        self.dropdownRemoveVar.addValues(v.keys()) 
            
#---------------------------------------------------------------------------------------------------------  
          
    def addGenericNumericBlocks(self, text):
        if len(numericVars) == 0:     
            self.insert(self.numericTab, self.getBody(), 1)
            setVar = setNumericVar()
            incVar = incNumericVar()
            decVar = decNumericVar()
            self.numericTab.addBlock(setVar)
            self.numericTab.addBlock(incVar)
            self.numericTab.addBlock(decVar)
            self.genericNumericBlocks = [setVar, incVar, decVar]            
        numericVars.append(text)       
        getVar = getNumericVar()
        getVar.dropDownVarName.setValue(text)
        self.numericTab.addBlock(getVar)
        self.numericTab.changeTitle(len(numericVars))      
        self.genericNumericBlocks.append(getVar)
        
    def addGenericLogicBlocks(self, text):
        if len(logicVars) == 0: 
            self.insert(self.logicTab, self.getBody(), 1)
            setVar = setLogicVar()
            self.logicTab.addBlock(setVar)
            self.logicTab.genericLogicBlocks = [setVar]
        logicVars.append(text)           
        getVar = getLogicVar()
        getVar.dropDownVarName.setValue(text)
        self.logicTab.addBlock(getVar)
        self.logicTab.changeTitle(len(logicVars))
        self.logicTab.genericLogicBlocks.append(getVar)
        
    def addGenericAlphaNumericBlocks(self, text):
        if len(alphaNumericVars) == 0: 
            self.insert(self.alphanumericTab, self.getBody(), 1)  
            setVar = setAlphaNumericVar()
            self.alphanumericTab.addBlock(setVar)
            self.genericAlphaNumericBlocks = [setVar] 
        alphaNumericVars.append(text)      
        getVar = getAlphaNumericVar()
        getVar.dropDownVarName.setValue(text)
        self.alphanumericTab.addBlock(getVar)
        self.alphanumericTab.changeTitle(len(alphaNumericVars))
        self.genericAlphaNumericBlocks.append(getVar)
 
#---------------------------------------------------------------------------------------------------------
   
    def removeGenericAlphaNumericBlocks(self, text):
        alphaNumericVars.remove(text)       
        if len(alphaNumericVars) == 0: 
            self.remove(self.alphanumericTab)
            self.alphanumericTab.removeAllBlocks()
            self.genericAlphaNumericBlocks = []
        else:
            for b in self.alphanumericTab.blocks: 
                if b.varName == text: removeBlock = b
            self.alphanumericTab.removeBlock(removeBlock)
            self.alphanumericTab.changeTitle(len(alphaNumericVars))
            self.genericAlphaNumericBlocks.remove(removeBlock)            
    
    def removeGenericLogicBlocks(self, text):
        logicVars.remove(text)       
        if len(logicVars) == 0: 
            self.remove(self.logicTab)
            self.logicTab.removeAllBlocks()
            self.genericLogicBlocks = []
        else:
            for b in self.logicTab.blocks: 
                if b.varName == text: removeBlock = b
            self.logicTab.removeBlock(removeBlock)
            self.logicTab.changeTitle(len(logicVars))
            self.genericLogicBlocks.remove(removeBlock)      
    
    def removeGenericNumericBlocks(self, text):
        numericVars.remove(text)       
        if len(numericVars) == 0: 
            self.remove(self.numericTab)
            self.numericTab.removeAllBlocks()
            self.genericNumericBlocks = []
        else:
            for b in self.numericTab.blocks: 
                if b.varName == text: removeBlock = b
            self.numericTab.removeBlock(removeBlock)
            self.numericTab.changeTitle(len(numericVars))
            self.genericNumericBlocks.remove(removeBlock)         
         
#---------------------------------------------------------------------------------------------------------
    
    def popupConfirmNewVar(self, text, typeVar, saveChange=True): #add var   
        if typeVar == Block.NUMBER_BLOCK: self.addGenericNumericBlocks(text)           
        elif typeVar == Block.BOOLEAN_BLOCK: self.addGenericLogicBlocks(text)            
        elif typeVar == Block.STRING_BLOCK: self.addGenericAlphaNumericBlocks(text)
            
        vars[text] = ''    
        if len(vars) > 0: self.dropdownRemoveVar.setStyleAttribute('display', 'block')
            
        if saveChange:
            from edu.uca.util.Serializable import stateChange
            stateChange()
                
    def itemClick(self, value): #remove var
        del vars[value]          
        if len(vars) == 0: self.dropdownRemoveVar.setStyleAttribute('display', 'none')    
               
        if value in alphaNumericVars: self.removeGenericAlphaNumericBlocks(value)
        elif value in numericVars: self.removeGenericNumericBlocks(value)
        elif value in logicVars: self.removeGenericLogicBlocks(value)
                
        from edu.uca.util.Serializable import stateChange
        stateChange()
        
#---------------------------------------------------------------------------------------------------------
            
    def reload(self):
        CategoryPanel.reload(self) 
        v = vars#bug!  
        for key in v.keys(): v.pop(key)
        self.dropdownRemoveVar.setStyleAttribute('display', 'none')
        self.remove(self.alphanumericTab)
        self.remove(self.numericTab)
        self.remove(self.logicTab)
        self.logicTab.removeAllBlocks()
        self.alphanumericTab.removeAllBlocks()
        self.numericTab.removeAllBlocks()
        self.genericLogicBlocks = []
        self.genericAlphaNumericBlocks = []
        self.genericNumericBlocks = []
        
        
        