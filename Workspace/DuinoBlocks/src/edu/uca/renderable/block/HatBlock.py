from edu.uca.renderable.argument.BlockHolder import BlockHolder
from edu.uca.renderable.argument.StatementArgument import StatementArgument
from edu.uca.renderable.block.StatementBlock import drawStatementBlock
from edu.uca.renderable.block.Block import Block
from pyjamas import DOM

class HatBlock(Block): 
     
    def __init__(self, name, color='orange'):
        Block.__init__(self, name, Block.STATEMENT_BLOCK, StyleName='hat')
        self.color = color     
        drawStatementBlock(self, color)
        self.holderSiblingDown = BlockHolder(StatementArgument(StatementArgument.DOWN_ARG), self)
        self.bl.append(self.holderSiblingDown)
        Block.drawBlock(self)      
        DOM.setAttribute(self.getElement(), 'draggable', False)
        
        #self.addCodeElement(name)
        
        #test
        #div = DOM.createDiv()
        #self.ge.drawSubElement()
   
