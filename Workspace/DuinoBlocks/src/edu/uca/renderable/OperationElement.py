from edu.uca.renderable.Element import Element
from pyjamas import DOM
from pyjamas.ui.ClickListener import ClickHandler
from edu.uca.ui.listener.MenuItenListener import MenuItenListener
from pyjamas.ui.Widget import Widget
from pyjamas.ui.PopupPanel import PopupPanel
from edu.uca.util.i18n import _

class OperationElement(Element, ClickHandler):
                     
    def __init__(self, text, group, groupLabel, block):
        Element.__init__(self, Element=DOM.createElement('code'), StyleName='group_operation')
        ClickHandler.__init__(self)
        self.addClickListener(self)
        self.text = text
        self.group = group
        self.groupLabel = groupLabel
        self.block = block
        self.draw()
        
    def changeTexts(self):
        if self.text != '':
            DOM.setInnerHTML(self.title.getElement(), _(self.text))

    def draw(self):
        self.title = Element(Element=DOM.createSpan(), StyleName='title')
        DOM.setInnerHTML(self.title.getElement(), self.text)
        self.add(self.title)
        self.tip = PopupPanel(Element=DOM.createElement('code'), autoHide=True, modal=False, rootpanel=self)
        div = Element(Element=DOM.createElement('div'), StyleName='joyride-tip-guide')
        div.add(Widget(Element=DOM.createSpan(), StyleName='joyride-nub left'))
        self.tipItens = Element(Element=DOM.createElement('div'), StyleName='tip-itens')
        div.add(self.tipItens)
        self.tip.add(div)
        
    def onClick(self, sender):
        if self.tip.showing: self.tip.hide()
        else:
            if self.groupLabel is None: self.addValues(self.group)
            else: self.addValues(self.groupLabel)         
            self.tip.show()
    
    def addValues(self, values):
        self.tipItens.removeAll()
        if len(values)==2: self.tip.getWidget().addStyleName('two_itens')
        else: self.tip.getWidget().removeStyleName('two_itens')
        if len(values)==3: self.tip.getWidget().addStyleName('tree_itens')
        else: self.tip.getWidget().removeStyleName('tree_itens')
        for value in values.keys():
            self.tipItens.append(MenuItenListener(self.itemClick, value, StyleName='tip-item'))
    
    def itemClick(self, value):
        if self.block.original: return
        oldValue = self.block.name
        if self.groupLabel is None:
            DOM.setInnerHTML(self.title.getElement(), _(value))
            self.block.name = self.group[value]
        else:
            DOM.setInnerHTML(self.title.getElement(), _(self.groupLabel[value]))
            self.block.name = self.group[self.groupLabel[value]]
        if oldValue != value:
            from edu.uca.util.Serializable import stateChange
            stateChange()
            