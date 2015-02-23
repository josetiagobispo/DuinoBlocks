
class ComponentPinNullException(object):

    def __init__(self, block, index):
        self.block = block
        self.index = index
    
    def getError(self):
        return 'Pino ausente no componente'
