/* start module: edu.uca.ui.listener.RootPanelListener */
$pyjs['loaded_modules']['edu.uca.ui.listener.RootPanelListener'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.ui.listener.RootPanelListener']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.ui.listener.RootPanelListener'];
	if(typeof $pyjs['loaded_modules']['edu.uca.ui.listener'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.ui.listener']['__was_initialized__']) $p['___import___']('edu.uca.ui.listener', null);
	var $m = $pyjs['loaded_modules']['edu.uca.ui.listener.RootPanelListener'];
	$m['__repr__'] = function() { return '<module: edu.uca.ui.listener.RootPanelListener>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.ui.listener.RootPanelListener';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.ui.listener']['RootPanelListener'] = $pyjs['loaded_modules']['edu.uca.ui.listener.RootPanelListener'];


	$m['RootPanelCls'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanelCls', 'edu.uca.ui.listener', null, false);
	$m['KeyboardHandler'] = $p['___import___']('pyjamas.ui.KeyboardListener.KeyboardHandler', 'edu.uca.ui.listener', null, false);
	$m['ClickHandler'] = $p['___import___']('pyjamas.ui.ClickListener.ClickHandler', 'edu.uca.ui.listener', null, false);
	$m['MouseHandler'] = $p['___import___']('pyjamas.ui.MouseListener.MouseHandler', 'edu.uca.ui.listener', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.ui.listener', null, false);
	$m['RootPanelListener'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.ui.listener.RootPanelListener';
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

			$pyjs_kwargs_call($m['RootPanelCls'], '__init__', args, kwargs, [{}, self]);
			$m['ClickHandler']['__init__'](self);
			$m['KeyboardHandler']['__init__'](self);
			$m['MouseHandler']['__init__'](self);
			$m['DOM']['setStyleAttribute']($p['getattr']($doc, 'body'), 'margin', '0px');
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['RootPanelCls'],$m['KeyboardHandler'],$m['ClickHandler'],$m['MouseHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('RootPanelListener', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.ui.listener.RootPanelListener */


/* end module: edu.uca.ui.listener.RootPanelListener */


/*
PYJS_DEPS: ['pyjamas.ui.RootPanel.RootPanelCls', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.KeyboardListener.KeyboardHandler', 'pyjamas.ui.KeyboardListener', 'pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui.ClickListener', 'pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui.MouseListener', 'pyjamas.DOM']
*/
