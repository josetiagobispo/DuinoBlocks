/* start module: pyjamas.ui.DragWidget */
$pyjs['loaded_modules']['pyjamas.ui.DragWidget'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.DragWidget']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.DragWidget'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.DragWidget'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.DragWidget>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.DragWidget';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['DragWidget'] = $pyjs['loaded_modules']['pyjamas.ui.DragWidget'];


	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.ui', null, false);
	$m['MouseHandler'] = $p['___import___']('pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui', null, false);
	$m['DragHandler'] = $p['___import___']('pyjamas.ui.DragHandler.DragHandler', 'pyjamas.ui', null, false);
	$m['makeDraggable'] = $p['___import___']('pyjamas.dnd.makeDraggable', 'pyjamas.ui', null, false);
	$m['DNDHelper'] = $p['___import___']('pyjamas.dnd.DNDHelper', 'pyjamas.ui', null, false);
	$m['pyjd'] = $p['___import___']('pyjd', 'pyjamas.ui');
	$m['DragWidget'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.DragWidget';
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('DragWidget', $p['tuple']($bases), $data);
	})();
	$m['DragContainer'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.DragWidget';
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('DragContainer', $p['tuple']($bases), $data);
	})();
	$m['Draggable'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.DragWidget';
		$method = $pyjs__bind_method2('makeDraggable', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['makeDraggable'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['makeDraggable'] = $method;
		var $bases = new Array($m['Widget']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Draggable', $p['tuple']($bases), $data);
	})();
	$m['Html5DragContainer'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.DragWidget';
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
			$m['DragHandler']['__init__'](self);
			self['addDragListener'](self);
			return null;
		}
	, 1, [null,['kw'],['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['Widget'],$m['DragHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Html5DragContainer', $p['tuple']($bases), $data);
	})();
	$m['MouseDragContainer'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.DragWidget';
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
			var $or4,$or3;
			if ($p['bool'](($p['bool']($or3=!$p['bool']($p['hasattr'](self, 'attached')))?$or3:kw))) {
				$pyjs_kwargs_call($m['Widget'], '__init__', null, kw, [{}, self]);
			}
			$m['MouseHandler']['__init__'](self);
			self['addMouseListener']($p['getattr']($m['DNDHelper'], 'dndHelper'));
			$m['DragHandler']['__init__'](self);
			self['addDragListener'](self);
			return null;
		}
	, 1, [null,['kw'],['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['Widget'],$m['MouseHandler'],$m['DragHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('MouseDragContainer', $p['tuple']($bases), $data);
	})();
	$m['Html5DragWidget'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.DragWidget';
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

			$pyjs_kwargs_call($m['Html5DragContainer'], '__init__', null, kw, [{}, self]);
			self['makeDraggable']();
			return null;
		}
	, 1, [null,['kw'],['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['Html5DragContainer'],$m['Draggable']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Html5DragWidget', $p['tuple']($bases), $data);
	})();
	$m['MouseDragWidget'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.DragWidget';
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

			$pyjs_kwargs_call($m['MouseDragContainer'], '__init__', null, kw, [{}, self]);
			self['makeDraggable']();
			return null;
		}
	, 1, [null,['kw'],['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['MouseDragContainer'],$m['Draggable']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('MouseDragWidget', $p['tuple']($bases), $data);
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
			$m['DragContainer'] = $m['Html5DragContainer'];
			$m['DragWidget'] = $m['Html5DragWidget'];
		}
		else {
			$m['DragContainer'] = $m['MouseDragContainer'];
			$m['DragWidget'] = $m['MouseDragWidget'];
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
	$m['Factory']['registerClass']('pyjamas.ui.DragWidget', 'DragWidget', $m['DragWidget']);
	$m['Factory']['registerClass']('pyjamas.ui.DragWidget', 'DragContainer', $m['DragContainer']);
	return this;
}; /* end pyjamas.ui.DragWidget */


/* end module: pyjamas.ui.DragWidget */


/*
PYJS_DEPS: ['pyjamas.Factory', 'pyjamas', 'pyjamas.DOM', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui', 'pyjamas.ui.Widget', 'pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui.MouseListener', 'pyjamas.ui.DragHandler.DragHandler', 'pyjamas.ui.DragHandler', 'pyjamas.dnd.makeDraggable', 'pyjamas.dnd', 'pyjamas.dnd.DNDHelper', 'pyjd']
*/
