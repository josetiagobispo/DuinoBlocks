from edu.uca.renderable.Element import Element
from pyjamas.ui.DragWidget import DragWidget
from edu.uca.Workspace import getWorkspace
from pyjamas import DOM

class Arduino(Element, DragWidget): 
    
    def __init__(self, **kw):
        Element.__init__(self, Element=DOM.createDiv(), **kw)
        DragWidget.__init__(self)
        
    def onDragStart(self, event): 
        getWorkspace().setMovingBlock(self)
                   
    def onDrag(self, event):
        self.addStyleName('invisible')  
                                       
    def onDragEnd(self, event):
        self.removeStyleName('invisible')   