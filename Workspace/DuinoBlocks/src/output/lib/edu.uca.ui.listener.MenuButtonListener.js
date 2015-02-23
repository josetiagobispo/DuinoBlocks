/* start module: edu.uca.ui.listener.MenuButtonListener */
$pyjs['loaded_modules']['edu.uca.ui.listener.MenuButtonListener'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.ui.listener.MenuButtonListener']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.ui.listener.MenuButtonListener'];
	if(typeof $pyjs['loaded_modules']['edu.uca.ui.listener'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.ui.listener']['__was_initialized__']) $p['___import___']('edu.uca.ui.listener', null);
	var $m = $pyjs['loaded_modules']['edu.uca.ui.listener.MenuButtonListener'];
	$m['__repr__'] = function() { return '<module: edu.uca.ui.listener.MenuButtonListener>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.ui.listener.MenuButtonListener';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.ui.listener']['MenuButtonListener'] = $pyjs['loaded_modules']['edu.uca.ui.listener.MenuButtonListener'];


	$m['Element'] = $p['___import___']('edu.uca.renderable.Element.Element', 'edu.uca.ui.listener', null, false);
	$m['MouseHandler'] = $p['___import___']('pyjamas.ui.MouseListener.MouseHandler', 'edu.uca.ui.listener', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.ui.listener', null, false);
	$m['MenuButtonListener'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.ui.listener.MenuButtonListener';
		$method = $pyjs__bind_method2('__init__', function(feedBack) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var kw = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kw === null || typeof kw != 'object' || kw['__name__'] != 'dict' || typeof kw['$pyjs_is_kwarg'] == 'undefined') {
					var kw = arguments[arguments['length']+1];
				} else {
					delete kw['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				feedBack = arguments[1];
				var kw = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kw === null || typeof kw != 'object' || kw['__name__'] != 'dict' || typeof kw['$pyjs_is_kwarg'] == 'undefined') {
					kw = arguments[arguments['length']+1];
				} else {
					delete kw['$pyjs_is_kwarg'];
				}
			}
			if (typeof kw == 'undefined') {
				kw = $p['__empty_dict']();
				if (typeof feedBack != 'undefined') {
					if (feedBack !== null && typeof feedBack['$pyjs_is_kwarg'] != 'undefined') {
						kw = feedBack;
						feedBack = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kw = self;
						self = arguments[2];
					}
				} else {
				}
			}

			$pyjs_kwargs_call($m['Element'], '__init__', null, kw, [{'Element':$m['DOM']['createDiv']()}, self]);
			$m['MouseHandler']['__init__'](self);
			self['addMouseListener'](self);
			self['feedBack'] = feedBack;
			return null;
		}
	, 1, [null,['kw'],['self'],['feedBack']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onMouseDown', function(sender, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}

			if ($p['bool'](($p['getattr'](self, 'feedBack') !== null))) {
				self['feedBack']();
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseDown'] = $method;
		var $bases = new Array($m['Element'],$m['MouseHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('MenuButtonListener', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.ui.listener.MenuButtonListener */


/* end module: edu.uca.ui.listener.MenuButtonListener */


/*
PYJS_DEPS: ['edu.uca.renderable.Element.Element', 'edu', 'edu.uca', 'edu.uca.renderable', 'edu.uca.renderable.Element', 'pyjamas.ui.MouseListener.MouseHandler', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.MouseListener', 'pyjamas.DOM']
*/
