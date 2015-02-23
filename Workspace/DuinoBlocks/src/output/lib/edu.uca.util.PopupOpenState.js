/* start module: edu.uca.util.PopupOpenState */
$pyjs['loaded_modules']['edu.uca.util.PopupOpenState'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.util.PopupOpenState']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.util.PopupOpenState'];
	if(typeof $pyjs['loaded_modules']['edu.uca.util'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.util']['__was_initialized__']) $p['___import___']('edu.uca.util', null);
	var $m = $pyjs['loaded_modules']['edu.uca.util.PopupOpenState'];
	$m['__repr__'] = function() { return '<module: edu.uca.util.PopupOpenState>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.util.PopupOpenState';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.util']['PopupOpenState'] = $pyjs['loaded_modules']['edu.uca.util.PopupOpenState'];


	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', 'edu.uca.util', null, false);
	$m['Popup'] = $p['___import___']('edu.uca.util.Popup.Popup', 'edu.uca.util', null, false);
	$m['CONFIRM_CANCEL'] = $p['___import___']('edu.uca.util.Popup.CONFIRM_CANCEL', 'edu.uca.util', null, false);
	$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', 'edu.uca.util', null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', 'edu.uca.util', null, false);
	$m['_'] = $p['___import___']('edu.uca.util.i18n._', 'edu.uca.util', null, false);
	$m['FileUpload'] = $p['___import___']('pyjamas.ui.FileUpload.FileUpload', 'edu.uca.util', null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', 'edu.uca.util', null, false);
	$m['PopupOpenState'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.util.PopupOpenState';
		$method = $pyjs__bind_method2('__init__', function(okClick, cancelClick, title, options) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				okClick = arguments[1];
				cancelClick = arguments[2];
				title = arguments[3];
				options = arguments[4];
			}
			if (typeof title == 'undefined') title=arguments['callee']['__args__'][5][1];
			if (typeof options == 'undefined') options=arguments['callee']['__args__'][6][1];

			$m['Popup']['__init__'](self, title, okClick, cancelClick, options);
			return null;
		}
	, 1, [null,null,['self'],['okClick'],['cancelClick'],['title', 'Abrir'],['options', $m['CONFIRM_CANCEL']]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('draw', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var namePanel,element;
			$m['Popup']['draw'](self);
			namePanel = $m['HorizontalPanel']();
			if ($p['bool']($p['op_eq']($p['getattr'](self, 'title'), 'Abrir'))) {
				self['enableOkButton'](false);
				namePanel['add']($m['HTML']('<div class=""gwt-Label"" style=""white-space: normal;"">\n            Abra o arquivo salvo, copie<br>e cole aqui o conteudo:</div>'));
				self['field'] = $m['FileUpload']();
				self['field']['setName']('file');
				self['field']['setID']('files');
				self['center']['add']($p['getattr'](self, 'field'));
				element = self['field']['getElement']();
function handleFileSelect(evt) {self.enableOkButton(evt.target.files[0]!=null);} 
            element.addEventListener('change', handleFileSelect, false);
			}
			else {
				namePanel['add']($m['HTML']('<div class=""gwt-Label"" style=""white-space: normal;"">\n            Crie um arquivo txt e copie<br>e cole o conteudo a seguir:</div>'));
				self['textBox'] = $m['TextBox']();
				self['textBox']['setStyleAttribute']('marginLeft', 10);
				namePanel['add']($p['getattr'](self, 'textBox'));
				self['center']['add'](namePanel);
				self['textBox']['addInputListener'](self);
				self['onInput']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['draw'] = $method;
		$method = $pyjs__bind_method2('enableOkButton', function(enable) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				enable = arguments[1];
			}

			if ($p['bool'](enable)) {
				self['okButton']['removeStyleName']('disabled');
			}
			else {
				self['okButton']['addStyleName']('disabled');
			}
			return null;
		}
	, 1, [null,null,['self'],['enable']]);
		$cls_definition['enableOkButton'] = $method;
		$method = $pyjs__bind_method2('onInput', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			self['enableOkButton'](!$p['op_eq'](self['textBox']['getText']()['count'](' '), $p['len'](self['textBox']['getText']())));
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
			var files,file;
			if ($p['bool'](!self['okButton']['getStyleName']()['__contains__']('disabled'))) {
				$m['Popup']['myOkClick'](self);
				if ($p['bool'](($p['getattr'](self, 'okClick') !== null))) {
					if ($p['bool']($p['op_eq']($p['getattr'](self, 'title'), 'Abrir'))) {
						files = $p['getattr'](self['field']['getElement'](), 'files');
						file = files[0];
						if ($p['bool'](file)) {
var reader = new FileReader();
                        reader.onload = function(e) {self.okClick(e.target.result);}
                        reader.readAsBinaryString(file);
						}
					}
					else {
						self['okClick'](self['textBox']['getText']());
					}
				}
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
			if ($p['bool'](!$p['op_eq']($p['getattr'](self, 'title'), 'Abrir'))) {
				self['textBox']['setFocus'](true);
			}
			else {
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['show'] = $method;
		var $bases = new Array($m['Popup']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PopupOpenState', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.util.PopupOpenState */


/* end module: edu.uca.util.PopupOpenState */


/*
PYJS_DEPS: ['pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HorizontalPanel', 'edu.uca.util.Popup.Popup', 'edu', 'edu.uca', 'edu.uca.util', 'edu.uca.util.Popup', 'edu.uca.util.Popup.CONFIRM_CANCEL', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'edu.uca.util.i18n._', 'edu.uca.util.i18n', 'pyjamas.ui.FileUpload.FileUpload', 'pyjamas.ui.FileUpload', 'pyjamas.Window']
*/
