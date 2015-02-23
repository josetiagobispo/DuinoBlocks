from edu.uca.renderable.Element import Element
from pyjamas.ui.DropHandler import DropHandler
from pyjamas import DOM
from edu.uca.Workspace import getWorkspace, soundIn
from pyjamas.ui.DropHandler import DROP_EVENTS
from pyjamas.ui.KeyboardListener import KeyboardHandler, KEYBOARD_EVENTS
from pyjamas.ui.DragWidget import DragContainer
from edu.uca.util.DragElement import setDragStartPosition

class Argument(Element, DropHandler, DragContainer): 
    
    def __init__(self, accepts, **kw):
        Element.__init__(self, Element=DOM.createDiv(), **kw)
        DropHandler.__init__(self)
        DragContainer.__init__(self)
        self.addDropListener(self)
        self.accepts = accepts
        self.addStyleName('argument')
        self.enable = True
        self.block = None
    
    def onBrowserEvent(self, event):
        if DOM.eventGetType(event) in DROP_EVENTS and not self.block.original:
            mb = getWorkspace().getMovingBlock()
            if not DOM.isOrHasChild(mb.getElement(), self.getElement()) and mb.blockType in self.accepts:
                DropHandler.onBrowserEvent(self, event)
        elif DOM.eventGetType(event) in KEYBOARD_EVENTS:
            KeyboardHandler.onBrowserEvent(self, event)
        
    def onDragEnter(self, event):
        self.addStyleName('highlight_hover')
                    
    def onDragOver(self, event):
        self.addStyleName('highlight_hover')
        dt = event.dataTransfer
        dt.dropEffect = 'copy'
        DOM.eventPreventDefault(event)
        
    def onDragLeave(self,event):
        self.removeStyleName('highlight_hover')
        dt = event.dataTransfer
        dt.dropEffect = 'none'
        DOM.eventPreventDefault(event)
    
    def onDrop(self,event):
        self.removeStyleName('highlight_hover')
        soundIn.play()
            
    def getArgumentValue(self):
        return None
    
    def setArgumentValue(self, value):
        pass 

#------------------------------------------
    
    def onDragStart(self, event):                       
        setDragStartPosition(event)
        
    def onDragEnd(self, event):
        getWorkspace().setMovingBlock(None)
            