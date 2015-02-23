/* start module: edu.uca.renderable.block.ArduinoBlocks */
$pyjs['loaded_modules']['edu.uca.renderable.block.ArduinoBlocks'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.renderable.block.ArduinoBlocks']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.renderable.block.ArduinoBlocks'];
	if(typeof $pyjs['loaded_modules']['edu.uca.renderable.block'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.renderable.block']['__was_initialized__']) $p['___import___']('edu.uca.renderable.block', null);
	var $m = $pyjs['loaded_modules']['edu.uca.renderable.block.ArduinoBlocks'];
	$m['__repr__'] = function() { return '<module: edu.uca.renderable.block.ArduinoBlocks>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.renderable.block.ArduinoBlocks';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.renderable.block']['ArduinoBlocks'] = $pyjs['loaded_modules']['edu.uca.renderable.block.ArduinoBlocks'];


	$m['createStatementBlock'] = $p['___import___']('edu.uca.renderable.CreatorBlockFactory.createStatementBlock', 'edu.uca.renderable.block', null, false);
	$m['createNumberBlockHolder'] = $p['___import___']('edu.uca.renderable.CreatorBlockFactory.createNumberBlockHolder', 'edu.uca.renderable.block', null, false);
	$m['createCompoundStatementBlock'] = $p['___import___']('edu.uca.renderable.CreatorBlockFactory.createCompoundStatementBlock', 'edu.uca.renderable.block', null, false);
	$m['createBooleanBlockHolder'] = $p['___import___']('edu.uca.renderable.CreatorBlockFactory.createBooleanBlockHolder', 'edu.uca.renderable.block', null, false);
	$m['createMainBlock'] = $p['___import___']('edu.uca.renderable.CreatorBlockFactory.createMainBlock', 'edu.uca.renderable.block', null, false);
	$m['createBooleanBlock'] = $p['___import___']('edu.uca.renderable.CreatorBlockFactory.createBooleanBlock', 'edu.uca.renderable.block', null, false);
	$m['createDropdownNumberBlockHolder'] = $p['___import___']('edu.uca.renderable.CreatorBlockFactory.createDropdownNumberBlockHolder', 'edu.uca.renderable.block', null, false);
	$m['createNumberBlock'] = $p['___import___']('edu.uca.renderable.CreatorBlockFactory.createNumberBlock', 'edu.uca.renderable.block', null, false);
	$m['createStringBlockHolder'] = $p['___import___']('edu.uca.renderable.CreatorBlockFactory.createStringBlockHolder', 'edu.uca.renderable.block', null, false);
	$m['createStringBlock'] = $p['___import___']('edu.uca.renderable.CreatorBlockFactory.createStringBlock', 'edu.uca.renderable.block', null, false);
	$m['createDropdownBooleanBlockHolder'] = $p['___import___']('edu.uca.renderable.CreatorBlockFactory.createDropdownBooleanBlockHolder', 'edu.uca.renderable.block', null, false);
	$m['createHatBlock'] = $p['___import___']('edu.uca.renderable.CreatorBlockFactory.createHatBlock', 'edu.uca.renderable.block', null, false);
	$m['createDropdownStringBlockHolder'] = $p['___import___']('edu.uca.renderable.CreatorBlockFactory.createDropdownStringBlockHolder', 'edu.uca.renderable.block', null, false);
	$p['__import_all__']('edu.uca.util.Constants', 'edu.uca.renderable.block', $m, null, false);
	$m['numericVars'] = $p['___import___']('edu.uca.Workspace.numericVars', 'edu.uca.renderable.block', null, false);
	$m['alphaNumericVars'] = $p['___import___']('edu.uca.Workspace.alphaNumericVars', 'edu.uca.renderable.block', null, false);
	$m['logicVars'] = $p['___import___']('edu.uca.Workspace.logicVars', 'edu.uca.renderable.block', null, false);
	$m['countComponents'] = $p['___import___']('edu.uca.Workspace.countComponents', 'edu.uca.renderable.block', null, false);
	$m['_'] = $p['___import___']('edu.uca.util.i18n._', 'edu.uca.renderable.block', null, false);
	$m['gettext_noop'] = $p['___import___']('edu.uca.util.i18n.gettext_noop', 'edu.uca.renderable.block', null, false);
	$m['if_'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var csb;
		csb = $m['createCompoundStatementBlock'](off, 'if_');
		csb['addCodeElement']($m['gettext_noop']('if&nbsp;&nbsp;'));
		csb['addArgumentHolder']($m['createBooleanBlockHolder'](off, csb));
		return csb;
	};
	$m['if_']['__name__'] = 'if_';

	$m['if_']['__bind_type__'] = 0;
	$m['if_']['__args__'] = [null,null,['off', false]];
	$m['if_else_'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var csb;
		csb = $m['createCompoundStatementBlock'](off, 'if_else_', 2);
		csb['addCodeElement']($m['gettext_noop']('if&nbsp;&nbsp;'));
		csb['addArgumentHolder']($m['createBooleanBlockHolder'](off, csb));
		csb['block']['addCodeElement']($m['gettext_noop']('else'));
		return csb;
	};
	$m['if_else_']['__name__'] = 'if_else_';

	$m['if_else_']['__bind_type__'] = 0;
	$m['if_else_']['__args__'] = [null,null,['off', false]];
	$m['forever'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var mb;
		mb = $m['createMainBlock'](off, 'forever');
		mb['addCodeElement']($m['gettext_noop']('forever'));
		return mb;
	};
	$m['forever']['__name__'] = 'forever';

	$m['forever']['__bind_type__'] = 0;
	$m['forever']['__args__'] = [null,null,['off', false]];
	$m['repeat_'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var csb;
		csb = $pyjs_kwargs_call(null, $m['createCompoundStatementBlock'], null, null, [{'loop':true}, off, 'repeat_']);
		csb['addCodeElement']($m['gettext_noop']('repeat'));
		csb['addArgumentHolder']($m['createNumberBlockHolder'](off, csb));
		return csb;
	};
	$m['repeat_']['__name__'] = 'repeat_';

	$m['repeat_']['__bind_type__'] = 0;
	$m['repeat_']['__args__'] = [null,null,['off', false]];
	$m['doWhile'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var csb;
		csb = $pyjs_kwargs_call(null, $m['createCompoundStatementBlock'], null, null, [{'name':'doWhile', 'loop':true}, off]);
		csb['addCodeElement']('fa&ccedil;a');
		csb['block']['addCodeElement']('at&eacute;');
		csb['block']['addArgumentHolder']($m['createBooleanBlockHolder'](off, csb));
		return csb;
	};
	$m['doWhile']['__name__'] = 'doWhile';

	$m['doWhile']['__bind_type__'] = 0;
	$m['doWhile']['__args__'] = [null,null,['off', false]];
	$m['while_'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var csb;
		csb = $pyjs_kwargs_call(null, $m['createCompoundStatementBlock'], null, null, [{'name':'while_', 'loop':true}, off]);
		csb['addCodeElement']($m['gettext_noop']('while'));
		csb['addArgumentHolder']($m['createBooleanBlockHolder'](off, csb));
		return csb;
	};
	$m['while_']['__name__'] = 'while_';

	$m['while_']['__bind_type__'] = 0;
	$m['while_']['__args__'] = [null,null,['off', false]];
	$m['delay_'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createStatementBlock'](off, 'delay_', 'orange');
		sb['addCodeElement']($m['gettext_noop']('delay'));
		sb['addArgumentHolder']($m['createNumberBlockHolder'](off, sb));
		sb['addCodeElement']('ms');
		return sb;
	};
	$m['delay_']['__name__'] = 'delay_';

	$m['delay_']['__bind_type__'] = 0;
	$m['delay_']['__args__'] = [null,null,['off', false]];
	$m['delayUntil'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createStatementBlock'](off, 'delayUntil', 'orange');
		sb['addCodeElement']($m['gettext_noop']('espere ate que'));
		sb['addArgumentHolder']($m['createBooleanBlockHolder'](off, sb));
		return sb;
	};
	$m['delayUntil']['__name__'] = 'delayUntil';

	$m['delayUntil']['__bind_type__'] = 0;
	$m['delayUntil']['__args__'] = [null,null,['off', false]];
	$m['numericOperation'] = function(name, operator, off) {
		var nb;
		nb = $m['createNumberBlock'](off, name);
		nb['addCodeElement']();
		nb['addArgumentHolder']($m['createNumberBlockHolder'](off, nb));
		nb['addCodeElement'](operator, $p['dict']([['+', 'plus'], ['&minus;', 'minus'], ['&times;', 'multiply'], ['&divide;', 'divide']]));
		nb['addArgumentHolder']($m['createNumberBlockHolder'](off, nb));
		nb['addCodeElement']();
		return nb;
	};
	$m['numericOperation']['__name__'] = 'numericOperation';

	$m['numericOperation']['__bind_type__'] = 0;
	$m['numericOperation']['__args__'] = [null,null,['name'],['operator'],['off']];
	$m['plus'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];

		return $m['numericOperation']('plus', '+', off);
	};
	$m['plus']['__name__'] = 'plus';

	$m['plus']['__bind_type__'] = 0;
	$m['plus']['__args__'] = [null,null,['off', false]];
	$m['minus'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];

		return $m['numericOperation']('minus', '&minus;', off);
	};
	$m['minus']['__name__'] = 'minus';

	$m['minus']['__bind_type__'] = 0;
	$m['minus']['__args__'] = [null,null,['off', false]];
	$m['multiply'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];

		return $m['numericOperation']('multiply', '&times;', off);
	};
	$m['multiply']['__name__'] = 'multiply';

	$m['multiply']['__bind_type__'] = 0;
	$m['multiply']['__args__'] = [null,null,['off', false]];
	$m['divide'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];

		return $m['numericOperation']('divide', '&divide;', off);
	};
	$m['divide']['__name__'] = 'divide';

	$m['divide']['__bind_type__'] = 0;
	$m['divide']['__args__'] = [null,null,['off', false]];
	$m['relationalOperation'] = function(name, operator, off) {
		var bb;
		bb = $m['createBooleanBlock'](off, name);
		bb['addArgumentHolder']($m['createNumberBlockHolder'](off, bb));
		bb['addCodeElement'](operator, $p['dict']([['=', 'equals'], ['<', 'lesser'], ['>', 'greater'], ['&le;', 'lesser_equals'], ['&ge;', 'greater_equals'], ['&ne;', 'not_equals']]));
		bb['addArgumentHolder']($m['createNumberBlockHolder'](off, bb));
		return bb;
	};
	$m['relationalOperation']['__name__'] = 'relationalOperation';

	$m['relationalOperation']['__bind_type__'] = 0;
	$m['relationalOperation']['__args__'] = [null,null,['name'],['operator'],['off']];
	$m['equals'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];

		return $m['relationalOperation']('equals', '=', off);
	};
	$m['equals']['__name__'] = 'equals';

	$m['equals']['__bind_type__'] = 0;
	$m['equals']['__args__'] = [null,null,['off', false]];
	$m['lesser'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];

		return $m['relationalOperation']('lesser', '<', off);
	};
	$m['lesser']['__name__'] = 'lesser';

	$m['lesser']['__bind_type__'] = 0;
	$m['lesser']['__args__'] = [null,null,['off', false]];
	$m['greater'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];

		return $m['relationalOperation']('greater', '>', off);
	};
	$m['greater']['__name__'] = 'greater';

	$m['greater']['__bind_type__'] = 0;
	$m['greater']['__args__'] = [null,null,['off', false]];
	$m['lesser_equals'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];

		return $m['relationalOperation']('lesser_equals', '&le;', off);
	};
	$m['lesser_equals']['__name__'] = 'lesser_equals';

	$m['lesser_equals']['__bind_type__'] = 0;
	$m['lesser_equals']['__args__'] = [null,null,['off', false]];
	$m['greater_equals'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];

		return $m['relationalOperation']('greater_equals', '&ge;', off);
	};
	$m['greater_equals']['__name__'] = 'greater_equals';

	$m['greater_equals']['__bind_type__'] = 0;
	$m['greater_equals']['__args__'] = [null,null,['off', false]];
	$m['not_equals'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];

		return $m['relationalOperation']('not_equals', '&ne;', off);
	};
	$m['not_equals']['__name__'] = 'not_equals';

	$m['not_equals']['__bind_type__'] = 0;
	$m['not_equals']['__args__'] = [null,null,['off', false]];
	$m['logicOperation'] = function(name, operator, off) {
		var bb;
		bb = $m['createBooleanBlock'](off, name);
		bb['addArgumentHolder']($m['createBooleanBlockHolder'](off, bb));
		bb['addCodeElement'](operator, $p['dict']([[$m['gettext_noop']('and'), 'and_'], [$m['gettext_noop']('or'), 'or_']]));
		bb['addArgumentHolder']($m['createBooleanBlockHolder'](off, bb));
		return bb;
	};
	$m['logicOperation']['__name__'] = 'logicOperation';

	$m['logicOperation']['__bind_type__'] = 0;
	$m['logicOperation']['__args__'] = [null,null,['name'],['operator'],['off']];
	$m['and_'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];

		return $m['logicOperation']('and_', $m['gettext_noop']('and'), off);
	};
	$m['and_']['__name__'] = 'and_';

	$m['and_']['__bind_type__'] = 0;
	$m['and_']['__args__'] = [null,null,['off', false]];
	$m['or_'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];

		return $m['logicOperation']('or_', $m['gettext_noop']('or'), off);
	};
	$m['or_']['__name__'] = 'or_';

	$m['or_']['__bind_type__'] = 0;
	$m['or_']['__args__'] = [null,null,['off', false]];
	$m['not_'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var bb;
		bb = $m['createBooleanBlock'](off, 'not_');
		bb['addCodeElement']($m['gettext_noop']('not'));
		bb['addArgumentHolder']($m['createBooleanBlockHolder'](off, bb));
		return bb;
	};
	$m['not_']['__name__'] = 'not_';

	$m['not_']['__bind_type__'] = 0;
	$m['not_']['__args__'] = [null,null,['off', false]];
	$m['logicConstant'] = function(name, operator, off) {
		var bb;
		bb = $m['createBooleanBlock'](off, name);
		bb['addCodeElement'](operator, $p['dict']([[$m['gettext_noop']('TRUE'), 'true_'], [$m['gettext_noop']('FALSE'), 'false_']]), $p['dict']([[$m['gettext_noop']('T'), $m['gettext_noop']('TRUE')], [$m['gettext_noop']('F'), $m['gettext_noop']('FALSE')]]));
		return bb;
	};
	$m['logicConstant']['__name__'] = 'logicConstant';

	$m['logicConstant']['__bind_type__'] = 0;
	$m['logicConstant']['__args__'] = [null,null,['name'],['operator'],['off']];
	$m['true_'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];

		return $m['logicConstant']('true_', $m['gettext_noop']('TRUE'), off);
	};
	$m['true_']['__name__'] = 'true_';

	$m['true_']['__bind_type__'] = 0;
	$m['true_']['__args__'] = [null,null,['off', false]];
	$m['false_'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];

		return $m['logicConstant']('false_', $m['gettext_noop']('FALSE'), off);
	};
	$m['false_']['__name__'] = 'false_';

	$m['false_']['__bind_type__'] = 0;
	$m['false_']['__args__'] = [null,null,['off', false]];
	$m['analogRead'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var nb;
		nb = $m['createNumberBlock'](off, 'analogRead', 'purple');
		nb['addCodeElement']($m['gettext_noop']('analog pin'));
		nb['addArgumentHolder']($m['createDropdownNumberBlockHolder'](off, (typeof ANALOG_PINS == "undefined"?$m['ANALOG_PINS']:ANALOG_PINS), nb));
		nb['addCodeElement']();
		return nb;
	};
	$m['analogRead']['__name__'] = 'analogRead';

	$m['analogRead']['__bind_type__'] = 0;
	$m['analogRead']['__args__'] = [null,null,['off', false]];
	$m['digitalRead'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var bb;
		bb = $m['createBooleanBlock'](off, 'digitalRead', 'purple');
		bb['addCodeElement']($m['gettext_noop']('digital pin'));
		bb['addArgumentHolder']($m['createDropdownNumberBlockHolder'](off, (typeof ALL_PINS == "undefined"?$m['ALL_PINS']:ALL_PINS), bb));
		bb['addCodeElement']();
		return bb;
	};
	$m['digitalRead']['__name__'] = 'digitalRead';

	$m['digitalRead']['__bind_type__'] = 0;
	$m['digitalRead']['__args__'] = [null,null,['off', false]];
	$m['getButton'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createBooleanBlock'](off, 'getButton', 'purple');
		sb['addCodeElement']('o');
		sb['addVariableElement']($m['gettext_noop']('button'), $m['countComponents'], 'component_button');
		sb['addCodeElement']('est&aacute; pressionado');
		return sb;
	};
	$m['getButton']['__name__'] = 'getButton';

	$m['getButton']['__bind_type__'] = 0;
	$m['getButton']['__args__'] = [null,null,['off', false]];
	$m['getKnob'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var nb;
		nb = $m['createNumberBlock'](off, 'getKnob', 'purple');
		nb['addCodeElement']('valor');
		nb['addVariableElement']($m['gettext_noop']('knob'), $m['countComponents'], 'component_knob');
		return nb;
	};
	$m['getKnob']['__name__'] = 'getKnob';

	$m['getKnob']['__bind_type__'] = 0;
	$m['getKnob']['__args__'] = [null,null,['off', false]];
	$m['getLdr'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var nb;
		nb = $m['createNumberBlock'](off, 'getLdr', 'purple');
		nb['addCodeElement']($m['gettext_noop']('luminosity'));
		nb['addVariableElement']('ldr', $m['countComponents'], 'component_ldr');
		return nb;
	};
	$m['getLdr']['__name__'] = 'getLdr';

	$m['getLdr']['__bind_type__'] = 0;
	$m['getLdr']['__args__'] = [null,null,['off', false]];
	$m['getThermistor'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var nb;
		nb = $m['createNumberBlock'](off, 'getThermistor', 'purple');
		nb['addCodeElement']($m['gettext_noop']('temperature'));
		nb['addVariableElement']('termistor', $m['countComponents'], 'component_thermistor');
		return nb;
	};
	$m['getThermistor']['__name__'] = 'getThermistor';

	$m['getThermistor']['__bind_type__'] = 0;
	$m['getThermistor']['__args__'] = [null,null,['off', false]];
	$m['getJoystickVRx'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var $add2,nb,$add1;
		nb = $m['createNumberBlock'](off, 'getJoystickVRx', 'purple');
		nb['addCodeElement']($p['__op_add']($add1=$m['gettext_noop']('abscissa'),$add2=' (x)'));
		nb['addVariableElement']('joystick', $m['countComponents'], 'component_joystick');
		return nb;
	};
	$m['getJoystickVRx']['__name__'] = 'getJoystickVRx';

	$m['getJoystickVRx']['__bind_type__'] = 0;
	$m['getJoystickVRx']['__args__'] = [null,null,['off', false]];
	$m['getJoystickVRy'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var $add3,nb,$add4;
		nb = $m['createNumberBlock'](off, 'getJoystickVRy', 'purple');
		nb['addCodeElement']($p['__op_add']($add3=$m['gettext_noop']('ordinate'),$add4=' (y)'));
		nb['addVariableElement']('joystick', $m['countComponents'], 'component_joystick');
		return nb;
	};
	$m['getJoystickVRy']['__name__'] = 'getJoystickVRy';

	$m['getJoystickVRy']['__bind_type__'] = 0;
	$m['getJoystickVRy']['__args__'] = [null,null,['off', false]];
	$m['getJoystickSW'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var nb;
		nb = $m['createBooleanBlock'](off, 'getJoystickSW', 'purple');
		nb['addCodeElement']('o');
		nb['addVariableElement']('joystick', $m['countComponents'], 'component_joystick');
		nb['addCodeElement']('est&aacute; pressionado');
		return nb;
	};
	$m['getJoystickSW']['__name__'] = 'getJoystickSW';

	$m['getJoystickSW']['__bind_type__'] = 0;
	$m['getJoystickSW']['__args__'] = [null,null,['off', false]];
	$m['getKey'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createStringBlock'](off, 'getKey', 'purple');
		sb['addCodeElement']('leia a tecla pressionada');
		sb['addVariableElement']('teclado', $m['countComponents'], 'component_keypad');
		return sb;
	};
	$m['getKey']['__name__'] = 'getKey';

	$m['getKey']['__bind_type__'] = 0;
	$m['getKey']['__args__'] = [null,null,['off', false]];
	$m['keyPressed'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var bb;
		bb = $m['createBooleanBlock'](off, 'keyPressed', 'purple');
		bb['addCodeElement']('o');
		bb['addVariableElement']('teclado', $m['countComponents'], 'component_keypad');
		bb['addCodeElement']('foi pressionado');
		return bb;
	};
	$m['keyPressed']['__name__'] = 'keyPressed';

	$m['keyPressed']['__bind_type__'] = 0;
	$m['keyPressed']['__args__'] = [null,null,['off', false]];
	$m['waitForAnyKey'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createStringBlock'](off, 'waitForAnyKey', 'purple');
		sb['addCodeElement']('espere alguma tecla');
		sb['addVariableElement']('teclado', $m['countComponents'], 'component_keypad');
		return sb;
	};
	$m['waitForAnyKey']['__name__'] = 'waitForAnyKey';

	$m['waitForAnyKey']['__bind_type__'] = 0;
	$m['waitForAnyKey']['__args__'] = [null,null,['off', false]];
	$m['waitForAnyNumber'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createStringBlock'](off, 'waitForAnyNumber', 'purple');
		sb['addCodeElement']('espere algum n&uacute;mero');
		sb['addVariableElement']('teclado', $m['countComponents'], 'component_keypad');
		return sb;
	};
	$m['waitForAnyNumber']['__name__'] = 'waitForAnyNumber';

	$m['waitForAnyNumber']['__bind_type__'] = 0;
	$m['waitForAnyNumber']['__args__'] = [null,null,['off', false]];
	$m['waitForTheKey'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createStatementBlock'](off, 'waitForTheKey', 'purple');
		sb['addCodeElement']('espere pela tecla');
		sb['addArgumentHolder']($m['createDropdownStringBlockHolder'](off, (typeof KEYPAD_KEYS == "undefined"?$m['KEYPAD_KEYS']:KEYPAD_KEYS), sb));
		sb['addCodeElement']();
		sb['addVariableElement']('teclado', $m['countComponents'], 'component_keypad');
		return sb;
	};
	$m['waitForTheKey']['__name__'] = 'waitForTheKey';

	$m['waitForTheKey']['__bind_type__'] = 0;
	$m['waitForTheKey']['__args__'] = [null,null,['off', false]];
	$m['irReceived'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var bb;
		bb = $m['createBooleanBlock'](off, 'irReceived', 'purple');
		bb['addCodeElement']('o');
		bb['addVariableElement']('infravermelho', $m['countComponents'], 'component_IR');
		bb['addCodeElement']('recebeu sinal');
		return bb;
	};
	$m['irReceived']['__name__'] = 'irReceived';

	$m['irReceived']['__bind_type__'] = 0;
	$m['irReceived']['__args__'] = [null,null,['off', false]];
	$m['getIRValue'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createStringBlock'](off, 'getIRValue', 'purple');
		sb['addCodeElement']('leia o sinal recebido');
		sb['addVariableElement']('infravermelho', $m['countComponents'], 'component_IR');
		return sb;
	};
	$m['getIRValue']['__name__'] = 'getIRValue';

	$m['getIRValue']['__bind_type__'] = 0;
	$m['getIRValue']['__args__'] = [null,null,['off', false]];
	$m['waitForAnySignal'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createStringBlock'](off, 'waitForAnySignal', 'purple');
		sb['addCodeElement']('espere algum sinal');
		sb['addVariableElement']('infravermelho', $m['countComponents'], 'component_IR');
		return sb;
	};
	$m['waitForAnySignal']['__name__'] = 'waitForAnySignal';

	$m['waitForAnySignal']['__bind_type__'] = 0;
	$m['waitForAnySignal']['__args__'] = [null,null,['off', false]];
	$m['waitForTheSignal'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createStatementBlock'](off, 'waitForTheSignal', 'purple');
		sb['addCodeElement']('espere pelo sinal');
		sb['addArgumentHolder']($m['createStringBlockHolder'](off, sb));
		sb['addCodeElement']();
		sb['addVariableElement']('infravermelho', $m['countComponents'], 'component_IR');
		return sb;
	};
	$m['waitForTheSignal']['__name__'] = 'waitForTheSignal';

	$m['waitForTheSignal']['__bind_type__'] = 0;
	$m['waitForTheSignal']['__args__'] = [null,null,['off', false]];
	$m['digitalWrite'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createStatementBlock'](off, 'digitalWrite');
		sb['addCodeElement']($m['gettext_noop']('set digital pin'));
		sb['addArgumentHolder']($m['createDropdownNumberBlockHolder'](off, (typeof ALL_PINS == "undefined"?$m['ALL_PINS']:ALL_PINS), sb));
		sb['addCodeElement']($m['gettext_noop']('value'));
		sb['addArgumentHolder']($m['createDropdownBooleanBlockHolder'](off, (typeof DIGITAL_VALUES == "undefined"?$m['DIGITAL_VALUES']:DIGITAL_VALUES), sb));
		return sb;
	};
	$m['digitalWrite']['__name__'] = 'digitalWrite';

	$m['digitalWrite']['__bind_type__'] = 0;
	$m['digitalWrite']['__args__'] = [null,null,['off', false]];
	$m['analogWrite'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createStatementBlock'](off, 'analogWrite');
		sb['addCodeElement']($m['gettext_noop']('set analog pin'));
		sb['addArgumentHolder']($m['createDropdownNumberBlockHolder'](off, (typeof PWM_PINS == "undefined"?$m['PWM_PINS']:PWM_PINS), sb));
		sb['addCodeElement']($m['gettext_noop']('value'));
		sb['addArgumentHolder']($m['createNumberBlockHolder'](off, sb));
		return sb;
	};
	$m['analogWrite']['__name__'] = 'analogWrite';

	$m['analogWrite']['__bind_type__'] = 0;
	$m['analogWrite']['__args__'] = [null,null,['off', false]];
	$m['setLed'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createStatementBlock'](off, 'setLed');
		sb['addCodeElement']($m['gettext_noop']('set'));
		sb['addVariableElement']('led', $m['countComponents'], 'component_led');
		sb['addCodeElement']($m['gettext_noop']('to'));
		sb['addCodeElement']();
		sb['addArgumentHolder']($m['createDropdownBooleanBlockHolder'](off, (typeof LED_VALUES == "undefined"?$m['LED_VALUES']:LED_VALUES), sb));
		return sb;
	};
	$m['setLed']['__name__'] = 'setLed';

	$m['setLed']['__bind_type__'] = 0;
	$m['setLed']['__args__'] = [null,null,['off', false]];
	$m['setBrightnessLed'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createStatementBlock'](off, 'setBrightnessLed');
		sb['addCodeElement']($m['gettext_noop']('set'));
		sb['addVariableElement']('led', $m['countComponents'], 'component_led');
		sb['addCodeElement']('brilho');
		sb['addCodeElement']();
		sb['addArgumentHolder']($m['createNumberBlockHolder'](off, sb));
		return sb;
	};
	$m['setBrightnessLed']['__name__'] = 'setBrightnessLed';

	$m['setBrightnessLed']['__bind_type__'] = 0;
	$m['setBrightnessLed']['__args__'] = [null,null,['off', false]];
	$m['blinkLed'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createStatementBlock'](off, 'blinkLed');
		sb['addCodeElement']('pisca');
		sb['addVariableElement']('led', $m['countComponents'], 'component_led');
		sb['addCodeElement']();
		sb['addArgumentHolder']($m['createNumberBlockHolder'](off, sb));
		sb['addCodeElement']('vezes em');
		sb['addArgumentHolder']($m['createNumberBlockHolder'](off, sb));
		sb['addCodeElement']('s');
		return sb;
	};
	$m['blinkLed']['__name__'] = 'blinkLed';

	$m['blinkLed']['__bind_type__'] = 0;
	$m['blinkLed']['__args__'] = [null,null,['off', false]];
	$m['setRGBLed'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createStatementBlock'](off, 'setRGBLed');
		sb['addCodeElement']($m['gettext_noop']('set'));
		sb['addVariableElement']('led rgb', $m['countComponents'], 'component_rgb_led');
		sb['addCodeElement']($m['gettext_noop']('R'));
		sb['addArgumentHolder']($m['createNumberBlockHolder'](off, sb));
		sb['addCodeElement']($m['gettext_noop']('G'));
		sb['addArgumentHolder']($m['createNumberBlockHolder'](off, sb));
		sb['addCodeElement']($m['gettext_noop']('B'));
		sb['addArgumentHolder']($m['createNumberBlockHolder'](off, sb));
		return sb;
	};
	$m['setRGBLed']['__name__'] = 'setRGBLed';

	$m['setRGBLed']['__bind_type__'] = 0;
	$m['setRGBLed']['__args__'] = [null,null,['off', false]];
	$m['setServo'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createStatementBlock'](off, 'setServo');
		sb['addCodeElement']($m['gettext_noop']('set'));
		sb['addVariableElement']('servo', $m['countComponents'], 'component_servo');
		sb['addCodeElement']($m['gettext_noop']('angle'));
		sb['addArgumentHolder']($m['createNumberBlockHolder'](off, sb));
		sb['addCodeElement']('&deg;');
		return sb;
	};
	$m['setServo']['__name__'] = 'setServo';

	$m['setServo']['__bind_type__'] = 0;
	$m['setServo']['__args__'] = [null,null,['off', false]];
	$m['setBuzzer'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var $add6,$add7,$add12,$add5,sb,$add8,$add9,$add10,$add11;
		sb = $m['createStatementBlock'](off, 'setBuzzer');
		sb['addCodeElement']($m['gettext_noop']('play'));
		sb['addVariableElement']('buzina', $m['countComponents'], 'component_buzzer');
		sb['addCodeElement']($p['__op_add']($add7=$p['__op_add']($add5='<i>',$add6=$m['gettext_noop']('note')),$add8='</i>'));
		sb['addArgumentHolder']($m['createDropdownNumberBlockHolder'](off, (typeof MANY_FEW_NOTES == "undefined"?$m['MANY_FEW_NOTES']:MANY_FEW_NOTES), sb));
		sb['addCodeElement']($p['__op_add']($add11=$p['__op_add']($add9='<i>',$add10=$m['gettext_noop']('duration')),$add12='</i>'));
		sb['addArgumentHolder']($m['createNumberBlockHolder'](off, sb));
		return sb;
	};
	$m['setBuzzer']['__name__'] = 'setBuzzer';

	$m['setBuzzer']['__bind_type__'] = 0;
	$m['setBuzzer']['__args__'] = [null,null,['off', false]];
	$m['onMotor'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createStatementBlock'](off, 'onMotor');
		sb['addCodeElement']($m['gettext_noop']('on'));
		sb['addCodeElement']();
		sb['addVariableElement']('motor', $m['countComponents'], 'component_motor');
		sb['addCodeElement']();
		sb['addCodeElement']($m['gettext_noop']('to'));
		sb['addCodeElement']();
		sb['addArgumentHolder']($m['createDropdownBooleanBlockHolder'](off, (typeof DIRECTIONS_MOTOR == "undefined"?$m['DIRECTIONS_MOTOR']:DIRECTIONS_MOTOR), sb));
		return sb;
	};
	$m['onMotor']['__name__'] = 'onMotor';

	$m['onMotor']['__bind_type__'] = 0;
	$m['onMotor']['__args__'] = [null,null,['off', false]];
	$m['offMotor'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createStatementBlock'](off, 'offMotor');
		sb['addCodeElement']($m['gettext_noop']('stop'));
		sb['addCodeElement']();
		sb['addVariableElement']('motor', $m['countComponents'], 'component_motor');
		return sb;
	};
	$m['offMotor']['__name__'] = 'offMotor';

	$m['offMotor']['__bind_type__'] = 0;
	$m['offMotor']['__args__'] = [null,null,['off', false]];
	$m['speedMotor'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createStatementBlock'](off, 'speedMotor');
		sb['addCodeElement']($m['gettext_noop']('speed'));
		sb['addCodeElement']();
		sb['addVariableElement']('motor', $m['countComponents'], 'component_motor');
		sb['addCodeElement']();
		sb['addArgumentHolder']($m['createNumberBlockHolder'](off, sb));
		return sb;
	};
	$m['speedMotor']['__name__'] = 'speedMotor';

	$m['speedMotor']['__bind_type__'] = 0;
	$m['speedMotor']['__args__'] = [null,null,['off', false]];
	$m['setLcd'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createStatementBlock'](off, 'setLcd');
		sb['addCodeElement']('escreve no');
		sb['addVariableElement']('lcd', $m['countComponents'], 'component_lcd');
		sb['addCodeElement']($m['gettext_noop']('text'));
		sb['addArgumentHolder']($m['createStringBlockHolder'](off, sb));
		return sb;
	};
	$m['setLcd']['__name__'] = 'setLcd';

	$m['setLcd']['__bind_type__'] = 0;
	$m['setLcd']['__args__'] = [null,null,['off', false]];
	$m['posLcd'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createStatementBlock'](off, 'posLcd');
		sb['addCodeElement']('posicione');
		sb['addVariableElement']('lcd', $m['countComponents'], 'component_lcd');
		sb['addCodeElement']($m['gettext_noop']('row'));
		sb['addArgumentHolder']($m['createDropdownNumberBlockHolder'](off, (typeof LCD_ROWS == "undefined"?$m['LCD_ROWS']:LCD_ROWS), sb));
		sb['addCodeElement']($m['gettext_noop']('column'));
		sb['addArgumentHolder']($m['createDropdownNumberBlockHolder'](off, (typeof LCD_COLS == "undefined"?$m['LCD_COLS']:LCD_COLS), sb));
		return sb;
	};
	$m['posLcd']['__name__'] = 'posLcd';

	$m['posLcd']['__bind_type__'] = 0;
	$m['posLcd']['__args__'] = [null,null,['off', false]];
	$m['clearLcd'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createStatementBlock'](off, 'clearLcd');
		sb['addCodeElement']('limpe o');
		sb['addVariableElement']('lcd', $m['countComponents'], 'component_lcd');
		return sb;
	};
	$m['clearLcd']['__name__'] = 'clearLcd';

	$m['clearLcd']['__bind_type__'] = 0;
	$m['clearLcd']['__args__'] = [null,null,['off', false]];
	$m['setDisplay7seg'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createStatementBlock'](off, 'setDisplay7seg');
		sb['addCodeElement']($m['gettext_noop']('show on'));
		sb['addVariableElement']('display7seg', $m['countComponents'], 'component_display7seg');
		sb['addCodeElement']($m['gettext_noop']('the n\xc2\xba'));
		sb['addArgumentHolder']($m['createDropdownNumberBlockHolder'](off, (typeof DISPLAY_7SEG_NUMBERS == "undefined"?$m['DISPLAY_7SEG_NUMBERS']:DISPLAY_7SEG_NUMBERS), sb));
		return sb;
	};
	$m['setDisplay7seg']['__name__'] = 'setDisplay7seg';

	$m['setDisplay7seg']['__bind_type__'] = 0;
	$m['setDisplay7seg']['__args__'] = [null,null,['off', false]];
	$m['clearDisplay7seg'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createStatementBlock'](off, 'clearDisplay7seg');
		sb['addCodeElement']($m['gettext_noop']('erase'));
		sb['addVariableElement']('display7seg', $m['countComponents'], 'component_display7seg');
		return sb;
	};
	$m['clearDisplay7seg']['__name__'] = 'clearDisplay7seg';

	$m['clearDisplay7seg']['__bind_type__'] = 0;
	$m['clearDisplay7seg']['__args__'] = [null,null,['off', false]];
	$m['trigonometryFunction'] = function(name, operator, off) {
		var nb;
		nb = $m['createNumberBlock'](off, name, 'darkblue');
		nb['addCodeElement'](operator, $p['dict']([['sen', 'sin_'], ['cos', 'cos_'], ['tan', 'tan_']]));
		nb['addArgumentHolder']($m['createNumberBlockHolder'](off, nb));
		nb['addCodeElement']();
		return nb;
	};
	$m['trigonometryFunction']['__name__'] = 'trigonometryFunction';

	$m['trigonometryFunction']['__bind_type__'] = 0;
	$m['trigonometryFunction']['__args__'] = [null,null,['name'],['operator'],['off']];
	$m['sin_'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];

		return $m['trigonometryFunction']('sin_', 'sen', off);
	};
	$m['sin_']['__name__'] = 'sin_';

	$m['sin_']['__bind_type__'] = 0;
	$m['sin_']['__args__'] = [null,null,['off', false]];
	$m['cos_'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];

		return $m['trigonometryFunction']('cos_', 'cos', off);
	};
	$m['cos_']['__name__'] = 'cos_';

	$m['cos_']['__bind_type__'] = 0;
	$m['cos_']['__args__'] = [null,null,['off', false]];
	$m['tan_'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];

		return $m['trigonometryFunction']('tan_', 'tan', off);
	};
	$m['tan_']['__name__'] = 'tan_';

	$m['tan_']['__bind_type__'] = 0;
	$m['tan_']['__args__'] = [null,null,['off', false]];
	$m['binaryFunction'] = function(name, operator, off) {
		var nb;
		nb = $m['createNumberBlock'](off, name, 'darkblue');
		nb['addCodeElement'](operator, $p['dict']([['m\xc3\xa1x', 'max_'], ['m\xc3\xadn', 'min_']]));
		nb['addArgumentHolder']($m['createNumberBlockHolder'](off, nb));
		nb['addCodeElement']();
		nb['addArgumentHolder']($m['createNumberBlockHolder'](off, nb));
		nb['addCodeElement']();
		return nb;
	};
	$m['binaryFunction']['__name__'] = 'binaryFunction';

	$m['binaryFunction']['__bind_type__'] = 0;
	$m['binaryFunction']['__args__'] = [null,null,['name'],['operator'],['off']];
	$m['unaryFunction'] = function(name, operator, off) {
		var nb;
		nb = $m['createNumberBlock'](off, name, 'darkblue');
		nb['addCodeElement'](operator, $p['dict']([['&radic;', 'sqrt_'], ['abs', 'abs_'], ['arredonde', 'round_']]));
		nb['addArgumentHolder']($m['createNumberBlockHolder'](off, nb));
		nb['addCodeElement']();
		return nb;
	};
	$m['unaryFunction']['__name__'] = 'unaryFunction';

	$m['unaryFunction']['__bind_type__'] = 0;
	$m['unaryFunction']['__args__'] = [null,null,['name'],['operator'],['off']];
	$m['modulo_'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var nb;
		nb = $m['createNumberBlock'](off, 'modulo_', 'darkblue');
		nb['addArgumentHolder']($m['createNumberBlockHolder'](off, nb));
		nb['addCodeElement']('resto da divis\xc3\xa3o  por');
		nb['addArgumentHolder']($m['createNumberBlockHolder'](off, nb));
		nb['addCodeElement']();
		return nb;
	};
	$m['modulo_']['__name__'] = 'modulo_';

	$m['modulo_']['__bind_type__'] = 0;
	$m['modulo_']['__args__'] = [null,null,['off', false]];
	$m['map_'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var nb;
		nb = $m['createNumberBlock'](off, 'map_', 'darkblue');
		nb['addCodeElement']('mapeie [');
		nb['addArgumentHolder']($m['createNumberBlockHolder'](off, nb));
		nb['addCodeElement'](',');
		nb['addArgumentHolder']($m['createNumberBlockHolder'](off, nb));
		nb['addCodeElement']('] para [');
		nb['addArgumentHolder']($m['createNumberBlockHolder'](off, nb));
		nb['addCodeElement'](',');
		nb['addArgumentHolder']($m['createNumberBlockHolder'](off, nb));
		nb['addCodeElement'](']');
		return nb;
	};
	$m['map_']['__name__'] = 'map_';

	$m['map_']['__bind_type__'] = 0;
	$m['map_']['__args__'] = [null,null,['off', false]];
	$m['map2_'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var nb;
		nb = $m['createNumberBlock'](off, 'map2_', 'darkblue');
		nb['addCodeElement']('mapeie [0, 1024] para [0, 255]');
		nb['addCodeElement']();
		nb['addArgumentHolder']($m['createNumberBlockHolder'](off, nb));
		nb['addCodeElement']();
		return nb;
	};
	$m['map2_']['__name__'] = 'map2_';

	$m['map2_']['__bind_type__'] = 0;
	$m['map2_']['__args__'] = [null,null,['off', false]];
	$m['constrains_'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var nb;
		nb = $m['createNumberBlock'](off, 'constrains_', 'darkblue');
		nb['addCodeElement']('restringe');
		nb['addArgumentHolder']($m['createNumberBlockHolder'](off, nb));
		nb['addCodeElement']('entre');
		nb['addArgumentHolder']($m['createNumberBlockHolder'](off, nb));
		nb['addCodeElement']('e');
		nb['addArgumentHolder']($m['createNumberBlockHolder'](off, nb));
		nb['addCodeElement']();
		return nb;
	};
	$m['constrains_']['__name__'] = 'constrains_';

	$m['constrains_']['__bind_type__'] = 0;
	$m['constrains_']['__args__'] = [null,null,['off', false]];
	$m['round_'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];

		return $m['unaryFunction']('round_', 'arredonde', off);
	};
	$m['round_']['__name__'] = 'round_';

	$m['round_']['__bind_type__'] = 0;
	$m['round_']['__args__'] = [null,null,['off', false]];
	$m['abs_'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];

		return $m['unaryFunction']('abs_', 'abs', off);
	};
	$m['abs_']['__name__'] = 'abs_';

	$m['abs_']['__bind_type__'] = 0;
	$m['abs_']['__args__'] = [null,null,['off', false]];
	$m['sqrt_'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];

		return $m['unaryFunction']('sqrt_', '&radic;', off);
	};
	$m['sqrt_']['__name__'] = 'sqrt_';

	$m['sqrt_']['__bind_type__'] = 0;
	$m['sqrt_']['__args__'] = [null,null,['off', false]];
	$m['max_'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];

		return $m['binaryFunction']('max_', 'max', off);
	};
	$m['max_']['__name__'] = 'max_';

	$m['max_']['__bind_type__'] = 0;
	$m['max_']['__args__'] = [null,null,['off', false]];
	$m['min_'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];

		return $m['binaryFunction']('min_', 'min', off);
	};
	$m['min_']['__name__'] = 'min_';

	$m['min_']['__bind_type__'] = 0;
	$m['min_']['__args__'] = [null,null,['off', false]];
	$m['intToStr'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createStringBlock'](off, 'intToStr', 'darkblue');
		sb['addCodeElement']('converte');
		sb['addArgumentHolder']($m['createNumberBlockHolder'](off, sb));
		return sb;
	};
	$m['intToStr']['__name__'] = 'intToStr';

	$m['intToStr']['__bind_type__'] = 0;
	$m['intToStr']['__args__'] = [null,null,['off', false]];
	$m['boolToStr'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createStringBlock'](off, 'boolToStr', 'darkblue');
		sb['addCodeElement']('converte');
		sb['addArgumentHolder']($m['createBooleanBlockHolder'](off, sb));
		return sb;
	};
	$m['boolToStr']['__name__'] = 'boolToStr';

	$m['boolToStr']['__bind_type__'] = 0;
	$m['boolToStr']['__args__'] = [null,null,['off', false]];
	$m['StrToInt'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var nb;
		nb = $m['createNumberBlock'](off, 'StrToInt', 'darkblue');
		nb['addCodeElement']('converte');
		nb['addArgumentHolder']($m['createStringBlockHolder'](off, nb));
		return nb;
	};
	$m['StrToInt']['__name__'] = 'StrToInt';

	$m['StrToInt']['__bind_type__'] = 0;
	$m['StrToInt']['__args__'] = [null,null,['off', false]];
	$m['glue'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createStringBlock'](off, 'glue', 'darkblue');
		sb['addCodeElement']('junte');
		sb['addArgumentHolder']($m['createStringBlockHolder'](off, sb));
		sb['addCodeElement']('com');
		sb['addArgumentHolder']($m['createStringBlockHolder'](off, sb));
		return sb;
	};
	$m['glue']['__name__'] = 'glue';

	$m['glue']['__bind_type__'] = 0;
	$m['glue']['__args__'] = [null,null,['off', false]];
	$m['alphanumericOperation'] = function(name, operator, off) {
		var bb;
		bb = $m['createBooleanBlock'](off, name, 'darkblue');
		bb['addArgumentHolder']($m['createStringBlockHolder'](off, bb));
		bb['addCodeElement'](operator, $p['dict']([['=', 'str_equals'], ['&ne;', 'str_not_equals']]));
		bb['addArgumentHolder']($m['createStringBlockHolder'](off, bb));
		return bb;
	};
	$m['alphanumericOperation']['__name__'] = 'alphanumericOperation';

	$m['alphanumericOperation']['__bind_type__'] = 0;
	$m['alphanumericOperation']['__args__'] = [null,null,['name'],['operator'],['off']];
	$m['str_equals'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];

		return $m['alphanumericOperation']('str_equals', '=', off);
	};
	$m['str_equals']['__name__'] = 'str_equals';

	$m['str_equals']['__bind_type__'] = 0;
	$m['str_equals']['__args__'] = [null,null,['off', false]];
	$m['str_not_equals'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];

		return $m['alphanumericOperation']('str_not_equals', '&ne;', off);
	};
	$m['str_not_equals']['__name__'] = 'str_not_equals';

	$m['str_not_equals']['__bind_type__'] = 0;
	$m['str_not_equals']['__args__'] = [null,null,['off', false]];
	$m['println'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createStatementBlock'](off, 'println', 'darkblue');
		sb['addCodeElement']('escreve no monitor serial');
		sb['addCodeElement']();
		sb['addArgumentHolder']($m['createStringBlockHolder'](off, sb));
		sb['addCodeElement']();
		return sb;
	};
	$m['println']['__name__'] = 'println';

	$m['println']['__bind_type__'] = 0;
	$m['println']['__args__'] = [null,null,['off', false]];
	$m['available'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var bb;
		bb = $m['createBooleanBlock'](off, 'available', 'darkblue');
		bb['addCodeElement']('o monior serial recebeu msg');
		return bb;
	};
	$m['available']['__name__'] = 'available';

	$m['available']['__bind_type__'] = 0;
	$m['available']['__args__'] = [null,null,['off', false]];
	$m['getMsg'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createStringBlock'](off, 'getMsg', 'darkblue');
		sb['addCodeElement']('leia a msg recebida monitor serial');
		return sb;
	};
	$m['getMsg']['__name__'] = 'getMsg';

	$m['getMsg']['__bind_type__'] = 0;
	$m['getMsg']['__args__'] = [null,null,['off', false]];
	$m['waitForAnyMsg'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createStringBlock'](off, 'waitForAnyMsg', 'darkblue');
		sb['addCodeElement']('espere alguma msg monitor serial');
		return sb;
	};
	$m['waitForAnyMsg']['__name__'] = 'waitForAnyMsg';

	$m['waitForAnyMsg']['__bind_type__'] = 0;
	$m['waitForAnyMsg']['__args__'] = [null,null,['off', false]];
	$m['waitForTheMsg'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createStatementBlock'](off, 'waitForTheMsg', 'darkblue');
		sb['addCodeElement']('espere pela msg');
		sb['addArgumentHolder']($m['createStringBlockHolder'](off, sb));
		sb['addCodeElement']('monitor serial');
		return sb;
	};
	$m['waitForTheMsg']['__name__'] = 'waitForTheMsg';

	$m['waitForTheMsg']['__bind_type__'] = 0;
	$m['waitForTheMsg']['__args__'] = [null,null,['off', false]];
	$m['millis'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createNumberBlock'](off, 'millis', 'darkblue');
		sb['addCodeElement']('tempo decorrido <i>(ms)</i>');
		return sb;
	};
	$m['millis']['__name__'] = 'millis';

	$m['millis']['__bind_type__'] = 0;
	$m['millis']['__args__'] = [null,null,['off', false]];
	$m['random'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createNumberBlock'](off, 'random', 'darkblue');
		sb['addCodeElement']('aleatorio');
		sb['addCodeElement']('<i>max</i>');
		sb['addArgumentHolder']($m['createNumberBlockHolder'](off, sb));
		return sb;
	};
	$m['random']['__name__'] = 'random';

	$m['random']['__bind_type__'] = 0;
	$m['random']['__args__'] = [null,null,['off', false]];
	$m['random_min_max'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createNumberBlock'](off, 'random_min_max', 'darkblue');
		sb['addCodeElement']('aleatorio');
		sb['addCodeElement']('<i>min</i>');
		sb['addArgumentHolder']($m['createNumberBlockHolder'](off, sb));
		sb['addCodeElement']();
		sb['addCodeElement']('<i>max</i>');
		sb['addArgumentHolder']($m['createNumberBlockHolder'](off, sb));
		return sb;
	};
	$m['random_min_max']['__name__'] = 'random_min_max';

	$m['random_min_max']['__bind_type__'] = 0;
	$m['random_min_max']['__args__'] = [null,null,['off', false]];
	$m['pinMode'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createStatementBlock'](off, 'pinMode', 'darkblue');
		sb['addCodeElement']('pinMode');
		sb['addArgumentHolder']($m['createDropdownNumberBlockHolder'](off, (typeof ALL_PINS == "undefined"?$m['ALL_PINS']:ALL_PINS), sb));
		sb['addCodeElement']();
		sb['addArgumentHolder']($m['createDropdownNumberBlockHolder'](off, (typeof PIN_MODES == "undefined"?$m['PIN_MODES']:PIN_MODES), sb));
		return sb;
	};
	$m['pinMode']['__name__'] = 'pinMode';

	$m['pinMode']['__bind_type__'] = 0;
	$m['pinMode']['__args__'] = [null,null,['off', false]];
	$m['commandType'] = function(varName, color, off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][4][1];
		var sb;
		sb = $m['createStatementBlock'](off, 'commandType', color);
		sb['varName'] = varName;
		sb['addCodeElement'](varName);
		sb['custom'] = true;
		return sb;
	};
	$m['commandType']['__name__'] = 'commandType';

	$m['commandType']['__bind_type__'] = 0;
	$m['commandType']['__args__'] = [null,null,['varName'],['color'],['off', false]];
	$m['numericType'] = function(varName, color, off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][4][1];
		var nb;
		nb = $m['createNumberBlock'](off, 'numericType', color);
		nb['varName'] = varName;
		nb['addCodeElement']();
		nb['addCodeElement'](varName);
		nb['addCodeElement']();
		nb['custom'] = true;
		return nb;
	};
	$m['numericType']['__name__'] = 'numericType';

	$m['numericType']['__bind_type__'] = 0;
	$m['numericType']['__args__'] = [null,null,['varName'],['color'],['off', false]];
	$m['logicType'] = function(varName, color, off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][4][1];
		var bb;
		bb = $m['createBooleanBlock'](off, 'logicType', color);
		bb['varName'] = varName;
		bb['addCodeElement']();
		bb['addCodeElement'](varName);
		bb['addCodeElement']();
		bb['custom'] = true;
		return bb;
	};
	$m['logicType']['__name__'] = 'logicType';

	$m['logicType']['__bind_type__'] = 0;
	$m['logicType']['__args__'] = [null,null,['varName'],['color'],['off', false]];
	$m['alphaNumericType'] = function(varName, color, off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][4][1];
		var sb;
		sb = $m['createStringBlock'](off, 'alphaNumericType', color);
		sb['varName'] = varName;
		sb['addCodeElement']();
		sb['addCodeElement'](varName);
		sb['addCodeElement']();
		sb['custom'] = true;
		return sb;
	};
	$m['alphaNumericType']['__name__'] = 'alphaNumericType';

	$m['alphaNumericType']['__bind_type__'] = 0;
	$m['alphaNumericType']['__args__'] = [null,null,['varName'],['color'],['off', false]];
	$m['hatBlockType'] = function(varName, color, off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][4][1];
		var hb;
		hb = $m['createHatBlock'](off, 'hatBlockType', color);
		hb['varName'] = varName;
		hb['addCodeElement']();
		hb['addCodeElement'](varName);
		hb['addCodeElement']();
		hb['custom'] = true;
		return hb;
	};
	$m['hatBlockType']['__name__'] = 'hatBlockType';

	$m['hatBlockType']['__bind_type__'] = 0;
	$m['hatBlockType']['__args__'] = [null,null,['varName'],['color'],['off', false]];
	$m['getNumericVar'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var nb;
		nb = $m['createNumberBlock'](off, 'getNumericVar', 'red');
		nb['addCodeElement']();
		nb['addVariableElement']((typeof TITLE_NUMERIC_VAR == "undefined"?$m['TITLE_NUMERIC_VAR']:TITLE_NUMERIC_VAR), $m['numericVars']);
		nb['addCodeElement']();
		return nb;
	};
	$m['getNumericVar']['__name__'] = 'getNumericVar';

	$m['getNumericVar']['__bind_type__'] = 0;
	$m['getNumericVar']['__args__'] = [null,null,['off', false]];
	$m['getLogicVar'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var bb;
		bb = $m['createBooleanBlock'](off, 'getLogicVar', 'red');
		bb['addCodeElement']();
		bb['addVariableElement']((typeof TITLE_LOGIC_VAR == "undefined"?$m['TITLE_LOGIC_VAR']:TITLE_LOGIC_VAR), $m['logicVars']);
		bb['addCodeElement']();
		return bb;
	};
	$m['getLogicVar']['__name__'] = 'getLogicVar';

	$m['getLogicVar']['__bind_type__'] = 0;
	$m['getLogicVar']['__args__'] = [null,null,['off', false]];
	$m['getAlphaNumericVar'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createStringBlock'](off, 'getAlphaNumericVar', 'red');
		sb['addCodeElement']();
		sb['addVariableElement']((typeof TITLE_ALPHANUMERIC_VAR == "undefined"?$m['TITLE_ALPHANUMERIC_VAR']:TITLE_ALPHANUMERIC_VAR), $m['alphaNumericVars']);
		sb['addCodeElement']();
		return sb;
	};
	$m['getAlphaNumericVar']['__name__'] = 'getAlphaNumericVar';

	$m['getAlphaNumericVar']['__bind_type__'] = 0;
	$m['getAlphaNumericVar']['__args__'] = [null,null,['off', false]];
	$m['setNumericVar'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createStatementBlock'](off, 'setNumericVar', 'red');
		sb['addCodeElement']('mude');
		sb['addVariableElement']((typeof TITLE_NUMERIC_VAR == "undefined"?$m['TITLE_NUMERIC_VAR']:TITLE_NUMERIC_VAR), $m['numericVars']);
		sb['addCodeElement']('para');
		sb['addCodeElement']();
		sb['addArgumentHolder']($m['createNumberBlockHolder'](off, sb));
		return sb;
	};
	$m['setNumericVar']['__name__'] = 'setNumericVar';

	$m['setNumericVar']['__bind_type__'] = 0;
	$m['setNumericVar']['__args__'] = [null,null,['off', false]];
	$m['setLogicVar'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createStatementBlock'](off, 'setLogicVar', 'red');
		sb['addCodeElement']('mude');
		sb['addVariableElement']((typeof TITLE_LOGIC_VAR == "undefined"?$m['TITLE_LOGIC_VAR']:TITLE_LOGIC_VAR), $m['logicVars']);
		sb['addCodeElement']('para');
		sb['addCodeElement']();
		sb['addArgumentHolder']($m['createDropdownBooleanBlockHolder'](off, (typeof LOGIC_VALUES == "undefined"?$m['LOGIC_VALUES']:LOGIC_VALUES), sb));
		return sb;
	};
	$m['setLogicVar']['__name__'] = 'setLogicVar';

	$m['setLogicVar']['__bind_type__'] = 0;
	$m['setLogicVar']['__args__'] = [null,null,['off', false]];
	$m['setAlphaNumericVar'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createStatementBlock'](off, 'setAlphaNumericVar', 'red');
		sb['addCodeElement']('mude');
		sb['addVariableElement']((typeof TITLE_ALPHANUMERIC_VAR == "undefined"?$m['TITLE_ALPHANUMERIC_VAR']:TITLE_ALPHANUMERIC_VAR), $m['alphaNumericVars']);
		sb['addCodeElement']('para');
		sb['addCodeElement']();
		sb['addArgumentHolder']($m['createStringBlockHolder'](off, sb));
		sb['addCodeElement']();
		return sb;
	};
	$m['setAlphaNumericVar']['__name__'] = 'setAlphaNumericVar';

	$m['setAlphaNumericVar']['__bind_type__'] = 0;
	$m['setAlphaNumericVar']['__args__'] = [null,null,['off', false]];
	$m['incNumericVar'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createStatementBlock'](off, 'incNumericVar', 'red');
		sb['addCodeElement']('incrementa');
		sb['addVariableElement']((typeof TITLE_NUMERIC_VAR == "undefined"?$m['TITLE_NUMERIC_VAR']:TITLE_NUMERIC_VAR), $m['numericVars']);
		sb['addCodeElement']('de');
		sb['addCodeElement']();
		sb['addArgumentHolder']($m['createNumberBlockHolder'](off, sb));
		return sb;
	};
	$m['incNumericVar']['__name__'] = 'incNumericVar';

	$m['incNumericVar']['__bind_type__'] = 0;
	$m['incNumericVar']['__args__'] = [null,null,['off', false]];
	$m['decNumericVar'] = function(off) {
		if (typeof off == 'undefined') off=arguments['callee']['__args__'][2][1];
		var sb;
		sb = $m['createStatementBlock'](off, 'decNumericVar', 'red');
		sb['addCodeElement']('decrementa');
		sb['addVariableElement']((typeof TITLE_NUMERIC_VAR == "undefined"?$m['TITLE_NUMERIC_VAR']:TITLE_NUMERIC_VAR), $m['numericVars']);
		sb['addCodeElement']('de');
		sb['addCodeElement']();
		sb['addArgumentHolder']($m['createNumberBlockHolder'](off, sb));
		return sb;
	};
	$m['decNumericVar']['__name__'] = 'decNumericVar';

	$m['decNumericVar']['__bind_type__'] = 0;
	$m['decNumericVar']['__args__'] = [null,null,['off', false]];
	return this;
}; /* end edu.uca.renderable.block.ArduinoBlocks */


/* end module: edu.uca.renderable.block.ArduinoBlocks */


/*
PYJS_DEPS: ['edu.uca.renderable.CreatorBlockFactory.createStatementBlock', 'edu', 'edu.uca', 'edu.uca.renderable', 'edu.uca.renderable.CreatorBlockFactory', 'edu.uca.renderable.CreatorBlockFactory.createNumberBlockHolder', 'edu.uca.renderable.CreatorBlockFactory.createCompoundStatementBlock', 'edu.uca.renderable.CreatorBlockFactory.createBooleanBlockHolder', 'edu.uca.renderable.CreatorBlockFactory.createMainBlock', 'edu.uca.renderable.CreatorBlockFactory.createBooleanBlock', 'edu.uca.renderable.CreatorBlockFactory.createDropdownNumberBlockHolder', 'edu.uca.renderable.CreatorBlockFactory.createNumberBlock', 'edu.uca.renderable.CreatorBlockFactory.createStringBlockHolder', 'edu.uca.renderable.CreatorBlockFactory.createStringBlock', 'edu.uca.renderable.CreatorBlockFactory.createDropdownBooleanBlockHolder', 'edu.uca.renderable.CreatorBlockFactory.createHatBlock', 'edu.uca.renderable.CreatorBlockFactory.createDropdownStringBlockHolder', 'edu.uca.util.Constants', 'edu.uca.util', 'edu.uca.Workspace.numericVars', 'edu.uca.Workspace', 'edu.uca.Workspace.alphaNumericVars', 'edu.uca.Workspace.logicVars', 'edu.uca.Workspace.countComponents', 'edu.uca.util.i18n._', 'edu.uca.util.i18n', 'edu.uca.util.i18n.gettext_noop']
*/
