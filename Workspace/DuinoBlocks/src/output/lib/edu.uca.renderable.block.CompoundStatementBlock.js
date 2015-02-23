/* start module: edu.uca.renderable.block.CompoundStatementBlock */
$pyjs['loaded_modules']['edu.uca.renderable.block.CompoundStatementBlock'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.renderable.block.CompoundStatementBlock']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.renderable.block.CompoundStatementBlock'];
	if(typeof $pyjs['loaded_modules']['edu.uca.renderable.block'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.renderable.block']['__was_initialized__']) $p['___import___']('edu.uca.renderable.block', null);
	var $m = $pyjs['loaded_modules']['edu.uca.renderable.block.CompoundStatementBlock'];
	$m['__repr__'] = function() { return '<module: edu.uca.renderable.block.CompoundStatementBlock>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.renderable.block.CompoundStatementBlock';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.renderable.block']['CompoundStatementBlock'] = $pyjs['loaded_modules']['edu.uca.renderable.block.CompoundStatementBlock'];


	$m['BlockHolder'] = $p['___import___']('edu.uca.renderable.argument.BlockHolder.BlockHolder', 'edu.uca.renderable.block', null, false);
	$m['Element'] = $p['___import___']('edu.uca.renderable.Element.Element', 'edu.uca.renderable.block', null, false);
	$m['Block'] = $p['___import___']('edu.uca.renderable.block.Block.Block', 'edu.uca.renderable.block', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'edu.uca.renderable.block', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.renderable.block', null, false);
	$m['StatementArgument'] = $p['___import___']('edu.uca.renderable.argument.StatementArgument.StatementArgument', 'edu.uca.renderable.block', null, false);
	$m['GroupElement'] = $p['___import___']('edu.uca.renderable.GroupElement.GroupElement', 'edu.uca.renderable.block', null, false);
	$m['drawStatementBlock'] = $p['___import___']('edu.uca.renderable.block.StatementBlock.drawStatementBlock', 'edu.uca.renderable.block', null, false);
	$m['CodeElement'] = $p['___import___']('edu.uca.renderable.CodeElement.CodeElement', 'edu.uca.renderable.block', null, false);
	$m['drawCompoundStatementBlock'] = function(s, color, hasBn, loop) {
		if (typeof color == 'undefined') color=arguments['callee']['__args__'][3][1];
		if (typeof hasBn == 'undefined') hasBn=arguments['callee']['__args__'][4][1];
		if (typeof loop == 'undefined') loop=arguments['callee']['__args__'][5][1];
		var c,bi,$add2,$add3,$add1,$add4,ti;
		s['bn']['addStyleName']('i');
		s['bl']['addStyleName']('i');
		c = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':$p['__op_add']($add1='c ',$add2=color)}]);
		bi = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'bi'}]);
		ti = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'ti'}]);
		s['code'] = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':$p['__op_add']($add3='codeBlockContents ',$add4=color)}]);
		s['block'] = (typeof StatementElement == "undefined"?$m['StatementElement']:StatementElement)(color, hasBn);
		s['block']['addStyleName']('codeBlockEnd');
		c['append'](ti);
		c['append']($p['getattr'](s, 'code'));
		s['block']['append'](bi);
		if ($p['bool'](loop)) {
			s['block']['append']($pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'loop'}]));
		}
		c['append']($p['getattr'](s, 'block'));
		s['bl']['append'](c);
		return null;
	};
	$m['drawCompoundStatementBlock']['__name__'] = 'drawCompoundStatementBlock';

	$m['drawCompoundStatementBlock']['__bind_type__'] = 0;
	$m['drawCompoundStatementBlock']['__args__'] = [null,null,['s'],['color', 'orange'],['hasBn', true],['loop', false]];
	$m['resizeCompoundStatementBlock'] = function(self) {
		var $add20,$sub4,$iter1_iter,$add21,$add18,$add22,$add19,$iter1_array,$sub3,$sub2,$sub1,$add7,$iter1_nextval,$add14,$add15,$add16,$add17,$add10,$add11,$add12,$add13,$mul6,$mul5,$mul4,$mul3,$mul2,$mul1,$iter1_type,i,$add6,$iter1_idx,$add5,$add8,$add9;
		self['maxA'] = self['maxArgs']();
		if ($p['bool']($p['op_eq']($p['getattr'](self, 'maxA'), 0))) {
			self['height'] = 20;
		}
		else {
			self['height'] = $p['__op_add']($add5=28,$add6=(typeof ($mul1=$p['__op_sub']($sub1=$p['getattr'](self, 'maxA'),$sub2=1))==typeof ($mul2=6) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2)));
		}
		self['mb'] = $p['__op_add']($add7=52,$add8=(typeof ($mul3=$p['__op_sub']($sub3=$p['getattr'](self, 'qty'),$sub4=1))==typeof ($mul4=52) && typeof $mul3=='number'?
			$mul3*$mul4:
			$p['op_mul']($mul3,$mul4)));
		$iter1_iter = $p['range']($p['len']($p['getattr'](self, 'holderChildren')));
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
			i = $iter1_nextval['$nextval'];
			if ($p['bool'](($p['getattr'](self, 'holderChildren')['__getitem__'](i) !== null))) {
				if ($p['bool'](($p['getattr']($p['getattr'](self, 'holderChildren')['__getitem__'](i), 'subBlock') !== null))) {
					if ($p['bool'](!$p['getattr'](self, 'holderChildren')['__getitem__'](i)['subBlock']['getStyleName']()['__contains__']('invisible'))) {
						self['mb'] = $p['__op_add']($add13=$p['__op_add']($add11=$p['__op_add']($add9=$p['getattr'](self, 'mb'),$add10=$p['getattr']($p['getattr']($p['getattr'](self, 'holderChildren')['__getitem__'](i), 'subBlock'), 'mb')),$add12=5),$add14=(typeof ($mul5=$p['getattr']($p['getattr']($p['getattr'](self, 'holderChildren')['__getitem__'](i), 'subBlock'), 'maxA'))==typeof ($mul6=6) && typeof $mul5=='number'?
							$mul5*$mul6:
							$p['op_mul']($mul5,$mul6)));
						if ($p['bool'](($p['cmp']($p['getattr']($p['getattr']($p['getattr'](self, 'holderChildren')['__getitem__'](i), 'subBlock'), 'maxA'), 0) == 1))) {
							self['mb'] = $p['__op_add']($add15=$p['getattr'](self, 'mb'),$add16=2);
						}
					}
				}
			}
		}
		if ($p['bool'](($p['getattr'](self, 'holderSiblingDown') !== null))) {
			if ($p['bool'](($p['getattr']($p['getattr'](self, 'holderSiblingDown'), 'subBlock') !== null))) {
				if ($p['bool'](!self['holderSiblingDown']['subBlock']['getStyleName']()['__contains__']('invisible'))) {
					self['mb'] = $p['__op_add']($add21=$p['__op_add']($add19=$p['__op_add']($add17=$p['getattr'](self, 'mb'),$add18=$p['getattr']($p['getattr']($p['getattr'](self, 'holderSiblingDown'), 'subBlock'), 'mb')),$add20=5),$add22=$p['getattr']($p['getattr']($p['getattr'](self, 'holderSiblingDown'), 'subBlock'), 'height'));
				}
			}
		}
		self['setStyleAttribute']('marginBottom', $p['getattr'](self, 'mb'));
		$m['Block']['resize'](self);
		return null;
	};
	$m['resizeCompoundStatementBlock']['__name__'] = 'resizeCompoundStatementBlock';

	$m['resizeCompoundStatementBlock']['__bind_type__'] = 0;
	$m['resizeCompoundStatementBlock']['__args__'] = [null,null,['self']];
	$m['CompoundStatementBlock'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.renderable.block.CompoundStatementBlock';
		$method = $pyjs__bind_method2('__init__', function(name, qty, color, loop) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				qty = arguments[2];
				color = arguments[3];
				loop = arguments[4];
			}
			if (typeof qty == 'undefined') qty=arguments['callee']['__args__'][4][1];
			if (typeof color == 'undefined') color=arguments['callee']['__args__'][5][1];
			if (typeof loop == 'undefined') loop=arguments['callee']['__args__'][6][1];
			var $iter2_iter,$add24,$sub9,$sub8,statement,$sub7,$sub6,$sub5,$iter2_type,$and1,$and2,$sub10,$iter2_idx,$mul8,$mul7,$iter2_nextval,i,$add23,$iter2_array;
			$m['Block']['__init__'](self, name, $p['getattr']($m['Block'], 'STATEMENT_BLOCK'));
			self['mb'] = $p['__op_add']($add23=52,$add24=(typeof ($mul7=$p['__op_sub']($sub5=qty,$sub6=1))==typeof ($mul8=52) && typeof $mul7=='number'?
				$mul7*$mul8:
				$p['op_mul']($mul7,$mul8)));
			self['setStyleAttribute']('marginBottom', $p['getattr'](self, 'mb'));
			self['height'] = 20;
			self['maxA'] = 0;
			self['qty'] = qty;
			self['color'] = color;
			$m['drawStatementBlock'](self, color);
			self['holderSiblingUp'] = $m['BlockHolder']($m['StatementArgument']($p['getattr']($m['StatementArgument'], 'UP_ARG')), self, true);
			self['tl']['append']($p['getattr'](self, 'holderSiblingUp'));
			$m['Block']['drawBlock'](self);
			statement = self;
			$iter2_iter = $p['range'](qty);
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				i = $iter2_nextval['$nextval'];
				$pyjs_kwargs_call(null, $m['drawCompoundStatementBlock'], null, null, [{'loop':($p['bool']($and1=loop)?$p['op_eq'](i, $p['__op_sub']($sub7=qty,$sub8=1)):$and1)}, statement, color]);
				statement['holderChild'] = $m['BlockHolder']($m['StatementArgument']($p['getattr']($m['StatementArgument'], 'CHILD_ARG'), i), self);
				statement['code']['append']($p['getattr'](statement, 'holderChild'));
				self['holderChildren']['append']($p['getattr'](statement, 'holderChild'));
				statement = $p['getattr'](statement, 'block');
				if ($p['bool'](!$p['op_eq'](i, $p['__op_sub']($sub9=qty,$sub10=1)))) {
					statement['setStyleAttribute']('marginBottom', '0px');
				}
			}
			self['holderSiblingDown'] = $m['BlockHolder']($m['StatementArgument']($p['getattr']($m['StatementArgument'], 'DOWN_ARG')), self);
			statement['bl']['append']($p['getattr'](self, 'holderSiblingDown'));
			return null;
		}
	, 1, [null,null,['self'],['name'],['qty', 1],['color', 'orange'],['loop', false]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('changeTexts', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['Block']['changeTexts'](self);
			self['block']['changeTexts']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['changeTexts'] = $method;
		$method = $pyjs__bind_method2('resize', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['resizeCompoundStatementBlock'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['resize'] = $method;
		var $bases = new Array($m['Block']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('CompoundStatementBlock', $p['tuple']($bases), $data);
	})();
	$m['StatementElement'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.renderable.block.CompoundStatementBlock';
		$method = $pyjs__bind_method2('__init__', function(color, hasBn) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				color = arguments[1];
				hasBn = arguments[2];
			}
			if (typeof color == 'undefined') color=arguments['callee']['__args__'][3][1];
			if (typeof hasBn == 'undefined') hasBn=arguments['callee']['__args__'][4][1];

			self['color'] = color;
			$pyjs_kwargs_call($m['Element'], '__init__', null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':$p['getattr'](self, 'color')}, self]);
			$m['drawStatementBlock'](self, color, hasBn);
			self['ge'] = $m['GroupElement']();
			self['append']($p['getattr'](self, 'ge'));
			self['holderArguments'] = $p['list']([]);
			return null;
		}
	, 1, [null,null,['self'],['color', 'blue'],['hasBn', true]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('changeTexts', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter3_idx,e,$iter3_type,$iter3_iter,$iter3_array,$iter3_nextval;
			$iter3_iter = $p['getattr']($p['getattr'](self, 'ge'), 'subElements');
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				e = $iter3_nextval['$nextval'];
				if ($p['bool']($p['isinstance'](e, $m['CodeElement']))) {
					e['changeTexts']();
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['changeTexts'] = $method;
		$method = $pyjs__bind_method2('addCodeElement', function(code, group) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				code = arguments[1];
				group = arguments[2];
			}
			if (typeof code == 'undefined') code=arguments['callee']['__args__'][3][1];
			if (typeof group == 'undefined') group=arguments['callee']['__args__'][4][1];

			self['ge']['drawSubElement']($m['CodeElement'](code, group));
			return null;
		}
	, 1, [null,null,['self'],['code', ''],['group', null]]);
		$cls_definition['addCodeElement'] = $method;
		$method = $pyjs__bind_method2('addArgumentHolder', function(ah) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ah = arguments[1];
			}

			self['ge']['drawSubElement'](ah);
			self['holderArguments']['append'](ah);
			return null;
		}
	, 1, [null,null,['self'],['ah']]);
		$cls_definition['addArgumentHolder'] = $method;
		var $bases = new Array($m['Element']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('StatementElement', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.renderable.block.CompoundStatementBlock */


/* end module: edu.uca.renderable.block.CompoundStatementBlock */


/*
PYJS_DEPS: ['edu.uca.renderable.argument.BlockHolder.BlockHolder', 'edu', 'edu.uca', 'edu.uca.renderable', 'edu.uca.renderable.argument', 'edu.uca.renderable.argument.BlockHolder', 'edu.uca.renderable.Element.Element', 'edu.uca.renderable.Element', 'edu.uca.renderable.block.Block.Block', 'edu.uca.renderable.block', 'edu.uca.renderable.block.Block', 'pyjamas.ui.Widget.Widget', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Widget', 'pyjamas.DOM', 'edu.uca.renderable.argument.StatementArgument.StatementArgument', 'edu.uca.renderable.argument.StatementArgument', 'edu.uca.renderable.GroupElement.GroupElement', 'edu.uca.renderable.GroupElement', 'edu.uca.renderable.block.StatementBlock.drawStatementBlock', 'edu.uca.renderable.block.StatementBlock', 'edu.uca.renderable.CodeElement.CodeElement', 'edu.uca.renderable.CodeElement']
*/
