from edu.uca.util.Popup import Popup
from edu.uca.ui.BlocksPad import BlocksPad
from edu.uca.renderable.block.Block import Block
from edu.uca.renderable.CreatorBlockFactory import createStringBlock,\
    createBooleanBlockHolder, createNumberBlockHolder, createStringBlockHolder
from pyjamas import DOM
from edu.uca.renderable.block.ArduinoBlocks import hatBlockType
from edu.uca.util.i18n import _

class PopupBlockEditor(Popup):
        
    def __init__(self, block, categoryBlock, showPopup):
        Popup.__init__(self, title='<b>'+_('Block Editor')+'</b>', hasBackground=False)
        self.block = block
        self.categoryBlock = categoryBlock
        self.hatBlock = hatBlockType(self.block.varName, self.block.color)
        self.hatBlock.original = False
        self.hatBlock.setStyleAttribute({'left':0, 'top': 0})
        self.blocksPad = BlocksPad(self) # passa o popup. para abri-lo quando der erro em um de seus blocos
        self.blocksPad.setSize('', '')
              
        self.ret = None
        if self.block.blockType != Block.STATEMENT_BLOCK:
            self.ret = createStringBlock(False, 'ret', self.block.color)
            self.ret.original = False
            self.ret.setStyleAttribute({'left':-7, 'top':0})
            DOM.setAttribute(self.ret.getElement(), 'draggable', False)
            self.ret.addCodeElement(_('return'))
            if self.block.blockType == Block.BOOLEAN_BLOCK: self.ret.addArgumentHolder(createBooleanBlockHolder(False, self.ret))
            elif self.block.blockType == Block.NUMBER_BLOCK: self.ret.addArgumentHolder(createNumberBlockHolder(False, self.ret))
            elif self.block.blockType == Block.STRING_BLOCK: self.ret.addArgumentHolder(createStringBlockHolder(False, self.ret))

        self.center.append(self.blocksPad)
        self.center.addStyleName("border-collapse_collapse")
        if showPopup: self.show()
        self.blocksPad.add(self.hatBlock)
        if self.ret is not None: self.south.add(self.ret)
        