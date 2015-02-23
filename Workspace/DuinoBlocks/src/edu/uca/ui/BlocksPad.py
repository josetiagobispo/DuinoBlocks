#!/usr/local/bin/python
# -*- coding: utf-8 -*-

from pyjamas.ui.DropWidget import DropWidget
from pyjamas.ui.DragWidget import DragContainer
from edu.uca.renderable.Element import Element
from pyjamas import DOM
from edu.uca.renderable.block.Block import Block
from edu.uca.Workspace import getWorkspace
from edu.uca.renderable.block.MainBlock import MainBlock
from edu.uca.util.DragElement import getDropPosition, setDragStartPosition,\
    getOffsetStartPosition, getCurrentOffsetPosition, contains
    
class BlocksPad(DropWidget, DragContainer, Element):
    
    _blockDragListeners = []
    
    def __init__(self, popupEditorBlock = False):
        Element.__init__(self, Element=DOM.createDiv(), StyleName='drophere2', Width="100%", Height="100%")
        DropWidget.__init__(self)
        DragContainer.__init__(self)  
        self.setID('blocks_pad')
        self.popupEditorBlock = popupEditorBlock # dado um determinado pad, saber qual � seu popup
        
    #def changeTexts(self): não pega os subblocks!
    #    for block in self.getBlocks():
    #        print block
    #        block.changeTexts()
    
    def reload(self):
        self.removeAll()
        
    def add(self, widget):# substituir para addBlock
        if isinstance(widget, Block):
            Element.add(self, widget)
            widget.blockPad = self
            
    def addBlock(self, block, left, top, original):
        if original:
            block.original = False
            getWorkspace().addBlock(block)     
            if isinstance(block, MainBlock):
                getWorkspace().setMainBlock(block)
                getWorkspace().getBlockList().hideMainBlock() # passar para dentro do setMainBlock
        else: block.removeFromParent()
        block.setStyleAttribute({'left': left, 'top': top})
        block.blockPad = self
        Element.add(self, block)
        # n�o aparece pois ta com estilo invisible e ondrag quando vem de blocklist
        
    def getBlocks(self):
        blocks = []
        for child in self.children:
            if isinstance(child, Block): blocks.append(child)
        return blocks
           
    def onDragStart(self, event):                       
        setDragStartPosition(event)
        #print getWorkspace().getMovingBlock().original
        #getWorkspace().setUndo((self.addBlock, [getWorkspace().getMovingBlock(), 
        #                                        getWorkspace().getMovingBlock().getStyleAttribute('left'),#convert int()?
        #                                        getWorkspace().getMovingBlock().getStyleAttribute('top'),
        #                                        getWorkspace().getMovingBlock().original]))#n�o funciona
        for listener in self._blockDragListeners:
            listener.onBlockDragStart(event, getWorkspace().getMovingBlock())
            
        getWorkspace().getBlockList().trashCan.addStyleName('trashCanCloseFadeIn')
        
    def onDragOver(self, event):
        if  getWorkspace().getMovingBlock() is None: 
            
            ####################################################################################
            import json
            if json.loads(event.dataTransfer.getData('text'))['stackBlock'] is not None:
                event.dataTransfer.dropEffect = 'copy'
                DOM.eventPreventDefault(event)
            ####################################################################################
            
            return
        
        
        
        dt = event.dataTransfer
        dt.dropEffect = 'copy'
        if getWorkspace().getMovingBlock().original:
            self.addStyleName('dragover2')
        DOM.eventPreventDefault(event)
        #-Mudar-forma-de-encaixe---------------------------------------------
        #if mb.blockType == Block.STATEMENT_BLOCK or mb.blockType == Block.END_BLOCK:
        #    for block in getWorkspace().getBlocks():
        #        if block.blockPad == self and block != mb: 
        #            if block.blockType == Block.STATEMENT_BLOCK or block.blockType == Block.END_BLOCK:
        #                #print block.name
        #                self.testStatementArg(event, block)
                        
    def testStatementArg(self, event, block):    
        x, y = getCurrentOffsetPosition(event)   
        #print "x:" + str(x) + " y:" + str(y)
        
        offsetX, offsetY = getOffsetStartPosition(event)
        #print "offsetX:" + str(offsetX) + " offsetY:" + str(offsetY)
        
        newX, newY = x - offsetX, y - offsetY
        print "newX:" + str(newX) + " newY:" + str(newY)
        
        print contains(newX, newY, block)
        
        
    def onDragLeave(self, event):
        dt = event.dataTransfer
        dt.dropEffect = 'none'
        self.removeStyleName('dragover2')

    def onDrop(self, event):        
        #print "Right: onDrop"
        
        
        if getWorkspace().getMovingBlock() is None:
            
            ####################################################################################
            import json
            from edu.uca.util.Serializable import loadStackBlock, stateChange
            stackBlock = loadStackBlock(json.loads(event.dataTransfer.getData('text'))['stackBlock'])
            stackBlock.changeTexts()
            self.addBlock(stackBlock, getDropPosition(self, event), True)
            stateChange()
            ####################################################################################
             
            return 
        
        
        
               
        #soundOut.play()
        if getWorkspace().getMovingBlock().original:
            self.removeStyleName('dragover2')  
            getWorkspace().setMovingBlock(getWorkspace().cloneBlock(getWorkspace().getMovingBlock()))            
            #undo = (getWorkspace().getBlockList().removeBlocks, [getWorkspace().getMovingBlock()]) 
        #else: undo = getWorkspace().getUndo()              
        left, top = getDropPosition(self, event)     
        #history.add((self.addBlock, [getWorkspace().getMovingBlock(), left, top, getWorkspace().getMovingBlock().original]), undo)
        self.addBlock(getWorkspace().getMovingBlock(), left, top, getWorkspace().getMovingBlock().original)
        #for action in history._actions:
        #    print action._do
        #    print action._undo
        
        from edu.uca.util.Serializable import stateChange
        stateChange()
        
    def onDragEnd(self, event):
        #print 'Right: '+getWorkspace().getMovingBlock().name+' onDragEnd'
        #dt = event.dataTransfer
        #if dt.dropEffect == 'none':
            #def ontimer(timer):
            #    self.ws.getMovingBlock().removeStyleName('invisible')                
            #Timer(500, notify=ontimer)
            
        for listener in self._blockDragListeners:
            listener.onBlockDragEnd(event, getWorkspace().getMovingBlock())
       
        #getWorkspace().getMovingBlock().removeStyleName('invisible') 
        #print getWorkspace().getMovingBlock().parentBlock
        #if getWorkspace().getMovingBlock().parentBlock is not None:
        #    getWorkspace().getMovingBlock().parentBlock.resize()    
        getWorkspace().setMovingBlock(None)
        
        getWorkspace().getBlockList().trashCan.removeStyleName('trashCanCloseFadeIn')
        
#--------------------------------------------------------------------------------------------------------------    
    def addBlockDragListener(self, listener):
        self._blockDragListeners.append(listener)

    def removeBlockDragListener(self, listener):
        self._blockDragListeners.remove(listener)
#--------------------------------------------------------------------------------------------------------------
            
        