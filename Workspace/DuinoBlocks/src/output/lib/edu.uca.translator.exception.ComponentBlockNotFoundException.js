/* start module: edu.uca.translator.exception.ComponentBlockNotFoundException */
$pyjs['loaded_modules']['edu.uca.translator.exception.ComponentBlockNotFoundException'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.translator.exception.ComponentBlockNotFoundException']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.translator.exception.ComponentBlockNotFoundException'];
	if(typeof $pyjs['loaded_modules']['edu.uca.translator.exception'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.translator.exception']['__was_initialized__']) $p['___import___']('edu.uca.translator.exception', null);
	var $m = $pyjs['loaded_modules']['edu.uca.translator.exception.ComponentBlockNotFoundException'];
	$m['__repr__'] = function() { return '<module: edu.uca.translator.exception.ComponentBlockNotFoundException>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.translator.exception.ComponentBlockNotFoundException';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.translator.exception']['ComponentBlockNotFoundException'] = $pyjs['loaded_modules']['edu.uca.translator.exception.ComponentBlockNotFoundException'];


	$m['ComponentBlockNotFoundException'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.exception.ComponentBlockNotFoundException';
		$method = $pyjs__bind_method2('__init__', function(block) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
			}

			self['block'] = block;
			return null;
		}
	, 1, [null,null,['self'],['block']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getError', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return 'Componente abaixo nao encontrado';
		}
	, 1, [null,null,['self']]);
		$cls_definition['getError'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ComponentBlockNotFoundException', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.translator.exception.ComponentBlockNotFoundException */


/* end module: edu.uca.translator.exception.ComponentBlockNotFoundException */


