/* start module: edu.uca.renderable.argument.Argument */
$pyjs['loaded_modules']['edu.uca.renderable.argument.Argument'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.renderable.argument.Argument']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.renderable.argument.Argument'];
	if(typeof $pyjs['loaded_modules']['edu.uca.renderable.argument'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.renderable.argument']['__was_initialized__']) $p['___import___']('edu.uca.renderable.argument', null);
	var $m = $pyjs['loaded_modules']['edu.uca.renderable.argument.Argument'];
	$m['__repr__'] = function() { return '<module: edu.uca.renderable.argument.Argument>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.renderable.argument.Argument';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.renderable.argument']['Argument'] = $pyjs['loaded_modules']['edu.uca.renderable.argument.Argument'];


	$m['Element'] = $p['___import___']('edu.uca.renderable.Element.Element', 'edu.uca.renderable.argument', null, false);
	$m['DropHandler'] = $p['___import___']('pyjamas.ui.DropHandler.DropHandler', 'edu.uca.renderable.argument', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.renderable.argument', null, false);
	$m['getWorkspace'] = $p['___import___']('edu.uca.Workspace.getWorkspace', 'edu.uca.renderable.argument', null, false);
	$m['soundIn'] = $p['___import___']('edu.uca.Workspace.soundIn', 'edu.uca.renderable.argument', null, false);
	$m['DROP_EVENTS'] = $p['___import___']('pyjamas.ui.DropHandler.DROP_EVENTS', 'edu.uca.renderable.argument', null, false);
	$m['KeyboardHandler'] = $p['___import___']('pyjamas.ui.KeyboardListener.KeyboardHandler', 'edu.uca.renderable.argument', null, false);
	$m['KEYBOARD_EVENTS'] = $p['___import___']('pyjamas.ui.KeyboardListener.KEYBOARD_EVENTS', 'edu.uca.renderable.argument', null, false);
	$m['DragContainer'] = $p['___import___']('pyjamas.ui.DragWidget.DragContainer', 'edu.uca.renderable.argument', null, false);
	$m['setDragStartPosition'] = $p['___import___']('edu.uca.util.DragElement.setDragStartPosition', 'edu.uca.renderable.argument', null, false);
	$m['Argument'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.renderable.argument.Argument';
		$method = $pyjs__bind_method2('__init__', function(accepts) {
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
				accepts = arguments[1];
				var kw = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kw === null || typeof kw != 'object' || kw['__name__'] != 'dict' || typeof kw['$pyjs_is_kwarg'] == 'undefined') {
					kw = arguments[arguments['length']+1];
				} else {
					delete kw['$pyjs_is_kwarg'];
				}
			}
			if (typeof kw == 'undefined') {
				kw = $p['__empty_dict']();
				if (typeof accepts != 'undefined') {
					if (accepts !== null && typeof accepts['$pyjs_is_kwarg'] != 'undefined') {
						kw = accepts;
						accepts = arguments[2];
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
			$m['DropHandler']['__init__'](self);
			$m['DragContainer']['__init__'](self);
			self['addDropListener'](self);
			self['accepts'] = accepts;
			self['addStyleName']('argument');
			self['enable'] = true;
			self['block'] = null;
			return null;
		}
	, 1, [null,['kw'],['self'],['accepts']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var mb,$and1,$and3,$and4,$and2;
			if ($p['bool'](($p['bool']($and1=$m['DROP_EVENTS']['__contains__']($m['DOM']['eventGetType'](event)))?!$p['bool']($p['getattr']($p['getattr'](self, 'block'), 'original')):$and1))) {
				mb = $m['getWorkspace']()['getMovingBlock']();
				if ($p['bool'](($p['bool']($and3=!$p['bool']($m['DOM']['isOrHasChild'](mb['getElement'](), self['getElement']())))?$p['getattr'](self, 'accepts')['__contains__']($p['getattr'](mb, 'blockType')):$and3))) {
					$m['DropHandler']['onBrowserEvent'](self, event);
				}
			}
			else if ($p['bool']($m['KEYBOARD_EVENTS']['__contains__']($m['DOM']['eventGetType'](event)))) {
				$m['KeyboardHandler']['onBrowserEvent'](self, event);
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		$method = $pyjs__bind_method2('onDragEnter', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			self['addStyleName']('highlight_hover');
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragEnter'] = $method;
		$method = $pyjs__bind_method2('onDragOver', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var dt;
			self['addStyleName']('highlight_hover');
			dt = $p['getattr'](event, 'dataTransfer');
			dt['dropEffect'] = 'copy';
			$m['DOM']['eventPreventDefault'](event);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragOver'] = $method;
		$method = $pyjs__bind_method2('onDragLeave', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var dt;
			self['removeStyleName']('highlight_hover');
			dt = $p['getattr'](event, 'dataTransfer');
			dt['dropEffect'] = 'none';
			$m['DOM']['eventPreventDefault'](event);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragLeave'] = $method;
		$method = $pyjs__bind_method2('onDrop', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			self['removeStyleName']('highlight_hover');
			$m['soundIn']['play']();
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDrop'] = $method;
		$method = $pyjs__bind_method2('getArgumentValue', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getArgumentValue'] = $method;
		$method = $pyjs__bind_method2('setArgumentValue', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['setArgumentValue'] = $method;
		$method = $pyjs__bind_method2('onDragStart', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$m['setDragStartPosition'](event);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragStart'] = $method;
		$method = $pyjs__bind_method2('onDragEnd', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$m['getWorkspace']()['setMovingBlock'](null);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragEnd'] = $method;
		var $bases = new Array($m['Element'],$m['DropHandler'],$m['DragContainer']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Argument', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.renderable.argument.Argument */


/* end module: edu.uca.renderable.argument.Argument */


/*
PYJS_DEPS: ['edu.uca.renderable.Element.Element', 'edu', 'edu.uca', 'edu.uca.renderable', 'edu.uca.renderable.Element', 'pyjamas.ui.DropHandler.DropHandler', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.DropHandler', 'pyjamas.DOM', 'edu.uca.Workspace.getWorkspace', 'edu.uca.Workspace', 'edu.uca.Workspace.soundIn', 'pyjamas.ui.DropHandler.DROP_EVENTS', 'pyjamas.ui.KeyboardListener.KeyboardHandler', 'pyjamas.ui.KeyboardListener', 'pyjamas.ui.KeyboardListener.KEYBOARD_EVENTS', 'pyjamas.ui.DragWidget.DragContainer', 'pyjamas.ui.DragWidget', 'edu.uca.util.DragElement.setDragStartPosition', 'edu.uca.util', 'edu.uca.util.DragElement']
*/
