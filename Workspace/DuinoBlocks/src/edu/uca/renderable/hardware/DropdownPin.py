from edu.uca.ui.listener.MenuItenListener import MenuItenListener
from pyjamas.ui.ClickListener import ClickHandler
from pyjamas.ui.MouseListener import MouseHandler
from edu.uca.renderable.Element import Element
from pyjamas.ui.Widget import Widget
from pyjamas import DOM
from pyjamas.ui.PopupPanel import PopupPanel
from edu.uca.util.Constants import ALL_PINS
from edu.uca.Workspace import hardwares

def drawDropdownPin(self):
    self.popup = PopupPanel(autoHide=True, modal=False, rootpanel=self)
    DOM.setStyleAttribute(self.popup.element, "position", "static")
    self.dropdown_arrow = Element(Element=DOM.createElement('div'), StyleName='dropdown_arrow')
    self.title = Element(Element=DOM.createSpan(), StyleName='title')
    DOM.setInnerHTML(self.title.getElement(), self.text)
    self.add(self.title)      
    self.add(Widget(Element=DOM.createDiv(), StyleName='r'))
    self.add(Widget(Element=DOM.createDiv(), StyleName='coverup'))
    self.popup.add(self.dropdown_arrow)
        
class DropdownPin(Element, ClickHandler, MouseHandler):
   
    def __init__(self, component, mode, label='', **kw):
        Element.__init__(self, Element=DOM.createElement('li'), **kw)
        ClickHandler.__init__(self)
        self.text = 'selecionar pino'
        self.component = component
        self.mode = mode
        self.label = label
        self.addClickListener(self)
        drawDropdownPin(self)
        self.selectedPin = None
        
    def setSelectedPin(self, value):
        DOM.setInnerHTML(self.title.getElement(), value) 
        self.selectedPin = value
        if value != self.text: self.title.addStyleName("titleOK") # gambiarra para loadComponent
        
    def getSelectedPin(self):
        return self.selectedPin
    
    def hasSelectedPin(self):
        return self.selectedPin is not None
    
    def onClick(self, sender):
        if self.popup.showing: self.popup.hide()
        else:
            values = []
            usedPins = [] # transformar em metodo em workspace, getAllSelectedPins
            componentBlockList = hardwares.values()
            for componentBlock in componentBlockList:
                usedPins.extend(componentBlock.getUsedPins())
            for h in ALL_PINS:
                if not h in usedPins:
                    values.append(h)
            self.addValues(values)
            self.popup.show()
    
    def ItenClick(self, value):
        if not self.component.original:
            oldValue = self.selectedPin
            self.setSelectedPin(value)
            if oldValue != value: 
                from edu.uca.util.Serializable import stateChange
                stateChange()
    
    def addValues(self, values):
        self.removeValues()
        for value in values: self.addValue(value)
                            
    def addValue(self, value):
        self.dropdown_arrow.append(MenuItenListener(self.ItenClick, value, StyleName='dropdownItem'))
        
    def removeValues(self, value):
        self.dropdown_arrow.removeAll()
        