/* start module: edu.uca.renderable.block.NumberBlock */
$pyjs['loaded_modules']['edu.uca.renderable.block.NumberBlock'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.renderable.block.NumberBlock']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.renderable.block.NumberBlock'];
	if(typeof $pyjs['loaded_modules']['edu.uca.renderable.block'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.renderable.block']['__was_initialized__']) $p['___import___']('edu.uca.renderable.block', null);
	var $m = $pyjs['loaded_modules']['edu.uca.renderable.block.NumberBlock'];
	$m['__repr__'] = function() { return '<module: edu.uca.renderable.block.NumberBlock>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.renderable.block.NumberBlock';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.renderable.block']['NumberBlock'] = $pyjs['loaded_modules']['edu.uca.renderable.block.NumberBlock'];


	$m['Block'] = $p['___import___']('edu.uca.renderable.block.Block.Block', 'edu.uca.renderable.block', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'edu.uca.renderable.block', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.renderable.block', null, false);
	$m['drawNumberBlock'] = function(s, c, numOrStr) {
		if (typeof numOrStr == 'undefined') numOrStr=arguments['callee']['__args__'][4][1];
		var $add2,b,br,bl,tr,tl,$add3,$add1,$add6,t,$add4,$add5;
		s['addStyleName']($p['__op_add']($add5=$p['__op_add']($add3=$p['__op_add']($add1='variable ',$add2=numOrStr),$add4=' '),$add6=c));
		tl = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'tl'}]);
		t = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'t'}]);
		tr = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'tr'}]);
		s['l'] = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'l'}]);
		s['r'] = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'r'}]);
		b = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'b'}]);
		br = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'br'}]);
		bl = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'bl'}]);
		s['append'](tl);
		s['append'](t);
		s['append'](tr);
		s['append']($p['getattr'](s, 'l'));
		s['append']($p['getattr'](s, 'r'));
		s['append'](b);
		s['append'](br);
		s['append'](bl);
		return null;
	};
	$m['drawNumberBlock']['__name__'] = 'drawNumberBlock';

	$m['drawNumberBlock']['__bind_type__'] = 0;
	$m['drawNumberBlock']['__args__'] = [null,null,['s'],['c'],['numOrStr', 'num']];
	$m['resizeNumberBlock'] = function(self) {
		var h,$add7,$add8,$mul2,$mul1;
		h = $p['__op_add']($add7=8,$add8=(typeof ($mul1=self['maxArgs']())==typeof ($mul2=6) && typeof $mul1=='number'?
			$mul1*$mul2:
			$p['op_mul']($mul1,$mul2)));
		self['l']['setHeight'](h);
		self['r']['setHeight'](h);
		return null;
	};
	$m['resizeNumberBlock']['__name__'] = 'resizeNumberBlock';

	$m['resizeNumberBlock']['__bind_type__'] = 0;
	$m['resizeNumberBlock']['__args__'] = [null,null,['self']];
	$m['NumberBlock'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.renderable.block.NumberBlock';
		$method = $pyjs__bind_method2('__init__', function(name, color) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				color = arguments[2];
			}
			if (typeof color == 'undefined') color=arguments['callee']['__args__'][4][1];

			$m['Block']['__init__'](self, name, $p['getattr']($m['Block'], 'NUMBER_BLOCK'));
			self['color'] = color;
			$m['drawNumberBlock'](self, color);
			$m['Block']['drawBlock'](self);
			$m['resizeNumberBlock'](self);
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

			$m['resizeNumberBlock'](self);
			$m['Block']['resize'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['resize'] = $method;
		var $bases = new Array($m['Block']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('NumberBlock', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.renderable.block.NumberBlock */


/* end module: edu.uca.renderable.block.NumberBlock */


/*
PYJS_DEPS: ['edu.uca.renderable.block.Block.Block', 'edu', 'edu.uca', 'edu.uca.renderable', 'edu.uca.renderable.block', 'edu.uca.renderable.block.Block', 'pyjamas.ui.Widget.Widget', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Widget', 'pyjamas.DOM']
*/
