from edu.uca.renderable.block.FakeBlock import FakeStatementBlock,\
    FakeBlockHolder, FakeNumberArgument, FakeCompoundStatementBlock,\
    FakeBooleanArgument, FakeMainBlock, FakeBooleanBlock,\
    FakeDropdownNumberArgument, FakeNumberBlock, FakeStringArgument,\
    FakeStringBlock, FakeDropdownBooleanArgument, FakeComponentBlock,\
    FakeDropdownPin, FakeDropdownStringArgument
from edu.uca.renderable.block.StatementBlock import StatementBlock
from edu.uca.renderable.argument.NumberArgument import NumberArgument
from edu.uca.renderable.argument.BlockHolder import BlockHolder
from edu.uca.renderable.block.CompoundStatementBlock import CompoundStatementBlock
from edu.uca.renderable.argument.BooleanArgument import BooleanArgument
from edu.uca.renderable.block.MainBlock import MainBlock
from edu.uca.renderable.block.BooleanBlock import BooleanBlock
from edu.uca.renderable.argument.DropdownNumberArgument import DropdownNumberArgument
from edu.uca.renderable.block.NumberBlock import NumberBlock
from edu.uca.renderable.argument.StringArgument import StringArgument
from edu.uca.renderable.block.StringBlock import StringBlock
from edu.uca.renderable.argument.DropdownBooleanArgument import DropdownBooleanArgument
from edu.uca.renderable.block.HatBlock import HatBlock
from edu.uca.renderable.hardware.ComponentBlock import ComponentBlock
from edu.uca.renderable.hardware.DropdownPin import DropdownPin
from edu.uca.renderable.argument.DropdownStringArgument import DropdownStringArgument

def createStatementBlock(off, name, color):
    if off: return FakeStatementBlock(name, color)
    else: return StatementBlock(name, color)
    
def createCompoundStatementBlock(off, name, qty, color, loop):
    if off: return FakeCompoundStatementBlock(name, qty, color, loop)
    else: return CompoundStatementBlock(name, qty, color, loop)
    
def createMainBlock(off, name):
    if off: return FakeMainBlock(name)
    else: return MainBlock(name)
    
def createHatBlock(off, name, color):
    if off: return #FakeHatBlock(name, color)
    else: return HatBlock(name, color)
    
def createBooleanBlock(off, name, color):
    if off: return FakeBooleanBlock(name, color)
    else: return BooleanBlock(name, color)
    
def createNumberBlock(off, name, color):
    if off: return FakeNumberBlock(name, color)
    else: return NumberBlock(name, color)
    
def createStringBlock(off, name, color):
    if off: return FakeStringBlock(name, color)
    else: return StringBlock(name, color)
        
def createNumberBlockHolder(off, block):
    if off: return FakeBlockHolder(FakeNumberArgument(), block)
    else: return BlockHolder(NumberArgument(block), block)

def createBooleanBlockHolder(off, block, color):
    if off: return FakeBlockHolder(FakeBooleanArgument(), block)
    else: return BlockHolder(BooleanArgument(), block)
    
def createStringBlockHolder(off, block):
    if off: return FakeBlockHolder(FakeStringArgument(), block)
    else: return BlockHolder(StringArgument(block), block)
    
def createDropdownNumberBlockHolder(off, pins, block):
    if off: return FakeBlockHolder(FakeDropdownNumberArgument(pins), block)
    else: return BlockHolder(DropdownNumberArgument(pins, block), block)

def createDropdownStringBlockHolder(off, pins, block):
    if off: return FakeBlockHolder(FakeDropdownStringArgument(pins), block)
    else: return BlockHolder(DropdownStringArgument(pins, block), block)
        
def createDropdownBooleanBlockHolder(off, pins, block):
    if off: return FakeBlockHolder(FakeDropdownBooleanArgument(pins), block)
    else: return BlockHolder(DropdownBooleanArgument(pins, block), block)
    
def createComponentBlock(off, name, text, mode, listBlockName):
    if off: return FakeComponentBlock(name, text, mode, listBlockName)
    else: return ComponentBlock(name, text, mode, listBlockName)
    
def createDropdownPin(off, component, mode, label):
    if off: return FakeDropdownPin(component, mode, label, StyleName='dropdown_btn')
    else: return DropdownPin(component, mode, label, StyleName='dropdown_btn')
