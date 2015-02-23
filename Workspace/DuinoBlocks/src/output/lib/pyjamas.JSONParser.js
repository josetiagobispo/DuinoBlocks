/* start module: pyjamas.JSONParser */
$pyjs['loaded_modules']['pyjamas.JSONParser'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.JSONParser']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.JSONParser'];
	if(typeof $pyjs['loaded_modules']['pyjamas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas']['__was_initialized__']) $p['___import___']('pyjamas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.JSONParser'];
	$m['__repr__'] = function() { return '<module: pyjamas.JSONParser>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.JSONParser';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas']['JSONParser'] = $pyjs['loaded_modules']['pyjamas.JSONParser'];


	$m['JSONParser'] = $p['___import___']('gwt.JSONParser.JSONParser', 'pyjamas', null, false);
	$m['math'] = $p['___import___']('gwt.JSONParser.math', 'pyjamas', null, false);
	return this;
}; /* end pyjamas.JSONParser */


/* end module: pyjamas.JSONParser */


/*
PYJS_DEPS: ['gwt.JSONParser.JSONParser', 'gwt', 'gwt.JSONParser', 'gwt.JSONParser.math']
*/
