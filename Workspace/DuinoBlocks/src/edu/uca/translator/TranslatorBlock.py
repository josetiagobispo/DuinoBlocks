from edu.uca.translator import TranslatorBlockFactory
from edu.uca.renderable.block.MainBlock import MainBlock
from edu.uca.renderable.block.Block import Block
from edu.uca.Workspace import createdBlocks, hardwares
from edu.uca.util.ASCII import asciize
from edu.uca.translator.exception.ComponentBlockNotFoundException import ComponentBlockNotFoundException
from edu.uca.translator.exception.VariableNameNullException import VariableNameNullException
from edu.uca.translator.exception.ComponentPinNullException import ComponentPinNullException
from edu.uca.translator.exception.SocketNullException import SocketNullException

class TranslatorBlock(object):
    
    def __init__(self, block, translator):
        self.block = block
        self.translator = translator
    
    def getTranslatorBlockAtChildrenSocket(self, index):
        try:
            return getattr(TranslatorBlockFactory, self.block.holderChildren[index].subBlock.name)(self.block.holderChildren[index].subBlock, self.translator)        
        except:
            return None
    
    def nextTranslatorBlock(self):
        try:
            if isinstance(self.block.holderSiblingDown.subBlock, MainBlock):
                return None
            return getattr(TranslatorBlockFactory, self.block.holderSiblingDown.subBlock.name)(self.block.holderSiblingDown.subBlock, self.translator)
        except:
            return None
    
    def getRequiredTranslatorBlockAtArgumentsSocket(self, index):
        if self.block.holderArguments[index].subBlock is not None:
            return getattr(TranslatorBlockFactory, self.block.holderArguments[index].subBlock.name)(self.block.holderArguments[index].subBlock, self.translator)
        elif self.block.holderArguments[index].getArgumentValue() is not None:
            return getattr(TranslatorBlockFactory, 'Const')(self.block.holderArguments[index].getArgumentValue())
        else:
            raise SocketNullException(self.block, index)
        
    def getRequiredVariableName(self):
        if self.block.varName != '':
            return asciize(self.block.varName)
        else:
            raise VariableNameNullException(self.block)
        
    def getRequiredTranslatorReturnBlock(self):
        ret = createdBlocks[self.block.varName].ret
        if ret.holderArguments[0].subBlock is not None:
            return getattr(TranslatorBlockFactory, ret.holderArguments[0].subBlock.name)(ret.holderArguments[0].subBlock, self.translator)
        elif ret.holderArguments[0].getArgumentValue() is not None:
            return getattr(TranslatorBlockFactory, 'Const')(ret.holderArguments[0].getArgumentValue())
        else:
            raise SocketNullException(ret, 0)
        
    def getRequiredTranslatorHatBlock(self):
        return getattr(TranslatorBlockFactory, 'hat')(createdBlocks[self.block.varName].hatBlock, self.translator)
         
    def getReturnType(self):
        if   self.block.blockType == Block.STATEMENT_BLOCK: return 'void'
        elif self.block.blockType == Block.NUMBER_BLOCK:    return 'int'
        elif self.block.blockType == Block.BOOLEAN_BLOCK:   return 'boolean'
        elif self.block.blockType == Block.STRING_BLOCK:    return 'String'
        
    def getRequiredComponentPin(self, index):
        try: componentBlock = hardwares[self.block.varName] # obtem o componente
        except: raise ComponentBlockNotFoundException(self.block)
        pin = componentBlock.getPinAtArgument(index)# obtem o pino
        if pin is None: raise ComponentPinNullException(self.block, index) # trocar para o componente
        return pin
        
            
        