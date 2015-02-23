/* start module: edu.uca.renderable.block.Block */
$pyjs['loaded_modules']['edu.uca.renderable.block.Block'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.renderable.block.Block']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.renderable.block.Block'];
	if(typeof $pyjs['loaded_modules']['edu.uca.renderable.block'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.renderable.block']['__was_initialized__']) $p['___import___']('edu.uca.renderable.block', null);
	var $m = $pyjs['loaded_modules']['edu.uca.renderable.block.Block'];
	$m['__repr__'] = function() { return '<module: edu.uca.renderable.block.Block>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.renderable.block.Block';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.renderable.block']['Block'] = $pyjs['loaded_modules']['edu.uca.renderable.block.Block'];


	$m['Element'] = $p['___import___']('edu.uca.renderable.Element.Element', 'edu.uca.renderable.block', null, false);
	$m['DragWidget'] = $p['___import___']('pyjamas.ui.DragWidget.DragWidget', 'edu.uca.renderable.block', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.renderable.block', null, false);
	$m['GroupElement'] = $p['___import___']('edu.uca.renderable.GroupElement.GroupElement', 'edu.uca.renderable.block', null, false);
	$m['CodeElement'] = $p['___import___']('edu.uca.renderable.CodeElement.CodeElement', 'edu.uca.renderable.block', null, false);
	$m['ClickHandler'] = $p['___import___']('pyjamas.ui.ClickListener.ClickHandler', 'edu.uca.renderable.block', null, false);
	$m['getWorkspace'] = $p['___import___']('edu.uca.Workspace.getWorkspace', 'edu.uca.renderable.block', null, false);
	$m['BlockHolder'] = $p['___import___']('edu.uca.renderable.argument.BlockHolder.BlockHolder', 'edu.uca.renderable.block', null, false);
	$m['MouseHandler'] = $p['___import___']('pyjamas.ui.MouseListener.MouseHandler', 'edu.uca.renderable.block', null, false);
	$m['Focus'] = $p['___import___']('pyjamas.ui.Focus', 'edu.uca.renderable.block', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'edu.uca.renderable.block', null, false);
	$m['VariableElement'] = $p['___import___']('edu.uca.renderable.VariableElement.VariableElement', 'edu.uca.renderable.block', null, false);
	$m['OperationElement'] = $p['___import___']('edu.uca.renderable.OperationElement.OperationElement', 'edu.uca.renderable.block', null, false);
	$m['Block'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.renderable.block.Block';
		$cls_definition['STATEMENT_BLOCK'] = 'Statement';
		$cls_definition['BOOLEAN_BLOCK'] = 'Boolean';
		$cls_definition['NUMBER_BLOCK'] = 'Number';
		$cls_definition['STRING_BLOCK'] = 'String';
		$cls_definition['HAT_BLOCK'] = 'Hat';
		$cls_definition['END_BLOCK'] = 'End';
		$cls_definition['ge'] = null;
		$cls_definition['parentBlock'] = null;
		$method = $pyjs__bind_method2('__init__', function(name, blockType, original) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var kw = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kw === null || typeof kw != 'object' || kw['__name__'] != 'dict' || typeof kw['$pyjs_is_kwarg'] == 'undefined') {
					var kw = arguments[arguments['length']+1];
				} else {
					delete kw['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				name = arguments[1];
				blockType = arguments[2];
				original = arguments[3];
				var kw = arguments['length'] >= 5 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kw === null || typeof kw != 'object' || kw['__name__'] != 'dict' || typeof kw['$pyjs_is_kwarg'] == 'undefined') {
					kw = arguments[arguments['length']+1];
				} else {
					delete kw['$pyjs_is_kwarg'];
				}
			}
			if (typeof kw == 'undefined') {
				kw = $p['__empty_dict']();
				if (typeof original != 'undefined') {
					if (original !== null && typeof original['$pyjs_is_kwarg'] != 'undefined') {
						kw = original;
						original = arguments[4];
					}
				} else 				if (typeof blockType != 'undefined') {
					if (blockType !== null && typeof blockType['$pyjs_is_kwarg'] != 'undefined') {
						kw = blockType;
						blockType = arguments[4];
					}
				} else 				if (typeof name != 'undefined') {
					if (name !== null && typeof name['$pyjs_is_kwarg'] != 'undefined') {
						kw = name;
						name = arguments[4];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kw = self;
						self = arguments[4];
					}
				} else {
				}
			}
			if (typeof original == 'undefined') original=arguments['callee']['__args__'][5][1];

			$pyjs_kwargs_call($m['Element'], '__init__', null, kw, [{'Element':$m['DOM']['createDiv']()}, self]);
			$m['DragWidget']['__init__'](self);
			$m['ClickHandler']['__init__'](self);
			$m['MouseHandler']['__init__'](self);
			self['blockType'] = blockType;
			self['addStyleName']('block');
			self['ge'] = $m['GroupElement']();
			self['addDoubleClickListener'](self);
			self['addMouseListener'](self);
			self['holderArguments'] = $p['list']([]);
			self['holderSiblingUp'] = null;
			self['holderSiblingDown'] = null;
			self['holderChildren'] = $p['list']([]);
			self['isStartingDrag'] = false;
			self['original'] = original;
			self['$$name'] = name;
			self['varName'] = '';
			self['componetHardware'] = null;
			self['dropDownVarName'] = null;
			self['color'] = null;
			self['blockPad'] = null;
			self['custom'] = false;
			self['buttonRightDown'] = null;
			return null;
		}
	, 1, [null,['kw'],['self'],['name'],['blockType'],['original', true]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('maxArgs', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var count,$iter1_nextval,$iter1_type,i,maximum,$iter1_iter,$add2,$add1,$iter1_array,$iter1_idx;
			maximum = 0;
			$iter1_iter = $p['range']($p['len']($p['getattr'](self, 'holderArguments')));
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				i = $iter1_nextval['$nextval'];
				count = 0;
				if ($p['bool'](($p['getattr']($p['getattr'](self, 'holderArguments')['__getitem__'](i), 'subBlock') !== null))) {
					if ($p['bool'](!$p['getattr'](self, 'holderArguments')['__getitem__'](i)['subBlock']['getStyleName']()['__contains__']('invisible'))) {
						count = $p['__op_add']($add1=1,$add2=$p['getattr'](self, 'holderArguments')['__getitem__'](i)['subBlock']['maxArgs']());
					}
				}
				if ($p['bool'](($p['cmp'](maximum, count) == -1))) {
					maximum = count;
				}
			}
			return maximum;
		}
	, 1, [null,null,['self']]);
		$cls_definition['maxArgs'] = $method;
		$method = $pyjs__bind_method2('onDoubleClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
			var $add3,$add4,event;
			$p['printFunc']([$p['__op_add']($add3='name: ',$add4=$p['str']($p['getattr'](self, '$$name')))], 1);
			event = $m['DOM']['eventGetCurrentEvent']();
			$m['DOM']['eventStopPropagation'](event);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onDoubleClick'] = $method;
		$method = $pyjs__bind_method2('onMouseDown', function(sender, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var event_button,$and1,MainBlock,$and2,event;
			event = $m['DOM']['eventGetCurrentEvent']();
			event_button = $m['DOM']['eventGetButton'](event);
			if ($p['bool']($p['op_eq'](event_button, $p['getattr']($m['Event'], 'BUTTON_RIGHT')))) {
				MainBlock = $p['___import___']('edu.uca.renderable.block.MainBlock.MainBlock', 'edu.uca.renderable.block', null, false);
				if ($p['bool'](($p['bool']($and1=!$p['bool']($p['getattr'](self, 'original')))?!$p['bool']($p['isinstance'](self, MainBlock)):$and1))) {
					self['buttonRightDown'] = self;
				}
				$m['DOM']['eventStopPropagation'](event);
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseDown'] = $method;
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
		$method = $pyjs__bind_method2('onMouseUp', function(sender, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var event,MainBlock,loadStackBlock,$and3,$and4,$and5,$add10,saveStackBlock,event_button,cloneStack,$add6,$add7,$add5,$add8,$add9;
			event = $m['DOM']['eventGetCurrentEvent']();
			event_button = $m['DOM']['eventGetButton'](event);
			if ($p['bool']($p['op_eq'](event_button, $p['getattr']($m['Event'], 'BUTTON_RIGHT')))) {
				MainBlock = $p['___import___']('edu.uca.renderable.block.MainBlock.MainBlock', 'edu.uca.renderable.block', null, false);
				if ($p['bool'](($p['bool']($and3=$p['op_eq']($p['getattr'](self, 'buttonRightDown'), self))?($p['bool']($and4=!$p['bool']($p['getattr'](self, 'original')))?!$p['bool']($p['isinstance'](self, MainBlock)):$and4):$and3))) {
					$p['printFunc']([$p['__op_add']($add5='click Right Button ',$add6=$p['getattr'](self, '$$name'))], 1);
					self['buttonRightDown'] = null;
					saveStackBlock = $p['___import___']('edu.uca.util.Serializable.saveStackBlock', 'edu.uca.renderable.block', null, false);
					loadStackBlock = $p['___import___']('edu.uca.util.Serializable.loadStackBlock', 'edu.uca.renderable.block', null, false);
					cloneStack = loadStackBlock(saveStackBlock(self));
					cloneStack['changeTexts']();
					self['blockPad']['addBlock'](cloneStack, $p['__op_add']($add7=self['getAbsoluteLeft'](),$add8=10), $p['__op_add']($add9=self['getAbsoluteTop'](),$add10=10), false);
				}
				$m['DOM']['eventStopPropagation'](event);
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseUp'] = $method;
		$method = $pyjs__bind_method2('onMouseEnter', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseEnter'] = $method;
		$method = $pyjs__bind_method2('onMouseLeave', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseLeave'] = $method;
		$method = $pyjs__bind_method2('getBeforeBlock', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool'](($p['getattr'](self, 'parentBlock') !== null))) {
				return $p['getattr'](self, 'parentBlock');
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getBeforeBlock'] = $method;
		$method = $pyjs__bind_method2('getAfterBlock', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool'](($p['getattr'](self, 'holderSiblingDown') !== null))) {
				if ($p['bool'](($p['getattr']($p['getattr'](self, 'holderSiblingDown'), 'subBlock') !== null))) {
					return $p['getattr']($p['getattr'](self, 'holderSiblingDown'), 'subBlock');
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getAfterBlock'] = $method;
		$method = $pyjs__bind_method2('getFirstBlock', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var firstBlock;
			firstBlock = self;
			while ($p['bool']((firstBlock['getBeforeBlock']() !== null))) {
				firstBlock = firstBlock['getBeforeBlock']();
			}
			return firstBlock;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getFirstBlock'] = $method;
		$method = $pyjs__bind_method2('getLastBlock', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var lastBlock;
			lastBlock = self;
			while ($p['bool']((lastBlock['getAfterBlock']() !== null))) {
				lastBlock = lastBlock['getAfterBlock']();
			}
			return lastBlock;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getLastBlock'] = $method;
		$method = $pyjs__bind_method2('getChildBlock', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			if ($p['bool'](($p['getattr'](self, 'holderChildren')['__getitem__'](index) !== null))) {
				if ($p['bool'](($p['getattr']($p['getattr'](self, 'holderChildren')['__getitem__'](index), 'subBlock') !== null))) {
					return $p['getattr']($p['getattr'](self, 'holderChildren')['__getitem__'](index), 'subBlock');
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['getChildBlock'] = $method;
		$method = $pyjs__bind_method2('changeTexts', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter2_nextval,$iter2_type,$iter2_iter,$or2,$iter3_array,holderChild,$iter2_idx,$iter3_idx,$iter3_iter,$iter3_type,e,$or1,$iter3_nextval,$iter2_array;
			$iter2_iter = $p['getattr']($p['getattr'](self, 'ge'), 'subElements');
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				e = $iter2_nextval['$nextval'];
				if ($p['bool'](($p['bool']($or1=$p['isinstance'](e, $m['CodeElement']))?$or1:$p['isinstance'](e, $m['OperationElement'])))) {
					e['changeTexts']();
				}
			}
			$iter3_iter = $p['getattr'](self, 'holderChildren');
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				holderChild = $iter3_nextval['$nextval'];
				if ($p['bool'](($p['getattr'](holderChild, 'subBlock') !== null))) {
					holderChild['subBlock']['changeTexts']();
				}
			}
			if ($p['bool'](($p['getattr'](self, 'holderSiblingDown') !== null))) {
				if ($p['bool'](($p['getattr']($p['getattr'](self, 'holderSiblingDown'), 'subBlock') !== null))) {
					self['holderSiblingDown']['subBlock']['changeTexts']();
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['changeTexts'] = $method;
		$method = $pyjs__bind_method2('drawBlock', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['append']($p['getattr'](self, 'ge'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['drawBlock'] = $method;
		$method = $pyjs__bind_method2('addCodeElement', function(code, group, groupLabel) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				code = arguments[1];
				group = arguments[2];
				groupLabel = arguments[3];
			}
			if (typeof code == 'undefined') code=arguments['callee']['__args__'][3][1];
			if (typeof group == 'undefined') group=arguments['callee']['__args__'][4][1];
			if (typeof groupLabel == 'undefined') groupLabel=arguments['callee']['__args__'][5][1];

			if ($p['bool']((group === null))) {
				self['ge']['drawSubElement']($m['CodeElement'](code));
			}
			else {
				self['ge']['drawSubElement']($m['OperationElement'](code, group, groupLabel, self));
			}
			return null;
		}
	, 1, [null,null,['self'],['code', ''],['group', null],['groupLabel', null]]);
		$cls_definition['addCodeElement'] = $method;
		$method = $pyjs__bind_method2('addVariableElement', function(title, values, key) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				title = arguments[1];
				values = arguments[2];
				key = arguments[3];
			}

			self['componetHardware'] = key;
			self['dropDownVarName'] = $m['VariableElement'](self, title, values, key);
			self['ge']['drawSubElement']($p['getattr'](self, 'dropDownVarName'));
			return null;
		}
	, 1, [null,null,['self'],['title'],['values'],['key']]);
		$cls_definition['addVariableElement'] = $method;
		$method = $pyjs__bind_method2('addArgumentHolder', function(ah) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ah = arguments[1];
			}

			self['ge']['drawSubElement'](ah);
			self['holderArguments']['append'](ah);
			return null;
		}
	, 1, [null,null,['self'],['ah']]);
		$cls_definition['addArgumentHolder'] = $method;
		$method = $pyjs__bind_method2('onDragStart', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			if ($p['bool'](($m['getWorkspace']()['getMovingBlock']() === null))) {
				self['isStartingDrag'] = true;
				self['addStyleName']('ondrag');
				$m['getWorkspace']()['setMovingBlock'](self);
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragStart'] = $method;
		$method = $pyjs__bind_method2('onDrag', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			if ($p['bool']($p['op_eq']($m['getWorkspace']()['getMovingBlock'](), self))) {
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'original')))) {
					self['addStyleName']('invisible');
				}
				if ($p['bool']($p['getattr'](self, 'isStartingDrag'))) {
					self['isStartingDrag'] = false;
					self['addStyleName']('ondrag');
					if ($p['bool']($p['isinstance']($p['getattr'](self, 'parent'), $m['BlockHolder']))) {
						self['parent']['argument']['setStyleAttribute']('display', 'block');
						self['parent']['block']['resize']();
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDrag'] = $method;
		$method = $pyjs__bind_method2('onDragEnd', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			if ($p['bool']($p['op_eq']($m['getWorkspace']()['getMovingBlock'](), self))) {
				self['removeStyleName']('invisible');
				if ($p['bool']($p['isinstance']($p['getattr'](self, 'parent'), $m['BlockHolder']))) {
					self['parent']['argument']['setStyleAttribute']('display', 'none');
					self['parent']['block']['resize']();
				}
			}
			self['removeStyleName']('ondrag');
			if ($p['bool'](($m['getWorkspace']()['getMovingBlock']() !== null))) {
				if ($p['bool'](($p['getattr']($m['getWorkspace']()['getMovingBlock'](), 'blockPad') !== null))) {
					$m['getWorkspace']()['getMovingBlock']()['blockPad']['removeStyleName']('dragover2');
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragEnd'] = $method;
		$method = $pyjs__bind_method2('onDrop', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDrop'] = $method;
		$method = $pyjs__bind_method2('resize', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool'](($p['getattr'](self, 'parentBlock') !== null))) {
				self['parentBlock']['resize']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['resize'] = $method;
		var $bases = new Array($m['Element'],$m['DragWidget'],$m['ClickHandler'],$m['MouseHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Block', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.renderable.block.Block */


/* end module: edu.uca.renderable.block.Block */


/*
PYJS_DEPS: ['edu.uca.renderable.Element.Element', 'edu', 'edu.uca', 'edu.uca.renderable', 'edu.uca.renderable.Element', 'pyjamas.ui.DragWidget.DragWidget', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.DragWidget', 'pyjamas.DOM', 'edu.uca.renderable.GroupElement.GroupElement', 'edu.uca.renderable.GroupElement', 'edu.uca.renderable.CodeElement.CodeElement', 'edu.uca.renderable.CodeElement', 'pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui.ClickListener', 'edu.uca.Workspace.getWorkspace', 'edu.uca.Workspace', 'edu.uca.renderable.argument.BlockHolder.BlockHolder', 'edu.uca.renderable.argument', 'edu.uca.renderable.argument.BlockHolder', 'pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui.MouseListener', 'pyjamas.ui.Focus', 'pyjamas.ui.Event', 'edu.uca.renderable.VariableElement.VariableElement', 'edu.uca.renderable.VariableElement', 'edu.uca.renderable.OperationElement.OperationElement', 'edu.uca.renderable.OperationElement', 'edu.uca.renderable.block.MainBlock.MainBlock', 'edu.uca.renderable.block', 'edu.uca.renderable.block.MainBlock', 'edu.uca.util.Serializable.saveStackBlock', 'edu.uca.util', 'edu.uca.util.Serializable', 'edu.uca.util.Serializable.loadStackBlock']
*/
