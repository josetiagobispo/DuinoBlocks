/* start module: edu.uca.ui.CategoriesHardware */
$pyjs['loaded_modules']['edu.uca.ui.CategoriesHardware'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.ui.CategoriesHardware']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.ui.CategoriesHardware'];
	if(typeof $pyjs['loaded_modules']['edu.uca.ui'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.ui']['__was_initialized__']) $p['___import___']('edu.uca.ui', null);
	var $m = $pyjs['loaded_modules']['edu.uca.ui.CategoriesHardware'];
	$m['__repr__'] = function() { return '<module: edu.uca.ui.CategoriesHardware>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.ui.CategoriesHardware';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.ui']['CategoriesHardware'] = $pyjs['loaded_modules']['edu.uca.ui.CategoriesHardware'];


	$m['createdBlocks'] = $p['___import___']('edu.uca.Workspace.createdBlocks', 'edu.uca.ui', null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', 'edu.uca.ui', null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', 'edu.uca.ui', null, false);
	$m['Element'] = $p['___import___']('edu.uca.renderable.Element.Element', 'edu.uca.ui', null, false);
	$m['FocusWidget'] = $p['___import___']('pyjamas.ui.FocusWidget.FocusWidget', 'edu.uca.ui', null, false);
	$m['Popup'] = $p['___import___']('edu.uca.util.Popup.Popup', 'edu.uca.ui', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'edu.uca.ui', null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', 'edu.uca.ui', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.ui', null, false);
	$m['component_led'] = $p['___import___']('edu.uca.renderable.hardware.ArduinoHardwares.component_led', 'edu.uca.ui', null, false);
	$m['component_button'] = $p['___import___']('edu.uca.renderable.hardware.ArduinoHardwares.component_button', 'edu.uca.ui', null, false);
	$m['component_rgb_led'] = $p['___import___']('edu.uca.renderable.hardware.ArduinoHardwares.component_rgb_led', 'edu.uca.ui', null, false);
	$m['component_knob'] = $p['___import___']('edu.uca.renderable.hardware.ArduinoHardwares.component_knob', 'edu.uca.ui', null, false);
	$m['component_ldr'] = $p['___import___']('edu.uca.renderable.hardware.ArduinoHardwares.component_ldr', 'edu.uca.ui', null, false);
	$m['component_servo'] = $p['___import___']('edu.uca.renderable.hardware.ArduinoHardwares.component_servo', 'edu.uca.ui', null, false);
	$m['component_buzzer'] = $p['___import___']('edu.uca.renderable.hardware.ArduinoHardwares.component_buzzer', 'edu.uca.ui', null, false);
	$m['component_motor'] = $p['___import___']('edu.uca.renderable.hardware.ArduinoHardwares.component_motor', 'edu.uca.ui', null, false);
	$m['component_thermistor'] = $p['___import___']('edu.uca.renderable.hardware.ArduinoHardwares.component_thermistor', 'edu.uca.ui', null, false);
	$m['component_lcd'] = $p['___import___']('edu.uca.renderable.hardware.ArduinoHardwares.component_lcd', 'edu.uca.ui', null, false);
	$m['component_display7seg'] = $p['___import___']('edu.uca.renderable.hardware.ArduinoHardwares.component_display7seg', 'edu.uca.ui', null, false);
	$m['component_joystick'] = $p['___import___']('edu.uca.renderable.hardware.ArduinoHardwares.component_joystick', 'edu.uca.ui', null, false);
	$m['component_keypad'] = $p['___import___']('edu.uca.renderable.hardware.ArduinoHardwares.component_keypad', 'edu.uca.ui', null, false);
	$m['component_IR'] = $p['___import___']('edu.uca.renderable.hardware.ArduinoHardwares.component_IR', 'edu.uca.ui', null, false);
	$m['_'] = $p['___import___']('edu.uca.util.i18n._', 'edu.uca.ui', null, false);
	$m['TabTitle'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.ui.CategoriesHardware';
		$method = $pyjs__bind_method2('__init__', function(tabName, tabId) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tabName = arguments[1];
				tabId = arguments[2];
			}

			$pyjs_kwargs_call($m['Widget'], '__init__', null, null, [{'Element':$m['DOM']['createElement']('a')}, self]);
			self['tabName'] = tabName;
			$m['DOM']['setInnerHTML'](self['getElement'](), $p['getattr'](self, 'tabName'));
			self['setID'](tabId);
			return null;
		}
	, 1, [null,null,['self'],['tabName'],['tabId']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('changeTexts', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['DOM']['setInnerHTML'](self['getElement'](), $m['_']($p['getattr'](self, 'tabName')));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['changeTexts'] = $method;
		var $bases = new Array($m['Widget']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TabTitle', $p['tuple']($bases), $data);
	})();
	$m['CategoryPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.ui.CategoriesHardware';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['VerticalPanel']['__init__'](self);
			self['myBlocksSubCat'] = null;
			self['$$label'] = '';
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('changeTexts', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter1_nextval,$iter1_type,$iter1_iter,$iter1_array,subCat,$iter1_idx;
			$iter1_iter = $p['getattr'](self, 'children');
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				subCat = $iter1_nextval['$nextval'];
				subCat['changeTexts']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['changeTexts'] = $method;
		$method = $pyjs__bind_method2('addSubCategory', function(block) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
			}

			if ($p['bool']($p['op_eq']($p['getattr'](self, 'myBlocksSubCat'), null))) {
				self['myBlocksSubCat'] = (typeof SubCategoryPanel == "undefined"?$m['SubCategoryPanel']:SubCategoryPanel)($m['_']('My Blocks'), $p['getattr'](self, '$$label'));
				self['add']($p['getattr'](self, 'myBlocksSubCat'));
			}
			self['myBlocksSubCat']['addBlock'](block);
			return null;
		}
	, 1, [null,null,['self'],['block']]);
		$cls_definition['addSubCategory'] = $method;
		var $bases = new Array($m['VerticalPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('CategoryPanel', $p['tuple']($bases), $data);
	})();
	$m['SubCategoryPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.ui.CategoriesHardware';
		$method = $pyjs__bind_method2('__init__', function(subCategoryName, subCategoryClassName, openList) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				subCategoryName = arguments[1];
				subCategoryClassName = arguments[2];
				openList = arguments[3];
			}
			if (typeof subCategoryName == 'undefined') subCategoryName=arguments['callee']['__args__'][3][1];
			if (typeof subCategoryClassName == 'undefined') subCategoryClassName=arguments['callee']['__args__'][4][1];
			if (typeof openList == 'undefined') openList=arguments['callee']['__args__'][5][1];

			self['list'] = $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{'StyleName':'block_list'}]);
			self['list']['setStyleAttribute']('display', 'block');
			$pyjs_kwargs_call($m['VerticalPanel'], '__init__', null, null, [{'StyleName':'SubCategoryPanel'}, self]);
			self['subCategoryName'] = subCategoryName;
			if ($p['bool'](!$p['op_eq'](subCategoryName, ''))) {
				self['title'] = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createElement']('dt'), 'StyleName':subCategoryClassName}]);
				$m['DOM']['setInnerHTML'](self['title']['getElement'](), $p['getattr'](self, 'subCategoryName'));
				self['collapse'] = $pyjs_kwargs_call(null, $m['FocusWidget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'collapse close_up'}]);
				self['collapse']['addClickListener']($p['getattr'](self, 'showHide'));
				self['title']['add']($p['getattr'](self, 'collapse'));
				self['add']($p['getattr'](self, 'title'));
				if ($p['bool'](openList)) {
					self['list']['setStyleAttribute']('display', 'block');
					self['collapse']['setStyleName']('collapse close_up');
				}
				else {
					self['list']['setStyleAttribute']('display', 'none');
					self['collapse']['setStyleName']('collapse open_down');
				}
			}
			self['add']($p['getattr'](self, 'list'));
			self['blocks'] = $p['list']([]);
			return null;
		}
	, 1, [null,null,['self'],['subCategoryName', ''],['subCategoryClassName', ''],['openList', true]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('changeTexts', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter2_nextval,$iter2_type,$iter2_iter,$iter2_idx,block,$iter2_array;
			if ($p['bool'](!$p['op_eq']($p['getattr'](self, 'subCategoryName'), ''))) {
				$m['DOM']['setInnerHTML'](self['title']['getElement'](), $m['_']($p['getattr'](self, 'subCategoryName')));
				self['title']['add']($p['getattr'](self, 'collapse'));
			}
			$iter2_iter = $p['getattr'](self, 'blocks');
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				block = $iter2_nextval['$nextval'];
				block['changeTexts']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['changeTexts'] = $method;
		$method = $pyjs__bind_method2('addBlock', function(block, classHelp, beforeIndex) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				classHelp = arguments[2];
				beforeIndex = arguments[3];
			}
			if (typeof classHelp == 'undefined') classHelp=arguments['callee']['__args__'][4][1];
			if (typeof beforeIndex == 'undefined') beforeIndex=arguments['callee']['__args__'][5][1];
			var info,panel;
			panel = $m['HorizontalPanel']();
			panel['add'](block);
			info = $pyjs_kwargs_call(null, $m['Label'], null, null, [{'StyleName':'info_btn'}, 'i']);
			info['block'] = block;
			info['classHelp'] = classHelp;
			info['addClickListener']($p['getattr'](self, 'showInfo'));
			panel['add'](info);
			if ($p['bool']((beforeIndex !== null))) {
				self['list']['insert'](panel, self['list']['getBody'](), 0);
			}
			else {
				self['list']['add'](panel);
			}
			self['list']['setStyleName'](self['list']['getWidgetTd'](panel), 'block_info');
			self['blocks']['append'](block);
			return null;
		}
	, 1, [null,null,['self'],['block'],['classHelp', 'help_default'],['beforeIndex', null]]);
		$cls_definition['addBlock'] = $method;
		$method = $pyjs__bind_method2('removeBlock', function(block) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
			}

			self['list']['remove'](block['getParent']());
			self['blocks']['remove'](block);
			return null;
		}
	, 1, [null,null,['self'],['block']]);
		$cls_definition['removeBlock'] = $method;
		$method = $pyjs__bind_method2('addWidget', function(widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			self['list']['add'](widget);
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['addWidget'] = $method;
		$method = $pyjs__bind_method2('showInfo', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var popup;
			if ($p['bool']($p['list'](['commandType', 'numericType', 'logicType', 'alphaNumericType'])['__contains__']($p['getattr']($p['getattr'](sender, 'block'), '$$name')))) {
				$m['createdBlocks']['__getitem__']($p['getattr']($p['getattr'](sender, 'block'), 'varName'))['show']();
			}
			else {
				popup = $m['Popup']('<b>Ajuda</b>', null, null);
				popup['center']['append']($pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':$p['getattr'](sender, 'classHelp')}]));
				popup['caption']['setStyleAttribute']('text-align', 'center');
				popup['show']();
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['showInfo'] = $method;
		$method = $pyjs__bind_method2('showHide', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool']($p['op_eq'](self['list']['getStyleAttribute']('display'), 'none'))) {
				self['list']['setStyleAttribute']('display', 'block');
				self['collapse']['setStyleName']('collapse close_up');
			}
			else {
				self['list']['setStyleAttribute']('display', 'none');
				self['collapse']['setStyleName']('collapse open_down');
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['showHide'] = $method;
		$method = $pyjs__bind_method2('changeTitle', function(count) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				count = arguments[1];
			}
			var $add2,$add3,$add1,$add4;
			$m['DOM']['setInnerHTML'](self['title']['getElement'](), $p['__op_add']($add3=$p['__op_add']($add1=$p['getattr'](self, 'subCategoryName'),$add2=': #'),$add4=$p['str'](count)));
			self['title']['add']($p['getattr'](self, 'collapse'));
			return null;
		}
	, 1, [null,null,['self'],['count']]);
		$cls_definition['changeTitle'] = $method;
		var $bases = new Array($m['VerticalPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('SubCategoryPanel', $p['tuple']($bases), $data);
	})();
	$m['Input'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.ui.CategoriesHardware';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var sub;
			$m['CategoryPanel']['__init__'](self);
			self['$$label'] = 'input_lbl';
			sub = $m['SubCategoryPanel']();
			sub['addBlock']($m['component_button']());
			sub['addBlock']($m['component_knob']());
			sub['addBlock']($m['component_ldr']());
			sub['addBlock']($m['component_thermistor']());
			sub['addBlock']($m['component_joystick']());
			sub['addBlock']($m['component_keypad']());
			sub['addBlock']($m['component_IR']());
			self['add'](sub);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['CategoryPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Input', $p['tuple']($bases), $data);
	})();
	$m['Output'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.ui.CategoriesHardware';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var sub;
			$m['CategoryPanel']['__init__'](self);
			self['$$label'] = 'output_lbl';
			sub = $m['SubCategoryPanel']();
			sub['addBlock']($m['component_led']());
			sub['addBlock']($m['component_rgb_led']());
			sub['addBlock']($m['component_buzzer']());
			sub['addBlock']($m['component_servo']());
			sub['addBlock']($m['component_motor']());
			sub['addBlock']($m['component_lcd']());
			sub['addBlock']($m['component_display7seg']());
			self['add'](sub);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['CategoryPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Output', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.ui.CategoriesHardware */


/* end module: edu.uca.ui.CategoriesHardware */


/*
PYJS_DEPS: ['edu.uca.Workspace.createdBlocks', 'edu', 'edu.uca', 'edu.uca.Workspace', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'edu.uca.renderable.Element.Element', 'edu.uca.renderable', 'edu.uca.renderable.Element', 'pyjamas.ui.FocusWidget.FocusWidget', 'pyjamas.ui.FocusWidget', 'edu.uca.util.Popup.Popup', 'edu.uca.util', 'edu.uca.util.Popup', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.DOM', 'edu.uca.renderable.hardware.ArduinoHardwares.component_led', 'edu.uca.renderable.hardware', 'edu.uca.renderable.hardware.ArduinoHardwares', 'edu.uca.renderable.hardware.ArduinoHardwares.component_button', 'edu.uca.renderable.hardware.ArduinoHardwares.component_rgb_led', 'edu.uca.renderable.hardware.ArduinoHardwares.component_knob', 'edu.uca.renderable.hardware.ArduinoHardwares.component_ldr', 'edu.uca.renderable.hardware.ArduinoHardwares.component_servo', 'edu.uca.renderable.hardware.ArduinoHardwares.component_buzzer', 'edu.uca.renderable.hardware.ArduinoHardwares.component_motor', 'edu.uca.renderable.hardware.ArduinoHardwares.component_thermistor', 'edu.uca.renderable.hardware.ArduinoHardwares.component_lcd', 'edu.uca.renderable.hardware.ArduinoHardwares.component_display7seg', 'edu.uca.renderable.hardware.ArduinoHardwares.component_joystick', 'edu.uca.renderable.hardware.ArduinoHardwares.component_keypad', 'edu.uca.renderable.hardware.ArduinoHardwares.component_IR', 'edu.uca.util.i18n._', 'edu.uca.util.i18n']
*/
