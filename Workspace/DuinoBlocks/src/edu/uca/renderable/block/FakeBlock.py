from pyjamas import DOM
from edu.uca.renderable.Element import Element
from edu.uca.renderable.CodeElement import CodeElement
from edu.uca.renderable.GroupElement import GroupElement
from edu.uca.renderable.block.StatementBlock import drawStatementBlock
from edu.uca.renderable.argument.NumberArgument import drawNumberArgument
from edu.uca.renderable.argument.BooleanArgument import drawBooleanArgument
from edu.uca.renderable.block.CompoundStatementBlock import drawCompoundStatementBlock
from edu.uca.renderable.block.BooleanBlock import drawBooleanBlock, resizeBooleanBlock
from edu.uca.renderable.block.NumberBlock import drawNumberBlock
from edu.uca.renderable.argument.DropdownNumberArgument import drawDropdownNumberArgument
from edu.uca.renderable.argument.DropdownBooleanArgument import drawDropdownBooleanArgument
from edu.uca.renderable.VariableElement import VariableElement
from edu.uca.renderable.hardware.DropdownPin import drawDropdownPin
from edu.uca.renderable.hardware.ComponentBlock import drawComponentBlock, addArgument
from edu.uca.renderable.argument.DropdownStringArgument import drawDropdownStringArgument


class FakeBlock(Element):   
    def __init__(self, name, color):
        Element.__init__(self, Element=DOM.createDiv())
        self.addStyleName('block')
        self.holderArguments = []
        self.ge = GroupElement()
        self.varName = name
        self.color = color
        self.dropDownVarName = None
    def drawBlock(self):
        self.append(self.ge)    
    def addCodeElement(self, code=''):
        self.ge.drawSubElement(CodeElement(code, group=None))
    def addVariableElement(self, varType):    
        self.dropDownVarName = VariableElement(self, varType)
        self.ge.drawSubElement(self.dropDownVarName)
    def addArgumentHolder(self, ah):
        self.ge.drawSubElement(ah)
        self.holderArguments.append(ah)
        
class FakeStatementBlock(FakeBlock):   
    def __init__(self, name, color='blue'): 
        FakeBlock.__init__(self, name, color)
        drawStatementBlock(self, color)
        FakeBlock.drawBlock(self)
        
class FakeCompoundStatementBlock(FakeBlock):   
    def __init__(self, name, qty=1, color='orange', loop=False): 
        FakeBlock.__init__(self, name, color)
        drawStatementBlock(self, color)
        statement = self
        for i in range(qty):
            drawCompoundStatementBlock(statement, color, loop=(loop and i==qty-1))
            statement = statement.block
        FakeBlock.drawBlock(self)
        self.setStyleAttribute('marginBottom', 52+(qty-1)*52)    

class FakeMainBlock(FakeBlock):   
    def __init__(self, name, color='orange'):
        FakeBlock.__init__(self, name, color)
        drawStatementBlock(self, color)
        FakeBlock.drawBlock(self) 
        drawCompoundStatementBlock(self, color, hasBn=False)
        self.setStyleAttribute('marginBottom', 52)       
        
class FakeBooleanBlock(FakeBlock):   
    def __init__(self, name, color='green'):
        FakeBlock.__init__(self, name, color)
        drawBooleanBlock(self, color)
        FakeBlock.drawBlock(self)
        resizeBooleanBlock(self)
        
class FakeNumberBlock(FakeBlock):    
    def __init__(self, name, color='green'):
        FakeBlock.__init__(self, name, color)
        drawNumberBlock(self, color)
        FakeBlock.drawBlock(self)
        
class FakeStringBlock(FakeBlock):    
    def __init__(self, name, color='green'):
        FakeBlock.__init__(self, name, color)
        drawNumberBlock(self, color, '')
        FakeBlock.drawBlock(self)
        
class FakeBlockHolder(Element):   
    def __init__(self, arg, block):
        Element.__init__(self, Element=DOM.createDiv())
        self.argument = arg
        self.append(arg)
        
class FakeNumberArgument(Element):   
    def __init__(self):
        Element.__init__(self, Element=DOM.createDiv())
        drawNumberArgument(self)
        
class FakeStringArgument(Element):   
    def __init__(self):
        Element.__init__(self, Element=DOM.createDiv())
        drawNumberArgument(self, '')        
        
class FakeDropdownNumberArgument(FakeNumberArgument):
    def __init__(self, values):
        FakeNumberArgument.__init__(self)
        drawDropdownNumberArgument(self, values, None, None)

class FakeDropdownStringArgument(FakeStringArgument):
    def __init__(self, values):
        FakeStringArgument.__init__(self)
        drawDropdownStringArgument(self, values, None, None)
        
class FakeBooleanArgument(Element):
    def __init__(self):
        Element.__init__(self, Element=DOM.createDiv())
        drawBooleanArgument(self)
        
class FakeDropdownBooleanArgument(FakeBooleanArgument):
    def __init__(self, values):
        FakeBooleanArgument.__init__(self)
        drawDropdownBooleanArgument(self, values, None, None)
        
class FakeComponentBlock(Element):
    def __init__(self, name, text, mode):
        Element.__init__(self, Element=DOM.createDiv())
        self.name = name
        self.text = text
        self.mode = mode
        drawComponentBlock(self)
    def addArgument(self, arg):
        addArgument(self, arg)
    def setText(self, text):
        DOM.setInnerHTML(self.td.getElement(), text)
    
class FakeDropdownPin(Element):
    def __init__(self, component, mode, label='', **kw):
        Element.__init__(self, Element=DOM.createElement('li'), **kw)
        self.text = 'selecionar pino'
        self.label = label
        drawDropdownPin(self)
        