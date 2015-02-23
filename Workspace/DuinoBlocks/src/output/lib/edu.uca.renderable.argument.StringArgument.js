/* start module: edu.uca.renderable.argument.StringArgument */
$pyjs['loaded_modules']['edu.uca.renderable.argument.StringArgument'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.renderable.argument.StringArgument']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.renderable.argument.StringArgument'];
	if(typeof $pyjs['loaded_modules']['edu.uca.renderable.argument'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.renderable.argument']['__was_initialized__']) $p['___import___']('edu.uca.renderable.argument', null);
	var $m = $pyjs['loaded_modules']['edu.uca.renderable.argument.StringArgument'];
	$m['__repr__'] = function() { return '<module: edu.uca.renderable.argument.StringArgument>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.renderable.argument.StringArgument';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.renderable.argument']['StringArgument'] = $pyjs['loaded_modules']['edu.uca.renderable.argument.StringArgument'];


	$m['Argument'] = $p['___import___']('edu.uca.renderable.argument.Argument.Argument', 'edu.uca.renderable.argument', null, false);
	$m['Block'] = $p['___import___']('edu.uca.renderable.block.Block.Block', 'edu.uca.renderable.argument', null, false);
	$m['drawNumberArgument'] = $p['___import___']('edu.uca.renderable.argument.NumberArgument.drawNumberArgument', 'edu.uca.renderable.argument', null, false);
	$m['onInput'] = $p['___import___']('edu.uca.renderable.argument.NumberArgument.onInput', 'edu.uca.renderable.argument', null, false);
	$m['resize'] = $p['___import___']('edu.uca.renderable.argument.NumberArgument.resize', 'edu.uca.renderable.argument', null, false);
	$m['addInput'] = $p['___import___']('edu.uca.renderable.argument.NumberArgument.addInput', 'edu.uca.renderable.argument', null, false);
	$m['onChange'] = $p['___import___']('edu.uca.renderable.argument.NumberArgument.onChange', 'edu.uca.renderable.argument', null, false);
	$m['StringArgument'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.renderable.argument.StringArgument';
		$method = $pyjs__bind_method2('__init__', function(block) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
			}

			$m['Argument']['__init__'](self, $p['list']([$p['getattr']($m['Block'], 'STRING_BLOCK')]));
			self['block'] = block;
			self['validation'] = false;
			self['height'] = 16;
			self['minWidthInput'] = 20;
			$m['drawNumberArgument'](self, '');
			$m['addInput'](self, 50);
			return null;
		}
	, 1, [null,null,['self'],['block']]);
		$cls_definition['__init__'] = $method;
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

			if ($p['bool']((self['input']['getText']() !== ''))) {
				return self['input']['getText']();
			}
			return null;
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

			self['input']['setText'](value);
			self['onInput']();
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['setArgumentValue'] = $method;
		var $bases = new Array($m['Argument']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('StringArgument', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.renderable.argument.StringArgument */


/* end module: edu.uca.renderable.argument.StringArgument */


/*
PYJS_DEPS: ['edu.uca.renderable.argument.Argument.Argument', 'edu', 'edu.uca', 'edu.uca.renderable', 'edu.uca.renderable.argument', 'edu.uca.renderable.argument.Argument', 'edu.uca.renderable.block.Block.Block', 'edu.uca.renderable.block', 'edu.uca.renderable.block.Block', 'edu.uca.renderable.argument.NumberArgument.drawNumberArgument', 'edu.uca.renderable.argument.NumberArgument', 'edu.uca.renderable.argument.NumberArgument.onInput', 'edu.uca.renderable.argument.NumberArgument.resize', 'edu.uca.renderable.argument.NumberArgument.addInput', 'edu.uca.renderable.argument.NumberArgument.onChange']
*/
