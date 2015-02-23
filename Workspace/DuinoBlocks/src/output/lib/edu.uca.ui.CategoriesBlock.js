/* start module: edu.uca.ui.CategoriesBlock */
$pyjs['loaded_modules']['edu.uca.ui.CategoriesBlock'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.ui.CategoriesBlock']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.ui.CategoriesBlock'];
	if(typeof $pyjs['loaded_modules']['edu.uca.ui'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.ui']['__was_initialized__']) $p['___import___']('edu.uca.ui', null);
	var $m = $pyjs['loaded_modules']['edu.uca.ui.CategoriesBlock'];
	$m['__repr__'] = function() { return '<module: edu.uca.ui.CategoriesBlock>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.ui.CategoriesBlock';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.ui']['CategoriesBlock'] = $pyjs['loaded_modules']['edu.uca.ui.CategoriesBlock'];


	$m['vars'] = $p['___import___']('edu.uca.Workspace.vars', 'edu.uca.ui', null, false);
	$m['numericVars'] = $p['___import___']('edu.uca.Workspace.numericVars', 'edu.uca.ui', null, false);
	$m['logicVars'] = $p['___import___']('edu.uca.Workspace.logicVars', 'edu.uca.ui', null, false);
	$m['alphaNumericVars'] = $p['___import___']('edu.uca.Workspace.alphaNumericVars', 'edu.uca.ui', null, false);
	$m['createdBlocks'] = $p['___import___']('edu.uca.Workspace.createdBlocks', 'edu.uca.ui', null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', 'edu.uca.ui', null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', 'edu.uca.ui', null, false);
	$m['Block'] = $p['___import___']('edu.uca.renderable.block.Block.Block', 'edu.uca.ui', null, false);
	$m['PopupNewVar'] = $p['___import___']('edu.uca.util.PopupNewVar.PopupNewVar', 'edu.uca.ui', null, false);
	$m['Element'] = $p['___import___']('edu.uca.renderable.Element.Element', 'edu.uca.ui', null, false);
	$m['FocusWidget'] = $p['___import___']('pyjamas.ui.FocusWidget.FocusWidget', 'edu.uca.ui', null, false);
	$m['Dropdown'] = $p['___import___']('edu.uca.util.Dropdown.Dropdown', 'edu.uca.ui', null, false);
	$m['Button'] = $p['___import___']('edu.uca.util.Button.Button', 'edu.uca.ui', null, false);
	$m['Popup'] = $p['___import___']('edu.uca.util.Popup.Popup', 'edu.uca.ui', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'edu.uca.ui', null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', 'edu.uca.ui', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.ui', null, false);
	$m['forever'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.forever', 'edu.uca.ui', null, false);
	$m['if_'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.if_', 'edu.uca.ui', null, false);
	$m['if_else_'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.if_else_', 'edu.uca.ui', null, false);
	$m['repeat_'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.repeat_', 'edu.uca.ui', null, false);
	$m['while_'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.while_', 'edu.uca.ui', null, false);
	$m['delay_'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.delay_', 'edu.uca.ui', null, false);
	$m['plus'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.plus', 'edu.uca.ui', null, false);
	$m['minus'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.minus', 'edu.uca.ui', null, false);
	$m['multiply'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.multiply', 'edu.uca.ui', null, false);
	$m['divide'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.divide', 'edu.uca.ui', null, false);
	$m['equals'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.equals', 'edu.uca.ui', null, false);
	$m['lesser'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.lesser', 'edu.uca.ui', null, false);
	$m['greater'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.greater', 'edu.uca.ui', null, false);
	$m['and_'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.and_', 'edu.uca.ui', null, false);
	$m['or_'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.or_', 'edu.uca.ui', null, false);
	$m['not_'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.not_', 'edu.uca.ui', null, false);
	$m['true_'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.true_', 'edu.uca.ui', null, false);
	$m['false_'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.false_', 'edu.uca.ui', null, false);
	$m['digitalRead'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.digitalRead', 'edu.uca.ui', null, false);
	$m['analogRead'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.analogRead', 'edu.uca.ui', null, false);
	$m['digitalWrite'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.digitalWrite', 'edu.uca.ui', null, false);
	$m['analogWrite'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.analogWrite', 'edu.uca.ui', null, false);
	$m['println'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.println', 'edu.uca.ui', null, false);
	$m['intToStr'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.intToStr', 'edu.uca.ui', null, false);
	$m['boolToStr'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.boolToStr', 'edu.uca.ui', null, false);
	$m['glue'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.glue', 'edu.uca.ui', null, false);
	$m['setNumericVar'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.setNumericVar', 'edu.uca.ui', null, false);
	$m['getNumericVar'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.getNumericVar', 'edu.uca.ui', null, false);
	$m['incNumericVar'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.incNumericVar', 'edu.uca.ui', null, false);
	$m['setLogicVar'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.setLogicVar', 'edu.uca.ui', null, false);
	$m['getLogicVar'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.getLogicVar', 'edu.uca.ui', null, false);
	$m['setAlphaNumericVar'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.setAlphaNumericVar', 'edu.uca.ui', null, false);
	$m['getAlphaNumericVar'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.getAlphaNumericVar', 'edu.uca.ui', null, false);
	$m['min_'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.min_', 'edu.uca.ui', null, false);
	$m['max_'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.max_', 'edu.uca.ui', null, false);
	$m['sqrt_'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.sqrt_', 'edu.uca.ui', null, false);
	$m['abs_'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.abs_', 'edu.uca.ui', null, false);
	$m['sin_'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.sin_', 'edu.uca.ui', null, false);
	$m['cos_'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.cos_', 'edu.uca.ui', null, false);
	$m['tan_'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.tan_', 'edu.uca.ui', null, false);
	$m['decNumericVar'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.decNumericVar', 'edu.uca.ui', null, false);
	$m['millis'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.millis', 'edu.uca.ui', null, false);
	$m['random'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.random', 'edu.uca.ui', null, false);
	$m['random_min_max'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.random_min_max', 'edu.uca.ui', null, false);
	$m['StrToInt'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.StrToInt', 'edu.uca.ui', null, false);
	$m['str_equals'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.str_equals', 'edu.uca.ui', null, false);
	$m['doWhile'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.doWhile', 'edu.uca.ui', null, false);
	$m['round_'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.round_', 'edu.uca.ui', null, false);
	$m['getMsg'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.getMsg', 'edu.uca.ui', null, false);
	$m['waitForAnyMsg'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.waitForAnyMsg', 'edu.uca.ui', null, false);
	$m['waitForTheMsg'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.waitForTheMsg', 'edu.uca.ui', null, false);
	$m['available'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.available', 'edu.uca.ui', null, false);
	$m['delayUntil'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.delayUntil', 'edu.uca.ui', null, false);
	$m['_'] = $p['___import___']('edu.uca.util.i18n._', 'edu.uca.ui', null, false);
	$m['TooltipListener'] = $p['___import___']('pyjamas.ui.Tooltip.TooltipListener', 'edu.uca.ui', null, false);
	$m['stateChange'] = $p['___import___']('edu.uca.util.Serializable.stateChange', 'edu.uca.ui', null, false);
	$m['TabTitle'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.ui.CategoriesBlock';
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
		$cls_definition['__module__'] = 'edu.uca.ui.CategoriesBlock';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs_kwargs_call($m['VerticalPanel'], '__init__', null, null, [{'StyleName':'CategoryPanel'}, self]);
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
		$method = $pyjs__bind_method2('reload', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool'](($p['getattr'](self, 'myBlocksSubCat') !== null))) {
				self['remove']($p['getattr'](self, 'myBlocksSubCat'));
				self['myBlocksSubCat'] = null;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['reload'] = $method;
		var $bases = new Array($m['VerticalPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('CategoryPanel', $p['tuple']($bases), $data);
	})();
	$m['SubCategoryPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.ui.CategoriesBlock';
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
			self['count'] = 0;
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
			if ($p['bool']($p['list'](['commandType', 'numericType', 'logicType', 'alphaNumericType'])['__contains__']($p['getattr'](block, '$$name')))) {
				panel['add'](self['getRemoveCustomBlock'](block));
				info['addMouseListener']($m['TooltipListener']('Editar'));
			}
			else {
				info['addMouseListener']($m['TooltipListener']('Ajuda'));
			}
			return null;
		}
	, 1, [null,null,['self'],['block'],['classHelp', 'help_default'],['beforeIndex', null]]);
		$cls_definition['addBlock'] = $method;
		$method = $pyjs__bind_method2('getRemoveCustomBlock', function(block) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
			}
			var remove;
			remove = $pyjs_kwargs_call(null, $m['Label'], null, null, [{'StyleName':'remove_btn'}, 'x']);
			remove['addMouseListener']($m['TooltipListener']('Remover'));
			remove['block'] = block;
			remove['addClickListener']($p['getattr'](self, 'RemoveCustomBlock'));
			return remove;
		}
	, 1, [null,null,['self'],['block']]);
		$cls_definition['getRemoveCustomBlock'] = $method;
		$method = $pyjs__bind_method2('RemoveCustomBlock', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			self['list']['remove'](sender['block']['getParent']());
			self['blocks']['remove']($p['getattr'](sender, 'block'));
			if ($p['bool']($p['op_eq']($p['len']($p['getattr'](self, 'blocks')), 0))) {
				self['getParent']()['reload']();
			}
			$m['createdBlocks']['__delitem__']($p['getattr']($p['getattr'](sender, 'block'), 'varName'));
			$m['stateChange']();
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['RemoveCustomBlock'] = $method;
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
		$method = $pyjs__bind_method2('removeAllBlocks', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			while ($p['bool'](($p['cmp']($p['len']($p['getattr'](self, 'blocks')), 0) == 1))) {
				self['removeBlock']($p['getattr'](self, 'blocks')['__getitem__'](0));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['removeAllBlocks'] = $method;
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
			var popup,$add2,$add3,$add1,$add4;
			if ($p['bool']($p['list'](['commandType', 'numericType', 'logicType', 'alphaNumericType'])['__contains__']($p['getattr']($p['getattr'](sender, 'block'), '$$name')))) {
				$m['createdBlocks']['__getitem__']($p['getattr']($p['getattr'](sender, 'block'), 'varName'))['show']();
			}
			else {
				popup = $m['Popup']($p['__op_add']($add3=$p['__op_add']($add1='<b>',$add2=$m['_']('Help')),$add4='</b>'), null, null);
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
			var $add6,$add7,$add5,$add8;
			$m['DOM']['setInnerHTML'](self['title']['getElement'](), $p['__op_add']($add7=$p['__op_add']($add5=$m['_']($p['getattr'](self, 'subCategoryName')),$add6=': #'),$add8=$p['str'](count)));
			self['title']['add']($p['getattr'](self, 'collapse'));
			self['count'] = count;
			return null;
		}
	, 1, [null,null,['self'],['count']]);
		$cls_definition['changeTitle'] = $method;
		var $bases = new Array($m['VerticalPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('SubCategoryPanel', $p['tuple']($bases), $data);
	})();
	$m['Control'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.ui.CategoriesBlock';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['CategoryPanel']['__init__'](self);
			self['$$label'] = 'control_lbl';
			self['subLoop'] = $m['SubCategoryPanel']($m['_']('Loops'), $p['getattr'](self, '$$label'));
			self['mainBlock'] = $m['forever']();
			self['subLoop']['addBlock']($p['getattr'](self, 'mainBlock'), 'help_forever');
			self['subLoop']['addBlock']($m['repeat_']());
			self['subLoop']['addBlock']($m['while_']());
			self['add']($p['getattr'](self, 'subLoop'));
			self['sub'] = $m['SubCategoryPanel']($m['_']('Flow Controls'), $p['getattr'](self, '$$label'));
			self['sub']['addBlock']($m['if_'](), 'help_if');
			self['sub']['addBlock']($m['if_else_']());
			self['sub']['addBlock']($m['delay_']());
			self['sub']['addBlock']($m['delayUntil']());
			self['add']($p['getattr'](self, 'sub'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('hideMainBlock', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['DOM']['setStyleAttribute']($p['getattr'](self['subLoop']['list']['getBody'](), 'firstChild'), 'display', 'none');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['hideMainBlock'] = $method;
		$method = $pyjs__bind_method2('showMainBlock', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['DOM']['setStyleAttribute']($p['getattr'](self['subLoop']['list']['getBody'](), 'firstChild'), 'display', '');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['showMainBlock'] = $method;
		var $bases = new Array($m['CategoryPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Control', $p['tuple']($bases), $data);
	})();
	$m['Operators'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.ui.CategoriesBlock';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var sub;
			$m['CategoryPanel']['__init__'](self);
			self['$$label'] = 'operators_lbl';
			sub = $m['SubCategoryPanel']($m['_']('Arithmetic'), $p['getattr'](self, '$$label'));
			sub['addBlock']($m['plus']());
			sub['addBlock']($m['minus']());
			sub['addBlock']($m['multiply']());
			sub['addBlock']($m['divide']());
			self['add'](sub);
			sub = $m['SubCategoryPanel']($m['_']('Relational'), $p['getattr'](self, '$$label'));
			sub['addBlock']($m['equals']());
			sub['addBlock']($m['lesser']());
			sub['addBlock']($m['greater']());
			self['add'](sub);
			sub = $m['SubCategoryPanel']($m['_']('Logic'), $p['getattr'](self, '$$label'));
			sub['addBlock']($m['and_']());
			sub['addBlock']($m['or_']());
			sub['addBlock']($m['not_']());
			sub['addBlock']($m['true_']());
			sub['addBlock']($m['false_']());
			self['add'](sub);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['CategoryPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Operators', $p['tuple']($bases), $data);
	})();
	$m['Input'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.ui.CategoriesBlock';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var sub;
			$m['CategoryPanel']['__init__'](self);
			self['$$label'] = 'input_lbl';
			sub = $m['SubCategoryPanel']('Gen\xc3\xa9ricos', $p['getattr'](self, '$$label'));
			sub['addBlock']($m['digitalRead']());
			sub['addBlock']($m['analogRead']());
			self['add'](sub);
			self['subComp'] = $p['dict']([]);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getSubComp', function(name) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
			}
			var $add9,$add10;
			if ($p['bool'](!$p['getattr'](self, 'subComp')['__contains__'](name))) {
				$p['getattr'](self, 'subComp')['__setitem__'](name, $m['SubCategoryPanel']($p['__op_add']($add9='Componente ',$add10=name), $p['getattr'](self, '$$label')));
				self['add']($p['getattr'](self, 'subComp')['__getitem__'](name));
			}
			return $p['getattr'](self, 'subComp')['__getitem__'](name);
		}
	, 1, [null,null,['self'],['name']]);
		$cls_definition['getSubComp'] = $method;
		$method = $pyjs__bind_method2('removeAllSubComp', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter3_idx,sub,$iter3_type,$iter3_iter,$iter3_array,$iter3_nextval;
			$iter3_iter = self['subComp']['values']();
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				sub = $iter3_nextval['$nextval'];
				sub['removeAllBlocks']();
				self['remove'](sub);
			}
			self['subComp'] = $p['dict']([]);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['removeAllSubComp'] = $method;
		$method = $pyjs__bind_method2('removeSubComp', function(name) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
			}

			$p['getattr'](self, 'subComp')['__getitem__'](name)['removeAllBlocks']();
			self['remove']($p['getattr'](self, 'subComp')['__getitem__'](name));
			$p['getattr'](self, 'subComp')['__delitem__'](name);
			return null;
		}
	, 1, [null,null,['self'],['name']]);
		$cls_definition['removeSubComp'] = $method;
		$method = $pyjs__bind_method2('reload', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['removeAllSubComp']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['reload'] = $method;
		var $bases = new Array($m['CategoryPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Input', $p['tuple']($bases), $data);
	})();
	$m['Output'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.ui.CategoriesBlock';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var sub;
			$m['CategoryPanel']['__init__'](self);
			self['$$label'] = 'output_lbl';
			sub = $m['SubCategoryPanel']('Gen\xc3\xa9ricos', $p['getattr'](self, '$$label'));
			sub['addBlock']($m['digitalWrite']());
			sub['addBlock']($m['analogWrite']());
			self['add'](sub);
			self['subComp'] = $p['dict']([]);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getSubComp', function(name) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
			}
			var $add12,$add11;
			if ($p['bool'](!$p['getattr'](self, 'subComp')['__contains__'](name))) {
				$p['getattr'](self, 'subComp')['__setitem__'](name, $m['SubCategoryPanel']($p['__op_add']($add11='Componente ',$add12=name), $p['getattr'](self, '$$label')));
				self['add']($p['getattr'](self, 'subComp')['__getitem__'](name));
			}
			return $p['getattr'](self, 'subComp')['__getitem__'](name);
		}
	, 1, [null,null,['self'],['name']]);
		$cls_definition['getSubComp'] = $method;
		$method = $pyjs__bind_method2('removeAllSubComp', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var sub,$iter4_nextval,$iter4_idx,$iter4_type,$iter4_array,$iter4_iter;
			$iter4_iter = self['subComp']['values']();
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
				sub = $iter4_nextval['$nextval'];
				sub['removeAllBlocks']();
				self['remove'](sub);
			}
			self['subComp'] = $p['dict']([]);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['removeAllSubComp'] = $method;
		$method = $pyjs__bind_method2('removeSubComp', function(name) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
			}

			$p['getattr'](self, 'subComp')['__getitem__'](name)['removeAllBlocks']();
			self['remove']($p['getattr'](self, 'subComp')['__getitem__'](name));
			$p['getattr'](self, 'subComp')['__delitem__'](name);
			return null;
		}
	, 1, [null,null,['self'],['name']]);
		$cls_definition['removeSubComp'] = $method;
		$method = $pyjs__bind_method2('reload', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['removeAllSubComp']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['reload'] = $method;
		var $bases = new Array($m['CategoryPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Output', $p['tuple']($bases), $data);
	})();
	$m['Setup'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.ui.CategoriesBlock';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var sub;
			$m['CategoryPanel']['__init__'](self);
			self['$$label'] = 'config_lbl';
			sub = $m['SubCategoryPanel']($m['_']('Alphanumeris Commands'), $p['getattr'](self, '$$label'));
			sub['addBlock']($m['glue']());
			sub['addBlock']($m['intToStr']());
			sub['addBlock']($m['boolToStr']());
			sub['addBlock']($m['StrToInt']());
			sub['addBlock']($m['str_equals']());
			self['add'](sub);
			sub = $pyjs_kwargs_call(null, $m['SubCategoryPanel'], null, null, [{'openList':false}, 'Comunica&ccedil;&atilde;o Serial', $p['getattr'](self, '$$label')]);
			sub['addBlock']($m['println']());
			sub['addBlock']($m['available']());
			sub['addBlock']($m['getMsg']());
			sub['addBlock']($m['waitForAnyMsg']());
			sub['addBlock']($m['waitForTheMsg']());
			self['add'](sub);
			sub = $pyjs_kwargs_call(null, $m['SubCategoryPanel'], null, null, [{'openList':false}, $m['_']('Math Functions'), $p['getattr'](self, '$$label')]);
			sub['addBlock']($m['min_']());
			sub['addBlock']($m['max_']());
			sub['addBlock']($m['sqrt_']());
			sub['addBlock']($m['abs_']());
			sub['addBlock']($m['round_']());
			self['add'](sub);
			sub = $pyjs_kwargs_call(null, $m['SubCategoryPanel'], null, null, [{'openList':false}, $m['_']('Trigonometrics Functions'), $p['getattr'](self, '$$label')]);
			sub['addBlock']($m['sin_']());
			sub['addBlock']($m['cos_']());
			sub['addBlock']($m['tan_']());
			self['add'](sub);
			sub = $pyjs_kwargs_call(null, $m['SubCategoryPanel'], null, null, [{'openList':false}, $m['_']('Others'), $p['getattr'](self, '$$label')]);
			sub['addBlock']($m['millis']());
			sub['addBlock']($m['random']());
			sub['addBlock']($m['random_min_max']());
			self['add'](sub);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['CategoryPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Setup', $p['tuple']($bases), $data);
	})();
	$m['Variables'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.ui.CategoriesBlock';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var buttonsTab;
			$m['CategoryPanel']['__init__'](self);
			self['$$label'] = 'variables_lbl';
			buttonsTab = $m['SubCategoryPanel']();
			self['add'](buttonsTab);
			self['buttonAddVar'] = $m['Button']($m['_']('Add Variable'), $p['getattr'](self, 'addVarClick'));
			buttonsTab['addWidget']($p['getattr'](self, 'buttonAddVar'));
			self['dropdownRemoveVar'] = $pyjs_kwargs_call(null, $m['Dropdown'], null, null, [{'StyleName':'dropdown_btn'}, $m['_']('Remove Variable'), $p['getattr'](self, 'menuClick'), $p['getattr'](self, 'itemClick')]);
			self['dropdownRemoveVar']['setStyleAttribute']('display', 'none');
			buttonsTab['addWidget']($p['getattr'](self, 'dropdownRemoveVar'));
			self['alphanumericTab'] = $m['SubCategoryPanel']($m['_']('Alphanumerics'), $p['getattr'](self, '$$label'));
			self['numericTab'] = $m['SubCategoryPanel']($m['_']('Numerics'), $p['getattr'](self, '$$label'));
			self['logicTab'] = $m['SubCategoryPanel']($m['_']('Logics'), $p['getattr'](self, '$$label'));
			self['genericLogicBlocks'] = $p['list']([]);
			self['genericNumericBlocks'] = $p['list']([]);
			self['genericAlphaNumericBlocks'] = $p['list']([]);
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

			$m['CategoryPanel']['changeTexts'](self);
			self['buttonAddVar']['setText']($m['_']('Add Variable'));
			self['dropdownRemoveVar']['setText']($m['_']('Remove Variable'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['changeTexts'] = $method;
		$method = $pyjs__bind_method2('addVarClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var popup;
			popup = $m['PopupNewVar']($p['getattr'](self, 'popupConfirmNewVar'));
			popup['show']();
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['addVarClick'] = $method;
		$method = $pyjs__bind_method2('menuClick', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var v;
			v = $m['vars'];
			self['dropdownRemoveVar']['addValues'](v['keys']());
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['menuClick'] = $method;
		$method = $pyjs__bind_method2('addGenericNumericBlocks', function(text) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}
			var incVar,decVar,getVar,setVar;
			if ($p['bool']($p['op_eq']($p['len']($m['numericVars']), 0))) {
				self['insert']($p['getattr'](self, 'numericTab'), self['getBody'](), 1);
				setVar = $m['setNumericVar']();
				incVar = $m['incNumericVar']();
				decVar = $m['decNumericVar']();
				self['numericTab']['addBlock'](setVar);
				self['numericTab']['addBlock'](incVar);
				self['numericTab']['addBlock'](decVar);
				self['genericNumericBlocks'] = $p['list']([setVar, incVar, decVar]);
			}
			$m['numericVars']['append'](text);
			getVar = $m['getNumericVar']();
			getVar['dropDownVarName']['setValue'](text);
			self['numericTab']['addBlock'](getVar);
			self['numericTab']['changeTitle']($p['len']($m['numericVars']));
			self['genericNumericBlocks']['append'](getVar);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['addGenericNumericBlocks'] = $method;
		$method = $pyjs__bind_method2('addGenericLogicBlocks', function(text) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}
			var setVar,getVar;
			if ($p['bool']($p['op_eq']($p['len']($m['logicVars']), 0))) {
				self['insert']($p['getattr'](self, 'logicTab'), self['getBody'](), 1);
				setVar = $m['setLogicVar']();
				self['logicTab']['addBlock'](setVar);
				$p['getattr'](self, 'logicTab')['genericLogicBlocks'] = $p['list']([setVar]);
			}
			$m['logicVars']['append'](text);
			getVar = $m['getLogicVar']();
			getVar['dropDownVarName']['setValue'](text);
			self['logicTab']['addBlock'](getVar);
			self['logicTab']['changeTitle']($p['len']($m['logicVars']));
			self['logicTab']['genericLogicBlocks']['append'](getVar);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['addGenericLogicBlocks'] = $method;
		$method = $pyjs__bind_method2('addGenericAlphaNumericBlocks', function(text) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}
			var setVar,getVar;
			if ($p['bool']($p['op_eq']($p['len']($m['alphaNumericVars']), 0))) {
				self['insert']($p['getattr'](self, 'alphanumericTab'), self['getBody'](), 1);
				setVar = $m['setAlphaNumericVar']();
				self['alphanumericTab']['addBlock'](setVar);
				self['genericAlphaNumericBlocks'] = $p['list']([setVar]);
			}
			$m['alphaNumericVars']['append'](text);
			getVar = $m['getAlphaNumericVar']();
			getVar['dropDownVarName']['setValue'](text);
			self['alphanumericTab']['addBlock'](getVar);
			self['alphanumericTab']['changeTitle']($p['len']($m['alphaNumericVars']));
			self['genericAlphaNumericBlocks']['append'](getVar);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['addGenericAlphaNumericBlocks'] = $method;
		$method = $pyjs__bind_method2('removeGenericAlphaNumericBlocks', function(text) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}
			var $iter5_nextval,b,$iter5_idx,removeBlock,$iter5_iter,$iter5_array,$iter5_type;
			$m['alphaNumericVars']['remove'](text);
			if ($p['bool']($p['op_eq']($p['len']($m['alphaNumericVars']), 0))) {
				self['remove']($p['getattr'](self, 'alphanumericTab'));
				self['alphanumericTab']['removeAllBlocks']();
				self['genericAlphaNumericBlocks'] = $p['list']([]);
			}
			else {
				$iter5_iter = $p['getattr']($p['getattr'](self, 'alphanumericTab'), 'blocks');
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					b = $iter5_nextval['$nextval'];
					if ($p['bool']($p['op_eq']($p['getattr'](b, 'varName'), text))) {
						removeBlock = b;
					}
				}
				self['alphanumericTab']['removeBlock'](removeBlock);
				self['alphanumericTab']['changeTitle']($p['len']($m['alphaNumericVars']));
				self['genericAlphaNumericBlocks']['remove'](removeBlock);
			}
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['removeGenericAlphaNumericBlocks'] = $method;
		$method = $pyjs__bind_method2('removeGenericLogicBlocks', function(text) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}
			var b,$iter6_idx,$iter6_type,removeBlock,$iter6_array,$iter6_iter,$iter6_nextval;
			$m['logicVars']['remove'](text);
			if ($p['bool']($p['op_eq']($p['len']($m['logicVars']), 0))) {
				self['remove']($p['getattr'](self, 'logicTab'));
				self['logicTab']['removeAllBlocks']();
				self['genericLogicBlocks'] = $p['list']([]);
			}
			else {
				$iter6_iter = $p['getattr']($p['getattr'](self, 'logicTab'), 'blocks');
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					b = $iter6_nextval['$nextval'];
					if ($p['bool']($p['op_eq']($p['getattr'](b, 'varName'), text))) {
						removeBlock = b;
					}
				}
				self['logicTab']['removeBlock'](removeBlock);
				self['logicTab']['changeTitle']($p['len']($m['logicVars']));
				self['genericLogicBlocks']['remove'](removeBlock);
			}
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['removeGenericLogicBlocks'] = $method;
		$method = $pyjs__bind_method2('removeGenericNumericBlocks', function(text) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}
			var b,$iter7_nextval,removeBlock,$iter7_array,$iter7_idx,$iter7_iter,$iter7_type;
			$m['numericVars']['remove'](text);
			if ($p['bool']($p['op_eq']($p['len']($m['numericVars']), 0))) {
				self['remove']($p['getattr'](self, 'numericTab'));
				self['numericTab']['removeAllBlocks']();
				self['genericNumericBlocks'] = $p['list']([]);
			}
			else {
				$iter7_iter = $p['getattr']($p['getattr'](self, 'numericTab'), 'blocks');
				$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
				while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
					b = $iter7_nextval['$nextval'];
					if ($p['bool']($p['op_eq']($p['getattr'](b, 'varName'), text))) {
						removeBlock = b;
					}
				}
				self['numericTab']['removeBlock'](removeBlock);
				self['numericTab']['changeTitle']($p['len']($m['numericVars']));
				self['genericNumericBlocks']['remove'](removeBlock);
			}
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['removeGenericNumericBlocks'] = $method;
		$method = $pyjs__bind_method2('popupConfirmNewVar', function(text, typeVar, saveChange) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				typeVar = arguments[2];
				saveChange = arguments[3];
			}
			if (typeof saveChange == 'undefined') saveChange=arguments['callee']['__args__'][5][1];
			var stateChange;
			if ($p['bool']($p['op_eq'](typeVar, $p['getattr']($m['Block'], 'NUMBER_BLOCK')))) {
				self['addGenericNumericBlocks'](text);
			}
			else if ($p['bool']($p['op_eq'](typeVar, $p['getattr']($m['Block'], 'BOOLEAN_BLOCK')))) {
				self['addGenericLogicBlocks'](text);
			}
			else if ($p['bool']($p['op_eq'](typeVar, $p['getattr']($m['Block'], 'STRING_BLOCK')))) {
				self['addGenericAlphaNumericBlocks'](text);
			}
			$m['vars']['__setitem__'](text, '');
			if ($p['bool'](($p['cmp']($p['len']($m['vars']), 0) == 1))) {
				self['dropdownRemoveVar']['setStyleAttribute']('display', 'block');
			}
			if ($p['bool'](saveChange)) {
				stateChange = $p['___import___']('edu.uca.util.Serializable.stateChange', 'edu.uca.ui', null, false);
				stateChange();
			}
			return null;
		}
	, 1, [null,null,['self'],['text'],['typeVar'],['saveChange', true]]);
		$cls_definition['popupConfirmNewVar'] = $method;
		$method = $pyjs__bind_method2('itemClick', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}
			var stateChange;
			$m['vars']['__delitem__'](value);
			if ($p['bool']($p['op_eq']($p['len']($m['vars']), 0))) {
				self['dropdownRemoveVar']['setStyleAttribute']('display', 'none');
			}
			if ($p['bool']($m['alphaNumericVars']['__contains__'](value))) {
				self['removeGenericAlphaNumericBlocks'](value);
			}
			else if ($p['bool']($m['numericVars']['__contains__'](value))) {
				self['removeGenericNumericBlocks'](value);
			}
			else if ($p['bool']($m['logicVars']['__contains__'](value))) {
				self['removeGenericLogicBlocks'](value);
			}
			stateChange = $p['___import___']('edu.uca.util.Serializable.stateChange', 'edu.uca.ui', null, false);
			stateChange();
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['itemClick'] = $method;
		$method = $pyjs__bind_method2('reload', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter8_idx,$iter8_array,$iter8_iter,$iter8_nextval,key,v,$iter8_type;
			$m['CategoryPanel']['reload'](self);
			v = $m['vars'];
			$iter8_iter = v['keys']();
			$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
			while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
				key = $iter8_nextval['$nextval'];
				v['pop'](key);
			}
			self['dropdownRemoveVar']['setStyleAttribute']('display', 'none');
			self['remove']($p['getattr'](self, 'alphanumericTab'));
			self['remove']($p['getattr'](self, 'numericTab'));
			self['remove']($p['getattr'](self, 'logicTab'));
			self['logicTab']['removeAllBlocks']();
			self['alphanumericTab']['removeAllBlocks']();
			self['numericTab']['removeAllBlocks']();
			self['genericLogicBlocks'] = $p['list']([]);
			self['genericAlphaNumericBlocks'] = $p['list']([]);
			self['genericNumericBlocks'] = $p['list']([]);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['reload'] = $method;
		var $bases = new Array($m['CategoryPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Variables', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.ui.CategoriesBlock */


/* end module: edu.uca.ui.CategoriesBlock */


/*
PYJS_DEPS: ['edu.uca.Workspace.vars', 'edu', 'edu.uca', 'edu.uca.Workspace', 'edu.uca.Workspace.numericVars', 'edu.uca.Workspace.logicVars', 'edu.uca.Workspace.alphaNumericVars', 'edu.uca.Workspace.createdBlocks', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'edu.uca.renderable.block.Block.Block', 'edu.uca.renderable', 'edu.uca.renderable.block', 'edu.uca.renderable.block.Block', 'edu.uca.util.PopupNewVar.PopupNewVar', 'edu.uca.util', 'edu.uca.util.PopupNewVar', 'edu.uca.renderable.Element.Element', 'edu.uca.renderable.Element', 'pyjamas.ui.FocusWidget.FocusWidget', 'pyjamas.ui.FocusWidget', 'edu.uca.util.Dropdown.Dropdown', 'edu.uca.util.Dropdown', 'edu.uca.util.Button.Button', 'edu.uca.util.Button', 'edu.uca.util.Popup.Popup', 'edu.uca.util.Popup', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.DOM', 'edu.uca.renderable.block.ArduinoBlocks.forever', 'edu.uca.renderable.block.ArduinoBlocks', 'edu.uca.renderable.block.ArduinoBlocks.if_', 'edu.uca.renderable.block.ArduinoBlocks.if_else_', 'edu.uca.renderable.block.ArduinoBlocks.repeat_', 'edu.uca.renderable.block.ArduinoBlocks.while_', 'edu.uca.renderable.block.ArduinoBlocks.delay_', 'edu.uca.renderable.block.ArduinoBlocks.plus', 'edu.uca.renderable.block.ArduinoBlocks.minus', 'edu.uca.renderable.block.ArduinoBlocks.multiply', 'edu.uca.renderable.block.ArduinoBlocks.divide', 'edu.uca.renderable.block.ArduinoBlocks.equals', 'edu.uca.renderable.block.ArduinoBlocks.lesser', 'edu.uca.renderable.block.ArduinoBlocks.greater', 'edu.uca.renderable.block.ArduinoBlocks.and_', 'edu.uca.renderable.block.ArduinoBlocks.or_', 'edu.uca.renderable.block.ArduinoBlocks.not_', 'edu.uca.renderable.block.ArduinoBlocks.true_', 'edu.uca.renderable.block.ArduinoBlocks.false_', 'edu.uca.renderable.block.ArduinoBlocks.digitalRead', 'edu.uca.renderable.block.ArduinoBlocks.analogRead', 'edu.uca.renderable.block.ArduinoBlocks.digitalWrite', 'edu.uca.renderable.block.ArduinoBlocks.analogWrite', 'edu.uca.renderable.block.ArduinoBlocks.println', 'edu.uca.renderable.block.ArduinoBlocks.intToStr', 'edu.uca.renderable.block.ArduinoBlocks.boolToStr', 'edu.uca.renderable.block.ArduinoBlocks.glue', 'edu.uca.renderable.block.ArduinoBlocks.setNumericVar', 'edu.uca.renderable.block.ArduinoBlocks.getNumericVar', 'edu.uca.renderable.block.ArduinoBlocks.incNumericVar', 'edu.uca.renderable.block.ArduinoBlocks.setLogicVar', 'edu.uca.renderable.block.ArduinoBlocks.getLogicVar', 'edu.uca.renderable.block.ArduinoBlocks.setAlphaNumericVar', 'edu.uca.renderable.block.ArduinoBlocks.getAlphaNumericVar', 'edu.uca.renderable.block.ArduinoBlocks.min_', 'edu.uca.renderable.block.ArduinoBlocks.max_', 'edu.uca.renderable.block.ArduinoBlocks.sqrt_', 'edu.uca.renderable.block.ArduinoBlocks.abs_', 'edu.uca.renderable.block.ArduinoBlocks.sin_', 'edu.uca.renderable.block.ArduinoBlocks.cos_', 'edu.uca.renderable.block.ArduinoBlocks.tan_', 'edu.uca.renderable.block.ArduinoBlocks.decNumericVar', 'edu.uca.renderable.block.ArduinoBlocks.millis', 'edu.uca.renderable.block.ArduinoBlocks.random', 'edu.uca.renderable.block.ArduinoBlocks.random_min_max', 'edu.uca.renderable.block.ArduinoBlocks.StrToInt', 'edu.uca.renderable.block.ArduinoBlocks.str_equals', 'edu.uca.renderable.block.ArduinoBlocks.doWhile', 'edu.uca.renderable.block.ArduinoBlocks.round_', 'edu.uca.renderable.block.ArduinoBlocks.getMsg', 'edu.uca.renderable.block.ArduinoBlocks.waitForAnyMsg', 'edu.uca.renderable.block.ArduinoBlocks.waitForTheMsg', 'edu.uca.renderable.block.ArduinoBlocks.available', 'edu.uca.renderable.block.ArduinoBlocks.delayUntil', 'edu.uca.util.i18n._', 'edu.uca.util.i18n', 'pyjamas.ui.Tooltip.TooltipListener', 'pyjamas.ui.Tooltip', 'edu.uca.util.Serializable.stateChange', 'edu.uca.util.Serializable']
*/
