/* start module: pyjamas.dnd.DNDHelper */
$pyjs['loaded_modules']['pyjamas.dnd.DNDHelper'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.dnd.DNDHelper']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.dnd.DNDHelper'];
	if(typeof $pyjs['loaded_modules']['pyjamas.dnd'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.dnd']['__was_initialized__']) $p['___import___']('pyjamas.dnd', null);
	var $m = $pyjs['loaded_modules']['pyjamas.dnd.DNDHelper'];
	$m['__repr__'] = function() { return '<module: pyjamas.dnd.DNDHelper>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.dnd.DNDHelper';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.dnd']['DNDHelper'] = $pyjs['loaded_modules']['pyjamas.dnd.DNDHelper'];


	$m['time'] = $p['___import___']('time', 'pyjamas.dnd');
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.dnd', null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', 'pyjamas.dnd', null, false);
	$m['GlassWidget'] = $p['___import___']('pyjamas.ui.GlassWidget', 'pyjamas.dnd', null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', 'pyjamas.dnd', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.dnd', null, false);
	$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', 'pyjamas.dnd', null, false);
	$m['DraggingWidget'] = $p['___import___']('pyjamas.dnd.utils.DraggingWidget', 'pyjamas.dnd', null, false);
	$m['isCanceled'] = $p['___import___']('pyjamas.dnd.utils.isCanceled', 'pyjamas.dnd', null, false);
	$m['findDraggable'] = $p['___import___']('pyjamas.dnd.utils.findDraggable', 'pyjamas.dnd', null, false);
	$m['eventCoordinates'] = $p['___import___']('pyjamas.dnd.utils.eventCoordinates', 'pyjamas.dnd', null, false);
	$m['getElementUnderMouse'] = $p['___import___']('pyjamas.dnd.utils.getElementUnderMouse', 'pyjamas.dnd', null, false);
	$m['DataTransfer'] = $p['___import___']('pyjamas.dnd.DataTransfer.DataTransfer', 'pyjamas.dnd', null, false);
	$m['DragDataStore'] = $p['___import___']('pyjamas.dnd.DataTransfer.DragDataStore', 'pyjamas.dnd', null, false);
	$m['DragEvent'] = $p['___import___']('pyjamas.dnd.DragEvent.DragEvent', 'pyjamas.dnd', null, false);
	$m['READ_ONLY'] = $p['___import___']('pyjamas.dnd.READ_ONLY', 'pyjamas.dnd', null, false);
	$m['READ_WRITE'] = $p['___import___']('pyjamas.dnd.READ_WRITE', 'pyjamas.dnd', null, false);
	$m['PROTECTED'] = $p['___import___']('pyjamas.dnd.PROTECTED', 'pyjamas.dnd', null, false);
	$m['ACTIVELY_DRAGGING'] = 3;
	$m['DRAGGING_NO_MOVEMENT_YET'] = 2;
	$m['NOT_DRAGGING'] = 1;
	$m['DNDHelper'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.dnd.DNDHelper';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['dropTargets'] = $p['list']([]);
			self['dragging'] = $m['NOT_DRAGGING'];
			self['dragBusy'] = false;
			self['_currentTargetElement'] = null;
			self['previousDropTarget'] = null;
			self['draggingImage'] = null;
			self['origMouseX'] = 0;
			self['origMouseY'] = 0;
			self['currentDragOperation'] = 'none';
			self['data'] = null;
			self['returnTimer'] = $pyjs_kwargs_call(null, $m['Timer'], null, null, [{'notify':$p['getattr'](self, 'onReturningWidget')}]);
			self['mouseEvent'] = null;
			self['dragDataStore'] = null;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('setCurrentTargetElement', function(element) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
			}

			if ($p['bool'](($p['getattr'](self, '_currentTargetElement') !== null))) {
				if ($p['bool'](!$p['bool']($m['DOM']['compare']($p['getattr'](self, '_currentTargetElement'), element)))) {
					self['fireDNDEvent']('dragleave', $p['getattr'](self, 'currentTargetElement'), $p['getattr'](self, 'currentDropWidget'));
				}
			}
			self['_currentTargetElement'] = element;
			return null;
		}
	, 1, [null,null,['self'],['element']]);
		$cls_definition['setCurrentTargetElement'] = $method;
		$method = $pyjs__bind_method2('getCurrentTargetElement', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '_currentTargetElement');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getCurrentTargetElement'] = $method;
		$cls_definition['currentTargetElement'] = $p['property']($p['staticmethod']($cls_definition['getCurrentTargetElement']), $p['staticmethod']($cls_definition['setCurrentTargetElement']));
		$method = $pyjs__bind_method2('getElement', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['dragWidget']['getElement']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getElement'] = $method;
		$method = $pyjs__bind_method2('updateDropEffect', function(dataTransfer, event_type) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				dataTransfer = arguments[1];
				event_type = arguments[2];
			}
			var $or1,$or2,ea,dropEffect;
			dropEffect = 'none';
			if ($p['bool']($p['list'](['dragover', 'dragenter'])['__contains__'](event_type))) {
				ea = dataTransfer['getEffectAllowed']();
				if ($p['bool']($p['op_eq'](ea, 'none'))) {
					dropEffect = 'none';
				}
				else if ($p['bool'](($p['bool']($or1=ea['startswith']('copy'))?$or1:$p['op_eq'](ea, 'all')))) {
					dropEffect = 'copy';
				}
				else if ($p['bool'](ea['startswith']('link'))) {
					dropEffect = 'link';
				}
				else if ($p['bool']($p['op_eq'](ea, 'move'))) {
					dropEffect = 'move';
				}
				else {
					dropEffect = 'copy';
				}
			}
			else if ($p['bool']($p['list'](['drop', 'dragend'])['__contains__'](event_type))) {
				dropEffect = $p['getattr'](self, 'currentDragOperation');
			}
			dataTransfer['dropEffect'] = dropEffect;
			return null;
		}
	, 1, [null,null,['self'],['dataTransfer'],['event_type']]);
		$cls_definition['updateDropEffect'] = $method;
		$method = $pyjs__bind_method2('updateDragOperation', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $and3,dataTransfer,$and1,de,ea,$and5,$and6,$and4,$and2;
			dataTransfer = $p['getattr'](event, 'dataTransfer');
			ea = $p['getattr'](dataTransfer, 'effectAllowed');
			de = $p['getattr'](dataTransfer, 'dropEffect');
			if ($p['bool'](($p['bool']($and1=$p['op_eq'](de, 'copy'))?$p['list'](['uninitialized', 'copy', 'copyLink', 'copyMove', 'all'])['__contains__'](ea):$and1))) {
				self['currentDragOperation'] = 'copy';
			}
			else if ($p['bool'](($p['bool']($and3=$p['op_eq'](de, 'link'))?$p['list'](['uninitialized', 'link', 'copyLink', 'linkMove', 'all'])['__contains__'](ea):$and3))) {
				self['currentDragOperation'] = 'link';
			}
			else if ($p['bool'](($p['bool']($and5=$p['op_eq'](de, 'move'))?$p['list'](['uninitialized', 'move', 'copyMove', 'linkMove', 'all'])['__contains__'](ea):$and5))) {
				self['currentDragOperation'] = 'move';
			}
			else {
				self['currentDragOperation'] = 'none';
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['updateDragOperation'] = $method;
		$method = $pyjs__bind_method2('updateAllowedEffects', function(drag_event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				drag_event = arguments[1];
			}
			var dt;
			dt = $p['getattr'](drag_event, 'dataTransfer');
			$p['getattr'](self, 'dragDataStore')['allowed_effects_state'] = $p['getattr'](dt, 'effectAllowed');
			return null;
		}
	, 1, [null,null,['self'],['drag_event']]);
		$cls_definition['updateAllowedEffects'] = $method;
		$method = $pyjs__bind_method2('registerTarget', function(target) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				target = arguments[1];
			}

			if ($p['bool'](!$p['bool']($p['getattr'](self, 'dropTargets')['__contains__'](target)))) {
				self['dropTargets']['append'](target);
			}
			return null;
		}
	, 1, [null,null,['self'],['target']]);
		$cls_definition['registerTarget'] = $method;
		$method = $pyjs__bind_method2('unregisterTarget', function(target) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				target = arguments[1];
			}

			while ($p['bool']($p['getattr'](self, 'dropTargets')['__contains__'](target))) {
				self['dropTargets']['remove'](target);
			}
			return null;
		}
	, 1, [null,null,['self'],['target']]);
		$cls_definition['unregisterTarget'] = $method;
		$method = $pyjs__bind_method2('setDragImage', function(element, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var src,$add2,$add3,$add1,$add4,position_absolute;
			position_absolute = $p['op_eq']($m['DOM']['getStyleAttribute'](element, 'position'), 'absolute');
			if ($p['bool'](position_absolute)) {
				self['dragLeftOffset'] = $p['__op_add']($add1=x,$add2=$m['DOM']['getAbsoluteLeft']($p['getattr'](element, 'offsetParent')));
				self['dragTopOffset'] = $p['__op_add']($add3=y,$add4=$m['DOM']['getAbsoluteTop']($p['getattr'](element, 'offsetParent')));
			}
			else {
				self['dragLeftOffset'] = x;
				self['dragTopOffset'] = y;
			}
			if ($p['bool'](element['tagName']['lower']()['endswith']('img'))) {
				src = $m['DOM']['getAttribute'](element, 'src');
				element = $m['DOM']['createElement']('img');
				$m['DOM']['setAttribute'](element, 'src', src);
			}
			if ($p['bool'](!$p['bool']($p['getattr'](self, 'draggingImage')))) {
				self['createDraggingImage'](element);
			}
			else {
				self['draggingImage']['setImage'](element);
			}
			return null;
		}
	, 1, [null,null,['self'],['element'],['x'],['y']]);
		$cls_definition['setDragImage'] = $method;
		$method = $pyjs__bind_method2('addFeedbackElement', function(element) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
			}

			if ($p['bool']($p['getattr'](self, 'draggingImage'))) {
				self['draggingImage']['addElement'](element);
			}
			else {
				self['createDraggingImage'](element);
			}
			return null;
		}
	, 1, [null,null,['self'],['element']]);
		$cls_definition['addFeedbackElement'] = $method;
		$method = $pyjs__bind_method2('createDraggingImage', function(element) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
			}

			self['draggingImage'] = $m['DraggingWidget'](element);
			return $p['getattr'](self, 'draggingImage');
		}
	, 1, [null,null,['self'],['element']]);
		$cls_definition['createDraggingImage'] = $method;
		$method = $pyjs__bind_method2('setDragImageLocation', function(x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}
			var $sub3,elt_top,$sub2,$sub1,elt_left,$sub4;
			elt_top = $p['__op_sub']($sub1=y,$sub2=$p['getattr'](self, 'dragTopOffset'));
			elt_left = $p['__op_sub']($sub3=x,$sub4=$p['getattr'](self, 'dragLeftOffset'));
			self['draggingImage']['setStyleAttribute']('top', elt_top);
			self['draggingImage']['setStyleAttribute']('left', elt_left);
			return null;
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['setDragImageLocation'] = $method;
		$method = $pyjs__bind_method2('getAbsoluteLeft', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['dragWidget']['getAbsoluteLeft']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getAbsoluteLeft'] = $method;
		$method = $pyjs__bind_method2('getAbsoluteTop', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['dragWidget']['getAbsoluteTop']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getAbsoluteTop'] = $method;
		$method = $pyjs__bind_method2('makeDragEvent', function(event, type, target) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
				type = arguments[2];
				target = arguments[3];
			}
			if (typeof target == 'undefined') target=arguments['callee']['__args__'][5][1];
			var dt,drag_event;
			dt = $m['DataTransfer']($p['getattr'](self, 'dragDataStore'));
			self['updateDropEffect'](dt, type);
			drag_event = $m['DragEvent'](event, type, dt, target);
			return drag_event;
		}
	, 1, [null,null,['self'],['event'],['type'],['target', null]]);
		$cls_definition['makeDragEvent'] = $method;
		$method = $pyjs__bind_method2('finalize', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$p['getattr'](self, 'dragDataStore')['allowed_effects_state'] = $p['getattr']($p['getattr'](event, 'dataTransfer'), 'effectAllowed');
			if ($p['bool']($p['list'](['dragstart', 'drop'])['__contains__']($p['getattr'](event, 'type')))) {
				self['dragDataStore']['setMode']($m['PROTECTED']);
			}
			$p['getattr'](event, 'dataTransfer')['dataStore'] = null;
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['finalize'] = $method;
		$method = $pyjs__bind_method2('fireDNDEvent', function(name, target, widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				target = arguments[2];
				widget = arguments[3];
			}
			var event;
			if ($p['bool']($p['op_eq'](name, 'dragstart'))) {
				self['dragDataStore']['setMode']($m['READ_WRITE']);
			}
			else if ($p['bool']($p['op_eq'](name, 'drop'))) {
				self['dragDataStore']['setMode']($m['READ_ONLY']);
			}
			event = self['makeDragEvent']($p['getattr'](self, 'mouseEvent'), name, target);
			widget['onBrowserEvent'](event);
			self['finalize'](event);
			return event;
		}
	, 1, [null,null,['self'],['name'],['target'],['widget']]);
		$cls_definition['fireDNDEvent'] = $method;
		$method = $pyjs__bind_method2('initFeedbackImage', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter1_nextval,$iter1_type,$iter1_iter,$iter1_array,offset,y,x,element,ds,$iter1_idx;
			ds = $p['getattr'](self, 'dragDataStore');
			x = 0;
			y = 0;
			if ($p['bool'](($p['getattr'](ds, 'bitmap') !== null))) {
				if ($p['bool'](($p['getattr'](ds, 'hotspot_coordinate') !== null))) {
					offset = $p['getattr'](ds, 'hotspot_coordinate');
					x = offset['__getitem__'](0);
					y = offset['__getitem__'](1);
				}
				self['setDragImage']($p['getattr'](ds, 'bitmap'), x, y);
				return null;
			}
			if ($p['bool']($p['getattr']($p['getattr'](self, 'dragDataStore'), 'elements'))) {
				$iter1_iter = $p['getattr']($p['getattr'](self, 'dragDataStore'), 'elements');
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					element = $iter1_nextval['$nextval'];
					self['addFeedbackElement'](element);
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['initFeedbackImage'] = $method;
		$method = $pyjs__bind_method2('onMouseMove', function(sender, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var event,fromElement,$sub9,$sub8,$sub7,$sub6,$sub5,$or4,$or3,$sub13,$sub12,$sub11,$sub10,$sub14,dragStartEvent,button,$pyjs_try_err,draggable,position_absolute;
			event = $m['DOM']['eventGetCurrentEvent']();
			self['mouseEvent'] = event;
			button = $m['DOM']['eventGetButton'](event);
			if ($p['bool'](!$p['bool']($p['op_eq'](button, $p['getattr']($m['Event'], 'BUTTON_LEFT'))))) {
				return null;
			}
			var $tupleassign1 = $p['__ass_unpack']($m['eventCoordinates'](event), 2, null);
			x = $tupleassign1[0];
			y = $tupleassign1[1];
			if ($p['bool']($p['op_eq']($p['getattr'](self, 'dragging'), $m['DRAGGING_NO_MOVEMENT_YET']))) {
				self['origMouseX'] = x;
				self['origMouseY'] = y;
				self['currentDragOperation'] = 'none';
				fromElement = self['dragWidget']['getElement']();
				try {
					draggable = $p['getattr'](fromElement, 'draggable');
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						draggable = false;
					}
				}
				if ($p['bool'](!$p['bool'](draggable))) {
					fromElement = $m['findDraggable'](sender['getElement'](), $p['getattr'](self, 'origMouseX'), $p['getattr'](self, 'origMouseY'));
				}
				if ($p['bool']((fromElement === null))) {
					self['dragging'] = $m['NOT_DRAGGING'];
					return null;
				}
				self['origTop'] = $m['DOM']['getAbsoluteTop'](fromElement);
				self['origLeft'] = $m['DOM']['getAbsoluteLeft'](fromElement);
				position_absolute = $p['op_eq']($m['DOM']['getStyleAttribute'](fromElement, 'position'), 'absolute');
				if ($p['bool'](position_absolute)) {
					self['dragLeftOffset'] = $p['__op_sub']($sub5=$p['getattr'](self, 'origMouseX'),$sub6=$m['DOM']['getAbsoluteLeft']($p['getattr'](fromElement, 'offsetParent')));
					self['dragTopOffset'] = $p['__op_sub']($sub7=$p['getattr'](self, 'origMouseY'),$sub8=$m['DOM']['getAbsoluteTop']($p['getattr'](fromElement, 'offsetParent')));
				}
				else {
					self['dragLeftOffset'] = $p['__op_sub']($sub9=$p['getattr'](self, 'origMouseX'),$sub10=$p['getattr'](self, 'origLeft'));
					self['dragTopOffset'] = $p['__op_sub']($sub11=$p['getattr'](self, 'origMouseY'),$sub12=$p['getattr'](self, 'origTop'));
				}
				$p['getattr'](self, 'dragDataStore')['elements'] = $p['list']([fromElement]);
				dragStartEvent = self['fireDNDEvent']('dragstart', null, $p['getattr'](self, 'dragWidget'));
				if ($p['bool'](!$p['bool']($m['isCanceled'](dragStartEvent)))) {
					self['initFeedbackImage']();
					$m['RootPanel']()['add']($p['getattr'](self, 'draggingImage'));
					self['setDragImageLocation'](x, y);
					self['dragging'] = $m['ACTIVELY_DRAGGING'];
					$m['GlassWidget']['show'](self);
				}
			}
			else if ($p['bool']($p['op_eq']($p['getattr'](self, 'dragging'), $m['ACTIVELY_DRAGGING']))) {
				try {
					$doc['selection']['empty']();
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						$wnd['getSelection']()['removeAllRanges']();
					}
				}
				self['setDragImageLocation'](x, y);
				if ($p['bool'](($p['bool']($or3=$p['getattr'](self, 'dragBusy'))?$or3:($p['cmp']($p['__op_sub']($sub13=$m['time']['time'](),$sub14=$p['getattr'](self, 'drag_time')), 0.25) == -1)))) {
					return null;
				}
				self['doDrag'](event, x, y);
				self['drag_time'] = $m['time']['time']();
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseMove'] = $method;
		$method = $pyjs__bind_method2('doDrag', function(event, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var $or5,widget,$iter2_nextval,$iter2_type,target,$iter2_iter,drop_element,drag_event,over_event,enter_event,$iter2_idx,$or6,$iter2_array,drop_widget;
			self['dragBusy'] = true;
			drag_event = self['fireDNDEvent']('drag', null, $p['getattr'](self, 'dragWidget'));
			if ($p['bool'](!$p['bool']($m['isCanceled'](drag_event)))) {
				target = null;
				widget = null;
				$iter2_iter = $p['getattr'](self, 'dropTargets');
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					widget = $iter2_nextval['$nextval'];
					target = $m['getElementUnderMouse'](widget, x, y);
					if ($p['bool']((target !== null))) {
						break;
					}
				}
				if ($p['bool'](target)) {
					drop_widget = widget;
					drop_element = target;
					if ($p['bool'](($p['bool']($or5=!$p['bool']($p['getattr'](self, 'currentTargetElement')))?$or5:!$p['bool']($m['DOM']['compare'](drop_element, $p['getattr'](self, 'currentTargetElement')))))) {
						enter_event = self['fireDNDEvent']('dragenter', drop_element, drop_widget);
						if ($p['bool']($m['isCanceled'](enter_event))) {
							self['currentTargetElement'] = drop_element;
							self['currentDropWidget'] = drop_widget;
						}
					}
					if ($p['bool'](($p['getattr'](self, 'currentTargetElement') !== null))) {
						over_event = self['fireDNDEvent']('dragover', drop_element, $p['getattr'](self, 'currentDropWidget'));
						if ($p['bool']($m['isCanceled'](over_event))) {
							self['updateDragOperation'](over_event);
						}
						else {
							self['currentDragOperation'] = 'none';
						}
						self['draggingImage']['updateCursor']($p['getattr'](self, 'currentDragOperation'));
					}
				}
				else {
					self['currentTargetElement'] = null;
				}
			}
			else {
				self['currentDragOperation'] = 'none';
			}
			self['dragBusy'] = false;
			return null;
		}
	, 1, [null,null,['self'],['event'],['x'],['y']]);
		$cls_definition['doDrag'] = $method;
		$method = $pyjs__bind_method2('onMouseDown', function(sender, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var event,button;
			self['dragWidget'] = sender;
			event = $m['DOM']['eventGetCurrentEvent']();
			self['mouseEvent'] = event;
			button = $m['DOM']['eventGetButton'](event);
			if ($p['bool'](!$p['op_eq'](button, $p['getattr']($m['Event'], 'BUTTON_LEFT')))) {
				return null;
			}
			self['dragging'] = $m['DRAGGING_NO_MOVEMENT_YET'];
			self['drag_time'] = $m['time']['time']();
			self['dragDataStore'] = $m['DragDataStore']();
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
			var $or7,$or8,drop_event;
			self['dragging'] = $m['NOT_DRAGGING'];
			if ($p['bool']($p['getattr'](self, 'draggingImage'))) {
				$m['GlassWidget']['hide']();
				if ($p['bool'](($p['bool']($or7=$p['op_eq']($p['getattr'](self, 'currentDragOperation'), 'none'))?$or7:!$p['bool']($p['getattr'](self, 'currentTargetElement'))))) {
					if ($p['bool']($p['getattr'](self, 'currentTargetElement'))) {
						self['fireDNDEvent']('dragleave', $p['getattr'](self, 'currentTargetElement'), $p['getattr'](self, 'currentDropWidget'));
					}
					else {
						self['currentDragOperation'] = 'none';
					}
					self['returnDrag']();
				}
				else {
					drop_event = self['fireDNDEvent']('drop', $p['getattr'](self, 'currentTargetElement'), $p['getattr'](self, 'currentDropWidget'));
					if ($p['bool']($m['isCanceled'](drop_event))) {
						self['currentDragOperation'] = $p['getattr']($p['getattr'](drop_event, 'dataTransfer'), 'dropEffect');
					}
					else {
						self['currentDragOperation'] = 'none';
					}
					self['zapDragImage']();
				}
				self['fireDNDEvent']('dragend', null, $p['getattr'](self, 'dragWidget'));
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseUp'] = $method;
		$method = $pyjs__bind_method2('zapDragImage', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['RootPanel']()['remove']($p['getattr'](self, 'draggingImage'));
			self['draggingImage'] = null;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['zapDragImage'] = $method;
		$method = $pyjs__bind_method2('returnDrag', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['moveItemTo']($p['getattr'](self, 'draggingImage'), $p['getattr'](self, 'origLeft'), $p['getattr'](self, 'origTop'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['returnDrag'] = $method;
		$method = $pyjs__bind_method2('returnXY', function(start, destination, count) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				start = arguments[1];
				destination = arguments[2];
				count = arguments[3];
			}
			var $sub22,$sub23,$sub20,$sub21,$sub26,$sub27,$sub24,$sub25,destination_x,destination_y,$sub28,$sub29,$sub33,$sub32,diff_x,diff_y,$sub38,$sub31,$sub30,$sub19,$sub18,$sub35,$sub34,$sub37,$sub36,$or9,$or12,$sub17,$sub16,$sub15,$div8,$div2,$div3,$div1,$div6,$div7,$div4,$div5,$or11,$or10,start_x,start_y;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
			var $generator = function () {};
			$generator['next'] = function (noStop) {
			
				var $res;
				$yield_value = $exc = null;
				try {
					$res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res == 'undefined') {
						if (noStop === true) {
							$generator_state[0] = -1;
							return;
						}
						throw $p['StopIteration']();
					}
				} catch (e) {
			
					$is_executing=false;
					$generator_state[0] = -1;
					if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
						return;
					}
					throw e;
				}
				return $res;
			};
			$generator['__iter__'] = function () {return $generator;};
			$generator['send'] = function ($val) {
			
				$yield_value = $val;
				$exc = null;
				try {
					var $res = $generator['$genfunc']();
					if (typeof $res == 'undefined') throw $p['StopIteration']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw e;
				}
				$is_executing=false;
				return $res;
			};
			$generator['$$throw'] = function ($exc_type, $exc_value) {
			
				$yield_value = null;
				$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
														($p['isinstance']($exc_value, $exc_type)
														 ? $exc_value : $exc_type($exc_value)));
				try {
					var $res = $generator['$genfunc']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw (e);
				}
				$is_executing=false;
				return $res;
			};
			$generator['close'] = function () {
			
				$yield_value = null;
				$exc=$p['GeneratorExit']();
				try {
					var $res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
					throw (e);
				}
				return null;
			};
			$generator['$genfunc'] = function () {
				var $yielding = false;
				if ($is_executing) throw $p['ValueError']('generator already executing');
				$is_executing = true;
			
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					var $tupleassign4 = $p['__ass_unpack'](start, 2, null);
					start_x = $tupleassign4[0];
					start_y = $tupleassign4[1];
					var $tupleassign5 = $p['__ass_unpack'](destination, 2, null);
					destination_x = $tupleassign5[0];
					destination_y = $tupleassign5[1];
					diff_x = (typeof ($div5=$p['__op_sub']($sub27=start_x,$sub28=destination_x))==typeof ($div6=count) && typeof $div5=='number' && $div6 !== 0?
						$div5/$div6:
						$p['op_div']($div5,$div6));
					diff_y = (typeof ($div7=$p['__op_sub']($sub29=start_y,$sub30=destination_y))==typeof ($div8=count) && typeof $div7=='number' && $div8 !== 0?
						$div7/$div8:
						$p['op_div']($div7,$div8));
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state['splice'](1, $generator_state['length']-1);
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0)||($p['bool'](($p['bool']($or11=($p['cmp']($p['abs']($p['__op_sub']($sub31=start_x,$sub32=destination_x)), 10) == 1))?$or11:($p['cmp']($p['abs']($p['__op_sub']($sub33=start_y,$sub34=destination_y)), 10) == 1))));$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
							start_x = $p['__op_sub']($sub35=start_x,$sub36=diff_x);
							start_y = $p['__op_sub']($sub37=start_y,$sub38=diff_y);
							$yield_value = $p['tuple']([start_x, start_y]);
							$yielding = true;
							$generator_state[1] = 1;
							return $yield_value;
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[1] = -1;
								throw $exc;
							}
							$generator_state[1]=2;
						}
						if ($generator_state[1] == 2) {
						}
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
					$generator_state[0]=4;
					throw ($p['StopIteration']);
					$generator_state[0]=4;
				}
				if ($generator_state[0] == 4) {
					$generator_state[0]=5;
				}
				if ($generator_state[0] == 5) {
				}

				return;
			};
			return $generator;
		}
	, 1, [null,null,['self'],['start'],['destination'],['count']]);
		$cls_definition['returnXY'] = $method;
		$method = $pyjs__bind_method2('onReturningWidget', function(timer) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				timer = arguments[1];
			}
			var next_loc,$pyjs_try_err,y,x;
			try {
				next_loc = self['return_iterator']['next']();
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['StopIteration']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['StopIteration'])) {
					self['zapDragImage']();
					return null;
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			var $tupleassign6 = $p['__ass_unpack'](next_loc, 2, null);
			x = $tupleassign6[0];
			y = $tupleassign6[1];
			self['draggingImage']['setStyleAttribute']('top', $p['str'](y));
			self['draggingImage']['setStyleAttribute']('left', $p['str'](x));
			self['returnTimer']['schedule'](50);
			return null;
		}
	, 1, [null,null,['self'],['timer']]);
		$cls_definition['onReturningWidget'] = $method;
		$method = $pyjs__bind_method2('moveItemTo', function(widget, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var widgetStart,returnWidgetDestination;
			self['returnWidget'] = widget;
			returnWidgetDestination = $p['tuple']([x, y]);
			widgetStart = $p['tuple']([widget['getAbsoluteLeft'](), widget['getAbsoluteTop']()]);
			self['return_iterator'] = self['returnXY'](widgetStart, returnWidgetDestination, 10);
			self['returnTimer']['schedule'](50);
			return null;
		}
	, 1, [null,null,['self'],['widget'],['x'],['y']]);
		$cls_definition['moveItemTo'] = $method;
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

			if ($p['bool']($p['op_eq']($p['getattr'](self, 'dragging'), $m['DRAGGING_NO_MOVEMENT_YET']))) {
				self['dragging'] = $m['NOT_DRAGGING'];
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseLeave'] = $method;
		$method = $pyjs__bind_method2('onMouseGlassEnter', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseGlassEnter'] = $method;
		$method = $pyjs__bind_method2('onMouseGlassLeave', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseGlassLeave'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('DNDHelper', $p['tuple']($bases), $data);
	})();
	$m['dndHelper'] = null;
	$m['initDNDHelper'] = function() {

		if ($p['bool'](($m['dndHelper'] === null))) {
			$m['dndHelper'] = $m['DNDHelper']();
		}
		return null;
	};
	$m['initDNDHelper']['__name__'] = 'initDNDHelper';

	$m['initDNDHelper']['__bind_type__'] = 0;
	$m['initDNDHelper']['__args__'] = [null,null];
	$m['initDNDHelper']();
	return this;
}; /* end pyjamas.dnd.DNDHelper */


/* end module: pyjamas.dnd.DNDHelper */


/*
PYJS_DEPS: ['time', 'pyjamas.DOM', 'pyjamas', 'pyjamas.Window', 'pyjamas.ui.GlassWidget', 'pyjamas.ui', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.Event', 'pyjamas.Timer.Timer', 'pyjamas.Timer', 'pyjamas.dnd.utils.DraggingWidget', 'pyjamas.dnd', 'pyjamas.dnd.utils', 'pyjamas.dnd.utils.isCanceled', 'pyjamas.dnd.utils.findDraggable', 'pyjamas.dnd.utils.eventCoordinates', 'pyjamas.dnd.utils.getElementUnderMouse', 'pyjamas.dnd.DataTransfer.DataTransfer', 'pyjamas.dnd.DataTransfer', 'pyjamas.dnd.DataTransfer.DragDataStore', 'pyjamas.dnd.DragEvent.DragEvent', 'pyjamas.dnd.DragEvent', 'pyjamas.dnd.READ_ONLY', 'pyjamas.dnd.READ_WRITE', 'pyjamas.dnd.PROTECTED']
*/
