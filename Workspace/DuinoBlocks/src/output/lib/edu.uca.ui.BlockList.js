/* start module: edu.uca.ui.BlockList */
$pyjs['loaded_modules']['edu.uca.ui.BlockList'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.ui.BlockList']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.ui.BlockList'];
	if(typeof $pyjs['loaded_modules']['edu.uca.ui'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.ui']['__was_initialized__']) $p['___import___']('edu.uca.ui', null);
	var $m = $pyjs['loaded_modules']['edu.uca.ui.BlockList'];
	$m['__repr__'] = function() { return '<module: edu.uca.ui.BlockList>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.ui.BlockList';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.ui']['BlockList'] = $pyjs['loaded_modules']['edu.uca.ui.BlockList'];


	$m['DropWidget'] = $p['___import___']('pyjamas.ui.DropWidget.DropWidget', 'edu.uca.ui', null, false);
	$m['Element'] = $p['___import___']('edu.uca.renderable.Element.Element', 'edu.uca.ui', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.ui', null, false);
	$m['getWorkspace'] = $p['___import___']('edu.uca.Workspace.getWorkspace', 'edu.uca.ui', null, false);
	$m['FlowTabBar'] = $p['___import___']('pyjamas.ui.FlowTabBar.FlowTabBar', 'edu.uca.ui', null, false);
	$m['TabPanel'] = $p['___import___']('pyjamas.ui.TabPanel.TabPanel', 'edu.uca.ui', null, false);
	$m['DragContainer'] = $p['___import___']('pyjamas.ui.DragWidget.DragContainer', 'edu.uca.ui', null, false);
	$m['MainBlock'] = $p['___import___']('edu.uca.renderable.block.MainBlock.MainBlock', 'edu.uca.ui', null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', 'edu.uca.ui', null, false);
	$m['CategoriesBlock'] = $p['___import___']('edu.uca.ui.CategoriesBlock', 'edu.uca.ui', null, false);
	$m['ResizeWidget'] = $p['___import___']('edu.uca.util.ResizeWidget.ResizeWidget', 'edu.uca.ui', null, false);
	$m['ArduinoBlocks'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks', 'edu.uca.ui', null, false);
	$m['INPUT'] = $p['___import___']('edu.uca.util.Constants.INPUT', 'edu.uca.ui', null, false);
	$m['OUTPUT'] = $p['___import___']('edu.uca.util.Constants.OUTPUT', 'edu.uca.ui', null, false);
	$m['setDragStartPosition'] = $p['___import___']('edu.uca.util.DragElement.setDragStartPosition', 'edu.uca.ui', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'edu.uca.ui', null, false);
	$m['_'] = $p['___import___']('edu.uca.util.i18n._', 'edu.uca.ui', null, false);
	$m['BlockList'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.ui.BlockList';
		$cls_definition['_blockDragListeners'] = $p['list']([]);
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs_kwargs_call($m['VerticalPanel'], '__init__', null, null, [{'StyleName':'drophere'}, self]);
			$m['DropWidget']['__init__'](self);
			$m['DragContainer']['__init__'](self);
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
			var category,$iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,i,$iter1_iter,$iter2_idx,$iter1_array,$sub2,$iter2_type,$sub1,$iter2_array,$iter1_idx;
			$iter1_iter = self['tabs']['getChildren']();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				category = $iter1_nextval['$nextval'];
				category['changeTexts']();
			}
			$iter2_iter = $p['range'](1, $p['__op_sub']($sub1=self['tabs']['getTabBar']()['panel']['getWidgetCount'](),$sub2=1));
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				i = $iter2_nextval['$nextval'];
				self['tabs']['getTabBar']()['panel']['getWidget'](i)['getFocusablePanel']()['getWidget']()['changeTexts']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['changeTexts'] = $method;
		$method = $pyjs__bind_method2('onLoad', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var bottom,resize,panel;
			self['tabs'] = $m['TabPanel']($m['FlowTabBar']());
			self['control'] = $m['CategoriesBlock']['Control']();
			self['tabs']['add']($p['getattr'](self, 'control'), $m['CategoriesBlock']['TabTitle']($m['_']('Control'), 'control_btn'));
			self['operators'] = $m['CategoriesBlock']['Operators']();
			self['tabs']['add']($p['getattr'](self, 'operators'), $m['CategoriesBlock']['TabTitle']($m['_']('Operators'), 'operators_btn'));
			self['input'] = $m['CategoriesBlock']['Input']();
			self['tabs']['add']($p['getattr'](self, 'input'), $m['CategoriesBlock']['TabTitle']($m['_']('Input'), 'input_btn'));
			self['output'] = $m['CategoriesBlock']['Output']();
			self['tabs']['add']($p['getattr'](self, 'output'), $m['CategoriesBlock']['TabTitle']($m['_']('Output'), 'output_btn'));
			self['utilities'] = $m['CategoriesBlock']['Setup']();
			self['tabs']['add']($p['getattr'](self, 'utilities'), $m['CategoriesBlock']['TabTitle']($m['_']('Utilities'), 'config_btn'));
			self['variables'] = $m['CategoriesBlock']['Variables']();
			self['tabs']['add']($p['getattr'](self, 'variables'), $m['CategoriesBlock']['TabTitle']($m['_']('Variables'), 'variables_btn'));
			self['tabs']['selectTab'](0);
			panel = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createDiv'](), 'Width':'100%', 'Height':'100%'}]);
			panel['append']($p['getattr'](self, 'tabs'));
			self['trashCan'] = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'trashCanClose'}]);
			panel['append']($p['getattr'](self, 'trashCan'));
			self['add'](panel);
			bottom = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'drawer_bottom'}]);
			resize = $m['ResizeWidget']($p['getattr'](self, 'parent'), 200, 510);
			resize['addStyleName']('float_right');
			bottom['append'](resize);
			self['add'](bottom);
			self['setCellHeight'](bottom, '20px');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onLoad'] = $method;
		$method = $pyjs__bind_method2('refreshComponentBlocks', function(components) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				components = arguments[1];
			}
			var listName,$iter3_idx,$iter4_type,comp,$iter3_array,$iter4_idx,$iter3_iter,$iter3_type,$iter4_array,$iter4_nextval,$iter4_iter,$iter3_nextval,block,name;
			self['input']['removeAllSubComp']();
			self['output']['removeAllSubComp']();
			listName = $p['set']($p['list']([]));
			$iter3_iter = components;
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				comp = $iter3_nextval['$nextval'];
				if ($p['bool']($p['hasattr'](comp, 'listBlockName'))) {
					$iter4_iter = $p['getattr'](comp, 'listBlockName');
					$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
					while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
						name = $iter4_nextval['$nextval'];
						if ($p['bool'](!$p['bool'](listName['__contains__'](name)))) {
							listName['add'](name);
							block = $p['getattr']($m['ArduinoBlocks'], name)();
							block['changeTexts']();
							if ($p['bool']($p['op_eq']($p['getattr'](comp, 'mode'), $m['INPUT']))) {
								self['input']['getSubComp']($p['getattr'](comp, 'text'))['addBlock'](block);
							}
							else if ($p['bool']($p['op_eq']($p['getattr'](comp, 'mode'), $m['OUTPUT']))) {
								self['output']['getSubComp']($p['getattr'](comp, 'text'))['addBlock'](block);
							}
						}
					}
				}
			}
			self['input']['changeTexts']();
			self['output']['changeTexts']();
			return null;
		}
	, 1, [null,null,['self'],['components']]);
		$cls_definition['refreshComponentBlocks'] = $method;
		$method = $pyjs__bind_method2('reload', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter5_nextval,$iter5_idx,cat,$iter5_iter,$iter5_array,$iter5_type;
			self['showMainBlock']();
			$iter5_iter = $p['getattr']($p['getattr'](self, 'tabs'), 'children');
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				cat = $iter5_nextval['$nextval'];
				cat['reload']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['reload'] = $method;
		$method = $pyjs__bind_method2('onDragStart', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $iter6_idx,$iter6_type,listener,$iter6_array,$iter6_iter,$iter6_nextval;
			$m['setDragStartPosition'](event);
			$iter6_iter = $p['getattr'](self, '_blockDragListeners');
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
				listener = $iter6_nextval['$nextval'];
				listener['onBlockDragStart'](event, $m['getWorkspace']()['getMovingBlock']());
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragStart'] = $method;
		$method = $pyjs__bind_method2('onDragEnd', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $iter7_nextval,$iter7_iter,$iter7_array,listener,$iter7_idx,$iter7_type;
			$iter7_iter = $p['getattr'](self, '_blockDragListeners');
			$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
			while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
				listener = $iter7_nextval['$nextval'];
				listener['onBlockDragEnd'](event, $m['getWorkspace']()['getMovingBlock']());
			}
			$m['getWorkspace']()['setMovingBlock'](null);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragEnd'] = $method;
		$method = $pyjs__bind_method2('onDragEnter', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$m['DOM']['eventPreventDefault'](event);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragEnter'] = $method;
		$method = $pyjs__bind_method2('onDragOver', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var dt;
			if ($p['bool'](($m['getWorkspace']()['getMovingBlock']() === null))) {
				return null;
			}
			dt = $p['getattr'](event, 'dataTransfer');
			dt['dropEffect'] = 'copy';
			if ($p['bool'](!$p['bool']($p['getattr']($m['getWorkspace']()['getMovingBlock'](), 'original')))) {
				self['addStyleName']('dragover');
				self['trashCan']['setStyleName']('trashCanOpen');
			}
			$m['DOM']['eventPreventDefault'](event);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragOver'] = $method;
		$method = $pyjs__bind_method2('onDragLeave', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var dt;
			if ($p['bool'](($m['getWorkspace']()['getMovingBlock']() === null))) {
				return null;
			}
			dt = $p['getattr'](event, 'dataTransfer');
			dt['dropEffect'] = 'none';
			if ($p['bool'](!$p['bool']($p['getattr']($m['getWorkspace']()['getMovingBlock'](), 'original')))) {
				self['removeStyleName']('dragover');
				self['trashCan']['setStyleName']('trashCanClose trashCanCloseFadeIn');
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragLeave'] = $method;
		$method = $pyjs__bind_method2('onDrop', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var listener,$iter8_idx,$iter8_array,$iter8_iter,$iter8_nextval,$iter8_type,stateChange;
			if ($p['bool'](($m['getWorkspace']()['getMovingBlock']() === null))) {
				return null;
			}
			self['removeStyleName']('dragover');
			if ($p['bool'](!$p['bool']($p['getattr']($m['getWorkspace']()['getMovingBlock'](), 'original')))) {
				self['removeBlocks']($m['getWorkspace']()['getMovingBlock']());
				$iter8_iter = $p['getattr'](self, '_blockDragListeners');
				$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
				while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
					listener = $iter8_nextval['$nextval'];
					listener['onBlockDragEnd'](event, $m['getWorkspace']()['getMovingBlock']());
				}
				$m['getWorkspace']()['getMovingBlock']()['onDragEnd']();
				$m['getWorkspace']()['setMovingBlock'](null);
				stateChange = $p['___import___']('edu.uca.util.Serializable.stateChange', 'edu.uca.ui', null, false);
				stateChange();
				self['trashCan']['setStyleName']('trashCanClose');
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDrop'] = $method;
		$method = $pyjs__bind_method2('removeBlocks', function(root) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				root = arguments[1];
			}
			var $iter10_nextval,$iter9_iter,holder,$iter10_idx,$iter9_nextval,$iter9_idx,$iter10_array,$iter9_type,$iter10_type,$iter10_iter,$iter9_array;
			if ($p['bool']((root === null))) {
				return null;
			}
			$m['getWorkspace']()['removeBlock'](root);
			$iter9_iter = $p['getattr'](root, 'holderArguments');
			$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
			while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
				holder = $iter9_nextval['$nextval'];
				self['removeBlocks']($p['getattr'](holder, 'subBlock'));
			}
			$iter10_iter = $p['getattr'](root, 'holderChildren');
			$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
			while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
				holder = $iter10_nextval['$nextval'];
				self['removeBlocks']($p['getattr'](holder, 'subBlock'));
			}
			if ($p['bool'](($p['getattr'](root, 'holderSiblingDown') !== null))) {
				self['removeBlocks']($p['getattr']($p['getattr'](root, 'holderSiblingDown'), 'subBlock'));
			}
			if ($p['bool']($p['isinstance'](root, $m['MainBlock']))) {
				self['showMainBlock']();
				$m['getWorkspace']()['setMainBlock'](null);
			}
			root['removeFromParent']();
			return null;
		}
	, 1, [null,null,['self'],['root']]);
		$cls_definition['removeBlocks'] = $method;
		$method = $pyjs__bind_method2('hideMainBlock', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['control']['hideMainBlock']();
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

			self['control']['showMainBlock']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['showMainBlock'] = $method;
		$method = $pyjs__bind_method2('addBlockDragListener', function(listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['_blockDragListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addBlockDragListener'] = $method;
		$method = $pyjs__bind_method2('removeBlockDragListener', function(listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['_blockDragListeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeBlockDragListener'] = $method;
		var $bases = new Array($m['DropWidget'],$m['DragContainer'],$m['VerticalPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('BlockList', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.ui.BlockList */


/* end module: edu.uca.ui.BlockList */


/*
PYJS_DEPS: ['pyjamas.ui.DropWidget.DropWidget', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.DropWidget', 'edu.uca.renderable.Element.Element', 'edu', 'edu.uca', 'edu.uca.renderable', 'edu.uca.renderable.Element', 'pyjamas.DOM', 'edu.uca.Workspace.getWorkspace', 'edu.uca.Workspace', 'pyjamas.ui.FlowTabBar.FlowTabBar', 'pyjamas.ui.FlowTabBar', 'pyjamas.ui.TabPanel.TabPanel', 'pyjamas.ui.TabPanel', 'pyjamas.ui.DragWidget.DragContainer', 'pyjamas.ui.DragWidget', 'edu.uca.renderable.block.MainBlock.MainBlock', 'edu.uca.renderable.block', 'edu.uca.renderable.block.MainBlock', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'edu.uca.ui.CategoriesBlock', 'edu.uca.ui', 'edu.uca.util.ResizeWidget.ResizeWidget', 'edu.uca.util', 'edu.uca.util.ResizeWidget', 'edu.uca.renderable.block.ArduinoBlocks', 'edu.uca.util.Constants.INPUT', 'edu.uca.util.Constants', 'edu.uca.util.Constants.OUTPUT', 'edu.uca.util.DragElement.setDragStartPosition', 'edu.uca.util.DragElement', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget', 'edu.uca.util.i18n._', 'edu.uca.util.i18n', 'edu.uca.util.Serializable.stateChange', 'edu.uca.util.Serializable']
*/
