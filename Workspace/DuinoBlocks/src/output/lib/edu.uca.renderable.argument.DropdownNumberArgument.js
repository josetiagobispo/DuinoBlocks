/* start module: edu.uca.renderable.argument.DropdownNumberArgument */
$pyjs['loaded_modules']['edu.uca.renderable.argument.DropdownNumberArgument'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.renderable.argument.DropdownNumberArgument']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.renderable.argument.DropdownNumberArgument'];
	if(typeof $pyjs['loaded_modules']['edu.uca.renderable.argument'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.renderable.argument']['__was_initialized__']) $p['___import___']('edu.uca.renderable.argument', null);
	var $m = $pyjs['loaded_modules']['edu.uca.renderable.argument.DropdownNumberArgument'];
	$m['__repr__'] = function() { return '<module: edu.uca.renderable.argument.DropdownNumberArgument>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.renderable.argument.DropdownNumberArgument';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.renderable.argument']['DropdownNumberArgument'] = $pyjs['loaded_modules']['edu.uca.renderable.argument.DropdownNumberArgument'];


	$m['NumberArgument'] = $p['___import___']('edu.uca.renderable.argument.NumberArgument.NumberArgument', 'edu.uca.renderable.argument', null, false);
	$m['MouseHandler'] = $p['___import___']('pyjamas.ui.MouseListener.MouseHandler', 'edu.uca.renderable.argument', null, false);
	$m['Element'] = $p['___import___']('edu.uca.renderable.Element.Element', 'edu.uca.renderable.argument', null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', 'edu.uca.renderable.argument', null, false);
	$m['ONMOUSEDOWN'] = $p['___import___']('pyjamas.ui.Event.ONMOUSEDOWN', 'edu.uca.renderable.argument', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.renderable.argument', null, false);
	$m['MenuItenListener'] = $p['___import___']('edu.uca.ui.listener.MenuItenListener.MenuItenListener', 'edu.uca.renderable.argument', null, false);
	$m['MenuButtonListener'] = $p['___import___']('edu.uca.ui.listener.MenuButtonListener.MenuButtonListener', 'edu.uca.renderable.argument', null, false);
	$m['drawDropdownNumberArgument'] = function(s, v, b, i) {
		var $iter1_nextval,$iter1_type,value,$iter1_iter,$iter1_array,$iter1_idx;
		s['dropdown'] = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'dropdown'}]);
		$iter1_iter = v;
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
			value = $iter1_nextval['$nextval'];
			s['dropdown']['append']($pyjs_kwargs_call(null, $m['MenuItenListener'], null, null, [{'StyleName':'dropdownItem'}, i, value]));
		}
		s['btn'] = $pyjs_kwargs_call(null, $m['MenuButtonListener'], null, null, [{'StyleName':'dropdown_btn'}, b]);
		s['btn']['append']($p['getattr'](s, 'dropdown'));
		s['append']($p['getattr'](s, 'btn'));
		return null;
	};
	$m['drawDropdownNumberArgument']['__name__'] = 'drawDropdownNumberArgument';

	$m['drawDropdownNumberArgument']['__bind_type__'] = 0;
	$m['drawDropdownNumberArgument']['__args__'] = [null,null,['s'],['v'],['b'],['i']];
	$m['DropdownNumberArgument'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.renderable.argument.DropdownNumberArgument';
		$method = $pyjs__bind_method2('__init__', function(values, block) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				values = arguments[1];
				block = arguments[2];
			}

			$pyjs_kwargs_call($m['NumberArgument'], '__init__', null, null, [{'validation':false}, self]);
			$m['MouseHandler']['__init__'](self);
			self['values'] = values;
			self['block'] = block;
			self['input']['setReadonly'](true);
			$m['drawDropdownNumberArgument'](self, $p['getattr'](self, 'values'), $p['getattr'](self, 'ButtonDown'), $p['getattr'](self, 'ItenClick'));
			$m['RootPanel']()['addMouseListener'](self);
			$m['DOM']['sinkEvents']($m['RootPanel']()['getElement'](), ($m['ONMOUSEDOWN'])|($m['DOM']['getEventsSunk']($m['RootPanel']()['getElement']())));
			return null;
		}
	, 1, [null,null,['self'],['values'],['block']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_event_targets_btn', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $and1,$and2,target;
			target = $m['DOM']['eventGetTarget'](event);
			return ($p['bool']($and1=target)?$m['DOM']['isOrHasChild'](self['btn']['getElement'](), target):$and1);
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['_event_targets_btn'] = $method;
		$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$m['NumberArgument']['onBrowserEvent'](self, event);
			if ($p['bool']($p['op_eq']($m['DOM']['eventGetType'](event), 'mousedown'))) {
				if ($p['bool'](self['_event_targets_btn'](event))) {
					$m['DOM']['eventStopPropagation'](event);
				}
			}
			$m['MouseHandler']['onBrowserEvent'](self, event);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		$method = $pyjs__bind_method2('onMouseDown', function(sender, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}

			self['dropdown']['setStyleAttribute']('display', 'none');
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseDown'] = $method;
		$method = $pyjs__bind_method2('ButtonDown', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['dropdown']['setStyleAttribute']('display', 'block');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['ButtonDown'] = $method;
		$method = $pyjs__bind_method2('ItenClick', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}
			var oldValue;
			self['dropdown']['setStyleAttribute']('display', 'none');
			if ($p['bool'](!$p['bool']($p['getattr']($p['getattr'](self, 'block'), 'original')))) {
				oldValue = self['input']['getText']();
				self['input']['setText'](value);
				self['onInput'](self);
				if ($p['bool'](!$p['op_eq'](oldValue, value))) {
					self['onChange'](self);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['ItenClick'] = $method;
		$method = $pyjs__bind_method2('getArgumentValue', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool'](self['input']['getText']()['isalnum']())) {
				return self['input']['getText']();
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

			self['input']['setText'](value);
			self['onInput']();
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['setArgumentValue'] = $method;
		var $bases = new Array($m['NumberArgument'],$m['MouseHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('DropdownNumberArgument', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.renderable.argument.DropdownNumberArgument */


/* end module: edu.uca.renderable.argument.DropdownNumberArgument */


/*
PYJS_DEPS: ['edu.uca.renderable.argument.NumberArgument.NumberArgument', 'edu', 'edu.uca', 'edu.uca.renderable', 'edu.uca.renderable.argument', 'edu.uca.renderable.argument.NumberArgument', 'pyjamas.ui.MouseListener.MouseHandler', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.MouseListener', 'edu.uca.renderable.Element.Element', 'edu.uca.renderable.Element', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.Event.ONMOUSEDOWN', 'pyjamas.ui.Event', 'pyjamas.DOM', 'edu.uca.ui.listener.MenuItenListener.MenuItenListener', 'edu.uca.ui', 'edu.uca.ui.listener', 'edu.uca.ui.listener.MenuItenListener', 'edu.uca.ui.listener.MenuButtonListener.MenuButtonListener', 'edu.uca.ui.listener.MenuButtonListener']
*/
