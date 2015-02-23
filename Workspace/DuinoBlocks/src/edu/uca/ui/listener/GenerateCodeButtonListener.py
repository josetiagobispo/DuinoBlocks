#!/usr/local/bin/python
# -*- coding: utf-8 -*-

from edu.uca.translator.Translator import Translator
from edu.uca.util.Popup import Popup
from edu.uca.Workspace import getWorkspace
from pyjamas.ui import HasHorizontalAlignment
from pyjamas.ui.VerticalPanel import VerticalPanel
from edu.uca.renderable.block import ArduinoBlocks
from pyjamas.ui.Widget import Widget
from pyjamas import DOM
from edu.uca.renderable.hardware import ArduinoHardwares
from edu.uca.translator.exception.ComponentBlockNotFoundException import ComponentBlockNotFoundException
from edu.uca.translator.exception.ComponentPinNullException import ComponentPinNullException
from edu.uca.translator.exception.VariableNameNullException import VariableNameNullException
from edu.uca.translator.exception.SocketNullException import SocketNullException
from __pyjamas__ import JS

class GenerateCodeButtonListener():
    
    def __init__(self, codePanel):
        self.codePanel = codePanel

    def onClick(self, sender=None, automatic=False):

        #self.codePanel.setText("")   
        JS('''$doc.defaultView.editor.getSession().setValue();''');
        
        loopBlockSet = []
        rootSetupBlock = None
        if getWorkspace().getMainBlock() is not None:
            rootSetupBlock = getWorkspace().getMainBlock().getFirstBlock()
            if rootSetupBlock == getWorkspace().getMainBlock():
                rootSetupBlock = None
                
        #for block in rootBlocks:
        #    if block.name == 'forever':
        #        loopBlockSet.append(block)
            loopBlockSet.append(getWorkspace().getMainBlock())
            
            
        if len(loopBlockSet) == 0 and not automatic:
            self.showBlocksList()
            
            popup = Popup('<b>Bloco sempre nao encontrado!</b>', None, None)
            center = VerticalPanel()
            center.append(getattr(ArduinoBlocks, 'forever')(off=True))
            popup.center.append(center)
            popup.center.setCellHorizontalAlignment(center, HasHorizontalAlignment.ALIGN_CENTER)
            popup.show()
            return
        
        if len(loopBlockSet) > 1 and not automatic: # deprecated
            popup = Popup('<b>Multiplos blocos sempre encontrados!</b>', None, None)
            popup.show()
            return
        
        for block in loopBlockSet:
            
            try:
                
                code_ = Translator().translate(block, rootSetupBlock)
                
                #self.codePanel.setText(code_)                
                JS('''$doc.defaultView.editor.getSession().setValue(@{{code_}});''');
                
            except SocketNullException as e1:
                if automatic: return;
                
                self.showBlocksList()
                    
                if e1.block.blockPad.popupEditorBlock: e1.block.blockPad.popupEditorBlock.show()
                
                fakeBlock = getattr(ArduinoBlocks, e1.block.name)(off=True)
                #fakeBlock.holderArguments[e1.index].argument.addStyleName('error') # estava confundindo
                fakeBlock.holderArguments[e1.index].argument.append(Widget(Element=DOM.createDiv(), StyleName='interro'))
                center = VerticalPanel()
                center.append(fakeBlock)
                #&#x2639
                popup = Popup('<b>Dado ausente no bloco abaixo:</b>', None, None)
                popup.center.append(center)
                popup.center.setCellHorizontalAlignment(center, HasHorizontalAlignment.ALIGN_CENTER)
                popup.show()
            
            except VariableNameNullException as e2:
                if automatic: return;
                
                self.showBlocksList()
                    
                fakeBlock = getattr(ArduinoBlocks, e2.block.name)(off=True)
                #fakeBlock.dropDownVarName.addStyleName('error')
                #fakeBlock.dropDownVarName.append(Widget(Element=DOM.createDiv(), StyleName='interro'))
                center = VerticalPanel()
                center.append(fakeBlock)
                popup = Popup('<b>'+e2.getError()+' abaixo:</b>', None, None)
                popup.center.append(center)
                popup.center.setCellHorizontalAlignment(center, HasHorizontalAlignment.ALIGN_CENTER)
                popup.show()
                
            except ComponentPinNullException as e3:
                if automatic: return;
                
                self.showHardwaresList()
                
                fakeBlock = getattr(ArduinoHardwares, e3.block.componetHardware)(off=True)
                fakeBlock.setText(e3.block.varName)
                center = VerticalPanel()
                center.append(fakeBlock)
                popup = Popup('<b>'+e3.getError()+' abaixo:</b>', None, None)
                popup.center.append(center)
                popup.center.setCellHorizontalAlignment(center, HasHorizontalAlignment.ALIGN_CENTER)
                popup.show()
                
            except ComponentBlockNotFoundException as e4:#todo: exception quando nao encontra o custom block
                if automatic: return;
                
                self.showHardwaresList()
                    
                fakeBlock = getattr(ArduinoHardwares, e4.block.componetHardware)(off=True)
                fakeBlock.setText(e4.block.varName)
                center = VerticalPanel()
                center.append(fakeBlock)
                popup = Popup('<b>'+e4.getError()+':</b>', None, None)
                popup.center.append(center)
                popup.center.setCellHorizontalAlignment(center, HasHorizontalAlignment.ALIGN_CENTER)
                popup.show()
                
    def showBlocksList(self):
        for listener in getWorkspace().getHeaderPanel().buttonBlocks._clickListeners:
            if hasattr(listener, "onClick"): listener.onClick(self)
            else: listener(self)
           
    def showHardwaresList(self):
        for listener in getWorkspace().getHeaderPanel().buttonHarwares._clickListeners:
            if hasattr(listener, "onClick"): listener.onClick(self)
            else: listener(self)
                
