#!/usr/local/bin/python
# -*- coding: utf-8 -*-

from edu.uca.renderable.CreatorBlockFactory import createComponentBlock, createDropdownPin
from edu.uca.util.Constants import INPUT, OUTPUT

from edu.uca.util.i18n import _, gettext_noop

#INPUT-------------------------------------------------------------------------------------------
        
def component_button(off=False):
    but = createComponentBlock(off, 'component_button', gettext_noop('BUTTON'), INPUT, [gettext_noop('getButton')])
    but.addArgument(createDropdownPin(off, but, INPUT))
    return but

def component_knob(off=False):
    knob = createComponentBlock(off, 'component_knob', gettext_noop('KNOB'), INPUT, [gettext_noop('getKnob')])
    knob.addArgument(createDropdownPin(off, knob, INPUT))
    return knob

def component_ldr(off=False):
    ldr = createComponentBlock(off, 'component_ldr', gettext_noop('LDR'), INPUT, [gettext_noop('getLdr')])
    ldr.addArgument(createDropdownPin(off, ldr, INPUT))
    return ldr

def component_thermistor(off=False):
    thermistor = createComponentBlock(off, 'component_thermistor', gettext_noop('THERMISTOR'), INPUT, [gettext_noop('getThermistor')])
    thermistor.addArgument(createDropdownPin(off, thermistor, INPUT))
    return thermistor

def component_joystick(off=False):
    joystick = createComponentBlock(off, 'component_joystick', gettext_noop('JOYSTICK'), INPUT, [gettext_noop('getJoystickVRx'), gettext_noop('getJoystickVRy'), gettext_noop('getJoystickSW')])
    joystick.addArgument(createDropdownPin(off, joystick, INPUT, 'VRx'))
    joystick.addArgument(createDropdownPin(off, joystick, INPUT, 'VRy'))
    joystick.addArgument(createDropdownPin(off, joystick, INPUT, 'SW'))
    return joystick

def component_keypad(off=False):
    keypad = createComponentBlock(off, 'component_keypad', 'TECLADO', INPUT, ['keyPressed', 'getKey', 'waitForAnyKey', 'waitForAnyNumber', 'waitForTheKey'])
    keypad.addArgument(createDropdownPin(off, keypad, INPUT, gettext_noop('Row1')))
    keypad.addArgument(createDropdownPin(off, keypad, INPUT, gettext_noop('Row2')))
    keypad.addArgument(createDropdownPin(off, keypad, INPUT, gettext_noop('Row3')))
    keypad.addArgument(createDropdownPin(off, keypad, INPUT, gettext_noop('Row4')))
    keypad.addArgument(createDropdownPin(off, keypad, INPUT, gettext_noop('Col1')))
    keypad.addArgument(createDropdownPin(off, keypad, INPUT, gettext_noop('Col2')))
    keypad.addArgument(createDropdownPin(off, keypad, INPUT, gettext_noop('Col3')))
    return keypad

def component_IR(off=False):
    ir = createComponentBlock(off, 'component_IR', 'INFRAVERMELHO', INPUT, ['irReceived', 'getIRValue', 'waitForAnySignal', 'waitForTheSignal'])
    ir.addArgument(createDropdownPin(off, ir, INPUT))
    return ir
#OUTPUT-------------------------------------------------------------------------------------------

def component_led(off=False):
    led = createComponentBlock(off, 'component_led', gettext_noop('LED'), OUTPUT, [gettext_noop('setLed'), 'setBrightnessLed', 'blinkLed'])
    led.addArgument(createDropdownPin(off, led, OUTPUT))
    return led

def component_rgb_led(off=False):
    rgb_led = createComponentBlock(off, 'component_rgb_led', gettext_noop('LED_RGB'), OUTPUT, [gettext_noop('setRGBLed')])
    rgb_led.addArgument(createDropdownPin(off, rgb_led, OUTPUT, 'R'))
    rgb_led.addArgument(createDropdownPin(off, rgb_led, OUTPUT, 'G'))
    rgb_led.addArgument(createDropdownPin(off, rgb_led, OUTPUT, 'B'))
    return rgb_led

def component_servo(off=False):
    servo = createComponentBlock(off, 'component_servo', gettext_noop('SERVO'), OUTPUT, [gettext_noop('setServo')])
    servo.addArgument(createDropdownPin(off, servo, OUTPUT))
    return servo

def component_buzzer(off=False):
    buzzer = createComponentBlock(off, 'component_buzzer', gettext_noop('BUZZER'), OUTPUT, [gettext_noop('setBuzzer')])
    buzzer.addArgument(createDropdownPin(off, buzzer, OUTPUT))
    return buzzer

def component_motor(off=False):
    motor = createComponentBlock(off, 'component_motor', gettext_noop('MOTOR'), OUTPUT, [gettext_noop('onMotor'), gettext_noop('offMotor'), gettext_noop('speedMotor')])
    motor.addArgument(createDropdownPin(off, motor, OUTPUT, gettext_noop('dir')))
    motor.addArgument(createDropdownPin(off, motor, OUTPUT, gettext_noop('spped')))
    return motor

def component_lcd(off=False):
    lcd = createComponentBlock(off, 'component_lcd', gettext_noop('LCD'), OUTPUT, ['posLcd', 'setLcd', 'clearLcd'])
    lcd.addArgument(createDropdownPin(off, lcd, OUTPUT, 'RS'))
    lcd.addArgument(createDropdownPin(off, lcd, OUTPUT, 'EN'))
    lcd.addArgument(createDropdownPin(off, lcd, OUTPUT, 'D4'))
    lcd.addArgument(createDropdownPin(off, lcd, OUTPUT, 'D5'))
    lcd.addArgument(createDropdownPin(off, lcd, OUTPUT, 'D6'))
    lcd.addArgument(createDropdownPin(off, lcd, OUTPUT, 'D7'))
    return lcd

def component_display7seg(off=False):
    numericDisplay = createComponentBlock(off, 'component_display7seg', gettext_noop('DISPLAY7SEG'), OUTPUT, [gettext_noop('setDisplay7seg'), gettext_noop('clearDisplay7seg')])
    numericDisplay.addArgument(createDropdownPin(off, numericDisplay, OUTPUT, 'A'))
    numericDisplay.addArgument(createDropdownPin(off, numericDisplay, OUTPUT, 'B'))
    numericDisplay.addArgument(createDropdownPin(off, numericDisplay, OUTPUT, 'C'))
    numericDisplay.addArgument(createDropdownPin(off, numericDisplay, OUTPUT, 'D'))
    numericDisplay.addArgument(createDropdownPin(off, numericDisplay, OUTPUT, 'E'))
    numericDisplay.addArgument(createDropdownPin(off, numericDisplay, OUTPUT, 'F'))
    numericDisplay.addArgument(createDropdownPin(off, numericDisplay, OUTPUT, 'G'))
    return numericDisplay
