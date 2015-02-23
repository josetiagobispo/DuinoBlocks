#!/usr/local/bin/python
# -*- coding: utf-8 -*-

#from edu.uca.util.History import History utf
from pyjamas.media.Audio import Audio
from __pyjamas__ import JS
soundIn = Audio('../sounds/in.wav')
#soundOut = Audio('../sounds/out.mp3')

workspace = None

blockList = None
blocksPad = None
hardwaresList = None
harwaresPad = None
codePanel = None
headerPanel = None

movingBlock = None
mainBlock = None

blocks = [] # lista de todos os blocos, inclusive os inseridos no popup editor de blocos
#talvez fazer um dicionario onde a chave é o id do blockspad
hardwares = {} # key=text+number, value=ComponentBlock
countComponents = {} # key=name, value=[list of text+number]
createdBlocks = {} # createdBlocks[nameBlock] = popupBlockEditor

vars = {}
logicVars = []
numericVars = []
alphaNumericVars = []
# transformar em map chave=tipo, valor=valor

states = []
stateIndex = -1
stateMax = 6
# reload nessas vars?

#history = History()
#undo = None

def getWorkspace():
    global workspace
    if not workspace is None:
        return workspace
    workspace = Workspace()    
    return workspace
 
class Workspace(object):
    
    def reload(self):
        self.setMainBlock(None)
        self.setMovingBlock(None)
        self.clearBlocks()
        blocksPad.reload()
        hardwaresPad.reload()
        blockList.reload()
        #codePanel.setText("")
        JS('''$doc.defaultView.editor.getSession().setValue();''');
        for popup in createdBlocks.values():
            popup.hide()
        createdBlocks.clear()
        countComponents.clear()
        hardwares.clear()
        while (len(alphaNumericVars)>0):
            alphaNumericVars.remove(alphaNumericVars[0])
        while (len(numericVars)>0):
            numericVars.remove(numericVars[0])
        while (len(logicVars)>0):
            logicVars.remove(logicVars[0])
            
    def getBlocks(self):
        global blocks
        return blocks
    
    def clearBlocks(self):
        global blocks
        blocks = []
        
    def addBlock(self, b):     
        global blocks
        blocks.append(b)
        
    def removeBlock(self, b):     
        global blocks
        blocks.remove(b)
        
    def setBlockList(self, bl):
        global blockList
        blockList = bl
    
    def getBlockList(self):
        global blockList
        return blockList
    
    def setBlocksPad(self, bp):
        global blocksPad
        blocksPad = bp

    def getBlocksPad(self):
        global blocksPad
        return blocksPad
    
    def setHardwaresList(self, hl):
        global hardwaresList
        hardwaresList = hl
    
    def getHardwaresList(self):
        global hardwaresList
        return hardwaresList
    
    def setHardwaresPad(self, hp):
        global hardwaresPad
        hardwaresPad = hp

    def getHardwaresPad(self):
        global hardwaresPad
        return hardwaresPad
    
    def setMovingBlock(self, mb):
        global movingBlock
        movingBlock = mb
    
    def getMovingBlock(self):
        global movingBlock
        return movingBlock
    
    def getMainBlock(self):
        global mainBlock
        return mainBlock
    
    def setMainBlock(self, mb):
        global mainBlock
        mainBlock = mb
        
    def getCodePanel(self):
        global codePanel
        return codePanel
    
    def setCodePanel(self, cp):
        global codePanel
        codePanel = cp
        
    def getHeaderPanel(self):
        global headerPanel
        return headerPanel
    
    def setHeaderPanel(self, hp):
        global headerPanel
        headerPanel = hp
        
    def cloneBlock(self, block):
        from edu.uca.renderable.block import ArduinoBlocks
        if block.custom: clone = getattr(ArduinoBlocks, block.name)(block.varName, block.color)
        else: clone = getattr(ArduinoBlocks, block.name)()   
        if block.varName is not '' and not block.custom: clone.dropDownVarName.setValue(block.varName)  
        clone.changeTexts()
        return clone
    
    def cloneStack(self, stack):
        pass
    
    #def setUndo(self, u):
    #    global undo
    #    undo = u
        
    #def getUndo(self):
    #    global undo
    #    return undo
                