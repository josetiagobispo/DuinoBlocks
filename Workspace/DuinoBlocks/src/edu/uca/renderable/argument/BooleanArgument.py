from edu.uca.renderable.argument.Argument import Argument
from edu.uca.renderable.block.Block import Block
from pyjamas.ui.Widget import Widget
from pyjamas import DOM
import math
from pyjamas.ui.TextBox import TextBox

def drawBooleanArgument(s):   
    s.addStyleName('input bool')
    
    s.tl    = Widget(Element=DOM.createDiv(), StyleName='tl')
    s.t     = Widget(Element=DOM.createDiv(), StyleName='t')
    s.tr    = Widget(Element=DOM.createDiv(), StyleName='tr')
    s.b     = Widget(Element=DOM.createDiv(), StyleName='b')
    s.br    = Widget(Element=DOM.createDiv(), StyleName='br')
    s.bl    = Widget(Element=DOM.createDiv(), StyleName='bl')
    
    s.append(s.tl)
    s.append(s.t)
    s.append(s.tr)
    s.append(s.b)
    s.append(s.br)
    s.append(s.bl)
        
class BooleanArgument(Argument): 

    def __init__(self):
        Argument.__init__(self, [Block.BOOLEAN_BLOCK])
        self.height = 20
        self.width = 15
        drawBooleanArgument(self)
        self.addInput()
        self.resize()
            
    def addInput(self):
        self.input = TextBox()
        self.input.setWidth(20)
        self.input.addInputListener(self)
        self.append(self.input)  
        DOM.setBooleanAttribute(self.input.getElement(), "readOnly", True)
        self.input.addChangeListener(self)
        
    def onChange(self, sender):
        from edu.uca.util.Serializable import stateChange
        stateChange()
    
    def onInput(self, sender):
        if len(self.input.getText()) == 0: self.input.setWidth(20)# nao esta usando pois nao pode digitar no input bool
        else: self.input.setWidth(20+((len(self.input.getText())-1)*7))
        self.width = self.input.getWidth()  
        self.resize()
        
    def resize(self):
        c = math.ceil(self.height / 2 + 1);     
        self.tr.setStyleAttribute({'right': -c - 2, 'width': c + 3, 'height': c})
        self.br.setStyleAttribute({'right': -c - 2, 'width': c + 3, 'height': c})
        self.tl.setStyleAttribute({'left' : -c - 2, 'width': c + 3, 'height': c})
        self.bl.setStyleAttribute({'left' : -c - 2, 'width': c + 3, 'height': c})       
        self.setStyleAttribute({'width':self.width})
        self.t.setWidth(self.width)
        self.b.setWidth(self.width)
        
