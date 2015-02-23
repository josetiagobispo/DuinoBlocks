/* start module: edu.uca.renderable.hardware.DropdownPin */
$pyjs['loaded_modules']['edu.uca.renderable.hardware.DropdownPin'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.renderable.hardware.DropdownPin']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.renderable.hardware.DropdownPin'];
	if(typeof $pyjs['loaded_modules']['edu.uca.renderable.hardware'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.renderable.hardware']['__was_initialized__']) $p['___import___']('edu.uca.renderable.hardware', null);
	var $m = $pyjs['loaded_modules']['edu.uca.renderable.hardware.DropdownPin'];
	$m['__repr__'] = function() { return '<module: edu.uca.renderable.hardware.DropdownPin>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.renderable.hardware.DropdownPin';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.renderable.hardware']['DropdownPin'] = $pyjs['loaded_modules']['edu.uca.renderable.hardware.DropdownPin'];


	$m['MenuItenListener'] = $p['___import___']('edu.uca.ui.listener.MenuItenListener.MenuItenListener', 'edu.uca.renderable.hardware', null, false);
	$m['ClickHandler'] = $p['___import___']('pyjamas.ui.ClickListener.ClickHandler', 'edu.uca.renderable.hardware', null, false);
	$m['MouseHandler'] = $p['___import___']('pyjamas.ui.MouseListener.MouseHandler', 'edu.uca.renderable.hardware', null, false);
	$m['Element'] = $p['___import___']('edu.uca.renderable.Element.Element', 'edu.uca.renderable.hardware', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'edu.uca.renderable.hardware', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.renderable.hardware', null, false);
	$m['PopupPanel'] = $p['___import___']('pyjamas.ui.PopupPanel.PopupPanel', 'edu.uca.renderable.hardware', null, false);
	$m['ALL_PINS'] = $p['___import___']('edu.uca.util.Constants.ALL_PINS', 'edu.uca.renderable.hardware', null, false);
	$m['hardwares'] = $p['___import___']('edu.uca.Workspace.hardwares', 'edu.uca.renderable.hardware', null, false);
	$m['drawDropdownPin'] = function(self) {

		self['popup'] = $pyjs_kwargs_call(null, $m['PopupPanel'], null, null, [{'autoHide':true, 'modal':false, 'rootpanel':self}]);
		$m['DOM']['setStyleAttribute']($p['getattr']($p['getattr'](self, 'popup'), 'element'), 'position', 'static');
		self['dropdown_arrow'] = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createElement']('div'), 'StyleName':'dropdown_arrow'}]);
		self['title'] = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createSpan'](), 'StyleName':'title'}]);
		$m['DOM']['setInnerHTML'](self['title']['getElement'](), $p['getattr'](self, 'text'));
		self['add']($p['getattr'](self, 'title'));
		self['add']($pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'r'}]));
		self['add']($pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'coverup'}]));
		self['popup']['add']($p['getattr'](self, 'dropdown_arrow'));
		return null;
	};
	$m['drawDropdownPin']['__name__'] = 'drawDropdownPin';

	$m['drawDropdownPin']['__bind_type__'] = 0;
	$m['drawDropdownPin']['__args__'] = [null,null,['self']];
	$m['DropdownPin'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.renderable.hardware.DropdownPin';
		$method = $pyjs__bind_method2('__init__', function(component, mode, $$label) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var kw = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kw === null || typeof kw != 'object' || kw['__name__'] != 'dict' || typeof kw['$pyjs_is_kwarg'] == 'undefined') {
					var kw = arguments[arguments['length']+1];
				} else {
					delete kw['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				component = arguments[1];
				mode = arguments[2];
				$$label = arguments[3];
				var kw = arguments['length'] >= 5 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kw === null || typeof kw != 'object' || kw['__name__'] != 'dict' || typeof kw['$pyjs_is_kwarg'] == 'undefined') {
					kw = arguments[arguments['length']+1];
				} else {
					delete kw['$pyjs_is_kwarg'];
				}
			}
			if (typeof kw == 'undefined') {
				kw = $p['__empty_dict']();
				if (typeof $$label != 'undefined') {
					if ($$label !== null && typeof $$label['$pyjs_is_kwarg'] != 'undefined') {
						kw = $$label;
						$$label = arguments[4];
					}
				} else 				if (typeof mode != 'undefined') {
					if (mode !== null && typeof mode['$pyjs_is_kwarg'] != 'undefined') {
						kw = mode;
						mode = arguments[4];
					}
				} else 				if (typeof component != 'undefined') {
					if (component !== null && typeof component['$pyjs_is_kwarg'] != 'undefined') {
						kw = component;
						component = arguments[4];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kw = self;
						self = arguments[4];
					}
				} else {
				}
			}
			if (typeof $$label == 'undefined') $$label=arguments['callee']['__args__'][5][1];
			var $$label;
			$pyjs_kwargs_call($m['Element'], '__init__', null, kw, [{'Element':$m['DOM']['createElement']('li')}, self]);
			$m['ClickHandler']['__init__'](self);
			self['text'] = 'selecionar pino';
			self['component'] = component;
			self['mode'] = mode;
			self['$$label'] = $$label;
			self['addClickListener'](self);
			$m['drawDropdownPin'](self);
			self['selectedPin'] = null;
			return null;
		}
	, 1, [null,['kw'],['self'],['component'],['mode'],['$$label', '']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('setSelectedPin', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			$m['DOM']['setInnerHTML'](self['title']['getElement'](), value);
			self['selectedPin'] = value;
			if ($p['bool'](!$p['op_eq'](value, $p['getattr'](self, 'text')))) {
				self['title']['addStyleName']('titleOK');
			}
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['setSelectedPin'] = $method;
		$method = $pyjs__bind_method2('getSelectedPin', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'selectedPin');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getSelectedPin'] = $method;
		$method = $pyjs__bind_method2('hasSelectedPin', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return ($p['getattr'](self, 'selectedPin') !== null);
		}
	, 1, [null,null,['self']]);
		$cls_definition['hasSelectedPin'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $iter2_array,$iter2_nextval,$iter1_nextval,$iter2_iter,$iter1_idx,h,componentBlockList,$iter1_iter,$iter2_idx,values,$iter1_array,$iter2_type,usedPins,componentBlock,$iter1_type;
			if ($p['bool']($p['getattr']($p['getattr'](self, 'popup'), 'showing'))) {
				self['popup']['hide']();
			}
			else {
				values = $p['list']([]);
				usedPins = $p['list']([]);
				componentBlockList = $m['hardwares']['values']();
				$iter1_iter = componentBlockList;
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					componentBlock = $iter1_nextval['$nextval'];
					usedPins['extend'](componentBlock['getUsedPins']());
				}
				$iter2_iter = $m['ALL_PINS'];
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					h = $iter2_nextval['$nextval'];
					if ($p['bool'](!$p['bool'](usedPins['__contains__'](h)))) {
						values['append'](h);
					}
				}
				self['addValues'](values);
				self['popup']['show']();
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method2('ItenClick', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}
			var stateChange,oldValue;
			if ($p['bool'](!$p['bool']($p['getattr']($p['getattr'](self, 'component'), 'original')))) {
				oldValue = $p['getattr'](self, 'selectedPin');
				self['setSelectedPin'](value);
				if ($p['bool'](!$p['op_eq'](oldValue, value))) {
					stateChange = $p['___import___']('edu.uca.util.Serializable.stateChange', 'edu.uca.renderable.hardware', null, false);
					stateChange();
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['ItenClick'] = $method;
		$method = $pyjs__bind_method2('addValues', function(values) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				values = arguments[1];
			}
			var $iter3_idx,$iter3_type,value,$iter3_iter,$iter3_array,$iter3_nextval;
			self['removeValues']();
			$iter3_iter = values;
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				value = $iter3_nextval['$nextval'];
				self['addValue'](value);
			}
			return null;
		}
	, 1, [null,null,['self'],['values']]);
		$cls_definition['addValues'] = $method;
		$method = $pyjs__bind_method2('addValue', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			self['dropdown_arrow']['append']($pyjs_kwargs_call(null, $m['MenuItenListener'], null, null, [{'StyleName':'dropdownItem'}, $p['getattr'](self, 'ItenClick'), value]));
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['addValue'] = $method;
		$method = $pyjs__bind_method2('removeValues', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			self['dropdown_arrow']['removeAll']();
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['removeValues'] = $method;
		var $bases = new Array($m['Element'],$m['ClickHandler'],$m['MouseHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('DropdownPin', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.renderable.hardware.DropdownPin */


/* end module: edu.uca.renderable.hardware.DropdownPin */


/*
PYJS_DEPS: ['edu.uca.ui.listener.MenuItenListener.MenuItenListener', 'edu', 'edu.uca', 'edu.uca.ui', 'edu.uca.ui.listener', 'edu.uca.ui.listener.MenuItenListener', 'pyjamas.ui.ClickListener.ClickHandler', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.ClickListener', 'pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui.MouseListener', 'edu.uca.renderable.Element.Element', 'edu.uca.renderable', 'edu.uca.renderable.Element', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget', 'pyjamas.DOM', 'pyjamas.ui.PopupPanel.PopupPanel', 'pyjamas.ui.PopupPanel', 'edu.uca.util.Constants.ALL_PINS', 'edu.uca.util', 'edu.uca.util.Constants', 'edu.uca.Workspace.hardwares', 'edu.uca.Workspace', 'edu.uca.util.Serializable.stateChange', 'edu.uca.util.Serializable']
*/
