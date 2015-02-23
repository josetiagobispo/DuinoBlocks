from edu.uca.renderable.Element import Element
from pyjamas.ui.ClickListener import ClickHandler
from pyjamas import DOM
from edu.uca.util.i18n import _

class MenuItenListener(Element, ClickHandler):
    def __init__(self, feedBack, value, **kw):
        Element.__init__(self, Element=DOM.createElement('li'), **kw)
        ClickHandler.__init__(self)
        self.value = value
        
        DOM.setInnerHTML(self.getElement(), _(value).replace(' ', '&nbsp;'))
        
        self.addClickListener(self)
        self.feedBack = feedBack
       
    def onClick(self, sender):#add selected
        self.feedBack(self.value)
        

class MenuItenListenerIcon(Element, ClickHandler):
    def __init__(self, feedBack, value, classIcon, **kw):
        Element.__init__(self, Element=DOM.createElement('li'), **kw)
        ClickHandler.__init__(self)
        self.classIcon = classIcon
        self.value = value
        
        self.icon = Element(Element=DOM.createElement("i"), StyleName=classIcon)
        self.add(self.icon)
        self.title = Element(Element=DOM.createSpan(), StyleName='title')

        DOM.setInnerHTML(self.title.getElement(), self.value)
        self.add(self.title)
        
        self.addClickListener(self)
        self.feedBack = feedBack
    
    def getClassIcon(self):
        return self.classIcon
    
    def setClassIcon(self, classIcon):
        self.classIcon = classIcon
        self.icon.setStyleName(self.classIcon)
    
    def changeTexts(self):
        DOM.setInnerHTML(self.title.getElement(), _(self.value))
        
    def onClick(self, sender):#add selected
        self.feedBack(self.classIcon)        
        
        
        