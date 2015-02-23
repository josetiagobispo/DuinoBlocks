/* start module: edu.uca.renderable.block.StringBlock */
$pyjs['loaded_modules']['edu.uca.renderable.block.StringBlock'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.renderable.block.StringBlock']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.renderable.block.StringBlock'];
	if(typeof $pyjs['loaded_modules']['edu.uca.renderable.block'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.renderable.block']['__was_initialized__']) $p['___import___']('edu.uca.renderable.block', null);
	var $m = $pyjs['loaded_modules']['edu.uca.renderable.block.StringBlock'];
	$m['__repr__'] = function() { return '<module: edu.uca.renderable.block.StringBlock>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.renderable.block.StringBlock';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.renderable.block']['StringBlock'] = $pyjs['loaded_modules']['edu.uca.renderable.block.StringBlock'];


	$m['Block'] = $p['___import___']('edu.uca.renderable.block.Block.Block', 'edu.uca.renderable.block', null, false);
	$m['drawNumberBlock'] = $p['___import___']('edu.uca.renderable.block.NumberBlock.drawNumberBlock', 'edu.uca.renderable.block', null, false);
	$m['resizeNumberBlock'] = $p['___import___']('edu.uca.renderable.block.NumberBlock.resizeNumberBlock', 'edu.uca.renderable.block', null, false);
	$m['StringBlock'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.renderable.block.StringBlock';
		$method = $pyjs__bind_method2('__init__', function(name, color) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				color = arguments[2];
			}
			if (typeof color == 'undefined') color=arguments['callee']['__args__'][4][1];

			$m['Block']['__init__'](self, name, $p['getattr']($m['Block'], 'STRING_BLOCK'));
			self['color'] = color;
			$m['drawNumberBlock'](self, color, '');
			$m['Block']['drawBlock'](self);
			$m['resizeNumberBlock'](self);
			return null;
		}
	, 1, [null,null,['self'],['name'],['color', 'green']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('resize', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['resizeNumberBlock'](self);
			$m['Block']['resize'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['resize'] = $method;
		var $bases = new Array($m['Block']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('StringBlock', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.renderable.block.StringBlock */


/* end module: edu.uca.renderable.block.StringBlock */


/*
PYJS_DEPS: ['edu.uca.renderable.block.Block.Block', 'edu', 'edu.uca', 'edu.uca.renderable', 'edu.uca.renderable.block', 'edu.uca.renderable.block.Block', 'edu.uca.renderable.block.NumberBlock.drawNumberBlock', 'edu.uca.renderable.block.NumberBlock', 'edu.uca.renderable.block.NumberBlock.resizeNumberBlock']
*/
