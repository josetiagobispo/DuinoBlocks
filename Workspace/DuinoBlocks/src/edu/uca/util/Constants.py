#!/usr/local/bin/python
# -*- coding: utf-8 -*-

INPUT     = 'INPUT'

OUTPUT    = 'OUTPUT'

PIN_MODES = (INPUT, OUTPUT)

ANALOG_PINS  = ('A0', 'A1', 'A2', 'A3', 'A4', 'A5')

DIGITAL_PINS = ('2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13')

PWM_PINS     = ('3', '5', '6', '9', '10', '11')

ALL_PINS     = DIGITAL_PINS + ANALOG_PINS

DIGITAL_VALUES = {'ALTO':'HIGH', 'BAIXO':'LOW'}

LOGIC_VALUES   = {'VERDADEIRO': 'true', 'FALSO': 'false'}

LED_VALUES     = {'LIGADO':'HIGH', 'DESLIGADO':'LOW'}

#TITLE_NUMERIC_VAR      = 'var 123'
TITLE_NUMERIC_VAR       = ''

#TITLE_LOGIC_VAR        = 'var log'
TITLE_LOGIC_VAR         = ''

#TITLE_ALPHANUMERIC_VAR = 'var &alpha;&beta;&gamma;'
TITLE_ALPHANUMERIC_VAR  = ''

MANY_FEW_NOTES = {'C1':'33','G1':'49',
                  'C2':'65','G2':'98',
                  'C3':'131','G3':'196',
                  'C4':'262','G4':'392',
                  'C5':'523','G5':'784',
                  'C6':'1047','G6':'1568',
                  'C7':'2093','G7':'3136',
                  'C8':'4186'}

DIRECTIONS_MOTOR = {'FRENTE':'LOW', 'TRAS':'HIGH'}

LCD_COLS = {'1':'0', '2':'1', '3':'2', '4':'3', '5':'4', '6':'5', '7':'6', '8':'7',
            '9':'8', '10':'9', '11':'10', '12':'11', '13':'12', '14':'13', '15':'14', '16':'15'}

LCD_ROWS = {'1':'0', '2':'1'}

DISPLAY_7SEG_NUMBERS = {'0':(1,1,1,1,1,1,0), 
                        '1':(0,1,1,0,0,0,0), 
                        '2':(1,1,0,1,1,0,1), 
                        '3':(1,1,1,1,0,0,1), 
                        '4':(0,1,1,0,0,1,1), 
                        '5':(1,0,1,1,0,1,1), 
                        '6':(1,0,1,1,1,1,1), 
                        '7':(1,1,1,0,0,0,0), 
                        '8':(1,1,1,1,1,1,1), 
                        '9':(1,1,1,0,0,1,1)}
                               
KEYPAD_KEYS = {'1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '*', '#'}

