/* start module: edu.uca.translator.exception.VariableNameNullException */
$pyjs['loaded_modules']['edu.uca.translator.exception.VariableNameNullException'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.translator.exception.VariableNameNullException']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.translator.exception.VariableNameNullException'];
	if(typeof $pyjs['loaded_modules']['edu.uca.translator.exception'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.translator.exception']['__was_initialized__']) $p['___import___']('edu.uca.translator.exception', null);
	var $m = $pyjs['loaded_modules']['edu.uca.translator.exception.VariableNameNullException'];
	$m['__repr__'] = function() { return '<module: edu.uca.translator.exception.VariableNameNullException>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.translator.exception.VariableNameNullException';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.translator.exception']['VariableNameNullException'] = $pyjs['loaded_modules']['edu.uca.translator.exception.VariableNameNullException'];


	$m['VariableNameNullException'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.exception.VariableNameNullException';
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

			return 'Variavel ausente no bloco';
		}
	, 1, [null,null,['self']]);
		$cls_definition['getError'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('VariableNameNullException', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.translator.exception.VariableNameNullException */


/* end module: edu.uca.translator.exception.VariableNameNullException */


