/* start module: edu.uca.util.Constants */
$pyjs['loaded_modules']['edu.uca.util.Constants'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.util.Constants']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.util.Constants'];
	if(typeof $pyjs['loaded_modules']['edu.uca.util'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.util']['__was_initialized__']) $p['___import___']('edu.uca.util', null);
	var $m = $pyjs['loaded_modules']['edu.uca.util.Constants'];
	$m['__repr__'] = function() { return '<module: edu.uca.util.Constants>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.util.Constants';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.util']['Constants'] = $pyjs['loaded_modules']['edu.uca.util.Constants'];
	var $add2,$add1;

	$m['INPUT'] = 'INPUT';
	$m['OUTPUT'] = 'OUTPUT';
	$m['PIN_MODES'] = $p['tuple']([$m['INPUT'], $m['OUTPUT']]);
	$m['ANALOG_PINS'] = $p['tuple'](['A0', 'A1', 'A2', 'A3', 'A4', 'A5']);
	$m['DIGITAL_PINS'] = $p['tuple'](['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13']);
	$m['PWM_PINS'] = $p['tuple'](['3', '5', '6', '9', '10', '11']);
	$m['ALL_PINS'] = $p['__op_add']($add1=$m['DIGITAL_PINS'],$add2=$m['ANALOG_PINS']);
	$m['DIGITAL_VALUES'] = $p['dict']([['ALTO', 'HIGH'], ['BAIXO', 'LOW']]);
	$m['LOGIC_VALUES'] = $p['dict']([['VERDADEIRO', 'true'], ['FALSO', 'false']]);
	$m['LED_VALUES'] = $p['dict']([['LIGADO', 'HIGH'], ['DESLIGADO', 'LOW']]);
	$m['TITLE_NUMERIC_VAR'] = '';
	$m['TITLE_LOGIC_VAR'] = '';
	$m['TITLE_ALPHANUMERIC_VAR'] = '';
	$m['MANY_FEW_NOTES'] = $p['dict']([['C1', '33'], ['G1', '49'], ['C2', '65'], ['G2', '98'], ['C3', '131'], ['G3', '196'], ['C4', '262'], ['G4', '392'], ['C5', '523'], ['G5', '784'], ['C6', '1047'], ['G6', '1568'], ['C7', '2093'], ['G7', '3136'], ['C8', '4186']]);
	$m['DIRECTIONS_MOTOR'] = $p['dict']([['FRENTE', 'LOW'], ['TRAS', 'HIGH']]);
	$m['LCD_COLS'] = $p['dict']([['1', '0'], ['2', '1'], ['3', '2'], ['4', '3'], ['5', '4'], ['6', '5'], ['7', '6'], ['8', '7'], ['9', '8'], ['10', '9'], ['11', '10'], ['12', '11'], ['13', '12'], ['14', '13'], ['15', '14'], ['16', '15']]);
	$m['LCD_ROWS'] = $p['dict']([['1', '0'], ['2', '1']]);
	$m['DISPLAY_7SEG_NUMBERS'] = $p['dict']([['0', $p['tuple']([1, 1, 1, 1, 1, 1, 0])], ['1', $p['tuple']([0, 1, 1, 0, 0, 0, 0])], ['2', $p['tuple']([1, 1, 0, 1, 1, 0, 1])], ['3', $p['tuple']([1, 1, 1, 1, 0, 0, 1])], ['4', $p['tuple']([0, 1, 1, 0, 0, 1, 1])], ['5', $p['tuple']([1, 0, 1, 1, 0, 1, 1])], ['6', $p['tuple']([1, 0, 1, 1, 1, 1, 1])], ['7', $p['tuple']([1, 1, 1, 0, 0, 0, 0])], ['8', $p['tuple']([1, 1, 1, 1, 1, 1, 1])], ['9', $p['tuple']([1, 1, 1, 0, 0, 1, 1])]]);
	$m['KEYPAD_KEYS'] = $p['set'](['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '*', '#']);
	return this;
}; /* end edu.uca.util.Constants */


/* end module: edu.uca.util.Constants */


