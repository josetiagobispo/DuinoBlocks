/* start module: edu.uca.util.PopupNewVar */
$pyjs['loaded_modules']['edu.uca.util.PopupNewVar'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.util.PopupNewVar']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.util.PopupNewVar'];
	if(typeof $pyjs['loaded_modules']['edu.uca.util'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.util']['__was_initialized__']) $p['___import___']('edu.uca.util', null);
	var $m = $pyjs['loaded_modules']['edu.uca.util.PopupNewVar'];
	$m['__repr__'] = function() { return '<module: edu.uca.util.PopupNewVar>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.util.PopupNewVar';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.util']['PopupNewVar'] = $pyjs['loaded_modules']['edu.uca.util.PopupNewVar'];


	$m['ChooseTypeVarPanel'] = $p['___import___']('edu.uca.util.ChooseTypeVarPanel.ChooseTypeVarPanel', 'edu.uca.util', null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', 'edu.uca.util', null, false);
	$m['Popup'] = $p['___import___']('edu.uca.util.Popup.Popup', 'edu.uca.util', null, false);
	$m['CONFIRM_CANCEL'] = $p['___import___']('edu.uca.util.Popup.CONFIRM_CANCEL', 'edu.uca.util', null, false);
	$m['vars'] = $p['___import___']('edu.uca.Workspace.vars', 'edu.uca.util', null, false);
	$m['createdBlocks'] = $p['___import___']('edu.uca.Workspace.createdBlocks', 'edu.uca.util', null, false);
	$m['Element'] = $p['___import___']('edu.uca.renderable.Element.Element', 'edu.uca.util', null, false);
	$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', 'edu.uca.util', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'edu.uca.util', null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', 'edu.uca.util', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.util', null, false);
	$m['_'] = $p['___import___']('edu.uca.util.i18n._', 'edu.uca.util', null, false);
	$m['PopupNewVar'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.util.PopupNewVar';
		$method = $pyjs__bind_method2('__init__', function(okClick, cancelClick) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				okClick = arguments[1];
				cancelClick = arguments[2];
			}

			$m['Popup']['__init__'](self, '<b>Nova Vari&aacute;vel</b>', okClick, cancelClick, $m['CONFIRM_CANCEL']);
			return null;
		}
	, 1, [null,null,['self'],['okClick'],['cancelClick']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('draw', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var namePanel,$add2,$add1;
			$m['Popup']['draw'](self);
			namePanel = $m['HorizontalPanel']();
			namePanel['add']($m['Label']($p['__op_add']($add1=$m['_']('Name'),$add2=':')));
			self['textBox'] = $m['TextBox']();
			self['textBox']['setMaxLength'](15);
			self['textBox']['setStyleAttribute']('marginLeft', 10);
			namePanel['add']($p['getattr'](self, 'textBox'));
			self['center']['add'](namePanel);
			self['choose'] = $m['ChooseTypeVarPanel']();
			self['center']['add']($p['getattr'](self, 'choose'));
			self['textBox']['addInputListener'](self);
			self['message'] = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createDiv']()}]);
			self['message']['add']($pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'not_image'}]));
			self['message']['add']($pyjs_kwargs_call(null, $m['Label'], null, null, [{'text':$m['_']('Name already used'), 'wordWrap':false, 'StyleName':'not_message'}]));
			self['onInput']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['draw'] = $method;
		$method = $pyjs__bind_method2('onInput', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $or1,$or2;
			if ($p['bool']($p['op_eq'](self['textBox']['getText']()['count'](' '), $p['len'](self['textBox']['getText']())))) {
				self['okButton']['addStyleName']('disabled');
				self['south']['remove']($p['getattr'](self, 'message'));
			}
			else if ($p['bool'](($p['bool']($or1=$m['vars']['__contains__'](self['textBox']['getText']()))?$or1:$m['createdBlocks']['__contains__'](self['textBox']['getText']())))) {
				self['okButton']['addStyleName']('disabled');
				self['south']['add']($p['getattr'](self, 'message'));
			}
			else {
				self['okButton']['removeStyleName']('disabled');
				self['south']['remove']($p['getattr'](self, 'message'));
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onInput'] = $method;
		$method = $pyjs__bind_method2('myOkClick', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool'](!self['okButton']['getStyleName']()['__contains__']('disabled'))) {
				$m['Popup']['myOkClick'](self);
				self['okClick'](self['textBox']['getText'](), $p['getattr']($p['getattr'](self, 'choose'), 'selectedType'));
			}
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

			$m['Popup']['myCancelClick'](self);
			if ($p['bool'](($p['getattr'](self, 'cancelClick') !== null))) {
				self['cancelClick']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['myCancelClick'] = $method;
		$method = $pyjs__bind_method2('show', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['Popup']['show'](self);
			self['textBox']['setFocus'](true);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['show'] = $method;
		var $bases = new Array($m['Popup']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PopupNewVar', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.util.PopupNewVar */


/* end module: edu.uca.util.PopupNewVar */


/*
PYJS_DEPS: ['edu.uca.util.ChooseTypeVarPanel.ChooseTypeVarPanel', 'edu', 'edu.uca', 'edu.uca.util', 'edu.uca.util.ChooseTypeVarPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HorizontalPanel', 'edu.uca.util.Popup.Popup', 'edu.uca.util.Popup', 'edu.uca.util.Popup.CONFIRM_CANCEL', 'edu.uca.Workspace.vars', 'edu.uca.Workspace', 'edu.uca.Workspace.createdBlocks', 'edu.uca.renderable.Element.Element', 'edu.uca.renderable', 'edu.uca.renderable.Element', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.DOM', 'edu.uca.util.i18n._', 'edu.uca.util.i18n']
*/
