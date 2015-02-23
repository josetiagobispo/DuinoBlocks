/* start module: edu.uca.ui.HardwaresPad */
$pyjs['loaded_modules']['edu.uca.ui.HardwaresPad'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.ui.HardwaresPad']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.ui.HardwaresPad'];
	if(typeof $pyjs['loaded_modules']['edu.uca.ui'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.ui']['__was_initialized__']) $p['___import___']('edu.uca.ui', null);
	var $m = $pyjs['loaded_modules']['edu.uca.ui.HardwaresPad'];
	$m['__repr__'] = function() { return '<module: edu.uca.ui.HardwaresPad>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.ui.HardwaresPad';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.ui']['HardwaresPad'] = $pyjs['loaded_modules']['edu.uca.ui.HardwaresPad'];


	$m['DropWidget'] = $p['___import___']('pyjamas.ui.DropWidget.DropWidget', 'edu.uca.ui', null, false);
	$m['DragContainer'] = $p['___import___']('pyjamas.ui.DragWidget.DragContainer', 'edu.uca.ui', null, false);
	$m['Element'] = $p['___import___']('edu.uca.renderable.Element.Element', 'edu.uca.ui', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.ui', null, false);
	$m['getWorkspace'] = $p['___import___']('edu.uca.Workspace.getWorkspace', 'edu.uca.ui', null, false);
	$m['countComponents'] = $p['___import___']('edu.uca.Workspace.countComponents', 'edu.uca.ui', null, false);
	$m['hardwares'] = $p['___import___']('edu.uca.Workspace.hardwares', 'edu.uca.ui', null, false);
	$m['ArduinoHardwares'] = $p['___import___']('edu.uca.renderable.hardware.ArduinoHardwares', 'edu.uca.ui', null, false);
	$m['Arduino'] = $p['___import___']('edu.uca.renderable.hardware.Arduino', 'edu.uca.ui', null, false);
	$m['Arduino'] = $p['___import___']('edu.uca.renderable.hardware.Arduino.Arduino', 'edu.uca.ui', null, false);
	$m['ComponentBlock'] = $p['___import___']('edu.uca.renderable.hardware.ComponentBlock.ComponentBlock', 'edu.uca.ui', null, false);
	$m['getDropPosition'] = $p['___import___']('edu.uca.util.DragElement.getDropPosition', 'edu.uca.ui', null, false);
	$m['setDragStartPosition'] = $p['___import___']('edu.uca.util.DragElement.setDragStartPosition', 'edu.uca.ui', null, false);
	$m['HardwaresPad'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.ui.HardwaresPad';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs_kwargs_call($m['Element'], '__init__', null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'drophere2', 'Width':'100%', 'Height':'100%'}, self]);
			$m['DropWidget']['__init__'](self);
			$m['DragContainer']['__init__'](self);
			self['setID']('hardwares_pad');
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
			var $iter1_nextval,$iter1_type,comp,$iter1_iter,$iter1_array,$iter1_idx;
			$iter1_iter = self['getComponents']();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				comp = $iter1_nextval['$nextval'];
				comp['changeTexts']();
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
			var uno;
			$m['Element']['onLoad'](self);
			uno = $pyjs_kwargs_call(null, $m['Arduino'], null, null, [{'StyleName':'component_Arduino_UNO'}]);
			self['add'](uno);
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

			self['removeAll']();
			self['onLoad']();
			$m['getWorkspace']()['getBlockList']()['refreshComponentBlocks']($p['getattr'](self, 'children'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['reload'] = $method;
		$method = $pyjs__bind_method2('getRootBloks', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'children');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getRootBloks'] = $method;
		$method = $pyjs__bind_method2('onDragStart', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$m['setDragStartPosition'](event);
			if ($p['bool']($p['hasattr']($m['getWorkspace']()['getMovingBlock'](), 'original'))) {
				$m['getWorkspace']()['getHardwaresList']()['trashCan']['addStyleName']('trashCanCloseFadeIn');
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragStart'] = $method;
		$method = $pyjs__bind_method2('onDragOver', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var json,dt;
			if ($p['bool'](($m['getWorkspace']()['getMovingBlock']() === null))) {
				json = $p['___import___']('json', 'edu.uca.ui');
				if ($p['bool']((json['loads'](event['dataTransfer']['getData']('text'))['__getitem__']('componetHardware') !== null))) {
					$p['getattr'](event, 'dataTransfer')['dropEffect'] = 'copy';
					$m['DOM']['eventPreventDefault'](event);
				}
				return null;
			}
			if ($p['bool'](($m['getWorkspace']()['getMovingBlock']() === null))) {
				return null;
			}
			dt = $p['getattr'](event, 'dataTransfer');
			dt['dropEffect'] = 'copy';
			if ($p['bool']($p['hasattr']($m['getWorkspace']()['getMovingBlock'](), 'original'))) {
				if ($p['bool']($p['getattr']($m['getWorkspace']()['getMovingBlock'](), 'original'))) {
					self['addStyleName']('dragover2');
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
			self['removeStyleName']('dragover2');
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
			var stateChange,comp,top,json,loadComponent,y,x,left;
			if ($p['bool'](($m['getWorkspace']()['getMovingBlock']() === null))) {
				json = $p['___import___']('json', 'edu.uca.ui');
				loadComponent = $p['___import___']('edu.uca.util.Serializable.loadComponent', 'edu.uca.ui', null, false);
				stateChange = $p['___import___']('edu.uca.util.Serializable.stateChange', 'edu.uca.ui', null, false);
				comp = loadComponent(json['loads'](event['dataTransfer']['getData']('text'))['__getitem__']('componetHardware'));
				comp['changeTexts']();
				var $tupleassign1 = $p['__ass_unpack']($m['getDropPosition'](self, event), 2, null);
				x = $tupleassign1[0];
				y = $tupleassign1[1];
				comp['setStyleAttribute']($p['dict']([['left', x], ['top', y]]));
				self['add'](comp);
				stateChange();
				return null;
			}
			if ($p['bool'](($m['getWorkspace']()['getMovingBlock']() === null))) {
				return null;
			}
			self['removeStyleName']('dragover2');
			var $tupleassign2 = $p['__ass_unpack']($m['getDropPosition'](self, event), 2, null);
			left = $tupleassign2[0];
			top = $tupleassign2[1];
			if ($p['bool']($p['hasattr']($m['getWorkspace']()['getMovingBlock'](), 'original'))) {
				if ($p['bool']($p['getattr']($m['getWorkspace']()['getMovingBlock'](), 'original'))) {
					$m['getWorkspace']()['setMovingBlock']($p['getattr']($m['ArduinoHardwares'], $p['getattr']($m['getWorkspace']()['getMovingBlock'](), '$$name'))());
					$m['getWorkspace']()['getMovingBlock']()['original'] = false;
					self['add']($m['getWorkspace']()['getMovingBlock']());
					self['refreshCount']($m['getWorkspace']()['getMovingBlock']());
					$m['hardwares']['__setitem__']($m['getWorkspace']()['getMovingBlock']()['getCompleteText'](), $m['getWorkspace']()['getMovingBlock']());
					$m['getWorkspace']()['getMovingBlock']()['changeTexts']();
				}
			}
			$m['getWorkspace']()['getMovingBlock']()['setStyleAttribute']($p['dict']([['left', left], ['top', top]]));
			$m['DOM']['eventPreventDefault'](event);
			if ($p['bool']($p['isinstance']($m['getWorkspace']()['getMovingBlock'](), $m['ComponentBlock']))) {
				stateChange = $p['___import___']('edu.uca.util.Serializable.stateChange', 'edu.uca.ui', null, false);
				stateChange();
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDrop'] = $method;
		$method = $pyjs__bind_method2('onDragEnd', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			if ($p['bool']($p['hasattr']($m['getWorkspace']()['getMovingBlock'](), 'original'))) {
				$m['getWorkspace']()['getHardwaresList']()['trashCan']['removeStyleName']('trashCanCloseFadeIn');
			}
			$m['getWorkspace']()['setMovingBlock'](null);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragEnd'] = $method;
		$method = $pyjs__bind_method2('remove', function(component) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				component = arguments[1];
			}
			var $add2,$add1;
			if ($p['bool']($p['isinstance'](component, $m['ComponentBlock']))) {
				$m['countComponents']['__getitem__']($p['getattr'](component, '$$name'))['remove']($p['__op_add']($add1=$p['getattr'](component, 'text'),$add2=$p['str']($p['getattr'](component, 'number'))));
			}
			return $m['Element']['remove'](self, component);
		}
	, 1, [null,null,['self'],['component']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('refreshCount', function(component) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				component = arguments[1];
			}
			var $iter2_nextval,$iter2_type,$iter2_iter,i,$add3,$iter2_idx,$add6,names,$add4,$add5,$add10,$add8,$add9,$iter2_array,$add7;
			names = $m['countComponents']['get']($p['getattr'](component, '$$name'));
			if ($p['bool']($p['op_eq'](names, null))) {
				$m['countComponents']['__setitem__']($p['getattr'](component, '$$name'), $p['list']([$p['__op_add']($add3=$p['getattr'](component, 'text'),$add4=$p['str'](1))]));
				component['changeText'](1);
			}
			else {
				$iter2_iter = $p['range'](1, $p['__op_add']($add5=$p['len'](names),$add6=2));
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					i = $iter2_nextval['$nextval'];
					if ($p['bool'](!names['__contains__']($p['__op_add']($add7=$p['getattr'](component, 'text'),$add8=$p['str'](i))))) {
						component['changeText'](i);
						names['append']($p['__op_add']($add9=$p['getattr'](component, 'text'),$add10=$p['str'](i)));
						break;
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['component']]);
		$cls_definition['refreshCount'] = $method;
		$method = $pyjs__bind_method2('getComponents', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var child,$iter3_idx,$iter3_type,hardwares,$iter3_iter,$iter3_array,$iter3_nextval;
			hardwares = $p['list']([]);
			$iter3_iter = $p['getattr'](self, 'children');
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				child = $iter3_nextval['$nextval'];
				if ($p['bool']($p['isinstance'](child, $m['ComponentBlock']))) {
					hardwares['append'](child);
				}
			}
			return hardwares;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getComponents'] = $method;
		var $bases = new Array($m['DropWidget'],$m['DragContainer'],$m['Element']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('HardwaresPad', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.ui.HardwaresPad */


/* end module: edu.uca.ui.HardwaresPad */


/*
PYJS_DEPS: ['pyjamas.ui.DropWidget.DropWidget', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.DropWidget', 'pyjamas.ui.DragWidget.DragContainer', 'pyjamas.ui.DragWidget', 'edu.uca.renderable.Element.Element', 'edu', 'edu.uca', 'edu.uca.renderable', 'edu.uca.renderable.Element', 'pyjamas.DOM', 'edu.uca.Workspace.getWorkspace', 'edu.uca.Workspace', 'edu.uca.Workspace.countComponents', 'edu.uca.Workspace.hardwares', 'edu.uca.renderable.hardware.ArduinoHardwares', 'edu.uca.renderable.hardware', 'edu.uca.renderable.hardware.Arduino', 'edu.uca.renderable.hardware.Arduino.Arduino', 'edu.uca.renderable.hardware.ComponentBlock.ComponentBlock', 'edu.uca.renderable.hardware.ComponentBlock', 'edu.uca.util.DragElement.getDropPosition', 'edu.uca.util', 'edu.uca.util.DragElement', 'edu.uca.util.DragElement.setDragStartPosition', 'json', 'edu.uca.util.Serializable.loadComponent', 'edu.uca.util.Serializable', 'edu.uca.util.Serializable.stateChange']
*/
