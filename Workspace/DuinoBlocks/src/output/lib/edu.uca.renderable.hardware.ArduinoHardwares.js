/* start module: edu.uca.renderable.hardware.ArduinoHardwares */
$pyjs['loaded_modules']['edu.uca.renderable.hardware.ArduinoHardwares'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.renderable.hardware.ArduinoHardwares']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.renderable.hardware.ArduinoHardwares'];
	if(typeof $pyjs['loaded_modules']['edu.uca.renderable.hardware'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.renderable.hardware']['__was_initialized__']) $p['___import___']('edu.uca.renderable.hardware', null);
	var $m = $pyjs['loaded_modules']['edu.uca.renderable.hardware.ArduinoHardwares'];
	$m['__repr__'] = function() { return '<module: edu.uca.renderable.hardware.ArduinoHardwares>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.renderable.hardware.ArduinoHardwares';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.renderable.hardware']['ArduinoHardwares'] = $pyjs['loaded_modules']['edu.uca.renderable.hardware.ArduinoHardwares'];


	$m['createComponentBlock'] = $p['___import___']('edu.uca.renderable.CreatorBlockFactory.createComponentBlock', 'edu.uca.renderable.hardware', null, false);
	$m['createDropdownPin'] = $p['___import___']('edu.uca.renderable.CreatorBlockFactory.createDropdownPin', 'edu.uca.renderable.hardware', null, false);
	$m['INPUT'] = $p['___import___']('edu.uca.util.Constants.INPUT', 'edu.uca.renderable.hardware', null, false);
	$m['OUTPUT'] = $p['___import___']('edu.uca.util.Constants.OUTPUT', 'edu.uca.renderable.hardware', null, false);
	$m['_'] = $p['___import___']('edu.uca.util.i18n._', 'edu.uca.renderable.hardware', null, false);
	$m['gettext_noop'] = $p['___import___']('edu.uca.util.i18n.gettext_noop', 'edu.uca.renderable.hardware', null, false);
	$m['component_button'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var but;
		but = $m['createComponentBlock'](off, 'component_button', $m['gettext_noop']('BUTTON'), $m['INPUT'], $p['list']([$m['gettext_noop']('getButton')]));
		but['addArgument']($m['createDropdownPin'](off, but, $m['INPUT']));
		return but;
	};
	$m['component_button']['__name__'] = 'component_button';

	$m['component_button']['__bind_type__'] = 0;
	$m['component_button']['__args__'] = [null,null,['off', false]];
	$m['component_knob'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var knob;
		knob = $m['createComponentBlock'](off, 'component_knob', $m['gettext_noop']('KNOB'), $m['INPUT'], $p['list']([$m['gettext_noop']('getKnob')]));
		knob['addArgument']($m['createDropdownPin'](off, knob, $m['INPUT']));
		return knob;
	};
	$m['component_knob']['__name__'] = 'component_knob';

	$m['component_knob']['__bind_type__'] = 0;
	$m['component_knob']['__args__'] = [null,null,['off', false]];
	$m['component_ldr'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var ldr;
		ldr = $m['createComponentBlock'](off, 'component_ldr', $m['gettext_noop']('LDR'), $m['INPUT'], $p['list']([$m['gettext_noop']('getLdr')]));
		ldr['addArgument']($m['createDropdownPin'](off, ldr, $m['INPUT']));
		return ldr;
	};
	$m['component_ldr']['__name__'] = 'component_ldr';

	$m['component_ldr']['__bind_type__'] = 0;
	$m['component_ldr']['__args__'] = [null,null,['off', false]];
	$m['component_thermistor'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var thermistor;
		thermistor = $m['createComponentBlock'](off, 'component_thermistor', $m['gettext_noop']('THERMISTOR'), $m['INPUT'], $p['list']([$m['gettext_noop']('getThermistor')]));
		thermistor['addArgument']($m['createDropdownPin'](off, thermistor, $m['INPUT']));
		return thermistor;
	};
	$m['component_thermistor']['__name__'] = 'component_thermistor';

	$m['component_thermistor']['__bind_type__'] = 0;
	$m['component_thermistor']['__args__'] = [null,null,['off', false]];
	$m['component_joystick'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var joystick;
		joystick = $m['createComponentBlock'](off, 'component_joystick', $m['gettext_noop']('JOYSTICK'), $m['INPUT'], $p['list']([$m['gettext_noop']('getJoystickVRx'), $m['gettext_noop']('getJoystickVRy'), $m['gettext_noop']('getJoystickSW')]));
		joystick['addArgument']($m['createDropdownPin'](off, joystick, $m['INPUT'], 'VRx'));
		joystick['addArgument']($m['createDropdownPin'](off, joystick, $m['INPUT'], 'VRy'));
		joystick['addArgument']($m['createDropdownPin'](off, joystick, $m['INPUT'], 'SW'));
		return joystick;
	};
	$m['component_joystick']['__name__'] = 'component_joystick';

	$m['component_joystick']['__bind_type__'] = 0;
	$m['component_joystick']['__args__'] = [null,null,['off', false]];
	$m['component_keypad'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var keypad;
		keypad = $m['createComponentBlock'](off, 'component_keypad', 'TECLADO', $m['INPUT'], $p['list'](['keyPressed', 'getKey', 'waitForAnyKey', 'waitForAnyNumber', 'waitForTheKey']));
		keypad['addArgument']($m['createDropdownPin'](off, keypad, $m['INPUT'], $m['gettext_noop']('Row1')));
		keypad['addArgument']($m['createDropdownPin'](off, keypad, $m['INPUT'], $m['gettext_noop']('Row2')));
		keypad['addArgument']($m['createDropdownPin'](off, keypad, $m['INPUT'], $m['gettext_noop']('Row3')));
		keypad['addArgument']($m['createDropdownPin'](off, keypad, $m['INPUT'], $m['gettext_noop']('Row4')));
		keypad['addArgument']($m['createDropdownPin'](off, keypad, $m['INPUT'], $m['gettext_noop']('Col1')));
		keypad['addArgument']($m['createDropdownPin'](off, keypad, $m['INPUT'], $m['gettext_noop']('Col2')));
		keypad['addArgument']($m['createDropdownPin'](off, keypad, $m['INPUT'], $m['gettext_noop']('Col3')));
		return keypad;
	};
	$m['component_keypad']['__name__'] = 'component_keypad';

	$m['component_keypad']['__bind_type__'] = 0;
	$m['component_keypad']['__args__'] = [null,null,['off', false]];
	$m['component_IR'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var ir;
		ir = $m['createComponentBlock'](off, 'component_IR', 'INFRAVERMELHO', $m['INPUT'], $p['list'](['irReceived', 'getIRValue', 'waitForAnySignal', 'waitForTheSignal']));
		ir['addArgument']($m['createDropdownPin'](off, ir, $m['INPUT']));
		return ir;
	};
	$m['component_IR']['__name__'] = 'component_IR';

	$m['component_IR']['__bind_type__'] = 0;
	$m['component_IR']['__args__'] = [null,null,['off', false]];
	$m['component_led'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var led;
		led = $m['createComponentBlock'](off, 'component_led', $m['gettext_noop']('LED'), $m['OUTPUT'], $p['list']([$m['gettext_noop']('setLed'), 'setBrightnessLed', 'blinkLed']));
		led['addArgument']($m['createDropdownPin'](off, led, $m['OUTPUT']));
		return led;
	};
	$m['component_led']['__name__'] = 'component_led';

	$m['component_led']['__bind_type__'] = 0;
	$m['component_led']['__args__'] = [null,null,['off', false]];
	$m['component_rgb_led'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var rgb_led;
		rgb_led = $m['createComponentBlock'](off, 'component_rgb_led', $m['gettext_noop']('LED_RGB'), $m['OUTPUT'], $p['list']([$m['gettext_noop']('setRGBLed')]));
		rgb_led['addArgument']($m['createDropdownPin'](off, rgb_led, $m['OUTPUT'], 'R'));
		rgb_led['addArgument']($m['createDropdownPin'](off, rgb_led, $m['OUTPUT'], 'G'));
		rgb_led['addArgument']($m['createDropdownPin'](off, rgb_led, $m['OUTPUT'], 'B'));
		return rgb_led;
	};
	$m['component_rgb_led']['__name__'] = 'component_rgb_led';

	$m['component_rgb_led']['__bind_type__'] = 0;
	$m['component_rgb_led']['__args__'] = [null,null,['off', false]];
	$m['component_servo'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var servo;
		servo = $m['createComponentBlock'](off, 'component_servo', $m['gettext_noop']('SERVO'), $m['OUTPUT'], $p['list']([$m['gettext_noop']('setServo')]));
		servo['addArgument']($m['createDropdownPin'](off, servo, $m['OUTPUT']));
		return servo;
	};
	$m['component_servo']['__name__'] = 'component_servo';

	$m['component_servo']['__bind_type__'] = 0;
	$m['component_servo']['__args__'] = [null,null,['off', false]];
	$m['component_buzzer'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var buzzer;
		buzzer = $m['createComponentBlock'](off, 'component_buzzer', $m['gettext_noop']('BUZZER'), $m['OUTPUT'], $p['list']([$m['gettext_noop']('setBuzzer')]));
		buzzer['addArgument']($m['createDropdownPin'](off, buzzer, $m['OUTPUT']));
		return buzzer;
	};
	$m['component_buzzer']['__name__'] = 'component_buzzer';

	$m['component_buzzer']['__bind_type__'] = 0;
	$m['component_buzzer']['__args__'] = [null,null,['off', false]];
	$m['component_motor'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var motor;
		motor = $m['createComponentBlock'](off, 'component_motor', $m['gettext_noop']('MOTOR'), $m['OUTPUT'], $p['list']([$m['gettext_noop']('onMotor'), $m['gettext_noop']('offMotor'), $m['gettext_noop']('speedMotor')]));
		motor['addArgument']($m['createDropdownPin'](off, motor, $m['OUTPUT'], $m['gettext_noop']('dir')));
		motor['addArgument']($m['createDropdownPin'](off, motor, $m['OUTPUT'], $m['gettext_noop']('spped')));
		return motor;
	};
	$m['component_motor']['__name__'] = 'component_motor';

	$m['component_motor']['__bind_type__'] = 0;
	$m['component_motor']['__args__'] = [null,null,['off', false]];
	$m['component_lcd'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var lcd;
		lcd = $m['createComponentBlock'](off, 'component_lcd', $m['gettext_noop']('LCD'), $m['OUTPUT'], $p['list'](['posLcd', 'setLcd', 'clearLcd']));
		lcd['addArgument']($m['createDropdownPin'](off, lcd, $m['OUTPUT'], 'RS'));
		lcd['addArgument']($m['createDropdownPin'](off, lcd, $m['OUTPUT'], 'EN'));
		lcd['addArgument']($m['createDropdownPin'](off, lcd, $m['OUTPUT'], 'D4'));
		lcd['addArgument']($m['createDropdownPin'](off, lcd, $m['OUTPUT'], 'D5'));
		lcd['addArgument']($m['createDropdownPin'](off, lcd, $m['OUTPUT'], 'D6'));
		lcd['addArgument']($m['createDropdownPin'](off, lcd, $m['OUTPUT'], 'D7'));
		return lcd;
	};
	$m['component_lcd']['__name__'] = 'component_lcd';

	$m['component_lcd']['__bind_type__'] = 0;
	$m['component_lcd']['__args__'] = [null,null,['off', false]];
	$m['component_display7seg'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var numericDisplay;
		numericDisplay = $m['createComponentBlock'](off, 'component_display7seg', $m['gettext_noop']('DISPLAY7SEG'), $m['OUTPUT'], $p['list']([$m['gettext_noop']('setDisplay7seg'), $m['gettext_noop']('clearDisplay7seg')]));
		numericDisplay['addArgument']($m['createDropdownPin'](off, numericDisplay, $m['OUTPUT'], 'A'));
		numericDisplay['addArgument']($m['createDropdownPin'](off, numericDisplay, $m['OUTPUT'], 'B'));
		numericDisplay['addArgument']($m['createDropdownPin'](off, numericDisplay, $m['OUTPUT'], 'C'));
		numericDisplay['addArgument']($m['createDropdownPin'](off, numericDisplay, $m['OUTPUT'], 'D'));
		numericDisplay['addArgument']($m['createDropdownPin'](off, numericDisplay, $m['OUTPUT'], 'E'));
		numericDisplay['addArgument']($m['createDropdownPin'](off, numericDisplay, $m['OUTPUT'], 'F'));
		numericDisplay['addArgument']($m['createDropdownPin'](off, numericDisplay, $m['OUTPUT'], 'G'));
		return numericDisplay;
	};
	$m['component_display7seg']['__name__'] = 'component_display7seg';

	$m['component_display7seg']['__bind_type__'] = 0;
	$m['component_display7seg']['__args__'] = [null,null,['off', false]];
	return this;
}; /* end edu.uca.renderable.hardware.ArduinoHardwares */


/* end module: edu.uca.renderable.hardware.ArduinoHardwares */


/*
PYJS_DEPS: ['edu.uca.renderable.CreatorBlockFactory.createComponentBlock', 'edu', 'edu.uca', 'edu.uca.renderable', 'edu.uca.renderable.CreatorBlockFactory', 'edu.uca.renderable.CreatorBlockFactory.createDropdownPin', 'edu.uca.util.Constants.INPUT', 'edu.uca.util', 'edu.uca.util.Constants', 'edu.uca.util.Constants.OUTPUT', 'edu.uca.util.i18n._', 'edu.uca.util.i18n', 'edu.uca.util.i18n.gettext_noop']
*/
