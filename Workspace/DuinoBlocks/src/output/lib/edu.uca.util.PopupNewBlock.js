/* start module: edu.uca.util.PopupNewBlock */
$pyjs['loaded_modules']['edu.uca.util.PopupNewBlock'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.util.PopupNewBlock']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.util.PopupNewBlock'];
	if(typeof $pyjs['loaded_modules']['edu.uca.util'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.util']['__was_initialized__']) $p['___import___']('edu.uca.util', null);
	var $m = $pyjs['loaded_modules']['edu.uca.util.PopupNewBlock'];
	$m['__repr__'] = function() { return '<module: edu.uca.util.PopupNewBlock>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.util.PopupNewBlock';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.util']['PopupNewBlock'] = $pyjs['loaded_modules']['edu.uca.util.PopupNewBlock'];


	$m['ChooseCategoryBlockPanel'] = $p['___import___']('edu.uca.util.ChooseCategoryBlockPanel.ChooseCategoryBlockPanel', 'edu.uca.util', null, false);
	$m['ChooseTypeBlockPanel'] = $p['___import___']('edu.uca.util.ChooseTypeBlockPanel.ChooseTypeBlockPanel', 'edu.uca.util', null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', 'edu.uca.util', null, false);
	$m['Popup'] = $p['___import___']('edu.uca.util.Popup.Popup', 'edu.uca.util', null, false);
	$m['CONFIRM_CANCEL'] = $p['___import___']('edu.uca.util.Popup.CONFIRM_CANCEL', 'edu.uca.util', null, false);
	$m['vars'] = $p['___import___']('edu.uca.Workspace.vars', 'edu.uca.util', null, false);
	$m['createdBlocks'] = $p['___import___']('edu.uca.Workspace.createdBlocks', 'edu.uca.util', null, false);
	$m['getWorkspace'] = $p['___import___']('edu.uca.Workspace.getWorkspace', 'edu.uca.util', null, false);
	$m['Element'] = $p['___import___']('edu.uca.renderable.Element.Element', 'edu.uca.util', null, false);
	$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', 'edu.uca.util', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'edu.uca.util', null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', 'edu.uca.util', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.util', null, false);
	$m['Block'] = $p['___import___']('edu.uca.renderable.block.Block.Block', 'edu.uca.util', null, false);
	$m['ArduinoBlocks'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks', 'edu.uca.util', null, false);
	$m['PopupBlockEditor'] = $p['___import___']('edu.uca.util.PopupBlockEditor.PopupBlockEditor', 'edu.uca.util', null, false);
	$m['_'] = $p['___import___']('edu.uca.util.i18n._', 'edu.uca.util', null, false);
	$m['popupConfirmNewBlock'] = function(nameBlock, categoryBlock, typeBlock, showPopup) {
		if (typeof showPopup == 'undefined') showPopup=arguments['callee']['__args__'][5][1];
		var popup,stateChange,color,attribute,block;
		if ($p['bool']($p['op_eq'](categoryBlock, $p['getattr']($m['ChooseCategoryBlockPanel'], 'CONTROL')))) {
			color = 'orange';
		}
		else if ($p['bool']($p['op_eq'](categoryBlock, $p['getattr']($m['ChooseCategoryBlockPanel'], 'OPERATORS')))) {
			color = 'green';
		}
		else if ($p['bool']($p['op_eq'](categoryBlock, $p['getattr']($m['ChooseCategoryBlockPanel'], 'INPUT')))) {
			color = 'purple';
		}
		else if ($p['bool']($p['op_eq'](categoryBlock, $p['getattr']($m['ChooseCategoryBlockPanel'], 'OUTPUT')))) {
			color = 'blue';
		}
		else if ($p['bool']($p['op_eq'](categoryBlock, $p['getattr']($m['ChooseCategoryBlockPanel'], 'UTILITIES')))) {
			color = 'darkblue';
		}
		else if ($p['bool']($p['op_eq'](categoryBlock, $p['getattr']($m['ChooseCategoryBlockPanel'], 'VARIBLES')))) {
			color = 'red';
		}
		if ($p['bool']($p['op_eq'](typeBlock, $p['getattr']($m['Block'], 'STATEMENT_BLOCK')))) {
			attribute = 'commandType';
		}
		else if ($p['bool']($p['op_eq'](typeBlock, $p['getattr']($m['Block'], 'NUMBER_BLOCK')))) {
			attribute = 'numericType';
		}
		else if ($p['bool']($p['op_eq'](typeBlock, $p['getattr']($m['Block'], 'BOOLEAN_BLOCK')))) {
			attribute = 'logicType';
		}
		else if ($p['bool']($p['op_eq'](typeBlock, $p['getattr']($m['Block'], 'STRING_BLOCK')))) {
			attribute = 'alphaNumericType';
		}
		block = $p['getattr']($m['ArduinoBlocks'], attribute)(nameBlock, color);
		$p['getattr']($m['getWorkspace']()['getBlockList'](), categoryBlock)['addSubCategory'](block);
		popup = $m['PopupBlockEditor'](block, categoryBlock, true);
		$m['createdBlocks']['__setitem__'](nameBlock, popup);
		if ($p['bool'](showPopup)) {
			stateChange = $p['___import___']('edu.uca.util.Serializable.stateChange', 'edu.uca.util', null, false);
			stateChange();
		}
		return null;
	};
	$m['popupConfirmNewBlock']['__name__'] = 'popupConfirmNewBlock';

	$m['popupConfirmNewBlock']['__bind_type__'] = 0;
	$m['popupConfirmNewBlock']['__args__'] = [null,null,['nameBlock'],['categoryBlock'],['typeBlock'],['showPopup', true]];
	$m['PopupNewBlock'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.util.PopupNewBlock';
		$method = $pyjs__bind_method2('__init__', function(okClick, cancelClick) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				okClick = arguments[1];
				cancelClick = arguments[2];
			}
			var $add3,$add2,$add1,$add4;
			$m['Popup']['__init__'](self, $p['__op_add']($add3=$p['__op_add']($add1='<b>',$add2=$m['_']('New Block')),$add4='</b>'), okClick, cancelClick, $m['CONFIRM_CANCEL']);
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
			var namePanel,$add6,$add5;
			$m['Popup']['draw'](self);
			namePanel = $m['HorizontalPanel']();
			namePanel['add']($m['Label']($p['__op_add']($add5=$m['_']('Name'),$add6=':')));
			self['textBox'] = $m['TextBox']();
			self['textBox']['setMaxLength'](25);
			self['textBox']['setStyleAttribute']('marginLeft', 10);
			self['textBox']['addInputListener'](self);
			namePanel['add']($p['getattr'](self, 'textBox'));
			self['center']['add'](namePanel);
			self['chooseType'] = $m['ChooseTypeBlockPanel']();
			self['chooseCategory'] = $m['ChooseCategoryBlockPanel']($p['getattr'](self, 'categoryChangeListener'));
			self['center']['add']($p['getattr'](self, 'chooseCategory'));
			self['center']['add']($p['getattr'](self, 'chooseType'));
			self['message'] = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createDiv']()}]);
			self['message']['add']($pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'not_image'}]));
			self['message']['add']($pyjs_kwargs_call(null, $m['Label'], null, null, [{'text':$m['_']('Name already used'), 'wordWrap':false, 'StyleName':'not_message'}]));
			self['onInput']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['draw'] = $method;
		$method = $pyjs__bind_method2('categoryChangeListener', function(color) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				color = arguments[1];
			}

			self['chooseType']['changeColor'](color);
			return null;
		}
	, 1, [null,null,['self'],['color']]);
		$cls_definition['categoryChangeListener'] = $method;
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
				self['okClick'](self['textBox']['getText'](), $p['getattr']($p['getattr'](self, 'chooseCategory'), 'selectedType'), $p['getattr']($p['getattr'](self, 'chooseType'), 'selectedType'));
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
		return $p['_create_class']('PopupNewBlock', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.util.PopupNewBlock */


/* end module: edu.uca.util.PopupNewBlock */


/*
PYJS_DEPS: ['edu.uca.util.ChooseCategoryBlockPanel.ChooseCategoryBlockPanel', 'edu', 'edu.uca', 'edu.uca.util', 'edu.uca.util.ChooseCategoryBlockPanel', 'edu.uca.util.ChooseTypeBlockPanel.ChooseTypeBlockPanel', 'edu.uca.util.ChooseTypeBlockPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HorizontalPanel', 'edu.uca.util.Popup.Popup', 'edu.uca.util.Popup', 'edu.uca.util.Popup.CONFIRM_CANCEL', 'edu.uca.Workspace.vars', 'edu.uca.Workspace', 'edu.uca.Workspace.createdBlocks', 'edu.uca.Workspace.getWorkspace', 'edu.uca.renderable.Element.Element', 'edu.uca.renderable', 'edu.uca.renderable.Element', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.DOM', 'edu.uca.renderable.block.Block.Block', 'edu.uca.renderable.block', 'edu.uca.renderable.block.Block', 'edu.uca.renderable.block.ArduinoBlocks', 'edu.uca.util.PopupBlockEditor.PopupBlockEditor', 'edu.uca.util.PopupBlockEditor', 'edu.uca.util.i18n._', 'edu.uca.util.i18n', 'edu.uca.util.Serializable.stateChange', 'edu.uca.util.Serializable']
*/
