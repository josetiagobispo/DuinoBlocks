/* start module: edu.uca.renderable.block.MainBlock */
$pyjs['loaded_modules']['edu.uca.renderable.block.MainBlock'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.renderable.block.MainBlock']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.renderable.block.MainBlock'];
	if(typeof $pyjs['loaded_modules']['edu.uca.renderable.block'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.renderable.block']['__was_initialized__']) $p['___import___']('edu.uca.renderable.block', null);
	var $m = $pyjs['loaded_modules']['edu.uca.renderable.block.MainBlock'];
	$m['__repr__'] = function() { return '<module: edu.uca.renderable.block.MainBlock>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.renderable.block.MainBlock';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.renderable.block']['MainBlock'] = $pyjs['loaded_modules']['edu.uca.renderable.block.MainBlock'];


	$m['BlockHolder'] = $p['___import___']('edu.uca.renderable.argument.BlockHolder.BlockHolder', 'edu.uca.renderable.block', null, false);
	$m['Block'] = $p['___import___']('edu.uca.renderable.block.Block.Block', 'edu.uca.renderable.block', null, false);
	$m['StatementArgument'] = $p['___import___']('edu.uca.renderable.argument.StatementArgument.StatementArgument', 'edu.uca.renderable.block', null, false);
	$m['drawCompoundStatementBlock'] = $p['___import___']('edu.uca.renderable.block.CompoundStatementBlock.drawCompoundStatementBlock', 'edu.uca.renderable.block', null, false);
	$m['resizeCompoundStatementBlock'] = $p['___import___']('edu.uca.renderable.block.CompoundStatementBlock.resizeCompoundStatementBlock', 'edu.uca.renderable.block', null, false);
	$m['drawStatementBlock'] = $p['___import___']('edu.uca.renderable.block.StatementBlock.drawStatementBlock', 'edu.uca.renderable.block', null, false);
	$m['MainBlock'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.renderable.block.MainBlock';
		$method = $pyjs__bind_method2('__init__', function(name, color) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				color = arguments[2];
			}
			if (typeof color == 'undefined') color=arguments['callee']['__args__'][4][1];

			$m['Block']['__init__'](self, name, $p['getattr']($m['Block'], 'END_BLOCK'));
			self['mb'] = 52;
			self['setStyleAttribute']('marginBottom', $p['getattr'](self, 'mb'));
			self['height'] = 20;
			self['maxA'] = 0;
			self['qty'] = 1;
			self['color'] = color;
			$m['drawStatementBlock'](self, color);
			self['holderSiblingUp'] = $m['BlockHolder']($m['StatementArgument']($p['getattr']($m['StatementArgument'], 'UP_ARG')), self, true);
			self['tl']['append']($p['getattr'](self, 'holderSiblingUp'));
			$pyjs_kwargs_call(null, $m['drawCompoundStatementBlock'], null, null, [{'hasBn':false, 'loop':true}, self, color]);
			self['holderChild'] = $m['BlockHolder']($m['StatementArgument']($p['getattr']($m['StatementArgument'], 'CHILD_ARG'), 0), self);
			self['code']['append']($p['getattr'](self, 'holderChild'));
			self['holderChildren']['append']($p['getattr'](self, 'holderChild'));
			$m['Block']['drawBlock'](self);
			return null;
		}
	, 1, [null,null,['self'],['name'],['color', 'orange']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('resize', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['resizeCompoundStatementBlock'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['resize'] = $method;
		var $bases = new Array($m['Block']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('MainBlock', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.renderable.block.MainBlock */


/* end module: edu.uca.renderable.block.MainBlock */


/*
PYJS_DEPS: ['edu.uca.renderable.argument.BlockHolder.BlockHolder', 'edu', 'edu.uca', 'edu.uca.renderable', 'edu.uca.renderable.argument', 'edu.uca.renderable.argument.BlockHolder', 'edu.uca.renderable.block.Block.Block', 'edu.uca.renderable.block', 'edu.uca.renderable.block.Block', 'edu.uca.renderable.argument.StatementArgument.StatementArgument', 'edu.uca.renderable.argument.StatementArgument', 'edu.uca.renderable.block.CompoundStatementBlock.drawCompoundStatementBlock', 'edu.uca.renderable.block.CompoundStatementBlock', 'edu.uca.renderable.block.CompoundStatementBlock.resizeCompoundStatementBlock', 'edu.uca.renderable.block.StatementBlock.drawStatementBlock', 'edu.uca.renderable.block.StatementBlock']
*/
