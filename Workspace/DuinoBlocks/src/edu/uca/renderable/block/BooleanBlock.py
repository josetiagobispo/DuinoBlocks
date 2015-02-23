from edu.uca.renderable.block.Block import Block
from pyjamas.ui.Widget import Widget
from pyjamas import DOM

def drawBooleanBlock(s, c): 
        s.addStyleName('variable bool '+c)
        
        s.tl = Widget(Element=DOM.createDiv(), StyleName='tl')
        t    = Widget(Element=DOM.createDiv(), StyleName='t')
        s.tr = Widget(Element=DOM.createDiv(), StyleName='tr')
        b    = Widget(Element=DOM.createDiv(), StyleName='b')
        s.br = Widget(Element=DOM.createDiv(), StyleName='br')
        s.bl = Widget(Element=DOM.createDiv(), StyleName='bl')
        
        s.append(s.tl)
        s.append(t)        
        s.append(s.tr)        
        s.append(b)        
        s.append(s.br)
        s.append(s.bl)

def resizeBooleanBlock(self, maxArgs=0):          
        h = 14+maxArgs*3      
        self.tr.setStyleAttribute({'right': -h-2, 'width': h+3, 'height': h})
        self.br.setStyleAttribute({'right': -h-2, 'width': h+3, 'height': h})
        self.tl.setStyleAttribute({'left' : -h-2, 'width': h+3, 'height': h})
        self.bl.setStyleAttribute({'left' : -h-2, 'width': h+3, 'height': h})
        self.setStyleAttribute({'marginLeft': h+2, 'marginRight': h+2}) 
                
class BooleanBlock(Block):
    
    def __init__(self, name, color='green'):
        Block.__init__(self, name, Block.BOOLEAN_BLOCK)
        self.color = color
        drawBooleanBlock(self, color)
        Block.drawBlock(self)
        self.resize()
            
    def resize(self):
        resizeBooleanBlock(self, self.maxArgs())
        Block.resize(self)
        