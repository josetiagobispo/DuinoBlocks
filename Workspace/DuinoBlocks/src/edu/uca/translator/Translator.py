from edu.uca.translator import TranslatorBlockFactory
from edu.uca.util.ASCII import asciize

class Translator(object):
    variableUserPrefix   = "usr"
    variableSystemPrefix = "syst"

    def __init__(self):
        self.reset()

    def translate(self, loopBlock, rootSetupBlock=None):
        self.reset()

        if rootSetupBlock is not None:
            translatorBlock = getattr(TranslatorBlockFactory, rootSetupBlock.name)(rootSetupBlock, self)
            while translatorBlock != None:
                self.addSetupCommand(translatorBlock.toCode())
                translatorBlock = translatorBlock.nextTranslatorBlock()
            
        loopCommand = getattr(TranslatorBlockFactory, loopBlock.name)(loopBlock, self).toCode()
        headerCommand = ""
        if len(self.headerFileSet) > 0:
            for file_ in self.headerFileSet:
                headerCommand = headerCommand + "#include <" + file_ + ">\n"
            headerCommand = headerCommand + "\n"
        
        if len(self.definitionSet) > 0:
            for command in self.definitionSet:
                headerCommand = headerCommand + command + "\n"
            headerCommand = headerCommand + "\n"
        
        headerCommand = headerCommand + "void setup(){\n"
        if len(self.inputPinSet) > 0:
            for pinNumber in self.inputPinSet:
                headerCommand = headerCommand + "pinMode(" + pinNumber + ", INPUT);\n"
        
        if len(self.outputPinSet) > 0:
            for pinNumber in self.outputPinSet:
                headerCommand = headerCommand + "pinMode(" + pinNumber + ", OUTPUT);\n"
        
        if len(self.setupSet) > 0:
            for command in self.setupSet:
                headerCommand = headerCommand + command# + "\n"
        
        headerCommand = headerCommand + "}\n\n"
        program = headerCommand + loopCommand
        return program
    
    def buildVariableName(self, reference=''):
        if reference == '':
            self.variableSystemCnt = self.variableSystemCnt + 1
            varName = self.variableSystemPrefix + str(self.variableSystemCnt)
        else:
            reference = asciize(reference)
            self.variableUserCnt = self.variableUserCnt + 1
            varName = self.variableUserPrefix + str(self.variableUserCnt) + "_"
        i = 0
        while i < len(reference):
            c = reference[i];
            if c.isalnum() or (c == '_'): varName = varName + c
            i += 1
        return varName
    
    def buildDefinitionName(self, reference):
        reference = asciize(reference)
        self.variableUserCnt = self.variableUserCnt + 1
        DefinitionName = self.variableUserPrefix + str(self.variableUserCnt) + "_"
        i = 0
        while i < len(reference):
            c = reference[i];
            if c.isalnum() or (c == '_'): DefinitionName = DefinitionName + c
            i += 1
        return DefinitionName

    def getBlockAdaptor(self):
        return self.blockAdaptor

    def reset(self):
        self.headerFileSet      = set([])
        self.definitionSet      = set([])
        self.setupSet           = set([])
        self.inputPinSet        = set([])
        self.outputPinSet       = set([])
        self.numberVariableSet  = {}
        self.booleanVariableSet = {}
        self.stringVariableSet  = {}
        self.variableUserCnt    = 0
        self.variableSystemCnt  = 0
        self.definitionMethod   = {}

    def addHeaderFile(self, headerFile):
        self.headerFileSet.add(headerFile)
        
    def addDefinitionCommand(self, command):
        self.definitionSet.add(command)

    def addSetupCommand(self, command):
        self.setupSet.add(command)

    def addInputPin(self, pinNumber):
        self.inputPinSet.add(pinNumber)

    def addOutputPin(self, pinNumber):
        self.outputPinSet.add(pinNumber)

    def getNumberVariable(self, userVarName):
        return self.numberVariableSet.get(userVarName)

    def getBooleanVariable(self, userVarName):
        return self.booleanVariableSet.get(userVarName)
    
    def getStringVariable(self, userVarName):
        return self.stringVariableSet.get(userVarName)
    
    def getDefinitionMethod(self, userMethodName):
        return self.definitionMethod.get(userMethodName)

    def addNumberVariable(self, userVarName, internalName):
        self.numberVariableSet[userVarName] = internalName

    def addBooleanVariable(self, userVarName, internalName):
        self.booleanVariableSet[userVarName] = internalName
        
    def addStringVariable(self, userVarName, internalName):
        self.stringVariableSet[userVarName] = internalName
        
    def addDefinitionMethod(self, userMethodName, internalName):
        self.definitionMethod[userMethodName] = internalName
