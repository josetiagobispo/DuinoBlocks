from pyjamas.ui.RootPanel import RootPanel
from pyjamas.ui.FocusWidget import FocusWidget
from pyjamas.ui.MouseListener import MouseHandler
from pyjamas.ui.Event import ONMOUSEUP, ONMOUSEMOVE
from pyjamas import DOM

class ResizeWidget(FocusWidget, MouseHandler):    
    def __init__(self, target, mi, ma, invert=False, horizontal=True):
        FocusWidget.__init__(self, Element=DOM.createDiv(), StyleName='control_bar')        
        MouseHandler.__init__(self)
        
        self.horizontal = horizontal
        if self.horizontal: self.addStyleName('horizontal_resize')
        else: self.addStyleName('vertical_resize')
        
        self.target = target
        self.min = mi
        self.max = ma
        self.invert = invert
        self.mouse = 'up'
        self.vectorX = 0
        self.vectorY = 0
        
        self.addMouseListener(self)
        RootPanel().addMouseListener(self)
        DOM.sinkEvents(RootPanel().getElement(), ONMOUSEUP | ONMOUSEMOVE | DOM.getEventsSunk(RootPanel().getElement()))
            
    def onMouseDown(self, sender, x, y):
        if sender == self:
            self.mouse = 'down'
            self.vectorX = self.getAbsoluteLeft() + x
            self.vectorY = self.getAbsoluteTop() + y
    
    def onMouseMove(self, sender, x, y):
        if self.mouse == 'down' and sender != self:
            
            if self.horizontal:
                if self.invert: w = int(self.target.parent.getCellWidth(self.target))+(self.vectorX-x)
                else: w = int(self.target.parent.getCellWidth(self.target))-(self.vectorX-x)
            else:
                if self.invert: w = int(self.target.parent.getCellHeight(self.target))+(self.vectorY-y)
                else: w = int(self.target.parent.getCellHeight(self.target))-(self.vectorY-y) 
                    
            if self.min <= w <= self.max:                                        
                self.vectorX = x
                self.vectorY = y
                
                if self.horizontal: self.target.parent.setCellWidth(self.target, w)
                else: self.target.parent.setCellHeight(self.target, w)  
                 
                
    def onMouseUp(self, sender, x, y):
        self.mouse = 'up'
        