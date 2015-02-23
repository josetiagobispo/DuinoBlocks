from edu.uca.renderable.Element import Element
from pyjamas.ui.DragWidget import DragWidget
from pyjamas import DOM
from edu.uca.renderable.GroupElement import GroupElement
from edu.uca.renderable.CodeElement import CodeElement
from pyjamas.ui.ClickListener import ClickHandler
from edu.uca.Workspace import getWorkspace
from edu.uca.renderable.argument.BlockHolder import BlockHolder
from pyjamas.ui.MouseListener import MouseHandler
from pyjamas.ui import Focus, Event
from edu.uca.renderable.VariableElement import VariableElement
from edu.uca.renderable.OperationElement import OperationElement

class Block(Element, DragWidget, ClickHandler, MouseHandler):
    
    STATEMENT_BLOCK = 'Statement'
    BOOLEAN_BLOCK = 'Boolean'
    NUMBER_BLOCK = 'Number'
    STRING_BLOCK = 'String'
    HAT_BLOCK = 'Hat'
    END_BLOCK = 'End'
    ge = None
    parentBlock = None   
    
    def __init__(self, name, blockType, original=True, **kw):
        Element.__init__(self, Element=DOM.createDiv(), **kw)
        DragWidget.__init__(self)
        ClickHandler.__init__(self)
        MouseHandler.__init__(self)
        self.blockType = blockType
        self.addStyleName('block')
        self.ge = GroupElement()
        self.addDoubleClickListener(self)
        self.addMouseListener(self)
        self.holderArguments = []
        self.holderSiblingUp = None
        self.holderSiblingDown = None
        self.holderChildren = []
        self.isStartingDrag = False
        self.original = original # identifica se o bloco sera copiado ou movido quando arrastado
        self.name = name # nome do metodo que criou o bloco
        self.varName = '' #nome da variavel OU #nome do bloco
        self.componetHardware = None # nome do harware correspondente, p tratamento de erro
        self.dropDownVarName = None # combobox para escolher a var ou o comp
        self.color = None
        self.blockPad = None
        self.custom = False # indica se o bloco eh um bloco personalizado
        self.buttonRightDown = None
        
    #def onMouseEnter(self, sender):
    #    self.addStyleName('mouseover')

    #def onMouseLeave(self, sender):
    #    self.removeStyleName('mouseover')
    
    
    def maxArgs(self):
        maximum = 0
        for i in range(len(self.holderArguments)):
            count = 0
            if self.holderArguments[i].subBlock is not None:
                if 'invisible' not in self.holderArguments[i].subBlock.getStyleName():
                    count = 1 + self.holderArguments[i].subBlock.maxArgs()
            if maximum < count:
                maximum = count    
        return maximum

#---------------------------------------------------------------------------------------------
                            
    def onDoubleClick(self, sender=None):
        print 'name: ' + str(self.name)
        event = DOM.eventGetCurrentEvent()
        DOM.eventStopPropagation(event)
       
    def onMouseDown( self, sender, x, y ):
        event = DOM.eventGetCurrentEvent()
        event_button = DOM.eventGetButton(event)
        if event_button == Event.BUTTON_RIGHT:
            from edu.uca.renderable.block.MainBlock import MainBlock
            if not self.original and not isinstance(self, MainBlock):         
                self.buttonRightDown = self
            DOM.eventStopPropagation(event)    
            
    def onMouseMove(self, sender, x, y):
        pass

    def onMouseUp(self, sender, x, y):
        event = DOM.eventGetCurrentEvent()
        event_button = DOM.eventGetButton(event)
        if event_button == Event.BUTTON_RIGHT:                   
            from edu.uca.renderable.block.MainBlock import MainBlock
            if self.buttonRightDown == self and not self.original and not isinstance(self, MainBlock):
                print "click Right Button "+self.name
                self.buttonRightDown = None
                from edu.uca.util.Serializable import saveStackBlock, loadStackBlock
                cloneStack = loadStackBlock(saveStackBlock(self))
                cloneStack.changeTexts()
                self.blockPad.addBlock(cloneStack, self.getAbsoluteLeft()+10, self.getAbsoluteTop()+10, False)
            DOM.eventStopPropagation(event)
        

    def onMouseEnter(self, sender):
        pass

    def onMouseLeave(self, sender):
        pass

#---------------------------------------------------------------------------------------------    
    
    def getBeforeBlock(self):
        if self.parentBlock is not None: return self.parentBlock
        return None
        
    def getAfterBlock(self):
        if self.holderSiblingDown is not None:
            if self.holderSiblingDown.subBlock is not None:
                return self.holderSiblingDown.subBlock
        return None
    
    def getFirstBlock(self):
        firstBlock = self
        while firstBlock.getBeforeBlock() is not None: 
            firstBlock = firstBlock.getBeforeBlock()
        return firstBlock
    
    def getLastBlock(self):
        lastBlock = self
        while lastBlock.getAfterBlock() is not None:
            lastBlock = lastBlock.getAfterBlock()
        return lastBlock
    
    def getChildBlock(self, index):
        if self.holderChildren[index] is not None:
            if self.holderChildren[index].subBlock is not None:
                return self.holderChildren[index].subBlock
        return None
        
#---------------------------------------------------------------------------------------------
#---------------------------------------------------------------------------------------------
    def changeTexts(self):
        for e in self.ge.subElements:
            if isinstance(e, CodeElement) or isinstance(e, OperationElement):
                e.changeTexts()
                
        for holderChild in self.holderChildren:
            if holderChild.subBlock is not None:
                holderChild.subBlock.changeTexts()
        
        if self.holderSiblingDown is not None:
            if self.holderSiblingDown.subBlock is not None:
                self.holderSiblingDown.subBlock.changeTexts()
        
    def drawBlock(self):
        self.append(self.ge)
    
    def addCodeElement(self, code='', group=None, groupLabel=None):
        if group is None: self.ge.drawSubElement(CodeElement(code))
        else: self.ge.drawSubElement(OperationElement(code, group, groupLabel, self))
            
    def addVariableElement(self, title, values, key):
        self.componetHardware = key
        self.dropDownVarName = VariableElement(self, title, values, key)
        self.ge.drawSubElement(self.dropDownVarName)
        
    def addArgumentHolder(self, ah):
        self.ge.drawSubElement(ah)
        self.holderArguments.append(ah)
#---------------------------------------------------------------------------------------------
#---------------------------------------------------------------------------------------------           
    def onDragStart(self, event):
        if getWorkspace().getMovingBlock() is None: # proteger dos subblocos
            self.isStartingDrag = True
            self.addStyleName('ondrag')
            getWorkspace().setMovingBlock(self)
                  
    def onDrag(self, event):
        #print 'Bloco: onDrag'
        if getWorkspace().getMovingBlock() == self:
            if not self.original:
                self.addStyleName('invisible')
                
            if self.isStartingDrag:
                self.isStartingDrag = False
                self.addStyleName('ondrag')
                if isinstance(self.parent, BlockHolder):
                    self.parent.argument.setStyleAttribute('display', 'block')
                    self.parent.block.resize()
          
    def onDragEnd(self, event):
        #print 'Bloco: ' +self.name +' onDragEnd'
        if getWorkspace().getMovingBlock() == self:
            self.removeStyleName('invisible')
            if isinstance(self.parent, BlockHolder):
                self.parent.argument.setStyleAttribute('display', 'none')
                self.parent.block.resize()
                # verificar se essas coisas envolta sao necessarias
        self.removeStyleName('ondrag')
        if getWorkspace().getMovingBlock() is not None:
            if getWorkspace().getMovingBlock().blockPad is not None:
                getWorkspace().getMovingBlock().blockPad.removeStyleName('dragover2')
            
    def onDrop(self, event):
        #print 'Block: onDrop'
        pass
#---------------------------------------------------------------------------------------------
        
    def resize(self,):
        if self.parentBlock is not None:
            self.parentBlock.resize()
            
    
    
    #def onMouseEnter(self, sender):
        #print 'Enter '+self.name
        #self.getElement().focus()

    #def onMouseLeave(self, sender):
        #print 'Leave '+self.name
        #self.getElement().blur()
        
#-----------------------------------------------------------------------------------------------
