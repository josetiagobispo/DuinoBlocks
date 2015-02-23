from edu.uca.renderable.argument.Argument import Argument
from edu.uca.util.RegexTextBox import RegexTextBox, display_ok, display_error
from edu.uca.renderable.block.Block import Block
from pyjamas.ui.Widget import Widget
from pyjamas import DOM
import math
from pyjamas.ui.KeyboardListener import KeyboardHandler
from pyjamas.ui import KeyboardListener

def drawNumberArgument(s, numOrStr='num'): 
    s.addStyleName('input '+numOrStr)
    
    s.tl = Widget(Element=DOM.createDiv(), StyleName='tl')      
    t    = Widget(Element=DOM.createDiv(), StyleName='t')      
    s.tr = Widget(Element=DOM.createDiv(), StyleName='tr')     
    b    = Widget(Element=DOM.createDiv(), StyleName='b')        
    s.br = Widget(Element=DOM.createDiv(), StyleName='br')       
    s.bl = Widget(Element=DOM.createDiv(), StyleName='bl')      
    
    s.append(s.tl)
    s.append(t)
    s.append(s.tr)
    s.append(b)
    s.append(s.br)
    s.append(s.bl)

def resize(self):
    c = math.ceil(self.height / 2 + 1)
    self.tr.setStyleAttribute({'right': -c - 2, 'height': c, 'width': c + 3})
    self.br.setStyleAttribute({'right': -c - 2, 'height': c, 'width': c + 3})        
    self.tl.setStyleAttribute({'left' : -c - 2, 'height': c, 'width': c + 3})
    self.bl.setStyleAttribute({'left' : -c - 2, 'height': c, 'width': c + 3})       
    self.setStyleAttribute({'marginLeft': c + 2, 'marginRight': c + 2})
    
def addInput(self, maxLength):
    self.input = RegexTextBox()
    if self.validation:
        self.input.setRegex('^[+-]?\d*[0-9](\.\d*[0-9])?$')
        self.input.appendValidListener(display_ok)
        self.input.appendInvalidListener(display_error)
        self.input.validate(None)
    self.input.setMaxLength(maxLength)
    self.input.addInputListener(self)
    self.input.setWidth(20)
    self.append(self.input)
    self.input.addChangeListener(self)
    
def getArgumentValue(self):
    #if self.input.getText().isdigit():
    if self.input.isValid(): return self.input.getText()
    return None
    
def setArgumentValue(self, value):
    self.input.setText(value)
    
def onInput(self, sender, original):
    if original: self.input.setText('')
        
    if len(self.input.getText()) == 0:
        self.input.setWidth(self.minWidthInput)
    else:
        self.input.setWidth(self.minWidthInput+((len(self.input.getText())-1)*7))
        
def onChange(self, sender):
    from edu.uca.util.Serializable import stateChange
    stateChange()

class NumberArgument(Argument, KeyboardHandler):
   
    def __init__(self, validation=True, block=None):
        Argument.__init__(self, [Block.NUMBER_BLOCK])
        KeyboardHandler.__init__(self)
        self.addKeyboardListener(self)
        self.validation = validation
        self.block = block
        self.height = 16
        self.minWidthInput = 20
        drawNumberArgument(self)
        #addInput(self, 4)
        addInput(self, 6) # melhorar isso
        
    def onKeyDown(self, sender, keycode, modifiers):
        KeyboardHandler.onKeyDown(self, sender, keycode, modifiers)
        value = self.getArgumentValue()
        if value is None or not self.validation: return
        value = int(value)
        if  value < 9999 and keycode == KeyboardListener.KEY_UP and modifiers == 0:
            value += 1
            self.input.setText(str(value))
            self.onInput(sender)
        elif value > -9999 and keycode == KeyboardListener.KEY_DOWN and modifiers == 0:
            value -= 1
            self.input.setText(str(value))
            self.onInput(sender)
        
    def onInput(self, sender):
        onInput(self, sender, self.block.original)
        
    def onChange(self, sender):
        onChange(self, sender)
        
    def resize(self):
        resize(self)
 
#--------------------------------------------------------------------------------------------------------------       
    def getArgumentValue(self):
        return getArgumentValue(self)
    
    def setArgumentValue(self, value):
        setArgumentValue(self, value)
        self.input.validate(None)
        self.onInput()
#--------------------------------------------------------------------------------------------------------------        