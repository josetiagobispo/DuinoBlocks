/* start module: edu.uca.renderable.CodeElement */
$pyjs['loaded_modules']['edu.uca.renderable.CodeElement'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.renderable.CodeElement']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.renderable.CodeElement'];
	if(typeof $pyjs['loaded_modules']['edu.uca.renderable'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.renderable']['__was_initialized__']) $p['___import___']('edu.uca.renderable', null);
	var $m = $pyjs['loaded_modules']['edu.uca.renderable.CodeElement'];
	$m['__repr__'] = function() { return '<module: edu.uca.renderable.CodeElement>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.renderable.CodeElement';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.renderable']['CodeElement'] = $pyjs['loaded_modules']['edu.uca.renderable.CodeElement'];


	$m['Element'] = $p['___import___']('edu.uca.renderable.Element.Element', 'edu.uca.renderable', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.renderable', null, false);
	$m['_'] = $p['___import___']('edu.uca.util.i18n._', 'edu.uca.renderable', null, false);
	$m['CodeElement'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.renderable.CodeElement';
		$method = $pyjs__bind_method2('__init__', function(text, group) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				group = arguments[2];
			}
			if (typeof text == 'undefined') text=arguments['callee']['__args__'][3][1];
			if (typeof group == 'undefined') group=arguments['callee']['__args__'][4][1];

			$pyjs_kwargs_call($m['Element'], '__init__', null, null, [{'Element':$m['DOM']['createElement']('code')}, self]);
			self['text'] = text;
			$m['DOM']['setInnerHTML'](self['getElement'](), text['$$replace'](' ', '&nbsp;'));
			return null;
		}
	, 1, [null,null,['self'],['text', ''],['group', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('changeTexts', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool'](!$p['op_eq']($p['getattr'](self, 'text'), ''))) {
				$m['DOM']['setInnerHTML'](self['getElement'](), $m['_']($p['getattr'](self, 'text'))['$$replace'](' ', '&nbsp;'));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['changeTexts'] = $method;
		var $bases = new Array($m['Element']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('CodeElement', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.renderable.CodeElement */


/* end module: edu.uca.renderable.CodeElement */


/*
PYJS_DEPS: ['edu.uca.renderable.Element.Element', 'edu', 'edu.uca', 'edu.uca.renderable', 'edu.uca.renderable.Element', 'pyjamas.DOM', 'pyjamas', 'edu.uca.util.i18n._', 'edu.uca.util', 'edu.uca.util.i18n']
*/
