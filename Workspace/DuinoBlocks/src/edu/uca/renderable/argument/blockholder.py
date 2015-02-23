#!/usr/local/bin/python
# -*- coding: utf-8 -*-

from edu.uca.renderable.Element import Element
from edu.uca.Workspace import getWorkspace
from pyjamas import DOM
from edu.uca.util.DragElement import getDropPosition #passar para argument?

class BlockHolder(Element):
    
    def __init__(self, arg, block, up=False):
        Element.__init__(self, Element=DOM.createDiv(), StyleName='holder') 
        self.block = block
        self.up = up #nao faz sentido aqui, passar para o argumento
        self.subBlock = None
        self.argument = arg
        self.append(self.argument)
        self.argument.addDropListener(self)
        self.argument.block = block

    def onDragOver(self, event):
        pass
        
    def onDragEnter(self, event):
        pass
        
    def onDragLeave(self,event):
        pass
                    
    def onDrop(self, event):
        #print "BlockHolder: onDrop"
        DOM.eventStopPropagation(event) # nao deixar ir para o onDrop de BlocksPad
        if self.subBlock == getWorkspace().getMovingBlock(): return # retirou e colocou o mesmo bloco
        #---------------------------------------------------
        if getWorkspace().getMovingBlock().original:       
            getWorkspace().setMovingBlock(getWorkspace().cloneBlock(getWorkspace().getMovingBlock()))              
            #undo = (getWorkspace().getBlockList().removeBlocks, [getWorkspace().getMovingBlock()])
        #else: undo = getWorkspace().getUndo()
        #---------------------------------------------------   
        if self.up: #self.argument.statementArgumentType == UP_ARG
            #undo = (self.removeUpperBlock, [undo, self.block.getStyleAttribute('left'), self.block.getStyleAttribute('top'), getWorkspace().getMovingBlock().original])      
            #do = (self.addUpperBlock, [getWorkspace().getMovingBlock(), getWorkspace().getMovingBlock().original, event])  
            self.addUpperBlock(getWorkspace().getMovingBlock(), getWorkspace().getMovingBlock().original, event)#   
        else:
            #do = (self.addSubBlock, [getWorkspace().getMovingBlock(), getWorkspace().getMovingBlock().original])
            self.addSubBlock(getWorkspace().getMovingBlock(), getWorkspace().getMovingBlock().original)#
        #---------------------------------------------------
        #history.add(do, undo)    
        from edu.uca.util.Serializable import stateChange
        stateChange()

#----------------------------------------------------------------------------------------------------------    

    def addUpperBlock(self, newUpperBlock, original, event):#remover event
        newUpperBlock.removeFromParent()       
        left, top = getDropPosition(self.block.blockPad, event)
        left = self.block.getStyleAttribute('left')
        #top = int(self.block.getStyleAttribute('top')[:-2]) - int(newUpperBlock.getStyleAttribute('margin-bottom')[:-2]) - 8 - 10 - 8
        top = max(top, 0)
        self.block.blockPad.addBlock(newUpperBlock, left, top, original)
        newUpperBlock.getLastBlock().holderSiblingDown.addSubBlock(self.block, self.block.original)

    def addSubBlock(self, newSubBlock, original): 
        if self.subBlock == newSubBlock: return 
        #---------------------------------------------------------------------------------
        if self.subBlock is not None:
            removed = self.subBlock
            self.remove(self.subBlock)            
            if newSubBlock is not None:
                removed.parentBlock = newSubBlock.getLastBlock()
                newSubBlock.removeFromParent()
                newSubBlock.getLastBlock().holderSiblingDown.addSubBlock(removed, removed.original)
        #---------------------------------------------------------------------------------
        self.subBlock = newSubBlock
        #---------------------------------------------------------------------------------
        if self.subBlock is not None:
            #-----------------------------------------------------------------------------
            if original:
                self.subBlock.original = False
                getWorkspace().addBlock(self.subBlock)
                from edu.uca.renderable.block.MainBlock import MainBlock
                if isinstance(self.subBlock, MainBlock):
                    getWorkspace().setMainBlock(self.subBlock)
                    getWorkspace().getBlockList().hideMainBlock()
            #-----------------------------------------------------------------------------  
            self.subBlock.parentBlock = self.block
            self.subBlock.blockPad = self.block.blockPad
            self.subBlock.setStyleAttribute({'top': 0, 'left': 0})                
            self.add(self.subBlock)#bug! self.subBlock.parentBlock fica nulo
            self.subBlock.parentBlock = self.block #because self.add(self.subBlock) is bug!
            if self.subBlock.holderSiblingUp:
                self.subBlock.holderSiblingUp.argument.enable = False
        #---------------------------------------------------------------------------------
        self.block.resize()
        self.argument.setStyleAttribute('display', 'none')
         

        
    def remove(self, widget):#renomear para removeSubBlock
        #print 'BlockHolder: remove'
        if self.subBlock != widget: return
        Element.remove(self, widget)
        self.subBlock.parentBlock = None
        self.subBlock = None
        if widget.holderSiblingUp:
                widget.holderSiblingUp.argument.enable = True
                
    def removeUpperBlock(self, previousPerformer, left, top, original):
        print 'removeUpperBlock'
        self.block.blockPad.addBlock(self.block, left, top, original)
        fun, args = previousPerformer
        return fun(*args)          
#----------------------------------------------------------------------------------------------------            
    def getArgumentValue(self):
        return self.argument.getArgumentValue()
    
    def setArgumentValue(self, value):
        self.argument.setArgumentValue(value)
#----------------------------------------------------------------------------------------------------
            
        