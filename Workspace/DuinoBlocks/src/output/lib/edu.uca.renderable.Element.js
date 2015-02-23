/* start module: edu.uca.renderable.Element */
$pyjs['loaded_modules']['edu.uca.renderable.Element'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.renderable.Element']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.renderable.Element'];
	if(typeof $pyjs['loaded_modules']['edu.uca.renderable'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.renderable']['__was_initialized__']) $p['___import___']('edu.uca.renderable', null);
	var $m = $pyjs['loaded_modules']['edu.uca.renderable.Element'];
	$m['__repr__'] = function() { return '<module: edu.uca.renderable.Element>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.renderable.Element';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.renderable']['Element'] = $pyjs['loaded_modules']['edu.uca.renderable.Element'];


	$m['Panel'] = $p['___import___']('pyjamas.ui.Panel.Panel', 'edu.uca.renderable', null, false);
	$m['Element'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.renderable.Element';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var kw = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kw === null || typeof kw != 'object' || kw['__name__'] != 'dict' || typeof kw['$pyjs_is_kwarg'] == 'undefined') {
					var kw = arguments[arguments['length']+1];
				} else {
					delete kw['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var kw = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kw === null || typeof kw != 'object' || kw['__name__'] != 'dict' || typeof kw['$pyjs_is_kwarg'] == 'undefined') {
					kw = arguments[arguments['length']+1];
				} else {
					delete kw['$pyjs_is_kwarg'];
				}
			}
			if (typeof kw == 'undefined') {
				kw = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kw = self;
						self = arguments[1];
					}
				} else {
				}
			}

			$pyjs_kwargs_call($m['Panel'], '__init__', null, kw, [{}, self]);
			return null;
		}
	, 1, [null,['kw'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('add', function(widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			self['adopt'](widget, self['getElement']());
			self['children']['append'](widget);
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('remove', function(widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			if ($p['bool'](!$p['op_eq'](widget['getParent'](), self))) {
				return false;
			}
			self['disown'](widget);
			self['children']['remove'](widget);
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('removeAll', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			while ($p['bool'](($p['cmp']($p['len']($p['getattr'](self, 'children')), 0) == 1))) {
				self['remove']($p['getattr'](self, 'children')['__getitem__'](0));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['removeAll'] = $method;
		var $bases = new Array($m['Panel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Element', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.renderable.Element */


/* end module: edu.uca.renderable.Element */


/*
PYJS_DEPS: ['pyjamas.ui.Panel.Panel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Panel']
*/
