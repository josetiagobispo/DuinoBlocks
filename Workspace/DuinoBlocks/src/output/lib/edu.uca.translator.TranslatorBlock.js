/* start module: edu.uca.translator.TranslatorBlock */
$pyjs['loaded_modules']['edu.uca.translator.TranslatorBlock'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.translator.TranslatorBlock']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.translator.TranslatorBlock'];
	if(typeof $pyjs['loaded_modules']['edu.uca.translator'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.translator']['__was_initialized__']) $p['___import___']('edu.uca.translator', null);
	var $m = $pyjs['loaded_modules']['edu.uca.translator.TranslatorBlock'];
	$m['__repr__'] = function() { return '<module: edu.uca.translator.TranslatorBlock>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.translator.TranslatorBlock';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.translator']['TranslatorBlock'] = $pyjs['loaded_modules']['edu.uca.translator.TranslatorBlock'];


	$m['TranslatorBlockFactory'] = $p['___import___']('edu.uca.translator.TranslatorBlockFactory', 'edu.uca.translator', null, false);
	$m['MainBlock'] = $p['___import___']('edu.uca.renderable.block.MainBlock.MainBlock', 'edu.uca.translator', null, false);
	$m['Block'] = $p['___import___']('edu.uca.renderable.block.Block.Block', 'edu.uca.translator', null, false);
	$m['createdBlocks'] = $p['___import___']('edu.uca.Workspace.createdBlocks', 'edu.uca.translator', null, false);
	$m['hardwares'] = $p['___import___']('edu.uca.Workspace.hardwares', 'edu.uca.translator', null, false);
	$m['asciize'] = $p['___import___']('edu.uca.util.ASCII.asciize', 'edu.uca.translator', null, false);
	$m['ComponentBlockNotFoundException'] = $p['___import___']('edu.uca.translator.exception.ComponentBlockNotFoundException.ComponentBlockNotFoundException', 'edu.uca.translator', null, false);
	$m['VariableNameNullException'] = $p['___import___']('edu.uca.translator.exception.VariableNameNullException.VariableNameNullException', 'edu.uca.translator', null, false);
	$m['ComponentPinNullException'] = $p['___import___']('edu.uca.translator.exception.ComponentPinNullException.ComponentPinNullException', 'edu.uca.translator', null, false);
	$m['SocketNullException'] = $p['___import___']('edu.uca.translator.exception.SocketNullException.SocketNullException', 'edu.uca.translator', null, false);
	$m['TranslatorBlock'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.TranslatorBlock';
		$method = $pyjs__bind_method2('__init__', function(block, translator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				translator = arguments[2];
			}

			self['block'] = block;
			self['translator'] = translator;
			return null;
		}
	, 1, [null,null,['self'],['block'],['translator']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getTranslatorBlockAtChildrenSocket', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $pyjs_try_err;
			try {
				return $p['getattr']($m['TranslatorBlockFactory'], $p['getattr']($p['getattr']($p['getattr']($p['getattr'](self, 'block'), 'holderChildren')['__getitem__'](index), 'subBlock'), '$$name'))($p['getattr']($p['getattr']($p['getattr'](self, 'block'), 'holderChildren')['__getitem__'](index), 'subBlock'), $p['getattr'](self, 'translator'));
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
					return null;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['getTranslatorBlockAtChildrenSocket'] = $method;
		$method = $pyjs__bind_method2('nextTranslatorBlock', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $pyjs_try_err;
			try {
				if ($p['bool']($p['isinstance']($p['getattr']($p['getattr']($p['getattr'](self, 'block'), 'holderSiblingDown'), 'subBlock'), $m['MainBlock']))) {
					return null;
				}
				return $p['getattr']($m['TranslatorBlockFactory'], $p['getattr']($p['getattr']($p['getattr']($p['getattr'](self, 'block'), 'holderSiblingDown'), 'subBlock'), '$$name'))($p['getattr']($p['getattr']($p['getattr'](self, 'block'), 'holderSiblingDown'), 'subBlock'), $p['getattr'](self, 'translator'));
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
					return null;
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['nextTranslatorBlock'] = $method;
		$method = $pyjs__bind_method2('getRequiredTranslatorBlockAtArgumentsSocket', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			if ($p['bool'](($p['getattr']($p['getattr']($p['getattr'](self, 'block'), 'holderArguments')['__getitem__'](index), 'subBlock') !== null))) {
				return $p['getattr']($m['TranslatorBlockFactory'], $p['getattr']($p['getattr']($p['getattr']($p['getattr'](self, 'block'), 'holderArguments')['__getitem__'](index), 'subBlock'), '$$name'))($p['getattr']($p['getattr']($p['getattr'](self, 'block'), 'holderArguments')['__getitem__'](index), 'subBlock'), $p['getattr'](self, 'translator'));
			}
			else if ($p['bool'](($p['getattr']($p['getattr'](self, 'block'), 'holderArguments')['__getitem__'](index)['getArgumentValue']() !== null))) {
				return $p['getattr']($m['TranslatorBlockFactory'], 'Const')($p['getattr']($p['getattr'](self, 'block'), 'holderArguments')['__getitem__'](index)['getArgumentValue']());
			}
			else {
				throw ($m['SocketNullException']($p['getattr'](self, 'block'), index));
			}
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['getRequiredTranslatorBlockAtArgumentsSocket'] = $method;
		$method = $pyjs__bind_method2('getRequiredVariableName', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool'](!$p['op_eq']($p['getattr']($p['getattr'](self, 'block'), 'varName'), ''))) {
				return $m['asciize']($p['getattr']($p['getattr'](self, 'block'), 'varName'));
			}
			else {
				throw ($m['VariableNameNullException']($p['getattr'](self, 'block')));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getRequiredVariableName'] = $method;
		$method = $pyjs__bind_method2('getRequiredTranslatorReturnBlock', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var ret;
			ret = $p['getattr']($m['createdBlocks']['__getitem__']($p['getattr']($p['getattr'](self, 'block'), 'varName')), 'ret');
			if ($p['bool'](($p['getattr']($p['getattr'](ret, 'holderArguments')['__getitem__'](0), 'subBlock') !== null))) {
				return $p['getattr']($m['TranslatorBlockFactory'], $p['getattr']($p['getattr']($p['getattr'](ret, 'holderArguments')['__getitem__'](0), 'subBlock'), '$$name'))($p['getattr']($p['getattr'](ret, 'holderArguments')['__getitem__'](0), 'subBlock'), $p['getattr'](self, 'translator'));
			}
			else if ($p['bool'](($p['getattr'](ret, 'holderArguments')['__getitem__'](0)['getArgumentValue']() !== null))) {
				return $p['getattr']($m['TranslatorBlockFactory'], 'Const')($p['getattr'](ret, 'holderArguments')['__getitem__'](0)['getArgumentValue']());
			}
			else {
				throw ($m['SocketNullException'](ret, 0));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getRequiredTranslatorReturnBlock'] = $method;
		$method = $pyjs__bind_method2('getRequiredTranslatorHatBlock', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($m['TranslatorBlockFactory'], 'hat')($p['getattr']($m['createdBlocks']['__getitem__']($p['getattr']($p['getattr'](self, 'block'), 'varName')), 'hatBlock'), $p['getattr'](self, 'translator'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getRequiredTranslatorHatBlock'] = $method;
		$method = $pyjs__bind_method2('getReturnType', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool']($p['op_eq']($p['getattr']($p['getattr'](self, 'block'), 'blockType'), $p['getattr']($m['Block'], 'STATEMENT_BLOCK')))) {
				return 'void';
			}
			else if ($p['bool']($p['op_eq']($p['getattr']($p['getattr'](self, 'block'), 'blockType'), $p['getattr']($m['Block'], 'NUMBER_BLOCK')))) {
				return 'int';
			}
			else if ($p['bool']($p['op_eq']($p['getattr']($p['getattr'](self, 'block'), 'blockType'), $p['getattr']($m['Block'], 'BOOLEAN_BLOCK')))) {
				return 'boolean';
			}
			else if ($p['bool']($p['op_eq']($p['getattr']($p['getattr'](self, 'block'), 'blockType'), $p['getattr']($m['Block'], 'STRING_BLOCK')))) {
				return 'String';
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getReturnType'] = $method;
		$method = $pyjs__bind_method2('getRequiredComponentPin', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $pyjs_try_err,pin,componentBlock;
			try {
				componentBlock = $m['hardwares']['__getitem__']($p['getattr']($p['getattr'](self, 'block'), 'varName'));
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
					throw ($m['ComponentBlockNotFoundException']($p['getattr'](self, 'block')));
				}
			}
			pin = componentBlock['getPinAtArgument'](index);
			if ($p['bool']((pin === null))) {
				throw ($m['ComponentPinNullException']($p['getattr'](self, 'block'), index));
			}
			return pin;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['getRequiredComponentPin'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TranslatorBlock', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.translator.TranslatorBlock */


/* end module: edu.uca.translator.TranslatorBlock */


/*
PYJS_DEPS: ['edu.uca.translator.TranslatorBlockFactory', 'edu', 'edu.uca', 'edu.uca.translator', 'edu.uca.renderable.block.MainBlock.MainBlock', 'edu.uca.renderable', 'edu.uca.renderable.block', 'edu.uca.renderable.block.MainBlock', 'edu.uca.renderable.block.Block.Block', 'edu.uca.renderable.block.Block', 'edu.uca.Workspace.createdBlocks', 'edu.uca.Workspace', 'edu.uca.Workspace.hardwares', 'edu.uca.util.ASCII.asciize', 'edu.uca.util', 'edu.uca.util.ASCII', 'edu.uca.translator.exception.ComponentBlockNotFoundException.ComponentBlockNotFoundException', 'edu.uca.translator.exception', 'edu.uca.translator.exception.ComponentBlockNotFoundException', 'edu.uca.translator.exception.VariableNameNullException.VariableNameNullException', 'edu.uca.translator.exception.VariableNameNullException', 'edu.uca.translator.exception.ComponentPinNullException.ComponentPinNullException', 'edu.uca.translator.exception.ComponentPinNullException', 'edu.uca.translator.exception.SocketNullException.SocketNullException', 'edu.uca.translator.exception.SocketNullException']
*/
