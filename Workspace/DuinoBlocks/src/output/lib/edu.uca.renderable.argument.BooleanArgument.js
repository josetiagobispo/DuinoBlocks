/* start module: edu.uca.renderable.argument.BooleanArgument */
$pyjs['loaded_modules']['edu.uca.renderable.argument.BooleanArgument'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.renderable.argument.BooleanArgument']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.renderable.argument.BooleanArgument'];
	if(typeof $pyjs['loaded_modules']['edu.uca.renderable.argument'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.renderable.argument']['__was_initialized__']) $p['___import___']('edu.uca.renderable.argument', null);
	var $m = $pyjs['loaded_modules']['edu.uca.renderable.argument.BooleanArgument'];
	$m['__repr__'] = function() { return '<module: edu.uca.renderable.argument.BooleanArgument>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.renderable.argument.BooleanArgument';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.renderable.argument']['BooleanArgument'] = $pyjs['loaded_modules']['edu.uca.renderable.argument.BooleanArgument'];


	$m['Argument'] = $p['___import___']('edu.uca.renderable.argument.Argument.Argument', 'edu.uca.renderable.argument', null, false);
	$m['Block'] = $p['___import___']('edu.uca.renderable.block.Block.Block', 'edu.uca.renderable.argument', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'edu.uca.renderable.argument', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.renderable.argument', null, false);
	$m['math'] = $p['___import___']('math', 'edu.uca.renderable.argument');
	$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', 'edu.uca.renderable.argument', null, false);
	$m['drawBooleanArgument'] = function(s) {

		s['addStyleName']('input bool');
		s['tl'] = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'tl'}]);
		s['t'] = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'t'}]);
		s['tr'] = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'tr'}]);
		s['b'] = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'b'}]);
		s['br'] = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'br'}]);
		s['bl'] = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'bl'}]);
		s['append']($p['getattr'](s, 'tl'));
		s['append']($p['getattr'](s, 't'));
		s['append']($p['getattr'](s, 'tr'));
		s['append']($p['getattr'](s, 'b'));
		s['append']($p['getattr'](s, 'br'));
		s['append']($p['getattr'](s, 'bl'));
		return null;
	};
	$m['drawBooleanArgument']['__name__'] = 'drawBooleanArgument';

	$m['drawBooleanArgument']['__bind_type__'] = 0;
	$m['drawBooleanArgument']['__args__'] = [null,null,['s']];
	$m['BooleanArgument'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.renderable.argument.BooleanArgument';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['Argument']['__init__'](self, $p['list']([$p['getattr']($m['Block'], 'BOOLEAN_BLOCK')]));
			self['height'] = 20;
			self['width'] = 15;
			$m['drawBooleanArgument'](self);
			self['addInput']();
			self['resize']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('addInput', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['input'] = $m['TextBox']();
			self['input']['setWidth'](20);
			self['input']['addInputListener'](self);
			self['append']($p['getattr'](self, 'input'));
			$m['DOM']['setBooleanAttribute'](self['input']['getElement'](), 'readOnly', true);
			self['input']['addChangeListener'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['addInput'] = $method;
		$method = $pyjs__bind_method2('onChange', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var stateChange;
			stateChange = $p['___import___']('edu.uca.util.Serializable.stateChange', 'edu.uca.renderable.argument', null, false);
			stateChange();
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onChange'] = $method;
		$method = $pyjs__bind_method2('onInput', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $add2,$add1,$sub2,$sub1,$mul2,$mul1;
			if ($p['bool']($p['op_eq']($p['len'](self['input']['getText']()), 0))) {
				self['input']['setWidth'](20);
			}
			else {
				self['input']['setWidth']($p['__op_add']($add1=20,$add2=(typeof ($mul1=$p['__op_sub']($sub1=$p['len'](self['input']['getText']()),$sub2=1))==typeof ($mul2=7) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2))));
			}
			self['width'] = self['input']['getWidth']();
			self['resize']();
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onInput'] = $method;
		$method = $pyjs__bind_method2('resize', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $sub9,$sub8,$sub3,$sub7,$sub6,$sub5,$sub4,$sub10,$add10,$add11,$add12,$div2,$div1,c,$add3,$add6,$add7,$add4,$add5,$add8,$add9;
			c = $m['math']['ceil']($p['__op_add']($add3=(typeof ($div1=$p['getattr'](self, 'height'))==typeof ($div2=2) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2)),$add4=1));
			self['tr']['setStyleAttribute']($p['dict']([['right', $p['__op_sub']($sub3=(typeof ($usub1=c)=='number'?
				-$usub1:
				$p['op_usub']($usub1)),$sub4=2)], ['width', $p['__op_add']($add5=c,$add6=3)], ['height', c]]));
			self['br']['setStyleAttribute']($p['dict']([['right', $p['__op_sub']($sub5=(typeof ($usub2=c)=='number'?
				-$usub2:
				$p['op_usub']($usub2)),$sub6=2)], ['width', $p['__op_add']($add7=c,$add8=3)], ['height', c]]));
			self['tl']['setStyleAttribute']($p['dict']([['left', $p['__op_sub']($sub7=(typeof ($usub3=c)=='number'?
				-$usub3:
				$p['op_usub']($usub3)),$sub8=2)], ['width', $p['__op_add']($add9=c,$add10=3)], ['height', c]]));
			self['bl']['setStyleAttribute']($p['dict']([['left', $p['__op_sub']($sub9=(typeof ($usub4=c)=='number'?
				-$usub4:
				$p['op_usub']($usub4)),$sub10=2)], ['width', $p['__op_add']($add11=c,$add12=3)], ['height', c]]));
			self['setStyleAttribute']($p['dict']([['width', $p['getattr'](self, 'width')]]));
			self['t']['setWidth']($p['getattr'](self, 'width'));
			self['b']['setWidth']($p['getattr'](self, 'width'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['resize'] = $method;
		var $bases = new Array($m['Argument']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('BooleanArgument', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.renderable.argument.BooleanArgument */


/* end module: edu.uca.renderable.argument.BooleanArgument */


/*
PYJS_DEPS: ['edu.uca.renderable.argument.Argument.Argument', 'edu', 'edu.uca', 'edu.uca.renderable', 'edu.uca.renderable.argument', 'edu.uca.renderable.argument.Argument', 'edu.uca.renderable.block.Block.Block', 'edu.uca.renderable.block', 'edu.uca.renderable.block.Block', 'pyjamas.ui.Widget.Widget', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Widget', 'pyjamas.DOM', 'math', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'edu.uca.util.Serializable.stateChange', 'edu.uca.util', 'edu.uca.util.Serializable']
*/
