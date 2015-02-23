/* start module: pyjamas.Cookies */
$pyjs['loaded_modules']['pyjamas.Cookies'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Cookies']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Cookies'];
	if(typeof $pyjs['loaded_modules']['pyjamas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas']['__was_initialized__']) $p['___import___']('pyjamas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Cookies'];
	$m['__repr__'] = function() { return '<module: pyjamas.Cookies>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Cookies';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas']['Cookies'] = $pyjs['loaded_modules']['pyjamas.Cookies'];


	$m['pyjd'] = $p['___import___']('pyjd', 'pyjamas');
	if ($p['bool']($p['getattr']($m['pyjd'], 'is_desktop'))) {
		$m['SimpleCookie'] = $p['___import___']('Cookie.SimpleCookie', 'pyjamas', null, false);
		$m['urllib'] = $p['___import___']('urllib', 'pyjamas');
		$m['datetime'] = $p['___import___']('datetime', 'pyjamas');
		$m['strip'] = $p['___import___']('string.strip', 'pyjamas', null, false);
	}
	$m['getCookie'] = function(key) {

		return (typeof getCookie2 == "undefined"?$m['getCookie2']:getCookie2)(key);
	};
	$m['getCookie']['__name__'] = 'getCookie';

	$m['getCookie']['__bind_type__'] = 0;
	$m['getCookie']['__args__'] = [null,null,['key']];
	$m['getCookie2'] = function(cookie_name) {
		var cs,cookiestr,c;
		cookiestr = $p['getattr']($doc, 'cookie');
		c = $m['SimpleCookie']($p['str'](cookiestr));
		cs = c['get'](cookie_name, null);
		$p['printFunc'](['getCookie2', cookiestr, 'name', cookie_name, 'val', cs], 1);
		if ($p['bool'](cs)) {
			return $p['getattr'](cs, 'value');
		}
		return null;
	};
	$m['getCookie2']['__name__'] = 'getCookie2';

	$m['getCookie2']['__bind_type__'] = 0;
	$m['getCookie2']['__args__'] = [null,null,['cookie_name']];
	$m['setCookie'] = function(name, value, expires, domain, path, secure) {
		if (typeof domain == 'undefined') domain=arguments['callee']['__args__'][5][1];
		if (typeof path == 'undefined') path=arguments['callee']['__args__'][6][1];
		if (typeof secure == 'undefined') secure=arguments['callee']['__args__'][7][1];
		var _doc,cookiestr,m,c,d,$add2,$add1,$div2,$div1;
		cookiestr = $p['getattr']($doc, 'cookie');
		c = $m['SimpleCookie']($p['str'](cookiestr));
		c['__setitem__'](name, value);
		m = c['__getitem__'](name);
		d = $p['__op_add']($add1=$m['datetime']['datetime']['now'](),$add2=$m['datetime']['timedelta'](0, (typeof ($div1=expires)==typeof ($div2=1000) && typeof $div1=='number' && $div2 !== 0?
			$div1/$div2:
			$p['op_div']($div1,$div2))));
		d = d['strftime']('%a, %d %b %Y %H:%M:%S GMT');
		m['__setitem__']('expires', $p['sprintf']('"%s"', d));
		if ($p['bool'](domain)) {
			m['__setitem__']('domain', domain);
		}
		if ($p['bool'](path)) {
			m['__setitem__']('path', path);
		}
		if ($p['bool'](secure)) {
			m['__setitem__']('secure', '');
		}
		c = $pyjs_kwargs_call(c, 'output', null, null, [{'header':''}])['strip']();
		$p['printFunc'](['set cookies', c], 1);
		_doc = $doc;
		_doc['cookie'] = c;
		return null;
	};
	$m['setCookie']['__name__'] = 'setCookie';

	$m['setCookie']['__bind_type__'] = 0;
	$m['setCookie']['__args__'] = [null,null,['name'],['value'],['expires'],['domain', null],['path', null],['secure', false]];
	$m['get_crumbs'] = function() {
		var c,docCookie;
		docCookie = $p['getattr']($doc, 'cookie');
		c = $m['SimpleCookie'](docCookie);
		c = $pyjs_kwargs_call(c, 'output', null, null, [{'header':''}]);
		return $p['map']($m['strip'], c['$$split']('\n'));
	};
	$m['get_crumbs']['__name__'] = 'get_crumbs';

	$m['get_crumbs']['__bind_type__'] = 0;
	$m['get_crumbs']['__args__'] = [null,null];
	$m['loadCookies'] = function() {

 		return null;
	};
	$m['loadCookies']['__name__'] = 'loadCookies';

	$m['loadCookies']['__bind_type__'] = 0;
	$m['loadCookies']['__args__'] = [null,null];
	return this;
}; /* end pyjamas.Cookies */


/* end module: pyjamas.Cookies */


/*
PYJS_DEPS: ['pyjd', 'Cookie.SimpleCookie', 'Cookie', 'urllib', 'datetime', 'string.strip', 'string']
*/
