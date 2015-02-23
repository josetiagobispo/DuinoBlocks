/* start module: edu.uca.renderable.block.StatementBlock */
$pyjs['loaded_modules']['edu.uca.renderable.block.StatementBlock'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.renderable.block.StatementBlock']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.renderable.block.StatementBlock'];
	if(typeof $pyjs['loaded_modules']['edu.uca.renderable.block'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.renderable.block']['__was_initialized__']) $p['___import___']('edu.uca.renderable.block', null);
	var $m = $pyjs['loaded_modules']['edu.uca.renderable.block.StatementBlock'];
	$m['__repr__'] = function() { return '<module: edu.uca.renderable.block.StatementBlock>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.renderable.block.StatementBlock';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.renderable.block']['StatementBlock'] = $pyjs['loaded_modules']['edu.uca.renderable.block.StatementBlock'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.renderable.block', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'edu.uca.renderable.block', null, false);
	$m['Block'] = $p['___import___']('edu.uca.renderable.block.Block.Block', 'edu.uca.renderable.block', null, false);
	$m['Element'] = $p['___import___']('edu.uca.renderable.Element.Element', 'edu.uca.renderable.block', null, false);
	$m['BlockHolder'] = $p['___import___']('edu.uca.renderable.argument.BlockHolder.BlockHolder', 'edu.uca.renderable.block', null, false);
	$m['StatementArgument'] = $p['___import___']('edu.uca.renderable.argument.StatementArgument.StatementArgument', 'edu.uca.renderable.block', null, false);
	$m['drawStatementBlock'] = function(s, c, hasBn) {
		if (typeof hasBn == 'undefined') hasBn=arguments['callee']['__args__'][4][1];
		var b,l,$add2,$add1,br,r;
		s['addStyleName']($p['__op_add']($add1='statement ',$add2=c));
		s['t'] = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'t'}]);
		l = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'l'}]);
		r = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'r'}]);
		s['tl'] = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'tl'}]);
		s['tr'] = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'tr'}]);
		b = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'b'}]);
		br = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'br'}]);
		s['bl'] = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'bl'}]);
		s['append']($p['getattr'](s, 't'));
		s['append'](l);
		s['append'](r);
		s['append']($p['getattr'](s, 'tl'));
		s['append']($p['getattr'](s, 'tr'));
		s['append'](b);
		s['append'](br);
		if ($p['bool'](hasBn)) {
			s['bn'] = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'bn'}]);
			s['append']($p['getattr'](s, 'bn'));
		}
		s['append']($p['getattr'](s, 'bl'));
		return null;
	};
	$m['drawStatementBlock']['__name__'] = 'drawStatementBlock';

	$m['drawStatementBlock']['__bind_type__'] = 0;
	$m['drawStatementBlock']['__args__'] = [null,null,['s'],['c'],['hasBn', true]];
	$m['StatementBlock'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.renderable.block.StatementBlock';
		$method = $pyjs__bind_method2('__init__', function(name, color) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				color = arguments[2];
			}
			if (typeof color == 'undefined') color=arguments['callee']['__args__'][4][1];

			$m['Block']['__init__'](self, name, $p['getattr']($m['Block'], 'STATEMENT_BLOCK'));
			self['mb'] = 6;
			self['setStyleAttribute']('marginBottom', $p['getattr'](self, 'mb'));
			self['height'] = 20;
			self['maxA'] = 0;
			self['color'] = color;
			$m['drawStatementBlock'](self, color);
			self['holderSiblingDown'] = $m['BlockHolder']($m['StatementArgument']($p['getattr']($m['StatementArgument'], 'DOWN_ARG')), self);
			self['holderSiblingUp'] = $pyjs_kwargs_call(null, $m['BlockHolder'], null, null, [{'up':true}, $m['StatementArgument']($p['getattr']($m['StatementArgument'], 'UP_ARG')), self]);
			self['tl']['append']($p['getattr'](self, 'holderSiblingUp'));
			self['bl']['append']($p['getattr'](self, 'holderSiblingDown'));
			$m['Block']['drawBlock'](self);
			return null;
		}
	, 1, [null,null,['self'],['name'],['color', 'blue']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('resize', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add12,$add13,$add8,$add14,$add3,$add6,$add7,$add4,$add5,$sub2,$sub1,$add9,$add10,$mul2,$mul1,$add11;
			self['maxA'] = self['maxArgs']();
			if ($p['bool']($p['op_eq']($p['getattr'](self, 'maxA'), 0))) {
				self['height'] = 20;
			}
			else {
				self['height'] = $p['__op_add']($add3=28,$add4=(typeof ($mul1=$p['__op_sub']($sub1=$p['getattr'](self, 'maxA'),$sub2=1))==typeof ($mul2=6) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)));
			}
			self['mb'] = 6;
			if ($p['bool'](($p['getattr'](self, 'dropDownVarName') !== null))) {
				self['height'] = $p['__op_add']($add5=$p['getattr'](self, 'height'),$add6=1);
				self['mb'] = $p['__op_add']($add7=$p['getattr'](self, 'mb'),$add8=1);
			}
			if ($p['bool'](($p['getattr']($p['getattr'](self, 'holderSiblingDown'), 'subBlock') !== null))) {
				if ($p['bool'](!self['holderSiblingDown']['subBlock']['getStyleName']()['__contains__']('invisible'))) {
					self['mb'] = $p['__op_add']($add13=$p['__op_add']($add11=$p['__op_add']($add9=$p['getattr'](self, 'mb'),$add10=$p['getattr']($p['getattr']($p['getattr'](self, 'holderSiblingDown'), 'subBlock'), 'mb')),$add12=5),$add14=$p['getattr']($p['getattr']($p['getattr'](self, 'holderSiblingDown'), 'subBlock'), 'height'));
				}
			}
			self['setStyleAttribute']('marginBottom', $p['getattr'](self, 'mb'));
			$m['Block']['resize'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['resize'] = $method;
		var $bases = new Array($m['Block']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('StatementBlock', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.renderable.block.StatementBlock */


/* end module: edu.uca.renderable.block.StatementBlock */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui', 'pyjamas.ui.Widget', 'edu.uca.renderable.block.Block.Block', 'edu', 'edu.uca', 'edu.uca.renderable', 'edu.uca.renderable.block', 'edu.uca.renderable.block.Block', 'edu.uca.renderable.Element.Element', 'edu.uca.renderable.Element', 'edu.uca.renderable.argument.BlockHolder.BlockHolder', 'edu.uca.renderable.argument', 'edu.uca.renderable.argument.BlockHolder', 'edu.uca.renderable.argument.StatementArgument.StatementArgument', 'edu.uca.renderable.argument.StatementArgument']
*/
