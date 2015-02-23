/* start module: edu.uca.ui.Header */
$pyjs['loaded_modules']['edu.uca.ui.Header'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.ui.Header']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.ui.Header'];
	if(typeof $pyjs['loaded_modules']['edu.uca.ui'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.ui']['__was_initialized__']) $p['___import___']('edu.uca.ui', null);
	var $m = $pyjs['loaded_modules']['edu.uca.ui.Header'];
	$m['__repr__'] = function() { return '<module: edu.uca.ui.Header>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.ui.Header';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.ui']['Header'] = $pyjs['loaded_modules']['edu.uca.ui.Header'];


	$m['GenerateCodeButtonListener'] = $p['___import___']('edu.uca.ui.listener.GenerateCodeButtonListener.GenerateCodeButtonListener', 'edu.uca.ui', null, false);
	$m['FlowPanel'] = $p['___import___']('pyjamas.ui.FlowPanel.FlowPanel', 'edu.uca.ui', null, false);
	$m['getWorkspace'] = $p['___import___']('edu.uca.Workspace.getWorkspace', 'edu.uca.ui', null, false);
	$m['Button'] = $p['___import___']('edu.uca.util.Button.Button', 'edu.uca.ui', null, false);
	$m['PopupNewBlock'] = $p['___import___']('edu.uca.util.PopupNewBlock.PopupNewBlock', 'edu.uca.ui', null, false);
	$m['popupConfirmNewBlock'] = $p['___import___']('edu.uca.util.PopupNewBlock.popupConfirmNewBlock', 'edu.uca.ui', null, false);
	$m['saveState'] = $p['___import___']('edu.uca.util.Serializable.saveState', 'edu.uca.ui', null, false);
	$m['loadState'] = $p['___import___']('edu.uca.util.Serializable.loadState', 'edu.uca.ui', null, false);
	$m['undo'] = $p['___import___']('edu.uca.util.Serializable.undo', 'edu.uca.ui', null, false);
	$m['redo'] = $p['___import___']('edu.uca.util.Serializable.redo', 'edu.uca.ui', null, false);
	$m['saveAllCustomBlocks'] = $p['___import___']('edu.uca.util.Serializable.saveAllCustomBlocks', 'edu.uca.ui', null, false);
	$m['importCustomBlock'] = $p['___import___']('edu.uca.util.Serializable.importCustomBlock', 'edu.uca.ui', null, false);
	$m['exportCustomBlocks'] = $p['___import___']('edu.uca.util.Serializable.exportCustomBlocks', 'edu.uca.ui', null, false);
	$m['Dropdown'] = $p['___import___']('edu.uca.util.Dropdown.Dropdown', 'edu.uca.ui', null, false);
	$m['_'] = $p['___import___']('edu.uca.util.i18n._', 'edu.uca.ui', null, false);
	$m['gettext_noop'] = $p['___import___']('edu.uca.util.i18n.gettext_noop', 'edu.uca.ui', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.ui', null, false);
	$m['Element'] = $p['___import___']('edu.uca.renderable.Element.Element', 'edu.uca.ui', null, false);
	$m['TooltipListener'] = $p['___import___']('pyjamas.ui.Tooltip.TooltipListener', 'edu.uca.ui', null, false);
	$m['Header'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.ui.Header';
		$method = $pyjs__bind_method2('__init__', function(changeLanguage) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				changeLanguage = arguments[1];
				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof changeLanguage != 'undefined') {
					if (changeLanguage !== null && typeof changeLanguage['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = changeLanguage;
						changeLanguage = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			var div;
			$pyjs_kwargs_call($m['FlowPanel'], '__init__', null, kwargs, [{}, self]);
			self['setID']('header');
			div = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'btn-group2'}]);
			self['buttonBlocks'] = $pyjs_kwargs_call(null, $m['Button'], null, null, [{'classIcon':'icon-selected'}, $m['_']('Blocks'), $p['getattr'](self, 'showBlocks')]);
			div['add']($p['getattr'](self, 'buttonBlocks'));
			self['buttonHarwares'] = $pyjs_kwargs_call(null, $m['Button'], null, null, [{'classIcon':'icon-deselected'}, $m['_']('Components'), $p['getattr'](self, 'showHardwares')]);
			div['add']($p['getattr'](self, 'buttonHarwares'));
			self['add'](div);
			div = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'btn-group2 groupHidden'}]);
			self['buttonMakeBlock'] = $pyjs_kwargs_call(null, $m['Button'], null, null, [{'classIcon':'icon-buildBlock'}, $m['_']('Building Block'), $p['getattr'](self, 'makeBlock')]);
			div['add']($p['getattr'](self, 'buttonMakeBlock'));
			self['add'](div);
			div = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'btn-group2 groupHidden'}]);
			self['buttonUndo'] = $pyjs_kwargs_call(null, $m['Button'], null, null, [{'classIcon':'icon-undo'}, $m['_']('Undo'), $m['undo']]);
			div['add']($p['getattr'](self, 'buttonUndo'));
			self['buttonRedo'] = $pyjs_kwargs_call(null, $m['Button'], null, null, [{'classIcon':'icon-redo'}, $m['_']('Redo'), $m['redo']]);
			div['add']($p['getattr'](self, 'buttonRedo'));
			self['add'](div);
			div = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'btn-group2 groupHidden'}]);
			self['buttonOpen'] = $pyjs_kwargs_call(null, $m['Button'], null, null, [{'classIcon':'icon-open'}, $m['_']('Open'), $m['loadState']]);
			div['add']($p['getattr'](self, 'buttonOpen'));
			self['buttonSave'] = $pyjs_kwargs_call(null, $m['Button'], null, null, [{'classIcon':'icon-download'}, $m['_']('Save'), $m['saveState']]);
			self['buttonSave']['setID']('btnSave');
			div['add']($p['getattr'](self, 'buttonSave'));
			self['add'](div);
			div = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'btn-group'}]);
			self['codeGenerator'] = $m['GenerateCodeButtonListener']($m['getWorkspace']()['getCodePanel']());
			self['buttonTranslate'] = $m['Button']($m['_']('Translate'), $p['getattr'](self, 'codeGenerator'));
			self['buttonTranslate']['addMouseListener'](self);
			div['add']($p['getattr'](self, 'buttonTranslate'));
			self['dropdownTranslate'] = $pyjs_kwargs_call(null, $m['Dropdown'], null, null, [{'StyleName':'dropdown_btn', 'rootPanel':div}, '', null, $p['getattr'](self, 'translateItemClick')]);
			self['isAutomatic'] = false;
			self['dropdownTranslate']['addValue']($m['gettext_noop']('Manual'), 'icon-selected');
			self['dropdownTranslate']['addValue']($m['gettext_noop']('Automatic'), 'icon-deselected');
			div['add']($p['getattr'](self, 'dropdownTranslate'));
			self['add'](div);
			div = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'btn-group2'}]);
			self['changeLanguage'] = changeLanguage;
			self['dropdownFlag'] = $pyjs_kwargs_call(null, $m['Dropdown'], null, null, [{'StyleName':'dropdown_btn flag', 'classIcon':'icon-pt_BR'}, '', null, $p['getattr'](self, 'flagItemClick')]);
			self['dropdownFlag']['addValue']('Portugu&ecirc;s', 'icon-pt_BR');
			self['dropdownFlag']['addValue']('English', 'icon-en_US');
			self['dropdownFlag']['addValue']('Espa&ntilde;ol', 'icon-es_ES');
			self['dropdownFlag']['addValue']('Italiano', 'icon-it_IT');
			self['dropdownFlag']['addMouseListener']($m['TooltipListener']('Idioma'));
			div['add']($p['getattr'](self, 'dropdownFlag'));
			self['add'](div);
			self['mainStack'] = $p['list']([]);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['changeLanguage']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('flagItemClick', function(style) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				style = arguments[1];
			}

			self['dropdownFlag']['changeIcon'](style);
			self['changeLanguage'](style['$$replace']('icon-', ''));
			return null;
		}
	, 1, [null,null,['self'],['style']]);
		$cls_definition['flagItemClick'] = $method;
		$method = $pyjs__bind_method2('translateItemClick', function(mechanism) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				mechanism = arguments[1];
			}
			var value,$or1,$iter1_type,$or2,$and1,$and3,$and4,$iter1_iter,$iter1_array,$iter1_nextval,$and2,$iter1_idx;
			self['isAutomatic'] = ($p['bool']($or1=($p['bool']($and1=!$p['bool']($p['getattr'](self, 'isAutomatic')))?$p['op_eq'](mechanism, 'icon-deselected'):$and1))?$or1:($p['bool']($and3=$p['getattr'](self, 'isAutomatic'))?$p['op_eq'](mechanism, 'icon-selected'):$and3));
			if ($p['bool']($p['op_eq'](mechanism, 'icon-deselected'))) {
				$iter1_iter = self['dropdownTranslate']['getValues']();
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					value = $iter1_nextval['$nextval'];
					if ($p['bool']($p['op_eq'](value['getClassIcon'](), 'icon-deselected'))) {
						value['setClassIcon']('icon-selected');
					}
					else {
						value['setClassIcon']('icon-deselected');
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['mechanism']]);
		$cls_definition['translateItemClick'] = $method;
		$method = $pyjs__bind_method2('makeBlockItemClick', function(action) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				action = arguments[1];
			}

			self['dropdownMakeBlock']['popup']['hide']();
			if ($p['bool']($p['op_eq'](action, 'icon-ImportBlock'))) {
				$m['importCustomBlock']();
			}
			else if ($p['bool']($p['op_eq'](action, 'icon-ExportBlock'))) {
				$m['exportCustomBlocks']();
			}
			return null;
		}
	, 1, [null,null,['self'],['action']]);
		$cls_definition['makeBlockItemClick'] = $method;
		$method = $pyjs__bind_method2('changeTexts', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['buttonMakeBlock']['setText']($m['_']('Building Block'));
			self['buttonTranslate']['setText']($m['_']('Translate'));
			self['dropdownTranslate']['changeTexts']();
			self['buttonHarwares']['setText']($m['_']('Components'));
			self['buttonBlocks']['setText']($m['_']('Blocks'));
			self['buttonSave']['setText']($m['_']('Save'));
			self['buttonOpen']['setText']($m['_']('Open'));
			self['buttonUndo']['setText']($m['_']('Undo'));
			self['buttonRedo']['setText']($m['_']('Redo'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['changeTexts'] = $method;
		$method = $pyjs__bind_method2('showHardwares', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['buttonHarwares']['changeIcon']('icon-selected');
			self['buttonBlocks']['changeIcon']('icon-deselected');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['showHardwares'] = $method;
		$method = $pyjs__bind_method2('showBlocks', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['buttonHarwares']['changeIcon']('icon-deselected');
			self['buttonBlocks']['changeIcon']('icon-selected');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['showBlocks'] = $method;
		$method = $pyjs__bind_method2('makeBlock', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var popup;
			popup = $m['PopupNewBlock']($m['popupConfirmNewBlock']);
			popup['show']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['makeBlock'] = $method;
		$method = $pyjs__bind_method2('reloadClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var stateChange;
			$m['getWorkspace']()['reload']();
			stateChange = $p['___import___']('edu.uca.util.Serializable.stateChange', 'edu.uca.ui', null, false);
			stateChange();
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['reloadClick'] = $method;
		$method = $pyjs__bind_method2('onMouseEnter', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $iter2_nextval,$iter2_type,$iter2_iter,rootSetupBlock,$iter2_idx,block,allBlocks,$iter2_array;
			rootSetupBlock = null;
			if ($p['bool'](($m['getWorkspace']()['getMainBlock']() !== null))) {
				rootSetupBlock = $m['getWorkspace']()['getMainBlock']()['getFirstBlock']();
			}
			self['mainStack'] = $p['list']([]);
			self['createMainStack'](rootSetupBlock);
			allBlocks = $m['getWorkspace']()['getBlocks']();
			$iter2_iter = allBlocks;
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				block = $iter2_nextval['$nextval'];
				if ($p['bool'](!$p['getattr'](self, 'mainStack')['__contains__'](block))) {
					block['addStyleName']('disabled');
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseEnter'] = $method;
		$method = $pyjs__bind_method2('createMainStack', function(root) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				root = arguments[1];
			}
			var $iter3_idx,$iter4_type,holder,$iter3_type,$iter4_idx,$iter3_iter,$iter4_iter,$iter3_array,$iter4_array,$iter4_nextval,$iter3_nextval;
			if ($p['bool']((root === null))) {
				return null;
			}
			self['mainStack']['append'](root);
			$iter3_iter = $p['getattr'](root, 'holderArguments');
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				holder = $iter3_nextval['$nextval'];
				self['createMainStack']($p['getattr'](holder, 'subBlock'));
			}
			$iter4_iter = $p['getattr'](root, 'holderChildren');
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
				holder = $iter4_nextval['$nextval'];
				self['createMainStack']($p['getattr'](holder, 'subBlock'));
			}
			if ($p['bool'](($p['getattr'](root, 'holderSiblingDown') !== null))) {
				self['createMainStack']($p['getattr']($p['getattr'](root, 'holderSiblingDown'), 'subBlock'));
			}
			return null;
		}
	, 1, [null,null,['self'],['root']]);
		$cls_definition['createMainStack'] = $method;
		$method = $pyjs__bind_method2('onMouseLeave', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $iter5_nextval,$iter5_array,$iter5_iter,allBlocks,$iter5_idx,$iter5_type,block;
			allBlocks = $m['getWorkspace']()['getBlocks']();
			$iter5_iter = allBlocks;
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				block = $iter5_nextval['$nextval'];
				block['removeStyleName']('disabled');
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseLeave'] = $method;
		$method = $pyjs__bind_method2('onMouseMove', function(sender, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseMove'] = $method;
		$method = $pyjs__bind_method2('onMouseDown', function(sender, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseDown'] = $method;
		$method = $pyjs__bind_method2('onMouseUp', function(sender, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseUp'] = $method;
		var $bases = new Array($m['FlowPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Header', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.ui.Header */


/* end module: edu.uca.ui.Header */


/*
PYJS_DEPS: ['edu.uca.ui.listener.GenerateCodeButtonListener.GenerateCodeButtonListener', 'edu', 'edu.uca', 'edu.uca.ui', 'edu.uca.ui.listener', 'edu.uca.ui.listener.GenerateCodeButtonListener', 'pyjamas.ui.FlowPanel.FlowPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.FlowPanel', 'edu.uca.Workspace.getWorkspace', 'edu.uca.Workspace', 'edu.uca.util.Button.Button', 'edu.uca.util', 'edu.uca.util.Button', 'edu.uca.util.PopupNewBlock.PopupNewBlock', 'edu.uca.util.PopupNewBlock', 'edu.uca.util.PopupNewBlock.popupConfirmNewBlock', 'edu.uca.util.Serializable.saveState', 'edu.uca.util.Serializable', 'edu.uca.util.Serializable.loadState', 'edu.uca.util.Serializable.undo', 'edu.uca.util.Serializable.redo', 'edu.uca.util.Serializable.saveAllCustomBlocks', 'edu.uca.util.Serializable.importCustomBlock', 'edu.uca.util.Serializable.exportCustomBlocks', 'edu.uca.util.Dropdown.Dropdown', 'edu.uca.util.Dropdown', 'edu.uca.util.i18n._', 'edu.uca.util.i18n', 'edu.uca.util.i18n.gettext_noop', 'pyjamas.DOM', 'edu.uca.renderable.Element.Element', 'edu.uca.renderable', 'edu.uca.renderable.Element', 'pyjamas.ui.Tooltip.TooltipListener', 'pyjamas.ui.Tooltip', 'edu.uca.util.Serializable.stateChange']
*/
