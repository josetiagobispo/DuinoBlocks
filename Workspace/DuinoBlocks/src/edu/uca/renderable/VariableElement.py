from edu.uca.util.Dropdown import Dropdown
from pyjamas import DOM


class VariableElement(Dropdown):
                     
    def __init__(self, block, title, values, key=None):
        self.block = block
        self.title = title
        self.values = values     
        self.key = key       
        Dropdown.__init__(self, self.title, self.menuClick, self.itemClick, StyleName='dropdown_btn dropdown_var '+block.color)
             
    def menuClick(self):   
        if self.key is None: self.addValues(self.values)
        else: self.addValues(self.values[self.key])
    
    def itemClick(self, value):
        if hasattr(self.block, 'original') and not self.block.original:
            oldValue = self.block.varName
            self.setValue(value)
            if oldValue != value:
                from edu.uca.util.Serializable import stateChange
                stateChange()
        
    def setValue(self, value):
        DOM.setInnerHTML(self.title.getElement(), value)
        self.block.varName = value
        
    def onClick(self, sender):
        Dropdown.onClick(self, sender)
        
    