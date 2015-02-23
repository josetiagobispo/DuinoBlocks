from edu.uca.renderable.block.Block import Block
from edu.uca.renderable.block.NumberBlock import drawNumberBlock, resizeNumberBlock
                  
class StringBlock(Block):
    
    def __init__(self, name, color='green'):
        Block.__init__(self, name, Block.STRING_BLOCK)
        self.color = color   
        drawNumberBlock(self, color, '')
        Block.drawBlock(self)
        resizeNumberBlock(self)
        
    def resize(self):
        resizeNumberBlock(self)
        Block.resize(self)
