/* start module: edu.uca.translator.TranslatorBlockFactory */
$pyjs['loaded_modules']['edu.uca.translator.TranslatorBlockFactory'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.translator.TranslatorBlockFactory']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.translator.TranslatorBlockFactory'];
	if(typeof $pyjs['loaded_modules']['edu.uca.translator'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.translator']['__was_initialized__']) $p['___import___']('edu.uca.translator', null);
	var $m = $pyjs['loaded_modules']['edu.uca.translator.TranslatorBlockFactory'];
	$m['__repr__'] = function() { return '<module: edu.uca.translator.TranslatorBlockFactory>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.translator.TranslatorBlockFactory';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.translator']['TranslatorBlockFactory'] = $pyjs['loaded_modules']['edu.uca.translator.TranslatorBlockFactory'];


	$m['TranslatorBlock'] = $p['___import___']('edu.uca.translator.TranslatorBlock.TranslatorBlock', 'edu.uca.translator', null, false);
	$m['MANY_FEW_NOTES'] = $p['___import___']('edu.uca.util.Constants.MANY_FEW_NOTES', 'edu.uca.translator', null, false);
	$m['DIRECTIONS_MOTOR'] = $p['___import___']('edu.uca.util.Constants.DIRECTIONS_MOTOR', 'edu.uca.translator', null, false);
	$m['LCD_COLS'] = $p['___import___']('edu.uca.util.Constants.LCD_COLS', 'edu.uca.translator', null, false);
	$m['LCD_ROWS'] = $p['___import___']('edu.uca.util.Constants.LCD_ROWS', 'edu.uca.translator', null, false);
	$m['DIGITAL_VALUES'] = $p['___import___']('edu.uca.util.Constants.DIGITAL_VALUES', 'edu.uca.translator', null, false);
	$m['LED_VALUES'] = $p['___import___']('edu.uca.util.Constants.LED_VALUES', 'edu.uca.translator', null, false);
	$m['LOGIC_VALUES'] = $p['___import___']('edu.uca.util.Constants.LOGIC_VALUES', 'edu.uca.translator', null, false);
	$m['setup'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var setupCode,ret,$add2,$add1,translatorBlock;
			ret = '';
			translatorBlock = self['nextTranslatorBlock']();
			while ($p['bool']((translatorBlock !== null))) {
				setupCode = translatorBlock['toCode']();
				ret = $p['__op_add']($add1=ret,$add2=setupCode);
				self['translator']['addSetupCommand'](setupCode);
				translatorBlock = translatorBlock['nextTranslatorBlock']();
			}
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('setup', $p['tuple']($bases), $data);
	})();
	$m['forever'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var translatorBlock,ret,$add3,$add6,$add4,$add5;
			ret = 'void loop(){\n';
			translatorBlock = self['getTranslatorBlockAtChildrenSocket'](0);
			while ($p['bool']((translatorBlock !== null))) {
				ret = $p['__op_add']($add3=ret,$add4=translatorBlock['toCode']());
				translatorBlock = translatorBlock['nextTranslatorBlock']();
			}
			ret = $p['__op_add']($add5=ret,$add6='}\n');
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('forever', $p['tuple']($bases), $data);
	})();
	$m['if_'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add12,ret,$add14,$add10,$add7,translatorBlock,$add13,$add8,$add9,$add11;
			ret = 'if(';
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			ret = $p['__op_add']($add7=ret,$add8=translatorBlock['toCode']());
			ret = $p['__op_add']($add9=ret,$add10='){\n');
			translatorBlock = self['getTranslatorBlockAtChildrenSocket'](0);
			while ($p['bool'](!$p['op_eq'](translatorBlock, null))) {
				ret = $p['__op_add']($add11=ret,$add12=translatorBlock['toCode']());
				translatorBlock = translatorBlock['nextTranslatorBlock']();
			}
			ret = $p['__op_add']($add13=ret,$add14='}\n');
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('if_', $p['tuple']($bases), $data);
	})();
	$m['if_else_'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add21,$add20,$add22,$add25,$add24,ret,$add26,$add15,$add16,$add17,translatorBlock,$add18,$add19,$add23;
			ret = 'if(';
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			ret = $p['__op_add']($add15=ret,$add16=translatorBlock['toCode']());
			ret = $p['__op_add']($add17=ret,$add18='){\n');
			translatorBlock = self['getTranslatorBlockAtChildrenSocket'](0);
			while ($p['bool'](!$p['op_eq'](translatorBlock, null))) {
				ret = $p['__op_add']($add19=ret,$add20=translatorBlock['toCode']());
				translatorBlock = translatorBlock['nextTranslatorBlock']();
			}
			ret = $p['__op_add']($add21=ret,$add22='}\nelse{\n');
			translatorBlock = self['getTranslatorBlockAtChildrenSocket'](1);
			while ($p['bool'](!$p['op_eq'](translatorBlock, null))) {
				ret = $p['__op_add']($add23=ret,$add24=translatorBlock['toCode']());
				translatorBlock = translatorBlock['nextTranslatorBlock']();
			}
			ret = $p['__op_add']($add25=ret,$add26='}\n');
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('if_else_', $p['tuple']($bases), $data);
	})();
	$m['repeat_'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var varName,$add41,$add29,$add28,$add49,$add48,$add47,$add46,$add44,$add43,$add42,$add27,$add40,translatorBlock,ret,$add50,$add38,$add39,$add32,$add33,$add30,$add31,$add36,$add37,$add34,$add35,$add45;
			varName = self['translator']['buildVariableName']();
			self['translator']['addDefinitionCommand']($p['__op_add']($add29=$p['__op_add']($add27='int ',$add28=varName),$add30=';'));
			ret = $p['__op_add']($add37=$p['__op_add']($add35=$p['__op_add']($add33=$p['__op_add']($add31='for (',$add32=varName),$add34=' = 0; '),$add36=varName),$add38=' < (');
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			ret = $p['__op_add']($add39=ret,$add40=translatorBlock['toCode']());
			ret = $p['__op_add']($add45=ret,$add46=$p['__op_add']($add43=$p['__op_add']($add41='); ++',$add42=varName),$add44='){\n'));
			translatorBlock = self['getTranslatorBlockAtChildrenSocket'](0);
			while ($p['bool'](!$p['op_eq'](translatorBlock, null))) {
				ret = $p['__op_add']($add47=ret,$add48=translatorBlock['toCode']());
				translatorBlock = translatorBlock['nextTranslatorBlock']();
			}
			ret = $p['__op_add']($add49=ret,$add50='}\n');
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('repeat_', $p['tuple']($bases), $data);
	})();
	$m['while_'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add51,$add52,$add53,$add54,$add55,$add56,$add57,$add58,ret,translatorBlock;
			ret = 'while (';
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			ret = $p['__op_add']($add51=ret,$add52=translatorBlock['toCode']());
			ret = $p['__op_add']($add53=ret,$add54='){\n');
			translatorBlock = self['getTranslatorBlockAtChildrenSocket'](0);
			while ($p['bool'](!$p['op_eq'](translatorBlock, null))) {
				ret = $p['__op_add']($add55=ret,$add56=translatorBlock['toCode']());
				translatorBlock = translatorBlock['nextTranslatorBlock']();
			}
			ret = $p['__op_add']($add57=ret,$add58='}\n');
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('while_', $p['tuple']($bases), $data);
	})();
	$m['delay_'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add61,$add60,$add62,$add59,ret,translatorBlock;
			ret = 'delay(';
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			ret = $p['__op_add']($add59=ret,$add60=translatorBlock['toCode']());
			ret = $p['__op_add']($add61=ret,$add62=');\n');
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('delay_', $p['tuple']($bases), $data);
	})();
	$m['delayUntil'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add65,$add64,$add66,$add63,ret,translatorBlock;
			ret = 'while (!(';
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			ret = $p['__op_add']($add63=ret,$add64=translatorBlock['toCode']());
			ret = $p['__op_add']($add65=ret,$add66=')){\n}\n');
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('delayUntil', $p['tuple']($bases), $data);
	})();
	$m['BinaryOperation'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, operation, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				operation = arguments[2];
				translator = arguments[3];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			self['operation'] = operation;
			return null;
		}
	, 1, [null,null,['self'],['block'],['operation'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add67,$add72,$add73,$add70,$add71,$add69,$add68,ret,$add74,translatorBlock;
			ret = '(';
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			ret = $p['__op_add']($add67=ret,$add68=translatorBlock['toCode']());
			ret = $p['__op_add']($add69=ret,$add70=$p['getattr'](self, 'operation'));
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](1);
			ret = $p['__op_add']($add71=ret,$add72=translatorBlock['toCode']());
			ret = $p['__op_add']($add73=ret,$add74=')');
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('BinaryOperation', $p['tuple']($bases), $data);
	})();
	$m['plus'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['BinaryOperation']['__init__'](self, block, ' + ', translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['BinaryOperation']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('plus', $p['tuple']($bases), $data);
	})();
	$m['minus'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['BinaryOperation']['__init__'](self, block, ' - ', translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['BinaryOperation']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('minus', $p['tuple']($bases), $data);
	})();
	$m['multiply'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['BinaryOperation']['__init__'](self, block, ' * ', translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['BinaryOperation']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('multiply', $p['tuple']($bases), $data);
	})();
	$m['divide'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['BinaryOperation']['__init__'](self, block, ' / ', translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['BinaryOperation']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('divide', $p['tuple']($bases), $data);
	})();
	$m['equals'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['BinaryOperation']['__init__'](self, block, ' == ', translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['BinaryOperation']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('equals', $p['tuple']($bases), $data);
	})();
	$m['lesser'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['BinaryOperation']['__init__'](self, block, ' < ', translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['BinaryOperation']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('lesser', $p['tuple']($bases), $data);
	})();
	$m['greater'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['BinaryOperation']['__init__'](self, block, ' > ', translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['BinaryOperation']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('greater', $p['tuple']($bases), $data);
	})();
	$m['lesser_equals'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['BinaryOperation']['__init__'](self, block, ' <= ', translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['BinaryOperation']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('lesser_equals', $p['tuple']($bases), $data);
	})();
	$m['greater_equals'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['BinaryOperation']['__init__'](self, block, ' >= ', translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['BinaryOperation']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('greater_equals', $p['tuple']($bases), $data);
	})();
	$m['not_equals'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['BinaryOperation']['__init__'](self, block, ' != ', translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['BinaryOperation']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('not_equals', $p['tuple']($bases), $data);
	})();
	$m['and_'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['BinaryOperation']['__init__'](self, block, ' && ', translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['BinaryOperation']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('and_', $p['tuple']($bases), $data);
	})();
	$m['or_'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['BinaryOperation']['__init__'](self, block, ' || ', translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['BinaryOperation']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('or_', $p['tuple']($bases), $data);
	})();
	$m['not_'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add76,$add77,$add75,ret,$add78,translatorBlock;
			ret = '!(';
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			ret = $p['__op_add']($add75=ret,$add76=translatorBlock['toCode']());
			ret = $p['__op_add']($add77=ret,$add78=')');
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('not_', $p['tuple']($bases), $data);
	})();
	$m['true_'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return 'true';
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('true_', $p['tuple']($bases), $data);
	})();
	$m['false_'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return 'false';
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('false_', $p['tuple']($bases), $data);
	})();
	$m['pinMode'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return '';
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('pinMode', $p['tuple']($bases), $data);
	})();
	$m['digitalRead'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$cls_definition['UCA_DIGITAL_READ_DEFINE'] = 'boolean syst_digitalRead(int pinNumber){\npinMode(pinNumber, INPUT);\nreturn digitalRead(pinNumber);\n}\n\n';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $or1,$or2,$add83,$add82,$add80,$add86,number,ret,$add79,$add85,translatorBlock,$add84,$add81;
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			if ($p['bool'](($p['bool']($or1=$p['isinstance'](translatorBlock, (typeof Const == "undefined"?$m['Const']:Const)))?$or1:$p['isinstance'](translatorBlock, (typeof getNumericVar == "undefined"?$m['getNumericVar']:getNumericVar))))) {
				number = translatorBlock['toCode']();
				self['translator']['addInputPin'](number);
				ret = 'digitalRead(';
				ret = $p['__op_add']($add79=ret,$add80=number);
				ret = $p['__op_add']($add81=ret,$add82=')');
				return ret;
			}
			else {
				self['translator']['addDefinitionCommand']($p['getattr'](self, 'UCA_DIGITAL_READ_DEFINE'));
				ret = 'syst_digitalRead(';
				ret = $p['__op_add']($add83=ret,$add84=translatorBlock['toCode']());
				ret = $p['__op_add']($add85=ret,$add86=')');
				return ret;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('digitalRead', $p['tuple']($bases), $data);
	})();
	$m['analogRead'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add89,$add88,$add90,$add87,ret,translatorBlock;
			ret = 'analogRead(';
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			ret = $p['__op_add']($add87=ret,$add88=translatorBlock['toCode']());
			ret = $p['__op_add']($add89=ret,$add90=')');
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('analogRead', $p['tuple']($bases), $data);
	})();
	$m['digitalWrite'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$cls_definition['UCA_DIGITAL_WRITE_DEFINE'] = 'void syst_digitalWrite(int pinNumber, boolean status){\npinMode(pinNumber, OUTPUT);\ndigitalWrite(pinNumber, status);\n}\n';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var number,$add105,$add104,ret,translatorBlock,$add108,$add101,$add100,$add103,$add102,$add98,$add99,$add107,$add106,$add94,$add95,$add96,$add97,$add91,$add92,$add93;
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			if ($p['bool']($p['isinstance'](translatorBlock, (typeof Const == "undefined"?$m['Const']:Const)))) {
				number = translatorBlock['toCode']();
				self['translator']['addOutputPin'](number);
				ret = 'digitalWrite(';
				ret = $p['__op_add']($add91=ret,$add92=number);
				ret = $p['__op_add']($add93=ret,$add94=', ');
				translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](1);
				if ($p['bool']($p['isinstance'](translatorBlock, (typeof Const == "undefined"?$m['Const']:Const)))) {
					ret = $p['__op_add']($add95=ret,$add96=$m['DIGITAL_VALUES']['__getitem__'](translatorBlock['toCode']()));
				}
				else {
					ret = $p['__op_add']($add97=ret,$add98=translatorBlock['toCode']());
				}
				ret = $p['__op_add']($add99=ret,$add100=');\n');
				return ret;
			}
			else {
				self['translator']['addDefinitionCommand']($p['getattr'](self, 'UCA_DIGITAL_WRITE_DEFINE'));
				ret = 'syst_digitalWrite(';
				ret = $p['__op_add']($add101=ret,$add102=translatorBlock['toCode']());
				ret = $p['__op_add']($add103=ret,$add104=', ');
				translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](1);
				ret = $p['__op_add']($add105=ret,$add106=$m['DIGITAL_VALUES']['__getitem__'](translatorBlock['toCode']()));
				ret = $p['__op_add']($add107=ret,$add108=');\n');
				return ret;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('digitalWrite', $p['tuple']($bases), $data);
	})();
	$m['analogWrite'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var portNum,$add109,$add115,$add112,$add113,value,$add111,$add116,$add110,translatorBlock,$add114,ret;
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			portNum = translatorBlock['toCode']();
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](1);
			value = translatorBlock['toCode']();
			self['translator']['addOutputPin'](portNum);
			ret = $p['__op_add']($add115=$p['__op_add']($add113=$p['__op_add']($add111=$p['__op_add']($add109='analogWrite(',$add110=portNum),$add112=', '),$add114=value),$add116=');\n');
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('analogWrite', $p['tuple']($bases), $data);
	})();
	$m['Const'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(code) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				code = arguments[1];
			}

			self['code'] = code;
			return null;
		}
	, 1, [null,null,['self'],['code']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'code');
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Const', $p['tuple']($bases), $data);
	})();
	$m['setNumericVar'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add126,internalVariableName,$add124,$add123,$add121,$add118,$add120,$add117,$add119,$add125,ret,translatorBlock,$add122;
			internalVariableName = self['translator']['getNumberVariable'](self['getRequiredVariableName']());
			if ($p['bool']($p['op_eq'](internalVariableName, null))) {
				internalVariableName = self['translator']['buildVariableName']($p['getattr']($p['getattr'](self, 'block'), 'varName'));
				self['translator']['addNumberVariable']($p['getattr']($p['getattr'](self, 'block'), 'varName'), internalVariableName);
				self['translator']['addDefinitionCommand']($p['__op_add']($add119=$p['__op_add']($add117='float ',$add118=internalVariableName),$add120=';'));
			}
			ret = $p['__op_add']($add121=internalVariableName,$add122=' = ');
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			ret = $p['__op_add']($add123=ret,$add124=translatorBlock['toCode']());
			ret = $p['__op_add']($add125=ret,$add126=';\n');
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('setNumericVar', $p['tuple']($bases), $data);
	})();
	$m['getNumericVar'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add127,internalVariableName,$add130,$add131,$add132,$add129,$add128;
			internalVariableName = self['translator']['getNumberVariable'](self['getRequiredVariableName']());
			if ($p['bool']($p['op_eq'](internalVariableName, null))) {
				internalVariableName = self['translator']['buildVariableName']($p['getattr']($p['getattr'](self, 'block'), 'varName'));
				self['translator']['addNumberVariable']($p['getattr']($p['getattr'](self, 'block'), 'varName'), internalVariableName);
				self['translator']['addDefinitionCommand']($p['__op_add']($add129=$p['__op_add']($add127='float ',$add128=internalVariableName),$add130=';'));
				self['translator']['addSetupCommand']($p['__op_add']($add131=internalVariableName,$add132=' = 0;\n'));
			}
			return internalVariableName;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('getNumericVar', $p['tuple']($bases), $data);
	})();
	$m['incNumericVar'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add134,$add135,internalVariableName,$add137,$add133,$add138,$add136,ret,translatorBlock;
			internalVariableName = $m['getNumericVar']($p['getattr'](self, 'block'), $p['getattr'](self, 'translator'))['toCode']();
			ret = $p['__op_add']($add133=internalVariableName,$add134=' += ');
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			ret = $p['__op_add']($add135=ret,$add136=translatorBlock['toCode']());
			ret = $p['__op_add']($add137=ret,$add138=';\n');
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('incNumericVar', $p['tuple']($bases), $data);
	})();
	$m['decNumericVar'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var internalVariableName,$add143,$add139,ret,$add144,$add141,$add140,translatorBlock,$add142;
			internalVariableName = $m['getNumericVar']($p['getattr'](self, 'block'), $p['getattr'](self, 'translator'))['toCode']();
			ret = $p['__op_add']($add139=internalVariableName,$add140=' -= ');
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			ret = $p['__op_add']($add141=ret,$add142=translatorBlock['toCode']());
			ret = $p['__op_add']($add143=ret,$add144=';\n');
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('decNumericVar', $p['tuple']($bases), $data);
	})();
	$m['setLogicVar'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add152,internalVariableName,$add154,$add150,ret,$add145,$add153,$add147,$add146,$add156,translatorBlock,$add155,$add151,$add149,$add148;
			internalVariableName = self['translator']['getBooleanVariable'](self['getRequiredVariableName']());
			if ($p['bool']($p['op_eq'](internalVariableName, null))) {
				internalVariableName = self['translator']['buildVariableName']($p['getattr']($p['getattr'](self, 'block'), 'varName'));
				self['translator']['addBooleanVariable']($p['getattr']($p['getattr'](self, 'block'), 'varName'), internalVariableName);
				self['translator']['addDefinitionCommand']($p['__op_add']($add147=$p['__op_add']($add145='boolean ',$add146=internalVariableName),$add148=';'));
			}
			ret = $p['__op_add']($add149=internalVariableName,$add150=' = ');
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			if ($p['bool']($p['isinstance'](translatorBlock, $m['Const']))) {
				ret = $p['__op_add']($add151=ret,$add152=$m['LOGIC_VALUES']['__getitem__'](translatorBlock['toCode']()));
			}
			else {
				ret = $p['__op_add']($add153=ret,$add154=translatorBlock['toCode']());
			}
			ret = $p['__op_add']($add155=ret,$add156=';\n');
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('setLogicVar', $p['tuple']($bases), $data);
	})();
	$m['getLogicVar'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var internalVariableName,$add162,$add160,$add157,$add158,$add159,$add161;
			internalVariableName = self['translator']['getBooleanVariable'](self['getRequiredVariableName']());
			if ($p['bool']($p['op_eq'](internalVariableName, null))) {
				internalVariableName = self['translator']['buildVariableName']($p['getattr']($p['getattr'](self, 'block'), 'varName'));
				self['translator']['addBooleanVariable']($p['getattr']($p['getattr'](self, 'block'), 'varName'), internalVariableName);
				self['translator']['addDefinitionCommand']($p['__op_add']($add159=$p['__op_add']($add157='boolean ',$add158=internalVariableName),$add160=';'));
				self['translator']['addSetupCommand']($p['__op_add']($add161=internalVariableName,$add162=' = true;\n'));
			}
			return internalVariableName;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('getLogicVar', $p['tuple']($bases), $data);
	})();
	$m['getAlphaNumericVar'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var internalVariableName,$add168,$add163,$add167,$add166,$add165,$add164;
			internalVariableName = self['translator']['getStringVariable'](self['getRequiredVariableName']());
			if ($p['bool']($p['op_eq'](internalVariableName, null))) {
				internalVariableName = self['translator']['buildVariableName']($p['getattr']($p['getattr'](self, 'block'), 'varName'));
				self['translator']['addStringVariable']($p['getattr']($p['getattr'](self, 'block'), 'varName'), internalVariableName);
				self['translator']['addDefinitionCommand']($p['__op_add']($add165=$p['__op_add']($add163='String ',$add164=internalVariableName),$add166=';'));
				self['translator']['addSetupCommand']($p['__op_add']($add167=internalVariableName,$add168=' = "";\n'));
			}
			return internalVariableName;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('getAlphaNumericVar', $p['tuple']($bases), $data);
	})();
	$m['setAlphaNumericVar'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add178,$add179,$add169,$add182,$add184,$add170,$add171,$add173,$add174,internalVariableName,ret,$add175,$add176,translatorBlock,$add181,$add180,$add183,$add177,$add172;
			internalVariableName = self['translator']['getStringVariable'](self['getRequiredVariableName']());
			if ($p['bool']($p['op_eq'](internalVariableName, null))) {
				internalVariableName = self['translator']['buildVariableName']($p['getattr']($p['getattr'](self, 'block'), 'varName'));
				self['translator']['addStringVariable']($p['getattr']($p['getattr'](self, 'block'), 'varName'), internalVariableName);
				self['translator']['addDefinitionCommand']($p['__op_add']($add171=$p['__op_add']($add169='String ',$add170=internalVariableName),$add172=';'));
			}
			ret = $p['__op_add']($add173=internalVariableName,$add174=' = ');
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			if ($p['bool'](($p['getattr']($p['getattr']($p['getattr'](self, 'block'), 'holderArguments')['__getitem__'](0), 'subBlock') !== null))) {
				ret = $p['__op_add']($add177=ret,$add178=$p['__op_add']($add175=translatorBlock['toCode'](),$add176=';\n'));
			}
			else {
				ret = $p['__op_add']($add183=ret,$add184=$p['__op_add']($add181=$p['__op_add']($add179='"',$add180=translatorBlock['toCode']()),$add182='";\n'));
			}
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('setAlphaNumericVar', $p['tuple']($bases), $data);
	})();
	$m['println'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add194,$add192,$add193,$add190,$add191,ret,$add189,$add188,translatorBlock,$add185,$add187,$add186;
			self['translator']['addSetupCommand']('Serial.begin(9600);\n');
			ret = 'Serial.println(';
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			if ($p['bool']($p['isinstance'](translatorBlock, $m['Const']))) {
				ret = $p['__op_add']($add189=ret,$add190=$p['__op_add']($add187=$p['__op_add']($add185='"',$add186=translatorBlock['toCode']()),$add188='"'));
			}
			else {
				ret = $p['__op_add']($add191=ret,$add192=translatorBlock['toCode']());
			}
			ret = $p['__op_add']($add193=ret,$add194=');\n');
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('println', $p['tuple']($bases), $data);
	})();
	$m['available'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['translator']['addSetupCommand']('Serial.begin(9600);\n');
			return 'Serial.available()';
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('available', $p['tuple']($bases), $data);
	})();
	$m['getMsg'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$cls_definition['GET_MSG_DEFINE'] = 'String syst_getMsg(){\nString content = "";\nchar character;\nwhile(Serial.available()){\ncharacter = Serial.read();\ncontent.concat(character);\ndelay(10);\n}\nreturn content;\n}';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['translator']['addDefinitionCommand']($p['getattr'](self, 'GET_MSG_DEFINE'));
			self['translator']['addSetupCommand']('Serial.begin(9600);\n');
			return 'syst_getMsg()';
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('getMsg', $p['tuple']($bases), $data);
	})();
	$m['waitForAnyMsg'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$cls_definition['GET_MSG_DEFINE'] = 'String syst_getMsg(){\nString content = "";\nchar character;\nwhile(Serial.available()){\ncharacter = Serial.read();\ncontent.concat(character);\ndelay(10);\n}\nreturn content;\n}';
		$cls_definition['WAIT_FOR_ANY_MSG_DEFINE'] = 'String syst_waitForAnyMsg(){\nwhile(!Serial.available());\nreturn syst_getMsg();\n}';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['translator']['addDefinitionCommand']($p['getattr'](self, 'GET_MSG_DEFINE'));
			self['translator']['addDefinitionCommand']($p['getattr'](self, 'WAIT_FOR_ANY_MSG_DEFINE'));
			self['translator']['addSetupCommand']('Serial.begin(9600);\n');
			return 'syst_waitForAnyMsg()';
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('waitForAnyMsg', $p['tuple']($bases), $data);
	})();
	$m['waitForTheMsg'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$cls_definition['GET_MSG_DEFINE'] = 'String syst_getMsg(){\nString content = "";\nchar character;\nwhile(Serial.available()){\ncharacter = Serial.read();\ncontent.concat(character);\ndelay(10);\n}\nreturn content;\n}';
		$cls_definition['WAIT_FOR_THE_MSG_DEFINE'] = 'void syst_waitForTheMsg(String s){\ndo{\nwhile(!Serial.available());\n}while(syst_getMsg() != s);\n}';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add196,$add197,$add195,$add198,$add199,$add202,translatorBlock,msg,$add200,$add201;
			self['translator']['addDefinitionCommand']($p['getattr'](self, 'GET_MSG_DEFINE'));
			self['translator']['addDefinitionCommand']($p['getattr'](self, 'WAIT_FOR_THE_MSG_DEFINE'));
			self['translator']['addSetupCommand']('Serial.begin(9600);\n');
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			if ($p['bool']($p['isinstance'](translatorBlock, $m['Const']))) {
				msg = $p['__op_add']($add197=$p['__op_add']($add195='"',$add196=translatorBlock['toCode']()),$add198='"');
			}
			else {
				msg = translatorBlock['toCode']();
			}
			return $p['__op_add']($add201=$p['__op_add']($add199='syst_waitForTheMsg(',$add200=msg),$add202=');');
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('waitForTheMsg', $p['tuple']($bases), $data);
	})();
	$m['intToStr'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$cls_definition['UCA_FLOAT_TO_STR_DEFINE'] = 'String syst_floatToStr(float number){\nchar msg[25];\ndtostrf(number, 1, 2, msg);\nreturn msg;\n}\n';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var ret,translatorBlock,$add203,$add206,$add204,$add205;
			self['translator']['addHeaderFile']('stdlib.h');
			self['translator']['addDefinitionCommand']($p['getattr'](self, 'UCA_FLOAT_TO_STR_DEFINE'));
			ret = 'syst_floatToStr(';
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			ret = $p['__op_add']($add203=ret,$add204=translatorBlock['toCode']());
			ret = $p['__op_add']($add205=ret,$add206=')');
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('intToStr', $p['tuple']($bases), $data);
	})();
	$m['boolToStr'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$cls_definition['UCA_BOOL_TO_STR_DEFINE'] = 'String syst_boolToStr(boolean status){\nif(status) return "VERDADEIRO";\nelse return "FALSO";\n}\n';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var ret,$add210,$add208,$add209,translatorBlock,$add207;
			self['translator']['addDefinitionCommand']($p['getattr'](self, 'UCA_BOOL_TO_STR_DEFINE'));
			ret = 'syst_boolToStr(';
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			ret = $p['__op_add']($add207=ret,$add208=translatorBlock['toCode']());
			ret = $p['__op_add']($add209=ret,$add210=')');
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('boolToStr', $p['tuple']($bases), $data);
	})();
	$m['StrToInt'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$cls_definition['SRT_TO_FLOAT_DEFINE'] = 'float syst_strToFloat(String msg){\nchar _msg[sizeof(msg)];\nmsg.toCharArray(_msg, sizeof(_msg));\nreturn atof(_msg);\n}\n';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add218,translatorBlock,$add215,$add214,$add217,$add216,$add211,$add213,$add212;
			self['translator']['addDefinitionCommand']($p['getattr'](self, 'SRT_TO_FLOAT_DEFINE'));
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			if ($p['bool']($p['isinstance'](translatorBlock, $m['Const']))) {
				return $p['__op_add']($add213=$p['__op_add']($add211='atoi("',$add212=translatorBlock['toCode']()),$add214='")');
			}
			return $p['__op_add']($add217=$p['__op_add']($add215='syst_strToFloat(',$add216=translatorBlock['toCode']()),$add218=')');
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('StrToInt', $p['tuple']($bases), $data);
	})();
	$m['glue'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add241,$add242,ret,$add233,$add232,$add231,$add230,$add219,$add236,$add235,$add234,$add237,$add239,$add238,$and2,$add240,$and1,translatorBlock1,translatorBlock0,$add220,$add221,$add222,$add223,$add224,$add225,$add226,$add227,$add228,$add229;
			translatorBlock0 = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			translatorBlock1 = self['getRequiredTranslatorBlockAtArgumentsSocket'](1);
			if ($p['bool'](($p['bool']($and1=$p['isinstance'](translatorBlock0, $m['Const']))?$p['isinstance'](translatorBlock1, $m['Const']):$and1))) {
				return $p['__op_add']($add223=$p['__op_add']($add221=$p['__op_add']($add219='"',$add220=translatorBlock0['toCode']()),$add222=translatorBlock1['toCode']()),$add224='"');
			}
			ret = '';
			if ($p['bool']($p['isinstance'](translatorBlock0, $m['Const']))) {
				ret = $p['__op_add']($add229=ret,$add230=$p['__op_add']($add227=$p['__op_add']($add225='"',$add226=translatorBlock0['toCode']()),$add228='"'));
			}
			else {
				ret = $p['__op_add']($add231=ret,$add232=translatorBlock0['toCode']());
			}
			ret = $p['__op_add']($add233=ret,$add234=' + ');
			if ($p['bool']($p['isinstance'](translatorBlock1, $m['Const']))) {
				ret = $p['__op_add']($add239=ret,$add240=$p['__op_add']($add237=$p['__op_add']($add235='"',$add236=translatorBlock1['toCode']()),$add238='"'));
			}
			else {
				ret = $p['__op_add']($add241=ret,$add242=translatorBlock1['toCode']());
			}
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('glue', $p['tuple']($bases), $data);
	})();
	$m['AlphanumericOperation'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, operation, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				operation = arguments[2];
				translator = arguments[3];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			self['operation'] = operation;
			return null;
		}
	, 1, [null,null,['self'],['block'],['operation'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add260,$add261,$add262,ret,translatorBlock,$add259,$add258,$add251,$add250,$add253,$add252,$add255,$add254,$add257,$add256,$add246,$add247,$add244,$add245,$add243,$add248,$add249;
			ret = '(';
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			if ($p['bool']($p['isinstance'](translatorBlock, $m['Const']))) {
				ret = $p['__op_add']($add247=ret,$add248=$p['__op_add']($add245=$p['__op_add']($add243='"',$add244=translatorBlock['toCode']()),$add246='"'));
			}
			else {
				ret = $p['__op_add']($add249=ret,$add250=translatorBlock['toCode']());
			}
			ret = $p['__op_add']($add251=ret,$add252=$p['getattr'](self, 'operation'));
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](1);
			if ($p['bool']($p['isinstance'](translatorBlock, $m['Const']))) {
				ret = $p['__op_add']($add257=ret,$add258=$p['__op_add']($add255=$p['__op_add']($add253='"',$add254=translatorBlock['toCode']()),$add256='"'));
			}
			else {
				ret = $p['__op_add']($add259=ret,$add260=translatorBlock['toCode']());
			}
			ret = $p['__op_add']($add261=ret,$add262=')');
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('AlphanumericOperation', $p['tuple']($bases), $data);
	})();
	$m['str_not_equals'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['AlphanumericOperation']['__init__'](self, block, ' != ', translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['AlphanumericOperation']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('str_not_equals', $p['tuple']($bases), $data);
	})();
	$m['str_equals'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['AlphanumericOperation']['__init__'](self, block, ' == ', translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['AlphanumericOperation']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('str_equals', $p['tuple']($bases), $data);
	})();
	$m['UnaryFunction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, operation, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				operation = arguments[2];
				translator = arguments[3];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			self['operation'] = operation;
			return null;
		}
	, 1, [null,null,['self'],['block'],['operation'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add268,$add264,$add265,$add267,ret,$add263,translatorBlock,$add266;
			ret = $p['__op_add']($add263=$p['getattr'](self, 'operation'),$add264='(');
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			ret = $p['__op_add']($add265=ret,$add266=translatorBlock['toCode']());
			ret = $p['__op_add']($add267=ret,$add268=')');
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('UnaryFunction', $p['tuple']($bases), $data);
	})();
	$m['BinaryFunction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, operation, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				operation = arguments[2];
				translator = arguments[3];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			self['operation'] = operation;
			return null;
		}
	, 1, [null,null,['self'],['block'],['operation'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add269,$add278,$add277,$add276,$add274,$add273,$add272,$add271,$add270,ret,translatorBlock,$add275;
			ret = $p['__op_add']($add269=$p['getattr'](self, 'operation'),$add270='(');
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			ret = $p['__op_add']($add271=ret,$add272=translatorBlock['toCode']());
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](1);
			ret = $p['__op_add']($add273=ret,$add274=', ');
			ret = $p['__op_add']($add275=ret,$add276=translatorBlock['toCode']());
			ret = $p['__op_add']($add277=ret,$add278=')');
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('BinaryFunction', $p['tuple']($bases), $data);
	})();
	$m['min_'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['BinaryFunction']['__init__'](self, block, 'min', translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['BinaryFunction']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('min_', $p['tuple']($bases), $data);
	})();
	$m['max_'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['BinaryFunction']['__init__'](self, block, 'max', translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['BinaryFunction']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('max_', $p['tuple']($bases), $data);
	})();
	$m['sqrt_'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add282,$add280,$add281,$add279,ret,translatorBlock;
			ret = 'sqrt(';
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			ret = $p['__op_add']($add279=ret,$add280=translatorBlock['toCode']());
			ret = $p['__op_add']($add281=ret,$add282=')');
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('sqrt_', $p['tuple']($bases), $data);
	})();
	$m['abs_'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['UnaryFunction']['__init__'](self, block, 'abs', translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['UnaryFunction']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('abs_', $p['tuple']($bases), $data);
	})();
	$m['round_'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['UnaryFunction']['__init__'](self, block, 'round', translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['UnaryFunction']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('round_', $p['tuple']($bases), $data);
	})();
	$m['sin_'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['UnaryFunction']['__init__'](self, block, 'sin', translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['UnaryFunction']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('sin_', $p['tuple']($bases), $data);
	})();
	$m['cos_'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['UnaryFunction']['__init__'](self, block, 'cos', translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['UnaryFunction']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('cos_', $p['tuple']($bases), $data);
	})();
	$m['tan_'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['UnaryFunction']['__init__'](self, block, 'tan', translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['UnaryFunction']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('tan_', $p['tuple']($bases), $data);
	})();
	$m['millis'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var ret;
			ret = 'millis()';
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('millis', $p['tuple']($bases), $data);
	})();
	$m['random'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add283,$add286,$add284,$add285,ret,translatorBlock;
			self['translator']['addSetupCommand']('randomSeed(analogRead(A0) + analogRead(A1) + analogRead(A2));\n');
			ret = 'random(';
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			ret = $p['__op_add']($add285=ret,$add286=$p['__op_add']($add283=translatorBlock['toCode'](),$add284=')'));
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('random', $p['tuple']($bases), $data);
	})();
	$m['map_'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add287,$add288,$add289,ret,translatorBlock,$add290;
			ret = 'map!!(';
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			ret = $p['__op_add']($add287=ret,$add288=translatorBlock['toCode']());
			ret = $p['__op_add']($add289=ret,$add290=')');
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('map_', $p['tuple']($bases), $data);
	})();
	$m['random_min_max'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add295,$add294,$add297,$add296,$add291,$add293,$add292,$add298,ret,translatorBlock;
			self['translator']['addSetupCommand']('randomSeed(analogRead(A0) + analogRead(A1) + analogRead(A2));\n');
			ret = 'random(';
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			ret = $p['__op_add']($add293=ret,$add294=$p['__op_add']($add291=translatorBlock['toCode'](),$add292=', '));
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](1);
			ret = $p['__op_add']($add297=ret,$add298=$p['__op_add']($add295=translatorBlock['toCode'](),$add296=')'));
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('random_min_max', $p['tuple']($bases), $data);
	})();
	$m['hat'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add300,$add299,translatorBlock,ret;
			ret = '';
			translatorBlock = self['nextTranslatorBlock']();
			while ($p['bool']((translatorBlock !== null))) {
				ret = $p['__op_add']($add299=ret,$add300=translatorBlock['toCode']());
				translatorBlock = translatorBlock['nextTranslatorBlock']();
			}
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('hat', $p['tuple']($bases), $data);
	})();
	$m['commandType'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var definition,$add310,$add305,$add311,$add312,$add303,$add302,$add301,internalDefinitionName,$add307,$add306,translatorBlock,$add304,$add309,$add308;
			internalDefinitionName = self['translator']['getDefinitionMethod']($p['getattr']($p['getattr'](self, 'block'), 'varName'));
			if ($p['bool']($p['op_eq'](internalDefinitionName, null))) {
				internalDefinitionName = self['translator']['buildDefinitionName']($p['getattr']($p['getattr'](self, 'block'), 'varName'));
				self['translator']['addDefinitionMethod']($p['getattr']($p['getattr'](self, 'block'), 'varName'), internalDefinitionName);
				translatorBlock = self['getRequiredTranslatorHatBlock']();
				definition = $p['__op_add']($add305=$p['__op_add']($add303=$p['__op_add']($add301=self['getReturnType'](),$add302=' '),$add304=internalDefinitionName),$add306='(){\n');
				definition = $p['__op_add']($add309=definition,$add310=$p['__op_add']($add307=translatorBlock['toCode'](),$add308='}\n'));
				self['translator']['addDefinitionCommand'](definition);
			}
			return $p['__op_add']($add311=internalDefinitionName,$add312='();\n');
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('commandType', $p['tuple']($bases), $data);
	})();
	$m['numericType'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var definition,$add324,$add316,$add328,$add320,$add325,internalDefinitionName,$add314,$add315,translatorBlock,$add317,$add318,$add319,$add327,$add326,$add321,$add313,$add323,$add322;
			internalDefinitionName = self['translator']['getDefinitionMethod']($p['getattr']($p['getattr'](self, 'block'), 'varName'));
			if ($p['bool']($p['op_eq'](internalDefinitionName, null))) {
				internalDefinitionName = self['translator']['buildDefinitionName']($p['getattr']($p['getattr'](self, 'block'), 'varName'));
				self['translator']['addDefinitionMethod']($p['getattr']($p['getattr'](self, 'block'), 'varName'), internalDefinitionName);
				translatorBlock = self['getRequiredTranslatorHatBlock']();
				definition = $p['__op_add']($add317=$p['__op_add']($add315=$p['__op_add']($add313=self['getReturnType'](),$add314=' '),$add316=internalDefinitionName),$add318='(){\n');
				definition = $p['__op_add']($add319=definition,$add320=translatorBlock['toCode']());
				translatorBlock = self['getRequiredTranslatorReturnBlock']();
				definition = $p['__op_add']($add325=definition,$add326=$p['__op_add']($add323=$p['__op_add']($add321='return ',$add322=translatorBlock['toCode']()),$add324=';\n}'));
				self['translator']['addDefinitionCommand'](definition);
			}
			return $p['__op_add']($add327=internalDefinitionName,$add328='()');
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('numericType', $p['tuple']($bases), $data);
	})();
	$m['logicType'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var definition,$add339,$add344,$add343,$add342,$add341,$add340,$add338,internalDefinitionName,$add329,translatorBlock,$add332,$add333,$add330,$add331,$add336,$add337,$add334,$add335;
			internalDefinitionName = self['translator']['getDefinitionMethod']($p['getattr']($p['getattr'](self, 'block'), 'varName'));
			if ($p['bool']($p['op_eq'](internalDefinitionName, null))) {
				internalDefinitionName = self['translator']['buildDefinitionName']($p['getattr']($p['getattr'](self, 'block'), 'varName'));
				self['translator']['addDefinitionMethod']($p['getattr']($p['getattr'](self, 'block'), 'varName'), internalDefinitionName);
				translatorBlock = self['getRequiredTranslatorHatBlock']();
				definition = $p['__op_add']($add333=$p['__op_add']($add331=$p['__op_add']($add329=self['getReturnType'](),$add330=' '),$add332=internalDefinitionName),$add334='(){\n');
				definition = $p['__op_add']($add335=definition,$add336=translatorBlock['toCode']());
				translatorBlock = self['getRequiredTranslatorReturnBlock']();
				definition = $p['__op_add']($add341=definition,$add342=$p['__op_add']($add339=$p['__op_add']($add337='return ',$add338=translatorBlock['toCode']()),$add340=';\n}'));
				self['translator']['addDefinitionCommand'](definition);
			}
			return $p['__op_add']($add343=internalDefinitionName,$add344='()');
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('logicType', $p['tuple']($bases), $data);
	})();
	$m['alphaNumericType'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var definition,$add356,$add359,$add349,$add348,$add347,$add346,$add357,$add350,$add351,$add352,$add353,$add354,internalDefinitionName,translatorBlock,$add355,$add360,$add358,$add345;
			internalDefinitionName = self['translator']['getDefinitionMethod']($p['getattr']($p['getattr'](self, 'block'), 'varName'));
			if ($p['bool']($p['op_eq'](internalDefinitionName, null))) {
				internalDefinitionName = self['translator']['buildDefinitionName']($p['getattr']($p['getattr'](self, 'block'), 'varName'));
				self['translator']['addDefinitionMethod']($p['getattr']($p['getattr'](self, 'block'), 'varName'), internalDefinitionName);
				translatorBlock = self['getRequiredTranslatorHatBlock']();
				definition = $p['__op_add']($add349=$p['__op_add']($add347=$p['__op_add']($add345=self['getReturnType'](),$add346=' '),$add348=internalDefinitionName),$add350='(){\n');
				definition = $p['__op_add']($add351=definition,$add352=translatorBlock['toCode']());
				translatorBlock = self['getRequiredTranslatorReturnBlock']();
				definition = $p['__op_add']($add357=definition,$add358=$p['__op_add']($add355=$p['__op_add']($add353='return ',$add354=translatorBlock['toCode']()),$add356=';\n}'));
				self['translator']['addDefinitionCommand'](definition);
			}
			return $p['__op_add']($add359=internalDefinitionName,$add360='()');
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('alphaNumericType', $p['tuple']($bases), $data);
	})();
	$m['setLed'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add369,$add368,$add361,$add363,$add362,$add365,$add364,$add367,$add366,internalVariableName,ret,$add376,$add377,$add374,$add375,$add372,$add373,translatorBlock,$add371,$add378,$add370;
			internalVariableName = self['translator']['getNumberVariable'](self['getRequiredVariableName']());
			if ($p['bool']($p['op_eq'](internalVariableName, null))) {
				internalVariableName = self['getRequiredVariableName']();
				self['translator']['addNumberVariable']($p['getattr']($p['getattr'](self, 'block'), 'varName'), internalVariableName);
				self['translator']['addDefinitionCommand']($p['__op_add']($add367=$p['__op_add']($add365=$p['__op_add']($add363=$p['__op_add']($add361='const int ',$add362=internalVariableName),$add364=' = '),$add366=self['getRequiredComponentPin'](0)),$add368=';'));
				self['translator']['addOutputPin'](internalVariableName);
			}
			ret = $p['__op_add']($add371=$p['__op_add']($add369='digitalWrite(',$add370=internalVariableName),$add372=', ');
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			if ($p['bool']($p['isinstance'](translatorBlock, $m['Const']))) {
				ret = $p['__op_add']($add373=ret,$add374=$m['LED_VALUES']['__getitem__'](translatorBlock['toCode']()));
			}
			else {
				ret = $p['__op_add']($add375=ret,$add376=translatorBlock['toCode']());
			}
			ret = $p['__op_add']($add377=ret,$add378=');\n');
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('setLed', $p['tuple']($bases), $data);
	})();
	$m['setBrightnessLed'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add384,internalVariableName,$add393,$add392,$add394,ret,$add390,$add389,$add388,translatorBlock,$add391,$add383,$add382,$add381,$add380,$add387,$add386,$add385,$add379;
			internalVariableName = self['translator']['getNumberVariable'](self['getRequiredVariableName']());
			if ($p['bool']($p['op_eq'](internalVariableName, null))) {
				internalVariableName = self['getRequiredVariableName']();
				self['translator']['addNumberVariable']($p['getattr']($p['getattr'](self, 'block'), 'varName'), internalVariableName);
				self['translator']['addDefinitionCommand']($p['__op_add']($add385=$p['__op_add']($add383=$p['__op_add']($add381=$p['__op_add']($add379='const int ',$add380=internalVariableName),$add382=' = '),$add384=self['getRequiredComponentPin'](0)),$add386=';'));
				self['translator']['addOutputPin'](internalVariableName);
			}
			ret = $p['__op_add']($add389=$p['__op_add']($add387='analogWrite(',$add388=internalVariableName),$add390=', ');
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			ret = $p['__op_add']($add391=ret,$add392=translatorBlock['toCode']());
			ret = $p['__op_add']($add393=ret,$add394=');\n');
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('setBrightnessLed', $p['tuple']($bases), $data);
	})();
	$m['blinkLed'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$cls_definition['BLINK'] = 'void blinkLed(int ledPin, int qty, int time){\nfor (int i = 0; i < qty; i++) {  \ndigitalWrite(ledPin, HIGH);  \ndelay((500*time)/qty);  \ndigitalWrite(ledPin, LOW);\ndelay((500*time)/qty);    \n}  \n}';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add408,$add409,$add404,$add405,$add406,$add407,$add400,$add401,$add402,$add403,internalVariableName,ret,translatorBlock,$add414,$add413,$add412,$add411,$add410,$add398,$add399,$add395,$add396,$add397;
			internalVariableName = self['translator']['getNumberVariable'](self['getRequiredVariableName']());
			if ($p['bool']($p['op_eq'](internalVariableName, null))) {
				internalVariableName = self['getRequiredVariableName']();
				self['translator']['addNumberVariable']($p['getattr']($p['getattr'](self, 'block'), 'varName'), internalVariableName);
				self['translator']['addDefinitionCommand']($p['__op_add']($add401=$p['__op_add']($add399=$p['__op_add']($add397=$p['__op_add']($add395='const int ',$add396=internalVariableName),$add398=' = '),$add400=self['getRequiredComponentPin'](0)),$add402=';'));
				self['translator']['addOutputPin'](internalVariableName);
				self['translator']['addDefinitionCommand']($p['getattr'](self, 'BLINK'));
			}
			ret = $p['__op_add']($add405=$p['__op_add']($add403='blinkLed(',$add404=internalVariableName),$add406=', ');
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			ret = $p['__op_add']($add409=ret,$add410=$p['__op_add']($add407=translatorBlock['toCode'](),$add408=', '));
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](1);
			ret = $p['__op_add']($add413=ret,$add414=$p['__op_add']($add411=translatorBlock['toCode'](),$add412=');\n'));
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('blinkLed', $p['tuple']($bases), $data);
	})();
	$m['setRGBLed'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add472,$add456,$add468,$add455,$add474,$add464,$add440,$add452,$add447,$add441,$add476,$add442,ret,$add453,$add417,$add451,internalVariableName_R,$add457,$add450,translatorBlock,$add416,$add475,$add444,$add459,$add458,$add471,$add433,$add473,$add445,$add439,$add438,$add478,$add446,$add419,$add418,$add431,$add430,$add415,$add432,$add435,$add434,$add437,$add436,$add462,$add465,$add463,$add461,$add443,$add477,internalVariableName_B,internalVariableName_G,$add469,$add470,$add426,$add427,$add424,$add425,$add422,$add423,$add420,$add421,$add448,$add449,$add460,$add454,$add466,$add467,$add428,$add429;
			internalVariableName_R = self['translator']['getNumberVariable']($p['__op_add']($add415=self['getRequiredVariableName'](),$add416='_R'));
			if ($p['bool']($p['op_eq'](internalVariableName_R, null))) {
				internalVariableName_R = $p['__op_add']($add417=self['getRequiredVariableName'](),$add418='_R');
				self['translator']['addNumberVariable']($p['getattr']($p['getattr'](self, 'block'), 'varName'), internalVariableName_R);
				self['translator']['addDefinitionCommand']($p['__op_add']($add425=$p['__op_add']($add423=$p['__op_add']($add421=$p['__op_add']($add419='const int ',$add420=internalVariableName_R),$add422=' = '),$add424=self['getRequiredComponentPin'](0)),$add426=';'));
				self['translator']['addOutputPin'](internalVariableName_R);
			}
			ret = $p['__op_add']($add429=$p['__op_add']($add427='analogWrite(',$add428=internalVariableName_R),$add430=', ');
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			ret = $p['__op_add']($add433=ret,$add434=$p['__op_add']($add431=translatorBlock['toCode'](),$add432=');\n'));
			internalVariableName_G = self['translator']['getNumberVariable']($p['__op_add']($add435=self['getRequiredVariableName'](),$add436='_G'));
			if ($p['bool']($p['op_eq'](internalVariableName_G, null))) {
				internalVariableName_G = $p['__op_add']($add437=self['getRequiredVariableName'](),$add438='_G');
				self['translator']['addNumberVariable']($p['getattr']($p['getattr'](self, 'block'), 'varName'), internalVariableName_G);
				self['translator']['addDefinitionCommand']($p['__op_add']($add445=$p['__op_add']($add443=$p['__op_add']($add441=$p['__op_add']($add439='const int ',$add440=internalVariableName_G),$add442=' = '),$add444=self['getRequiredComponentPin'](1)),$add446=';'));
				self['translator']['addOutputPin'](internalVariableName_G);
			}
			ret = $p['__op_add']($add451=ret,$add452=$p['__op_add']($add449=$p['__op_add']($add447='analogWrite(',$add448=internalVariableName_G),$add450=', '));
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](1);
			ret = $p['__op_add']($add455=ret,$add456=$p['__op_add']($add453=translatorBlock['toCode'](),$add454=');\n'));
			internalVariableName_B = self['translator']['getNumberVariable']($p['__op_add']($add457=self['getRequiredVariableName'](),$add458='_B'));
			if ($p['bool']($p['op_eq'](internalVariableName_B, null))) {
				internalVariableName_B = $p['__op_add']($add459=self['getRequiredVariableName'](),$add460='_B');
				self['translator']['addNumberVariable']($p['getattr']($p['getattr'](self, 'block'), 'varName'), internalVariableName_B);
				self['translator']['addDefinitionCommand']($p['__op_add']($add467=$p['__op_add']($add465=$p['__op_add']($add463=$p['__op_add']($add461='const int ',$add462=internalVariableName_B),$add464=' = '),$add466=self['getRequiredComponentPin'](2)),$add468=';'));
				self['translator']['addOutputPin'](internalVariableName_B);
			}
			ret = $p['__op_add']($add473=ret,$add474=$p['__op_add']($add471=$p['__op_add']($add469='analogWrite(',$add470=internalVariableName_B),$add472=', '));
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](2);
			ret = $p['__op_add']($add477=ret,$add478=$p['__op_add']($add475=translatorBlock['toCode'](),$add476=');\n'));
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('setRGBLed', $p['tuple']($bases), $data);
	})();
	$m['getButton'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var internalVariableName,$add490,$add484,$add485,$add486,$add487,$add480,$add481,$add482,$add483,$add479,$add488,$add489;
			internalVariableName = self['translator']['getNumberVariable'](self['getRequiredVariableName']());
			if ($p['bool']($p['op_eq'](internalVariableName, null))) {
				internalVariableName = self['getRequiredVariableName']();
				self['translator']['addNumberVariable']($p['getattr']($p['getattr'](self, 'block'), 'varName'), internalVariableName);
				self['translator']['addDefinitionCommand']($p['__op_add']($add485=$p['__op_add']($add483=$p['__op_add']($add481=$p['__op_add']($add479='const int ',$add480=internalVariableName),$add482=' = '),$add484=self['getRequiredComponentPin'](0)),$add486=';'));
				self['translator']['addInputPin'](internalVariableName);
			}
			return $p['__op_add']($add489=$p['__op_add']($add487='digitalRead(',$add488=internalVariableName),$add490=') == LOW');
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('getButton', $p['tuple']($bases), $data);
	})();
	$m['getKnob'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var internalVariableName,$add501,$add500,$add502,$add497,$add496,$add495,$add494,$add493,$add492,$add491,$add499,$add498;
			internalVariableName = self['translator']['getNumberVariable'](self['getRequiredVariableName']());
			if ($p['bool']($p['op_eq'](internalVariableName, null))) {
				internalVariableName = self['getRequiredVariableName']();
				self['translator']['addNumberVariable']($p['getattr']($p['getattr'](self, 'block'), 'varName'), internalVariableName);
				self['translator']['addDefinitionCommand']($p['__op_add']($add497=$p['__op_add']($add495=$p['__op_add']($add493=$p['__op_add']($add491='const int ',$add492=internalVariableName),$add494=' = '),$add496=self['getRequiredComponentPin'](0)),$add498=';'));
				self['translator']['addInputPin'](internalVariableName);
			}
			return $p['__op_add']($add501=$p['__op_add']($add499='analogRead(',$add500=internalVariableName),$add502=')');
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('getKnob', $p['tuple']($bases), $data);
	})();
	$m['getLdr'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add505,$add504,internalVariableName,$add506,$add510,$add514,$add503,$add513,$add512,$add509,$add507,$add508,$add511;
			internalVariableName = self['translator']['getNumberVariable'](self['getRequiredVariableName']());
			if ($p['bool']($p['op_eq'](internalVariableName, null))) {
				internalVariableName = self['getRequiredVariableName']();
				self['translator']['addNumberVariable']($p['getattr']($p['getattr'](self, 'block'), 'varName'), internalVariableName);
				self['translator']['addDefinitionCommand']($p['__op_add']($add509=$p['__op_add']($add507=$p['__op_add']($add505=$p['__op_add']($add503='const int ',$add504=internalVariableName),$add506=' = '),$add508=self['getRequiredComponentPin'](0)),$add510=';'));
				self['translator']['addInputPin'](internalVariableName);
			}
			return $p['__op_add']($add513=$p['__op_add']($add511='analogRead(',$add512=internalVariableName),$add514=')');
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('getLdr', $p['tuple']($bases), $data);
	})();
	$m['getThermistor'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var internalVariableName,$add516,$add517,$add515,$add518,$add519,$add526,$add523,$add522,$add521,$add520,$add525,$add524;
			internalVariableName = self['translator']['getNumberVariable'](self['getRequiredVariableName']());
			if ($p['bool']($p['op_eq'](internalVariableName, null))) {
				internalVariableName = self['getRequiredVariableName']();
				self['translator']['addNumberVariable']($p['getattr']($p['getattr'](self, 'block'), 'varName'), internalVariableName);
				self['translator']['addDefinitionCommand']($p['__op_add']($add521=$p['__op_add']($add519=$p['__op_add']($add517=$p['__op_add']($add515='const int ',$add516=internalVariableName),$add518=' = '),$add520=self['getRequiredComponentPin'](0)),$add522=';'));
				self['translator']['addInputPin'](internalVariableName);
			}
			return $p['__op_add']($add525=$p['__op_add']($add523='analogRead(',$add524=internalVariableName),$add526=')');
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('getThermistor', $p['tuple']($bases), $data);
	})();
	$m['getJoystickVRx'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add541,internalVariableName,$add540,$add542,$add534,$add538,$add539,$add529,$add528,$add530,$add531,$add532,$add533,$add527,$add535,$add536,$add537;
			internalVariableName = self['translator']['getNumberVariable']($p['__op_add']($add527=self['getRequiredVariableName'](),$add528='_VRx'));
			if ($p['bool']($p['op_eq'](internalVariableName, null))) {
				internalVariableName = $p['__op_add']($add529=self['getRequiredVariableName'](),$add530='_VRx');
				self['translator']['addNumberVariable']($p['getattr']($p['getattr'](self, 'block'), 'varName'), internalVariableName);
				self['translator']['addDefinitionCommand']($p['__op_add']($add537=$p['__op_add']($add535=$p['__op_add']($add533=$p['__op_add']($add531='const int ',$add532=internalVariableName),$add534=' = '),$add536=self['getRequiredComponentPin'](0)),$add538=';'));
				self['translator']['addInputPin'](internalVariableName);
			}
			return $p['__op_add']($add541=$p['__op_add']($add539='analogRead(',$add540=internalVariableName),$add542=')');
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('getJoystickVRx', $p['tuple']($bases), $data);
	})();
	$m['getJoystickVRy'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var internalVariableName,$add558,$add557,$add556,$add543,$add545,$add544,$add547,$add546,$add549,$add548,$add554,$add555,$add552,$add553,$add550,$add551;
			internalVariableName = self['translator']['getNumberVariable']($p['__op_add']($add543=self['getRequiredVariableName'](),$add544='_VRy'));
			if ($p['bool']($p['op_eq'](internalVariableName, null))) {
				internalVariableName = $p['__op_add']($add545=self['getRequiredVariableName'](),$add546='_VRy');
				self['translator']['addNumberVariable']($p['getattr']($p['getattr'](self, 'block'), 'varName'), internalVariableName);
				self['translator']['addDefinitionCommand']($p['__op_add']($add553=$p['__op_add']($add551=$p['__op_add']($add549=$p['__op_add']($add547='const int ',$add548=internalVariableName),$add550=' = '),$add552=self['getRequiredComponentPin'](0)),$add554=';'));
				self['translator']['addInputPin'](internalVariableName);
			}
			return $p['__op_add']($add557=$p['__op_add']($add555='analogRead(',$add556=internalVariableName),$add558=')');
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('getJoystickVRy', $p['tuple']($bases), $data);
	})();
	$m['getJoystickSW'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add574,internalVariableName,$add572,$add571,$add559,$add573,$add567,$add566,$add565,$add564,$add563,$add562,$add561,$add560,$add570,$add569,$add568;
			internalVariableName = self['translator']['getNumberVariable']($p['__op_add']($add559=self['getRequiredVariableName'](),$add560='_SW'));
			if ($p['bool']($p['op_eq'](internalVariableName, null))) {
				internalVariableName = $p['__op_add']($add561=self['getRequiredVariableName'](),$add562='_SW');
				self['translator']['addNumberVariable']($p['getattr']($p['getattr'](self, 'block'), 'varName'), internalVariableName);
				self['translator']['addDefinitionCommand']($p['__op_add']($add569=$p['__op_add']($add567=$p['__op_add']($add565=$p['__op_add']($add563='const int ',$add564=internalVariableName),$add566=' = '),$add568=self['getRequiredComponentPin'](0)),$add570=';'));
				self['translator']['addInputPin'](internalVariableName);
			}
			return $p['__op_add']($add573=$p['__op_add']($add571='digitalRead(',$add572=internalVariableName),$add574=')');
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('getJoystickSW', $p['tuple']($bases), $data);
	})();
	$m['setServo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var internalVariableName,$add590,$add581,ret,$add580,$add575,$add576,$add577,$add589,$add588,translatorBlock,$add585,$add584,$add587,$add586,$add578,$add579,$add583,$add582;
			internalVariableName = self['getRequiredVariableName']();
			self['translator']['addHeaderFile']('Servo.h');
			self['translator']['addDefinitionCommand']($p['__op_add']($add577=$p['__op_add']($add575='Servo ',$add576=internalVariableName),$add578=';'));
			self['translator']['addSetupCommand']($p['__op_add']($add583=$p['__op_add']($add581=$p['__op_add']($add579=internalVariableName,$add580='.attach('),$add582=self['getRequiredComponentPin'](0)),$add584=');\n'));
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			ret = $p['__op_add']($add589=$p['__op_add']($add587=$p['__op_add']($add585=internalVariableName,$add586='.write('),$add588=translatorBlock['toCode']()),$add590=');\n');
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('setServo', $p['tuple']($bases), $data);
	})();
	$m['setBuzzer'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add608,$add609,$add606,$add607,$add604,$add605,$add602,$add603,$add600,$add601,internalVariableName,ret,$add598,$add599,translatorBlock,$add592,$add593,$add591,$add596,$add597,$add594,$add595,$add611,$add610,$add612;
			internalVariableName = self['translator']['getNumberVariable'](self['getRequiredVariableName']());
			if ($p['bool']($p['op_eq'](internalVariableName, null))) {
				internalVariableName = self['getRequiredVariableName']();
				self['translator']['addNumberVariable']($p['getattr']($p['getattr'](self, 'block'), 'varName'), internalVariableName);
				self['translator']['addDefinitionCommand']($p['__op_add']($add597=$p['__op_add']($add595=$p['__op_add']($add593=$p['__op_add']($add591='const int ',$add592=internalVariableName),$add594=' = '),$add596=self['getRequiredComponentPin'](0)),$add598=';'));
				self['translator']['addInputPin'](internalVariableName);
			}
			ret = $p['__op_add']($add601=$p['__op_add']($add599='tone(',$add600=internalVariableName),$add602=', ');
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			if ($p['bool']($p['isinstance'](translatorBlock, $m['Const']))) {
				ret = $p['__op_add']($add603=ret,$add604=$m['MANY_FEW_NOTES']['__getitem__'](translatorBlock['toCode']()));
			}
			else {
				ret = $p['__op_add']($add605=ret,$add606=translatorBlock['toCode']());
			}
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](1);
			ret = $p['__op_add']($add611=ret,$add612=$p['__op_add']($add609=$p['__op_add']($add607=', ',$add608=translatorBlock['toCode']()),$add610=');\n'));
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('setBuzzer', $p['tuple']($bases), $data);
	})();
	$m['onMotor'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add631,$add616,$add624,$add625,$add626,$add627,$add620,$add621,$add622,$add623,$add628,$add629,internalVariableName,ret,translatorBlock,$add613,$add634,$add615,$add614,$add617,$add630,$add619,$add618,$add633,$add632;
			internalVariableName = self['translator']['getNumberVariable']($p['__op_add']($add613=self['getRequiredVariableName'](),$add614='_DIR'));
			if ($p['bool']($p['op_eq'](internalVariableName, null))) {
				internalVariableName = $p['__op_add']($add615=self['getRequiredVariableName'](),$add616='_DIR');
				self['translator']['addNumberVariable']($p['getattr']($p['getattr'](self, 'block'), 'varName'), internalVariableName);
				self['translator']['addDefinitionCommand']($p['__op_add']($add623=$p['__op_add']($add621=$p['__op_add']($add619=$p['__op_add']($add617='const int ',$add618=internalVariableName),$add620=' = '),$add622=self['getRequiredComponentPin'](0)),$add624=';'));
				self['translator']['addOutputPin'](internalVariableName);
			}
			ret = $p['__op_add']($add627=$p['__op_add']($add625='digitalWrite(',$add626=internalVariableName),$add628=', ');
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			if ($p['bool']($p['isinstance'](translatorBlock, $m['Const']))) {
				ret = $p['__op_add']($add629=ret,$add630=$m['DIRECTIONS_MOTOR']['__getitem__'](translatorBlock['toCode']()));
			}
			else {
				ret = $p['__op_add']($add631=ret,$add632=translatorBlock['toCode']());
			}
			ret = $p['__op_add']($add633=ret,$add634=');\n');
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('onMotor', $p['tuple']($bases), $data);
	})();
	$m['speedMotor'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add642,$add643,$add640,$add641,$add646,$add647,$add644,$add645,$add648,$add649,internalVariableName,ret,translatorBlock,$add654,$add651,$add650,$add653,$add652,$add637,$add636,$add635,$add639,$add638;
			internalVariableName = self['translator']['getNumberVariable']($p['__op_add']($add635=self['getRequiredVariableName'](),$add636='_SPEED'));
			if ($p['bool']($p['op_eq'](internalVariableName, null))) {
				internalVariableName = $p['__op_add']($add637=self['getRequiredVariableName'](),$add638='_SPEED');
				self['translator']['addNumberVariable']($p['getattr']($p['getattr'](self, 'block'), 'varName'), internalVariableName);
				self['translator']['addDefinitionCommand']($p['__op_add']($add645=$p['__op_add']($add643=$p['__op_add']($add641=$p['__op_add']($add639='const int ',$add640=internalVariableName),$add642=' = '),$add644=self['getRequiredComponentPin'](1)),$add646=';'));
				self['translator']['addOutputPin'](internalVariableName);
			}
			ret = $p['__op_add']($add649=$p['__op_add']($add647='analogWrite(',$add648=internalVariableName),$add650=', ');
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			ret = $p['__op_add']($add653=ret,$add654=$p['__op_add']($add651=translatorBlock['toCode'](),$add652=');\n'));
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('speedMotor', $p['tuple']($bases), $data);
	})();
	$m['offMotor'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add655,$add657,$add656,$add670,$add659,internalVariableName,ret,$add658,$add668,$add669,$add660,$add661,$add662,$add663,$add664,$add665,$add666,$add667;
			internalVariableName = self['translator']['getNumberVariable']($p['__op_add']($add655=self['getRequiredVariableName'](),$add656='_SPEED'));
			if ($p['bool']($p['op_eq'](internalVariableName, null))) {
				internalVariableName = $p['__op_add']($add657=self['getRequiredVariableName'](),$add658='_SPEED');
				self['translator']['addNumberVariable']($p['getattr']($p['getattr'](self, 'block'), 'varName'), internalVariableName);
				self['translator']['addDefinitionCommand']($p['__op_add']($add665=$p['__op_add']($add663=$p['__op_add']($add661=$p['__op_add']($add659='const int ',$add660=internalVariableName),$add662=' = '),$add664=self['getRequiredComponentPin'](1)),$add666=';'));
				self['translator']['addOutputPin'](internalVariableName);
			}
			ret = $p['__op_add']($add669=$p['__op_add']($add667='analogWrite(',$add668=internalVariableName),$add670=', 0);\n');
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('offMotor', $p['tuple']($bases), $data);
	})();
	$m['setLcd'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add717,$add707,$add706,$add705,$add704,$add703,$add702,$add701,$add700,$add709,$add708,internalVariableName,$add718,ret,$add719,translatorBlock,$add699,$add698,$add691,$add690,$add693,$add692,$add695,$add694,$add697,$add696,$add714,$add715,$add679,$add678,$add710,$add711,$add712,$add713,$add673,$add672,$add671,$add677,$add676,$add675,$add674,definition,$add720,$add716,$add686,$add687,$add684,$add685,$add682,$add683,$add680,$add681,$add688,$add689;
			self['translator']['addHeaderFile']('LiquidCrystal.h');
			internalVariableName = self['getRequiredVariableName']();
			definition = $p['__op_add']($add673=$p['__op_add']($add671='LiquidCrystal ',$add672=internalVariableName),$add674='(');
			definition = $p['__op_add']($add681=definition,$add682=$p['__op_add']($add679=$p['__op_add']($add677=$p['__op_add']($add675=self['getRequiredComponentPin'](0),$add676=', '),$add678=self['getRequiredComponentPin'](1)),$add680=', '));
			definition = $p['__op_add']($add689=definition,$add690=$p['__op_add']($add687=$p['__op_add']($add685=$p['__op_add']($add683=self['getRequiredComponentPin'](2),$add684=', '),$add686=self['getRequiredComponentPin'](3)),$add688=', '));
			definition = $p['__op_add']($add697=definition,$add698=$p['__op_add']($add695=$p['__op_add']($add693=$p['__op_add']($add691=self['getRequiredComponentPin'](4),$add692=', '),$add694=self['getRequiredComponentPin'](5)),$add696=');'));
			self['translator']['addDefinitionCommand'](definition);
			self['translator']['addSetupCommand']($p['__op_add']($add707=$p['__op_add']($add705=$p['__op_add']($add703=$p['__op_add']($add701=$p['__op_add']($add699=internalVariableName,$add700='.begin('),$add702=$p['str']($p['len']($m['LCD_COLS']))),$add704=', '),$add706=$p['str']($p['len']($m['LCD_ROWS']))),$add708=');\n'));
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			if ($p['bool']($p['isinstance'](translatorBlock, $m['Const']))) {
				ret = $p['__op_add']($add713=$p['__op_add']($add711=$p['__op_add']($add709=internalVariableName,$add710='.print("'),$add712=translatorBlock['toCode']()),$add714='");\n');
			}
			else {
				ret = $p['__op_add']($add719=$p['__op_add']($add717=$p['__op_add']($add715=internalVariableName,$add716='.print('),$add718=translatorBlock['toCode']()),$add720=');\n');
			}
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('setLcd', $p['tuple']($bases), $data);
	})();
	$m['posLcd'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add765,$add764,$add767,$add766,$add761,$add760,$add751,$add762,$add769,$add768,$add721,$add743,$add723,$add722,$add725,$add724,$add727,$add726,$add729,$add728,$add741,$add740,$add747,$add746,$add745,$add744,internalVariableName,$add753,$add752,$add763,$add754,ret,$add755,$add756,$add757,$add772,$add773,$add770,$add771,$add776,$add774,$add775,$add758,$add759,$add738,$add739,$add736,$add737,$add734,$add735,$add732,$add733,$add730,$add731,definition,translatorBlockCOL,$add750,$add749,$add748,$add742,translatorBlockROW;
			self['translator']['addHeaderFile']('LiquidCrystal.h');
			internalVariableName = self['getRequiredVariableName']();
			definition = $p['__op_add']($add723=$p['__op_add']($add721='LiquidCrystal ',$add722=internalVariableName),$add724='(');
			definition = $p['__op_add']($add731=definition,$add732=$p['__op_add']($add729=$p['__op_add']($add727=$p['__op_add']($add725=self['getRequiredComponentPin'](0),$add726=', '),$add728=self['getRequiredComponentPin'](1)),$add730=', '));
			definition = $p['__op_add']($add739=definition,$add740=$p['__op_add']($add737=$p['__op_add']($add735=$p['__op_add']($add733=self['getRequiredComponentPin'](2),$add734=', '),$add736=self['getRequiredComponentPin'](3)),$add738=', '));
			definition = $p['__op_add']($add747=definition,$add748=$p['__op_add']($add745=$p['__op_add']($add743=$p['__op_add']($add741=self['getRequiredComponentPin'](4),$add742=', '),$add744=self['getRequiredComponentPin'](5)),$add746=');'));
			self['translator']['addDefinitionCommand'](definition);
			self['translator']['addSetupCommand']($p['__op_add']($add757=$p['__op_add']($add755=$p['__op_add']($add753=$p['__op_add']($add751=$p['__op_add']($add749=internalVariableName,$add750='.begin('),$add752=$p['str']($p['len']($m['LCD_COLS']))),$add754=', '),$add756=$p['str']($p['len']($m['LCD_ROWS']))),$add758=');\n'));
			ret = $p['__op_add']($add759=internalVariableName,$add760='.setCursor(');
			translatorBlockROW = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			translatorBlockCOL = self['getRequiredTranslatorBlockAtArgumentsSocket'](1);
			if ($p['bool']($p['isinstance'](translatorBlockCOL, $m['Const']))) {
				ret = $p['__op_add']($add763=ret,$add764=$p['__op_add']($add761=$m['LCD_COLS']['__getitem__'](translatorBlockCOL['toCode']()),$add762=', '));
			}
			else {
				ret = $p['__op_add']($add767=ret,$add768=$p['__op_add']($add765=translatorBlockCOL['toCode'](),$add766=', '));
			}
			if ($p['bool']($p['isinstance'](translatorBlockROW, $m['Const']))) {
				ret = $p['__op_add']($add771=ret,$add772=$p['__op_add']($add769=$m['LCD_ROWS']['__getitem__'](translatorBlockROW['toCode']()),$add770=');\n'));
			}
			else {
				ret = $p['__op_add']($add775=ret,$add776=$p['__op_add']($add773=translatorBlockROW['toCode'](),$add774=');\n'));
			}
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('posLcd', $p['tuple']($bases), $data);
	})();
	$m['clearLcd'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add789,$add788,$add787,$add786,$add785,$add784,$add783,$add782,$add781,$add780,$add813,$add812,$add811,$add810,$add816,$add815,$add814,$add799,internalVariableName,ret,$add796,$add797,$add798,$add777,$add794,$add795,$add778,$add779,$add790,$add791,$add792,$add793,$add800,$add801,$add802,$add803,$add804,$add805,$add806,$add807,$add808,$add809,definition;
			self['translator']['addHeaderFile']('LiquidCrystal.h');
			internalVariableName = self['getRequiredVariableName']();
			definition = $p['__op_add']($add779=$p['__op_add']($add777='LiquidCrystal ',$add778=internalVariableName),$add780='(');
			definition = $p['__op_add']($add787=definition,$add788=$p['__op_add']($add785=$p['__op_add']($add783=$p['__op_add']($add781=self['getRequiredComponentPin'](0),$add782=', '),$add784=self['getRequiredComponentPin'](1)),$add786=', '));
			definition = $p['__op_add']($add795=definition,$add796=$p['__op_add']($add793=$p['__op_add']($add791=$p['__op_add']($add789=self['getRequiredComponentPin'](2),$add790=', '),$add792=self['getRequiredComponentPin'](3)),$add794=', '));
			definition = $p['__op_add']($add803=definition,$add804=$p['__op_add']($add801=$p['__op_add']($add799=$p['__op_add']($add797=self['getRequiredComponentPin'](4),$add798=', '),$add800=self['getRequiredComponentPin'](5)),$add802=');'));
			self['translator']['addDefinitionCommand'](definition);
			self['translator']['addSetupCommand']($p['__op_add']($add813=$p['__op_add']($add811=$p['__op_add']($add809=$p['__op_add']($add807=$p['__op_add']($add805=internalVariableName,$add806='.begin('),$add808=$p['str']($p['len']($m['LCD_COLS']))),$add810=', '),$add812=$p['str']($p['len']($m['LCD_ROWS']))),$add814=');\n'));
			ret = $p['__op_add']($add815=internalVariableName,$add816='.clear();\n');
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('clearLcd', $p['tuple']($bases), $data);
	})();
	$m['setDisplay7seg'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$cls_definition['DIGITS'] = 'byte seven_seg_digits[10][7] = {{1,1,1,1,1,1,0},\n{0,1,1,0,0,0,0}, {1,1,0,1,1,0,1}, {1,1,1,1,0,0,1},\n{0,1,1,0,0,1,1}, {1,0,1,1,0,1,1}, {1,0,1,1,1,1,1},\n{1,1,1,0,0,0,0}, {1,1,1,1,1,1,1}, {1,1,1,0,0,1,1}};\n';
		$cls_definition['WRITE'] = 'void sevenSegWrite(byte digit, byte array[]) {\nfor (byte i = 0; i < 7; i++)\ndigitalWrite(array[i], seven_seg_digits[digit][i]);\n}\n';
		$cls_definition['CLEAR'] = 'void sevenSegClear(byte array[]) {\nfor (byte i = 0; i < 7; i++)\ndigitalWrite(array[i], 0);\n}';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add817,$add838,$add835,$add834,$add819,$add818,$add831,$add830,$add833,$add832,internalVariableName,$add836,$add859,$add858,$add855,$add856,$add854,$add853,$add852,$add837,$add850,translatorBlock,ret,$add851,$add828,$add829,$add860,$add822,$add823,$add820,$add821,$add826,$add827,$add824,$add825,definition,$add848,$add849,$add844,$add845,$add846,$add847,$add840,$add841,$add842,$add843,$add857,$add839,setup;
			internalVariableName = self['translator']['getNumberVariable'](self['getRequiredVariableName']());
			if ($p['bool']($p['op_eq'](internalVariableName, null))) {
				internalVariableName = self['getRequiredVariableName']();
				self['translator']['addNumberVariable']($p['getattr']($p['getattr'](self, 'block'), 'varName'), internalVariableName);
				definition = $p['__op_add']($add823=$p['__op_add']($add821=$p['__op_add']($add819=$p['__op_add']($add817='byte ',$add818=internalVariableName),$add820='[7] = {'),$add822=self['getRequiredComponentPin'](0)),$add824=', ');
				definition = $p['__op_add']($add831=definition,$add832=$p['__op_add']($add829=$p['__op_add']($add827=$p['__op_add']($add825=self['getRequiredComponentPin'](1),$add826=', '),$add828=self['getRequiredComponentPin'](2)),$add830=', '));
				definition = $p['__op_add']($add839=definition,$add840=$p['__op_add']($add837=$p['__op_add']($add835=$p['__op_add']($add833=self['getRequiredComponentPin'](3),$add834=', '),$add836=self['getRequiredComponentPin'](4)),$add838=', '));
				definition = $p['__op_add']($add847=definition,$add848=$p['__op_add']($add845=$p['__op_add']($add843=$p['__op_add']($add841=self['getRequiredComponentPin'](5),$add842=', '),$add844=self['getRequiredComponentPin'](6)),$add846='};\n'));
				self['translator']['addDefinitionCommand'](definition);
				self['translator']['addDefinitionCommand']($p['getattr'](self, 'DIGITS'));
				self['translator']['addDefinitionCommand']($p['getattr'](self, 'WRITE'));
				self['translator']['addDefinitionCommand']($p['getattr'](self, 'CLEAR'));
				setup = $p['__op_add']($add851=$p['__op_add']($add849='for (byte i = 0; i < 7; i++)\npinMode(',$add850=internalVariableName),$add852='[i], OUTPUT);\n');
				self['translator']['addSetupCommand'](setup);
			}
			ret = 'sevenSegWrite(';
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			ret = $p['__op_add']($add859=ret,$add860=$p['__op_add']($add857=$p['__op_add']($add855=$p['__op_add']($add853=translatorBlock['toCode'](),$add854=', '),$add856=internalVariableName),$add858=');\n'));
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('setDisplay7seg', $p['tuple']($bases), $data);
	})();
	$m['clearDisplay7seg'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$cls_definition['DIGITS'] = 'byte seven_seg_digits[10][7] = {{1,1,1,1,1,1,0},\n{0,1,1,0,0,0,0}, {1,1,0,1,1,0,1}, {1,1,1,1,0,0,1},\n{0,1,1,0,0,1,1}, {1,0,1,1,0,1,1}, {1,0,1,1,1,1,1},\n{1,1,1,0,0,0,0}, {1,1,1,1,1,1,1}, {1,1,1,0,0,1,1}};\n';
		$cls_definition['WRITE'] = 'void sevenSegWrite(byte digit, byte array[]) {\nfor (byte i = 0; i < 7; i++)\ndigitalWrite(array[i], seven_seg_digits[digit][i]);\n}\n';
		$cls_definition['CLEAR'] = 'void sevenSegClear(byte array[]) {\nfor (byte i = 0; i < 7; i++)\ndigitalWrite(array[i], 0);\n}';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add879,$add878,internalVariableName,$add871,$add870,$add872,$add875,$add874,$add877,$add876,$add899,$add898,$add893,$add892,$add891,$add890,$add897,$add896,$add895,$add894,$add866,$add867,$add864,$add865,$add862,$add863,$add861,$add868,$add869,definition,$add900,setup,$add885,$add888,$add889,$add880,$add881,$add882,$add883,$add884,$add873,$add886,$add887;
			internalVariableName = self['translator']['getNumberVariable'](self['getRequiredVariableName']());
			if ($p['bool']($p['op_eq'](internalVariableName, null))) {
				internalVariableName = self['getRequiredVariableName']();
				self['translator']['addNumberVariable']($p['getattr']($p['getattr'](self, 'block'), 'varName'), internalVariableName);
				definition = $p['__op_add']($add867=$p['__op_add']($add865=$p['__op_add']($add863=$p['__op_add']($add861='byte ',$add862=internalVariableName),$add864='[7] = {'),$add866=self['getRequiredComponentPin'](0)),$add868=', ');
				definition = $p['__op_add']($add875=definition,$add876=$p['__op_add']($add873=$p['__op_add']($add871=$p['__op_add']($add869=self['getRequiredComponentPin'](1),$add870=', '),$add872=self['getRequiredComponentPin'](2)),$add874=', '));
				definition = $p['__op_add']($add883=definition,$add884=$p['__op_add']($add881=$p['__op_add']($add879=$p['__op_add']($add877=self['getRequiredComponentPin'](3),$add878=', '),$add880=self['getRequiredComponentPin'](4)),$add882=', '));
				definition = $p['__op_add']($add891=definition,$add892=$p['__op_add']($add889=$p['__op_add']($add887=$p['__op_add']($add885=self['getRequiredComponentPin'](5),$add886=', '),$add888=self['getRequiredComponentPin'](6)),$add890='};\n'));
				self['translator']['addDefinitionCommand'](definition);
				self['translator']['addDefinitionCommand']($p['getattr'](self, 'DIGITS'));
				self['translator']['addDefinitionCommand']($p['getattr'](self, 'WRITE'));
				self['translator']['addDefinitionCommand']($p['getattr'](self, 'CLEAR'));
				setup = $p['__op_add']($add895=$p['__op_add']($add893='for (byte i = 0; i < 7; i++)\npinMode(',$add894=internalVariableName),$add896='[i], OUTPUT);\n');
				self['translator']['addSetupCommand'](setup);
			}
			return $p['__op_add']($add899=$p['__op_add']($add897='sevenSegClear(',$add898=internalVariableName),$add900=');\n');
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('clearDisplay7seg', $p['tuple']($bases), $data);
	})();
	$m['getKey'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$cls_definition['ROWS'] = 'const byte ROWS = 4;';
		$cls_definition['COLS'] = 'const byte COLS = 3;';
		$cls_definition['KEYS'] = "char keys[ROWS][COLS] = {\n  {'1','2','3'},\n  {'4','5','6'},\n  {'7','8','9'},\n  {'*','0','#'}\n};";
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add924,$add923,$add922,$add916,$add917,$add914,$add915,$add912,$add913,$add910,$add911,$add920,$add918,$add919,internalVariableName,$add934,$add935,$add930,$add931,$add932,$add933,$add908,$add909,definition,$add921,$add929,$add928,$add901,$add926,$add903,$add902,$add905,$add904,$add907,$add906,$add927,$add925,$add936;
			self['translator']['addHeaderFile']('Keypad.h');
			internalVariableName = self['translator']['getNumberVariable'](self['getRequiredVariableName']());
			if ($p['bool']($p['op_eq'](internalVariableName, null))) {
				internalVariableName = self['getRequiredVariableName']();
				self['translator']['addNumberVariable']($p['getattr']($p['getattr'](self, 'block'), 'varName'), internalVariableName);
				self['translator']['addDefinitionCommand']($p['getattr'](self, 'ROWS'));
				self['translator']['addDefinitionCommand']($p['getattr'](self, 'COLS'));
				self['translator']['addDefinitionCommand']($p['getattr'](self, 'KEYS'));
				definition = $p['__op_add']($add903=$p['__op_add']($add901='byte rowPins[ROWS] = {',$add902=self['getRequiredComponentPin'](0)),$add904=', ');
				definition = $p['__op_add']($add911=definition,$add912=$p['__op_add']($add909=$p['__op_add']($add907=$p['__op_add']($add905=self['getRequiredComponentPin'](1),$add906=', '),$add908=self['getRequiredComponentPin'](2)),$add910=', '));
				definition = $p['__op_add']($add915=definition,$add916=$p['__op_add']($add913=self['getRequiredComponentPin'](3),$add914='};'));
				self['translator']['addDefinitionCommand'](definition);
				definition = $p['__op_add']($add919=$p['__op_add']($add917='byte colPins[COLS] = {',$add918=self['getRequiredComponentPin'](4)),$add920=', ');
				definition = $p['__op_add']($add927=definition,$add928=$p['__op_add']($add925=$p['__op_add']($add923=$p['__op_add']($add921=self['getRequiredComponentPin'](5),$add922=', '),$add924=self['getRequiredComponentPin'](6)),$add926='};'));
				self['translator']['addDefinitionCommand'](definition);
				definition = $p['__op_add']($add929='Keypad ',$add930=internalVariableName);
				definition = $p['__op_add']($add931=definition,$add932=' = Keypad(makeKeymap(keys), rowPins, colPins, ROWS, COLS);');
				self['translator']['addDefinitionCommand'](definition);
			}
			return $p['__op_add']($add935=$p['__op_add']($add933='String(',$add934=internalVariableName),$add936='.getKey())');
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('getKey', $p['tuple']($bases), $data);
	})();
	$m['keyPressed'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$cls_definition['ROWS'] = 'const byte ROWS = 4;';
		$cls_definition['COLS'] = 'const byte COLS = 3;';
		$cls_definition['KEYS'] = "char keys[ROWS][COLS] = {\n  {'1','2','3'},\n  {'4','5','6'},\n  {'7','8','9'},\n  {'*','0','#'}\n};";
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add970,$add971,$add958,$add959,$add974,$add952,$add953,$add950,$add951,$add956,$add957,$add954,$add955,internalVariableName,$add968,$add938,$add939,$add937,$add963,$add962,$add961,$add960,$add949,$add948,$add965,$add964,$add945,$add944,$add947,$add946,$add941,$add940,$add943,$add942,definition,$add972,$add973,$add967,$add969,$add966;
			self['translator']['addHeaderFile']('Keypad.h');
			internalVariableName = self['translator']['getNumberVariable'](self['getRequiredVariableName']());
			if ($p['bool']($p['op_eq'](internalVariableName, null))) {
				internalVariableName = self['getRequiredVariableName']();
				self['translator']['addNumberVariable']($p['getattr']($p['getattr'](self, 'block'), 'varName'), internalVariableName);
				self['translator']['addDefinitionCommand']($p['getattr'](self, 'ROWS'));
				self['translator']['addDefinitionCommand']($p['getattr'](self, 'COLS'));
				self['translator']['addDefinitionCommand']($p['getattr'](self, 'KEYS'));
				definition = $p['__op_add']($add939=$p['__op_add']($add937='byte rowPins[ROWS] = {',$add938=self['getRequiredComponentPin'](0)),$add940=', ');
				definition = $p['__op_add']($add947=definition,$add948=$p['__op_add']($add945=$p['__op_add']($add943=$p['__op_add']($add941=self['getRequiredComponentPin'](1),$add942=', '),$add944=self['getRequiredComponentPin'](2)),$add946=', '));
				definition = $p['__op_add']($add951=definition,$add952=$p['__op_add']($add949=self['getRequiredComponentPin'](3),$add950='};'));
				self['translator']['addDefinitionCommand'](definition);
				definition = $p['__op_add']($add955=$p['__op_add']($add953='byte colPins[COLS] = {',$add954=self['getRequiredComponentPin'](4)),$add956=', ');
				definition = $p['__op_add']($add963=definition,$add964=$p['__op_add']($add961=$p['__op_add']($add959=$p['__op_add']($add957=self['getRequiredComponentPin'](5),$add958=', '),$add960=self['getRequiredComponentPin'](6)),$add962='};'));
				self['translator']['addDefinitionCommand'](definition);
				definition = $p['__op_add']($add965='Keypad ',$add966=internalVariableName);
				definition = $p['__op_add']($add967=definition,$add968=' = Keypad(makeKeymap(keys), rowPins, colPins, ROWS, COLS);');
				self['translator']['addDefinitionCommand'](definition);
			}
			return $p['__op_add']($add973=$p['__op_add']($add971=$p['__op_add']($add969=internalVariableName,$add970='.getState() == PRESSED && '),$add972=internalVariableName),$add974='.keyStateChanged()');
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('keyPressed', $p['tuple']($bases), $data);
	})();
	$m['waitForAnyKey'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$cls_definition['ROWS'] = 'const byte ROWS = 4;';
		$cls_definition['COLS'] = 'const byte COLS = 3;';
		$cls_definition['KEYS'] = "char keys[ROWS][COLS] = {\n  {'1','2','3'},\n  {'4','5','6'},\n  {'7','8','9'},\n  {'*','0','#'}\n};";
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add975,$add976,$add977,$add978,$add979,internalVariableName,$add1010,$add998,$add999,$add996,$add997,$add994,$add995,$add992,$add993,$add990,$add991,definition,$add1008,$add1009,$add1002,$add1003,$add1000,$add1001,$add1006,$add1007,$add1004,$add1005,$add981,$add980,$add983,$add982,$add985,$add984,$add987,$add986,$add989,$add988;
			self['translator']['addHeaderFile']('Keypad.h');
			internalVariableName = self['translator']['getNumberVariable'](self['getRequiredVariableName']());
			if ($p['bool']($p['op_eq'](internalVariableName, null))) {
				internalVariableName = self['getRequiredVariableName']();
				self['translator']['addNumberVariable']($p['getattr']($p['getattr'](self, 'block'), 'varName'), internalVariableName);
				self['translator']['addDefinitionCommand']($p['getattr'](self, 'ROWS'));
				self['translator']['addDefinitionCommand']($p['getattr'](self, 'COLS'));
				self['translator']['addDefinitionCommand']($p['getattr'](self, 'KEYS'));
				definition = $p['__op_add']($add977=$p['__op_add']($add975='byte rowPins[ROWS] = {',$add976=self['getRequiredComponentPin'](0)),$add978=', ');
				definition = $p['__op_add']($add985=definition,$add986=$p['__op_add']($add983=$p['__op_add']($add981=$p['__op_add']($add979=self['getRequiredComponentPin'](1),$add980=', '),$add982=self['getRequiredComponentPin'](2)),$add984=', '));
				definition = $p['__op_add']($add989=definition,$add990=$p['__op_add']($add987=self['getRequiredComponentPin'](3),$add988='};'));
				self['translator']['addDefinitionCommand'](definition);
				definition = $p['__op_add']($add993=$p['__op_add']($add991='byte colPins[COLS] = {',$add992=self['getRequiredComponentPin'](4)),$add994=', ');
				definition = $p['__op_add']($add1001=definition,$add1002=$p['__op_add']($add999=$p['__op_add']($add997=$p['__op_add']($add995=self['getRequiredComponentPin'](5),$add996=', '),$add998=self['getRequiredComponentPin'](6)),$add1000='};'));
				self['translator']['addDefinitionCommand'](definition);
				definition = $p['__op_add']($add1003='Keypad ',$add1004=internalVariableName);
				definition = $p['__op_add']($add1005=definition,$add1006=' = Keypad(makeKeymap(keys), rowPins, colPins, ROWS, COLS);');
				self['translator']['addDefinitionCommand'](definition);
			}
			return $p['__op_add']($add1009=$p['__op_add']($add1007='String(',$add1008=internalVariableName),$add1010='.waitForKey())');
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('waitForAnyKey', $p['tuple']($bases), $data);
	})();
	$m['waitForAnyNumber'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$cls_definition['ROWS'] = 'const byte ROWS = 4;';
		$cls_definition['COLS'] = 'const byte COLS = 3;';
		$cls_definition['KEYS'] = "char keys[ROWS][COLS] = {\n  {'1','2','3'},\n  {'4','5','6'},\n  {'7','8','9'},\n  {'*','0','#'}\n};";
		$cls_definition['WAIT_FOR_NUMBER_DEFINE'] = 'String syst_waitForAnyNumber(Keypad k){\nString key;\ndo{\nkey = String(k.waitForKey());\n}while(key == "*" || key == "#");\nreturn key;\n}';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var internalVariableName,$add1019,$add1018,$add1015,$add1014,$add1016,$add1011,$add1013,$add1012,$add1037,$add1036,$add1035,$add1034,$add1033,$add1032,$add1031,$add1030,$add1039,$add1038,$add1043,definition,$add1042,$add1029,$add1024,$add1025,$add1026,$add1027,$add1020,$add1021,$add1022,$add1023,$add1046,$add1044,$add1045,$add1028,$add1017,$add1040,$add1041;
			self['translator']['addHeaderFile']('Keypad.h');
			self['translator']['addDefinitionCommand']($p['getattr'](self, 'WAIT_FOR_NUMBER_DEFINE'));
			internalVariableName = self['translator']['getNumberVariable'](self['getRequiredVariableName']());
			if ($p['bool']($p['op_eq'](internalVariableName, null))) {
				internalVariableName = self['getRequiredVariableName']();
				self['translator']['addNumberVariable']($p['getattr']($p['getattr'](self, 'block'), 'varName'), internalVariableName);
				self['translator']['addDefinitionCommand']($p['getattr'](self, 'ROWS'));
				self['translator']['addDefinitionCommand']($p['getattr'](self, 'COLS'));
				self['translator']['addDefinitionCommand']($p['getattr'](self, 'KEYS'));
				definition = $p['__op_add']($add1013=$p['__op_add']($add1011='byte rowPins[ROWS] = {',$add1012=self['getRequiredComponentPin'](0)),$add1014=', ');
				definition = $p['__op_add']($add1021=definition,$add1022=$p['__op_add']($add1019=$p['__op_add']($add1017=$p['__op_add']($add1015=self['getRequiredComponentPin'](1),$add1016=', '),$add1018=self['getRequiredComponentPin'](2)),$add1020=', '));
				definition = $p['__op_add']($add1025=definition,$add1026=$p['__op_add']($add1023=self['getRequiredComponentPin'](3),$add1024='};'));
				self['translator']['addDefinitionCommand'](definition);
				definition = $p['__op_add']($add1029=$p['__op_add']($add1027='byte colPins[COLS] = {',$add1028=self['getRequiredComponentPin'](4)),$add1030=', ');
				definition = $p['__op_add']($add1037=definition,$add1038=$p['__op_add']($add1035=$p['__op_add']($add1033=$p['__op_add']($add1031=self['getRequiredComponentPin'](5),$add1032=', '),$add1034=self['getRequiredComponentPin'](6)),$add1036='};'));
				self['translator']['addDefinitionCommand'](definition);
				definition = $p['__op_add']($add1039='Keypad ',$add1040=internalVariableName);
				definition = $p['__op_add']($add1041=definition,$add1042=' = Keypad(makeKeymap(keys), rowPins, colPins, ROWS, COLS);');
				self['translator']['addDefinitionCommand'](definition);
			}
			return $p['__op_add']($add1045=$p['__op_add']($add1043='syst_waitForAnyNumber(',$add1044=internalVariableName),$add1046=')');
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('waitForAnyNumber', $p['tuple']($bases), $data);
	})();
	$m['waitForTheKey'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$cls_definition['ROWS'] = 'const byte ROWS = 4;';
		$cls_definition['COLS'] = 'const byte COLS = 3;';
		$cls_definition['KEYS'] = "char keys[ROWS][COLS] = {\n  {'1','2','3'},\n  {'4','5','6'},\n  {'7','8','9'},\n  {'*','0','#'}\n};";
		$cls_definition['WAIT_FOR_THE_KEY_DEFINE'] = 'void syst_waitForTheKey(String s, Keypad k){\nwhile(String(k.waitForKey())!=s);\n}';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add1084,$add1085,$add1078,$add1090,internalVariableName,$add1079,$add1051,$add1050,$add1053,$add1052,$add1055,$add1054,$add1057,$add1056,$add1059,$add1058,$add1071,$add1070,$add1077,$add1076,$add1075,$add1074,$add1072,translatorBlock,$add1082,$add1073,$add1080,$add1081,$add1086,$add1087,key,$add1047,$add1088,$add1089,definition,$add1083,$add1068,$add1069,$add1048,$add1049,$add1060,$add1061,$add1062,$add1063,$add1064,$add1065,$add1066,$add1067;
			self['translator']['addHeaderFile']('Keypad.h');
			self['translator']['addDefinitionCommand']($p['getattr'](self, 'WAIT_FOR_THE_KEY_DEFINE'));
			internalVariableName = self['translator']['getNumberVariable'](self['getRequiredVariableName']());
			if ($p['bool']($p['op_eq'](internalVariableName, null))) {
				internalVariableName = self['getRequiredVariableName']();
				self['translator']['addNumberVariable']($p['getattr']($p['getattr'](self, 'block'), 'varName'), internalVariableName);
				self['translator']['addDefinitionCommand']($p['getattr'](self, 'ROWS'));
				self['translator']['addDefinitionCommand']($p['getattr'](self, 'COLS'));
				self['translator']['addDefinitionCommand']($p['getattr'](self, 'KEYS'));
				definition = $p['__op_add']($add1049=$p['__op_add']($add1047='byte rowPins[ROWS] = {',$add1048=self['getRequiredComponentPin'](0)),$add1050=', ');
				definition = $p['__op_add']($add1057=definition,$add1058=$p['__op_add']($add1055=$p['__op_add']($add1053=$p['__op_add']($add1051=self['getRequiredComponentPin'](1),$add1052=', '),$add1054=self['getRequiredComponentPin'](2)),$add1056=', '));
				definition = $p['__op_add']($add1061=definition,$add1062=$p['__op_add']($add1059=self['getRequiredComponentPin'](3),$add1060='};'));
				self['translator']['addDefinitionCommand'](definition);
				definition = $p['__op_add']($add1065=$p['__op_add']($add1063='byte colPins[COLS] = {',$add1064=self['getRequiredComponentPin'](4)),$add1066=', ');
				definition = $p['__op_add']($add1073=definition,$add1074=$p['__op_add']($add1071=$p['__op_add']($add1069=$p['__op_add']($add1067=self['getRequiredComponentPin'](5),$add1068=', '),$add1070=self['getRequiredComponentPin'](6)),$add1072='};'));
				self['translator']['addDefinitionCommand'](definition);
				definition = $p['__op_add']($add1075='Keypad ',$add1076=internalVariableName);
				definition = $p['__op_add']($add1077=definition,$add1078=' = Keypad(makeKeymap(keys), rowPins, colPins, ROWS, COLS);');
				self['translator']['addDefinitionCommand'](definition);
			}
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			if ($p['bool']($p['isinstance'](translatorBlock, $m['Const']))) {
				key = $p['__op_add']($add1081=$p['__op_add']($add1079='"',$add1080=translatorBlock['toCode']()),$add1082='"');
			}
			else {
				key = translatorBlock['toCode']();
			}
			return $p['__op_add']($add1089=$p['__op_add']($add1087=$p['__op_add']($add1085=$p['__op_add']($add1083='syst_waitForTheKey(',$add1084=key),$add1086=', '),$add1088=internalVariableName),$add1090=');\n');
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('waitForTheKey', $p['tuple']($bases), $data);
	})();
	$m['irReceived'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var internalVariableName,$add1100,$add1095,$add1094,$add1097,$add1096,$add1091,$add1093,$add1092,$add1099,$add1098;
			internalVariableName = self['getRequiredVariableName']();
			self['translator']['addHeaderFile']('IRremote.h');
			self['translator']['addDefinitionCommand']($p['__op_add']($add1097=$p['__op_add']($add1095=$p['__op_add']($add1093=$p['__op_add']($add1091='IRrecv ',$add1092=internalVariableName),$add1094='('),$add1096=self['getRequiredComponentPin'](0)),$add1098=');\n'));
			self['translator']['addDefinitionCommand']('decode_results results;\n');
			return $p['__op_add']($add1099=internalVariableName,$add1100='.decode(&results)');
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('irReceived', $p['tuple']($bases), $data);
	})();
	$m['getIRValue'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$cls_definition['GET_IR_VALUE_DEFINE'] = 'String syst_getIrValue(IRrecv ir){\nir.resume();\nreturn String(results.value, HEX);\n}\n';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add1103,$add1102,$add1101,$add1112,$add1107,$add1106,$add1105,$add1104,$add1108,internalVariableName,$add1111,$add1109,$add1110;
			self['translator']['addDefinitionCommand']($p['getattr'](self, 'GET_IR_VALUE_DEFINE'));
			internalVariableName = self['getRequiredVariableName']();
			self['translator']['addHeaderFile']('IRremote.h');
			self['translator']['addDefinitionCommand']($p['__op_add']($add1107=$p['__op_add']($add1105=$p['__op_add']($add1103=$p['__op_add']($add1101='IRrecv ',$add1102=internalVariableName),$add1104='('),$add1106=self['getRequiredComponentPin'](0)),$add1108=');\n'));
			self['translator']['addDefinitionCommand']('decode_results results;\n');
			return $p['__op_add']($add1111=$p['__op_add']($add1109='syst_getIrValue(',$add1110=internalVariableName),$add1112=')');
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('getIRValue', $p['tuple']($bases), $data);
	})();
	$m['waitForAnySignal'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$cls_definition['WAIT_FOR_ANY_SIGNAL_DEFINE'] = 'String syst_waitForAnySignal(IRrecv ir){\nwhile(!ir.decode(&results));\nir.resume();\nreturn String(results.value, HEX);\n}';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var internalVariableName,$add1113,$add1114,$add1115,$add1116,$add1117,$add1118,$add1119,$add1121,$add1120,$add1123,$add1122,$add1124;
			self['translator']['addDefinitionCommand']($p['getattr'](self, 'WAIT_FOR_ANY_SIGNAL_DEFINE'));
			internalVariableName = self['getRequiredVariableName']();
			self['translator']['addHeaderFile']('IRremote.h');
			self['translator']['addDefinitionCommand']($p['__op_add']($add1119=$p['__op_add']($add1117=$p['__op_add']($add1115=$p['__op_add']($add1113='IRrecv ',$add1114=internalVariableName),$add1116='('),$add1118=self['getRequiredComponentPin'](0)),$add1120=');\n'));
			self['translator']['addDefinitionCommand']('decode_results results;\n');
			return $p['__op_add']($add1123=$p['__op_add']($add1121='syst_waitForAnySignal(',$add1122=internalVariableName),$add1124=')');
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('waitForAnySignal', $p['tuple']($bases), $data);
	})();
	$m['waitForTheSignal'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlockFactory';
		$cls_definition['WAIT_FOR_ANY_SIGNAL_DEFINE'] = 'void syst_waitForTheSignal(IRrecv ir, String s){\ndo{\nwhile(!ir.decode(&results));\n}while(String(results.value, HEX) != s);\nir.resume();\n}';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			$m['TranslatorBlock']['__init__'](self, block, translator);
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('toCode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add1136,$add1137,internalVariableName,$add1135,$add1132,$add1133,$add1130,$add1131,$add1143,$add1138,$add1139,$add1127,translatorBlock,$add1126,$add1134,$add1129,$add1128,$add1144,$add1125,$add1142,$add1141,$add1140,signal;
			self['translator']['addDefinitionCommand']($p['getattr'](self, 'WAIT_FOR_ANY_SIGNAL_DEFINE'));
			internalVariableName = self['getRequiredVariableName']();
			self['translator']['addHeaderFile']('IRremote.h');
			self['translator']['addDefinitionCommand']($p['__op_add']($add1131=$p['__op_add']($add1129=$p['__op_add']($add1127=$p['__op_add']($add1125='IRrecv ',$add1126=internalVariableName),$add1128='('),$add1130=self['getRequiredComponentPin'](0)),$add1132=');\n'));
			self['translator']['addDefinitionCommand']('decode_results results;\n');
			translatorBlock = self['getRequiredTranslatorBlockAtArgumentsSocket'](0);
			if ($p['bool']($p['isinstance'](translatorBlock, $m['Const']))) {
				signal = $p['__op_add']($add1135=$p['__op_add']($add1133='"',$add1134=translatorBlock['toCode']()),$add1136='"');
			}
			else {
				signal = translatorBlock['toCode']();
			}
			return $p['__op_add']($add1143=$p['__op_add']($add1141=$p['__op_add']($add1139=$p['__op_add']($add1137='syst_waitForTheSignal(',$add1138=internalVariableName),$add1140=', '),$add1142=signal),$add1144=');');
		}
	, 1, [null,null,['self']]);
		$cls_definition['toCode'] = $method;
		var $bases = new Array($m['TranslatorBlock']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('waitForTheSignal', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.translator.TranslatorBlockFactory */


/* end module: edu.uca.translator.TranslatorBlockFactory */


/*
PYJS_DEPS: ['edu.uca.translator.TranslatorBlock.TranslatorBlock', 'edu', 'edu.uca', 'edu.uca.translator', 'edu.uca.translator.TranslatorBlock', 'edu.uca.util.Constants.MANY_FEW_NOTES', 'edu.uca.util', 'edu.uca.util.Constants', 'edu.uca.util.Constants.DIRECTIONS_MOTOR', 'edu.uca.util.Constants.LCD_COLS', 'edu.uca.util.Constants.LCD_ROWS', 'edu.uca.util.Constants.DIGITAL_VALUES', 'edu.uca.util.Constants.LED_VALUES', 'edu.uca.util.Constants.LOGIC_VALUES']
*/
