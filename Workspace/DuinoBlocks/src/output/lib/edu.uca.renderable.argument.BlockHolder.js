/* start module: edu.uca.renderable.argument.BlockHolder */
$pyjs['loaded_modules']['edu.uca.renderable.argument.BlockHolder'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.renderable.argument.BlockHolder']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.renderable.argument.BlockHolder'];
	if(typeof $pyjs['loaded_modules']['edu.uca.renderable.argument'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.renderable.argument']['__was_initialized__']) $p['___import___']('edu.uca.renderable.argument', null);
	var $m = $pyjs['loaded_modules']['edu.uca.renderable.argument.BlockHolder'];
	$m['__repr__'] = function() { return '<module: edu.uca.renderable.argument.BlockHolder>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.renderable.argument.BlockHolder';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.renderable.argument']['BlockHolder'] = $pyjs['loaded_modules']['edu.uca.renderable.argument.BlockHolder'];


	$m['Element'] = $p['___import___']('edu.uca.renderable.Element.Element', 'edu.uca.renderable.argument', null, false);
	$m['getWorkspace'] = $p['___import___']('edu.uca.Workspace.getWorkspace', 'edu.uca.renderable.argument', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.renderable.argument', null, false);
	$m['getDropPosition'] = $p['___import___']('edu.uca.util.DragElement.getDropPosition', 'edu.uca.renderable.argument', null, false);
	$m['BlockHolder'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.renderable.argument.BlockHolder';
		$method = $pyjs__bind_method2('__init__', function(arg, block, up) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				arg = arguments[1];
				block = arguments[2];
				up = arguments[3];
			}
			if (typeof up == 'undefined') up=arguments['callee']['__args__'][5][1];

			$pyjs_kwargs_call($m['Element'], '__init__', null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'holder'}, self]);
			self['block'] = block;
			self['up'] = up;
			self['subBlock'] = null;
			self['argument'] = arg;
			self['append']($p['getattr'](self, 'argument'));
			self['argument']['addDropListener'](self);
			$p['getattr'](self, 'argument')['block'] = block;
			return null;
		}
	, 1, [null,null,['self'],['arg'],['block'],['up', false]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onDragOver', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragOver'] = $method;
		$method = $pyjs__bind_method2('onDragEnter', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragEnter'] = $method;
		$method = $pyjs__bind_method2('onDragLeave', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
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
			$m['DOM']['eventStopPropagation'](event);
			if ($p['bool']($p['op_eq']($p['getattr'](self, 'subBlock'), $m['getWorkspace']()['getMovingBlock']()))) {
				return null;
			}
			if ($p['bool']($p['getattr']($m['getWorkspace']()['getMovingBlock'](), 'original'))) {
				$m['getWorkspace']()['setMovingBlock']($m['getWorkspace']()['cloneBlock']($m['getWorkspace']()['getMovingBlock']()));
			}
			if ($p['bool']($p['getattr'](self, 'up'))) {
				self['addUpperBlock']($m['getWorkspace']()['getMovingBlock'](), $p['getattr']($m['getWorkspace']()['getMovingBlock'](), 'original'), event);
			}
			else {
				self['addSubBlock']($m['getWorkspace']()['getMovingBlock'](), $p['getattr']($m['getWorkspace']()['getMovingBlock'](), 'original'));
			}
			stateChange = $p['___import___']('edu.uca.util.Serializable.stateChange', 'edu.uca.renderable.argument', null, false);
			stateChange();
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDrop'] = $method;
		$method = $pyjs__bind_method2('addUpperBlock', function(newUpperBlock, original, event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				newUpperBlock = arguments[1];
				original = arguments[2];
				event = arguments[3];
			}
			var top,left;
			newUpperBlock['removeFromParent']();
			var $tupleassign1 = $p['__ass_unpack']($m['getDropPosition']($p['getattr']($p['getattr'](self, 'block'), 'blockPad'), event), 2, null);
			left = $tupleassign1[0];
			top = $tupleassign1[1];
			left = self['block']['getStyleAttribute']('left');
			top = $p['max'](top, 0);
			self['block']['blockPad']['addBlock'](newUpperBlock, left, top, original);
			newUpperBlock['getLastBlock']()['holderSiblingDown']['addSubBlock']($p['getattr'](self, 'block'), $p['getattr']($p['getattr'](self, 'block'), 'original'));
			return null;
		}
	, 1, [null,null,['self'],['newUpperBlock'],['original'],['event']]);
		$cls_definition['addUpperBlock'] = $method;
		$method = $pyjs__bind_method2('addSubBlock', function(newSubBlock, original) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				newSubBlock = arguments[1];
				original = arguments[2];
			}
			var MainBlock,removed;
			if ($p['bool']($p['op_eq']($p['getattr'](self, 'subBlock'), newSubBlock))) {
				return null;
			}
			if ($p['bool'](($p['getattr'](self, 'subBlock') !== null))) {
				removed = $p['getattr'](self, 'subBlock');
				self['remove']($p['getattr'](self, 'subBlock'));
				if ($p['bool']((newSubBlock !== null))) {
					removed['parentBlock'] = newSubBlock['getLastBlock']();
					newSubBlock['removeFromParent']();
					newSubBlock['getLastBlock']()['holderSiblingDown']['addSubBlock'](removed, $p['getattr'](removed, 'original'));
				}
			}
			self['subBlock'] = newSubBlock;
			if ($p['bool'](($p['getattr'](self, 'subBlock') !== null))) {
				if ($p['bool'](original)) {
					$p['getattr'](self, 'subBlock')['original'] = false;
					$m['getWorkspace']()['addBlock']($p['getattr'](self, 'subBlock'));
					MainBlock = $p['___import___']('edu.uca.renderable.block.MainBlock.MainBlock', 'edu.uca.renderable.argument', null, false);
					if ($p['bool']($p['isinstance']($p['getattr'](self, 'subBlock'), MainBlock))) {
						$m['getWorkspace']()['setMainBlock']($p['getattr'](self, 'subBlock'));
						$m['getWorkspace']()['getBlockList']()['hideMainBlock']();
					}
				}
				$p['getattr'](self, 'subBlock')['parentBlock'] = $p['getattr'](self, 'block');
				$p['getattr'](self, 'subBlock')['blockPad'] = $p['getattr']($p['getattr'](self, 'block'), 'blockPad');
				self['subBlock']['setStyleAttribute']($p['dict']([['top', 0], ['left', 0]]));
				self['add']($p['getattr'](self, 'subBlock'));
				$p['getattr'](self, 'subBlock')['parentBlock'] = $p['getattr'](self, 'block');
				if ($p['bool']($p['getattr']($p['getattr'](self, 'subBlock'), 'holderSiblingUp'))) {
					$p['getattr']($p['getattr']($p['getattr'](self, 'subBlock'), 'holderSiblingUp'), 'argument')['enable'] = false;
				}
			}
			self['block']['resize']();
			self['argument']['setStyleAttribute']('display', 'none');
			return null;
		}
	, 1, [null,null,['self'],['newSubBlock'],['original']]);
		$cls_definition['addSubBlock'] = $method;
		$method = $pyjs__bind_method2('remove', function(widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			if ($p['bool'](!$p['op_eq']($p['getattr'](self, 'subBlock'), widget))) {
				return null;
			}
			$m['Element']['remove'](self, widget);
			$p['getattr'](self, 'subBlock')['parentBlock'] = null;
			self['subBlock'] = null;
			if ($p['bool']($p['getattr'](widget, 'holderSiblingUp'))) {
				$p['getattr']($p['getattr'](widget, 'holderSiblingUp'), 'argument')['enable'] = true;
			}
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('removeUpperBlock', function(previousPerformer, left, top, original) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				previousPerformer = arguments[1];
				left = arguments[2];
				top = arguments[3];
				original = arguments[4];
			}
			var args,fun;
			$p['printFunc'](['removeUpperBlock'], 1);
			self['block']['blockPad']['addBlock']($p['getattr'](self, 'block'), left, top, original);
			var $tupleassign2 = $p['__ass_unpack'](previousPerformer, 2, null);
			fun = $tupleassign2[0];
			args = $tupleassign2[1];
			return $pyjs_kwargs_call(null, fun, args, null, [{}]);
		}
	, 1, [null,null,['self'],['previousPerformer'],['left'],['top'],['original']]);
		$cls_definition['removeUpperBlock'] = $method;
		$method = $pyjs__bind_method2('getArgumentValue', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['argument']['getArgumentValue']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getArgumentValue'] = $method;
		$method = $pyjs__bind_method2('setArgumentValue', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			self['argument']['setArgumentValue'](value);
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['setArgumentValue'] = $method;
		var $bases = new Array($m['Element']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('BlockHolder', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.renderable.argument.BlockHolder */


/* end module: edu.uca.renderable.argument.BlockHolder */


/*
PYJS_DEPS: ['edu.uca.renderable.Element.Element', 'edu', 'edu.uca', 'edu.uca.renderable', 'edu.uca.renderable.Element', 'edu.uca.Workspace.getWorkspace', 'edu.uca.Workspace', 'pyjamas.DOM', 'pyjamas', 'edu.uca.util.DragElement.getDropPosition', 'edu.uca.util', 'edu.uca.util.DragElement', 'edu.uca.util.Serializable.stateChange', 'edu.uca.util.Serializable', 'edu.uca.renderable.block.MainBlock.MainBlock', 'edu.uca.renderable.block', 'edu.uca.renderable.block.MainBlock']
*/
