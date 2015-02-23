from edu.uca.renderable.Element import Element
from pyjamas.ui.ClickListener import ClickHandler
from pyjamas import DOM
from pyjamas.ui.Widget import Widget
from pyjamas.ui.MouseListener import MouseHandler


class Button(Element, ClickHandler, MouseHandler):

    def __init__(self, text, listener, classIcon=""):
        Element.__init__(self, Element=DOM.createElement('li'), StyleName='btn')
        ClickHandler.__init__(self)
        MouseHandler.__init__(self)
        self.text = text
        self.classIcon = classIcon
        self.draw()
        if listener is not None: self.addClickListener(listener)
        
    def draw(self):
        if self.classIcon != "":
            self.icon = Element(Element=DOM.createElement("i"), StyleName=self.classIcon)
            self.add(self.icon)
        self.title = Element(Element=DOM.createSpan(), StyleName='title')
        DOM.setInnerHTML(self.title.getElement(), self.text)
        self.add(self.title)     
        self.add(Widget(Element=DOM.createDiv(), StyleName='r'))
        
    def setText(self, text):
        self.text = text
        DOM.setInnerHTML(self.title.getElement(), self.text)
        
    def changeIcon(self, classIcon):
        self.classIcon = classIcon
        DOM.setAttribute(self.icon.getElement(), "className", classIcon)