/* start module: edu.uca.renderable.VariableElement */
$pyjs['loaded_modules']['edu.uca.renderable.VariableElement'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.renderable.VariableElement']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.renderable.VariableElement'];
	if(typeof $pyjs['loaded_modules']['edu.uca.renderable'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.renderable']['__was_initialized__']) $p['___import___']('edu.uca.renderable', null);
	var $m = $pyjs['loaded_modules']['edu.uca.renderable.VariableElement'];
	$m['__repr__'] = function() { return '<module: edu.uca.renderable.VariableElement>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.renderable.VariableElement';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.renderable']['VariableElement'] = $pyjs['loaded_modules']['edu.uca.renderable.VariableElement'];


	$m['Dropdown'] = $p['___import___']('edu.uca.util.Dropdown.Dropdown', 'edu.uca.renderable', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.renderable', null, false);
	$m['VariableElement'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.renderable.VariableElement';
		$method = $pyjs__bind_method2('__init__', function(block, title, values, key) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				title = arguments[2];
				values = arguments[3];
				key = arguments[4];
			}
			if (typeof key == 'undefined') key=arguments['callee']['__args__'][6][1];
			var $add2,$add1;
			self['block'] = block;
			self['title'] = title;
			self['values'] = values;
			self['key'] = key;
			$pyjs_kwargs_call($m['Dropdown'], '__init__', null, null, [{'StyleName':$p['__op_add']($add1='dropdown_btn dropdown_var ',$add2=$p['getattr'](block, 'color'))}, self, $p['getattr'](self, 'title'), $p['getattr'](self, 'menuClick'), $p['getattr'](self, 'itemClick')]);
			return null;
		}
	, 1, [null,null,['self'],['block'],['title'],['values'],['key', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('menuClick', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool'](($p['getattr'](self, 'key') === null))) {
				self['addValues']($p['getattr'](self, 'values'));
			}
			else {
				self['addValues']($p['getattr'](self, 'values')['__getitem__']($p['getattr'](self, 'key')));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['menuClick'] = $method;
		$method = $pyjs__bind_method2('itemClick', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}
			var stateChange,$and1,$and2,oldValue;
			if ($p['bool'](($p['bool']($and1=$p['hasattr']($p['getattr'](self, 'block'), 'original'))?!$p['bool']($p['getattr']($p['getattr'](self, 'block'), 'original')):$and1))) {
				oldValue = $p['getattr']($p['getattr'](self, 'block'), 'varName');
				self['setValue'](value);
				if ($p['bool'](!$p['op_eq'](oldValue, value))) {
					stateChange = $p['___import___']('edu.uca.util.Serializable.stateChange', 'edu.uca.renderable', null, false);
					stateChange();
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['itemClick'] = $method;
		$method = $pyjs__bind_method2('setValue', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			$m['DOM']['setInnerHTML'](self['title']['getElement'](), value);
			$p['getattr'](self, 'block')['varName'] = value;
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['setValue'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			$m['Dropdown']['onClick'](self, sender);
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClick'] = $method;
		var $bases = new Array($m['Dropdown']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('VariableElement', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.renderable.VariableElement */


/* end module: edu.uca.renderable.VariableElement */


/*
PYJS_DEPS: ['edu.uca.util.Dropdown.Dropdown', 'edu', 'edu.uca', 'edu.uca.util', 'edu.uca.util.Dropdown', 'pyjamas.DOM', 'pyjamas', 'edu.uca.util.Serializable.stateChange', 'edu.uca.util.Serializable']
*/
