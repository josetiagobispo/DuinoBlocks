#!/usr/local/bin/python
# -*- coding: utf-8 -*-

from pyjamas.ui.HorizontalPanel import HorizontalPanel
from edu.uca.util.Popup import Popup, CONFIRM_CANCEL
from pyjamas.ui.TextBox import TextBox
from pyjamas.ui.HTML import HTML
from edu.uca.util.i18n import _
from pyjamas.ui.FileUpload import FileUpload
from __pyjamas__ import JS
from pyjamas import Window

class PopupOpenState(Popup):
        
    def __init__(self, okClick, cancelClick, title='Abrir', options=CONFIRM_CANCEL):
        Popup.__init__(self, title, okClick, cancelClick, options)
        
    def draw(self):
        Popup.draw(self)
        
        namePanel = HorizontalPanel()
        #namePanel.add(Label('Crie um arquivo'))     
        if self.title == 'Abrir':
            self.enableOkButton(False)
            namePanel.add(HTML("""<div class=""gwt-Label"" style=""white-space: normal;"">
            Abra o arquivo salvo, copie<br>e cole aqui o conteudo:</div>"""))  
            
            self.field = FileUpload()
            self.field.setName('file')
            self.field.setID('files')
            self.center.add(self.field)        
            element = self.field.getElement()   
            
            JS("""function handleFileSelect(evt) {@{{self}}.enableOkButton(evt.target.files[0]!=null);} 
            @{{element}}.addEventListener('change', handleFileSelect, false);""")
            
            
            #http://www.javascriptkit.com/javatutors/loadjavascriptcss.shtml
        else:
            namePanel.add(HTML("""<div class=""gwt-Label"" style=""white-space: normal;"">
            Crie um arquivo txt e copie<br>e cole o conteudo a seguir:</div>"""))   
                     
            self.textBox = TextBox()
            self.textBox.setStyleAttribute('marginLeft', 10)
            namePanel.add(self.textBox)
            self.center.add(namePanel)
            
            self.textBox.addInputListener(self)    
            self.onInput()
            
    def enableOkButton(self, enable):
        if enable: self.okButton.removeStyleName('disabled')
        else: self.okButton.addStyleName('disabled')
        
    def onInput(self, sender):
        self.enableOkButton(self.textBox.getText().count(' ') != len(self.textBox.getText()))
        
    def myOkClick(self):
        if 'disabled' not in self.okButton.getStyleName():
            Popup.myOkClick(self)
            if self.okClick is not None:
                if self.title == 'Abrir':
                    files = getattr(self.field.getElement(), 'files')  
                    file = JS("@{{files}}[0]")
                    if  file:              
                        JS("""var reader = new FileReader();
                        reader.onload = function(e) {@{{self}}.okClick(e.target.result);}
                        reader.readAsBinaryString(@{{file}});""")                                 
                        #self.okClick(str)                        
                else:
                    self.okClick(self.textBox.getText())
                    
    def myCancelClick(self):
        Popup.myCancelClick(self)
        if self.cancelClick is not None: self.cancelClick()
            
    def show(self):
        Popup.show(self)
        if self.title != 'Abrir': self.textBox.setFocus(True)
        else:
            pass
        