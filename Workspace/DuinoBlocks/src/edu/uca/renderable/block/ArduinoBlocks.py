#!/usr/local/bin/python
# -*- coding: utf-8 -*-

from edu.uca.renderable.CreatorBlockFactory import createStatementBlock,\
    createNumberBlockHolder, createCompoundStatementBlock,\
    createBooleanBlockHolder, createMainBlock, createBooleanBlock,\
    createDropdownNumberBlockHolder, createNumberBlock, createStringBlockHolder,\
    createStringBlock, createDropdownBooleanBlockHolder, createHatBlock,\
    createDropdownStringBlockHolder
    
from edu.uca.util.Constants import *
from edu.uca.Workspace import numericVars, alphaNumericVars, logicVars,\
    countComponents
    
from edu.uca.util.i18n import _, gettext_noop

#CONTROL-------------------------------------------------------------------------------------------
 
def if_(off=False):
    csb = createCompoundStatementBlock(off, 'if_') 
    csb.addCodeElement(gettext_noop('if&nbsp;&nbsp;'))
    csb.addArgumentHolder(createBooleanBlockHolder(off, csb))
    return csb
def if_else_(off=False):
    csb = createCompoundStatementBlock(off, 'if_else_', 2)
    csb.addCodeElement(gettext_noop('if&nbsp;&nbsp;'))
    csb.addArgumentHolder(createBooleanBlockHolder(off, csb))
    csb.block.addCodeElement(gettext_noop('else'))
    return csb
def forever(off=False):
    mb = createMainBlock(off, 'forever')              
    mb.addCodeElement(gettext_noop('forever'))
    return mb
def repeat_(off=False):
    csb = createCompoundStatementBlock(off, 'repeat_', loop=True)
    csb.addCodeElement(gettext_noop('repeat'))
    csb.addArgumentHolder(createNumberBlockHolder(off, csb)) 
    return csb
def doWhile(off=False):
    csb = createCompoundStatementBlock(off, name='doWhile', loop=True)
    csb.addCodeElement('fa&ccedil;a')
    csb.block.addCodeElement('at&eacute;')
    csb.block.addArgumentHolder(createBooleanBlockHolder(off, csb))
    return csb
def while_(off=False):
    csb = createCompoundStatementBlock(off, name='while_', loop=True)
    csb.addCodeElement(gettext_noop('while'))
    csb.addArgumentHolder(createBooleanBlockHolder(off, csb))
    return csb
def delay_(off=False):
    sb = createStatementBlock(off, 'delay_', 'orange')        
    sb.addCodeElement(gettext_noop('delay'))
    sb.addArgumentHolder(createNumberBlockHolder(off, sb))
    sb.addCodeElement('ms')
    return sb
def delayUntil(off=False):
    sb = createStatementBlock(off, 'delayUntil', 'orange')        
    sb.addCodeElement(gettext_noop('espere ate que'))
    sb.addArgumentHolder(createBooleanBlockHolder(off, sb))
    return sb

#OPERATORS-------------------------------------------------------------------------------------------         
def numericOperation(name, operator, off):
    nb = createNumberBlock(off, name)
    nb.addCodeElement()
    nb.addArgumentHolder(createNumberBlockHolder(off, nb))          
    nb.addCodeElement(operator, {'+':'plus', '&minus;':'minus', '&times;':'multiply', '&divide;':'divide'})
    nb.addArgumentHolder(createNumberBlockHolder(off, nb))
    nb.addCodeElement()
    return nb
def plus(off=False):
    return numericOperation('plus', '+', off)
def minus(off=False):
    return numericOperation('minus', '&minus;', off)
def multiply(off=False):
    return numericOperation('multiply', '&times;', off)
def divide(off=False):
    return numericOperation('divide', '&divide;', off)   
#-----------
def relationalOperation( name, operator, off):
    bb = createBooleanBlock(off, name)
    bb.addArgumentHolder(createNumberBlockHolder(off, bb))          
    bb.addCodeElement(operator, {'=':'equals','<':'lesser','>':'greater','&le;':'lesser_equals','&ge;':'greater_equals','&ne;':'not_equals'})
    bb.addArgumentHolder(createNumberBlockHolder(off, bb))
    return bb
def equals(off=False):
    return relationalOperation('equals', '=', off)   
def lesser(off=False):
    return relationalOperation('lesser', '<', off)
def greater(off=False):
    return relationalOperation('greater', '>', off)
def lesser_equals(off=False):
    return relationalOperation('lesser_equals', '&le;', off)
def greater_equals(off=False):
    return relationalOperation('greater_equals', '&ge;', off)
def not_equals(off=False):
    return relationalOperation('not_equals', '&ne;', off)
#-----------   
def logicOperation(name, operator, off):
    bb = createBooleanBlock(off, name)
    bb.addArgumentHolder(createBooleanBlockHolder(off, bb))             
    bb.addCodeElement(operator, {gettext_noop('and'):'and_', gettext_noop('or'):'or_'})
    bb.addArgumentHolder(createBooleanBlockHolder(off, bb))
    return bb
def and_(off=False):
    return logicOperation('and_', gettext_noop('and'), off) 
def or_(off=False):
    return logicOperation('or_', gettext_noop('or'), off) 
def not_(off=False):
    bb = createBooleanBlock(off, 'not_')        
    bb.addCodeElement(gettext_noop('not'))
    bb.addArgumentHolder(createBooleanBlockHolder(off, bb))
    return bb
def logicConstant(name, operator, off):
    bb = createBooleanBlock(off, name)   
    bb.addCodeElement(operator, {gettext_noop('TRUE'):'true_', gettext_noop('FALSE'):'false_'}, {gettext_noop('T'):gettext_noop('TRUE'), gettext_noop('F'):gettext_noop('FALSE')})
    return bb
def true_(off=False):
    return logicConstant('true_', gettext_noop('TRUE'), off)
def false_(off=False):
    return logicConstant('false_', gettext_noop('FALSE'), off)

#INPUT-------------------------------------------------------------------------------------------
        
def analogRead(off=False):
    nb = createNumberBlock(off, 'analogRead', 'purple')
    nb.addCodeElement(gettext_noop('analog pin'))
    nb.addArgumentHolder(createDropdownNumberBlockHolder(off, ANALOG_PINS, nb))
    nb.addCodeElement()
    return nb
def digitalRead(off=False): 
    bb = createBooleanBlock(off, 'digitalRead', 'purple')
    bb.addCodeElement(gettext_noop('digital pin'))
    bb.addArgumentHolder(createDropdownNumberBlockHolder(off, ALL_PINS, bb))
    bb.addCodeElement()
    return bb
def getButton(off=False):
    sb = createBooleanBlock(off, 'getButton', 'purple')
    sb.addCodeElement('o')
    sb.addVariableElement(gettext_noop('button'), countComponents, 'component_button')
    sb.addCodeElement('est&aacute; pressionado')
    return sb
def getKnob(off=False):
    nb = createNumberBlock(off, 'getKnob', 'purple')
    nb.addCodeElement('valor')
    nb.addVariableElement(gettext_noop('knob'), countComponents, 'component_knob')
    return nb
def getLdr(off=False):
    nb = createNumberBlock(off, 'getLdr', 'purple')
    nb.addCodeElement(gettext_noop('luminosity'))
    nb.addVariableElement('ldr', countComponents, 'component_ldr')
    return nb
def getThermistor(off=False):
    nb = createNumberBlock(off, 'getThermistor', 'purple')
    nb.addCodeElement(gettext_noop('temperature'))
    nb.addVariableElement('termistor', countComponents, 'component_thermistor')
    return nb
def getJoystickVRx(off=False):
    nb = createNumberBlock(off, 'getJoystickVRx', 'purple')
    nb.addCodeElement(gettext_noop('abscissa')+' (x)')
    nb.addVariableElement('joystick', countComponents, 'component_joystick')
    return nb
def getJoystickVRy(off=False):
    nb = createNumberBlock(off, 'getJoystickVRy', 'purple')
    nb.addCodeElement(gettext_noop('ordinate')+' (y)')
    nb.addVariableElement('joystick', countComponents, 'component_joystick')
    return nb
def getJoystickSW(off=False):
    nb = createBooleanBlock(off, 'getJoystickSW', 'purple')
    nb.addCodeElement('o')
    nb.addVariableElement('joystick', countComponents, 'component_joystick')
    nb.addCodeElement('est&aacute; pressionado')
    return nb
def getKey(off=False):
    sb = createStringBlock(off, 'getKey', 'purple')
    sb.addCodeElement('leia a tecla pressionada')
    sb.addVariableElement('teclado', countComponents, 'component_keypad')
    return sb
def keyPressed(off=False):
    bb = createBooleanBlock(off, 'keyPressed', 'purple')
    bb.addCodeElement('o')
    bb.addVariableElement('teclado', countComponents, 'component_keypad') 
    bb.addCodeElement('foi pressionado')   
    return bb 
def waitForAnyKey(off=False):
    sb = createStringBlock(off, 'waitForAnyKey', 'purple')
    sb.addCodeElement('espere alguma tecla')
    sb.addVariableElement('teclado', countComponents, 'component_keypad')
    return sb
def waitForAnyNumber(off=False):
    sb = createStringBlock(off, 'waitForAnyNumber', 'purple')
    sb.addCodeElement('espere algum n&uacute;mero')
    sb.addVariableElement('teclado', countComponents, 'component_keypad')
    return sb
def waitForTheKey(off=False):
    sb = createStatementBlock(off, 'waitForTheKey', 'purple')
    sb.addCodeElement('espere pela tecla')
    sb.addArgumentHolder(createDropdownStringBlockHolder(off, KEYPAD_KEYS, sb))
    sb.addCodeElement()
    sb.addVariableElement('teclado', countComponents, 'component_keypad')
    return sb
def irReceived(off=False):
    bb = createBooleanBlock(off, 'irReceived', 'purple')
    bb.addCodeElement('o')
    bb.addVariableElement('infravermelho', countComponents, 'component_IR') 
    bb.addCodeElement('recebeu sinal')   
    return bb 
def getIRValue(off=False):
    sb = createStringBlock(off, 'getIRValue', 'purple')
    sb.addCodeElement('leia o sinal recebido')
    sb.addVariableElement('infravermelho', countComponents, 'component_IR')
    return sb
def waitForAnySignal(off=False):
    sb = createStringBlock(off, 'waitForAnySignal', 'purple')
    sb.addCodeElement('espere algum sinal')
    sb.addVariableElement('infravermelho', countComponents, 'component_IR')
    return sb
def waitForTheSignal(off=False):
    sb = createStatementBlock(off, 'waitForTheSignal', 'purple')
    sb.addCodeElement('espere pelo sinal')
    sb.addArgumentHolder(createStringBlockHolder(off, sb))
    sb.addCodeElement()
    sb.addVariableElement('infravermelho', countComponents, 'component_IR')
    return sb
#OUTPUT-------------------------------------------------------------------------------------------

def digitalWrite(off=False):
    sb = createStatementBlock(off, 'digitalWrite')
    sb.addCodeElement(gettext_noop('set digital pin'))
    sb.addArgumentHolder(createDropdownNumberBlockHolder(off, ALL_PINS, sb))
    sb.addCodeElement(gettext_noop('value'))
    sb.addArgumentHolder(createDropdownBooleanBlockHolder(off, DIGITAL_VALUES, sb))
    return sb  
def analogWrite(off=False):
    sb = createStatementBlock(off, 'analogWrite')
    sb.addCodeElement(gettext_noop('set analog pin'))
    sb.addArgumentHolder(createDropdownNumberBlockHolder(off, PWM_PINS, sb))
    sb.addCodeElement(gettext_noop('value'))
    sb.addArgumentHolder(createNumberBlockHolder(off, sb))
    return sb
def setLed(off=False):
    sb = createStatementBlock(off, 'setLed')
    sb.addCodeElement(gettext_noop('set'))
    sb.addVariableElement('led', countComponents, 'component_led')
    sb.addCodeElement(gettext_noop('to'))
    sb.addCodeElement()
    sb.addArgumentHolder(createDropdownBooleanBlockHolder(off, LED_VALUES, sb))
    return sb
def setBrightnessLed(off=False):
    sb = createStatementBlock(off, 'setBrightnessLed')
    sb.addCodeElement(gettext_noop('set'))
    sb.addVariableElement('led', countComponents, 'component_led')
    sb.addCodeElement('brilho')
    sb.addCodeElement()
    sb.addArgumentHolder(createNumberBlockHolder(off, sb))
    return sb
def blinkLed(off=False):
    sb = createStatementBlock(off, 'blinkLed')
    sb.addCodeElement('pisca')
    sb.addVariableElement('led', countComponents, 'component_led')
    sb.addCodeElement()
    sb.addArgumentHolder(createNumberBlockHolder(off, sb))
    sb.addCodeElement('vezes em')
    sb.addArgumentHolder(createNumberBlockHolder(off, sb))
    sb.addCodeElement('s')
    return sb
def setRGBLed(off=False):
    sb = createStatementBlock(off, 'setRGBLed')
    sb.addCodeElement(gettext_noop('set'))
    sb.addVariableElement('led rgb', countComponents, 'component_rgb_led')
    sb.addCodeElement(gettext_noop('R'))
    sb.addArgumentHolder(createNumberBlockHolder(off, sb))
    sb.addCodeElement(gettext_noop('G'))
    sb.addArgumentHolder(createNumberBlockHolder(off, sb))
    sb.addCodeElement(gettext_noop('B'))
    sb.addArgumentHolder(createNumberBlockHolder(off, sb))
    return sb
def setServo(off=False):
    sb = createStatementBlock(off, 'setServo')
    sb.addCodeElement(gettext_noop('set'))
    sb.addVariableElement('servo', countComponents, 'component_servo')
    sb.addCodeElement(gettext_noop('angle'))
    sb.addArgumentHolder(createNumberBlockHolder(off, sb))
    sb.addCodeElement('&deg;')
    return sb
def setBuzzer(off=False):
    sb = createStatementBlock(off, 'setBuzzer')
    sb.addCodeElement(gettext_noop('play'))
    sb.addVariableElement('buzina', countComponents, 'component_buzzer')
    sb.addCodeElement('<i>'+gettext_noop('note')+'</i>')
    sb.addArgumentHolder(createDropdownNumberBlockHolder(off, MANY_FEW_NOTES, sb))
    sb.addCodeElement('<i>'+gettext_noop('duration')+'</i>')
    sb.addArgumentHolder(createNumberBlockHolder(off, sb))
    return sb
def onMotor(off=False):
    sb = createStatementBlock(off, 'onMotor')
    sb.addCodeElement(gettext_noop('on'))
    sb.addCodeElement()
    sb.addVariableElement('motor', countComponents, 'component_motor')
    sb.addCodeElement()
    sb.addCodeElement(gettext_noop('to'))
    sb.addCodeElement()
    sb.addArgumentHolder(createDropdownBooleanBlockHolder(off, DIRECTIONS_MOTOR, sb))
    return sb
def offMotor(off=False):
    sb = createStatementBlock(off, 'offMotor')
    sb.addCodeElement(gettext_noop('stop'))
    sb.addCodeElement()
    sb.addVariableElement('motor', countComponents, 'component_motor')
    return sb
def speedMotor(off=False):
    sb = createStatementBlock(off, 'speedMotor')
    sb.addCodeElement(gettext_noop('speed'))
    sb.addCodeElement()
    sb.addVariableElement('motor', countComponents, 'component_motor')
    sb.addCodeElement()
    sb.addArgumentHolder(createNumberBlockHolder(off, sb))
    return sb
def setLcd(off=False):
    sb = createStatementBlock(off, 'setLcd')
    sb.addCodeElement('escreve no')
    sb.addVariableElement('lcd', countComponents, 'component_lcd')
    sb.addCodeElement(gettext_noop('text'))
    sb.addArgumentHolder(createStringBlockHolder(off, sb))
    return sb
def posLcd(off=False):
    sb = createStatementBlock(off, 'posLcd')
    sb.addCodeElement('posicione')
    sb.addVariableElement('lcd', countComponents, 'component_lcd')
    sb.addCodeElement(gettext_noop('row'))
    sb.addArgumentHolder(createDropdownNumberBlockHolder(off, LCD_ROWS, sb))
    sb.addCodeElement(gettext_noop('column'))
    sb.addArgumentHolder(createDropdownNumberBlockHolder(off, LCD_COLS, sb))
    return sb
def clearLcd(off=False):
    sb = createStatementBlock(off, 'clearLcd')
    sb.addCodeElement('limpe o')
    sb.addVariableElement('lcd', countComponents, 'component_lcd')
    return sb
def setDisplay7seg(off=False):
    sb = createStatementBlock(off, 'setDisplay7seg')
    sb.addCodeElement(gettext_noop('show on'))
    sb.addVariableElement('display7seg', countComponents, 'component_display7seg')
    sb.addCodeElement(gettext_noop('the nº'))
    sb.addArgumentHolder(createDropdownNumberBlockHolder(off, DISPLAY_7SEG_NUMBERS, sb))
    return sb
def clearDisplay7seg(off=False):
    sb = createStatementBlock(off, 'clearDisplay7seg')
    sb.addCodeElement(gettext_noop('erase'))
    sb.addVariableElement('display7seg', countComponents, 'component_display7seg')
    return sb
#UTILITIES-------------------------------------------------------------------------------------------
def trigonometryFunction(name, operator, off):
    nb = createNumberBlock(off, name, 'darkblue')
    nb.addCodeElement(operator, {'sen':'sin_', 'cos':'cos_', 'tan':'tan_'})
    nb.addArgumentHolder(createNumberBlockHolder(off, nb))
    nb.addCodeElement()
    return nb
def sin_(off=False):
    return trigonometryFunction('sin_', 'sen', off) 
def cos_(off=False):
    return trigonometryFunction('cos_', 'cos', off)
def tan_(off=False):
    return trigonometryFunction('tan_', 'tan', off)
#--------------------    
def binaryFunction(name, operator, off):
    nb = createNumberBlock(off, name, 'darkblue')
    nb.addCodeElement(operator, {'máx':'max_', 'mín':'min_'})
    nb.addArgumentHolder(createNumberBlockHolder(off, nb))
    nb.addCodeElement()
    nb.addArgumentHolder(createNumberBlockHolder(off, nb))
    nb.addCodeElement()
    return nb
def unaryFunction(name, operator, off):
    nb = createNumberBlock(off, name, 'darkblue')
    nb.addCodeElement(operator, {'&radic;':'sqrt_', 'abs':'abs_', 'arredonde':'round_'})
    nb.addArgumentHolder(createNumberBlockHolder(off, nb))
    nb.addCodeElement()
    return nb
def modulo_(off=False):
    nb = createNumberBlock(off, 'modulo_', 'darkblue')
    nb.addArgumentHolder(createNumberBlockHolder(off, nb))
    nb.addCodeElement('resto da divisão  por')
    nb.addArgumentHolder(createNumberBlockHolder(off, nb))
    nb.addCodeElement()
    return nb
def map_(off=False):
    nb = createNumberBlock(off, 'map_', 'darkblue')
    nb.addCodeElement('mapeie [')
    nb.addArgumentHolder(createNumberBlockHolder(off, nb))
    nb.addCodeElement(',')
    nb.addArgumentHolder(createNumberBlockHolder(off, nb))
    nb.addCodeElement('] para [')
    nb.addArgumentHolder(createNumberBlockHolder(off, nb))
    nb.addCodeElement(',')
    nb.addArgumentHolder(createNumberBlockHolder(off, nb))
    nb.addCodeElement(']')
    return nb
def map2_(off=False):
    nb = createNumberBlock(off, 'map2_', 'darkblue')
    nb.addCodeElement('mapeie [0, 1024] para [0, 255]')
    nb.addCodeElement()
    nb.addArgumentHolder(createNumberBlockHolder(off, nb))
    nb.addCodeElement()
    return nb
def constrains_(off=False):
    nb = createNumberBlock(off, 'constrains_', 'darkblue')
    nb.addCodeElement('restringe')
    nb.addArgumentHolder(createNumberBlockHolder(off, nb))
    nb.addCodeElement('entre')
    nb.addArgumentHolder(createNumberBlockHolder(off, nb))
    nb.addCodeElement('e')
    nb.addArgumentHolder(createNumberBlockHolder(off, nb))
    nb.addCodeElement()
    return nb
def round_(off=False):
    return unaryFunction('round_', 'arredonde', off)
def abs_(off=False):
    return unaryFunction('abs_', 'abs', off)
def sqrt_(off=False):
    return unaryFunction('sqrt_', '&radic;', off)
def max_(off=False):
    return binaryFunction('max_', 'max', off)
def min_(off=False):
    return binaryFunction('min_', 'min', off)
def intToStr(off=False):
    sb = createStringBlock(off, 'intToStr', 'darkblue')
    sb.addCodeElement("converte")
    sb.addArgumentHolder(createNumberBlockHolder(off, sb))
    return sb
def boolToStr(off=False):
    sb = createStringBlock(off, 'boolToStr', 'darkblue')
    sb.addCodeElement("converte")
    sb.addArgumentHolder(createBooleanBlockHolder(off, sb))
    return sb
def StrToInt(off=False):
    nb = createNumberBlock(off, 'StrToInt', 'darkblue')
    nb.addCodeElement("converte")
    nb.addArgumentHolder(createStringBlockHolder(off, nb))
    return nb
def glue(off=False):
    sb = createStringBlock(off, 'glue', 'darkblue')
    sb.addCodeElement("junte")
    sb.addArgumentHolder(createStringBlockHolder(off, sb))
    sb.addCodeElement("com")
    sb.addArgumentHolder(createStringBlockHolder(off, sb))
    return sb
def alphanumericOperation(name, operator, off):
    bb = createBooleanBlock(off, name, 'darkblue')
    bb.addArgumentHolder(createStringBlockHolder(off, bb))          
    bb.addCodeElement(operator, {'=':'str_equals','&ne;':'str_not_equals'})
    bb.addArgumentHolder(createStringBlockHolder(off, bb))
    return bb
def str_equals(off=False):
    return alphanumericOperation('str_equals', '=', off)   
def str_not_equals(off=False):
    return alphanumericOperation('str_not_equals', '&ne;', off)
def println(off=False):
    sb = createStatementBlock(off, 'println', 'darkblue')
    sb.addCodeElement('escreve no monitor serial')
    sb.addCodeElement()
    sb.addArgumentHolder(createStringBlockHolder(off, sb))
    sb.addCodeElement()
    return sb
def available(off=False):
    bb = createBooleanBlock(off, 'available', 'darkblue')
    bb.addCodeElement('o monior serial recebeu msg')
    return bb
def getMsg(off=False):
    sb = createStringBlock(off, 'getMsg', 'darkblue')
    sb.addCodeElement('leia a msg recebida monitor serial')
    return sb
def waitForAnyMsg(off=False):
    sb = createStringBlock(off, 'waitForAnyMsg', 'darkblue')
    sb.addCodeElement('espere alguma msg monitor serial')
    return sb
def waitForTheMsg(off=False):
    sb = createStatementBlock(off, 'waitForTheMsg', 'darkblue')
    sb.addCodeElement('espere pela msg')
    sb.addArgumentHolder(createStringBlockHolder(off, sb))
    sb.addCodeElement('monitor serial')
    return sb
def millis(off=False):
    sb = createNumberBlock(off, 'millis', 'darkblue')
    sb.addCodeElement('tempo decorrido <i>(ms)</i>')
    return sb 
def random(off=False):
    sb = createNumberBlock(off, 'random', 'darkblue')
    sb.addCodeElement('aleatorio')
    sb.addCodeElement('<i>max</i>')
    sb.addArgumentHolder(createNumberBlockHolder(off, sb))
    return sb
def random_min_max(off=False):
    sb = createNumberBlock(off, 'random_min_max', 'darkblue')
    sb.addCodeElement('aleatorio')
    sb.addCodeElement('<i>min</i>')
    sb.addArgumentHolder(createNumberBlockHolder(off, sb))
    sb.addCodeElement()
    sb.addCodeElement('<i>max</i>')
    sb.addArgumentHolder(createNumberBlockHolder(off, sb))
    return sb
def pinMode(off=False):#deprecated
    sb = createStatementBlock(off, 'pinMode', 'darkblue')
    sb.addCodeElement('pinMode')
    sb.addArgumentHolder(createDropdownNumberBlockHolder(off, ALL_PINS, sb))
    sb.addCodeElement()
    sb.addArgumentHolder(createDropdownNumberBlockHolder(off, PIN_MODES, sb))
    return sb

#TYPES-----------------------------------------------------------------------------------------------  

def commandType(varName, color, off=False):
    sb = createStatementBlock(off, 'commandType', color)
    sb.varName = varName
    sb.addCodeElement(varName)
    sb.custom = True
    return sb
def numericType(varName, color, off=False):
    nb = createNumberBlock(off, 'numericType', color)
    nb.varName = varName
    nb.addCodeElement()
    nb.addCodeElement(varName)
    nb.addCodeElement()
    nb.custom = True
    return nb
def logicType(varName, color, off=False): 
    bb = createBooleanBlock(off, 'logicType', color)
    bb.varName = varName
    bb.addCodeElement()         
    bb.addCodeElement(varName)
    bb.addCodeElement()
    bb.custom = True
    return bb
def alphaNumericType(varName, color, off=False):
    sb = createStringBlock(off, 'alphaNumericType', color)
    sb.varName = varName
    sb.addCodeElement()         
    sb.addCodeElement(varName)
    sb.addCodeElement()
    sb.custom = True
    return sb
def hatBlockType(varName, color, off=False):
    hb = createHatBlock(off, 'hatBlockType', color)
    hb.varName = varName
    hb.addCodeElement()         
    hb.addCodeElement(varName)
    hb.addCodeElement()
    hb.custom = True
    return hb
#VARIABLES-------------------------------------------------------------------------------------------   
def getNumericVar(off=False):
    nb = createNumberBlock(off, 'getNumericVar', 'red')
    nb.addCodeElement()
    nb.addVariableElement(TITLE_NUMERIC_VAR, numericVars)
    nb.addCodeElement()
    return nb
def getLogicVar(off=False):
    bb = createBooleanBlock(off, 'getLogicVar', 'red')
    bb.addCodeElement()
    bb.addVariableElement(TITLE_LOGIC_VAR, logicVars)
    bb.addCodeElement()
    return bb
def getAlphaNumericVar(off=False):
    sb = createStringBlock(off, 'getAlphaNumericVar', 'red')
    sb.addCodeElement()
    sb.addVariableElement(TITLE_ALPHANUMERIC_VAR, alphaNumericVars)
    sb.addCodeElement()
    return sb
def setNumericVar(off=False):
    sb = createStatementBlock(off, 'setNumericVar', 'red')
    sb.addCodeElement('mude')
    sb.addVariableElement(TITLE_NUMERIC_VAR, numericVars)
    sb.addCodeElement('para')
    sb.addCodeElement()
    sb.addArgumentHolder(createNumberBlockHolder(off, sb))
    return sb
def setLogicVar(off=False):
    sb = createStatementBlock(off, 'setLogicVar', 'red')
    sb.addCodeElement('mude')
    sb.addVariableElement(TITLE_LOGIC_VAR, logicVars)
    sb.addCodeElement('para')
    sb.addCodeElement()
    sb.addArgumentHolder(createDropdownBooleanBlockHolder(off, LOGIC_VALUES, sb))
    return sb
def setAlphaNumericVar(off=False):
    sb = createStatementBlock(off, 'setAlphaNumericVar', 'red')
    sb.addCodeElement('mude')
    sb.addVariableElement(TITLE_ALPHANUMERIC_VAR, alphaNumericVars)
    sb.addCodeElement('para')
    sb.addCodeElement()
    sb.addArgumentHolder(createStringBlockHolder(off, sb))
    sb.addCodeElement()
    return sb
def incNumericVar(off=False):
    sb = createStatementBlock(off, 'incNumericVar', 'red')
    sb.addCodeElement('incrementa')
    sb.addVariableElement(TITLE_NUMERIC_VAR, numericVars)
    sb.addCodeElement('de')
    sb.addCodeElement()
    sb.addArgumentHolder(createNumberBlockHolder(off, sb))
    return sb
def decNumericVar(off=False):
    sb = createStatementBlock(off, 'decNumericVar', 'red')
    sb.addCodeElement('decrementa')
    sb.addVariableElement(TITLE_NUMERIC_VAR, numericVars)
    sb.addCodeElement('de')
    sb.addCodeElement()
    sb.addArgumentHolder(createNumberBlockHolder(off, sb))
    return sb

#-------------------------------------------------------------------------------------------
