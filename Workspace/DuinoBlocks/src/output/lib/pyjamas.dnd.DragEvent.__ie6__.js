/* start module: pyjamas.dnd.DragEvent */
$pyjs['loaded_modules']['pyjamas.dnd.DragEvent'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.dnd.DragEvent']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.dnd.DragEvent'];
	if(typeof $pyjs['loaded_modules']['pyjamas.dnd'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.dnd']['__was_initialized__']) $p['___import___']('pyjamas.dnd', null);
	var $m = $pyjs['loaded_modules']['pyjamas.dnd.DragEvent'];
	$m['__repr__'] = function() { return '<module: pyjamas.dnd.DragEvent>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.dnd.DragEvent';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.dnd']['DragEvent'] = $pyjs['loaded_modules']['pyjamas.dnd.DragEvent'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.dnd', null, false);
	$m['DragEvent'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.dnd.DragEvent';
		$cls_definition['relatedTarget'] = null;
		$cls_definition['detail'] = 0;
		$cls_definition['returnValue'] = true;
		$method = $pyjs__bind_method2('__init__', function(evt, type, dataTransfer, target) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				evt = arguments[1];
				type = arguments[2];
				dataTransfer = arguments[3];
				target = arguments[4];
			}
			if (typeof target == 'undefined') target=arguments['callee']['__args__'][6][1];

			self['evt'] = evt;
			self['type'] = type;
			self['setTarget'](target);
			self['dataTransfer'] = dataTransfer;
			self['canBubble'] = true;
			if ($p['bool']($p['list'](['dragleave', 'dragend'])['__contains__']($p['getattr'](self, 'type')))) {
				self['cancelable'] = false;
			}
			else {
				self['cancelable'] = true;
			}
			return null;
		}
	, 1, [null,null,['self'],['evt'],['type'],['dataTransfer'],['target', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('setTarget', function(target) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				target = arguments[1];
			}
			if (typeof target == 'undefined') target=arguments['callee']['__args__'][3][1];

			if ($p['bool']((target !== null))) {
				self['srcElement'] = target;
			}
			else {
				self['srcElement'] = $m['DOM']['eventGetTarget']($p['getattr'](self, 'evt'));
			}
			return null;
		}
	, 1, [null,null,['self'],['target', null]]);
		$cls_definition['setTarget'] = $method;
		$method = $pyjs__bind_method2('stopPropagation', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['evt']['stopPropagation']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['stopPropagation'] = $method;
		$method = $pyjs__bind_method2('screenX', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'evt'), 'screenX');
		}
	, 1, [null,null,['self']]);
		$cls_definition['screenX'] = $p['property']($p['staticmethod']($method));
		$method = $pyjs__bind_method2('screenY', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'evt'), 'screenY');
		}
	, 1, [null,null,['self']]);
		$cls_definition['screenY'] = $p['property']($p['staticmethod']($method));
		$method = $pyjs__bind_method2('pageX', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'evt'), 'pageX');
		}
	, 1, [null,null,['self']]);
		$cls_definition['pageX'] = $p['property']($p['staticmethod']($method));
		$method = $pyjs__bind_method2('pageY', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'evt'), 'pageY');
		}
	, 1, [null,null,['self']]);
		$cls_definition['pageY'] = $p['property']($p['staticmethod']($method));
		$method = $pyjs__bind_method2('clientX', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'evt'), 'clientX');
		}
	, 1, [null,null,['self']]);
		$cls_definition['clientX'] = $p['property']($p['staticmethod']($method));
		$method = $pyjs__bind_method2('clientY', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'evt'), 'clientY');
		}
	, 1, [null,null,['self']]);
		$cls_definition['clientY'] = $p['property']($p['staticmethod']($method));
		$method = $pyjs__bind_method2('altKey', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'evt'), 'altKey');
		}
	, 1, [null,null,['self']]);
		$cls_definition['altKey'] = $p['property']($p['staticmethod']($method));
		$method = $pyjs__bind_method2('ctrlKey', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'evt'), 'ctrlKey');
		}
	, 1, [null,null,['self']]);
		$cls_definition['ctrlKey'] = $p['property']($p['staticmethod']($method));
		$method = $pyjs__bind_method2('shiftKey', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'evt'), 'shiftKey');
		}
	, 1, [null,null,['self']]);
		$cls_definition['shiftKey'] = $p['property']($p['staticmethod']($method));
		$method = $pyjs__bind_method2('metaKey', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'evt'), 'metaKey');
		}
	, 1, [null,null,['self']]);
		$cls_definition['metaKey'] = $p['property']($p['staticmethod']($method));
		$method = $pyjs__bind_method2('button', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'evt'), 'button');
		}
	, 1, [null,null,['self']]);
		$cls_definition['button'] = $p['property']($p['staticmethod']($method));
		$method = $pyjs__bind_method2('preventDefault', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['returnValue'] = false;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['preventDefault'] = $method;
		$method = $pyjs__bind_method2('initDragEvent', function(type, canBubble, cancelable, dummy, detail, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget, dataTransfer) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				type = arguments[1];
				canBubble = arguments[2];
				cancelable = arguments[3];
				dummy = arguments[4];
				detail = arguments[5];
				screenX = arguments[6];
				screenY = arguments[7];
				clientX = arguments[8];
				clientY = arguments[9];
				ctrlKey = arguments[10];
				altKey = arguments[11];
				shiftKey = arguments[12];
				metaKey = arguments[13];
				button = arguments[14];
				relatedTarget = arguments[15];
				dataTransfer = arguments[16];
			}

			throw ($p['NotImplemented']('Instanciate this class with a mouse event.'));
			return null;
		}
	, 1, [null,null,['self'],['type'],['canBubble'],['cancelable'],['dummy'],['detail'],['screenX'],['screenY'],['clientX'],['clientY'],['ctrlKey'],['altKey'],['shiftKey'],['metaKey'],['button'],['relatedTarget'],['dataTransfer']]);
		$cls_definition['initDragEvent'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('DragEvent', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.dnd.DragEvent */


/* end module: pyjamas.dnd.DragEvent */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas']
*/
