/* start module: edu.uca.ui.BlocksPad */
$pyjs['loaded_modules']['edu.uca.ui.BlocksPad'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.ui.BlocksPad']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.ui.BlocksPad'];
	if(typeof $pyjs['loaded_modules']['edu.uca.ui'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.ui']['__was_initialized__']) $p['___import___']('edu.uca.ui', null);
	var $m = $pyjs['loaded_modules']['edu.uca.ui.BlocksPad'];
	$m['__repr__'] = function() { return '<module: edu.uca.ui.BlocksPad>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.ui.BlocksPad';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.ui']['BlocksPad'] = $pyjs['loaded_modules']['edu.uca.ui.BlocksPad'];


	$m['DropWidget'] = $p['___import___']('pyjamas.ui.DropWidget.DropWidget', 'edu.uca.ui', null, false);
	$m['DragContainer'] = $p['___import___']('pyjamas.ui.DragWidget.DragContainer', 'edu.uca.ui', null, false);
	$m['Element'] = $p['___import___']('edu.uca.renderable.Element.Element', 'edu.uca.ui', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.ui', null, false);
	$m['Block'] = $p['___import___']('edu.uca.renderable.block.Block.Block', 'edu.uca.ui', null, false);
	$m['getWorkspace'] = $p['___import___']('edu.uca.Workspace.getWorkspace', 'edu.uca.ui', null, false);
	$m['MainBlock'] = $p['___import___']('edu.uca.renderable.block.MainBlock.MainBlock', 'edu.uca.ui', null, false);
	$m['getDropPosition'] = $p['___import___']('edu.uca.util.DragElement.getDropPosition', 'edu.uca.ui', null, false);
	$m['setDragStartPosition'] = $p['___import___']('edu.uca.util.DragElement.setDragStartPosition', 'edu.uca.ui', null, false);
	$m['getOffsetStartPosition'] = $p['___import___']('edu.uca.util.DragElement.getOffsetStartPosition', 'edu.uca.ui', null, false);
	$m['getCurrentOffsetPosition'] = $p['___import___']('edu.uca.util.DragElement.getCurrentOffsetPosition', 'edu.uca.ui', null, false);
	$m['contains'] = $p['___import___']('edu.uca.util.DragElement.contains', 'edu.uca.ui', null, false);
	$m['BlocksPad'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.ui.BlocksPad';
		$cls_definition['_blockDragListeners'] = $p['list']([]);
		$method = $pyjs__bind_method2('__init__', function(popupEditorBlock) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				popupEditorBlock = arguments[1];
			}
			if (typeof popupEditorBlock == 'undefined') popupEditorBlock=arguments['callee']['__args__'][3][1];

			$pyjs_kwargs_call($m['Element'], '__init__', null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'drophere2', 'Width':'100%', 'Height':'100%'}, self]);
			$m['DropWidget']['__init__'](self);
			$m['DragContainer']['__init__'](self);
			self['setID']('blocks_pad');
			self['popupEditorBlock'] = popupEditorBlock;
			return null;
		}
	, 1, [null,null,['self'],['popupEditorBlock', false]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('reload', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['removeAll']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['reload'] = $method;
		$method = $pyjs__bind_method2('add', function(widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			if ($p['bool']($p['isinstance'](widget, $m['Block']))) {
				$m['Element']['add'](self, widget);
				widget['blockPad'] = self;
			}
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('addBlock', function(block, left, top, original) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				left = arguments[2];
				top = arguments[3];
				original = arguments[4];
			}

			if ($p['bool'](original)) {
				block['original'] = false;
				$m['getWorkspace']()['addBlock'](block);
				if ($p['bool']($p['isinstance'](block, $m['MainBlock']))) {
					$m['getWorkspace']()['setMainBlock'](block);
					$m['getWorkspace']()['getBlockList']()['hideMainBlock']();
				}
			}
			else {
				block['removeFromParent']();
			}
			block['setStyleAttribute']($p['dict']([['left', left], ['top', top]]));
			block['blockPad'] = self;
			$m['Element']['add'](self, block);
			return null;
		}
	, 1, [null,null,['self'],['block'],['left'],['top'],['original']]);
		$cls_definition['addBlock'] = $method;
		$method = $pyjs__bind_method2('getBlocks', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter1_nextval,$iter1_type,$iter1_iter,$iter1_array,child,blocks,$iter1_idx;
			blocks = $p['list']([]);
			$iter1_iter = $p['getattr'](self, 'children');
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				child = $iter1_nextval['$nextval'];
				if ($p['bool']($p['isinstance'](child, $m['Block']))) {
					blocks['append'](child);
				}
			}
			return blocks;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getBlocks'] = $method;
		$method = $pyjs__bind_method2('onDragStart', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $iter2_nextval,$iter2_type,$iter2_iter,listener,$iter2_idx,$iter2_array;
			$m['setDragStartPosition'](event);
			$iter2_iter = $p['getattr'](self, '_blockDragListeners');
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				listener = $iter2_nextval['$nextval'];
				listener['onBlockDragStart'](event, $m['getWorkspace']()['getMovingBlock']());
			}
			$m['getWorkspace']()['getBlockList']()['trashCan']['addStyleName']('trashCanCloseFadeIn');
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
				if ($p['bool']((json['loads'](event['dataTransfer']['getData']('text'))['__getitem__']('stackBlock') !== null))) {
					$p['getattr'](event, 'dataTransfer')['dropEffect'] = 'copy';
					$m['DOM']['eventPreventDefault'](event);
				}
				return null;
			}
			dt = $p['getattr'](event, 'dataTransfer');
			dt['dropEffect'] = 'copy';
			if ($p['bool']($p['getattr']($m['getWorkspace']()['getMovingBlock'](), 'original'))) {
				self['addStyleName']('dragover2');
			}
			$m['DOM']['eventPreventDefault'](event);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragOver'] = $method;
		$method = $pyjs__bind_method2('testStatementArg', function(event, block) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
				block = arguments[2];
			}
			var $add3,$add5,offsetX,offsetY,$add2,$sub3,newX,newY,$add6,$add4,$sub2,y,x,$sub1,$add1,$sub4;
			var $tupleassign1 = $p['__ass_unpack']($m['getCurrentOffsetPosition'](event), 2, null);
			x = $tupleassign1[0];
			y = $tupleassign1[1];
			var $tupleassign2 = $p['__ass_unpack']($m['getOffsetStartPosition'](event), 2, null);
			offsetX = $tupleassign2[0];
			offsetY = $tupleassign2[1];
			var $tupleassign3 = $p['__ass_unpack']($p['tuple']([$p['__op_sub']($sub1=x,$sub2=offsetX), $p['__op_sub']($sub3=y,$sub4=offsetY)]), 2, null);
			newX = $tupleassign3[0];
			newY = $tupleassign3[1];
			$p['printFunc']([$p['__op_add']($add5=$p['__op_add']($add3=$p['__op_add']($add1='newX:',$add2=$p['str'](newX)),$add4=' newY:'),$add6=$p['str'](newY))], 1);
			$p['printFunc']([$m['contains'](newX, newY, block)], 1);
			return null;
		}
	, 1, [null,null,['self'],['event'],['block']]);
		$cls_definition['testStatementArg'] = $method;
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
			var stateChange,top,loadStackBlock,json,stackBlock,left;
			if ($p['bool'](($m['getWorkspace']()['getMovingBlock']() === null))) {
				json = $p['___import___']('json', 'edu.uca.ui');
				loadStackBlock = $p['___import___']('edu.uca.util.Serializable.loadStackBlock', 'edu.uca.ui', null, false);
				stateChange = $p['___import___']('edu.uca.util.Serializable.stateChange', 'edu.uca.ui', null, false);
				stackBlock = loadStackBlock(json['loads'](event['dataTransfer']['getData']('text'))['__getitem__']('stackBlock'));
				stackBlock['changeTexts']();
				self['addBlock'](stackBlock, $m['getDropPosition'](self, event), true);
				stateChange();
				return null;
			}
			if ($p['bool']($p['getattr']($m['getWorkspace']()['getMovingBlock'](), 'original'))) {
				self['removeStyleName']('dragover2');
				$m['getWorkspace']()['setMovingBlock']($m['getWorkspace']()['cloneBlock']($m['getWorkspace']()['getMovingBlock']()));
			}
			var $tupleassign4 = $p['__ass_unpack']($m['getDropPosition'](self, event), 2, null);
			left = $tupleassign4[0];
			top = $tupleassign4[1];
			self['addBlock']($m['getWorkspace']()['getMovingBlock'](), left, top, $p['getattr']($m['getWorkspace']()['getMovingBlock'](), 'original'));
			stateChange = $p['___import___']('edu.uca.util.Serializable.stateChange', 'edu.uca.ui', null, false);
			stateChange();
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
			var $iter3_idx,$iter3_type,listener,$iter3_iter,$iter3_array,$iter3_nextval;
			$iter3_iter = $p['getattr'](self, '_blockDragListeners');
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				listener = $iter3_nextval['$nextval'];
				listener['onBlockDragEnd'](event, $m['getWorkspace']()['getMovingBlock']());
			}
			$m['getWorkspace']()['setMovingBlock'](null);
			$m['getWorkspace']()['getBlockList']()['trashCan']['removeStyleName']('trashCanCloseFadeIn');
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragEnd'] = $method;
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
		var $bases = new Array($m['DropWidget'],$m['DragContainer'],$m['Element']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('BlocksPad', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.ui.BlocksPad */


/* end module: edu.uca.ui.BlocksPad */


/*
PYJS_DEPS: ['pyjamas.ui.DropWidget.DropWidget', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.DropWidget', 'pyjamas.ui.DragWidget.DragContainer', 'pyjamas.ui.DragWidget', 'edu.uca.renderable.Element.Element', 'edu', 'edu.uca', 'edu.uca.renderable', 'edu.uca.renderable.Element', 'pyjamas.DOM', 'edu.uca.renderable.block.Block.Block', 'edu.uca.renderable.block', 'edu.uca.renderable.block.Block', 'edu.uca.Workspace.getWorkspace', 'edu.uca.Workspace', 'edu.uca.renderable.block.MainBlock.MainBlock', 'edu.uca.renderable.block.MainBlock', 'edu.uca.util.DragElement.getDropPosition', 'edu.uca.util', 'edu.uca.util.DragElement', 'edu.uca.util.DragElement.setDragStartPosition', 'edu.uca.util.DragElement.getOffsetStartPosition', 'edu.uca.util.DragElement.getCurrentOffsetPosition', 'edu.uca.util.DragElement.contains', 'json', 'edu.uca.util.Serializable.loadStackBlock', 'edu.uca.util.Serializable', 'edu.uca.util.Serializable.stateChange']
*/
