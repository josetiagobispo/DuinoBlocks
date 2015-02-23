/* start module: pyjamas.ui.DropWidget */
$pyjs['loaded_modules']['pyjamas.ui.DropWidget'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.DropWidget']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.DropWidget'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.DropWidget'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.DropWidget>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.DropWidget';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['DropWidget'] = $pyjs['loaded_modules']['pyjamas.ui.DropWidget'];


	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['dndHelper'] = $p['___import___']('pyjamas.dnd.DNDHelper.dndHelper', 'pyjamas.ui', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.ui', null, false);
	$m['DropHandler'] = $p['___import___']('pyjamas.ui.DropHandler.DropHandler', 'pyjamas.ui', null, false);
	$m['pyjd'] = $p['___import___']('pyjd', 'pyjamas.ui');
	$m['DropWidget'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.DropWidget';
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('DropWidget', $p['tuple']($bases), $data);
	})();
	$m['Html5DropWidget'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.DropWidget';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var kw = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kw === null || typeof kw != 'object' || kw['__name__'] != 'dict' || typeof kw['$pyjs_is_kwarg'] == 'undefined') {
					var kw = arguments[arguments['length']+1];
				} else {
					delete kw['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var kw = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kw === null || typeof kw != 'object' || kw['__name__'] != 'dict' || typeof kw['$pyjs_is_kwarg'] == 'undefined') {
					kw = arguments[arguments['length']+1];
				} else {
					delete kw['$pyjs_is_kwarg'];
				}
			}
			if (typeof kw == 'undefined') {
				kw = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kw = self;
						self = arguments[1];
					}
				} else {
				}
			}
			var $or1,$or2;
			if ($p['bool'](($p['bool']($or1=!$p['bool']($p['hasattr'](self, 'attached')))?$or1:kw))) {
				$pyjs_kwargs_call($m['Widget'], '__init__', null, kw, [{}, self]);
			}
			$m['DropHandler']['__init__'](self);
			self['addDropListener'](self);
			return null;
		}
	, 1, [null,['kw'],['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['Widget'],$m['DropHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Html5DropWidget', $p['tuple']($bases), $data);
	})();
	$m['EmulatedDropWidget'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.DropWidget';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var kw = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kw === null || typeof kw != 'object' || kw['__name__'] != 'dict' || typeof kw['$pyjs_is_kwarg'] == 'undefined') {
					var kw = arguments[arguments['length']+1];
				} else {
					delete kw['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var kw = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kw === null || typeof kw != 'object' || kw['__name__'] != 'dict' || typeof kw['$pyjs_is_kwarg'] == 'undefined') {
					kw = arguments[arguments['length']+1];
				} else {
					delete kw['$pyjs_is_kwarg'];
				}
			}
			if (typeof kw == 'undefined') {
				kw = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kw = self;
						self = arguments[1];
					}
				} else {
				}
			}

			$pyjs_kwargs_call($m['Html5DropWidget'], '__init__', null, kw, [{}, self]);
			$m['dndHelper']['registerTarget'](self);
			return null;
		}
	, 1, [null,['kw'],['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['Html5DropWidget']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('EmulatedDropWidget', $p['tuple']($bases), $data);
	})();
	$m['init'] = function(is_native) {
		if (typeof is_native == 'undefined') is_native=arguments['callee']['__args__'][2][1];
		var html5_dnd;
		if ($p['bool']((is_native === null))) {
			html5_dnd = $p['hasattr']($m['DOM']['createElement']('span'), 'draggable');
		}
		else {
			html5_dnd = is_native;
		}
		if ($p['bool'](html5_dnd)) {
			$m['DropWidget'] = $m['Html5DropWidget'];
		}
		else {
			$m['DropWidget'] = $m['EmulatedDropWidget'];
		}
		return null;
	};
	$m['init']['__name__'] = 'init';

	$m['init']['__bind_type__'] = 0;
	$m['init']['__args__'] = [null,null,['is_native', null]];
	if ($p['bool']($p['getattr']($m['pyjd'], 'is_desktop'))) {
		$m['init']($p['getattr']($m['pyjd'], 'native_dnd'));
	}
	else {
		$m['init'](null);
	}
	$m['Factory']['registerClass']('pyjamas.ui.DropWidget', 'DropWidget', $m['DropWidget']);
	return this;
}; /* end pyjamas.ui.DropWidget */


/* end module: pyjamas.ui.DropWidget */


/*
PYJS_DEPS: ['pyjamas.Factory', 'pyjamas', 'pyjamas.DOM', 'pyjamas.dnd.DNDHelper.dndHelper', 'pyjamas.dnd', 'pyjamas.dnd.DNDHelper', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui', 'pyjamas.ui.Widget', 'pyjamas.ui.DropHandler.DropHandler', 'pyjamas.ui.DropHandler', 'pyjd']
*/
