/* start module: edu.uca.renderable.argument.StatementArgument */
$pyjs['loaded_modules']['edu.uca.renderable.argument.StatementArgument'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.renderable.argument.StatementArgument']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.renderable.argument.StatementArgument'];
	if(typeof $pyjs['loaded_modules']['edu.uca.renderable.argument'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.renderable.argument']['__was_initialized__']) $p['___import___']('edu.uca.renderable.argument', null);
	var $m = $pyjs['loaded_modules']['edu.uca.renderable.argument.StatementArgument'];
	$m['__repr__'] = function() { return '<module: edu.uca.renderable.argument.StatementArgument>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.renderable.argument.StatementArgument';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.renderable.argument']['StatementArgument'] = $pyjs['loaded_modules']['edu.uca.renderable.argument.StatementArgument'];


	$m['Argument'] = $p['___import___']('edu.uca.renderable.argument.Argument.Argument', 'edu.uca.renderable.argument', null, false);
	$m['Block'] = $p['___import___']('edu.uca.renderable.block.Block.Block', 'edu.uca.renderable.argument', null, false);
	$m['getWorkspace'] = $p['___import___']('edu.uca.Workspace.getWorkspace', 'edu.uca.renderable.argument', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.renderable.argument', null, false);
	$m['StatementArgument'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.renderable.argument.StatementArgument';
		$cls_definition['UP_ARG'] = 'UpStatementBlock';
		$cls_definition['CHILD_ARG'] = 'ChildStatementBlock';
		$cls_definition['DOWN_ARG'] = 'DownStatementBlock';
		$method = $pyjs__bind_method2('__init__', function(statementArgumentType, index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				statementArgumentType = arguments[1];
				index = arguments[2];
			}
			if (typeof index == 'undefined') index=arguments['callee']['__args__'][4][1];

			$pyjs_kwargs_call($m['Argument'], '__init__', null, null, [{'StyleName':'highlight'}, self, $p['list']([$p['getattr']($m['Block'], 'STATEMENT_BLOCK')])]);
			if ($p['bool']($p['op_eq'](statementArgumentType, $p['getattr'](self, 'DOWN_ARG')))) {
				self['accepts']['append']($p['getattr']($m['Block'], 'END_BLOCK'));
			}
			self['statementArgumentType'] = statementArgumentType;
			self['index'] = index;
			$m['getWorkspace']()['getBlocksPad']()['addBlockDragListener'](self);
			$m['getWorkspace']()['getBlockList']()['addBlockDragListener'](self);
			return null;
		}
	, 1, [null,null,['self'],['statementArgumentType'],['index', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onBlockDragStart', function(event, block) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
				block = arguments[2];
			}
			var $or1,$or2,$and1,$and3,$and4,current,$and2,before;
			if ($p['bool'](($p['bool']($and1=!$p['bool']($p['getattr']($p['getattr'](self, 'block'), 'original')))?($p['bool']($and2=$p['getattr'](self, 'enable'))?($p['bool']($and3=!$p['bool']($m['DOM']['isOrHasChild'](block['getElement'](), self['getElement']())))?$p['getattr'](self, 'accepts')['__contains__']($p['getattr'](block['getLastBlock'](), 'blockType')):$and3):$and2):$and1))) {
				if ($p['bool'](($p['bool']($or1=!$p['op_eq']($p['getattr'](block['getLastBlock'](), 'blockType'), $p['getattr']($m['Block'], 'END_BLOCK')))?$or1:$p['op_eq'](self['block']['getAfterBlock'](), null)))) {
					if ($p['bool']($p['op_eq']($p['getattr'](block['getLastBlock'](), 'blockType'), $p['getattr']($m['Block'], 'END_BLOCK')))) {
						current = $p['getattr'](self, 'block');
						before = self['block']['getBeforeBlock']();
						while ($p['bool']((before !== null))) {
							if ($p['bool'](!$p['op_eq'](before['getAfterBlock'](), current))) {
								return null;
							}
							current = before;
							before = before['getBeforeBlock']();
						}
					}
					self['setStyleAttribute']('display', 'block');
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['event'],['block']]);
		$cls_definition['onBlockDragStart'] = $method;
		$method = $pyjs__bind_method2('onBlockDragEnd', function(event, block) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
				block = arguments[2];
			}

			self['setStyleAttribute']('display', 'none');
			return null;
		}
	, 1, [null,null,['self'],['event'],['block']]);
		$cls_definition['onBlockDragEnd'] = $method;
		var $bases = new Array($m['Argument']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('StatementArgument', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.renderable.argument.StatementArgument */


/* end module: edu.uca.renderable.argument.StatementArgument */


/*
PYJS_DEPS: ['edu.uca.renderable.argument.Argument.Argument', 'edu', 'edu.uca', 'edu.uca.renderable', 'edu.uca.renderable.argument', 'edu.uca.renderable.argument.Argument', 'edu.uca.renderable.block.Block.Block', 'edu.uca.renderable.block', 'edu.uca.renderable.block.Block', 'edu.uca.Workspace.getWorkspace', 'edu.uca.Workspace', 'pyjamas.DOM', 'pyjamas']
*/
