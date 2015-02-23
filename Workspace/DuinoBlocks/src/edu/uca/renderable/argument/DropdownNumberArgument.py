from edu.uca.renderable.argument.NumberArgument import NumberArgument
from pyjamas.ui.MouseListener import MouseHandler
from edu.uca.renderable.Element import Element
from pyjamas.ui.RootPanel import RootPanel
from pyjamas.ui.Event import ONMOUSEDOWN
from pyjamas import DOM
from edu.uca.ui.listener.MenuItenListener import MenuItenListener
from edu.uca.ui.listener.MenuButtonListener import MenuButtonListener
  
def drawDropdownNumberArgument(s, v, b, i):        
    s.dropdown = Element(Element=DOM.createDiv(), StyleName='dropdown')
    for value in v:
        s.dropdown.append(MenuItenListener(i, value, StyleName='dropdownItem'))
    s.btn = MenuButtonListener(b, StyleName='dropdown_btn')
    s.btn.append(s.dropdown)       
    s.append(s.btn)

class DropdownNumberArgument(NumberArgument, MouseHandler): 
    
    def __init__(self, values, block):
        NumberArgument.__init__(self, validation=False)
        MouseHandler.__init__(self)
        self.values = values
        self.block = block
        self.input.setReadonly(True)   
        drawDropdownNumberArgument(self, self.values, self.ButtonDown, self.ItenClick) 
        RootPanel().addMouseListener(self)
        DOM.sinkEvents(RootPanel().getElement(), ONMOUSEDOWN | DOM.getEventsSunk(RootPanel().getElement()))
   
    def _event_targets_btn(self, event):
        target = DOM.eventGetTarget(event)
        return target and DOM.isOrHasChild(self.btn.getElement(), target)
           
    def onBrowserEvent(self, event):
        NumberArgument.onBrowserEvent(self, event)
        if DOM.eventGetType(event) == "mousedown":
            if self._event_targets_btn(event):
                DOM.eventStopPropagation(event)
        MouseHandler.onBrowserEvent(self, event)
            
    def onMouseDown(self, sender, x, y):
        self.dropdown.setStyleAttribute('display', 'none')

    def ButtonDown(self):
        #if not self.block.original: self.dropdown.setStyleAttribute('display', 'block')
        self.dropdown.setStyleAttribute('display', 'block')   
            
    def ItenClick(self, value):
        self.dropdown.setStyleAttribute('display', 'none')
        if not self.block.original:
            oldValue = self.input.getText()
            self.input.setText(value)
            self.onInput(self)
            if oldValue != value: self.onChange(self)

#--------------------------------------------------------------------------------------------------------------        
    def getArgumentValue(self):
        if self.input.getText().isalnum(): return self.input.getText()
        return None
    
    def setArgumentValue(self, value):
        self.input.setText(value)
        self.onInput()
#--------------------------------------------------------------------------------------------------------------