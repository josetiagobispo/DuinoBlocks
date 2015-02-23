from edu.uca.renderable.argument.BlockHolder import BlockHolder
from edu.uca.renderable.block.Block import Block
from edu.uca.renderable.argument.StatementArgument import StatementArgument
from edu.uca.renderable.block.CompoundStatementBlock import drawCompoundStatementBlock, resizeCompoundStatementBlock
from edu.uca.renderable.block.StatementBlock import drawStatementBlock

class MainBlock(Block): 
     
    def __init__(self, name, color='orange'):
        Block.__init__(self, name, Block.END_BLOCK)
        self.mb = 52
        self.setStyleAttribute('marginBottom', self.mb)
        self.height = 20
        self.maxA = 0
        self.qty = 1
        self.color = color
        
        drawStatementBlock(self, color)
        self.holderSiblingUp = BlockHolder(StatementArgument(StatementArgument.UP_ARG), self, True)       
        self.tl.append(self.holderSiblingUp)     
        
        drawCompoundStatementBlock(self, color, hasBn=False, loop=True)
        self.holderChild = BlockHolder(StatementArgument(StatementArgument.CHILD_ARG, 0), self)  
        self.code.append(self.holderChild)
        self.holderChildren.append(self.holderChild)
        
        Block.drawBlock(self)  
            
    def resize(self):
        resizeCompoundStatementBlock(self)
