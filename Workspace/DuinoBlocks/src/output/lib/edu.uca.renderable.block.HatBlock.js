/* start module: edu.uca.renderable.block.HatBlock */
$pyjs['loaded_modules']['edu.uca.renderable.block.HatBlock'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.renderable.block.HatBlock']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.renderable.block.HatBlock'];
	if(typeof $pyjs['loaded_modules']['edu.uca.renderable.block'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.renderable.block']['__was_initialized__']) $p['___import___']('edu.uca.renderable.block', null);
	var $m = $pyjs['loaded_modules']['edu.uca.renderable.block.HatBlock'];
	$m['__repr__'] = function() { return '<module: edu.uca.renderable.block.HatBlock>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.renderable.block.HatBlock';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.renderable.block']['HatBlock'] = $pyjs['loaded_modules']['edu.uca.renderable.block.HatBlock'];


	$m['BlockHolder'] = $p['___import___']('edu.uca.renderable.argument.BlockHolder.BlockHolder', 'edu.uca.renderable.block', null, false);
	$m['StatementArgument'] = $p['___import___']('edu.uca.renderable.argument.StatementArgument.StatementArgument', 'edu.uca.renderable.block', null, false);
	$m['drawStatementBlock'] = $p['___import___']('edu.uca.renderable.block.StatementBlock.drawStatementBlock', 'edu.uca.renderable.block', null, false);
	$m['Block'] = $p['___import___']('edu.uca.renderable.block.Block.Block', 'edu.uca.renderable.block', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.renderable.block', null, false);
	$m['HatBlock'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.renderable.block.HatBlock';
		$method = $pyjs__bind_method2('__init__', function(name, color) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				color = arguments[2];
			}
			if (typeof color == 'undefined') color=arguments['callee']['__args__'][4][1];

			$pyjs_kwargs_call($m['Block'], '__init__', null, null, [{'StyleName':'hat'}, self, name, $p['getattr']($m['Block'], 'STATEMENT_BLOCK')]);
			self['color'] = color;
			$m['drawStatementBlock'](self, color);
			self['holderSiblingDown'] = $m['BlockHolder']($m['StatementArgument']($p['getattr']($m['StatementArgument'], 'DOWN_ARG')), self);
			self['bl']['append']($p['getattr'](self, 'holderSiblingDown'));
			$m['Block']['drawBlock'](self);
			$m['DOM']['setAttribute'](self['getElement'](), 'draggable', false);
			return null;
		}
	, 1, [null,null,['self'],['name'],['color', 'orange']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['Block']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('HatBlock', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.renderable.block.HatBlock */


/* end module: edu.uca.renderable.block.HatBlock */


/*
PYJS_DEPS: ['edu.uca.renderable.argument.BlockHolder.BlockHolder', 'edu', 'edu.uca', 'edu.uca.renderable', 'edu.uca.renderable.argument', 'edu.uca.renderable.argument.BlockHolder', 'edu.uca.renderable.argument.StatementArgument.StatementArgument', 'edu.uca.renderable.argument.StatementArgument', 'edu.uca.renderable.block.StatementBlock.drawStatementBlock', 'edu.uca.renderable.block', 'edu.uca.renderable.block.StatementBlock', 'edu.uca.renderable.block.Block.Block', 'edu.uca.renderable.block.Block', 'pyjamas.DOM', 'pyjamas']
*/
