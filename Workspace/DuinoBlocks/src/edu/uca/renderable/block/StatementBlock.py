from pyjamas import DOM
from pyjamas.ui.Widget import Widget
from edu.uca.renderable.block.Block import Block
from edu.uca.renderable.Element import Element
from edu.uca.renderable.argument.BlockHolder import BlockHolder
from edu.uca.renderable.argument.StatementArgument import StatementArgument

def drawStatementBlock(s, c, hasBn=True):
    s.addStyleName('statement '+c)
    
    s.t  = Widget(Element=DOM.createDiv(),  StyleName='t')      
    l    = Widget(Element=DOM.createDiv(),  StyleName='l')   
    r    = Widget(Element=DOM.createDiv(),  StyleName='r')       
    s.tl = Element(Element=DOM.createDiv(), StyleName='tl')       
    s.tr = Widget(Element=DOM.createDiv(),  StyleName='tr')#provisorio pra hat      
    b    = Widget(Element=DOM.createDiv(),  StyleName='b')      
    br   = Widget(Element=DOM.createDiv(),  StyleName='br') 
    s.bl = Element(Element=DOM.createDiv(), StyleName='bl')    

    s.append(s.t)
    s.append(l)
    s.append(r)
    s.append(s.tl)
    s.append(s.tr)
    s.append(b)
    s.append(br)
    if hasBn:
        s.bn = Widget(Element=DOM.createDiv(),  StyleName='bn') 
        s.append(s.bn)
    s.append(s.bl)
        
class StatementBlock(Block): 
    
    def __init__(self, name, color='blue'): 
        Block.__init__(self, name, Block.STATEMENT_BLOCK)
        self.mb = 6
        self.setStyleAttribute('marginBottom', self.mb)
        self.height = 20
        self.maxA = 0
        self.color = color     

        drawStatementBlock(self, color)
        self.holderSiblingDown = BlockHolder(StatementArgument(StatementArgument.DOWN_ARG), self)
        self.holderSiblingUp   = BlockHolder(StatementArgument(StatementArgument.UP_ARG), self, up=True)
        self.tl.append(self.holderSiblingUp)
        self.bl.append(self.holderSiblingDown)
        Block.drawBlock(self)
            
    def resize(self):
        self.maxA = self.maxArgs()
        if self.maxA == 0: self.height = 20
        else: self.height = 28+(self.maxA-1)*6
        self.mb = 6
        if self.dropDownVarName is not None: # gambiarra pq blocos com dropdownmenu sao mais altos
            self.height += 1
            self.mb += 1
        if self.holderSiblingDown.subBlock is not None:
            if 'invisible' not in self.holderSiblingDown.subBlock.getStyleName():
                self.mb = self.mb + self.holderSiblingDown.subBlock.mb + 5 + self.holderSiblingDown.subBlock.height #20        
        self.setStyleAttribute('marginBottom', self.mb)
        Block.resize(self)
