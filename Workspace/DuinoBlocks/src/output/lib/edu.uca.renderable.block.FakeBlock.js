/* start module: edu.uca.renderable.block.FakeBlock */
$pyjs['loaded_modules']['edu.uca.renderable.block.FakeBlock'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.renderable.block.FakeBlock']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.renderable.block.FakeBlock'];
	if(typeof $pyjs['loaded_modules']['edu.uca.renderable.block'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.renderable.block']['__was_initialized__']) $p['___import___']('edu.uca.renderable.block', null);
	var $m = $pyjs['loaded_modules']['edu.uca.renderable.block.FakeBlock'];
	$m['__repr__'] = function() { return '<module: edu.uca.renderable.block.FakeBlock>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.renderable.block.FakeBlock';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.renderable.block']['FakeBlock'] = $pyjs['loaded_modules']['edu.uca.renderable.block.FakeBlock'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.renderable.block', null, false);
	$m['Element'] = $p['___import___']('edu.uca.renderable.Element.Element', 'edu.uca.renderable.block', null, false);
	$m['CodeElement'] = $p['___import___']('edu.uca.renderable.CodeElement.CodeElement', 'edu.uca.renderable.block', null, false);
	$m['GroupElement'] = $p['___import___']('edu.uca.renderable.GroupElement.GroupElement', 'edu.uca.renderable.block', null, false);
	$m['drawStatementBlock'] = $p['___import___']('edu.uca.renderable.block.StatementBlock.drawStatementBlock', 'edu.uca.renderable.block', null, false);
	$m['drawNumberArgument'] = $p['___import___']('edu.uca.renderable.argument.NumberArgument.drawNumberArgument', 'edu.uca.renderable.block', null, false);
	$m['drawBooleanArgument'] = $p['___import___']('edu.uca.renderable.argument.BooleanArgument.drawBooleanArgument', 'edu.uca.renderable.block', null, false);
	$m['drawCompoundStatementBlock'] = $p['___import___']('edu.uca.renderable.block.CompoundStatementBlock.drawCompoundStatementBlock', 'edu.uca.renderable.block', null, false);
	$m['drawBooleanBlock'] = $p['___import___']('edu.uca.renderable.block.BooleanBlock.drawBooleanBlock', 'edu.uca.renderable.block', null, false);
	$m['resizeBooleanBlock'] = $p['___import___']('edu.uca.renderable.block.BooleanBlock.resizeBooleanBlock', 'edu.uca.renderable.block', null, false);
	$m['drawNumberBlock'] = $p['___import___']('edu.uca.renderable.block.NumberBlock.drawNumberBlock', 'edu.uca.renderable.block', null, false);
	$m['drawDropdownNumberArgument'] = $p['___import___']('edu.uca.renderable.argument.DropdownNumberArgument.drawDropdownNumberArgument', 'edu.uca.renderable.block', null, false);
	$m['drawDropdownBooleanArgument'] = $p['___import___']('edu.uca.renderable.argument.DropdownBooleanArgument.drawDropdownBooleanArgument', 'edu.uca.renderable.block', null, false);
	$m['VariableElement'] = $p['___import___']('edu.uca.renderable.VariableElement.VariableElement', 'edu.uca.renderable.block', null, false);
	$m['drawDropdownPin'] = $p['___import___']('edu.uca.renderable.hardware.DropdownPin.drawDropdownPin', 'edu.uca.renderable.block', null, false);
	$m['drawComponentBlock'] = $p['___import___']('edu.uca.renderable.hardware.ComponentBlock.drawComponentBlock', 'edu.uca.renderable.block', null, false);
	$m['addArgument'] = $p['___import___']('edu.uca.renderable.hardware.ComponentBlock.addArgument', 'edu.uca.renderable.block', null, false);
	$m['drawDropdownStringArgument'] = $p['___import___']('edu.uca.renderable.argument.DropdownStringArgument.drawDropdownStringArgument', 'edu.uca.renderable.block', null, false);
	$m['FakeBlock'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.renderable.block.FakeBlock';
		$method = $pyjs__bind_method2('__init__', function(name, color) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				color = arguments[2];
			}

			$pyjs_kwargs_call($m['Element'], '__init__', null, null, [{'Element':$m['DOM']['createDiv']()}, self]);
			self['addStyleName']('block');
			self['holderArguments'] = $p['list']([]);
			self['ge'] = $m['GroupElement']();
			self['varName'] = name;
			self['color'] = color;
			self['dropDownVarName'] = null;
			return null;
		}
	, 1, [null,null,['self'],['name'],['color']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('drawBlock', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['append']($p['getattr'](self, 'ge'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['drawBlock'] = $method;
		$method = $pyjs__bind_method2('addCodeElement', function(code) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				code = arguments[1];
			}
			if (typeof code == 'undefined') code=arguments['callee']['__args__'][3][1];

			self['ge']['drawSubElement']($pyjs_kwargs_call(null, $m['CodeElement'], null, null, [{'group':null}, code]));
			return null;
		}
	, 1, [null,null,['self'],['code', '']]);
		$cls_definition['addCodeElement'] = $method;
		$method = $pyjs__bind_method2('addVariableElement', function(varType) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				varType = arguments[1];
			}

			self['dropDownVarName'] = $m['VariableElement'](self, varType);
			self['ge']['drawSubElement']($p['getattr'](self, 'dropDownVarName'));
			return null;
		}
	, 1, [null,null,['self'],['varType']]);
		$cls_definition['addVariableElement'] = $method;
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
		return $p['_create_class']('FakeBlock', $p['tuple']($bases), $data);
	})();
	$m['FakeStatementBlock'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.renderable.block.FakeBlock';
		$method = $pyjs__bind_method2('__init__', function(name, color) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				color = arguments[2];
			}
			if (typeof color == 'undefined') color=arguments['callee']['__args__'][4][1];

			$m['FakeBlock']['__init__'](self, name, color);
			$m['drawStatementBlock'](self, color);
			$m['FakeBlock']['drawBlock'](self);
			return null;
		}
	, 1, [null,null,['self'],['name'],['color', 'blue']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['FakeBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('FakeStatementBlock', $p['tuple']($bases), $data);
	})();
	$m['FakeCompoundStatementBlock'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.renderable.block.FakeBlock';
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
			var $iter1_array,statement,$sub3,$sub2,$sub1,$sub4,$iter1_nextval,$and1,$and2,$iter1_iter,$mul2,$mul1,$iter1_type,i,$add2,$add1,$iter1_idx;
			$m['FakeBlock']['__init__'](self, name, color);
			$m['drawStatementBlock'](self, color);
			statement = self;
			$iter1_iter = $p['range'](qty);
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				i = $iter1_nextval['$nextval'];
				$pyjs_kwargs_call(null, $m['drawCompoundStatementBlock'], null, null, [{'loop':($p['bool']($and1=loop)?$p['op_eq'](i, $p['__op_sub']($sub1=qty,$sub2=1)):$and1)}, statement, color]);
				statement = $p['getattr'](statement, 'block');
			}
			$m['FakeBlock']['drawBlock'](self);
			self['setStyleAttribute']('marginBottom', $p['__op_add']($add1=52,$add2=(typeof ($mul1=$p['__op_sub']($sub3=qty,$sub4=1))==typeof ($mul2=52) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2))));
			return null;
		}
	, 1, [null,null,['self'],['name'],['qty', 1],['color', 'orange'],['loop', false]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['FakeBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('FakeCompoundStatementBlock', $p['tuple']($bases), $data);
	})();
	$m['FakeMainBlock'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.renderable.block.FakeBlock';
		$method = $pyjs__bind_method2('__init__', function(name, color) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				color = arguments[2];
			}
			if (typeof color == 'undefined') color=arguments['callee']['__args__'][4][1];

			$m['FakeBlock']['__init__'](self, name, color);
			$m['drawStatementBlock'](self, color);
			$m['FakeBlock']['drawBlock'](self);
			$pyjs_kwargs_call(null, $m['drawCompoundStatementBlock'], null, null, [{'hasBn':false}, self, color]);
			self['setStyleAttribute']('marginBottom', 52);
			return null;
		}
	, 1, [null,null,['self'],['name'],['color', 'orange']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['FakeBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('FakeMainBlock', $p['tuple']($bases), $data);
	})();
	$m['FakeBooleanBlock'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.renderable.block.FakeBlock';
		$method = $pyjs__bind_method2('__init__', function(name, color) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				color = arguments[2];
			}
			if (typeof color == 'undefined') color=arguments['callee']['__args__'][4][1];

			$m['FakeBlock']['__init__'](self, name, color);
			$m['drawBooleanBlock'](self, color);
			$m['FakeBlock']['drawBlock'](self);
			$m['resizeBooleanBlock'](self);
			return null;
		}
	, 1, [null,null,['self'],['name'],['color', 'green']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['FakeBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('FakeBooleanBlock', $p['tuple']($bases), $data);
	})();
	$m['FakeNumberBlock'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.renderable.block.FakeBlock';
		$method = $pyjs__bind_method2('__init__', function(name, color) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				color = arguments[2];
			}
			if (typeof color == 'undefined') color=arguments['callee']['__args__'][4][1];

			$m['FakeBlock']['__init__'](self, name, color);
			$m['drawNumberBlock'](self, color);
			$m['FakeBlock']['drawBlock'](self);
			return null;
		}
	, 1, [null,null,['self'],['name'],['color', 'green']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['FakeBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('FakeNumberBlock', $p['tuple']($bases), $data);
	})();
	$m['FakeStringBlock'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.renderable.block.FakeBlock';
		$method = $pyjs__bind_method2('__init__', function(name, color) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				color = arguments[2];
			}
			if (typeof color == 'undefined') color=arguments['callee']['__args__'][4][1];

			$m['FakeBlock']['__init__'](self, name, color);
			$m['drawNumberBlock'](self, color, '');
			$m['FakeBlock']['drawBlock'](self);
			return null;
		}
	, 1, [null,null,['self'],['name'],['color', 'green']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['FakeBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('FakeStringBlock', $p['tuple']($bases), $data);
	})();
	$m['FakeBlockHolder'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.renderable.block.FakeBlock';
		$method = $pyjs__bind_method2('__init__', function(arg, block) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				arg = arguments[1];
				block = arguments[2];
			}

			$pyjs_kwargs_call($m['Element'], '__init__', null, null, [{'Element':$m['DOM']['createDiv']()}, self]);
			self['argument'] = arg;
			self['append'](arg);
			return null;
		}
	, 1, [null,null,['self'],['arg'],['block']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['Element']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('FakeBlockHolder', $p['tuple']($bases), $data);
	})();
	$m['FakeNumberArgument'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.renderable.block.FakeBlock';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs_kwargs_call($m['Element'], '__init__', null, null, [{'Element':$m['DOM']['createDiv']()}, self]);
			$m['drawNumberArgument'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['Element']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('FakeNumberArgument', $p['tuple']($bases), $data);
	})();
	$m['FakeStringArgument'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.renderable.block.FakeBlock';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs_kwargs_call($m['Element'], '__init__', null, null, [{'Element':$m['DOM']['createDiv']()}, self]);
			$m['drawNumberArgument'](self, '');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['Element']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('FakeStringArgument', $p['tuple']($bases), $data);
	})();
	$m['FakeDropdownNumberArgument'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.renderable.block.FakeBlock';
		$method = $pyjs__bind_method2('__init__', function(values) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				values = arguments[1];
			}

			$m['FakeNumberArgument']['__init__'](self);
			$m['drawDropdownNumberArgument'](self, values, null, null);
			return null;
		}
	, 1, [null,null,['self'],['values']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['FakeNumberArgument']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('FakeDropdownNumberArgument', $p['tuple']($bases), $data);
	})();
	$m['FakeDropdownStringArgument'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.renderable.block.FakeBlock';
		$method = $pyjs__bind_method2('__init__', function(values) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				values = arguments[1];
			}

			$m['FakeStringArgument']['__init__'](self);
			$m['drawDropdownStringArgument'](self, values, null, null);
			return null;
		}
	, 1, [null,null,['self'],['values']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['FakeStringArgument']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('FakeDropdownStringArgument', $p['tuple']($bases), $data);
	})();
	$m['FakeBooleanArgument'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.renderable.block.FakeBlock';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs_kwargs_call($m['Element'], '__init__', null, null, [{'Element':$m['DOM']['createDiv']()}, self]);
			$m['drawBooleanArgument'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['Element']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('FakeBooleanArgument', $p['tuple']($bases), $data);
	})();
	$m['FakeDropdownBooleanArgument'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.renderable.block.FakeBlock';
		$method = $pyjs__bind_method2('__init__', function(values) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				values = arguments[1];
			}

			$m['FakeBooleanArgument']['__init__'](self);
			$m['drawDropdownBooleanArgument'](self, values, null, null);
			return null;
		}
	, 1, [null,null,['self'],['values']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['FakeBooleanArgument']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('FakeDropdownBooleanArgument', $p['tuple']($bases), $data);
	})();
	$m['FakeComponentBlock'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.renderable.block.FakeBlock';
		$method = $pyjs__bind_method2('__init__', function(name, text, mode) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				text = arguments[2];
				mode = arguments[3];
			}

			$pyjs_kwargs_call($m['Element'], '__init__', null, null, [{'Element':$m['DOM']['createDiv']()}, self]);
			self['$$name'] = name;
			self['text'] = text;
			self['mode'] = mode;
			$m['drawComponentBlock'](self);
			return null;
		}
	, 1, [null,null,['self'],['name'],['text'],['mode']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('addArgument', function(arg) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				arg = arguments[1];
			}

			$m['addArgument'](self, arg);
			return null;
		}
	, 1, [null,null,['self'],['arg']]);
		$cls_definition['addArgument'] = $method;
		$method = $pyjs__bind_method2('setText', function(text) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			$m['DOM']['setInnerHTML'](self['td']['getElement'](), text);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['setText'] = $method;
		var $bases = new Array($m['Element']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('FakeComponentBlock', $p['tuple']($bases), $data);
	})();
	$m['FakeDropdownPin'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.renderable.block.FakeBlock';
		$method = $pyjs__bind_method2('__init__', function(component, mode, $$label) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var kw = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kw === null || typeof kw != 'object' || kw['__name__'] != 'dict' || typeof kw['$pyjs_is_kwarg'] == 'undefined') {
					var kw = arguments[arguments['length']+1];
				} else {
					delete kw['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				component = arguments[1];
				mode = arguments[2];
				$$label = arguments[3];
				var kw = arguments['length'] >= 5 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kw === null || typeof kw != 'object' || kw['__name__'] != 'dict' || typeof kw['$pyjs_is_kwarg'] == 'undefined') {
					kw = arguments[arguments['length']+1];
				} else {
					delete kw['$pyjs_is_kwarg'];
				}
			}
			if (typeof kw == 'undefined') {
				kw = $p['__empty_dict']();
				if (typeof $$label != 'undefined') {
					if ($$label !== null && typeof $$label['$pyjs_is_kwarg'] != 'undefined') {
						kw = $$label;
						$$label = arguments[4];
					}
				} else 				if (typeof mode != 'undefined') {
					if (mode !== null && typeof mode['$pyjs_is_kwarg'] != 'undefined') {
						kw = mode;
						mode = arguments[4];
					}
				} else 				if (typeof component != 'undefined') {
					if (component !== null && typeof component['$pyjs_is_kwarg'] != 'undefined') {
						kw = component;
						component = arguments[4];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kw = self;
						self = arguments[4];
					}
				} else {
				}
			}
			if (typeof $$label == 'undefined') $$label=arguments['callee']['__args__'][5][1];
			var $$label;
			$pyjs_kwargs_call($m['Element'], '__init__', null, kw, [{'Element':$m['DOM']['createElement']('li')}, self]);
			self['text'] = 'selecionar pino';
			self['$$label'] = $$label;
			$m['drawDropdownPin'](self);
			return null;
		}
	, 1, [null,['kw'],['self'],['component'],['mode'],['$$label', '']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['Element']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('FakeDropdownPin', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.renderable.block.FakeBlock */


/* end module: edu.uca.renderable.block.FakeBlock */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'edu.uca.renderable.Element.Element', 'edu', 'edu.uca', 'edu.uca.renderable', 'edu.uca.renderable.Element', 'edu.uca.renderable.CodeElement.CodeElement', 'edu.uca.renderable.CodeElement', 'edu.uca.renderable.GroupElement.GroupElement', 'edu.uca.renderable.GroupElement', 'edu.uca.renderable.block.StatementBlock.drawStatementBlock', 'edu.uca.renderable.block', 'edu.uca.renderable.block.StatementBlock', 'edu.uca.renderable.argument.NumberArgument.drawNumberArgument', 'edu.uca.renderable.argument', 'edu.uca.renderable.argument.NumberArgument', 'edu.uca.renderable.argument.BooleanArgument.drawBooleanArgument', 'edu.uca.renderable.argument.BooleanArgument', 'edu.uca.renderable.block.CompoundStatementBlock.drawCompoundStatementBlock', 'edu.uca.renderable.block.CompoundStatementBlock', 'edu.uca.renderable.block.BooleanBlock.drawBooleanBlock', 'edu.uca.renderable.block.BooleanBlock', 'edu.uca.renderable.block.BooleanBlock.resizeBooleanBlock', 'edu.uca.renderable.block.NumberBlock.drawNumberBlock', 'edu.uca.renderable.block.NumberBlock', 'edu.uca.renderable.argument.DropdownNumberArgument.drawDropdownNumberArgument', 'edu.uca.renderable.argument.DropdownNumberArgument', 'edu.uca.renderable.argument.DropdownBooleanArgument.drawDropdownBooleanArgument', 'edu.uca.renderable.argument.DropdownBooleanArgument', 'edu.uca.renderable.VariableElement.VariableElement', 'edu.uca.renderable.VariableElement', 'edu.uca.renderable.hardware.DropdownPin.drawDropdownPin', 'edu.uca.renderable.hardware', 'edu.uca.renderable.hardware.DropdownPin', 'edu.uca.renderable.hardware.ComponentBlock.drawComponentBlock', 'edu.uca.renderable.hardware.ComponentBlock', 'edu.uca.renderable.hardware.ComponentBlock.addArgument', 'edu.uca.renderable.argument.DropdownStringArgument.drawDropdownStringArgument', 'edu.uca.renderable.argument.DropdownStringArgument']
*/
