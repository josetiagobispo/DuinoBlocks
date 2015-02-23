import re
from pyjamas.ui.TextBox import TextBox
from pyjamas import DOM

def display_ok(obj):
    obj.setStyleName("gwt-textbox-ok")

def display_error(obj):
    obj.setStyleName("gwt-textbox-error")

class RegexTextBox(TextBox):
    def __init__(self):
        TextBox.__init__(self)
        
        self._blurListeners=[]
        self._invalidListeners=[]
        self._validListeners=[]
        self._regex=None
    
    def setRegex(self, regex):
        self._regex=regex
        self._blurListeners.append(self.validate)
    
    def validate(self, event):
        if self._regex is None:
            return
    
        if re.match(self._regex, self.getText()):
            _listeners=self._validListeners
        else:
            _listeners=self._invalidListeners
        
        for _listener in _listeners:
            _listener(self)
            
    def isValid(self):
        return re.match(self._regex, self.getText())
    
    def appendInvalidListener(self, listener):
        self._invalidListeners.append(listener)
    
    def appendValidListener(self, listener):
        self._validListeners.append(listener)
    
    def onBlur(self):
        self.validate()
    
    def onBrowserEvent(self, event):
        TextBox.onBrowserEvent(self, event)        
        type=DOM.eventGetType(event)
        if type == "keyup":
            for _listener in self._blurListeners:
                if hasattr(_listener, 'onBlur'): 
                    _listener.onBlur(self)
                else:
                    _listener(self)
