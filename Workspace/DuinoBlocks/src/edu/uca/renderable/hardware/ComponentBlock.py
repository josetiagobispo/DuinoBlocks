from edu.uca.renderable.Element import Element
from pyjamas import DOM
from pyjamas.ui.DragWidget import DragWidget
from edu.uca.Workspace import getWorkspace
from edu.uca.util.Constants import INPUT
from edu.uca.util.i18n import _

def drawComponentBlock(s):   
    s.addStyleName('hardware_block block simple_hardware_block')   
    table = Element(Element=DOM.createTable())
    body = Element(Element=DOM.createTBody())
    row  = Element(Element=DOM.createTR(), StyleName='simple_hardware_row')
    td = Element(Element=DOM.createTD(), StyleName='simple_hardware_icon '+s.name)
    row.append(td)
    s.td = Element(Element=DOM.createTD(), StyleName='simple_hardware_name')
    DOM.setInnerHTML(s.td.getElement(), s.text)
    row.append(s.td)
    body.append(row)
    table.append(body)
    s.append(table)
    
    tableArguments = Element(Element=DOM.createTable(), StyleName='simple_hardware_pins')
    s.bodyArguments = Element(Element=DOM.createTBody())
    tableArguments.append(s.bodyArguments)
    s.append(tableArguments)

def addArgument(s, arg):
    mode = 'input' if s.mode == INPUT else 'output'
    row  = Element(Element=DOM.createTR(), StyleName='simple_hardware_pin')
    td = Element(Element=DOM.createTD(), StyleName='simple_hardware_pin_left')
    row.append(td)
    td = Element(Element=DOM.createTD(), StyleName='simple_hardware_pin_label simple_'+mode+'_pin')
    DOM.setInnerText(td.getElement(), arg.label)
    row.append(td)
    td = Element(Element=DOM.createTD(), StyleName='dropdown_holder simple_'+mode+'_pin')
    td.add(arg)
    row.append(td)
    s.bodyArguments.append(row)
    
class ComponentBlock(Element, DragWidget): 

    def __init__(self, name, text, mode, listBlockName=[], original=True):
        Element.__init__(self, Element=DOM.createDiv())
        DragWidget.__init__(self)
        self.original = original
        self.name = name
        self.text = text
        self.mode = mode
        self.listBlockName = listBlockName
        self.number = None
        drawComponentBlock(self)
        self.argumentList = []
        
    def getPinAtArgument(self, index):
        return self.argumentList[index].getSelectedPin()
        
    def getUsedPins(self):
        usedPins = []
        for arg in self.argumentList:
            if arg.hasSelectedPin():
                usedPins.append(arg.getSelectedPin())
        return usedPins
    
    def addArgument(self, arg):
        self.argumentList.append(arg)
        addArgument(self, arg)
        
    def getCompleteText(self):
        return self.text+str(self.number)
    
    def changeText(self, number):
        self.number = number
        DOM.setInnerHTML(self.td.getElement(), self.text + str(self.number))
        
    def changeTexts(self):
        if self.number is not None:
            DOM.setInnerHTML(self.td.getElement(), _(self.text) + str(self.number))
        else:
            DOM.setInnerHTML(self.td.getElement(), _(self.text))

#--------------------------------------------------------------------------------------------------------
    def onDragStart(self, event):
        getWorkspace().setMovingBlock(self)
                  
    def onDrag(self, event):
        if not self.original: self.addStyleName('invisible')                        
          
    def onDragEnd(self, event):
        self.removeStyleName('invisible')           
#--------------------------------------------------------------------------------------------------------
        
