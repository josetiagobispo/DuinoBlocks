/* start module: edu.uca.renderable.CreatorBlockFactory */
$pyjs['loaded_modules']['edu.uca.renderable.CreatorBlockFactory'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.renderable.CreatorBlockFactory']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.renderable.CreatorBlockFactory'];
	if(typeof $pyjs['loaded_modules']['edu.uca.renderable'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.renderable']['__was_initialized__']) $p['___import___']('edu.uca.renderable', null);
	var $m = $pyjs['loaded_modules']['edu.uca.renderable.CreatorBlockFactory'];
	$m['__repr__'] = function() { return '<module: edu.uca.renderable.CreatorBlockFactory>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.renderable.CreatorBlockFactory';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.renderable']['CreatorBlockFactory'] = $pyjs['loaded_modules']['edu.uca.renderable.CreatorBlockFactory'];


	$m['FakeStatementBlock'] = $p['___import___']('edu.uca.renderable.block.FakeBlock.FakeStatementBlock', 'edu.uca.renderable', null, false);
	$m['FakeBlockHolder'] = $p['___import___']('edu.uca.renderable.block.FakeBlock.FakeBlockHolder', 'edu.uca.renderable', null, false);
	$m['FakeNumberArgument'] = $p['___import___']('edu.uca.renderable.block.FakeBlock.FakeNumberArgument', 'edu.uca.renderable', null, false);
	$m['FakeCompoundStatementBlock'] = $p['___import___']('edu.uca.renderable.block.FakeBlock.FakeCompoundStatementBlock', 'edu.uca.renderable', null, false);
	$m['FakeBooleanArgument'] = $p['___import___']('edu.uca.renderable.block.FakeBlock.FakeBooleanArgument', 'edu.uca.renderable', null, false);
	$m['FakeMainBlock'] = $p['___import___']('edu.uca.renderable.block.FakeBlock.FakeMainBlock', 'edu.uca.renderable', null, false);
	$m['FakeBooleanBlock'] = $p['___import___']('edu.uca.renderable.block.FakeBlock.FakeBooleanBlock', 'edu.uca.renderable', null, false);
	$m['FakeDropdownNumberArgument'] = $p['___import___']('edu.uca.renderable.block.FakeBlock.FakeDropdownNumberArgument', 'edu.uca.renderable', null, false);
	$m['FakeNumberBlock'] = $p['___import___']('edu.uca.renderable.block.FakeBlock.FakeNumberBlock', 'edu.uca.renderable', null, false);
	$m['FakeStringArgument'] = $p['___import___']('edu.uca.renderable.block.FakeBlock.FakeStringArgument', 'edu.uca.renderable', null, false);
	$m['FakeStringBlock'] = $p['___import___']('edu.uca.renderable.block.FakeBlock.FakeStringBlock', 'edu.uca.renderable', null, false);
	$m['FakeDropdownBooleanArgument'] = $p['___import___']('edu.uca.renderable.block.FakeBlock.FakeDropdownBooleanArgument', 'edu.uca.renderable', null, false);
	$m['FakeComponentBlock'] = $p['___import___']('edu.uca.renderable.block.FakeBlock.FakeComponentBlock', 'edu.uca.renderable', null, false);
	$m['FakeDropdownPin'] = $p['___import___']('edu.uca.renderable.block.FakeBlock.FakeDropdownPin', 'edu.uca.renderable', null, false);
	$m['FakeDropdownStringArgument'] = $p['___import___']('edu.uca.renderable.block.FakeBlock.FakeDropdownStringArgument', 'edu.uca.renderable', null, false);
	$m['StatementBlock'] = $p['___import___']('edu.uca.renderable.block.StatementBlock.StatementBlock', 'edu.uca.renderable', null, false);
	$m['NumberArgument'] = $p['___import___']('edu.uca.renderable.argument.NumberArgument.NumberArgument', 'edu.uca.renderable', null, false);
	$m['BlockHolder'] = $p['___import___']('edu.uca.renderable.argument.BlockHolder.BlockHolder', 'edu.uca.renderable', null, false);
	$m['CompoundStatementBlock'] = $p['___import___']('edu.uca.renderable.block.CompoundStatementBlock.CompoundStatementBlock', 'edu.uca.renderable', null, false);
	$m['BooleanArgument'] = $p['___import___']('edu.uca.renderable.argument.BooleanArgument.BooleanArgument', 'edu.uca.renderable', null, false);
	$m['MainBlock'] = $p['___import___']('edu.uca.renderable.block.MainBlock.MainBlock', 'edu.uca.renderable', null, false);
	$m['BooleanBlock'] = $p['___import___']('edu.uca.renderable.block.BooleanBlock.BooleanBlock', 'edu.uca.renderable', null, false);
	$m['DropdownNumberArgument'] = $p['___import___']('edu.uca.renderable.argument.DropdownNumberArgument.DropdownNumberArgument', 'edu.uca.renderable', null, false);
	$m['NumberBlock'] = $p['___import___']('edu.uca.renderable.block.NumberBlock.NumberBlock', 'edu.uca.renderable', null, false);
	$m['StringArgument'] = $p['___import___']('edu.uca.renderable.argument.StringArgument.StringArgument', 'edu.uca.renderable', null, false);
	$m['StringBlock'] = $p['___import___']('edu.uca.renderable.block.StringBlock.StringBlock', 'edu.uca.renderable', null, false);
	$m['DropdownBooleanArgument'] = $p['___import___']('edu.uca.renderable.argument.DropdownBooleanArgument.DropdownBooleanArgument', 'edu.uca.renderable', null, false);
	$m['HatBlock'] = $p['___import___']('edu.uca.renderable.block.HatBlock.HatBlock', 'edu.uca.renderable', null, false);
	$m['ComponentBlock'] = $p['___import___']('edu.uca.renderable.hardware.ComponentBlock.ComponentBlock', 'edu.uca.renderable', null, false);
	$m['DropdownPin'] = $p['___import___']('edu.uca.renderable.hardware.DropdownPin.DropdownPin', 'edu.uca.renderable', null, false);
	$m['DropdownStringArgument'] = $p['___import___']('edu.uca.renderable.argument.DropdownStringArgument.DropdownStringArgument', 'edu.uca.renderable', null, false);
	$m['createStatementBlock'] = function(off, name, color) {

		if ($p['bool'](off)) {
			return $m['FakeStatementBlock'](name, color);
		}
		else {
			return $m['StatementBlock'](name, color);
		}
		return null;
	};
	$m['createStatementBlock']['__name__'] = 'createStatementBlock';

	$m['createStatementBlock']['__bind_type__'] = 0;
	$m['createStatementBlock']['__args__'] = [null,null,['off'],['name'],['color']];
	$m['createCompoundStatementBlock'] = function(off, name, qty, color, loop) {

		if ($p['bool'](off)) {
			return $m['FakeCompoundStatementBlock'](name, qty, color, loop);
		}
		else {
			return $m['CompoundStatementBlock'](name, qty, color, loop);
		}
		return null;
	};
	$m['createCompoundStatementBlock']['__name__'] = 'createCompoundStatementBlock';

	$m['createCompoundStatementBlock']['__bind_type__'] = 0;
	$m['createCompoundStatementBlock']['__args__'] = [null,null,['off'],['name'],['qty'],['color'],['loop']];
	$m['createMainBlock'] = function(off, name) {

		if ($p['bool'](off)) {
			return $m['FakeMainBlock'](name);
		}
		else {
			return $m['MainBlock'](name);
		}
		return null;
	};
	$m['createMainBlock']['__name__'] = 'createMainBlock';

	$m['createMainBlock']['__bind_type__'] = 0;
	$m['createMainBlock']['__args__'] = [null,null,['off'],['name']];
	$m['createHatBlock'] = function(off, name, color) {

		if ($p['bool'](off)) {
			return null;
		}
		else {
			return $m['HatBlock'](name, color);
		}
		return null;
	};
	$m['createHatBlock']['__name__'] = 'createHatBlock';

	$m['createHatBlock']['__bind_type__'] = 0;
	$m['createHatBlock']['__args__'] = [null,null,['off'],['name'],['color']];
	$m['createBooleanBlock'] = function(off, name, color) {

		if ($p['bool'](off)) {
			return $m['FakeBooleanBlock'](name, color);
		}
		else {
			return $m['BooleanBlock'](name, color);
		}
		return null;
	};
	$m['createBooleanBlock']['__name__'] = 'createBooleanBlock';

	$m['createBooleanBlock']['__bind_type__'] = 0;
	$m['createBooleanBlock']['__args__'] = [null,null,['off'],['name'],['color']];
	$m['createNumberBlock'] = function(off, name, color) {

		if ($p['bool'](off)) {
			return $m['FakeNumberBlock'](name, color);
		}
		else {
			return $m['NumberBlock'](name, color);
		}
		return null;
	};
	$m['createNumberBlock']['__name__'] = 'createNumberBlock';

	$m['createNumberBlock']['__bind_type__'] = 0;
	$m['createNumberBlock']['__args__'] = [null,null,['off'],['name'],['color']];
	$m['createStringBlock'] = function(off, name, color) {

		if ($p['bool'](off)) {
			return $m['FakeStringBlock'](name, color);
		}
		else {
			return $m['StringBlock'](name, color);
		}
		return null;
	};
	$m['createStringBlock']['__name__'] = 'createStringBlock';

	$m['createStringBlock']['__bind_type__'] = 0;
	$m['createStringBlock']['__args__'] = [null,null,['off'],['name'],['color']];
	$m['createNumberBlockHolder'] = function(off, block) {

		if ($p['bool'](off)) {
			return $m['FakeBlockHolder']($m['FakeNumberArgument'](), block);
		}
		else {
			return $m['BlockHolder']($m['NumberArgument'](block), block);
		}
		return null;
	};
	$m['createNumberBlockHolder']['__name__'] = 'createNumberBlockHolder';

	$m['createNumberBlockHolder']['__bind_type__'] = 0;
	$m['createNumberBlockHolder']['__args__'] = [null,null,['off'],['block']];
	$m['createBooleanBlockHolder'] = function(off, block, color) {

		if ($p['bool'](off)) {
			return $m['FakeBlockHolder']($m['FakeBooleanArgument'](), block);
		}
		else {
			return $m['BlockHolder']($m['BooleanArgument'](), block);
		}
		return null;
	};
	$m['createBooleanBlockHolder']['__name__'] = 'createBooleanBlockHolder';

	$m['createBooleanBlockHolder']['__bind_type__'] = 0;
	$m['createBooleanBlockHolder']['__args__'] = [null,null,['off'],['block'],['color']];
	$m['createStringBlockHolder'] = function(off, block) {

		if ($p['bool'](off)) {
			return $m['FakeBlockHolder']($m['FakeStringArgument'](), block);
		}
		else {
			return $m['BlockHolder']($m['StringArgument'](block), block);
		}
		return null;
	};
	$m['createStringBlockHolder']['__name__'] = 'createStringBlockHolder';

	$m['createStringBlockHolder']['__bind_type__'] = 0;
	$m['createStringBlockHolder']['__args__'] = [null,null,['off'],['block']];
	$m['createDropdownNumberBlockHolder'] = function(off, pins, block) {

		if ($p['bool'](off)) {
			return $m['FakeBlockHolder']($m['FakeDropdownNumberArgument'](pins), block);
		}
		else {
			return $m['BlockHolder']($m['DropdownNumberArgument'](pins, block), block);
		}
		return null;
	};
	$m['createDropdownNumberBlockHolder']['__name__'] = 'createDropdownNumberBlockHolder';

	$m['createDropdownNumberBlockHolder']['__bind_type__'] = 0;
	$m['createDropdownNumberBlockHolder']['__args__'] = [null,null,['off'],['pins'],['block']];
	$m['createDropdownStringBlockHolder'] = function(off, pins, block) {

		if ($p['bool'](off)) {
			return $m['FakeBlockHolder']($m['FakeDropdownStringArgument'](pins), block);
		}
		else {
			return $m['BlockHolder']($m['DropdownStringArgument'](pins, block), block);
		}
		return null;
	};
	$m['createDropdownStringBlockHolder']['__name__'] = 'createDropdownStringBlockHolder';

	$m['createDropdownStringBlockHolder']['__bind_type__'] = 0;
	$m['createDropdownStringBlockHolder']['__args__'] = [null,null,['off'],['pins'],['block']];
	$m['createDropdownBooleanBlockHolder'] = function(off, pins, block) {

		if ($p['bool'](off)) {
			return $m['FakeBlockHolder']($m['FakeDropdownBooleanArgument'](pins), block);
		}
		else {
			return $m['BlockHolder']($m['DropdownBooleanArgument'](pins, block), block);
		}
		return null;
	};
	$m['createDropdownBooleanBlockHolder']['__name__'] = 'createDropdownBooleanBlockHolder';

	$m['createDropdownBooleanBlockHolder']['__bind_type__'] = 0;
	$m['createDropdownBooleanBlockHolder']['__args__'] = [null,null,['off'],['pins'],['block']];
	$m['createComponentBlock'] = function(off, name, text, mode, listBlockName) {

		if ($p['bool'](off)) {
			return $m['FakeComponentBlock'](name, text, mode, listBlockName);
		}
		else {
			return $m['ComponentBlock'](name, text, mode, listBlockName);
		}
		return null;
	};
	$m['createComponentBlock']['__name__'] = 'createComponentBlock';

	$m['createComponentBlock']['__bind_type__'] = 0;
	$m['createComponentBlock']['__args__'] = [null,null,['off'],['name'],['text'],['mode'],['listBlockName']];
	$m['createDropdownPin'] = function(off, component, mode, $$label) {
		var $$label;
		if ($p['bool'](off)) {
			return $pyjs_kwargs_call(null, $m['FakeDropdownPin'], null, null, [{'StyleName':'dropdown_btn'}, component, mode, $$label]);
		}
		else {
			return $pyjs_kwargs_call(null, $m['DropdownPin'], null, null, [{'StyleName':'dropdown_btn'}, component, mode, $$label]);
		}
		return null;
	};
	$m['createDropdownPin']['__name__'] = 'createDropdownPin';

	$m['createDropdownPin']['__bind_type__'] = 0;
	$m['createDropdownPin']['__args__'] = [null,null,['off'],['component'],['mode'],['$$label']];
	return this;
}; /* end edu.uca.renderable.CreatorBlockFactory */


/* end module: edu.uca.renderable.CreatorBlockFactory */


/*
PYJS_DEPS: ['edu.uca.renderable.block.FakeBlock.FakeStatementBlock', 'edu', 'edu.uca', 'edu.uca.renderable', 'edu.uca.renderable.block', 'edu.uca.renderable.block.FakeBlock', 'edu.uca.renderable.block.FakeBlock.FakeBlockHolder', 'edu.uca.renderable.block.FakeBlock.FakeNumberArgument', 'edu.uca.renderable.block.FakeBlock.FakeCompoundStatementBlock', 'edu.uca.renderable.block.FakeBlock.FakeBooleanArgument', 'edu.uca.renderable.block.FakeBlock.FakeMainBlock', 'edu.uca.renderable.block.FakeBlock.FakeBooleanBlock', 'edu.uca.renderable.block.FakeBlock.FakeDropdownNumberArgument', 'edu.uca.renderable.block.FakeBlock.FakeNumberBlock', 'edu.uca.renderable.block.FakeBlock.FakeStringArgument', 'edu.uca.renderable.block.FakeBlock.FakeStringBlock', 'edu.uca.renderable.block.FakeBlock.FakeDropdownBooleanArgument', 'edu.uca.renderable.block.FakeBlock.FakeComponentBlock', 'edu.uca.renderable.block.FakeBlock.FakeDropdownPin', 'edu.uca.renderable.block.FakeBlock.FakeDropdownStringArgument', 'edu.uca.renderable.block.StatementBlock.StatementBlock', 'edu.uca.renderable.block.StatementBlock', 'edu.uca.renderable.argument.NumberArgument.NumberArgument', 'edu.uca.renderable.argument', 'edu.uca.renderable.argument.NumberArgument', 'edu.uca.renderable.argument.BlockHolder.BlockHolder', 'edu.uca.renderable.argument.BlockHolder', 'edu.uca.renderable.block.CompoundStatementBlock.CompoundStatementBlock', 'edu.uca.renderable.block.CompoundStatementBlock', 'edu.uca.renderable.argument.BooleanArgument.BooleanArgument', 'edu.uca.renderable.argument.BooleanArgument', 'edu.uca.renderable.block.MainBlock.MainBlock', 'edu.uca.renderable.block.MainBlock', 'edu.uca.renderable.block.BooleanBlock.BooleanBlock', 'edu.uca.renderable.block.BooleanBlock', 'edu.uca.renderable.argument.DropdownNumberArgument.DropdownNumberArgument', 'edu.uca.renderable.argument.DropdownNumberArgument', 'edu.uca.renderable.block.NumberBlock.NumberBlock', 'edu.uca.renderable.block.NumberBlock', 'edu.uca.renderable.argument.StringArgument.StringArgument', 'edu.uca.renderable.argument.StringArgument', 'edu.uca.renderable.block.StringBlock.StringBlock', 'edu.uca.renderable.block.StringBlock', 'edu.uca.renderable.argument.DropdownBooleanArgument.DropdownBooleanArgument', 'edu.uca.renderable.argument.DropdownBooleanArgument', 'edu.uca.renderable.block.HatBlock.HatBlock', 'edu.uca.renderable.block.HatBlock', 'edu.uca.renderable.hardware.ComponentBlock.ComponentBlock', 'edu.uca.renderable.hardware', 'edu.uca.renderable.hardware.ComponentBlock', 'edu.uca.renderable.hardware.DropdownPin.DropdownPin', 'edu.uca.renderable.hardware.DropdownPin', 'edu.uca.renderable.argument.DropdownStringArgument.DropdownStringArgument', 'edu.uca.renderable.argument.DropdownStringArgument']
*/
