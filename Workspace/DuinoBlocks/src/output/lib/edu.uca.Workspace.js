/* start module: edu.uca.Workspace */
$pyjs['loaded_modules']['edu.uca.Workspace'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.Workspace']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.Workspace'];
	if(typeof $pyjs['loaded_modules']['edu.uca'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca']['__was_initialized__']) $p['___import___']('edu.uca', null);
	var $m = $pyjs['loaded_modules']['edu.uca.Workspace'];
	$m['__repr__'] = function() { return '<module: edu.uca.Workspace>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.Workspace';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca']['Workspace'] = $pyjs['loaded_modules']['edu.uca.Workspace'];


	$m['Audio'] = $p['___import___']('pyjamas.media.Audio.Audio', 'edu.uca', null, false);
	$m['soundIn'] = $m['Audio']('../sounds/in.wav');
	$m['workspace'] = null;
	$m['blockList'] = null;
	$m['blocksPad'] = null;
	$m['hardwaresList'] = null;
	$m['harwaresPad'] = null;
	$m['codePanel'] = null;
	$m['headerPanel'] = null;
	$m['movingBlock'] = null;
	$m['mainBlock'] = null;
	$m['blocks'] = $p['list']([]);
	$m['hardwares'] = $p['dict']([]);
	$m['countComponents'] = $p['dict']([]);
	$m['createdBlocks'] = $p['dict']([]);
	$m['vars'] = $p['dict']([]);
	$m['logicVars'] = $p['list']([]);
	$m['numericVars'] = $p['list']([]);
	$m['alphaNumericVars'] = $p['list']([]);
	$m['states'] = $p['list']([]);
	$m['stateIndex'] = (typeof ($usub1=1)=='number'?
		-$usub1:
		$p['op_usub']($usub1));
	$m['stateMax'] = 6;
	$m['getWorkspace'] = function() {

		if ($p['bool'](!$p['bool'](($m['workspace'] === null)))) {
			return $m['workspace'];
		}
		$m['workspace'] = (typeof Workspace == "undefined"?$m['Workspace']:Workspace)();
		return $m['workspace'];
	};
	$m['getWorkspace']['__name__'] = 'getWorkspace';

	$m['getWorkspace']['__bind_type__'] = 0;
	$m['getWorkspace']['__args__'] = [null,null];
	$m['Workspace'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.Workspace';
		$method = $pyjs__bind_method2('reload', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var popup,$iter1_nextval,$iter1_type,$iter1_iter,$iter1_array,$iter1_idx;
			self['setMainBlock'](null);
			self['setMovingBlock'](null);
			self['clearBlocks']();
			$m['blocksPad']['reload']();
			$m['hardwaresPad']['reload']();
			$m['blockList']['reload']();
$doc.defaultView.editor.getSession().setValue();
			$iter1_iter = $m['createdBlocks']['values']();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				popup = $iter1_nextval['$nextval'];
				popup['hide']();
			}
			$m['createdBlocks']['clear']();
			$m['countComponents']['clear']();
			$m['hardwares']['clear']();
			while ($p['bool'](($p['cmp']($p['len']($m['alphaNumericVars']), 0) == 1))) {
				$m['alphaNumericVars']['remove']($m['alphaNumericVars']['__getitem__'](0));
			}
			while ($p['bool'](($p['cmp']($p['len']($m['numericVars']), 0) == 1))) {
				$m['numericVars']['remove']($m['numericVars']['__getitem__'](0));
			}
			while ($p['bool'](($p['cmp']($p['len']($m['logicVars']), 0) == 1))) {
				$m['logicVars']['remove']($m['logicVars']['__getitem__'](0));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['reload'] = $method;
		$method = $pyjs__bind_method2('getBlocks', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['blocks'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getBlocks'] = $method;
		$method = $pyjs__bind_method2('clearBlocks', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['blocks'] = $p['list']([]);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clearBlocks'] = $method;
		$method = $pyjs__bind_method2('addBlock', function(b) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				b = arguments[1];
			}

			$m['blocks']['append'](b);
			return null;
		}
	, 1, [null,null,['self'],['b']]);
		$cls_definition['addBlock'] = $method;
		$method = $pyjs__bind_method2('removeBlock', function(b) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				b = arguments[1];
			}

			$m['blocks']['remove'](b);
			return null;
		}
	, 1, [null,null,['self'],['b']]);
		$cls_definition['removeBlock'] = $method;
		$method = $pyjs__bind_method2('setBlockList', function(bl) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				bl = arguments[1];
			}

			$m['blockList'] = bl;
			return null;
		}
	, 1, [null,null,['self'],['bl']]);
		$cls_definition['setBlockList'] = $method;
		$method = $pyjs__bind_method2('getBlockList', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['blockList'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getBlockList'] = $method;
		$method = $pyjs__bind_method2('setBlocksPad', function(bp) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				bp = arguments[1];
			}

			$m['blocksPad'] = bp;
			return null;
		}
	, 1, [null,null,['self'],['bp']]);
		$cls_definition['setBlocksPad'] = $method;
		$method = $pyjs__bind_method2('getBlocksPad', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['blocksPad'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getBlocksPad'] = $method;
		$method = $pyjs__bind_method2('setHardwaresList', function(hl) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				hl = arguments[1];
			}

			$m['hardwaresList'] = hl;
			return null;
		}
	, 1, [null,null,['self'],['hl']]);
		$cls_definition['setHardwaresList'] = $method;
		$method = $pyjs__bind_method2('getHardwaresList', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['hardwaresList'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHardwaresList'] = $method;
		$method = $pyjs__bind_method2('setHardwaresPad', function(hp) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				hp = arguments[1];
			}

			$m['hardwaresPad'] = hp;
			return null;
		}
	, 1, [null,null,['self'],['hp']]);
		$cls_definition['setHardwaresPad'] = $method;
		$method = $pyjs__bind_method2('getHardwaresPad', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['hardwaresPad'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHardwaresPad'] = $method;
		$method = $pyjs__bind_method2('setMovingBlock', function(mb) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				mb = arguments[1];
			}

			$m['movingBlock'] = mb;
			return null;
		}
	, 1, [null,null,['self'],['mb']]);
		$cls_definition['setMovingBlock'] = $method;
		$method = $pyjs__bind_method2('getMovingBlock', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['movingBlock'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getMovingBlock'] = $method;
		$method = $pyjs__bind_method2('getMainBlock', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['mainBlock'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getMainBlock'] = $method;
		$method = $pyjs__bind_method2('setMainBlock', function(mb) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				mb = arguments[1];
			}

			$m['mainBlock'] = mb;
			return null;
		}
	, 1, [null,null,['self'],['mb']]);
		$cls_definition['setMainBlock'] = $method;
		$method = $pyjs__bind_method2('getCodePanel', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['codePanel'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getCodePanel'] = $method;
		$method = $pyjs__bind_method2('setCodePanel', function(cp) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cp = arguments[1];
			}

			$m['codePanel'] = cp;
			return null;
		}
	, 1, [null,null,['self'],['cp']]);
		$cls_definition['setCodePanel'] = $method;
		$method = $pyjs__bind_method2('getHeaderPanel', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['headerPanel'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHeaderPanel'] = $method;
		$method = $pyjs__bind_method2('setHeaderPanel', function(hp) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				hp = arguments[1];
			}

			$m['headerPanel'] = hp;
			return null;
		}
	, 1, [null,null,['self'],['hp']]);
		$cls_definition['setHeaderPanel'] = $method;
		$method = $pyjs__bind_method2('cloneBlock', function(block) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
			}
			var $and1,ArduinoBlocks,$and2,clone;
			ArduinoBlocks = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks', 'edu.uca', null, false);
			if ($p['bool']($p['getattr'](block, 'custom'))) {
				clone = $p['getattr'](ArduinoBlocks, $p['getattr'](block, '$$name'))($p['getattr'](block, 'varName'), $p['getattr'](block, 'color'));
			}
			else {
				clone = $p['getattr'](ArduinoBlocks, $p['getattr'](block, '$$name'))();
			}
			if ($p['bool'](($p['bool']($and1=($p['getattr'](block, 'varName') !== ''))?!$p['bool']($p['getattr'](block, 'custom')):$and1))) {
				clone['dropDownVarName']['setValue']($p['getattr'](block, 'varName'));
			}
			clone['changeTexts']();
			return clone;
		}
	, 1, [null,null,['self'],['block']]);
		$cls_definition['cloneBlock'] = $method;
		$method = $pyjs__bind_method2('cloneStack', function(stack) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				stack = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['stack']]);
		$cls_definition['cloneStack'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Workspace', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.Workspace */


/* end module: edu.uca.Workspace */


/*
PYJS_DEPS: ['pyjamas.media.Audio.Audio', 'pyjamas', 'pyjamas.media', 'pyjamas.media.Audio', 'edu.uca.renderable.block.ArduinoBlocks', 'edu', 'edu.uca', 'edu.uca.renderable', 'edu.uca.renderable.block']
*/
