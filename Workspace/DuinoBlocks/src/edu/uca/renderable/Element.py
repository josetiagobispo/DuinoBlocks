from pyjamas.ui.Panel import Panel

class Element(Panel):#ComplexPanel
    
    def __init__(self, **kw):
        Panel.__init__(self,  **kw)
    
    def add(self, widget):
        self.adopt(widget, self.getElement())
        self.children.append(widget)

    def remove(self, widget):
        if widget.getParent() != self:
            return False
        self.disown(widget)
        self.children.remove(widget)
        
    def removeAll(self):
        while (len(self.children)>0):
            self.remove(self.children[0])