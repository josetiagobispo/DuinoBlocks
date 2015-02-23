#!/usr/local/bin/python
# -*- coding: utf-8 -*-

from pyjamas.ui.DropWidget import DropWidget
from pyjamas.ui.DragWidget import DragContainer
from edu.uca.renderable.Element import Element
from pyjamas import DOM
from edu.uca.Workspace import getWorkspace, countComponents, hardwares
from edu.uca.renderable.hardware import ArduinoHardwares, Arduino
from edu.uca.renderable.hardware.Arduino import Arduino #!
from edu.uca.renderable.hardware.ComponentBlock import ComponentBlock
from edu.uca.util.DragElement import getDropPosition, setDragStartPosition
    
class HardwaresPad(DropWidget, DragContainer, Element):
    
    def __init__(self):
        Element.__init__(self, Element=DOM.createDiv(), StyleName='drophere2', Width="100%", Height="100%")
        DropWidget.__init__(self)
        DragContainer.__init__(self)  
        self.setID('hardwares_pad')
        
    def changeTexts(self):
        for comp in self.getComponents():
            comp.changeTexts()
        
    def onLoad(self):
        Element.onLoad(self)
        uno = Arduino(StyleName="component_Arduino_UNO")
        self.add(uno)
    
    def reload(self):
        self.removeAll()
        self.onLoad()
        getWorkspace().getBlockList().refreshComponentBlocks(self.children)
    
    def getRootBloks(self):
        return self.children
           
    def onDragStart(self, event):                    
        setDragStartPosition(event)
        if hasattr(getWorkspace().getMovingBlock(), 'original'):
            getWorkspace().getHardwaresList().trashCan.addStyleName('trashCanCloseFadeIn')
        
    def onDragOver(self, event):
        if  getWorkspace().getMovingBlock() is None: 
            
            ####################################################################################
            import json
            if json.loads(event.dataTransfer.getData('text'))['componetHardware'] is not None:
                event.dataTransfer.dropEffect = 'copy'
                DOM.eventPreventDefault(event)
            ####################################################################################
            
            return
        
        if  getWorkspace().getMovingBlock() is None: return
        dt = event.dataTransfer
        dt.dropEffect = 'copy'
        if hasattr(getWorkspace().getMovingBlock(), 'original'):
            if getWorkspace().getMovingBlock().original: self.addStyleName('dragover2')
        DOM.eventPreventDefault(event)
        
    def onDragLeave(self, event):
        dt = event.dataTransfer
        dt.dropEffect = 'none'
        self.removeStyleName('dragover2')

    def onDrop(self, event):  
        
        if getWorkspace().getMovingBlock() is None:
            
            ####################################################################################
            import json
            from edu.uca.util.Serializable import loadComponent, stateChange
            comp = loadComponent(json.loads(event.dataTransfer.getData('text'))['componetHardware'])
            comp.changeTexts()
            x, y = getDropPosition(self, event)
            comp.setStyleAttribute({'left': x, 'top': y})
            self.add(comp)
            stateChange()
            ####################################################################################
             
            return 
        
        
        if  getWorkspace().getMovingBlock() is None: return      
        self.removeStyleName('dragover2')
        left, top = getDropPosition(self, event)
        if hasattr(getWorkspace().getMovingBlock(), 'original'): 
            if getWorkspace().getMovingBlock().original:            
                getWorkspace().setMovingBlock(getattr(ArduinoHardwares, getWorkspace().getMovingBlock().name)())      
                getWorkspace().getMovingBlock().original = False
                self.add(getWorkspace().getMovingBlock())
                self.refreshCount(getWorkspace().getMovingBlock())  
                hardwares[getWorkspace().getMovingBlock().getCompleteText()] = getWorkspace().getMovingBlock() # adiciona na lista de componentes      
                getWorkspace().getMovingBlock().changeTexts()
        getWorkspace().getMovingBlock().setStyleAttribute({'left': left, 'top': top})
        DOM.eventPreventDefault(event)
        
        if isinstance(getWorkspace().getMovingBlock(), ComponentBlock): 
            from edu.uca.util.Serializable import stateChange
            stateChange()
        
    def onDragEnd(self, event):
        if hasattr(getWorkspace().getMovingBlock(), 'original'):
            getWorkspace().getHardwaresList().trashCan.removeStyleName('trashCanCloseFadeIn')
        getWorkspace().setMovingBlock(None)
            
#--------------------------------------------------------------------------------------------------------------
    def remove(self, component):
        if isinstance(component, ComponentBlock):
            countComponents[component.name].remove(component.text+str(component.number))
        return Element.remove(self, component)
    
    def refreshCount(self, component):
        names = countComponents.get(component.name)
        if names == None: 
            countComponents[component.name] = [component.text+str(1)]
            component.changeText(1)
        else: 
            for i in range(1, len(names)+2):
                if component.text+str(i) not in names:
                    component.changeText(i)
                    names.append(component.text+str(i))
                    break
                
    def getComponents(self):
        hardwares = []
        for child in self.children:
            if isinstance(child, ComponentBlock): hardwares.append(child)
        return hardwares
    
    