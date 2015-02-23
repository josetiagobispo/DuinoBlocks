/* start module: edu.uca.util.Dropdown */
$pyjs['loaded_modules']['edu.uca.util.Dropdown'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.util.Dropdown']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.util.Dropdown'];
	if(typeof $pyjs['loaded_modules']['edu.uca.util'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.util']['__was_initialized__']) $p['___import___']('edu.uca.util', null);
	var $m = $pyjs['loaded_modules']['edu.uca.util.Dropdown'];
	$m['__repr__'] = function() { return '<module: edu.uca.util.Dropdown>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.util.Dropdown';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.util']['Dropdown'] = $pyjs['loaded_modules']['edu.uca.util.Dropdown'];


	$m['MenuItenListener'] = $p['___import___']('edu.uca.ui.listener.MenuItenListener.MenuItenListener', 'edu.uca.util', null, false);
	$m['MenuItenListenerIcon'] = $p['___import___']('edu.uca.ui.listener.MenuItenListener.MenuItenListenerIcon', 'edu.uca.util', null, false);
	$m['ClickHandler'] = $p['___import___']('pyjamas.ui.ClickListener.ClickHandler', 'edu.uca.util', null, false);
	$m['MouseHandler'] = $p['___import___']('pyjamas.ui.MouseListener.MouseHandler', 'edu.uca.util', null, false);
	$m['Element'] = $p['___import___']('edu.uca.renderable.Element.Element', 'edu.uca.util', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'edu.uca.util', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.util', null, false);
	$m['PopupPanel'] = $p['___import___']('pyjamas.ui.PopupPanel.PopupPanel', 'edu.uca.util', null, false);
	$m['Dropdown'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.util.Dropdown';
		$method = $pyjs__bind_method2('__init__', function(text, menuClick, itemClick, classIcon, rootPanel) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var kw = arguments['length'] >= 6 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kw === null || typeof kw != 'object' || kw['__name__'] != 'dict' || typeof kw['$pyjs_is_kwarg'] == 'undefined') {
					var kw = arguments[arguments['length']+1];
				} else {
					delete kw['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				text = arguments[1];
				menuClick = arguments[2];
				itemClick = arguments[3];
				classIcon = arguments[4];
				rootPanel = arguments[5];
				var kw = arguments['length'] >= 7 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kw === null || typeof kw != 'object' || kw['__name__'] != 'dict' || typeof kw['$pyjs_is_kwarg'] == 'undefined') {
					kw = arguments[arguments['length']+1];
				} else {
					delete kw['$pyjs_is_kwarg'];
				}
			}
			if (typeof kw == 'undefined') {
				kw = $p['__empty_dict']();
				if (typeof rootPanel != 'undefined') {
					if (rootPanel !== null && typeof rootPanel['$pyjs_is_kwarg'] != 'undefined') {
						kw = rootPanel;
						rootPanel = arguments[6];
					}
				} else 				if (typeof classIcon != 'undefined') {
					if (classIcon !== null && typeof classIcon['$pyjs_is_kwarg'] != 'undefined') {
						kw = classIcon;
						classIcon = arguments[6];
					}
				} else 				if (typeof itemClick != 'undefined') {
					if (itemClick !== null && typeof itemClick['$pyjs_is_kwarg'] != 'undefined') {
						kw = itemClick;
						itemClick = arguments[6];
					}
				} else 				if (typeof menuClick != 'undefined') {
					if (menuClick !== null && typeof menuClick['$pyjs_is_kwarg'] != 'undefined') {
						kw = menuClick;
						menuClick = arguments[6];
					}
				} else 				if (typeof text != 'undefined') {
					if (text !== null && typeof text['$pyjs_is_kwarg'] != 'undefined') {
						kw = text;
						text = arguments[6];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kw = self;
						self = arguments[6];
					}
				} else {
				}
			}
			if (typeof classIcon == 'undefined') classIcon=arguments['callee']['__args__'][6][1];
			if (typeof rootPanel == 'undefined') rootPanel=arguments['callee']['__args__'][7][1];

			$pyjs_kwargs_call($m['Element'], '__init__', null, kw, [{'Element':$m['DOM']['createElement']('li')}, self]);
			$m['ClickHandler']['__init__'](self);
			$m['MouseHandler']['__init__'](self);
			self['text'] = text;
			self['itemClick'] = itemClick;
			self['menuClick'] = menuClick;
			self['addClickListener'](self);
			self['classIcon'] = classIcon;
			self['rootPanel'] = rootPanel;
			self['draw']();
			return null;
		}
	, 1, [null,['kw'],['self'],['text'],['menuClick'],['itemClick'],['classIcon', ''],['rootPanel', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			if ($p['bool']($p['getattr']($p['getattr'](self, 'popup'), 'showing'))) {
				self['popup']['hide']();
			}
			else {
				if ($p['bool'](($p['getattr'](self, 'menuClick') !== null))) {
					self['menuClick']();
				}
				self['popup']['show']();
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method2('draw', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool'](!$p['op_eq']($p['getattr'](self, 'classIcon'), ''))) {
				self['icon'] = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createElement']('i'), 'StyleName':$p['getattr'](self, 'classIcon')}]);
				self['add']($p['getattr'](self, 'icon'));
			}
			if ($p['bool'](($p['getattr'](self, 'rootPanel') === null))) {
				self['popup'] = $pyjs_kwargs_call(null, $m['PopupPanel'], null, null, [{'autoHide':true, 'modal':false, 'rootpanel':self, 'StyleName':'dropdown_btn'}]);
				$m['DOM']['setStyleAttribute']($p['getattr']($p['getattr'](self, 'popup'), 'element'), 'position', 'static');
			}
			else {
				self['popup'] = $pyjs_kwargs_call(null, $m['PopupPanel'], null, null, [{'autoHide':true, 'modal':false, 'rootpanel':$p['getattr'](self, 'rootPanel'), 'StyleName':'dropdown_btn'}]);
			}
			self['dropdown_arrow'] = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createElement']('div'), 'StyleName':'dropdown_arrow'}]);
			self['title'] = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createSpan'](), 'StyleName':'title'}]);
			$m['DOM']['setInnerHTML'](self['title']['getElement'](), $p['getattr'](self, 'text'));
			self['add']($p['getattr'](self, 'title'));
			self['add']($pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'r'}]));
			self['add']($pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'coverup'}]));
			self['popup']['add']($p['getattr'](self, 'dropdown_arrow'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['draw'] = $method;
		$method = $pyjs__bind_method2('changeIcon', function(classIcon) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				classIcon = arguments[1];
			}

			$m['DOM']['setAttribute'](self['icon']['getElement'](), 'className', classIcon);
			return null;
		}
	, 1, [null,null,['self'],['classIcon']]);
		$cls_definition['changeIcon'] = $method;
		$method = $pyjs__bind_method2('setText', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['DOM']['setInnerHTML'](self['title']['getElement'](), $p['getattr'](self, 'text'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['setText'] = $method;
		$method = $pyjs__bind_method2('changeTexts', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter1_nextval,$iter1_type,$iter1_iter,iten,$iter1_array,$iter1_idx;
			$iter1_iter = $p['getattr']($p['getattr'](self, 'dropdown_arrow'), 'children');
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				iten = $iter1_nextval['$nextval'];
				iten['changeTexts']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['changeTexts'] = $method;
		$method = $pyjs__bind_method2('ItenClick', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			self['itemClick'](value);
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['ItenClick'] = $method;
		$method = $pyjs__bind_method2('getValues', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'dropdown_arrow'), 'children');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getValues'] = $method;
		$method = $pyjs__bind_method2('addValues', function(values) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				values = arguments[1];
			}
			var $iter2_nextval,$iter2_type,$iter2_iter,value,$iter2_idx,$iter2_array;
			self['removeValues']();
			$iter2_iter = values;
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				value = $iter2_nextval['$nextval'];
				self['addValue'](value);
			}
			return null;
		}
	, 1, [null,null,['self'],['values']]);
		$cls_definition['addValues'] = $method;
		$method = $pyjs__bind_method2('addValue', function(value, classIcon) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
				classIcon = arguments[2];
			}
			if (typeof classIcon == 'undefined') classIcon=arguments['callee']['__args__'][4][1];

			if ($p['bool']($p['op_eq'](classIcon, ''))) {
				self['dropdown_arrow']['append']($pyjs_kwargs_call(null, $m['MenuItenListener'], null, null, [{'StyleName':'dropdownItem'}, $p['getattr'](self, 'ItenClick'), value]));
			}
			else {
				self['dropdown_arrow']['append']($pyjs_kwargs_call(null, $m['MenuItenListenerIcon'], null, null, [{'StyleName':'dropdownItem'}, $p['getattr'](self, 'ItenClick'), value, classIcon]));
			}
			return null;
		}
	, 1, [null,null,['self'],['value'],['classIcon', '']]);
		$cls_definition['addValue'] = $method;
		$method = $pyjs__bind_method2('removeValues', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['dropdown_arrow']['removeAll']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['removeValues'] = $method;
		var $bases = new Array($m['Element'],$m['ClickHandler'],$m['MouseHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Dropdown', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.util.Dropdown */


/* end module: edu.uca.util.Dropdown */


/*
PYJS_DEPS: ['edu.uca.ui.listener.MenuItenListener.MenuItenListener', 'edu', 'edu.uca', 'edu.uca.ui', 'edu.uca.ui.listener', 'edu.uca.ui.listener.MenuItenListener', 'edu.uca.ui.listener.MenuItenListener.MenuItenListenerIcon', 'pyjamas.ui.ClickListener.ClickHandler', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.ClickListener', 'pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui.MouseListener', 'edu.uca.renderable.Element.Element', 'edu.uca.renderable', 'edu.uca.renderable.Element', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget', 'pyjamas.DOM', 'pyjamas.ui.PopupPanel.PopupPanel', 'pyjamas.ui.PopupPanel']
*/
