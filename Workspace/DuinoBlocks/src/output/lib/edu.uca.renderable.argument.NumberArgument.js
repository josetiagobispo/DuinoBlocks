/* start module: edu.uca.renderable.argument.NumberArgument */
$pyjs['loaded_modules']['edu.uca.renderable.argument.NumberArgument'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.renderable.argument.NumberArgument']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.renderable.argument.NumberArgument'];
	if(typeof $pyjs['loaded_modules']['edu.uca.renderable.argument'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.renderable.argument']['__was_initialized__']) $p['___import___']('edu.uca.renderable.argument', null);
	var $m = $pyjs['loaded_modules']['edu.uca.renderable.argument.NumberArgument'];
	$m['__repr__'] = function() { return '<module: edu.uca.renderable.argument.NumberArgument>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.renderable.argument.NumberArgument';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.renderable.argument']['NumberArgument'] = $pyjs['loaded_modules']['edu.uca.renderable.argument.NumberArgument'];


	$m['Argument'] = $p['___import___']('edu.uca.renderable.argument.Argument.Argument', 'edu.uca.renderable.argument', null, false);
	$m['RegexTextBox'] = $p['___import___']('edu.uca.util.RegexTextBox.RegexTextBox', 'edu.uca.renderable.argument', null, false);
	$m['display_ok'] = $p['___import___']('edu.uca.util.RegexTextBox.display_ok', 'edu.uca.renderable.argument', null, false);
	$m['display_error'] = $p['___import___']('edu.uca.util.RegexTextBox.display_error', 'edu.uca.renderable.argument', null, false);
	$m['Block'] = $p['___import___']('edu.uca.renderable.block.Block.Block', 'edu.uca.renderable.argument', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'edu.uca.renderable.argument', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.renderable.argument', null, false);
	$m['math'] = $p['___import___']('math', 'edu.uca.renderable.argument');
	$m['KeyboardHandler'] = $p['___import___']('pyjamas.ui.KeyboardListener.KeyboardHandler', 'edu.uca.renderable.argument', null, false);
	$m['KeyboardListener'] = $p['___import___']('pyjamas.ui.KeyboardListener', 'edu.uca.renderable.argument', null, false);
	$m['drawNumberArgument'] = function(s, numOrStr) {
		if (typeof numOrStr == 'undefined') numOrStr=arguments['callee']['__args__'][3][1];
		var $add2,b,$add1,t;
		s['addStyleName']($p['__op_add']($add1='input ',$add2=numOrStr));
		s['tl'] = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'tl'}]);
		t = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'t'}]);
		s['tr'] = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'tr'}]);
		b = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'b'}]);
		s['br'] = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'br'}]);
		s['bl'] = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'bl'}]);
		s['append']($p['getattr'](s, 'tl'));
		s['append'](t);
		s['append']($p['getattr'](s, 'tr'));
		s['append'](b);
		s['append']($p['getattr'](s, 'br'));
		s['append']($p['getattr'](s, 'bl'));
		return null;
	};
	$m['drawNumberArgument']['__name__'] = 'drawNumberArgument';

	$m['drawNumberArgument']['__bind_type__'] = 0;
	$m['drawNumberArgument']['__args__'] = [null,null,['s'],['numOrStr', 'num']];
	$m['resize'] = function(self) {
		var $sub8,$sub3,$sub2,$sub1,$sub7,$sub6,$sub5,$sub4,$add14,$add15,$add16,$add10,$add11,$add12,$add13,$div2,$div1,c,$add3,$add6,$add7,$add4,$add5,$add8,$add9;
		c = $m['math']['ceil']($p['__op_add']($add3=(typeof ($div1=$p['getattr'](self, 'height'))==typeof ($div2=2) && typeof $div1=='number' && $div2 !== 0?
			$div1/$div2:
			$p['op_div']($div1,$div2)),$add4=1));
		self['tr']['setStyleAttribute']($p['dict']([['right', $p['__op_sub']($sub1=(typeof ($usub1=c)=='number'?
			-$usub1:
			$p['op_usub']($usub1)),$sub2=2)], ['height', c], ['width', $p['__op_add']($add5=c,$add6=3)]]));
		self['br']['setStyleAttribute']($p['dict']([['right', $p['__op_sub']($sub3=(typeof ($usub2=c)=='number'?
			-$usub2:
			$p['op_usub']($usub2)),$sub4=2)], ['height', c], ['width', $p['__op_add']($add7=c,$add8=3)]]));
		self['tl']['setStyleAttribute']($p['dict']([['left', $p['__op_sub']($sub5=(typeof ($usub3=c)=='number'?
			-$usub3:
			$p['op_usub']($usub3)),$sub6=2)], ['height', c], ['width', $p['__op_add']($add9=c,$add10=3)]]));
		self['bl']['setStyleAttribute']($p['dict']([['left', $p['__op_sub']($sub7=(typeof ($usub4=c)=='number'?
			-$usub4:
			$p['op_usub']($usub4)),$sub8=2)], ['height', c], ['width', $p['__op_add']($add11=c,$add12=3)]]));
		self['setStyleAttribute']($p['dict']([['marginLeft', $p['__op_add']($add13=c,$add14=2)], ['marginRight', $p['__op_add']($add15=c,$add16=2)]]));
		return null;
	};
	$m['resize']['__name__'] = 'resize';

	$m['resize']['__bind_type__'] = 0;
	$m['resize']['__args__'] = [null,null,['self']];
	$m['addInput'] = function(self, maxLength) {

		self['input'] = $m['RegexTextBox']();
		if ($p['bool']($p['getattr'](self, 'validation'))) {
			self['input']['setRegex']('^[+-]?\\d*[0-9](\\.\\d*[0-9])?$');
			self['input']['appendValidListener']($m['display_ok']);
			self['input']['appendInvalidListener']($m['display_error']);
			self['input']['validate'](null);
		}
		self['input']['setMaxLength'](maxLength);
		self['input']['addInputListener'](self);
		self['input']['setWidth'](20);
		self['append']($p['getattr'](self, 'input'));
		self['input']['addChangeListener'](self);
		return null;
	};
	$m['addInput']['__name__'] = 'addInput';

	$m['addInput']['__bind_type__'] = 0;
	$m['addInput']['__args__'] = [null,null,['self'],['maxLength']];
	$m['getArgumentValue'] = function(self) {

		if ($p['bool'](self['input']['isValid']())) {
			return self['input']['getText']();
		}
		return null;
	};
	$m['getArgumentValue']['__name__'] = 'getArgumentValue';

	$m['getArgumentValue']['__bind_type__'] = 0;
	$m['getArgumentValue']['__args__'] = [null,null,['self']];
	$m['setArgumentValue'] = function(self, value) {

		self['input']['setText'](value);
		return null;
	};
	$m['setArgumentValue']['__name__'] = 'setArgumentValue';

	$m['setArgumentValue']['__bind_type__'] = 0;
	$m['setArgumentValue']['__args__'] = [null,null,['self'],['value']];
	$m['onInput'] = function(self, sender, original) {
		var $sub10,$mul2,$sub9,$add17,$add18,$mul1;
		if ($p['bool'](original)) {
			self['input']['setText']('');
		}
		if ($p['bool']($p['op_eq']($p['len'](self['input']['getText']()), 0))) {
			self['input']['setWidth']($p['getattr'](self, 'minWidthInput'));
		}
		else {
			self['input']['setWidth']($p['__op_add']($add17=$p['getattr'](self, 'minWidthInput'),$add18=(typeof ($mul1=$p['__op_sub']($sub9=$p['len'](self['input']['getText']()),$sub10=1))==typeof ($mul2=7) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2))));
		}
		return null;
	};
	$m['onInput']['__name__'] = 'onInput';

	$m['onInput']['__bind_type__'] = 0;
	$m['onInput']['__args__'] = [null,null,['self'],['sender'],['original']];
	$m['onChange'] = function(self, sender) {
		var stateChange;
		stateChange = $p['___import___']('edu.uca.util.Serializable.stateChange', 'edu.uca.renderable.argument', null, false);
		stateChange();
		return null;
	};
	$m['onChange']['__name__'] = 'onChange';

	$m['onChange']['__bind_type__'] = 0;
	$m['onChange']['__args__'] = [null,null,['self'],['sender']];
	$m['NumberArgument'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.renderable.argument.NumberArgument';
		$method = $pyjs__bind_method2('__init__', function(validation, block) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				validation = arguments[1];
				block = arguments[2];
			}
			if (typeof validation == 'undefined') validation=arguments['callee']['__args__'][3][1];
			if (typeof block == 'undefined') block=arguments['callee']['__args__'][4][1];

			$m['Argument']['__init__'](self, $p['list']([$p['getattr']($m['Block'], 'NUMBER_BLOCK')]));
			$m['KeyboardHandler']['__init__'](self);
			self['addKeyboardListener'](self);
			self['validation'] = validation;
			self['block'] = block;
			self['height'] = 16;
			self['minWidthInput'] = 20;
			$m['drawNumberArgument'](self);
			$m['addInput'](self, 6);
			return null;
		}
	, 1, [null,null,['self'],['validation', true],['block', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onKeyDown', function(sender, keycode, modifiers) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}
			var $or1,$or2,$and1,$and3,$and4,$and5,value,$add19,$and2,$and6,$add20,$sub11,$sub12;
			$m['KeyboardHandler']['onKeyDown'](self, sender, keycode, modifiers);
			value = self['getArgumentValue']();
			if ($p['bool'](($p['bool']($or1=(value === null))?$or1:!$p['bool']($p['getattr'](self, 'validation'))))) {
				return null;
			}
			value = $p['float_int'](value);
			if ($p['bool'](($p['bool']($and1=($p['cmp'](value, 9999) == -1))?($p['bool']($and2=$p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_UP')))?$p['op_eq'](modifiers, 0):$and2):$and1))) {
				value = $p['__op_add']($add19=value,$add20=1);
				self['input']['setText']($p['str'](value));
				self['onInput'](sender);
			}
			else if ($p['bool'](($p['bool']($and4=($p['cmp'](value, (typeof ($usub5=9999)=='number'?
				-$usub5:
				$p['op_usub']($usub5))) == 1))?($p['bool']($and5=$p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_DOWN')))?$p['op_eq'](modifiers, 0):$and5):$and4))) {
				value = $p['__op_sub']($sub11=value,$sub12=1);
				self['input']['setText']($p['str'](value));
				self['onInput'](sender);
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyDown'] = $method;
		$method = $pyjs__bind_method2('onInput', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			$m['onInput'](self, sender, $p['getattr']($p['getattr'](self, 'block'), 'original'));
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onInput'] = $method;
		$method = $pyjs__bind_method2('onChange', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			$m['onChange'](self, sender);
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onChange'] = $method;
		$method = $pyjs__bind_method2('resize', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['resize'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['resize'] = $method;
		$method = $pyjs__bind_method2('getArgumentValue', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['getArgumentValue'](self);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getArgumentValue'] = $method;
		$method = $pyjs__bind_method2('setArgumentValue', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			$m['setArgumentValue'](self, value);
			self['input']['validate'](null);
			self['onInput']();
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['setArgumentValue'] = $method;
		var $bases = new Array($m['Argument'],$m['KeyboardHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('NumberArgument', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.renderable.argument.NumberArgument */


/* end module: edu.uca.renderable.argument.NumberArgument */


/*
PYJS_DEPS: ['edu.uca.renderable.argument.Argument.Argument', 'edu', 'edu.uca', 'edu.uca.renderable', 'edu.uca.renderable.argument', 'edu.uca.renderable.argument.Argument', 'edu.uca.util.RegexTextBox.RegexTextBox', 'edu.uca.util', 'edu.uca.util.RegexTextBox', 'edu.uca.util.RegexTextBox.display_ok', 'edu.uca.util.RegexTextBox.display_error', 'edu.uca.renderable.block.Block.Block', 'edu.uca.renderable.block', 'edu.uca.renderable.block.Block', 'pyjamas.ui.Widget.Widget', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Widget', 'pyjamas.DOM', 'math', 'pyjamas.ui.KeyboardListener.KeyboardHandler', 'pyjamas.ui.KeyboardListener', 'edu.uca.util.Serializable.stateChange', 'edu.uca.util.Serializable']
*/
