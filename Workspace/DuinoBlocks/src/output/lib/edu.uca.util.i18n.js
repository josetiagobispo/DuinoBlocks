/* start module: edu.uca.util.i18n */
$pyjs['loaded_modules']['edu.uca.util.i18n'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.util.i18n']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.util.i18n'];
	if(typeof $pyjs['loaded_modules']['edu.uca.util'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.util']['__was_initialized__']) $p['___import___']('edu.uca.util', null);
	var $m = $pyjs['loaded_modules']['edu.uca.util.i18n'];
	$m['__repr__'] = function() { return '<module: edu.uca.util.i18n>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.util.i18n';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.util']['i18n'] = $pyjs['loaded_modules']['edu.uca.util.i18n'];


	$m['JSONTranslations'] = $p['___import___']('pyjamas.JSONTranslations.JSONTranslations', 'edu.uca.util', null, false);
	$m['__all__'] = $p['list'](['i18n', 'gettext', 'ngettext', '_']);
	$m['Translations'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.util.i18n';
		$cls_definition['base_url'] = 'lang';
		$cls_definition['domain'] = 'Gettext';
		var $bases = new Array($m['JSONTranslations']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Translations', $p['tuple']($bases), $data);
	})();
	$m['i18n'] = $m['Translations']();
	$m['gettext'] = $p['getattr']($m['i18n'], 'gettext');
	$m['ngettext'] = $p['getattr']($m['i18n'], 'ngettext');
	$m['_'] = $m['gettext'];
	$m['gettext_noop'] = function(message) {

		return message;
	};
	$m['gettext_noop']['__name__'] = 'gettext_noop';

	$m['gettext_noop']['__bind_type__'] = 0;
	$m['gettext_noop']['__args__'] = [null,null,['message']];
	return this;
}; /* end edu.uca.util.i18n */


/* end module: edu.uca.util.i18n */


/*
PYJS_DEPS: ['pyjamas.JSONTranslations.JSONTranslations', 'pyjamas', 'pyjamas.JSONTranslations']
*/
