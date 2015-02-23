/* start module: edu.uca.ui.HardwareList */
$pyjs['loaded_modules']['edu.uca.ui.HardwareList'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.ui.HardwareList']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.ui.HardwareList'];
	if(typeof $pyjs['loaded_modules']['edu.uca.ui'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.ui']['__was_initialized__']) $p['___import___']('edu.uca.ui', null);
	var $m = $pyjs['loaded_modules']['edu.uca.ui.HardwareList'];
	$m['__repr__'] = function() { return '<module: edu.uca.ui.HardwareList>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.ui.HardwareList';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.ui']['HardwareList'] = $pyjs['loaded_modules']['edu.uca.ui.HardwareList'];


	$m['DropWidget'] = $p['___import___']('pyjamas.ui.DropWidget.DropWidget', 'edu.uca.ui', null, false);
	$m['Element'] = $p['___import___']('edu.uca.renderable.Element.Element', 'edu.uca.ui', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.ui', null, false);
	$m['getWorkspace'] = $p['___import___']('edu.uca.Workspace.getWorkspace', 'edu.uca.ui', null, false);
	$m['hardwares'] = $p['___import___']('edu.uca.Workspace.hardwares', 'edu.uca.ui', null, false);
	$m['FlowTabBar'] = $p['___import___']('pyjamas.ui.FlowTabBar.FlowTabBar', 'edu.uca.ui', null, false);
	$m['TabPanel'] = $p['___import___']('pyjamas.ui.TabPanel.TabPanel', 'edu.uca.ui', null, false);
	$m['DragContainer'] = $p['___import___']('pyjamas.ui.DragWidget.DragContainer', 'edu.uca.ui', null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', 'edu.uca.ui', null, false);
	$m['CategoriesHardware'] = $p['___import___']('edu.uca.ui.CategoriesHardware', 'edu.uca.ui', null, false);
	$m['ResizeWidget'] = $p['___import___']('edu.uca.util.ResizeWidget.ResizeWidget', 'edu.uca.ui', null, false);
	$m['setDragStartPosition'] = $p['___import___']('edu.uca.util.DragElement.setDragStartPosition', 'edu.uca.ui', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'edu.uca.ui', null, false);
	$m['_'] = $p['___import___']('edu.uca.util.i18n._', 'edu.uca.ui', null, false);
	$m['HardwareList'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.ui.HardwareList';
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
			self['tabs']['getTabBar']()['addStyleName']('shortcuts');
			self['tabs']['getDeckPanel']()['addStyleName']('blockDrawer');
			self['input'] = $m['CategoriesHardware']['Input']();
			self['tabs']['add']($p['getattr'](self, 'input'), $m['CategoriesHardware']['TabTitle']($m['_']('Input'), 'input_btn'));
			self['output'] = $m['CategoriesHardware']['Output']();
			self['tabs']['add']($p['getattr'](self, 'output'), $m['CategoriesHardware']['TabTitle']($m['_']('Output'), 'output_btn'));
			self['tabs']['selectTab'](0);
			panel = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createDiv'](), 'Width':'100%', 'Height':'100%'}]);
			panel['append']($p['getattr'](self, 'tabs'));
			self['trashCan'] = $pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'trashCanClose'}]);
			panel['append']($p['getattr'](self, 'trashCan'));
			self['add'](panel);
			bottom = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'drawer_bottom'}]);
			resize = $m['ResizeWidget']($p['getattr'](self, 'parent'), 200, 600);
			resize['addStyleName']('float_right');
			bottom['append'](resize);
			self['add'](bottom);
			self['setCellHeight'](bottom, '20px');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onLoad'] = $method;
		$method = $pyjs__bind_method2('reload', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
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

			$m['setDragStartPosition'](event);
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

			$m['getWorkspace']()['setMovingBlock'](null);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragEnd'] = $method;
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
			if ($p['bool']($p['hasattr']($m['getWorkspace']()['getMovingBlock'](), 'original'))) {
				if ($p['bool'](!$p['bool']($p['getattr']($m['getWorkspace']()['getMovingBlock'](), 'original')))) {
					self['addStyleName']('dragover');
					self['trashCan']['setStyleName']('trashCanOpen');
				}
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
			dt = $p['getattr'](event, 'dataTransfer');
			dt['dropEffect'] = 'none';
			if ($p['bool']($p['hasattr']($m['getWorkspace']()['getMovingBlock'](), 'original'))) {
				if ($p['bool'](!$p['bool']($p['getattr']($m['getWorkspace']()['getMovingBlock'](), 'original')))) {
					self['removeStyleName']('dragover');
					self['trashCan']['setStyleName']('trashCanClose trashCanCloseFadeIn');
				}
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
			var stateChange;
			if ($p['bool'](($m['getWorkspace']()['getMovingBlock']() === null))) {
				return null;
			}
			self['removeStyleName']('dragover');
			if ($p['bool']($p['hasattr']($m['getWorkspace']()['getMovingBlock'](), 'original'))) {
				if ($p['bool'](!$p['bool']($p['getattr']($m['getWorkspace']()['getMovingBlock'](), 'original')))) {
					$m['getWorkspace']()['getMovingBlock']()['removeFromParent']();
					$m['hardwares']['__delitem__']($m['getWorkspace']()['getMovingBlock']()['getCompleteText']());
					$m['getWorkspace']()['setMovingBlock'](null);
					stateChange = $p['___import___']('edu.uca.util.Serializable.stateChange', 'edu.uca.ui', null, false);
					stateChange();
					self['trashCan']['setStyleName']('trashCanClose');
				}
			}
			$m['DOM']['eventPreventDefault'](event);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDrop'] = $method;
		var $bases = new Array($m['DropWidget'],$m['DragContainer'],$m['VerticalPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('HardwareList', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.ui.HardwareList */


/* end module: edu.uca.ui.HardwareList */


/*
PYJS_DEPS: ['pyjamas.ui.DropWidget.DropWidget', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.DropWidget', 'edu.uca.renderable.Element.Element', 'edu', 'edu.uca', 'edu.uca.renderable', 'edu.uca.renderable.Element', 'pyjamas.DOM', 'edu.uca.Workspace.getWorkspace', 'edu.uca.Workspace', 'edu.uca.Workspace.hardwares', 'pyjamas.ui.FlowTabBar.FlowTabBar', 'pyjamas.ui.FlowTabBar', 'pyjamas.ui.TabPanel.TabPanel', 'pyjamas.ui.TabPanel', 'pyjamas.ui.DragWidget.DragContainer', 'pyjamas.ui.DragWidget', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'edu.uca.ui.CategoriesHardware', 'edu.uca.ui', 'edu.uca.util.ResizeWidget.ResizeWidget', 'edu.uca.util', 'edu.uca.util.ResizeWidget', 'edu.uca.util.DragElement.setDragStartPosition', 'edu.uca.util.DragElement', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget', 'edu.uca.util.i18n._', 'edu.uca.util.i18n', 'edu.uca.util.Serializable.stateChange', 'edu.uca.util.Serializable']
*/
