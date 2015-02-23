from edu.uca.renderable.Element import Element
from pyjamas import DOM
from edu.uca.util.i18n import _

class CodeElement(Element):
                     
    def __init__(self, text='', group=None):
        Element.__init__(self, Element=DOM.createElement('code'))
        self.text = text
        DOM.setInnerHTML(self.getElement(), text.replace(' ', '&nbsp;'))
        
    def changeTexts(self):
        if self.text != '':
            DOM.setInnerHTML(self.getElement(), _(self.text).replace(' ', '&nbsp;'))

    