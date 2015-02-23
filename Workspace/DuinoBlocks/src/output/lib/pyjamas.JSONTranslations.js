/* start module: pyjamas.JSONTranslations */
$pyjs['loaded_modules']['pyjamas.JSONTranslations'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.JSONTranslations']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.JSONTranslations'];
	if(typeof $pyjs['loaded_modules']['pyjamas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas']['__was_initialized__']) $p['___import___']('pyjamas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.JSONTranslations'];
	$m['__repr__'] = function() { return '<module: pyjamas.JSONTranslations>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.JSONTranslations';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas']['JSONTranslations'] = $pyjs['loaded_modules']['pyjamas.JSONTranslations'];
	var $pyjs_try_err;

	$m['NullTranslations'] = $p['___import___']('gettext.NullTranslations', 'pyjamas', null, false);
	$m['re'] = $p['___import___']('re', 'pyjamas');
	$m['loads'] = $p['___import___']('JSONService.loads', 'pyjamas', null, false);
	$m['HTTPRequest'] = $p['___import___']('HTTPRequest.HTTPRequest', 'pyjamas', null, false);
	try {
		$m['c2py'] = $p['___import___']('gettext.c2py', 'pyjamas', null, false);
	} catch($pyjs_try_err) {
		var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
		$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
		if (($pyjs_try_err_name == $p['ImportError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ImportError'])) {
			$m['c2py'] = function(plural) {
				var f;
				f = null;
eval("f=function(n){return " + plural + ";}")
				return f;
			};
			$m['c2py']['__name__'] = 'c2py';

			$m['c2py']['__bind_type__'] = 0;
			$m['c2py']['__args__'] = [null,null,['plural']];
		} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
	}
	$m['JSONTranslations'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.JSONTranslations';
		$cls_definition['re_nplurals'] = $m['re']['compile']('nplurals *= *(\\d+)');
		$cls_definition['re_plural'] = $m['re']['compile']('plural *= *([^;]+)');
		$cls_definition['base_url'] = null;
		$cls_definition['domain'] = null;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

				var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}

			$pyjs_kwargs_call($m['NullTranslations'], '__init__', args, kwargs, [{}, self]);
			self['new_catalog']();
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('new_catalog', function(base_url, domain, lang) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				base_url = arguments[1];
				domain = arguments[2];
				lang = arguments[3];
			}
			if (typeof base_url == 'undefined') base_url=arguments['callee']['__args__'][3][1];
			if (typeof domain == 'undefined') domain=arguments['callee']['__args__'][4][1];
			if (typeof lang == 'undefined') lang=arguments['callee']['__args__'][5][1];
			var $lambda1;
			self['_catalog'] = $p['dict']([]);
			self['lang'] = lang;
			var 			$lambda1 = function(n) {

				return $p['float_int'](!$p['op_eq'](n, 1));
			};
			$lambda1['__name__'] = '$lambda1';

			$lambda1['__bind_type__'] = 0;
			$lambda1['__args__'] = [null,null,['n']];
			self['plural'] = $lambda1;
			return null;
		}
	, 1, [null,null,['self'],['base_url', null],['domain', null],['lang', null]]);
		$cls_definition['new_catalog'] = $method;
		$method = $pyjs__bind_method2('load', function(base_url, domain, lang, onCompletion, onError) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				base_url = arguments[1];
				domain = arguments[2];
				lang = arguments[3];
				onCompletion = arguments[4];
				onError = arguments[5];
			}
			if (typeof base_url == 'undefined') base_url=arguments['callee']['__args__'][3][1];
			if (typeof domain == 'undefined') domain=arguments['callee']['__args__'][4][1];
			if (typeof lang == 'undefined') lang=arguments['callee']['__args__'][5][1];
			if (typeof onCompletion == 'undefined') onCompletion=arguments['callee']['__args__'][6][1];
			if (typeof onError == 'undefined') onError=arguments['callee']['__args__'][7][1];
			var $and1,url,$and2;
			if ($p['bool']((base_url === null))) {
				base_url = $p['getattr'](self, 'base_url');
			}
			if ($p['bool']((domain === null))) {
				domain = $p['getattr'](self, 'domain');
			}
			url = base_url;
			if ($p['bool'](($p['bool']($and1=(domain !== null))?(lang !== null):$and1))) {
				url = $p['sprintf']('%s/%s_%s.json', $p['tuple']([url, domain, lang]));
			}
			self['new_catalog'](base_url, domain, lang);
			self['_onCompletion'] = onCompletion;
			self['_onError'] = onError;
			$m['HTTPRequest']()['asyncGet'](url, self);
			return null;
		}
	, 1, [null,null,['self'],['base_url', null],['domain', null],['lang', null],['onCompletion', null],['onError', null]]);
		$cls_definition['load'] = $method;
		$method = $pyjs__bind_method2('onCompletion', function(text) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			self['parse_json'](text);
			if ($p['bool'](($p['getattr'](self, '_onCompletion') !== null))) {
				self['_onCompletion'](text);
			}
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['onCompletion'] = $method;
		$method = $pyjs__bind_method2('onError', function(text, code) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				code = arguments[2];
			}

			if ($p['bool'](($p['getattr'](self, '_onError') !== null))) {
				self['_onError'](text, code);
			}
			throw ($p['RuntimeError'](code));
			return null;
		}
	, 1, [null,null,['self'],['text'],['code']]);
		$cls_definition['onError'] = $method;
		$method = $pyjs__bind_method2('onTimeout', function(text) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['onTimeout'] = $method;
		$method = $pyjs__bind_method2('onProgress', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onProgress'] = $method;
		$method = $pyjs__bind_method2('parse_json', function(text) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}
			var $iter1_nextval,$iter1_type,$iter1_iter,json,$iter1_array,v,k,$iter1_idx;
			json = $m['loads'](text);
			self['_catalog']['update'](json);
			$iter1_iter = $p['getattr'](self, '_catalog')['__getitem__']('')['iteritems']();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter1_nextval['$nextval'], 2, null);
				k = $tupleassign1[0];
				v = $tupleassign1[1];
				k = k['lower']();
				if ($p['bool']($p['op_eq'](k, 'plural-forms'))) {
					self['nplurals'] = $p['float_int'](self['re_nplurals']['search'](v)['group'](1));
					self['plural'] = $m['c2py'](self['re_plural']['search'](v)['group'](1));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['parse_json'] = $method;
		$method = $pyjs__bind_method2('_parse', function(url) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
			}

			self['load'](url);
			return null;
		}
	, 1, [null,null,['self'],['url']]);
		$cls_definition['_parse'] = $method;
		$method = $pyjs__bind_method2('gettext', function(message) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				message = arguments[1];
			}
			var tmsg;
			tmsg = self['_catalog']['get'](message);
			if ($p['bool']((tmsg === null))) {
				if ($p['bool']($p['getattr'](self, '_fallback'))) {
					return self['_fallback']['gettext'](message);
				}
				return message;
			}
			return tmsg['__getitem__'](0);
		}
	, 1, [null,null,['self'],['message']]);
		$cls_definition['gettext'] = $method;
		$method = $pyjs__bind_method2('ngettext', function(msgid1, msgid2, n) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				msgid1 = arguments[1];
				msgid2 = arguments[2];
				n = arguments[3];
			}
			var tmsg;
			tmsg = self['_catalog']['get'](msgid1);
			if ($p['bool']((tmsg === null))) {
				if ($p['bool']($p['getattr'](self, '_fallback'))) {
					return self['_fallback']['ngettext'](msgid1, msgid2, n);
				}
				if ($p['bool'](self['plural'](n))) {
					return msgid2;
				}
				return msgid1;
			}
			else {
				return tmsg['__getitem__'](self['plural'](n));
			}
			return null;
		}
	, 1, [null,null,['self'],['msgid1'],['msgid2'],['n']]);
		$cls_definition['ngettext'] = $method;
		$cls_definition['lgettext'] = $p['staticmethod']($cls_definition['gettext']);
		$cls_definition['lngettext'] = $p['staticmethod']($cls_definition['ngettext']);
		$cls_definition['ugettext'] = $p['staticmethod']($cls_definition['gettext']);
		$cls_definition['ungettext'] = $p['staticmethod']($cls_definition['ngettext']);
		var $bases = new Array($m['NullTranslations']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('JSONTranslations', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.JSONTranslations */


/* end module: pyjamas.JSONTranslations */


/*
PYJS_DEPS: ['gettext.NullTranslations', 'gettext', 're', 'JSONService.loads', 'JSONService', 'HTTPRequest.HTTPRequest', 'HTTPRequest', 'gettext.c2py']
*/
