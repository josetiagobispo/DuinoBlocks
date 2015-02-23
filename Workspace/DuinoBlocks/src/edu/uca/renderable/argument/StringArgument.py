from edu.uca.renderable.argument.Argument import Argument
from edu.uca.renderable.block.Block import Block
from edu.uca.renderable.argument.NumberArgument import drawNumberArgument, onInput, resize, addInput, onChange

class StringArgument(Argument):
   
    def __init__(self, block):
        Argument.__init__(self, [Block.STRING_BLOCK])
        self.block = block
        self.validation = False
        self.height = 16
        self.minWidthInput = 20  
        drawNumberArgument(self, '')       
        addInput(self, 50)
       
    def onInput(self, sender):
        onInput(self, sender, self.block.original)
    
    def onChange(self, sender):
        onChange(self, sender)

    def resize(self):
        resize(self)

#--------------------------------------------------------------------------------------------------------------    
    def getArgumentValue(self):
        if self.input.getText() is not '': return self.input.getText()
        return None    
    
    def setArgumentValue(self, value):
        self.input.setText(value)  
        self.onInput()
#--------------------------------------------------------------------------------------------------------------