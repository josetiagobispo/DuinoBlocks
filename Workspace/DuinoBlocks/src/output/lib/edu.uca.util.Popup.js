/* start module: edu.uca.util.Popup */
$pyjs['loaded_modules']['edu.uca.util.Popup'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.util.Popup']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.util.Popup'];
	if(typeof $pyjs['loaded_modules']['edu.uca.util'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.util']['__was_initialized__']) $p['___import___']('edu.uca.util', null);
	var $m = $pyjs['loaded_modules']['edu.uca.util.Popup'];
	$m['__repr__'] = function() { return '<module: edu.uca.util.Popup>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.util.Popup';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.util']['Popup'] = $pyjs['loaded_modules']['edu.uca.util.Popup'];


	$m['HasHorizontalAlignment'] = $p['___import___']('pyjamas.ui.HasHorizontalAlignment', 'edu.uca.util', null, false);
	$m['KeyboardListener'] = $p['___import___']('pyjamas.ui.KeyboardListener', 'edu.uca.util', null, false);
	$m['KeyboardHandler'] = $p['___import___']('pyjamas.ui.KeyboardListener.KeyboardHandler', 'edu.uca.util', null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', 'edu.uca.util', null, false);
	$m['Element'] = $p['___import___']('edu.uca.renderable.Element.Element', 'edu.uca.util', null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', 'edu.uca.util', null, false);
	$m['DialogBox'] = $p['___import___']('pyjamas.ui.DialogBox.DialogBox', 'edu.uca.util', null, false);
	$m['Button'] = $p['___import___']('edu.uca.util.Button.Button', 'edu.uca.util', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'edu.uca.util', null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', 'edu.uca.util', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.util', null, false);
	$m['_'] = $p['___import___']('edu.uca.util.i18n._', 'edu.uca.util', null, false);
	$m['COMFIRM'] = 0;
	$m['CONFIRM_CANCEL'] = 1;
	$m['Popup'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.util.Popup';
		$method = $pyjs__bind_method2('__init__', function(title, okClick, cancelClick, options, hasBackground) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				title = arguments[1];
				okClick = arguments[2];
				cancelClick = arguments[3];
				options = arguments[4];
				hasBackground = arguments[5];
			}
			if (typeof okClick == 'undefined') okClick=arguments['callee']['__args__'][4][1];
			if (typeof cancelClick == 'undefined') cancelClick=arguments['callee']['__args__'][5][1];
			if (typeof options == 'undefined') options=arguments['callee']['__args__'][6][1];
			if (typeof hasBackground == 'undefined') hasBackground=arguments['callee']['__args__'][7][1];

			$pyjs_kwargs_call($m['DialogBox'], '__init__', null, null, [{'autoHide':false, 'modal':hasBackground, 'centered':true, 'StyleName':'dialog'}, self]);
			$m['KeyboardHandler']['__init__'](self);
			self['addKeyboardListener'](self);
			self['title'] = title;
			self['okClick'] = okClick;
			self['cancelClick'] = cancelClick;
			self['options'] = options;
			self['hasBackground'] = hasBackground;
			self['center'] = $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{'StyleName':'dialog_center'}]);
			self['draw']();
			return null;
		}
	, 1, [null,null,['self'],['title'],['okClick', null],['cancelClick', null],['options', (typeof ($usub1=1)=='number'?
			-$usub1:
			$p['op_usub']($usub1))],['hasBackground', true]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('setPopupPosition', function(left, top) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				left = arguments[1];
				top = arguments[2];
			}
			var $add2,$add3,$add1,$add4,$sub3,$sub2,$sub1,$sub4;
			if ($p['bool'](($p['cmp']($p['__op_add']($add1=top,$add2=self['getOffsetHeight']()), $m['Window']['getClientHeight']()) == 1))) {
				top = $p['__op_sub']($sub1=$m['Window']['getClientHeight'](),$sub2=self['getOffsetHeight']());
			}
			if ($p['bool'](($p['cmp']($p['__op_add']($add3=left,$add4=self['getOffsetWidth']()), $m['Window']['getClientWidth']()) == 1))) {
				left = $p['__op_sub']($sub3=$m['Window']['getClientWidth'](),$sub4=self['getOffsetWidth']());
			}
			$m['DialogBox']['setPopupPosition'](self, left, top);
			return null;
		}
	, 1, [null,null,['self'],['left'],['top']]);
		$cls_definition['setPopupPosition'] = $method;
		$method = $pyjs__bind_method2('onKeyUp', function(sender, keycode, modifiers) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}

			if ($p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_ESCAPE')))) {
				self['myCancelClick']();
			}
			else if ($p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_ENTER')))) {
				self['myOkClick']();
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyUp'] = $method;
		$method = $pyjs__bind_method2('draw', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var cancel,panelSouth,widget;
			self['setHTML']($p['getattr'](self, 'title'));
			panelSouth = $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{'StyleName':'dialog_south'}]);
			self['south'] = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createDiv'](), 'Width':'100%'}]);
			if ($p['bool']($p['op_eq']($p['getattr'](self, 'options'), $m['CONFIRM_CANCEL']))) {
				cancel = $pyjs_kwargs_call(null, $m['Button'], null, null, [{'classIcon':'icon-cancel'}, $m['_']('Cancel'), $p['getattr'](self, 'myCancelClick')]);
				cancel['addStyleName']('float_right');
				self['south']['add'](cancel);
			}
			self['okButton'] = $pyjs_kwargs_call(null, $m['Button'], null, null, [{'classIcon':'icon-ok'}, $m['_']('Confirm'), $p['getattr'](self, 'myOkClick')]);
			self['okButton']['addStyleName']('float_right');
			self['south']['add']($p['getattr'](self, 'okButton'));
			panelSouth['add']($p['getattr'](self, 'south'));
			panelSouth['setCellHorizontalAlignment']($p['getattr'](self, 'south'), $p['getattr']($m['HasHorizontalAlignment'], 'ALIGN_RIGHT'));
			widget = $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{'Width':'100%'}]);
			widget['add']($p['getattr'](self, 'center'));
			widget['add'](panelSouth);
			self['setWidget'](widget);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['draw'] = $method;
		$method = $pyjs__bind_method2('myOkClick', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['hide']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['myOkClick'] = $method;
		$method = $pyjs__bind_method2('myCancelClick', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['hide']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['myCancelClick'] = $method;
		$method = $pyjs__bind_method2('hide', function(autoClosed) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				autoClosed = arguments[1];
			}
			if (typeof autoClosed == 'undefined') autoClosed=arguments['callee']['__args__'][3][1];

			if ($p['bool']($p['getattr'](self, 'hasBackground'))) {
				$m['RootPanel']()['remove']($p['getattr'](self, 'background'));
			}
			return $pyjs_kwargs_call($m['DialogBox'], 'hide', null, null, [{'autoClosed':autoClosed}, self]);
		}
	, 1, [null,null,['self'],['autoClosed', false]]);
		$cls_definition['hide'] = $method;
		$method = $pyjs__bind_method2('show', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool']($p['getattr'](self, 'hasBackground'))) {
				self['background'] = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'diaglog_coverup'}]);
				self['background']['setHeight']($m['RootPanel']()['getOffsetHeight']());
				$m['RootPanel']()['add']($p['getattr'](self, 'background'));
			}
			$m['DialogBox']['show'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['show'] = $method;
		var $bases = new Array($m['DialogBox'],$m['KeyboardHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Popup', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.util.Popup */


/* end module: edu.uca.util.Popup */


/*
PYJS_DEPS: ['pyjamas.ui.HasHorizontalAlignment', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.KeyboardListener', 'pyjamas.ui.KeyboardListener.KeyboardHandler', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'edu.uca.renderable.Element.Element', 'edu', 'edu.uca', 'edu.uca.renderable', 'edu.uca.renderable.Element', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.DialogBox.DialogBox', 'pyjamas.ui.DialogBox', 'edu.uca.util.Button.Button', 'edu.uca.util', 'edu.uca.util.Button', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget', 'pyjamas.Window', 'pyjamas.DOM', 'edu.uca.util.i18n._', 'edu.uca.util.i18n']
*/
