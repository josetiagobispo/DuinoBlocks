/* start module: edu.uca.ui.listener.GenerateCodeButtonListener */
$pyjs['loaded_modules']['edu.uca.ui.listener.GenerateCodeButtonListener'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.ui.listener.GenerateCodeButtonListener']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.ui.listener.GenerateCodeButtonListener'];
	if(typeof $pyjs['loaded_modules']['edu.uca.ui.listener'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.ui.listener']['__was_initialized__']) $p['___import___']('edu.uca.ui.listener', null);
	var $m = $pyjs['loaded_modules']['edu.uca.ui.listener.GenerateCodeButtonListener'];
	$m['__repr__'] = function() { return '<module: edu.uca.ui.listener.GenerateCodeButtonListener>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.ui.listener.GenerateCodeButtonListener';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.ui.listener']['GenerateCodeButtonListener'] = $pyjs['loaded_modules']['edu.uca.ui.listener.GenerateCodeButtonListener'];


	$m['Translator'] = $p['___import___']('edu.uca.translator.Translator.Translator', 'edu.uca.ui.listener', null, false);
	$m['Popup'] = $p['___import___']('edu.uca.util.Popup.Popup', 'edu.uca.ui.listener', null, false);
	$m['getWorkspace'] = $p['___import___']('edu.uca.Workspace.getWorkspace', 'edu.uca.ui.listener', null, false);
	$m['HasHorizontalAlignment'] = $p['___import___']('pyjamas.ui.HasHorizontalAlignment', 'edu.uca.ui.listener', null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', 'edu.uca.ui.listener', null, false);
	$m['ArduinoBlocks'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks', 'edu.uca.ui.listener', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'edu.uca.ui.listener', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.ui.listener', null, false);
	$m['ArduinoHardwares'] = $p['___import___']('edu.uca.renderable.hardware.ArduinoHardwares', 'edu.uca.ui.listener', null, false);
	$m['ComponentBlockNotFoundException'] = $p['___import___']('edu.uca.translator.exception.ComponentBlockNotFoundException.ComponentBlockNotFoundException', 'edu.uca.ui.listener', null, false);
	$m['ComponentPinNullException'] = $p['___import___']('edu.uca.translator.exception.ComponentPinNullException.ComponentPinNullException', 'edu.uca.ui.listener', null, false);
	$m['VariableNameNullException'] = $p['___import___']('edu.uca.translator.exception.VariableNameNullException.VariableNameNullException', 'edu.uca.ui.listener', null, false);
	$m['SocketNullException'] = $p['___import___']('edu.uca.translator.exception.SocketNullException.SocketNullException', 'edu.uca.ui.listener', null, false);
	$m['GenerateCodeButtonListener'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.ui.listener.GenerateCodeButtonListener';
		$method = $pyjs__bind_method2('__init__', function(codePanel) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				codePanel = arguments[1];
			}

			self['codePanel'] = codePanel;
			return null;
		}
	, 1, [null,null,['self'],['codePanel']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender, automatic) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				automatic = arguments[2];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
			if (typeof automatic == 'undefined') automatic=arguments['callee']['__args__'][4][1];
			var fakeBlock,rootSetupBlock,$iter1_iter,$iter1_type,$pyjs_try_err,$iter1_array,$add7,popup,$iter1_nextval,$and1,$and2,center,$and4,$and3,$add10,$add11,$add12,e4,code_,e1,e3,e2,$add2,$add3,$add1,$add6,$iter1_idx,$add4,$add5,$add8,$add9,block,loopBlockSet;
$doc.defaultView.editor.getSession().setValue();
			loopBlockSet = $p['list']([]);
			rootSetupBlock = null;
			if ($p['bool'](($m['getWorkspace']()['getMainBlock']() !== null))) {
				rootSetupBlock = $m['getWorkspace']()['getMainBlock']()['getFirstBlock']();
				if ($p['bool']($p['op_eq'](rootSetupBlock, $m['getWorkspace']()['getMainBlock']()))) {
					rootSetupBlock = null;
				}
				loopBlockSet['append']($m['getWorkspace']()['getMainBlock']());
			}
			if ($p['bool'](($p['bool']($and1=$p['op_eq']($p['len'](loopBlockSet), 0))?!$p['bool'](automatic):$and1))) {
				self['showBlocksList']();
				popup = $m['Popup']('<b>Bloco sempre nao encontrado!</b>', null, null);
				center = $m['VerticalPanel']();
				center['append']($pyjs_kwargs_call(null, $p['getattr']($m['ArduinoBlocks'], 'forever'), null, null, [{'off':true}]));
				popup['center']['append'](center);
				popup['center']['setCellHorizontalAlignment'](center, $p['getattr']($m['HasHorizontalAlignment'], 'ALIGN_CENTER'));
				popup['show']();
				return null;
			}
			if ($p['bool'](($p['bool']($and3=($p['cmp']($p['len'](loopBlockSet), 1) == 1))?!$p['bool'](automatic):$and3))) {
				popup = $m['Popup']('<b>Multiplos blocos sempre encontrados!</b>', null, null);
				popup['show']();
				return null;
			}
			$iter1_iter = loopBlockSet;
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				block = $iter1_nextval['$nextval'];
				try {
					code_ = $m['Translator']()['translate'](block, rootSetupBlock);
$doc.defaultView.editor.getSession().setValue(code_);
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $m['SocketNullException']['__name__'])||$p['_isinstance']($pyjs_try_err,$m['SocketNullException'])) {
						e1 = $pyjs_try_err;
						if ($p['bool'](automatic)) {
							return null;
						}
						self['showBlocksList']();
						if ($p['bool']($p['getattr']($p['getattr']($p['getattr'](e1, 'block'), 'blockPad'), 'popupEditorBlock'))) {
							e1['block']['blockPad']['popupEditorBlock']['show']();
						}
						fakeBlock = $pyjs_kwargs_call(null, $p['getattr']($m['ArduinoBlocks'], $p['getattr']($p['getattr'](e1, 'block'), '$$name')), null, null, [{'off':true}]);
						$p['getattr'](fakeBlock, 'holderArguments')['__getitem__']($p['getattr'](e1, 'index'))['argument']['append']($pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'interro'}]));
						center = $m['VerticalPanel']();
						center['append'](fakeBlock);
						popup = $m['Popup']('<b>Dado ausente no bloco abaixo:</b>', null, null);
						popup['center']['append'](center);
						popup['center']['setCellHorizontalAlignment'](center, $p['getattr']($m['HasHorizontalAlignment'], 'ALIGN_CENTER'));
						popup['show']();
					} else if (($pyjs_try_err_name == $m['VariableNameNullException']['__name__'])||$p['_isinstance']($pyjs_try_err,$m['VariableNameNullException'])) {
						e2 = $pyjs_try_err;
						if ($p['bool'](automatic)) {
							return null;
						}
						self['showBlocksList']();
						fakeBlock = $pyjs_kwargs_call(null, $p['getattr']($m['ArduinoBlocks'], $p['getattr']($p['getattr'](e2, 'block'), '$$name')), null, null, [{'off':true}]);
						center = $m['VerticalPanel']();
						center['append'](fakeBlock);
						popup = $m['Popup']($p['__op_add']($add3=$p['__op_add']($add1='<b>',$add2=e2['getError']()),$add4=' abaixo:</b>'), null, null);
						popup['center']['append'](center);
						popup['center']['setCellHorizontalAlignment'](center, $p['getattr']($m['HasHorizontalAlignment'], 'ALIGN_CENTER'));
						popup['show']();
					} else if (($pyjs_try_err_name == $m['ComponentPinNullException']['__name__'])||$p['_isinstance']($pyjs_try_err,$m['ComponentPinNullException'])) {
						e3 = $pyjs_try_err;
						if ($p['bool'](automatic)) {
							return null;
						}
						self['showHardwaresList']();
						fakeBlock = $pyjs_kwargs_call(null, $p['getattr']($m['ArduinoHardwares'], $p['getattr']($p['getattr'](e3, 'block'), 'componetHardware')), null, null, [{'off':true}]);
						fakeBlock['setText']($p['getattr']($p['getattr'](e3, 'block'), 'varName'));
						center = $m['VerticalPanel']();
						center['append'](fakeBlock);
						popup = $m['Popup']($p['__op_add']($add7=$p['__op_add']($add5='<b>',$add6=e3['getError']()),$add8=' abaixo:</b>'), null, null);
						popup['center']['append'](center);
						popup['center']['setCellHorizontalAlignment'](center, $p['getattr']($m['HasHorizontalAlignment'], 'ALIGN_CENTER'));
						popup['show']();
					} else if (($pyjs_try_err_name == $m['ComponentBlockNotFoundException']['__name__'])||$p['_isinstance']($pyjs_try_err,$m['ComponentBlockNotFoundException'])) {
						e4 = $pyjs_try_err;
						if ($p['bool'](automatic)) {
							return null;
						}
						self['showHardwaresList']();
						fakeBlock = $pyjs_kwargs_call(null, $p['getattr']($m['ArduinoHardwares'], $p['getattr']($p['getattr'](e4, 'block'), 'componetHardware')), null, null, [{'off':true}]);
						fakeBlock['setText']($p['getattr']($p['getattr'](e4, 'block'), 'varName'));
						center = $m['VerticalPanel']();
						center['append'](fakeBlock);
						popup = $m['Popup']($p['__op_add']($add11=$p['__op_add']($add9='<b>',$add10=e4['getError']()),$add12=':</b>'), null, null);
						popup['center']['append'](center);
						popup['center']['setCellHorizontalAlignment'](center, $p['getattr']($m['HasHorizontalAlignment'], 'ALIGN_CENTER'));
						popup['show']();
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['sender', null],['automatic', false]]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method2('showBlocksList', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter2_nextval,$iter2_type,$iter2_iter,listener,$iter2_idx,$iter2_array;
			$iter2_iter = $p['getattr']($p['getattr']($m['getWorkspace']()['getHeaderPanel'](), 'buttonBlocks'), '_clickListeners');
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				listener = $iter2_nextval['$nextval'];
				if ($p['bool']($p['hasattr'](listener, 'onClick'))) {
					listener['onClick'](self);
				}
				else {
					listener(self);
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['showBlocksList'] = $method;
		$method = $pyjs__bind_method2('showHardwaresList', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter3_idx,$iter3_type,listener,$iter3_iter,$iter3_array,$iter3_nextval;
			$iter3_iter = $p['getattr']($p['getattr']($m['getWorkspace']()['getHeaderPanel'](), 'buttonHarwares'), '_clickListeners');
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				listener = $iter3_nextval['$nextval'];
				if ($p['bool']($p['hasattr'](listener, 'onClick'))) {
					listener['onClick'](self);
				}
				else {
					listener(self);
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['showHardwaresList'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('GenerateCodeButtonListener', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.ui.listener.GenerateCodeButtonListener */


/* end module: edu.uca.ui.listener.GenerateCodeButtonListener */


/*
PYJS_DEPS: ['edu.uca.translator.Translator.Translator', 'edu', 'edu.uca', 'edu.uca.translator', 'edu.uca.translator.Translator', 'edu.uca.util.Popup.Popup', 'edu.uca.util', 'edu.uca.util.Popup', 'edu.uca.Workspace.getWorkspace', 'edu.uca.Workspace', 'pyjamas.ui.HasHorizontalAlignment', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'edu.uca.renderable.block.ArduinoBlocks', 'edu.uca.renderable', 'edu.uca.renderable.block', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget', 'pyjamas.DOM', 'edu.uca.renderable.hardware.ArduinoHardwares', 'edu.uca.renderable.hardware', 'edu.uca.translator.exception.ComponentBlockNotFoundException.ComponentBlockNotFoundException', 'edu.uca.translator.exception', 'edu.uca.translator.exception.ComponentBlockNotFoundException', 'edu.uca.translator.exception.ComponentPinNullException.ComponentPinNullException', 'edu.uca.translator.exception.ComponentPinNullException', 'edu.uca.translator.exception.VariableNameNullException.VariableNameNullException', 'edu.uca.translator.exception.VariableNameNullException', 'edu.uca.translator.exception.SocketNullException.SocketNullException', 'edu.uca.translator.exception.SocketNullException']
*/
