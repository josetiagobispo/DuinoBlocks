/* start module: gettext */
$pyjs['loaded_modules']['gettext'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['gettext']['__was_initialized__']) return $pyjs['loaded_modules']['gettext'];
	var $m = $pyjs['loaded_modules']['gettext'];
	$m['__repr__'] = function() { return '<module: gettext>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'gettext';
	$m['__name__'] = __mod_name__;


	$m['NullTranslations'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'gettext';
		$method = $pyjs__bind_method2('__init__', function(fp) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fp = arguments[1];
			}
			if (typeof fp == 'undefined') fp=arguments['callee']['__args__'][3][1];

			self['_info'] = $p['dict']([]);
			self['_charset'] = null;
			self['_output_charset'] = null;
			self['_fallback'] = null;
			if ($p['bool']((fp !== null))) {
				self['_parse'](fp);
			}
			return null;
		}
	, 1, [null,null,['self'],['fp', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_parse', function(fp) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fp = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['fp']]);
		$cls_definition['_parse'] = $method;
		$method = $pyjs__bind_method2('add_fallback', function(fallback) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fallback = arguments[1];
			}

			if ($p['bool']($p['getattr'](self, '_fallback'))) {
				self['_fallback']['add_fallback'](fallback);
			}
			else {
				self['_fallback'] = fallback;
			}
			return null;
		}
	, 1, [null,null,['self'],['fallback']]);
		$cls_definition['add_fallback'] = $method;
		$method = $pyjs__bind_method2('gettext', function(message) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				message = arguments[1];
			}

			if ($p['bool']($p['getattr'](self, '_fallback'))) {
				return self['_fallback']['gettext'](message);
			}
			return message;
		}
	, 1, [null,null,['self'],['message']]);
		$cls_definition['gettext'] = $method;
		$method = $pyjs__bind_method2('lgettext', function(message) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				message = arguments[1];
			}

			if ($p['bool']($p['getattr'](self, '_fallback'))) {
				return self['_fallback']['lgettext'](message);
			}
			return message;
		}
	, 1, [null,null,['self'],['message']]);
		$cls_definition['lgettext'] = $method;
		$method = $pyjs__bind_method2('ngettext', function(msgid1, msgid2, n) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				msgid1 = arguments[1];
				msgid2 = arguments[2];
				n = arguments[3];
			}

			if ($p['bool']($p['getattr'](self, '_fallback'))) {
				return self['_fallback']['ngettext'](msgid1, msgid2, n);
			}
			if ($p['bool']($p['op_eq'](n, 1))) {
				return msgid1;
			}
			else {
				return msgid2;
			}
			return null;
		}
	, 1, [null,null,['self'],['msgid1'],['msgid2'],['n']]);
		$cls_definition['ngettext'] = $method;
		$method = $pyjs__bind_method2('lngettext', function(msgid1, msgid2, n) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				msgid1 = arguments[1];
				msgid2 = arguments[2];
				n = arguments[3];
			}

			if ($p['bool']($p['getattr'](self, '_fallback'))) {
				return self['_fallback']['lngettext'](msgid1, msgid2, n);
			}
			if ($p['bool']($p['op_eq'](n, 1))) {
				return msgid1;
			}
			else {
				return msgid2;
			}
			return null;
		}
	, 1, [null,null,['self'],['msgid1'],['msgid2'],['n']]);
		$cls_definition['lngettext'] = $method;
		$method = $pyjs__bind_method2('ugettext', function(message) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				message = arguments[1];
			}

			if ($p['bool']($p['getattr'](self, '_fallback'))) {
				return self['_fallback']['ugettext'](message);
			}
			return (typeof unicode == "undefined"?$m['unicode']:unicode)(message);
		}
	, 1, [null,null,['self'],['message']]);
		$cls_definition['ugettext'] = $method;
		$method = $pyjs__bind_method2('ungettext', function(msgid1, msgid2, n) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				msgid1 = arguments[1];
				msgid2 = arguments[2];
				n = arguments[3];
			}

			if ($p['bool']($p['getattr'](self, '_fallback'))) {
				return self['_fallback']['ungettext'](msgid1, msgid2, n);
			}
			if ($p['bool']($p['op_eq'](n, 1))) {
				return (typeof unicode == "undefined"?$m['unicode']:unicode)(msgid1);
			}
			else {
				return (typeof unicode == "undefined"?$m['unicode']:unicode)(msgid2);
			}
			return null;
		}
	, 1, [null,null,['self'],['msgid1'],['msgid2'],['n']]);
		$cls_definition['ungettext'] = $method;
		$method = $pyjs__bind_method2('info', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '_info');
		}
	, 1, [null,null,['self']]);
		$cls_definition['info'] = $method;
		$method = $pyjs__bind_method2('charset', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '_charset');
		}
	, 1, [null,null,['self']]);
		$cls_definition['charset'] = $method;
		$method = $pyjs__bind_method2('output_charset', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '_output_charset');
		}
	, 1, [null,null,['self']]);
		$cls_definition['output_charset'] = $method;
		$method = $pyjs__bind_method2('set_output_charset', function(charset) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				charset = arguments[1];
			}

			self['_output_charset'] = charset;
			return null;
		}
	, 1, [null,null,['self'],['charset']]);
		$cls_definition['set_output_charset'] = $method;
		$method = $pyjs__bind_method2('install', function(unicode, names) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				unicode = arguments[1];
				names = arguments[2];
			}
			if (typeof unicode == 'undefined') unicode=arguments['callee']['__args__'][3][1];
			if (typeof names == 'undefined') names=arguments['callee']['__args__'][4][1];
			var $or4,$or1,$or3,$or2,$and1,$and3,$and4,__builtin__,$and2;
			__builtin__ = $p['___import___']('__builtin__', null);
			$p['getattr'](__builtin__, '__dict__')['__setitem__']('_', ($p['bool']($or1=($p['bool']($and1=unicode)?$p['getattr'](self, 'ugettext'):$and1))?$or1:$p['getattr'](self, 'gettext')));
			if ($p['bool']($p['hasattr'](names, '__contains__'))) {
				if ($p['bool'](names['__contains__']('gettext'))) {
					$p['getattr'](__builtin__, '__dict__')['__setitem__']('gettext', $p['getattr'](__builtin__, '__dict__')['__getitem__']('_'));
				}
				if ($p['bool'](names['__contains__']('ngettext'))) {
					$p['getattr'](__builtin__, '__dict__')['__setitem__']('ngettext', ($p['bool']($or3=($p['bool']($and3=unicode)?$p['getattr'](self, 'ungettext'):$and3))?$or3:$p['getattr'](self, 'ngettext')));
				}
				if ($p['bool'](names['__contains__']('lgettext'))) {
					$p['getattr'](__builtin__, '__dict__')['__setitem__']('lgettext', $p['getattr'](self, 'lgettext'));
				}
				if ($p['bool'](names['__contains__']('lngettext'))) {
					$p['getattr'](__builtin__, '__dict__')['__setitem__']('lngettext', $p['getattr'](self, 'lngettext'));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['unicode', false],['names', null]]);
		$cls_definition['install'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('NullTranslations', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end gettext */


/* end module: gettext */


/*
PYJS_DEPS: ['__builtin__']
*/
