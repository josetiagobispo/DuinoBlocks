/* start module: pyjamas.ui.DeckPanel */
$pyjs['loaded_modules']['pyjamas.ui.DeckPanel'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.DeckPanel']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.DeckPanel'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.DeckPanel'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.DeckPanel>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.DeckPanel';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['DeckPanel'] = $pyjs['loaded_modules']['pyjamas.ui.DeckPanel'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['ComplexPanel'] = $p['___import___']('pyjamas.ui.ComplexPanel.ComplexPanel', 'pyjamas.ui', null, false);
	$m['DeckPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.DeckPanel';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
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
			var element;
			self['visibleWidget'] = null;
			if ($p['bool'](kwargs['has_key']('Element'))) {
				element = kwargs['pop']('Element');
			}
			else {
				element = $m['DOM']['createDiv']();
			}
			self['setElement'](element);
			$pyjs_kwargs_call($m['ComplexPanel'], '__init__', null, kwargs, [{}, self]);
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('add', function(widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			self['insert'](widget, self['getWidgetCount']());
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('getVisibleWidget', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['getWidgetIndex']($p['getattr'](self, 'visibleWidget'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getVisibleWidget'] = $method;
		$method = $pyjs__bind_method2('insert', function(widget, beforeIndex) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				beforeIndex = arguments[2];
			}
			if (typeof beforeIndex == 'undefined') beforeIndex=arguments['callee']['__args__'][4][1];
			var $or1,$or2,child;
			if ($p['bool'](($p['bool']($or1=($p['cmp'](beforeIndex, 0) == -1))?$or1:($p['cmp'](beforeIndex, self['getWidgetCount']()) == 1)))) {
				return null;
			}
			$m['ComplexPanel']['insert'](self, widget, self['getElement'](), beforeIndex);
			child = widget['getElement']();
			$m['DOM']['setStyleAttribute'](child, 'width', '100%');
			$m['DOM']['setStyleAttribute'](child, 'height', '100%');
			widget['setVisible'](false);
			return null;
		}
	, 1, [null,null,['self'],['widget'],['beforeIndex', null]]);
		$cls_definition['insert'] = $method;
		$method = $pyjs__bind_method2('remove', function(widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			if ($p['bool']($p['isinstance'](widget, $p['float_int']))) {
				widget = self['getWidget'](widget);
			}
			if ($p['bool'](!$p['bool']($m['ComplexPanel']['remove'](self, widget)))) {
				return false;
			}
			if ($p['bool']($p['op_eq']($p['getattr'](self, 'visibleWidget'), widget))) {
				self['visibleWidget'] = null;
			}
			return true;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('showWidget', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			self['checkIndex'](index);
			if ($p['bool'](($p['getattr'](self, 'visibleWidget') !== null))) {
				self['visibleWidget']['setVisible'](false);
			}
			self['visibleWidget'] = self['getWidget'](index);
			self['visibleWidget']['setVisible'](true);
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['showWidget'] = $method;
		$method = $pyjs__bind_method2('checkIndex', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $or3,$or4;
			if ($p['bool'](($p['bool']($or3=($p['cmp'](index, 0) == -1))?$or3:((($p['cmp'](index, self['getWidgetCount']()))|1) == 1)))) {
			}
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['checkIndex'] = $method;
		var $bases = new Array($m['ComplexPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('DeckPanel', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.DeckPanel', 'DeckPanel', $m['DeckPanel']);
	return this;
}; /* end pyjamas.ui.DeckPanel */


/* end module: pyjamas.ui.DeckPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.ComplexPanel.ComplexPanel', 'pyjamas.ui', 'pyjamas.ui.ComplexPanel']
*/
