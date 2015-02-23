/* start module: edu.uca.util.ChooseTypeVarPanel */
$pyjs['loaded_modules']['edu.uca.util.ChooseTypeVarPanel'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.util.ChooseTypeVarPanel']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.util.ChooseTypeVarPanel'];
	if(typeof $pyjs['loaded_modules']['edu.uca.util'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.util']['__was_initialized__']) $p['___import___']('edu.uca.util', null);
	var $m = $pyjs['loaded_modules']['edu.uca.util.ChooseTypeVarPanel'];
	$m['__repr__'] = function() { return '<module: edu.uca.util.ChooseTypeVarPanel>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.util.ChooseTypeVarPanel';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.util']['ChooseTypeVarPanel'] = $pyjs['loaded_modules']['edu.uca.util.ChooseTypeVarPanel'];


	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', 'edu.uca.util', null, false);
	$m['ArduinoBlocks'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks', 'edu.uca.util', null, false);
	$m['Block'] = $p['___import___']('edu.uca.renderable.block.Block.Block', 'edu.uca.util', null, false);
	$m['Element'] = $p['___import___']('edu.uca.renderable.Element.Element', 'edu.uca.util', null, false);
	$m['RadioButton'] = $p['___import___']('pyjamas.ui.RadioButton.RadioButton', 'edu.uca.util', null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', 'edu.uca.util', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.util', null, false);
	$m['ChooseTypeVarPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.util.ChooseTypeVarPanel';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var fake;
			$pyjs_kwargs_call($m['HorizontalPanel'], '__init__', null, null, [{'StyleName':'type_block select_block'}, self]);
			self['add']($m['Label']('Tipo:'));
			fake = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createDiv']()}]);
			self['booleanBlock'] = $pyjs_kwargs_call(null, $p['getattr']($m['ArduinoBlocks'], 'logicType'), null, null, [{'off':true}, 'logica', 'red']);
			fake['append']($p['getattr'](self, 'booleanBlock'));
			self['logicType'] = $m['RadioButton']('group1', $p['getattr'](fake['getElement'](), 'innerHTML'), true);
			self['logicType']['addClickListener']($p['getattr'](self, 'onClickLogicType'));
			self['add']($p['getattr'](self, 'logicType'));
			fake['removeAll']();
			self['numberBlock'] = $pyjs_kwargs_call(null, $p['getattr']($m['ArduinoBlocks'], 'numericType'), null, null, [{'off':true}, 'numerica', 'red']);
			fake['append']($p['getattr'](self, 'numberBlock'));
			self['numericType'] = $m['RadioButton']('group1', $p['getattr'](fake['getElement'](), 'innerHTML'), true);
			self['numericType']['setChecked'](true);
			self['numericType']['addClickListener']($p['getattr'](self, 'onClickNumericType'));
			self['add']($p['getattr'](self, 'numericType'));
			fake['removeAll']();
			self['stringBlock'] = $pyjs_kwargs_call(null, $p['getattr']($m['ArduinoBlocks'], 'alphaNumericType'), null, null, [{'off':true}, 'alfanumerica', 'red']);
			fake['append']($p['getattr'](self, 'stringBlock'));
			self['alphaNumericType'] = $m['RadioButton']('group1', $p['getattr'](fake['getElement'](), 'innerHTML'), true);
			self['alphaNumericType']['addClickListener']($p['getattr'](self, 'onClickAlphanumericType'));
			self['add']($p['getattr'](self, 'alphaNumericType'));
			self['onClickNumericType']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onClickLogicType', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

			self['selectedType'] = $p['getattr']($m['Block'], 'BOOLEAN_BLOCK');
			self['enableRadioButton']($p['getattr'](self, 'alphaNumericType'), $p['getattr'](self, 'stringBlock'), false);
			self['enableRadioButton']($p['getattr'](self, 'numericType'), $p['getattr'](self, 'numberBlock'), false);
			self['enableRadioButton']($p['getattr'](self, 'logicType'), $p['getattr'](self, 'booleanBlock'), true);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClickLogicType'] = $method;
		$method = $pyjs__bind_method2('onClickNumericType', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

			self['selectedType'] = $p['getattr']($m['Block'], 'NUMBER_BLOCK');
			self['enableRadioButton']($p['getattr'](self, 'alphaNumericType'), $p['getattr'](self, 'stringBlock'), false);
			self['enableRadioButton']($p['getattr'](self, 'numericType'), $p['getattr'](self, 'numberBlock'), true);
			self['enableRadioButton']($p['getattr'](self, 'logicType'), $p['getattr'](self, 'booleanBlock'), false);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClickNumericType'] = $method;
		$method = $pyjs__bind_method2('onClickAlphanumericType', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

			self['selectedType'] = $p['getattr']($m['Block'], 'STRING_BLOCK');
			self['enableRadioButton']($p['getattr'](self, 'alphaNumericType'), $p['getattr'](self, 'stringBlock'), true);
			self['enableRadioButton']($p['getattr'](self, 'numericType'), $p['getattr'](self, 'numberBlock'), false);
			self['enableRadioButton']($p['getattr'](self, 'logicType'), $p['getattr'](self, 'booleanBlock'), false);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClickAlphanumericType'] = $method;
		$method = $pyjs__bind_method2('enableRadioButton', function(radio, block, enable) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				radio = arguments[1];
				block = arguments[2];
				enable = arguments[3];
			}
			var fake;
			fake = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createDiv']()}]);
			if ($p['bool'](enable)) {
				block['removeStyleName']('disabled');
			}
			else {
				block['addStyleName']('disabled');
			}
			fake['append'](block);
			radio['setHTML']($p['getattr'](fake['getElement'](), 'innerHTML'));
			return null;
		}
	, 1, [null,null,['self'],['radio'],['block'],['enable']]);
		$cls_definition['enableRadioButton'] = $method;
		var $bases = new Array($m['HorizontalPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ChooseTypeVarPanel', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.util.ChooseTypeVarPanel */


/* end module: edu.uca.util.ChooseTypeVarPanel */


/*
PYJS_DEPS: ['pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HorizontalPanel', 'edu.uca.renderable.block.ArduinoBlocks', 'edu', 'edu.uca', 'edu.uca.renderable', 'edu.uca.renderable.block', 'edu.uca.renderable.block.Block.Block', 'edu.uca.renderable.block.Block', 'edu.uca.renderable.Element.Element', 'edu.uca.renderable.Element', 'pyjamas.ui.RadioButton.RadioButton', 'pyjamas.ui.RadioButton', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.DOM']
*/
