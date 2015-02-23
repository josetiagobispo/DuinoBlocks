/* start module: edu.uca.renderable.hardware.Arduino */
$pyjs['loaded_modules']['edu.uca.renderable.hardware.Arduino'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.renderable.hardware.Arduino']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.renderable.hardware.Arduino'];
	if(typeof $pyjs['loaded_modules']['edu.uca.renderable.hardware'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.renderable.hardware']['__was_initialized__']) $p['___import___']('edu.uca.renderable.hardware', null);
	var $m = $pyjs['loaded_modules']['edu.uca.renderable.hardware.Arduino'];
	$m['__repr__'] = function() { return '<module: edu.uca.renderable.hardware.Arduino>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.renderable.hardware.Arduino';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.renderable.hardware']['Arduino'] = $pyjs['loaded_modules']['edu.uca.renderable.hardware.Arduino'];


	$m['Element'] = $p['___import___']('edu.uca.renderable.Element.Element', 'edu.uca.renderable.hardware', null, false);
	$m['DragWidget'] = $p['___import___']('pyjamas.ui.DragWidget.DragWidget', 'edu.uca.renderable.hardware', null, false);
	$m['getWorkspace'] = $p['___import___']('edu.uca.Workspace.getWorkspace', 'edu.uca.renderable.hardware', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.renderable.hardware', null, false);
	$m['Arduino'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.renderable.hardware.Arduino';
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

			$pyjs_kwargs_call($m['Element'], '__init__', null, kw, [{'Element':$m['DOM']['createDiv']()}, self]);
			$m['DragWidget']['__init__'](self);
			return null;
		}
	, 1, [null,['kw'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onDragStart', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$m['getWorkspace']()['setMovingBlock'](self);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragStart'] = $method;
		$method = $pyjs__bind_method2('onDrag', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			self['addStyleName']('invisible');
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDrag'] = $method;
		$method = $pyjs__bind_method2('onDragEnd', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			self['removeStyleName']('invisible');
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragEnd'] = $method;
		var $bases = new Array($m['Element'],$m['DragWidget']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Arduino', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.renderable.hardware.Arduino */


/* end module: edu.uca.renderable.hardware.Arduino */


/*
PYJS_DEPS: ['edu.uca.renderable.Element.Element', 'edu', 'edu.uca', 'edu.uca.renderable', 'edu.uca.renderable.Element', 'pyjamas.ui.DragWidget.DragWidget', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.DragWidget', 'edu.uca.Workspace.getWorkspace', 'edu.uca.Workspace', 'pyjamas.DOM']
*/
