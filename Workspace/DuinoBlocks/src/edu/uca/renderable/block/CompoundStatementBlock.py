from edu.uca.renderable.argument.BlockHolder import BlockHolder
from edu.uca.renderable.Element import Element
from edu.uca.renderable.block.Block import Block
from pyjamas.ui.Widget import Widget
from pyjamas import DOM
from edu.uca.renderable.argument.StatementArgument import StatementArgument
from edu.uca.renderable.GroupElement import GroupElement
from edu.uca.renderable.block.StatementBlock import drawStatementBlock
from edu.uca.renderable.CodeElement import CodeElement

def drawCompoundStatementBlock(s, color='orange', hasBn=True, loop=False):
    s.bn.addStyleName('i')
    s.bl.addStyleName('i')
      
    c  = Element(Element=DOM.createDiv(), StyleName='c '+color)  
    bi = Widget(Element=DOM.createDiv(), StyleName='bi')    
    ti = Widget(Element=DOM.createDiv(), StyleName='ti')
    
    s.code = Element(Element=DOM.createDiv(), StyleName='codeBlockContents '+color)     
    s.block = StatementElement(color, hasBn)    
    s.block.addStyleName('codeBlockEnd')
        
    c.append(ti)
    c.append(s.code)
    s.block.append(bi)
    if loop: s.block.append(Widget(Element=DOM.createDiv(), StyleName='loop'))
    c.append(s.block)
    s.bl.append(c)
            
def resizeCompoundStatementBlock(self):
    self.maxA = self.maxArgs()
    if self.maxA == 0: self.height = 20
    else: self.height = 28+(self.maxA-1)*6
        
    self.mb = 52+(self.qty-1)*52          
    for i in range(len(self.holderChildren)):
        if self.holderChildren[i] is not None:
            if self.holderChildren[i].subBlock is not None:
                if 'invisible' not in self.holderChildren[i].subBlock.getStyleName():
                    self.mb = self.mb + self.holderChildren[i].subBlock.mb + 5 + self.holderChildren[i].subBlock.maxA*6
                    if self.holderChildren[i].subBlock.maxA > 0:
                        self.mb = self.mb + 2
                    
    if self.holderSiblingDown is not None:                 
        if self.holderSiblingDown.subBlock is not None:       
            if 'invisible' not in self.holderSiblingDown.subBlock.getStyleName():
                self.mb = self.mb + self.holderSiblingDown.subBlock.mb + 5 + self.holderSiblingDown.subBlock.height
                
    self.setStyleAttribute('marginBottom', self.mb)        
    Block.resize(self)
              
class CompoundStatementBlock(Block): 
     
    def __init__(self, name, qty=1, color='orange', loop=False):
        Block.__init__(self, name, Block.STATEMENT_BLOCK)
        self.mb = 52+(qty-1)*52
        self.setStyleAttribute('marginBottom', self.mb)
        self.height = 20
        self.maxA = 0
        self.qty = qty
        self.color = color
        
        drawStatementBlock(self, color)
        self.holderSiblingUp = BlockHolder(StatementArgument(StatementArgument.UP_ARG), self, True)        
        self.tl.append(self.holderSiblingUp)
        Block.drawBlock(self)
        
        statement = self
        for i in range(qty):
            drawCompoundStatementBlock(statement, color, loop=(loop and i==qty-1))
            
            statement.holderChild = BlockHolder(StatementArgument(StatementArgument.CHILD_ARG, i), self)  
            statement.code.append(statement.holderChild)
            self.holderChildren.append(statement.holderChild)   
            
            statement = statement.block            
            if i != qty-1: statement.setStyleAttribute('marginBottom', '0px')
                
        self.holderSiblingDown = BlockHolder(StatementArgument(StatementArgument.DOWN_ARG), self)     
        statement.bl.append(self.holderSiblingDown)
        
    def changeTexts(self):
        Block.changeTexts(self)
        self.block.changeTexts()
        
    def resize(self):
        resizeCompoundStatementBlock(self)
                 
class StatementElement(Element):
    
    def __init__(self, color='blue', hasBn=True):
        self.color = color
        Element.__init__(self, Element=DOM.createDiv(), StyleName=self.color)       
        drawStatementBlock(self, color, hasBn)
        self.ge = GroupElement()
        self.append(self.ge)
        self.holderArguments = []
    
    def changeTexts(self):
        for e in self.ge.subElements:
            if isinstance(e, CodeElement):
                e.changeTexts()
                    
    def addCodeElement(self, code='', group=None):
        self.ge.drawSubElement(CodeElement(code, group))
        
    def addArgumentHolder(self, ah):        
        self.ge.drawSubElement(ah)
        self.holderArguments.append(ah)
    
    
    