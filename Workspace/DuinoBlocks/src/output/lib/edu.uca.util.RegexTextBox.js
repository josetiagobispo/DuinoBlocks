/* start module: edu.uca.util.RegexTextBox */
$pyjs['loaded_modules']['edu.uca.util.RegexTextBox'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.util.RegexTextBox']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.util.RegexTextBox'];
	if(typeof $pyjs['loaded_modules']['edu.uca.util'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.util']['__was_initialized__']) $p['___import___']('edu.uca.util', null);
	var $m = $pyjs['loaded_modules']['edu.uca.util.RegexTextBox'];
	$m['__repr__'] = function() { return '<module: edu.uca.util.RegexTextBox>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.util.RegexTextBox';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.util']['RegexTextBox'] = $pyjs['loaded_modules']['edu.uca.util.RegexTextBox'];


	$m['re'] = $p['___import___']('re', 'edu.uca.util');
	$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', 'edu.uca.util', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.util', null, false);
	$m['display_ok'] = function(obj) {

		obj['setStyleName']('gwt-textbox-ok');
		return null;
	};
	$m['display_ok']['__name__'] = 'display_ok';

	$m['display_ok']['__bind_type__'] = 0;
	$m['display_ok']['__args__'] = [null,null,['obj']];
	$m['display_error'] = function(obj) {

		obj['setStyleName']('gwt-textbox-error');
		return null;
	};
	$m['display_error']['__name__'] = 'display_error';

	$m['display_error']['__bind_type__'] = 0;
	$m['display_error']['__args__'] = [null,null,['obj']];
	$m['RegexTextBox'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.util.RegexTextBox';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['TextBox']['__init__'](self);
			self['_blurListeners'] = $p['list']([]);
			self['_invalidListeners'] = $p['list']([]);
			self['_validListeners'] = $p['list']([]);
			self['_regex'] = null;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('setRegex', function(regex) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				regex = arguments[1];
			}

			self['_regex'] = regex;
			self['_blurListeners']['append']($p['getattr'](self, 'validate'));
			return null;
		}
	, 1, [null,null,['self'],['regex']]);
		$cls_definition['setRegex'] = $method;
		$method = $pyjs__bind_method2('validate', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var _listener,$iter1_nextval,$iter1_type,$iter1_iter,_listeners,$iter1_array,$iter1_idx;
			if ($p['bool'](($p['getattr'](self, '_regex') === null))) {
				return null;
			}
			if ($p['bool']($m['re']['match']($p['getattr'](self, '_regex'), self['getText']()))) {
				_listeners = $p['getattr'](self, '_validListeners');
			}
			else {
				_listeners = $p['getattr'](self, '_invalidListeners');
			}
			$iter1_iter = _listeners;
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				_listener = $iter1_nextval['$nextval'];
				_listener(self);
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['validate'] = $method;
		$method = $pyjs__bind_method2('isValid', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['re']['match']($p['getattr'](self, '_regex'), self['getText']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['isValid'] = $method;
		$method = $pyjs__bind_method2('appendInvalidListener', function(listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['_invalidListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['appendInvalidListener'] = $method;
		$method = $pyjs__bind_method2('appendValidListener', function(listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['_validListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['appendValidListener'] = $method;
		$method = $pyjs__bind_method2('onBlur', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['validate']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onBlur'] = $method;
		$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var _listener,$iter2_nextval,$iter2_type,$iter2_iter,$iter2_idx,type,$iter2_array;
			$m['TextBox']['onBrowserEvent'](self, event);
			type = $m['DOM']['eventGetType'](event);
			if ($p['bool']($p['op_eq'](type, 'keyup'))) {
				$iter2_iter = $p['getattr'](self, '_blurListeners');
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					_listener = $iter2_nextval['$nextval'];
					if ($p['bool']($p['hasattr'](_listener, 'onBlur'))) {
						_listener['onBlur'](self);
					}
					else {
						_listener(self);
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		var $bases = new Array($m['TextBox']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('RegexTextBox', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.util.RegexTextBox */


/* end module: edu.uca.util.RegexTextBox */


/*
PYJS_DEPS: ['re', 'pyjamas.ui.TextBox.TextBox', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.TextBox', 'pyjamas.DOM']
*/
