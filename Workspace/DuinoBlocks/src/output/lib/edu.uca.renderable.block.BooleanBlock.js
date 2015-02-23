/* start module: edu.uca.renderable.block.BooleanBlock */
$pyjs['loaded_modules']['edu.uca.renderable.block.BooleanBlock'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.renderable.block.BooleanBlock']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.renderable.block.BooleanBlock'];
	if(typeof $pyjs['loaded_modules']['edu.uca.renderable.block'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.renderable.block']['__was_initialized__']) $p['___import___']('edu.uca.renderable.block', null);
	var $m = $pyjs['loaded_modules']['edu.uca.renderable.block.BooleanBlock'];
	$m['__repr__'] = function() { return '<module: edu.uca.renderable.block.BooleanBlock>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.renderable.block.BooleanBlock';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.renderable.block']['BooleanBlock'] = $pyjs['loaded_modules']['edu.uca.renderable.block.BooleanBlock'];


	$m['Block'] = $p['___import___']('edu.uca.renderable.block.Block.Block', 'edu.uca.renderable.block', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'edu.uca.renderable.block', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.renderable.block', null, false);
	$m['drawBooleanBlock'] = function(s, c) {
		var b,$add2,$add1,t;
		s['addStyleName']($p['__op_add']($add1='variable bool ',$add2=c));
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
	$m['drawBooleanBlock']['__name__'] = 'drawBooleanBlock';

	$m['drawBooleanBlock']['__bind_type__'] = 0;
	$m['drawBooleanBlock']['__args__'] = [null,null,['s'],['c']];
	$m['resizeBooleanBlock'] = function(self, maxArgs) {
		if (typeof maxArgs == 'undefined') maxArgs=arguments['callee']['__args__'][3][1];
		var $sub8,$sub3,$sub2,$sub1,$sub7,$sub6,$sub5,$sub4,$add14,$add15,$add16,$add10,$add11,$add12,$add13,$mul2,$mul1,h,$add3,$add6,$add7,$add4,$add5,$add8,$add9;
		h = $p['__op_add']($add3=14,$add4=(typeof ($mul1=maxArgs)==typeof ($mul2=3) && typeof $mul1=='number'?
			$mul1*$mul2:
			$p['op_mul']($mul1,$mul2)));
		self['tr']['setStyleAttribute']($p['dict']([['right', $p['__op_sub']($sub1=(typeof ($usub1=h)=='number'?
			-$usub1:
			$p['op_usub']($usub1)),$sub2=2)], ['width', $p['__op_add']($add5=h,$add6=3)], ['height', h]]));
		self['br']['setStyleAttribute']($p['dict']([['right', $p['__op_sub']($sub3=(typeof ($usub2=h)=='number'?
			-$usub2:
			$p['op_usub']($usub2)),$sub4=2)], ['width', $p['__op_add']($add7=h,$add8=3)], ['height', h]]));
		self['tl']['setStyleAttribute']($p['dict']([['left', $p['__op_sub']($sub5=(typeof ($usub3=h)=='number'?
			-$usub3:
			$p['op_usub']($usub3)),$sub6=2)], ['width', $p['__op_add']($add9=h,$add10=3)], ['height', h]]));
		self['bl']['setStyleAttribute']($p['dict']([['left', $p['__op_sub']($sub7=(typeof ($usub4=h)=='number'?
			-$usub4:
			$p['op_usub']($usub4)),$sub8=2)], ['width', $p['__op_add']($add11=h,$add12=3)], ['height', h]]));
		self['setStyleAttribute']($p['dict']([['marginLeft', $p['__op_add']($add13=h,$add14=2)], ['marginRight', $p['__op_add']($add15=h,$add16=2)]]));
		return null;
	};
	$m['resizeBooleanBlock']['__name__'] = 'resizeBooleanBlock';

	$m['resizeBooleanBlock']['__bind_type__'] = 0;
	$m['resizeBooleanBlock']['__args__'] = [null,null,['self'],['maxArgs', 0]];
	$m['BooleanBlock'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.renderable.block.BooleanBlock';
		$method = $pyjs__bind_method2('__init__', function(name, color) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				color = arguments[2];
			}
			if (typeof color == 'undefined') color=arguments['callee']['__args__'][4][1];

			$m['Block']['__init__'](self, name, $p['getattr']($m['Block'], 'BOOLEAN_BLOCK'));
			self['color'] = color;
			$m['drawBooleanBlock'](self, color);
			$m['Block']['drawBlock'](self);
			self['resize']();
			return null;
		}
	, 1, [null,null,['self'],['name'],['color', 'green']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('resize', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['resizeBooleanBlock'](self, self['maxArgs']());
			$m['Block']['resize'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['resize'] = $method;
		var $bases = new Array($m['Block']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('BooleanBlock', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.renderable.block.BooleanBlock */


/* end module: edu.uca.renderable.block.BooleanBlock */


/*
PYJS_DEPS: ['edu.uca.renderable.block.Block.Block', 'edu', 'edu.uca', 'edu.uca.renderable', 'edu.uca.renderable.block', 'edu.uca.renderable.block.Block', 'pyjamas.ui.Widget.Widget', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Widget', 'pyjamas.DOM']
*/
