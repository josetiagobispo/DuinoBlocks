/* start module: gwt */
$pyjs['loaded_modules']['gwt'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['gwt']['__was_initialized__']) return $pyjs['loaded_modules']['gwt'];
	var $m = $pyjs['loaded_modules']['gwt'];
	$m['__repr__'] = function() { return '<module: gwt>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'gwt';
	$m['__name__'] = __mod_name__;


	$m['Window'] = $p['___import___']('pyjamas.Window', 'gwt', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'gwt', null, false);
	$m['History'] = $p['___import___']('pyjamas.History', 'gwt', null, false);
	$m['Location'] = $p['___import___']('pyjamas.Location', 'gwt', null, false);
	$m['DeferredCommand'] = $p['___import___']('pyjamas.DeferredCommand', 'gwt', null, false);
	$m['Cookies'] = $p['___import___']('pyjamas.Cookies', 'gwt', null, false);
	$m['Timer'] = $p['___import___']('pyjamas.Timer', 'gwt', null, false);
	$m['JSONParser'] = $p['___import___']('pyjamas.JSONParser', 'gwt', null, false);
	$m['JSONService'] = $p['___import___']('pyjamas.JSONService', 'gwt', null, false);
	return this;
}; /* end gwt */


/* end module: gwt */


/*
PYJS_DEPS: ['pyjamas.Window', 'pyjamas', 'pyjamas.DOM', 'pyjamas.History', 'pyjamas.Location', 'pyjamas.DeferredCommand', 'pyjamas.Cookies', 'pyjamas.Timer', 'pyjamas.JSONParser', 'pyjamas.JSONService']
*/
