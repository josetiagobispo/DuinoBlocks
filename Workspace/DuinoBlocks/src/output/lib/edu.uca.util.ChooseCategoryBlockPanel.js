/* start module: edu.uca.util.ChooseCategoryBlockPanel */
$pyjs['loaded_modules']['edu.uca.util.ChooseCategoryBlockPanel'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.util.ChooseCategoryBlockPanel']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.util.ChooseCategoryBlockPanel'];
	if(typeof $pyjs['loaded_modules']['edu.uca.util'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.util']['__was_initialized__']) $p['___import___']('edu.uca.util', null);
	var $m = $pyjs['loaded_modules']['edu.uca.util.ChooseCategoryBlockPanel'];
	$m['__repr__'] = function() { return '<module: edu.uca.util.ChooseCategoryBlockPanel>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.util.ChooseCategoryBlockPanel';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.util']['ChooseCategoryBlockPanel'] = $pyjs['loaded_modules']['edu.uca.util.ChooseCategoryBlockPanel'];


	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', 'edu.uca.util', null, false);
	$m['ArduinoBlocks'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks', 'edu.uca.util', null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', 'edu.uca.util', null, false);
	$m['Element'] = $p['___import___']('edu.uca.renderable.Element.Element', 'edu.uca.util', null, false);
	$m['RadioButton'] = $p['___import___']('pyjamas.ui.RadioButton.RadioButton', 'edu.uca.util', null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', 'edu.uca.util', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.util', null, false);
	$m['ChooseCategoryBlockPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.util.ChooseCategoryBlockPanel';
		$cls_definition['CONTROL'] = 'control';
		$cls_definition['OPERATORS'] = 'operators';
		$cls_definition['INPUT'] = 'input';
		$cls_definition['OUTPUT'] = 'output';
		$cls_definition['UTILITIES'] = 'utilities';
		$cls_definition['VARIBLES'] = 'variables';
		$method = $pyjs__bind_method2('__init__', function(categoryChangeListener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				categoryChangeListener = arguments[1];
			}
			var fake,verticalPanel,horizontalPanel;
			$pyjs_kwargs_call($m['HorizontalPanel'], '__init__', null, null, [{'StyleName':'category_block select_block', 'Width':'100%'}, self]);
			self['categoryChangeListener'] = categoryChangeListener;
			self['add']($m['Label']('Categoria:'));
			verticalPanel = $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{'Width':'100%'}]);
			self['add'](verticalPanel);
			horizontalPanel = $pyjs_kwargs_call(null, $m['HorizontalPanel'], null, null, [{'Width':'100%'}]);
			verticalPanel['add'](horizontalPanel);
			fake = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createDiv']()}]);
			self['control'] = $pyjs_kwargs_call(null, $p['getattr']($m['ArduinoBlocks'], 'alphaNumericType'), null, null, [{'off':true}, 'Controle', 'orange']);
			fake['append']($p['getattr'](self, 'control'));
			self['controlType'] = $m['RadioButton']('groupCategory', $p['getattr'](fake['getElement'](), 'innerHTML'), true);
			self['controlType']['setChecked'](true);
			self['controlType']['addClickListener']($p['getattr'](self, 'onClickControlType'));
			horizontalPanel['add']($p['getattr'](self, 'controlType'));
			fake['removeAll']();
			self['operators'] = $pyjs_kwargs_call(null, $p['getattr']($m['ArduinoBlocks'], 'alphaNumericType'), null, null, [{'off':true}, 'Operadores', 'green']);
			fake['append']($p['getattr'](self, 'operators'));
			self['operatorsType'] = $m['RadioButton']('groupCategory', $p['getattr'](fake['getElement'](), 'innerHTML'), true);
			self['operatorsType']['addClickListener']($p['getattr'](self, 'onClickOperatorsType'));
			horizontalPanel['add']($p['getattr'](self, 'operatorsType'));
			horizontalPanel = $pyjs_kwargs_call(null, $m['HorizontalPanel'], null, null, [{'Width':'100%'}]);
			verticalPanel['add'](horizontalPanel);
			fake['removeAll']();
			self['input'] = $pyjs_kwargs_call(null, $p['getattr']($m['ArduinoBlocks'], 'alphaNumericType'), null, null, [{'off':true}, 'Entrada', 'purple']);
			fake['append']($p['getattr'](self, 'input'));
			self['inputType'] = $m['RadioButton']('groupCategory', $p['getattr'](fake['getElement'](), 'innerHTML'), true);
			self['inputType']['addClickListener']($p['getattr'](self, 'onClickInputType'));
			horizontalPanel['add']($p['getattr'](self, 'inputType'));
			fake['removeAll']();
			self['output'] = $pyjs_kwargs_call(null, $p['getattr']($m['ArduinoBlocks'], 'alphaNumericType'), null, null, [{'off':true}, 'Saida', 'blue']);
			fake['append']($p['getattr'](self, 'output'));
			self['outputType'] = $m['RadioButton']('groupCategory', $p['getattr'](fake['getElement'](), 'innerHTML'), true);
			self['outputType']['addClickListener']($p['getattr'](self, 'onClickOutputType'));
			horizontalPanel['add']($p['getattr'](self, 'outputType'));
			horizontalPanel = $pyjs_kwargs_call(null, $m['HorizontalPanel'], null, null, [{'Width':'100%'}]);
			verticalPanel['add'](horizontalPanel);
			fake['removeAll']();
			self['utilities'] = $pyjs_kwargs_call(null, $p['getattr']($m['ArduinoBlocks'], 'alphaNumericType'), null, null, [{'off':true}, 'Utilitarios', 'darkblue']);
			fake['append']($p['getattr'](self, 'utilities'));
			self['utilitiesType'] = $m['RadioButton']('groupCategory', $p['getattr'](fake['getElement'](), 'innerHTML'), true);
			self['utilitiesType']['addClickListener']($p['getattr'](self, 'onClickUtilitiesType'));
			horizontalPanel['add']($p['getattr'](self, 'utilitiesType'));
			fake['removeAll']();
			self['variables'] = $pyjs_kwargs_call(null, $p['getattr']($m['ArduinoBlocks'], 'alphaNumericType'), null, null, [{'off':true}, 'Variaveis', 'red']);
			fake['append']($p['getattr'](self, 'variables'));
			self['variablesType'] = $m['RadioButton']('groupCategory', $p['getattr'](fake['getElement'](), 'innerHTML'), true);
			self['variablesType']['addClickListener']($p['getattr'](self, 'onClickVariablesType'));
			horizontalPanel['add']($p['getattr'](self, 'variablesType'));
			self['onClickControlType']();
			return null;
		}
	, 1, [null,null,['self'],['categoryChangeListener']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onClickControlType', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

			self['selectedType'] = $p['getattr']($m['ChooseCategoryBlockPanel'], 'CONTROL');
			self['enableRadioButton']($p['getattr'](self, 'variablesType'), $p['getattr'](self, 'variables'), false);
			self['enableRadioButton']($p['getattr'](self, 'utilitiesType'), $p['getattr'](self, 'utilities'), false);
			self['enableRadioButton']($p['getattr'](self, 'outputType'), $p['getattr'](self, 'output'), false);
			self['enableRadioButton']($p['getattr'](self, 'inputType'), $p['getattr'](self, 'input'), false);
			self['enableRadioButton']($p['getattr'](self, 'operatorsType'), $p['getattr'](self, 'operators'), false);
			self['enableRadioButton']($p['getattr'](self, 'controlType'), $p['getattr'](self, 'control'), true);
			self['categoryChangeListener']('orange');
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClickControlType'] = $method;
		$method = $pyjs__bind_method2('onClickOperatorsType', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

			self['selectedType'] = $p['getattr']($m['ChooseCategoryBlockPanel'], 'OPERATORS');
			self['enableRadioButton']($p['getattr'](self, 'variablesType'), $p['getattr'](self, 'variables'), false);
			self['enableRadioButton']($p['getattr'](self, 'utilitiesType'), $p['getattr'](self, 'utilities'), false);
			self['enableRadioButton']($p['getattr'](self, 'outputType'), $p['getattr'](self, 'output'), false);
			self['enableRadioButton']($p['getattr'](self, 'inputType'), $p['getattr'](self, 'input'), false);
			self['enableRadioButton']($p['getattr'](self, 'operatorsType'), $p['getattr'](self, 'operators'), true);
			self['enableRadioButton']($p['getattr'](self, 'controlType'), $p['getattr'](self, 'control'), false);
			self['categoryChangeListener']('green');
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClickOperatorsType'] = $method;
		$method = $pyjs__bind_method2('onClickInputType', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

			self['selectedType'] = $p['getattr']($m['ChooseCategoryBlockPanel'], 'INPUT');
			self['enableRadioButton']($p['getattr'](self, 'variablesType'), $p['getattr'](self, 'variables'), false);
			self['enableRadioButton']($p['getattr'](self, 'utilitiesType'), $p['getattr'](self, 'utilities'), false);
			self['enableRadioButton']($p['getattr'](self, 'outputType'), $p['getattr'](self, 'output'), false);
			self['enableRadioButton']($p['getattr'](self, 'inputType'), $p['getattr'](self, 'input'), true);
			self['enableRadioButton']($p['getattr'](self, 'operatorsType'), $p['getattr'](self, 'operators'), false);
			self['enableRadioButton']($p['getattr'](self, 'controlType'), $p['getattr'](self, 'control'), false);
			self['categoryChangeListener']('purple');
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClickInputType'] = $method;
		$method = $pyjs__bind_method2('onClickOutputType', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

			self['selectedType'] = $p['getattr']($m['ChooseCategoryBlockPanel'], 'OUTPUT');
			self['enableRadioButton']($p['getattr'](self, 'variablesType'), $p['getattr'](self, 'variables'), false);
			self['enableRadioButton']($p['getattr'](self, 'utilitiesType'), $p['getattr'](self, 'utilities'), false);
			self['enableRadioButton']($p['getattr'](self, 'outputType'), $p['getattr'](self, 'output'), true);
			self['enableRadioButton']($p['getattr'](self, 'inputType'), $p['getattr'](self, 'input'), false);
			self['enableRadioButton']($p['getattr'](self, 'operatorsType'), $p['getattr'](self, 'operators'), false);
			self['enableRadioButton']($p['getattr'](self, 'controlType'), $p['getattr'](self, 'control'), false);
			self['categoryChangeListener']('blue');
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClickOutputType'] = $method;
		$method = $pyjs__bind_method2('onClickUtilitiesType', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

			self['selectedType'] = $p['getattr']($m['ChooseCategoryBlockPanel'], 'UTILITIES');
			self['enableRadioButton']($p['getattr'](self, 'variablesType'), $p['getattr'](self, 'variables'), false);
			self['enableRadioButton']($p['getattr'](self, 'utilitiesType'), $p['getattr'](self, 'utilities'), true);
			self['enableRadioButton']($p['getattr'](self, 'outputType'), $p['getattr'](self, 'output'), false);
			self['enableRadioButton']($p['getattr'](self, 'inputType'), $p['getattr'](self, 'input'), false);
			self['enableRadioButton']($p['getattr'](self, 'operatorsType'), $p['getattr'](self, 'operators'), false);
			self['enableRadioButton']($p['getattr'](self, 'controlType'), $p['getattr'](self, 'control'), false);
			self['categoryChangeListener']('darkblue');
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClickUtilitiesType'] = $method;
		$method = $pyjs__bind_method2('onClickVariablesType', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

			self['selectedType'] = $p['getattr']($m['ChooseCategoryBlockPanel'], 'VARIBLES');
			self['enableRadioButton']($p['getattr'](self, 'variablesType'), $p['getattr'](self, 'variables'), true);
			self['enableRadioButton']($p['getattr'](self, 'utilitiesType'), $p['getattr'](self, 'utilities'), false);
			self['enableRadioButton']($p['getattr'](self, 'outputType'), $p['getattr'](self, 'output'), false);
			self['enableRadioButton']($p['getattr'](self, 'inputType'), $p['getattr'](self, 'input'), false);
			self['enableRadioButton']($p['getattr'](self, 'operatorsType'), $p['getattr'](self, 'operators'), false);
			self['enableRadioButton']($p['getattr'](self, 'controlType'), $p['getattr'](self, 'control'), false);
			self['categoryChangeListener']('red');
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClickVariablesType'] = $method;
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
		return $p['_create_class']('ChooseCategoryBlockPanel', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.util.ChooseCategoryBlockPanel */


/* end module: edu.uca.util.ChooseCategoryBlockPanel */


/*
PYJS_DEPS: ['pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HorizontalPanel', 'edu.uca.renderable.block.ArduinoBlocks', 'edu', 'edu.uca', 'edu.uca.renderable', 'edu.uca.renderable.block', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'edu.uca.renderable.Element.Element', 'edu.uca.renderable.Element', 'pyjamas.ui.RadioButton.RadioButton', 'pyjamas.ui.RadioButton', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.DOM']
*/
