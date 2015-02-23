from edu.uca.renderable.Element import Element
from pyjamas.ui.MouseListener import MouseHandler
from pyjamas import DOM

class MenuButtonListener(Element, MouseHandler):
    def __init__(self, feedBack, **kw):
        Element.__init__(self, Element=DOM.createDiv(), **kw)
        MouseHandler.__init__(self)
        self.addMouseListener(self)
        self.feedBack = feedBack
         
    def onMouseDown(self, sender, x, y):
        if self.feedBack is not None: self.feedBack()
