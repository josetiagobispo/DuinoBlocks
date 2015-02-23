from edu.uca.renderable.block.Block import Block
from pyjamas.ui.Widget import Widget
from pyjamas import DOM
              
def drawNumberBlock(s, c, numOrStr='num'):
    s.addStyleName('variable '+numOrStr+' '+c)
    
    tl  = Widget(Element=DOM.createDiv(), StyleName='tl')
    t   = Widget(Element=DOM.createDiv(), StyleName='t')
    tr  = Widget(Element=DOM.createDiv(), StyleName='tr')
    s.l = Widget(Element=DOM.createDiv(), StyleName='l')
    s.r = Widget(Element=DOM.createDiv(), StyleName='r')
    b   = Widget(Element=DOM.createDiv(), StyleName='b')
    br  = Widget(Element=DOM.createDiv(), StyleName='br')        
    bl  = Widget(Element=DOM.createDiv(), StyleName='bl')
    
    s.append(tl)        
    s.append(t)
    s.append(tr)
    s.append(s.l)
    s.append(s.r)
    s.append(b)
    s.append(br)
    s.append(bl)
    
def resizeNumberBlock(self):
    h = 8+self.maxArgs()*6
    self.l.setHeight(h)
    self.r.setHeight(h)
        
class NumberBlock(Block):
    
    def __init__(self, name, color='green'):
        Block.__init__(self, name, Block.NUMBER_BLOCK)
        self.color = color   
        drawNumberBlock(self, color)
        Block.drawBlock(self)
        resizeNumberBlock(self)
        
    def resize(self):
        resizeNumberBlock(self)
        Block.resize(self)
