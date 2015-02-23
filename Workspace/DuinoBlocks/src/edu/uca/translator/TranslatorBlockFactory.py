#!/usr/local/bin/python
# -*- coding: utf-8 -*-

from edu.uca.translator.TranslatorBlock import TranslatorBlock
from edu.uca.util.Constants import MANY_FEW_NOTES, DIRECTIONS_MOTOR, LCD_COLS, LCD_ROWS, \
    DIGITAL_VALUES, LED_VALUES, LOGIC_VALUES

#<CONTROLS>-------------------------------------------------------------------------------------------  
class setup(TranslatorBlock):#deprecated
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        ret = ''
        translatorBlock = self.nextTranslatorBlock()   
        #ret += .toCode()      
        while translatorBlock is not None:
            setupCode = translatorBlock.toCode()
            ret += setupCode
            self.translator.addSetupCommand(setupCode)
            translatorBlock = translatorBlock.nextTranslatorBlock()
        return ret  
        
class forever(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        ret = "void loop(){\n"       
        translatorBlock = self.getTranslatorBlockAtChildrenSocket(0)          
        while translatorBlock is not None:
            ret += translatorBlock.toCode()
            translatorBlock = translatorBlock.nextTranslatorBlock()            
        ret += "}\n" 
        return ret
class if_(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        ret = "if("
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0)
        ret += translatorBlock.toCode()
        ret += "){\n"
        translatorBlock = self.getTranslatorBlockAtChildrenSocket(0)
        while translatorBlock != None:
            ret += translatorBlock.toCode()
            translatorBlock = translatorBlock.nextTranslatorBlock()
        ret += "}\n"
        return ret
class if_else_(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        ret = "if("
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0)
        ret += translatorBlock.toCode()
        ret += "){\n"
        translatorBlock = self.getTranslatorBlockAtChildrenSocket(0)
        while translatorBlock != None:
            ret += translatorBlock.toCode()
            translatorBlock = translatorBlock.nextTranslatorBlock()
        ret += "}\nelse{\n"
        translatorBlock = self.getTranslatorBlockAtChildrenSocket(1)
        while translatorBlock != None:
            ret += translatorBlock.toCode()
            translatorBlock = translatorBlock.nextTranslatorBlock()
        ret += "}\n"
        return ret
class repeat_(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        varName = self.translator.buildVariableName()
        self.translator.addDefinitionCommand("int " + varName + ";")
        ret = "for (" + varName + " = 0; " + varName + " < ("
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0)
        ret += translatorBlock.toCode()
        ret += "); ++" + varName + "){\n"
        translatorBlock = self.getTranslatorBlockAtChildrenSocket(0)
        while translatorBlock != None:
            ret += translatorBlock.toCode()
            translatorBlock = translatorBlock.nextTranslatorBlock()
        ret += "}\n"
        return ret
class while_(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        ret = "while ("
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0)
        ret += translatorBlock.toCode()
        ret += "){\n"
        translatorBlock = self.getTranslatorBlockAtChildrenSocket(0)
        while translatorBlock != None:
            ret += translatorBlock.toCode()
            translatorBlock = translatorBlock.nextTranslatorBlock()
        ret += "}\n"
        return ret
class delay_(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        ret = "delay("
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0)
        ret += translatorBlock.toCode()
        ret += ");\n"
        return ret
class delayUntil(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        ret = "while (!("
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0)
        ret += translatorBlock.toCode()
        ret += ")){\n}\n"
        return ret
#<\CONTROLS>-------------------------------------------------------------------------------------------

#<OPERATORS>-------------------------------------------------------------------------------------------
class BinaryOperation(TranslatorBlock):
    def __init__(self, block, operation, translator):
        TranslatorBlock.__init__(self, block, translator)
        self.operation = operation
    def toCode(self):
        ret = "("
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0)
        ret += translatorBlock.toCode()
        ret += self.operation
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(1)
        ret += translatorBlock.toCode()
        ret += ")"
        return ret    
class plus(BinaryOperation):
    def __init__(self, block, translator):
        BinaryOperation.__init__(self, block, " + ", translator)
class minus(BinaryOperation):
    def __init__(self, block, translator):
        BinaryOperation.__init__(self, block, " - ", translator)
class multiply(BinaryOperation):
    def __init__(self, block, translator):
        BinaryOperation.__init__(self, block, " * ", translator)
class divide(BinaryOperation):
    def __init__(self, block, translator):
        BinaryOperation.__init__(self, block, " / ", translator)
#-----------
class equals(BinaryOperation):
    def __init__(self, block, translator):
        BinaryOperation.__init__(self, block, " == ", translator)
class lesser(BinaryOperation):
    def __init__(self, block, translator):
        BinaryOperation.__init__(self, block, " < ", translator)
class greater(BinaryOperation):
    def __init__(self, block, translator):
        BinaryOperation.__init__(self, block, " > ", translator)
class lesser_equals(BinaryOperation):
    def __init__(self, block, translator):
        BinaryOperation.__init__(self, block, " <= ", translator)
class greater_equals(BinaryOperation):
    def __init__(self, block, translator):
        BinaryOperation.__init__(self, block, " >= ", translator)
class not_equals(BinaryOperation):
    def __init__(self, block, translator):
        BinaryOperation.__init__(self, block, " != ", translator)
#-----------
class and_(BinaryOperation):
    def __init__(self, block, translator):
        BinaryOperation.__init__(self, block, " && ", translator)
class or_(BinaryOperation):
    def __init__(self, block, translator):
        BinaryOperation.__init__(self, block, " || ", translator)
class not_(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        ret = "!("
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0)
        ret += translatorBlock.toCode()
        ret += ")"
        return ret
class true_(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        return "true"
class false_(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        return "false"
#<\OPERATORS>------------------------------------------------------------------------------------------

#<SETUP>-----------------------------------------------------------------------------------------------
class pinMode(TranslatorBlock):#deprecated
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        return ''
#<\SETUP>----------------------------------------------------------------------------------------------

#<INPUT>-----------------------------------------------------------------------------------------------
class digitalRead(TranslatorBlock):
    UCA_DIGITAL_READ_DEFINE = "boolean syst_digitalRead(int pinNumber){\npinMode(pinNumber, INPUT);\nreturn digitalRead(pinNumber);\n}\n\n"
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0)
        if isinstance(translatorBlock, Const) or isinstance(translatorBlock, getNumericVar):
            number = translatorBlock.toCode()
            #setupCode = "pinMode(" + number + ", INPUT);\n"
            #self.translator.addSetupCommand(setupCode)
            self.translator.addInputPin(number)
            ret = "digitalRead("
            ret += number
            ret += ")"
            return ret
        else:
            self.translator.addDefinitionCommand(self.UCA_DIGITAL_READ_DEFINE)
            ret = "syst_digitalRead("
            ret += translatorBlock.toCode()
            ret += ")"
            return ret
class analogRead(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        ret = "analogRead("
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0)
        #if isinstance(translatorBlock, NumberBlock):
        ret += translatorBlock.toCode()
        ret += ")"
        return ret
        #else:
            #raise BlockException(self.blockId, "analog pin# must be a number")
#<\INPUT>----------------------------------------------------------------------------------------------

#<OUTPUT>----------------------------------------------------------------------------------------------
class digitalWrite(TranslatorBlock):
    UCA_DIGITAL_WRITE_DEFINE = "void syst_digitalWrite(int pinNumber, boolean status){\npinMode(pinNumber, OUTPUT);\ndigitalWrite(pinNumber, status);\n}\n"
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0)
        if isinstance(translatorBlock, Const):
            number = translatorBlock.toCode()
            #setupCode = "pinMode(" + number + ", OUTPUT);\n"
            #self.translator.addSetupCommand(setupCode)
            self.translator.addOutputPin(number)
            ret = "digitalWrite("
            ret += number
            ret += ", "
            translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(1)
            if isinstance(translatorBlock, Const): ret += DIGITAL_VALUES[translatorBlock.toCode()]
            else: ret += translatorBlock.toCode()
            ret += ");\n"
            return ret
        else:
            self.translator.addDefinitionCommand(self.UCA_DIGITAL_WRITE_DEFINE)
            ret = "syst_digitalWrite(";
            ret += translatorBlock.toCode()
            ret += ", "
            translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(1)
            ret += DIGITAL_VALUES[translatorBlock.toCode()]
            ret += ");\n"
            return ret
class analogWrite(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0)
        portNum = translatorBlock.toCode()
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(1)#AKI
        value = translatorBlock.toCode()
        #setupCode = "pinMode(" + portNum + ", OUTPUT);\n"
        #self.translator.addSetupCommand(setupCode)
        self.translator.addOutputPin(portNum)
        ret = "analogWrite(" + portNum + ", " + value + ");\n"
        return ret

#<\OUTPUT>---------------------------------------------------------------------------------------------

#<CONSTANTS>---------------------------------------------------------------------------------------------
class Const(object):
    def __init__(self, code):
        self.code = code
    def toCode(self):
        return self.code
#<\CONSTANTS>---------------------------------------------------------------------------------------------

#<VARIABLES>---------------------------------------------------------------------------------------------
class setNumericVar(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        internalVariableName = self.translator.getNumberVariable(self.getRequiredVariableName())#getVar(self.block, self.translator).toCode()
        if internalVariableName == None:
            internalVariableName = self.translator.buildVariableName(self.block.varName)
            self.translator.addNumberVariable(self.block.varName, internalVariableName)
            #self.translator.addDefinitionCommand("int " + internalVariableName + ";")
            self.translator.addDefinitionCommand("float " + internalVariableName + ";")
        ret = internalVariableName + " = "
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0)
        ret += translatorBlock.toCode()
        ret += ";\n"
        return ret
class getNumericVar(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):  
        internalVariableName = self.translator.getNumberVariable(self.getRequiredVariableName())
        if internalVariableName == None:
            internalVariableName = self.translator.buildVariableName(self.block.varName)
            self.translator.addNumberVariable(self.block.varName, internalVariableName)
            #self.translator.addDefinitionCommand("int " + internalVariableName + ";")
            self.translator.addDefinitionCommand("float " + internalVariableName + ";")
            self.translator.addSetupCommand(internalVariableName + " = 0;\n")
        return internalVariableName
class incNumericVar(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        internalVariableName = getNumericVar(self.block, self.translator).toCode()
        ret = internalVariableName + " += "
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0)
        ret += translatorBlock.toCode()
        ret += ";\n"
        return ret
class decNumericVar(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        internalVariableName = getNumericVar(self.block, self.translator).toCode()
        ret = internalVariableName + " -= "
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0)
        ret += translatorBlock.toCode()
        ret += ";\n"
        return ret
class setLogicVar(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        internalVariableName = self.translator.getBooleanVariable(self.getRequiredVariableName())
        if internalVariableName == None:
            internalVariableName = self.translator.buildVariableName(self.block.varName)
            self.translator.addBooleanVariable(self.block.varName, internalVariableName)
            self.translator.addDefinitionCommand("boolean " + internalVariableName + ";")
        ret = internalVariableName + " = "
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0)
        if isinstance(translatorBlock, Const): ret += LOGIC_VALUES[translatorBlock.toCode()]
        else: ret += translatorBlock.toCode()
        ret += ";\n"
        return ret
class getLogicVar(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):  
        internalVariableName = self.translator.getBooleanVariable(self.getRequiredVariableName())
        if internalVariableName == None:
            internalVariableName = self.translator.buildVariableName(self.block.varName)
            self.translator.addBooleanVariable(self.block.varName, internalVariableName)
            self.translator.addDefinitionCommand("boolean " + internalVariableName + ";")
            self.translator.addSetupCommand(internalVariableName + " = true;\n")
        return internalVariableName
class getAlphaNumericVar(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        internalVariableName = self.translator.getStringVariable(self.getRequiredVariableName())
        if internalVariableName == None:
            internalVariableName = self.translator.buildVariableName(self.block.varName)
            self.translator.addStringVariable(self.block.varName, internalVariableName)
            self.translator.addDefinitionCommand("String " + internalVariableName + ";")
            self.translator.addSetupCommand(internalVariableName + " = \"\";\n")
        return internalVariableName
class setAlphaNumericVar(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        internalVariableName = self.translator.getStringVariable(self.getRequiredVariableName())
        if internalVariableName == None:
            internalVariableName = self.translator.buildVariableName(self.block.varName)
            self.translator.addStringVariable(self.block.varName, internalVariableName)
            self.translator.addDefinitionCommand("String " + internalVariableName + ";")      
        ret = internalVariableName + " = " 
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0) 
        if (self.block.holderArguments[0].subBlock is not None):            
            ret += translatorBlock.toCode() + ";\n"
        else:
            ret += "\"" + translatorBlock.toCode() + "\";\n"
        return ret
#<\VARIABLES>---------------------------------------------------------------------------------------------

#<Utilit�rios>---------------------------------------------------------------------------------------------
class println(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):  
        self.translator.addSetupCommand("Serial.begin(9600);\n")
        ret = "Serial.println("
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0)
        if isinstance(translatorBlock, Const):
            ret += "\"" + translatorBlock.toCode() + "\""
        else:
            ret += translatorBlock.toCode()
        ret += ");\n"
        return ret
class available(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):        
        self.translator.addSetupCommand("Serial.begin(9600);\n")
        return "Serial.available()"    
class getMsg(TranslatorBlock):
    GET_MSG_DEFINE = "String syst_getMsg(){\nString content = \"\";\nchar character;\nwhile(Serial.available()){\ncharacter = Serial.read();\ncontent.concat(character);\ndelay(10);\n}\nreturn content;\n}"
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):   
        self.translator.addDefinitionCommand(self.GET_MSG_DEFINE)
        self.translator.addSetupCommand("Serial.begin(9600);\n")
        return "syst_getMsg()"     
class waitForAnyMsg(TranslatorBlock):
    GET_MSG_DEFINE = "String syst_getMsg(){\nString content = \"\";\nchar character;\nwhile(Serial.available()){\ncharacter = Serial.read();\ncontent.concat(character);\ndelay(10);\n}\nreturn content;\n}"
    WAIT_FOR_ANY_MSG_DEFINE = 'String syst_waitForAnyMsg(){\nwhile(!Serial.available());\nreturn syst_getMsg();\n}'
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):   
        self.translator.addDefinitionCommand(self.GET_MSG_DEFINE)
        self.translator.addDefinitionCommand(self.WAIT_FOR_ANY_MSG_DEFINE)     
        self.translator.addSetupCommand("Serial.begin(9600);\n")
        return "syst_waitForAnyMsg()" 
class waitForTheMsg(TranslatorBlock):
    GET_MSG_DEFINE = "String syst_getMsg(){\nString content = \"\";\nchar character;\nwhile(Serial.available()){\ncharacter = Serial.read();\ncontent.concat(character);\ndelay(10);\n}\nreturn content;\n}"
    WAIT_FOR_THE_MSG_DEFINE = 'void syst_waitForTheMsg(String s){\ndo{\nwhile(!Serial.available());\n}while(syst_getMsg() != s);\n}'
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):   
        self.translator.addDefinitionCommand(self.GET_MSG_DEFINE)
        self.translator.addDefinitionCommand(self.WAIT_FOR_THE_MSG_DEFINE)     
        self.translator.addSetupCommand("Serial.begin(9600);\n")
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0) 
        if isinstance(translatorBlock, Const):
            msg = "\"" + translatorBlock.toCode() + "\""  
        else:
            msg = translatorBlock.toCode()
        return "syst_waitForTheMsg(" + msg +");" 
class intToStr(TranslatorBlock):#NumberToString
    UCA_FLOAT_TO_STR_DEFINE = "String syst_floatToStr(float number){\nchar msg[25];\ndtostrf(number, 1, 2, msg);\nreturn msg;\n}\n"
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):  
        #ret = "String("
        self.translator.addHeaderFile("stdlib.h")
        self.translator.addDefinitionCommand(self.UCA_FLOAT_TO_STR_DEFINE)
        ret = "syst_floatToStr("
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0) 
        ret += translatorBlock.toCode()
        ret += ")"
        return ret
class boolToStr(TranslatorBlock):
    UCA_BOOL_TO_STR_DEFINE = "String syst_boolToStr(boolean status){\nif(status) return \"VERDADEIRO\";\nelse return \"FALSO\";\n}\n"
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):  
        self.translator.addDefinitionCommand(self.UCA_BOOL_TO_STR_DEFINE)
        ret = "syst_boolToStr("
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0) 
        ret += translatorBlock.toCode()
        ret += ")"
        return ret
class StrToInt(TranslatorBlock):
    SRT_TO_FLOAT_DEFINE = "float syst_strToFloat(String msg){\nchar _msg[sizeof(msg)];\nmsg.toCharArray(_msg, sizeof(_msg));\nreturn atof(_msg);\n}\n"
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        self.translator.addDefinitionCommand(self.SRT_TO_FLOAT_DEFINE)
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0) 
        if isinstance(translatorBlock, Const):
            return "atoi(\"" + translatorBlock.toCode() + "\")"
        return "syst_strToFloat(" + translatorBlock.toCode() + ")"
class glue(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):  
        translatorBlock0 = self.getRequiredTranslatorBlockAtArgumentsSocket(0)
        translatorBlock1 = self.getRequiredTranslatorBlockAtArgumentsSocket(1)
        if isinstance(translatorBlock0, Const) and isinstance(translatorBlock1, Const):
            return "\"" + translatorBlock0.toCode() + translatorBlock1.toCode() + "\""
        ret = ""
        if isinstance(translatorBlock0, Const): ret += "\"" + translatorBlock0.toCode() + "\""
        else: ret += translatorBlock0.toCode()
        ret += " + "
        if isinstance(translatorBlock1, Const): ret += "\"" + translatorBlock1.toCode() + "\""
        else: ret += translatorBlock1.toCode() 
        return ret  
class AlphanumericOperation(TranslatorBlock):
    def __init__(self, block, operation, translator):
        TranslatorBlock.__init__(self, block, translator)
        self.operation = operation
    def toCode(self):
        ret = "("
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0)
        if isinstance(translatorBlock, Const): ret += "\"" + translatorBlock.toCode() + "\""
        else: ret += translatorBlock.toCode()
        ret += self.operation
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(1)
        if isinstance(translatorBlock, Const): ret += "\"" + translatorBlock.toCode() + "\""
        else: ret += translatorBlock.toCode()
        ret += ")"
        return ret 
class str_not_equals(AlphanumericOperation):
    def __init__(self, block, translator):
        AlphanumericOperation.__init__(self, block, " != ", translator)
class str_equals(AlphanumericOperation):
    def __init__(self, block, translator):
        AlphanumericOperation.__init__(self, block, " == ", translator)
#----------------
class UnaryFunction(TranslatorBlock):
    def __init__(self, block, operation, translator):
        TranslatorBlock.__init__(self, block, translator)
        self.operation = operation
    def toCode(self):
        ret = self.operation + "("
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0)
        ret += translatorBlock.toCode()
        ret += ")"
        return ret
class BinaryFunction(TranslatorBlock):
    def __init__(self, block, operation, translator):
        TranslatorBlock.__init__(self, block, translator)
        self.operation = operation
    def toCode(self):
        ret = self.operation + "("
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0)
        ret += translatorBlock.toCode()
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(1)
        ret += ", "
        ret += translatorBlock.toCode()
        ret += ")"
        return ret
class min_(BinaryFunction):
    def __init__(self, block, translator):
        BinaryFunction.__init__(self, block, "min", translator)
class max_(BinaryFunction):
    def __init__(self, block, translator):
        BinaryFunction.__init__(self, block, "max", translator)        
class sqrt_(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        ret = "sqrt("
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0)
        ret += translatorBlock.toCode()
        ret += ")"
        return ret
class abs_(UnaryFunction):
    def __init__(self, block, translator):
        UnaryFunction.__init__(self, block, 'abs', translator)
class round_(UnaryFunction):
    def __init__(self, block, translator):
        UnaryFunction.__init__(self, block, 'round', translator)
#----------------
class sin_(UnaryFunction):
    def __init__(self, block, translator):
        UnaryFunction.__init__(self, block, 'sin', translator)
class cos_(UnaryFunction):
    def __init__(self, block, translator):
        UnaryFunction.__init__(self, block, 'cos', translator)
class tan_(UnaryFunction):
    def __init__(self, block, translator):
        UnaryFunction.__init__(self, block, 'tan', translator)
#----------------
class millis(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):  
        ret = "millis()"
        return ret
class random(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):  
        self.translator.addSetupCommand("randomSeed(analogRead(A0) + analogRead(A1) + analogRead(A2));\n")
        ret = "random("
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0)
        ret += translatorBlock.toCode() + ")"    
        return ret
class map_(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        ret = "map!!("
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0)
        ret += translatorBlock.toCode()
        ret += ")"
        return ret
    
class random_min_max(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):  
        self.translator.addSetupCommand("randomSeed(analogRead(A0) + analogRead(A1) + analogRead(A2));\n")
        ret = "random("
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0)
        ret += translatorBlock.toCode() + ", "    
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(1)
        ret += translatorBlock.toCode() + ")"    
        return ret
        
#<\Utilit�rios>---------------------------------------------------------------------------------------------

#<TYPES>----------------------------------------------------------------------------------------------------
class hat(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        ret = ''
        translatorBlock = self.nextTranslatorBlock()        
        while translatorBlock is not None: 
            ret += translatorBlock.toCode()
            translatorBlock = translatorBlock.nextTranslatorBlock()
        return ret  
class commandType(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        internalDefinitionName = self.translator.getDefinitionMethod(self.block.varName)
        if internalDefinitionName == None:
            internalDefinitionName = self.translator.buildDefinitionName(self.block.varName)
            self.translator.addDefinitionMethod(self.block.varName, internalDefinitionName)
            translatorBlock = self.getRequiredTranslatorHatBlock()
            definition = self.getReturnType() + ' ' + internalDefinitionName + '(){\n' 
            definition += translatorBlock.toCode() + '}\n'
            self.translator.addDefinitionCommand(definition)        
        return internalDefinitionName + '();\n'
class numericType(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        internalDefinitionName = self.translator.getDefinitionMethod(self.block.varName)
        if internalDefinitionName == None:
            internalDefinitionName = self.translator.buildDefinitionName(self.block.varName)
            self.translator.addDefinitionMethod(self.block.varName, internalDefinitionName)
            translatorBlock = self.getRequiredTranslatorHatBlock()
            definition = self.getReturnType() + ' ' + internalDefinitionName + '(){\n' 
            definition += translatorBlock.toCode() 
            translatorBlock = self.getRequiredTranslatorReturnBlock()
            definition += 'return ' + translatorBlock.toCode() + ';\n}'
            self.translator.addDefinitionCommand(definition)
        return internalDefinitionName + '()'
class logicType(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):        
        #if self.block.varName not in self.translator.definition:
        internalDefinitionName = self.translator.getDefinitionMethod(self.block.varName)
        if internalDefinitionName == None:#
            #self.translator.definition.append(self.block.varName)            
            #internalDefinitionName = self.translator.buildDefinitionName(self.block.varName)
            internalDefinitionName = self.translator.buildDefinitionName(self.block.varName)#
            self.translator.addDefinitionMethod(self.block.varName, internalDefinitionName)#
            translatorBlock = self.getRequiredTranslatorHatBlock()
            definition = self.getReturnType() + ' ' + internalDefinitionName + '(){\n' 
            definition += translatorBlock.toCode() 
            translatorBlock = self.getRequiredTranslatorReturnBlock()
            definition += 'return ' + translatorBlock.toCode() + ';\n}'
            self.translator.addDefinitionCommand(definition)
        return internalDefinitionName + '()'
class alphaNumericType(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        internalDefinitionName = self.translator.getDefinitionMethod(self.block.varName)
        if internalDefinitionName == None:
            internalDefinitionName = self.translator.buildDefinitionName(self.block.varName)
            self.translator.addDefinitionMethod(self.block.varName, internalDefinitionName)
            translatorBlock = self.getRequiredTranslatorHatBlock()
            definition = self.getReturnType() + ' ' + internalDefinitionName + '(){\n' 
            definition += translatorBlock.toCode() 
            translatorBlock = self.getRequiredTranslatorReturnBlock()
            definition += 'return ' + translatorBlock.toCode() + ';\n}'
            self.translator.addDefinitionCommand(definition)
        return internalDefinitionName + '()'
#<\TYPES>---------------------------------------------------------------------------------------------------

#<COMPONENTS>-----------------------------------------------------------------------------------------------
class setLed(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        internalVariableName = self.translator.getNumberVariable(self.getRequiredVariableName())
        if internalVariableName == None:
            internalVariableName = self.getRequiredVariableName()
            self.translator.addNumberVariable(self.block.varName, internalVariableName)
            self.translator.addDefinitionCommand("const int " + internalVariableName + " = " + self.getRequiredComponentPin(0) + ";")
            self.translator.addOutputPin(internalVariableName)
        ret = "digitalWrite(" + internalVariableName + ", "
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0)
        if isinstance(translatorBlock, Const): ret += LED_VALUES[translatorBlock.toCode()] 
        else: ret += translatorBlock.toCode()
        ret += ");\n"
        return ret

class setBrightnessLed(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        internalVariableName = self.translator.getNumberVariable(self.getRequiredVariableName())
        if internalVariableName == None:
            internalVariableName = self.getRequiredVariableName()
            self.translator.addNumberVariable(self.block.varName, internalVariableName)
            self.translator.addDefinitionCommand("const int " + internalVariableName + " = " + self.getRequiredComponentPin(0) + ";")
            self.translator.addOutputPin(internalVariableName)
        ret = "analogWrite(" + internalVariableName + ", "
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0)
        ret += translatorBlock.toCode()
        ret += ");\n"
        return ret

class blinkLed(TranslatorBlock):
    BLINK = '''void blinkLed(int ledPin, int qty, int time){\nfor (int i = 0; i < qty; i++) {  \ndigitalWrite(ledPin, HIGH);  \ndelay((500*time)/qty);  \ndigitalWrite(ledPin, LOW);\ndelay((500*time)/qty);    \n}  \n}'''
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        internalVariableName = self.translator.getNumberVariable(self.getRequiredVariableName())
        if internalVariableName == None:
            internalVariableName = self.getRequiredVariableName()
            self.translator.addNumberVariable(self.block.varName, internalVariableName)
            self.translator.addDefinitionCommand("const int " + internalVariableName + " = " + self.getRequiredComponentPin(0) + ";")
            self.translator.addOutputPin(internalVariableName)
            self.translator.addDefinitionCommand(self.BLINK)
        ret = "blinkLed(" + internalVariableName + ", "
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0)
        ret += translatorBlock.toCode() + ", "
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(1)
        ret += translatorBlock.toCode() + ");\n"
        return ret
    
class setRGBLed(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        internalVariableName_R = self.translator.getNumberVariable(self.getRequiredVariableName() + "_R")
        if internalVariableName_R == None:
            internalVariableName_R = self.getRequiredVariableName() + "_R"
            self.translator.addNumberVariable(self.block.varName, internalVariableName_R)
            self.translator.addDefinitionCommand("const int " + internalVariableName_R + " = " + self.getRequiredComponentPin(0) + ";")
            self.translator.addOutputPin(internalVariableName_R)
        ret = "analogWrite(" + internalVariableName_R + ", "
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0)
        ret += translatorBlock.toCode() + ");\n"
        
        internalVariableName_G = self.translator.getNumberVariable(self.getRequiredVariableName() + "_G")
        if internalVariableName_G == None:
            internalVariableName_G = self.getRequiredVariableName() + "_G"
            self.translator.addNumberVariable(self.block.varName, internalVariableName_G)
            self.translator.addDefinitionCommand("const int " + internalVariableName_G + " = " + self.getRequiredComponentPin(1) + ";")
            self.translator.addOutputPin(internalVariableName_G)
        ret += "analogWrite(" + internalVariableName_G + ", "
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(1)
        ret += translatorBlock.toCode() + ");\n"
        
        internalVariableName_B = self.translator.getNumberVariable(self.getRequiredVariableName() + "_B")
        if internalVariableName_B == None:
            internalVariableName_B = self.getRequiredVariableName() + "_B"
            self.translator.addNumberVariable(self.block.varName, internalVariableName_B)
            self.translator.addDefinitionCommand("const int " + internalVariableName_B + " = " + self.getRequiredComponentPin(2) + ";")
            self.translator.addOutputPin(internalVariableName_B)
        ret += "analogWrite(" + internalVariableName_B + ", "
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(2)
        ret += translatorBlock.toCode() + ");\n"
        
        return ret

class getButton(TranslatorBlock): # juntar c�digos iguais a este
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):  
        internalVariableName = self.translator.getNumberVariable(self.getRequiredVariableName())
        if internalVariableName == None:
            internalVariableName = self.getRequiredVariableName()
            self.translator.addNumberVariable(self.block.varName, internalVariableName)
            self.translator.addDefinitionCommand("const int " + internalVariableName + " = " + self.getRequiredComponentPin(0) + ";")    
            self.translator.addInputPin(internalVariableName)
        return "digitalRead(" + internalVariableName + ") == LOW"
    
class getKnob(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):  
        internalVariableName = self.translator.getNumberVariable(self.getRequiredVariableName())
        if internalVariableName == None:
            internalVariableName = self.getRequiredVariableName()
            self.translator.addNumberVariable(self.block.varName, internalVariableName)
            self.translator.addDefinitionCommand("const int " + internalVariableName + " = " + self.getRequiredComponentPin(0) + ";")    
            self.translator.addInputPin(internalVariableName)
        return "analogRead(" + internalVariableName + ")"
    
class getLdr(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):  
        internalVariableName = self.translator.getNumberVariable(self.getRequiredVariableName())
        if internalVariableName == None:
            internalVariableName = self.getRequiredVariableName()
            self.translator.addNumberVariable(self.block.varName, internalVariableName)
            self.translator.addDefinitionCommand("const int " + internalVariableName + " = " + self.getRequiredComponentPin(0) + ";")    
            self.translator.addInputPin(internalVariableName)
        return "analogRead(" + internalVariableName + ")"
    
class getThermistor(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):  
        internalVariableName = self.translator.getNumberVariable(self.getRequiredVariableName())
        if internalVariableName == None:
            internalVariableName = self.getRequiredVariableName()
            self.translator.addNumberVariable(self.block.varName, internalVariableName)
            self.translator.addDefinitionCommand("const int " + internalVariableName + " = " + self.getRequiredComponentPin(0) + ";")    
            self.translator.addInputPin(internalVariableName)
        return "analogRead(" + internalVariableName + ")"
    
class getJoystickVRx(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):  
        internalVariableName = self.translator.getNumberVariable(self.getRequiredVariableName() + "_VRx")
        if internalVariableName == None:
            internalVariableName = self.getRequiredVariableName() + "_VRx"
            self.translator.addNumberVariable(self.block.varName, internalVariableName)
            self.translator.addDefinitionCommand("const int " + internalVariableName + " = " + self.getRequiredComponentPin(0) + ";")    
            self.translator.addInputPin(internalVariableName)
        return "analogRead(" + internalVariableName + ")"
    
class getJoystickVRy(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):  
        internalVariableName = self.translator.getNumberVariable(self.getRequiredVariableName() + "_VRy")
        if internalVariableName == None:
            internalVariableName = self.getRequiredVariableName() + "_VRy"
            self.translator.addNumberVariable(self.block.varName, internalVariableName)
            self.translator.addDefinitionCommand("const int " + internalVariableName + " = " + self.getRequiredComponentPin(0) + ";")    
            self.translator.addInputPin(internalVariableName)
        return "analogRead(" + internalVariableName + ")"
    
class getJoystickSW(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):  
        internalVariableName = self.translator.getNumberVariable(self.getRequiredVariableName() + "_SW")
        if internalVariableName == None:
            internalVariableName = self.getRequiredVariableName() + "_SW"
            self.translator.addNumberVariable(self.block.varName, internalVariableName)
            self.translator.addDefinitionCommand("const int " + internalVariableName + " = " + self.getRequiredComponentPin(0) + ";")    
            self.translator.addInputPin(internalVariableName)
        return "digitalRead(" + internalVariableName + ")"
    
class setServo(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        internalVariableName = self.getRequiredVariableName()
        self.translator.addHeaderFile("Servo.h")
        self.translator.addDefinitionCommand("Servo " + internalVariableName + ";")
        self.translator.addSetupCommand(internalVariableName + ".attach(" + self.getRequiredComponentPin(0) + ");\n")
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0)
        ret = internalVariableName + ".write(" + translatorBlock.toCode() + ");\n"
        return ret
    
class setBuzzer(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):  
        internalVariableName = self.translator.getNumberVariable(self.getRequiredVariableName())
        if internalVariableName == None:
            internalVariableName = self.getRequiredVariableName()
            self.translator.addNumberVariable(self.block.varName, internalVariableName)
            self.translator.addDefinitionCommand("const int " + internalVariableName + " = " + self.getRequiredComponentPin(0) + ";")    
            self.translator.addInputPin(internalVariableName)
        ret = "tone(" + internalVariableName + ", "
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0)
        if isinstance(translatorBlock, Const):
            ret += MANY_FEW_NOTES[translatorBlock.toCode()]
        else:
            ret += translatorBlock.toCode()
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(1)
        ret += ", " + translatorBlock.toCode() + ");\n"
        return ret

class onMotor(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):  
        internalVariableName = self.translator.getNumberVariable(self.getRequiredVariableName() + "_DIR")
        if internalVariableName == None:
            internalVariableName = self.getRequiredVariableName() + "_DIR"
            self.translator.addNumberVariable(self.block.varName, internalVariableName)
            self.translator.addDefinitionCommand("const int " + internalVariableName + " = " + self.getRequiredComponentPin(0) + ";")
            self.translator.addOutputPin(internalVariableName)
        ret = "digitalWrite(" + internalVariableName + ", "
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0)
        if isinstance(translatorBlock, Const):
            ret += DIRECTIONS_MOTOR[translatorBlock.toCode()]
        else:
            ret += translatorBlock.toCode()
        ret += ");\n"
        return ret
    
class speedMotor(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):  
        internalVariableName = self.translator.getNumberVariable(self.getRequiredVariableName() + "_SPEED")
        if internalVariableName == None:
            internalVariableName = self.getRequiredVariableName() + "_SPEED"
            self.translator.addNumberVariable(self.block.varName, internalVariableName)
            self.translator.addDefinitionCommand("const int " + internalVariableName + " = " + self.getRequiredComponentPin(1) + ";")
            self.translator.addOutputPin(internalVariableName)
        ret = "analogWrite(" + internalVariableName + ", "
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0)
        ret += translatorBlock.toCode() + ");\n"
        return ret
    
class offMotor(TranslatorBlock):#juntar com speedMotor
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):  
        internalVariableName = self.translator.getNumberVariable(self.getRequiredVariableName() + "_SPEED")
        if internalVariableName == None:
            internalVariableName = self.getRequiredVariableName() + "_SPEED"
            self.translator.addNumberVariable(self.block.varName, internalVariableName)
            self.translator.addDefinitionCommand("const int " + internalVariableName + " = " + self.getRequiredComponentPin(1) + ";")
            self.translator.addOutputPin(internalVariableName)
        ret = "analogWrite(" + internalVariableName + ", 0);\n"
        return ret

class setLcd(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        self.translator.addHeaderFile("LiquidCrystal.h")
        internalVariableName = self.getRequiredVariableName()      
        definition = "LiquidCrystal " + internalVariableName + "("
        definition += self.getRequiredComponentPin(0) + ", " + self.getRequiredComponentPin(1) + ", "
        definition += self.getRequiredComponentPin(2) + ", " + self.getRequiredComponentPin(3) + ", "
        definition += self.getRequiredComponentPin(4) + ", " + self.getRequiredComponentPin(5) + ");"
        self.translator.addDefinitionCommand(definition)
        self.translator.addSetupCommand(internalVariableName + ".begin(" + str(len(LCD_COLS)) + ", " + str(len(LCD_ROWS)) + ");\n")
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0)
        if isinstance(translatorBlock, Const):
            ret = internalVariableName + ".print(\"" + translatorBlock.toCode() + "\");\n"
        else:    
            ret = internalVariableName + ".print(" + translatorBlock.toCode() + ");\n"
        return ret
    
class posLcd(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        self.translator.addHeaderFile("LiquidCrystal.h")
        internalVariableName = self.getRequiredVariableName()      
        definition = "LiquidCrystal " + internalVariableName + "("
        definition += self.getRequiredComponentPin(0) + ", " + self.getRequiredComponentPin(1) + ", "
        definition += self.getRequiredComponentPin(2) + ", " + self.getRequiredComponentPin(3) + ", "
        definition += self.getRequiredComponentPin(4) + ", " + self.getRequiredComponentPin(5) + ");"
        self.translator.addDefinitionCommand(definition)
        self.translator.addSetupCommand(internalVariableName + ".begin(" + str(len(LCD_COLS)) + ", " + str(len(LCD_ROWS)) + ");\n")
        ret = internalVariableName + ".setCursor("
        translatorBlockROW = self.getRequiredTranslatorBlockAtArgumentsSocket(0)
        translatorBlockCOL = self.getRequiredTranslatorBlockAtArgumentsSocket(1)        
        if isinstance(translatorBlockCOL, Const): ret += LCD_COLS[translatorBlockCOL.toCode()] + ", "
        else: ret += translatorBlockCOL.toCode() + ", "
        if isinstance(translatorBlockROW, Const): ret += LCD_ROWS[translatorBlockROW.toCode()] + ");\n"
        else: ret += translatorBlockROW.toCode() + ");\n"
        return ret  
    
class clearLcd(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        self.translator.addHeaderFile("LiquidCrystal.h")
        internalVariableName = self.getRequiredVariableName()      
        definition = "LiquidCrystal " + internalVariableName + "("
        definition += self.getRequiredComponentPin(0) + ", " + self.getRequiredComponentPin(1) + ", "
        definition += self.getRequiredComponentPin(2) + ", " + self.getRequiredComponentPin(3) + ", "
        definition += self.getRequiredComponentPin(4) + ", " + self.getRequiredComponentPin(5) + ");"
        self.translator.addDefinitionCommand(definition)
        self.translator.addSetupCommand(internalVariableName + ".begin(" + str(len(LCD_COLS)) + ", " + str(len(LCD_ROWS)) + ");\n")
        ret = internalVariableName + ".clear();\n"
        return ret  
    
class setDisplay7seg(TranslatorBlock):
    DIGITS = "byte seven_seg_digits[10][7] = {{1,1,1,1,1,1,0},\n{0,1,1,0,0,0,0}, {1,1,0,1,1,0,1}, {1,1,1,1,0,0,1},\n{0,1,1,0,0,1,1}, {1,0,1,1,0,1,1}, {1,0,1,1,1,1,1},\n{1,1,1,0,0,0,0}, {1,1,1,1,1,1,1}, {1,1,1,0,0,1,1}};\n"
    WRITE = "void sevenSegWrite(byte digit, byte array[]) {\nfor (byte i = 0; i < 7; i++)\ndigitalWrite(array[i], seven_seg_digits[digit][i]);\n}\n"
    CLEAR = "void sevenSegClear(byte array[]) {\nfor (byte i = 0; i < 7; i++)\ndigitalWrite(array[i], 0);\n}"
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        internalVariableName = self.translator.getNumberVariable(self.getRequiredVariableName())
        if internalVariableName == None:   
            internalVariableName = self.getRequiredVariableName()
            self.translator.addNumberVariable(self.block.varName, internalVariableName)
            definition = "byte " + internalVariableName + "[7] = {" + self.getRequiredComponentPin(0) + ", "              
            definition += self.getRequiredComponentPin(1) + ", " + self.getRequiredComponentPin(2) + ", "
            definition += self.getRequiredComponentPin(3) + ", " + self.getRequiredComponentPin(4) + ", "
            definition += self.getRequiredComponentPin(5) + ", " + self.getRequiredComponentPin(6) + "};\n"
            self.translator.addDefinitionCommand(definition)
            
            self.translator.addDefinitionCommand(self.DIGITS)
            self.translator.addDefinitionCommand(self.WRITE)
            self.translator.addDefinitionCommand(self.CLEAR)

            setup = "for (byte i = 0; i < 7; i++)\npinMode(" + internalVariableName + "[i], OUTPUT);\n"
            self.translator.addSetupCommand(setup)
                   
        ret = "sevenSegWrite("
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0)
        ret += translatorBlock.toCode() + ", " + internalVariableName + ");\n"
        return ret
    
class clearDisplay7seg(TranslatorBlock):
    DIGITS = "byte seven_seg_digits[10][7] = {{1,1,1,1,1,1,0},\n{0,1,1,0,0,0,0}, {1,1,0,1,1,0,1}, {1,1,1,1,0,0,1},\n{0,1,1,0,0,1,1}, {1,0,1,1,0,1,1}, {1,0,1,1,1,1,1},\n{1,1,1,0,0,0,0}, {1,1,1,1,1,1,1}, {1,1,1,0,0,1,1}};\n"
    WRITE = "void sevenSegWrite(byte digit, byte array[]) {\nfor (byte i = 0; i < 7; i++)\ndigitalWrite(array[i], seven_seg_digits[digit][i]);\n}\n"
    CLEAR = "void sevenSegClear(byte array[]) {\nfor (byte i = 0; i < 7; i++)\ndigitalWrite(array[i], 0);\n}"
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        internalVariableName = self.translator.getNumberVariable(self.getRequiredVariableName())
        if internalVariableName == None:   
            internalVariableName = self.getRequiredVariableName()
            self.translator.addNumberVariable(self.block.varName, internalVariableName)
            definition = "byte " + internalVariableName + "[7] = {" + self.getRequiredComponentPin(0) + ", "              
            definition += self.getRequiredComponentPin(1) + ", " + self.getRequiredComponentPin(2) + ", "
            definition += self.getRequiredComponentPin(3) + ", " + self.getRequiredComponentPin(4) + ", "
            definition += self.getRequiredComponentPin(5) + ", " + self.getRequiredComponentPin(6) + "};\n"
            self.translator.addDefinitionCommand(definition)
            
            self.translator.addDefinitionCommand(self.DIGITS)
            self.translator.addDefinitionCommand(self.WRITE)
            self.translator.addDefinitionCommand(self.CLEAR)

            setup = "for (byte i = 0; i < 7; i++)\npinMode(" + internalVariableName + "[i], OUTPUT);\n"
            self.translator.addSetupCommand(setup)

        return "sevenSegClear(" + internalVariableName + ");\n"
    
class getKey(TranslatorBlock):
    ROWS = "const byte ROWS = 4;"
    COLS = "const byte COLS = 3;"
    KEYS = "char keys[ROWS][COLS] = {\n  {'1','2','3'},\n  {'4','5','6'},\n  {'7','8','9'},\n  {'*','0','#'}\n};"
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        self.translator.addHeaderFile("Keypad.h")
        internalVariableName = self.translator.getNumberVariable(self.getRequiredVariableName())
        if internalVariableName == None:   
            internalVariableName = self.getRequiredVariableName()
            self.translator.addNumberVariable(self.block.varName, internalVariableName)           
            
            self.translator.addDefinitionCommand(self.ROWS)
            self.translator.addDefinitionCommand(self.COLS)
            self.translator.addDefinitionCommand(self.KEYS)
            
            definition = "byte rowPins[ROWS] = {" + self.getRequiredComponentPin(0) + ", "             
            definition += self.getRequiredComponentPin(1) + ", " + self.getRequiredComponentPin(2) + ", "
            definition += self.getRequiredComponentPin(3) + "};"
            self.translator.addDefinitionCommand(definition)
            
            definition = "byte colPins[COLS] = {" + self.getRequiredComponentPin(4) + ", "             
            definition += self.getRequiredComponentPin(5) + ", " + self.getRequiredComponentPin(6) + "};"
            self.translator.addDefinitionCommand(definition)
            
            definition = "Keypad " + internalVariableName 
            definition += " = Keypad(makeKeymap(keys), rowPins, colPins, ROWS, COLS);"
            self.translator.addDefinitionCommand(definition)

        return "String("+internalVariableName + ".getKey())"
    
class keyPressed(TranslatorBlock):
    ROWS = "const byte ROWS = 4;"
    COLS = "const byte COLS = 3;"
    KEYS = "char keys[ROWS][COLS] = {\n  {'1','2','3'},\n  {'4','5','6'},\n  {'7','8','9'},\n  {'*','0','#'}\n};"
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        self.translator.addHeaderFile("Keypad.h")
        internalVariableName = self.translator.getNumberVariable(self.getRequiredVariableName())
        if internalVariableName == None:   
            internalVariableName = self.getRequiredVariableName()
            self.translator.addNumberVariable(self.block.varName, internalVariableName)           
            
            self.translator.addDefinitionCommand(self.ROWS)
            self.translator.addDefinitionCommand(self.COLS)
            self.translator.addDefinitionCommand(self.KEYS)
            
            definition = "byte rowPins[ROWS] = {" + self.getRequiredComponentPin(0) + ", "             
            definition += self.getRequiredComponentPin(1) + ", " + self.getRequiredComponentPin(2) + ", "
            definition += self.getRequiredComponentPin(3) + "};"
            self.translator.addDefinitionCommand(definition)
            
            definition = "byte colPins[COLS] = {" + self.getRequiredComponentPin(4) + ", "             
            definition += self.getRequiredComponentPin(5) + ", " + self.getRequiredComponentPin(6) + "};"
            self.translator.addDefinitionCommand(definition)
            
            definition = "Keypad " + internalVariableName 
            definition += " = Keypad(makeKeymap(keys), rowPins, colPins, ROWS, COLS);"
            self.translator.addDefinitionCommand(definition)
            
        return internalVariableName+".getState() == PRESSED && "+internalVariableName+".keyStateChanged()"

class waitForAnyKey(TranslatorBlock):
    ROWS = "const byte ROWS = 4;"
    COLS = "const byte COLS = 3;"
    KEYS = "char keys[ROWS][COLS] = {\n  {'1','2','3'},\n  {'4','5','6'},\n  {'7','8','9'},\n  {'*','0','#'}\n};"
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        self.translator.addHeaderFile("Keypad.h")
        internalVariableName = self.translator.getNumberVariable(self.getRequiredVariableName())
        if internalVariableName == None:   
            internalVariableName = self.getRequiredVariableName()
            self.translator.addNumberVariable(self.block.varName, internalVariableName)           
            
            self.translator.addDefinitionCommand(self.ROWS)
            self.translator.addDefinitionCommand(self.COLS)
            self.translator.addDefinitionCommand(self.KEYS)
            
            definition = "byte rowPins[ROWS] = {" + self.getRequiredComponentPin(0) + ", "             
            definition += self.getRequiredComponentPin(1) + ", " + self.getRequiredComponentPin(2) + ", "
            definition += self.getRequiredComponentPin(3) + "};"
            self.translator.addDefinitionCommand(definition)
            
            definition = "byte colPins[COLS] = {" + self.getRequiredComponentPin(4) + ", "             
            definition += self.getRequiredComponentPin(5) + ", " + self.getRequiredComponentPin(6) + "};"
            self.translator.addDefinitionCommand(definition)
            
            definition = "Keypad " + internalVariableName 
            definition += " = Keypad(makeKeymap(keys), rowPins, colPins, ROWS, COLS);"
            self.translator.addDefinitionCommand(definition)
            
        return "String(" + internalVariableName+".waitForKey())"

class waitForAnyNumber(TranslatorBlock):
    ROWS = "const byte ROWS = 4;"
    COLS = "const byte COLS = 3;"
    KEYS = "char keys[ROWS][COLS] = {\n  {'1','2','3'},\n  {'4','5','6'},\n  {'7','8','9'},\n  {'*','0','#'}\n};"
    WAIT_FOR_NUMBER_DEFINE = 'String syst_waitForAnyNumber(Keypad k){\nString key;\ndo{\nkey = String(k.waitForKey());\n}while(key == "*" || key == "#");\nreturn key;\n}'
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        self.translator.addHeaderFile("Keypad.h")
        self.translator.addDefinitionCommand(self.WAIT_FOR_NUMBER_DEFINE)
        internalVariableName = self.translator.getNumberVariable(self.getRequiredVariableName())
        if internalVariableName == None:   
            internalVariableName = self.getRequiredVariableName()
            self.translator.addNumberVariable(self.block.varName, internalVariableName)           
            
            self.translator.addDefinitionCommand(self.ROWS)
            self.translator.addDefinitionCommand(self.COLS)
            self.translator.addDefinitionCommand(self.KEYS)
            
            definition = "byte rowPins[ROWS] = {" + self.getRequiredComponentPin(0) + ", "             
            definition += self.getRequiredComponentPin(1) + ", " + self.getRequiredComponentPin(2) + ", "
            definition += self.getRequiredComponentPin(3) + "};"
            self.translator.addDefinitionCommand(definition)
            
            definition = "byte colPins[COLS] = {" + self.getRequiredComponentPin(4) + ", "             
            definition += self.getRequiredComponentPin(5) + ", " + self.getRequiredComponentPin(6) + "};"
            self.translator.addDefinitionCommand(definition)
            
            definition = "Keypad " + internalVariableName 
            definition += " = Keypad(makeKeymap(keys), rowPins, colPins, ROWS, COLS);"
            self.translator.addDefinitionCommand(definition)
            
        return "syst_waitForAnyNumber(" + internalVariableName  + ")"
    
class waitForTheKey(TranslatorBlock):
    ROWS = "const byte ROWS = 4;"
    COLS = "const byte COLS = 3;"
    KEYS = "char keys[ROWS][COLS] = {\n  {'1','2','3'},\n  {'4','5','6'},\n  {'7','8','9'},\n  {'*','0','#'}\n};"
    WAIT_FOR_THE_KEY_DEFINE = 'void syst_waitForTheKey(String s, Keypad k){\nwhile(String(k.waitForKey())!=s);\n}'
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):
        self.translator.addHeaderFile("Keypad.h")
        self.translator.addDefinitionCommand(self.WAIT_FOR_THE_KEY_DEFINE)
        internalVariableName = self.translator.getNumberVariable(self.getRequiredVariableName())
        if internalVariableName == None:   
            internalVariableName = self.getRequiredVariableName()
            self.translator.addNumberVariable(self.block.varName, internalVariableName)           
            
            self.translator.addDefinitionCommand(self.ROWS)
            self.translator.addDefinitionCommand(self.COLS)
            self.translator.addDefinitionCommand(self.KEYS)
            
            definition = "byte rowPins[ROWS] = {" + self.getRequiredComponentPin(0) + ", "             
            definition += self.getRequiredComponentPin(1) + ", " + self.getRequiredComponentPin(2) + ", "
            definition += self.getRequiredComponentPin(3) + "};"
            self.translator.addDefinitionCommand(definition)
            
            definition = "byte colPins[COLS] = {" + self.getRequiredComponentPin(4) + ", "             
            definition += self.getRequiredComponentPin(5) + ", " + self.getRequiredComponentPin(6) + "};"
            self.translator.addDefinitionCommand(definition)
            
            definition = "Keypad " + internalVariableName 
            definition += " = Keypad(makeKeymap(keys), rowPins, colPins, ROWS, COLS);"
            self.translator.addDefinitionCommand(definition)
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0) 
        if isinstance(translatorBlock, Const):
            key = "\"" + translatorBlock.toCode() + "\""  
        else:
            key = translatorBlock.toCode() 
        return "syst_waitForTheKey(" + key + ", " + internalVariableName  + ");\n"
    
class irReceived(TranslatorBlock):
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):        
        internalVariableName = self.getRequiredVariableName()
        self.translator.addHeaderFile("IRremote.h")
        self.translator.addDefinitionCommand("IRrecv " + internalVariableName + "(" + self.getRequiredComponentPin(0) + ");\n")           
        self.translator.addDefinitionCommand("decode_results results;\n")
        return internalVariableName+".decode(&results)"
    
class getIRValue(TranslatorBlock):
    GET_IR_VALUE_DEFINE = "String syst_getIrValue(IRrecv ir){\nir.resume();\nreturn String(results.value, HEX);\n}\n"
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):   
        self.translator.addDefinitionCommand(self.GET_IR_VALUE_DEFINE)     
        internalVariableName = self.getRequiredVariableName()
        self.translator.addHeaderFile("IRremote.h")
        self.translator.addDefinitionCommand("IRrecv " + internalVariableName + "(" + self.getRequiredComponentPin(0) + ");\n")           
        self.translator.addDefinitionCommand("decode_results results;\n")
        return "syst_getIrValue(" + internalVariableName + ")" 
    
class waitForAnySignal(TranslatorBlock):
    WAIT_FOR_ANY_SIGNAL_DEFINE = 'String syst_waitForAnySignal(IRrecv ir){\nwhile(!ir.decode(&results));\nir.resume();\nreturn String(results.value, HEX);\n}'
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):   
        self.translator.addDefinitionCommand(self.WAIT_FOR_ANY_SIGNAL_DEFINE)     
        internalVariableName = self.getRequiredVariableName()
        self.translator.addHeaderFile("IRremote.h")
        self.translator.addDefinitionCommand("IRrecv " + internalVariableName + "(" + self.getRequiredComponentPin(0) + ");\n")           
        self.translator.addDefinitionCommand("decode_results results;\n")
        return "syst_waitForAnySignal(" + internalVariableName + ")" 

class waitForTheSignal(TranslatorBlock):
    WAIT_FOR_ANY_SIGNAL_DEFINE = 'void syst_waitForTheSignal(IRrecv ir, String s){\ndo{\nwhile(!ir.decode(&results));\n}while(String(results.value, HEX) != s);\nir.resume();\n}'
    def __init__(self, block, translator):
        TranslatorBlock.__init__(self, block, translator)
    def toCode(self):   
        self.translator.addDefinitionCommand(self.WAIT_FOR_ANY_SIGNAL_DEFINE)     
        internalVariableName = self.getRequiredVariableName()
        self.translator.addHeaderFile("IRremote.h")
        self.translator.addDefinitionCommand("IRrecv " + internalVariableName + "(" + self.getRequiredComponentPin(0) + ");\n")           
        self.translator.addDefinitionCommand("decode_results results;\n")
        translatorBlock = self.getRequiredTranslatorBlockAtArgumentsSocket(0) 
        if isinstance(translatorBlock, Const):
            signal = "\"" + translatorBlock.toCode() + "\""  
        else:
            signal = translatorBlock.toCode()
        return "syst_waitForTheSignal(" + internalVariableName + ", " + signal +");" 
    
#<\COMPONENTS>----------------------------------------------------------------------------------------------


