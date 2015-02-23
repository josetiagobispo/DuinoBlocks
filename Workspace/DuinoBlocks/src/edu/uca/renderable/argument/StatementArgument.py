from edu.uca.renderable.argument.Argument import Argument
from edu.uca.renderable.block.Block import Block
from edu.uca.Workspace import getWorkspace
from pyjamas import DOM

class StatementArgument(Argument):
   
    UP_ARG    = 'UpStatementBlock'
    CHILD_ARG = 'ChildStatementBlock'
    DOWN_ARG  = 'DownStatementBlock'
    
    def __init__(self, statementArgumentType, index=None):
        Argument.__init__(self, [Block.STATEMENT_BLOCK], StyleName='highlight')
        if statementArgumentType == self.DOWN_ARG:
            self.accepts.append(Block.END_BLOCK)
        self.statementArgumentType = statementArgumentType
        self.index = index
        getWorkspace().getBlocksPad().addBlockDragListener(self)
        getWorkspace().getBlockList().addBlockDragListener(self)
    
    def onBlockDragStart(self, event, block):
        if not self.block.original and self.enable and not DOM.isOrHasChild(block.getElement(), self.getElement()) and block.getLastBlock().blockType in self.accepts:
            if block.getLastBlock().blockType != Block.END_BLOCK or self.block.getAfterBlock() == None:
                if block.getLastBlock().blockType == Block.END_BLOCK:#para nao ficar dentro de compound
                    current = self.block
                    before = self.block.getBeforeBlock()
                    while before is not None:
                        if before.getAfterBlock() != current:
                            return
                        current = before    
                        before = before.getBeforeBlock()
                self.setStyleAttribute('display', 'block')

    def onBlockDragEnd(self, event, block):
        self.setStyleAttribute('display', 'none')
         
        
        