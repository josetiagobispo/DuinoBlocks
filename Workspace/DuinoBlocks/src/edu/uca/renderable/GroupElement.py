from edu.uca.renderable.Element import Element
from pyjamas import DOM

class GroupElement(Element):

    def __init__(self):
        Element.__init__(self, Element=DOM.createTable(), StyleName='line_table')
        self.draw()
        self.subElements = []

    def draw(self):
        DOM.setAttribute(self.getElement(), 'border', 0)        
        DOM.setAttribute(self.getElement(), 'cellPadding', 0)
        DOM.setAttribute(self.getElement(), 'cellSpacing', 0)
        
        body = Element(Element=DOM.createTBody())
        self.row  = Element(Element=DOM.createTR(), StyleName='code_row')
        
        body.append(self.row)
        self.append(body)
    
    def drawSubElement(self, element):
        td = Element(Element=DOM.createTD())
        td.append(element)
        self.row.append(td)
        self.subElements.append(element)


        