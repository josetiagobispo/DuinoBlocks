#!/usr/local/bin/python
# -*- coding: utf-8 -*-

from pyjamas import DOM, Window
import json # != JSONParser 

def setDragStartPosition(event):#, undo):
    dt = event.dataTransfer
    target = DOM.eventGetTarget(event)
    clientX, clientY = event.clientX, event.clientY
    absx, absy = clientX + Window.getScrollLeft(), clientY + Window.getScrollTop()
    
    # para arrastar um component ou bloco entre abas
    from edu.uca.renderable.block.Block import Block
    from edu.uca.util.Serializable import saveStackBlock
    from edu.uca.Workspace import getWorkspace
    from edu.uca.renderable.hardware.ComponentBlock import ComponentBlock
    from edu.uca.util.Serializable import saveComponent   
    if (isinstance(getWorkspace().getMovingBlock(), ComponentBlock)):
        package = json.dumps({"offsetX": absx - DOM.getAbsoluteLeft(target), # armagenar a origem para undo
                           "offsetY": absy - DOM.getAbsoluteTop(target),
                           "componetHardware": saveComponent(getWorkspace().getMovingBlock())
                           })
    elif (isinstance(getWorkspace().getMovingBlock(), Block)):
        package = json.dumps({"offsetX": absx - DOM.getAbsoluteLeft(target), # armagenar a origem para undo
                           "offsetY": absy - DOM.getAbsoluteTop(target),
                           "stackBlock": saveStackBlock(getWorkspace().getMovingBlock())
                           })
        
        
    dt.setData('text', package)
    dt.allowedEffects = 'copy' # using "copy" here because Windows Chrome does not like "move"

def getDropPosition(target, event):
    dt = event.dataTransfer
    text = dt.getData('text')
    package = json.loads(text)
    x, y = DOM.eventGetClientX(event), DOM.eventGetClientY(event)
    scrollX, scrollY = Window.getScrollLeft(), Window.getScrollTop()
    if package == False:
        offsetX, offsetY = 0, 0
    else:
        offsetX, offsetY = int(package['offsetX']), int(package['offsetY'])#BUG no chromium
    at, al = target.getAbsoluteTop(), target.getAbsoluteLeft()
    posX, posY = x - (al - scrollX), y - (at - scrollY)  
    return max(posX - offsetX, 0), max(posY- offsetY, 0)

def getCurrentOffsetPosition(event):
    target = DOM.eventGetTarget(event)
    clientX, clientY = event.clientX, event.clientY # pega pos absoluta do ponteiro do mouse
    absx, absy = clientX + Window.getScrollLeft(), clientY + Window.getScrollTop() # ? - sempre 0,0  
    return absx - DOM.getAbsoluteLeft(target), absy - DOM.getAbsoluteTop(target) # subtrai pos xy do blockspad 

def getOffsetStartPosition(event):
    dt = event.dataTransfer
    text = dt.getData('text')
    package = json.loads(text)
    return int(package['offsetX']), int(package['offsetY'])

def contains(x, y, block):
    left, top = int(block.getStyleAttribute('left')[:-2]), int(block.getStyleAttribute('top')[:-2])
    top = top + block.height + block.mb
    if abs(left - x) < 10 and abs(top - y) < 10:
        return True
    return False
        
    