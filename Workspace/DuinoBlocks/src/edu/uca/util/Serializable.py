#!/usr/local/bin/python
# -*- coding: utf-8 -*-

from edu.uca.renderable.block import ArduinoBlocks
from edu.uca.Workspace import getWorkspace, logicVars, numericVars,\
    alphaNumericVars, hardwares, countComponents, createdBlocks, stateIndex, states, stateMax
from edu.uca.renderable.block.Block import Block
from edu.uca.renderable.hardware import ArduinoHardwares
from edu.uca.util.PopupOpenState import PopupOpenState
from edu.uca.util.Popup import COMFIRM
from edu.uca.util.PopupNewBlock import popupConfirmNewBlock
from pyjamas.JSONParser import JSONParser
from __pyjamas__ import JS

json = JSONParser()

#UNDO/REDO----------------------------------------------------------------------------------------------------------------------
    
def stateChange():
    if stateIndex < len(states)-1:
        del states[stateIndex + 1:]
    
    if len(states) < stateMax: stateIndex += 1
    else: 
        for i in range(len(states)-1): states[i] = states[i+1]
        states.pop()

    states.insert(stateIndex, saveState(returnState=True))
    refreshUndoRedoButtons()
    #tradu��o autom�tica aqui.
    if getWorkspace().getHeaderPanel().isAutomatic:
        getWorkspace().getHeaderPanel().codeGenerator.onClick(automatic=True)
    
def refreshUndoRedoButtons():
    hearder = getWorkspace().getHeaderPanel()
    if stateIndex > 0: hearder.buttonUndo.removeStyleName('disabled')
    else: hearder.buttonUndo.addStyleName('disabled')
    if stateIndex < len(states)-1: hearder.buttonRedo.removeStyleName('disabled')
    else: hearder.buttonRedo.addStyleName('disabled')

def undo(sender):
    if 'disabled' not in sender.getStyleName():
        stateIndex -= 1
        refreshUndoRedoButtons()
        loadState(state = states[stateIndex])
             
def redo(sender):
    if 'disabled' not in sender.getStyleName():
        stateIndex += 1
        refreshUndoRedoButtons()
        loadState(state = states[stateIndex])
        
#EXPORT/IMPORT-CUSTOMBLOCKS-------------------------------------------------------------------------------------------------

def exportWiringCode():
    JS(""" 
        var a = document.createElement('a');
        try{
            var blob = new Blob([$doc.defaultView.editor.getSession()], {'type': 'text/plain'});
            window.URL = window.URL || window.webkitURL;
            a.href = window.URL.createObjectURL(blob);
            a.download = 'WiringCode.ino';
            a.click();
        }
        catch(e){ 
            console.log(e);
        }               
    """)

def exportCustomBlocks():
    dic = dict(customBlocks = saveAllCustomBlocks())
    conteudo = json.encode(dic)  
    ok = True          
    JS(""" 
        var a = document.createElement('a');
        try{
            var blob = new Blob([conteudo], {'type': 'text/plain'});
            window.URL = window.URL || window.webkitURL;
            a.href = window.URL.createObjectURL(blob);
            a.download = 'filename.txt';
            a.click();
        }
        catch(e){
            ok = false; 
        }               
    """)       
    
    if (not ok):         
        popup = PopupOpenState(title='Exportar Bloco', options=COMFIRM)
        popup.okButton.removeStyleName('disabled')
        popup.textBox.removeInputListener(popup)
        popup.textBox.setText(conteudo)
        popup.show()
        popup.textBox.selectAll()

def importCustomBlock(sender):
    def popupConfirmOpenState(s):
        dic = json.decode(s)
        loadAllCustomBlocks(dic['customBlocks'])
        stateChange()        
        #traduz todos os blocos
        for block in getWorkspace().getBlocks(): block.changeTexts()        
    popup = PopupOpenState(popupConfirmOpenState)
    popup.show()
        
#STATE----------------------------------------------------------------------------------------------------------------------
def saveState(sender, returnState=False):
    dic = dict(variables = saveAllVariables())
    dic.update(components = saveAllComponents())
    dic.update(customBlocks = saveAllCustomBlocks())
    dic.update(blocks = saveAllStackBlocks())
    if returnState: return json.encode(dic)
    else:
        #http://blogs.adobe.com/cantrell/archives/2012/01/how-to-download-data-as-a-file-from-javascript.html
        #http://stackoverflow.com/questions/15293694/blob-constructor-browser-compatibility
        #http://updates.html5rocks.com/2012/06/Don-t-Build-Blobs-Construct-Them
        conteudo = json.encode(dic)  
        ok = True;          
        JS(""" 
            var a = document.createElement('a');
            try{
                var blob = new Blob([conteudo], {'type': 'text/plain'});
                window.URL = window.URL || window.webkitURL;
                a.href = window.URL.createObjectURL(blob);
                a.download = 'filename.dbk';
                a.click();
            }
            catch(e){
                ok = false; 
            }               
        """)       
        
        if (not ok):         
            popup = PopupOpenState(title='Salvar', options=COMFIRM)
            popup.okButton.removeStyleName('disabled')
            popup.textBox.removeInputListener(popup)
            popup.textBox.setText(conteudo)
            popup.show()
            popup.textBox.selectAll()

def loadState(sender, state=None):
    def popupConfirmOpenState(s, change=True):
        getWorkspace().reload()
        dic = json.decode(s)
        loadAllVariables(dic['variables'])
        loadAllComponents(dic['components'])
        loadAllCustomBlocks(dic['customBlocks'])
        loadAllStackBlocks(dic['blocks'])
        if change: stateChange()        
        #traduz todos os blocos
        for block in getWorkspace().getBlocks(): block.changeTexts()
        getWorkspace().getHardwaresPad().changeTexts()
    if state is None:        
        popup = PopupOpenState(popupConfirmOpenState)
        popup.show()
        
    else:    
        popupConfirmOpenState(state, change=False)
    

#VARIABLES----------------------------------------------------------------------------------------------------------------------

def saveAllVariables(): # cria dicion�rio com a lista de vari�veis separadas por tipo
    return dict(logicVars=logicVars, numericVars=numericVars, alphaNumericVars=alphaNumericVars)

def loadAllVariables(varList):
    varCategory = getWorkspace().getBlockList().variables # obtem a categoria das vari�veis
    for textVar in varList['logicVars']: varCategory.popupConfirmNewVar(textVar, Block.BOOLEAN_BLOCK, saveChange=False) # add vars l�gicas
    for textVar in varList['numericVars']: varCategory.popupConfirmNewVar(textVar, Block.NUMBER_BLOCK, saveChange=False) # add vars num�ricas
    for textVar in varList['alphaNumericVars']: varCategory.popupConfirmNewVar(textVar, Block.STRING_BLOCK, saveChange=False) # add var alfanum�ricas
        

#COMPONENTS----------------------------------------------------------------------------------------------------------------------

def saveComponent(comp):
    dic = dict(name = comp.name, number = comp.number) # cria dicion�rio com o nome e o n�mero do hardware
    dic.update(left = comp.getStyleAttribute('left'), top = comp.getStyleAttribute('top')) # adiciona posi��o x e y
    
    arguments = [] # adiciona os argumentos
    for item in comp.argumentList:
        arg = item.getSelectedPin()
        if arg is None: arg = item.text
        arguments.append(arg)
    dic.update(arguments = arguments)
    
    return dic

def saveAllComponents():
    components = []
    for comp in getWorkspace().getHardwaresPad().getComponents():
            components.append(saveComponent(comp))
    return components
        
def loadAllComponents(components):
    for iten in components:
        comp = loadComponent(iten)
        getWorkspace().getHardwaresPad().add(comp)
    # atualiza a subcategoria 'Components' das categorias 'Entrada' e 'Sa�da' 
    getWorkspace().getBlockList().refreshComponentBlocks(getWorkspace().getHardwaresPad().children)

def loadComponent(dic):
    comp = getattr(ArduinoHardwares, dic['name'])() # cria um componente a partir de seu nome
    comp.changeText(dic['number'])                  # configura o texto
    comp.setStyleAttribute({'left': dic['left'], 'top': dic['top']}) # configura a posi��o x do componente
    comp.original = False                           # configura o atributo original
    hardwares[comp.getCompleteText()] = comp        # adiciona na lista de componentes
    names = countComponents.get(comp.name)          # adiciona na lista de contagem de nomes
    if names == None: countComponents[comp.name] = [comp.text+str(comp.number)] 
    else: names.append(comp.text+str(comp.number))
    
    for index, arg in enumerate(dic['arguments']):# adiciona os argumentos
        comp.argumentList[index].setSelectedPin(arg) # !caso mudar a ordem dos args ir� causar prob com arqs salvos anteriormente
    return comp

#BLOCKS----------------------------------------------------------------------------------------------------------------------

def saveStackBlock(root):
    dic = dict(type=root.blockType, name=root.name, custom=root.custom, varName=root.varName) # cria dicion�rio
    if root.custom: dic.update(color=root.color)
    dic.update(left = root.getStyleAttribute('left'), top = root.getStyleAttribute('top')) # adiciona posi��o x e y
    
    arguments = [] # adiciona recursivamente os argumentos
    for holderArgument in root.holderArguments: # verifica se o argumento � um bloco ou um texto
        if holderArgument.subBlock is not None: arguments.append(saveStackBlock(holderArgument.subBlock))
        else: arguments.append(dict(type='argument', value=holderArgument.getArgumentValue()))
    dic.update(arguments = arguments)

    children = [] # adiciona recursivamente os blocos filhos
    for holderChild in root.holderChildren:
        if holderChild.subBlock is not None:
            children.append(saveStackBlock(holderChild.subBlock))
    dic.update(children = children)   

    siblingDown = None # adiciona recursivamente os blocos subsequentes
    if root.holderSiblingDown is not None:
        if root.holderSiblingDown.subBlock is not None:
            siblingDown = saveStackBlock(root.holderSiblingDown.subBlock)
    dic.update(siblingDown = siblingDown)
            
    return dic

def saveAllStackBlocks():
    blocks = []
    for block in getWorkspace().getBlocksPad().getBlocks():
        blocks.append(saveStackBlock(block))
    return blocks

def loadStackBlock(root):
    if not root['custom']: block = getattr(ArduinoBlocks, root['name'])() # cria um bloco padr�o
    else: block = getattr(ArduinoBlocks, root['name'])(root['varName'], root['color']) # cria um bloco customizado 
    block.setStyleAttribute({'left': root['left'], 'top': root['top']})  # configura a posi��o x e y do bloco
    block.original = False                         # configura o atributo original
    getWorkspace().addBlock(block)                 # adiciona o bloco na lista de blocos

    if root['type'] == Block.END_BLOCK:               # se bloco principal 
        getWorkspace().setMainBlock(block)            # adiciona na vari�ve global
        getWorkspace().getBlockList().hideMainBlock() # oculta da lista de blocos

    arguments = root['arguments']       # adiciona recursivamente os argumentos
    for index, arg in enumerate(arguments):  # verifica se o argumento � um bloco ou um texto
        if arg['type'] == 'argument': block.holderArguments[index].setArgumentValue(arg['value'])
        else: block.holderArguments[index].addSubBlock(loadStackBlock(arg))

    children = root['children']         # adiciona recursivamente os blocos filhos
    for index, child in enumerate(children):
        block.holderChildren[index].addSubBlock(loadStackBlock(child))
        
    if root['siblingDown'] is not None: # adiciona recursivamentes os blocos subsequentes
        block.holderSiblingDown.addSubBlock(loadStackBlock(root['siblingDown']))
        
    if root['varName'] is not '' and not root['custom']: # adiciona o valor da dropDownVarName
        block.dropDownVarName.setValue(root['varName'])
        
    return block

def loadAllStackBlocks(stacks):
    for root in stacks:
        stack = loadStackBlock(root)
        getWorkspace().getBlocksPad().add(stack) 

#CUSTOMBLOCKS--------------------------------------------------------------------------------------------------------------------

def saveAllCustomBlocks():
    customBlocks = []
    for popupBlockEditor in createdBlocks.values():
        customBlocks.append(saveCustomBlocks(popupBlockEditor))
    return customBlocks

def saveCustomBlocks(popup):
    dic = dict(type=popup.block.blockType, name=popup.block.name, category=popup.categoryBlock, varName=popup.block.varName)
    dic.update(showing=popup.showing, left=popup.getStyleAttribute('left'), top=popup.getStyleAttribute('top'))
    
    blocks = []
    for block in popup.blocksPad.getBlocks():
        blocks.append(saveStackBlock(block))
    dic.update(blocks = blocks)
    
    ret = None
    if popup.ret is not None:
        if popup.ret.holderArguments[0].subBlock is not None: ret = saveStackBlock(popup.ret.holderArguments[0].subBlock)
        else: ret = dict(type='argument', value=popup.ret.holderArguments[0].getArgumentValue())
    dic.update(ret = ret)

    return dic

def loadAllCustomBlocks(customBlocks):
    for custom in customBlocks:
        popupConfirmNewBlock(custom['varName'], custom['category'], custom['type'], showPopup=False)
        popup = createdBlocks[custom['varName']]
        for root in custom['blocks']:
            if root['name'] == 'hatBlockType':
                if root['siblingDown'] is not None:
                    popup.hatBlock.holderSiblingDown.addSubBlock(loadStackBlock(root['siblingDown']))
            else:
                popup.blocksPad.add(loadStackBlock(root))
        if custom['ret'] is not None: 
            if custom['ret']['type'] == 'argument': popup.ret.holderArguments[0].setArgumentValue(custom['ret']['value'])
            else: popup.ret.holderArguments[0].addSubBlock(loadStackBlock(custom['ret']))
        if custom['showing']: popup.setStyleAttribute({'left':custom['left'], 'top': custom['top']})
        else: popup.hide() # !bug tem q da show no popup sen�o o holder de hat n�o funciona. e outros � drag
#----------------------------------------------------------------------------------------------------------------------
    
    