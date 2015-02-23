/* start module: edu.uca.ui.listener.MenuItenListener */
$pyjs['loaded_modules']['edu.uca.ui.listener.MenuItenListener'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.ui.listener.MenuItenListener']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.ui.listener.MenuItenListener'];
	if(typeof $pyjs['loaded_modules']['edu.uca.ui.listener'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.ui.listener']['__was_initialized__']) $p['___import___']('edu.uca.ui.listener', null);
	var $m = $pyjs['loaded_modules']['edu.uca.ui.listener.MenuItenListener'];
	$m['__repr__'] = function() { return '<module: edu.uca.ui.listener.MenuItenListener>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.ui.listener.MenuItenListener';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.ui.listener']['MenuItenListener'] = $pyjs['loaded_modules']['edu.uca.ui.listener.MenuItenListener'];


	$m['Element'] = $p['___import___']('edu.uca.renderable.Element.Element', 'edu.uca.ui.listener', null, false);
	$m['ClickHandler'] = $p['___import___']('pyjamas.ui.ClickListener.ClickHandler', 'edu.uca.ui.listener', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.ui.listener', null, false);
	$m['_'] = $p['___import___']('edu.uca.util.i18n._', 'edu.uca.ui.listener', null, false);
	$m['MenuItenListener'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.ui.listener.MenuItenListener';
		$method = $pyjs__bind_method2('__init__', function(feedBack, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var kw = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kw === null || typeof kw != 'object' || kw['__name__'] != 'dict' || typeof kw['$pyjs_is_kwarg'] == 'undefined') {
					var kw = arguments[arguments['length']+1];
				} else {
					delete kw['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				feedBack = arguments[1];
				value = arguments[2];
				var kw = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kw === null || typeof kw != 'object' || kw['__name__'] != 'dict' || typeof kw['$pyjs_is_kwarg'] == 'undefined') {
					kw = arguments[arguments['length']+1];
				} else {
					delete kw['$pyjs_is_kwarg'];
				}
			}
			if (typeof kw == 'undefined') {
				kw = $p['__empty_dict']();
				if (typeof value != 'undefined') {
					if (value !== null && typeof value['$pyjs_is_kwarg'] != 'undefined') {
						kw = value;
						value = arguments[3];
					}
				} else 				if (typeof feedBack != 'undefined') {
					if (feedBack !== null && typeof feedBack['$pyjs_is_kwarg'] != 'undefined') {
						kw = feedBack;
						feedBack = arguments[3];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kw = self;
						self = arguments[3];
					}
				} else {
				}
			}

			$pyjs_kwargs_call($m['Element'], '__init__', null, kw, [{'Element':$m['DOM']['createElement']('li')}, self]);
			$m['ClickHandler']['__init__'](self);
			self['value'] = value;
			$m['DOM']['setInnerHTML'](self['getElement'](), $m['_'](value)['$$replace'](' ', '&nbsp;'));
			self['addClickListener'](self);
			self['feedBack'] = feedBack;
			return null;
		}
	, 1, [null,['kw'],['self'],['feedBack'],['value']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			self['feedBack']($p['getattr'](self, 'value'));
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClick'] = $method;
		var $bases = new Array($m['Element'],$m['ClickHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('MenuItenListener', $p['tuple']($bases), $data);
	})();
	$m['MenuItenListenerIcon'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.ui.listener.MenuItenListener';
		$method = $pyjs__bind_method2('__init__', function(feedBack, value, classIcon) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var kw = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kw === null || typeof kw != 'object' || kw['__name__'] != 'dict' || typeof kw['$pyjs_is_kwarg'] == 'undefined') {
					var kw = arguments[arguments['length']+1];
				} else {
					delete kw['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				feedBack = arguments[1];
				value = arguments[2];
				classIcon = arguments[3];
				var kw = arguments['length'] >= 5 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kw === null || typeof kw != 'object' || kw['__name__'] != 'dict' || typeof kw['$pyjs_is_kwarg'] == 'undefined') {
					kw = arguments[arguments['length']+1];
				} else {
					delete kw['$pyjs_is_kwarg'];
				}
			}
			if (typeof kw == 'undefined') {
				kw = $p['__empty_dict']();
				if (typeof classIcon != 'undefined') {
					if (classIcon !== null && typeof classIcon['$pyjs_is_kwarg'] != 'undefined') {
						kw = classIcon;
						classIcon = arguments[4];
					}
				} else 				if (typeof value != 'undefined') {
					if (value !== null && typeof value['$pyjs_is_kwarg'] != 'undefined') {
						kw = value;
						value = arguments[4];
					}
				} else 				if (typeof feedBack != 'undefined') {
					if (feedBack !== null && typeof feedBack['$pyjs_is_kwarg'] != 'undefined') {
						kw = feedBack;
						feedBack = arguments[4];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kw = self;
						self = arguments[4];
					}
				} else {
				}
			}

			$pyjs_kwargs_call($m['Element'], '__init__', null, kw, [{'Element':$m['DOM']['createElement']('li')}, self]);
			$m['ClickHandler']['__init__'](self);
			self['classIcon'] = classIcon;
			self['value'] = value;
			self['icon'] = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createElement']('i'), 'StyleName':classIcon}]);
			self['add']($p['getattr'](self, 'icon'));
			self['title'] = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createSpan'](), 'StyleName':'title'}]);
			$m['DOM']['setInnerHTML'](self['title']['getElement'](), $p['getattr'](self, 'value'));
			self['add']($p['getattr'](self, 'title'));
			self['addClickListener'](self);
			self['feedBack'] = feedBack;
			return null;
		}
	, 1, [null,['kw'],['self'],['feedBack'],['value'],['classIcon']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getClassIcon', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'classIcon');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getClassIcon'] = $method;
		$method = $pyjs__bind_method2('setClassIcon', function(classIcon) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				classIcon = arguments[1];
			}

			self['classIcon'] = classIcon;
			self['icon']['setStyleName']($p['getattr'](self, 'classIcon'));
			return null;
		}
	, 1, [null,null,['self'],['classIcon']]);
		$cls_definition['setClassIcon'] = $method;
		$method = $pyjs__bind_method2('changeTexts', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['DOM']['setInnerHTML'](self['title']['getElement'](), $m['_']($p['getattr'](self, 'value')));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['changeTexts'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			self['feedBack']($p['getattr'](self, 'classIcon'));
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClick'] = $method;
		var $bases = new Array($m['Element'],$m['ClickHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('MenuItenListenerIcon', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.ui.listener.MenuItenListener */


/* end module: edu.uca.ui.listener.MenuItenListener */


/*
PYJS_DEPS: ['edu.uca.renderable.Element.Element', 'edu', 'edu.uca', 'edu.uca.renderable', 'edu.uca.renderable.Element', 'pyjamas.ui.ClickListener.ClickHandler', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.ClickListener', 'pyjamas.DOM', 'edu.uca.util.i18n._', 'edu.uca.util', 'edu.uca.util.i18n']
*/
