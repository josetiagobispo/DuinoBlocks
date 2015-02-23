from edu.uca.ui.listener.MenuItenListener import MenuItenListener,\
    MenuItenListenerIcon
from pyjamas.ui.ClickListener import ClickHandler
from pyjamas.ui.MouseListener import MouseHandler
from edu.uca.renderable.Element import Element
from pyjamas.ui.Widget import Widget
from pyjamas import DOM
from pyjamas.ui.PopupPanel import PopupPanel

class Dropdown(Element, ClickHandler, MouseHandler):
   
    def __init__(self, text, menuClick, itemClick, classIcon="", rootPanel=None, **kw):
        Element.__init__(self, Element=DOM.createElement('li'), **kw)
        ClickHandler.__init__(self)
        MouseHandler.__init__(self)
        self.text = text
        self.itemClick = itemClick
        self.menuClick = menuClick
        self.addClickListener(self)
        self.classIcon = classIcon
        self.rootPanel = rootPanel        
        self.draw()
    
    def onClick(self, sender):
        if self.popup.showing: self.popup.hide()
        else:
            if self.menuClick is not None:
                self.menuClick()
            self.popup.show()
        
    def draw(self):
        if self.classIcon != "":
            self.icon = Element(Element=DOM.createElement("i"), StyleName=self.classIcon)
            self.add(self.icon)
            
        if self.rootPanel is None:
            self.popup = PopupPanel(autoHide=True, modal=False, rootpanel=self, StyleName='dropdown_btn')
            DOM.setStyleAttribute(self.popup.element, "position", "static")
        else: #o poup nao esta fechando!
            self.popup = PopupPanel(autoHide=True, modal=False, rootpanel=self.rootPanel, StyleName='dropdown_btn')        
        
        self.dropdown_arrow = Element(Element=DOM.createElement('div'), StyleName='dropdown_arrow')
        self.title = Element(Element=DOM.createSpan(), StyleName='title')
        DOM.setInnerHTML(self.title.getElement(), self.text)
        self.add(self.title)      
        self.add(Widget(Element=DOM.createDiv(), StyleName='r'))
        self.add(Widget(Element=DOM.createDiv(), StyleName='coverup'))
        self.popup.add(self.dropdown_arrow)
        
    def changeIcon(self, classIcon):
        DOM.setAttribute(self.icon.getElement(), "className", classIcon)    
        
    def setText(self):
        DOM.setInnerHTML(self.title.getElement(), self.text)
        
    def changeTexts(self):
        for iten in self.dropdown_arrow.children:
            iten.changeTexts()
    
    def ItenClick(self, value):    
        self.itemClick(value)   
        
    def getValues(self): 
        return self.dropdown_arrow.children
        
    def addValues(self, values):
        self.removeValues()
        for value in values: self.addValue(value)
                            
    def addValue(self, value, classIcon=''):
        if classIcon == '':
            self.dropdown_arrow.append(MenuItenListener(self.ItenClick, value, StyleName='dropdownItem'))
        else:
            self.dropdown_arrow.append(MenuItenListenerIcon(self.ItenClick, value, classIcon, StyleName='dropdownItem'))
        
    def removeValues(self):
        self.dropdown_arrow.removeAll()
        