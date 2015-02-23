#! /usr/bin/env python
# -*- coding: UTF8 -*-
"""
#######################################################
 DuinoBlocks : Visual Programming Language for Arduino
#######################################################

:Author: Rafael Machado Alves (rafamachadoalves@gmail.com.br)
:Date: 2013/12/20
:Version: 0.1
:Home: <http://www.nce.ufrj.br/ginape/duinoblocks>
:Copyright: ©2013, GPL <http://is.gd/3Udt> 
"""
__author__  = "Rafael Machado Alves (rafamachadoalves@gmail.com.br)"
__date__    = "2013/12/20"
__version__ = "0.1"

import pyjd # this is dummy in pyjs
from pyjamas.ui.RootPanel import RootPanel, manageRootPanel
from pyjamas.ui.HorizontalPanel import HorizontalPanel
from edu.uca.ui.listener.RootPanelListener import RootPanelListener
from edu.uca.ui.BlockList import BlockList
from edu.uca.ui.BlocksPad import BlocksPad
from pyjamas.ui.VerticalPanel import VerticalPanel
from edu.uca.ui.Header import Header
from edu.uca.renderable.Element import Element
from pyjamas import DOM
from pyjamas.ui.FocusWidget import FocusWidget
from edu.uca.ui.HardwareList import HardwareList
from edu.uca.ui.HardwaresPad import HardwaresPad
from edu.uca.Workspace import getWorkspace
from edu.uca.util.Serializable import stateChange, exportWiringCode
from edu.uca.util.i18n import i18n
from edu.uca.util.ResizeWidget import ResizeWidget

lang = ['pt_BR', 'es_ES', 'en_US',]

class ContainerUCA(VerticalPanel):
    def __init__(self, ws):
       
        VerticalPanel.__init__(self, Width='100%', Height='100%')
        
        self.codeTextArea = Element(Element=DOM.createDiv(), StyleName='codePanel')
        self.codeTextArea.setID('clip_text')
        #self.codeTextArea.setReadonly(True)
        #self.codeTextArea.addClickListener(listener=lambda:self.codeTextArea.selectAll())
        ws.setCodePanel(self.codeTextArea)
        
        self.header = Header(self.changeLanguage)
        getWorkspace().setHeaderPanel(self.header)
        
        self.blockList = BlockList()
        self.hardwareList = HardwareList()
        self.hardwareList.addStyleName('invisible')
        self.left = Element(Element=DOM.createDiv(), Width='100%', Height='100%')
        ws.setBlockList(self.blockList)
        ws.setHardwaresList(self.hardwareList)
        
        self.serialMonitor = Element(Element=DOM.createDiv(), StyleName='serialMonitor')
        
        self.blocksPad = BlocksPad()
        self.hardwaresPad = HardwaresPad()
        self.hardwaresPad.addStyleName('invisible')
        self.middle = Element(Element=DOM.createDiv(), Width='100%', Height='100%')
        ws.setBlocksPad(self.blocksPad)
        ws.setHardwaresPad(self.hardwaresPad) 
               
    def onLoad(self):               
        self.add(self.header)
        self.setCellHeight(self.header, '38px')
        
        self.left.add(self.blockList)
        self.left.add(self.hardwareList)
        self.mainPanel = HorizontalPanel(Width='100%', Height='100%')
        self.mainPanel.add(self.left)
        self.mainPanel.setCellWidth(self.left, '250')
               
        self.middle.add(self.blocksPad)
        self.middle.add(self.hardwaresPad)       
        self.center = VerticalPanel(Width='100%', Height='100%', StyleName="center_panel")
        self.center.add(self.middle)
        
        #---------------------------------------------------------------------------------------------------------
        bottom = Element(Element=DOM.createDiv(), StyleName='drawer_bottom')
        
        self.showHideLeft = FocusWidget(Element=DOM.createDiv(), StyleName='control_bar close_left')
        self.showHideLeft.addClickListener(self.showHidePanelLeft)
        self.showHideLeft.setStyleAttribute('float', 'lef')
        bottom.add(self.showHideLeft)
        
        self.showHideRight = FocusWidget(Element=DOM.createDiv(), StyleName='control_bar')
        self.showHideRight.addClickListener(self.showHidePanelRight)
        bottom.add(self.showHideRight)
        
        self.showHideMonitor = FocusWidget(Element=DOM.createDiv(), StyleName='control_bar')
        self.showHideMonitor.addClickListener(self.showHidePanelMonitor)
        bottom.add(self.showHideMonitor)
        
        self.resizeMonitor = ResizeWidget(self.serialMonitor, 100, 400, invert=True, horizontal=False)
        DOM.setStyleAttribute(self.resizeMonitor.getElement(), "display", "none")
        bottom.add(self.resizeMonitor)
        
        self.center.add(bottom)
        self.center.setCellHeight(bottom, '20px')
        
        usbFlash = FocusWidget(Element=DOM.createDiv())
        usbFlash.setID('cb_cf')
        DOM.setElemAttribute(usbFlash.getElement(), 'data-sections', 'usbflash serialmonitor')
        self.serialMonitor.add(usbFlash)
        
        progress = Element(Element=DOM.createDiv(), StyleName='progress progress-striped active')
        progress.setID('progress')
        DOM.setStyleAttribute(progress.getElement(), "display", "none")
        progress_val = Element(Element=DOM.createDiv(), StyleName='bar')
        progress_val.setID('progress_val')
        progress.add(progress_val)
        self.serialMonitor.add(progress)    
        
        monitor = Element(Element=DOM.createDiv())
        monitor.setID('monitor')
        self.serialMonitor.add(monitor) 
        
        self.center.add(self.serialMonitor)
        self.center.setCellHeight(self.serialMonitor, '100')
        self.showHidePanelMonitor()
        #---------------------------------------------------------------------------------------------------------
        
        self.mainPanel.add(self.center)     
        
        #---------------------------------------------------------------------------------------------------------   
        self.cod = VerticalPanel(Width='100%', Height='100%', StyleName="right_panel")
        
        divCode = Element(Element=DOM.createDiv(), Width='100%', Height='100%', StyleName="download-button-container")
        divCode.add(self.codeTextArea)
        divButtonDownload = FocusWidget(Element=DOM.createDiv(), StyleName="download-button")
        #divButtonDownload.addClickListener(listener=lambda:exportWiringCode(self.codeTextArea.getText()))
        divButtonDownload.addClickListener(listener=lambda:exportWiringCode())
        DOM.setInnerText(divButtonDownload.getElement(), 'download')
        divCode.add(divButtonDownload)
        
        self.cod.add(divCode)
        bot = Element(Element=DOM.createDiv(), StyleName='drawer_bottom')
        res = ResizeWidget(self.cod, 100, 500, invert=True)
        res.setStyleAttribute('float', 'left')
        bot.append(res)
        self.cod.add(bot)
        self.cod.setCellHeight(bot, '20px')
        self.mainPanel.add(self.cod)
        self.mainPanel.setCellWidth(self.cod, '200')
        self.showHidePanelRight()
        
        self.header.buttonBlocks.addClickListener(self.showBlocksList)
        self.header.buttonHarwares.addClickListener(self.showHardwaresList)
        self.header.buttonTranslate.addClickListener(self.showPanelRight)
        #self.header.buttonReload.addClickListener(self.hidePanelRight)
        
        #---------------------------------------------------------------------------------------------------------
         
        self.add(self.mainPanel)
        
        stateChange()
        
        self.changeLanguage('pt_BR')
        #https://groups.google.com/forum/?fromgroups=#!topic/pyjamas-dev/a-u8hWZ6W0o
        #JS('''setOperationProgress(50);''')
        #JS('''$("#operation_output").html("Working...");''')
        #-------------------------------------------------------------------------------------------------------------
        
        #dynamic.ajax_import("jquery.min.js")
        #dynamic.ajax_import("lawnchair-0.6.1.min.js")
        #dynamic.ajax_import("BrowserDetect.js")
        #dynamic.ajax_import("compilerflasher.js", names = ['initializePlugin'])        
        #JS("""@{{!initializePlugin}}();""")
        
        #dynamic.ajax_import("src-noconflict/ace.js", names = ['addPluginAce'])
        #JS("""@{{!addPluginAce}}();""")
        #JS("""addPluginAce();""")
        
        #JS("""var editor = ace.edit("editor");
        #      editor.setTheme("ace/theme/textmate");
        #      editor.getSession().setMode("ace/mode/c_cpp");
        #      alert();""")
                
    def changeLanguage(self, language):
        i18n.load(base_url='../lang', lang=language, onCompletion=self.changeTexts)
        
    def changeTexts(self):
        getWorkspace().getBlockList().changeTexts()
        #getWorkspace().getBlocksPad().changeTexts() nao pega os subblocks!
        for block in getWorkspace().getBlocks():
            block.changeTexts()
        getWorkspace().getHeaderPanel().changeTexts()
        getWorkspace().getHardwaresList().changeTexts()
        getWorkspace().getHardwaresPad().changeTexts()
           
    def showBlocksList(self):
        self.hardwareList.addStyleName('invisible')
        self.blockList.removeStyleName('invisible')
        self.hardwaresPad.addStyleName('invisible')
        self.blocksPad.removeStyleName('invisible')
        self.blockList.refreshComponentBlocks(self.hardwaresPad.children)
    
    def showHardwaresList(self):
        self.blockList.addStyleName('invisible')
        self.hardwareList.removeStyleName('invisible')
        self.blocksPad.addStyleName('invisible')
        self.hardwaresPad.removeStyleName('invisible')
        
    def hidePanelRight(self):
        if DOM.getStyleAttribute(self.mainPanel.getWidgetTd(self.cod), 'display') == '': # bug: "block" in <td> not work's on firefox
            DOM.setStyleAttribute(self.mainPanel.getWidgetTd(self.cod), "display", "none")
            self.showHideRight.setStyleName('control_bar open_left') 
        
    def showPanelRight(self):
        if DOM.getStyleAttribute(self.mainPanel.getWidgetTd(self.cod), 'display') == 'none':
            DOM.setStyleAttribute(self.mainPanel.getWidgetTd(self.cod), "display", "")
            self.showHideRight.setStyleName('control_bar close_right') 
                
    def showHidePanelLeft(self):
        if DOM.getStyleAttribute(self.mainPanel.getWidgetTd(self.left), 'display') == '':
            DOM.setStyleAttribute(self.mainPanel.getWidgetTd(self.left), "display", "none")
            self.showHideLeft.setStyleName('control_bar open_right')
        else:
            DOM.setStyleAttribute(self.mainPanel.getWidgetTd(self.left), "display", "")
            self.showHideLeft.setStyleName('control_bar close_left')  
            
    def showHidePanelMonitor(self):
        if DOM.getStyleAttribute(DOM.getParent(self.center.getWidgetTd(self.serialMonitor)), 'display') == 'none':
            DOM.setStyleAttribute(DOM.getParent(self.center.getWidgetTd(self.serialMonitor)), "display", "")
            self.showHideMonitor.setStyleName('collapse open_down')       
            #JS("""addCodeBenderPlugin();@{{!addCodeBenderPlugin}}();""") 
            DOM.setStyleAttribute(self.resizeMonitor.getElement(), "display", "")                
        else:
            DOM.setStyleAttribute(DOM.getParent(self.center.getWidgetTd(self.serialMonitor)), "display", "none")
            self.showHideMonitor.setStyleName('collapse close_up')     
            DOM.setStyleAttribute(self.resizeMonitor.getElement(), "display", "none")      
        
    def showHidePanelRight(self):
        if DOM.getStyleAttribute(self.mainPanel.getWidgetTd(self.cod), 'display') == 'none':
            DOM.setStyleAttribute(self.mainPanel.getWidgetTd(self.cod), "display", "")
            self.showHideRight.setStyleName('control_bar close_right')
        else:
            DOM.setStyleAttribute(self.mainPanel.getWidgetTd(self.cod), "display", "none")
            self.showHideRight.setStyleName('control_bar open_left') 

if __name__ == '__main__':
    pyjd.setup("./public/DuinoBlocks.html") 
    manageRootPanel(RootPanelListener(StyleName='rootstyle'))
    RootPanel().add(ContainerUCA(getWorkspace())) 
    pyjd.run()
    
    #C:\pyjs.git\trunk\pyjs\src\pyjs\boilerplate\all.cache.html alterado no comentario //rafael
    #..\scripts\bootstrap_progress.js alterado    
