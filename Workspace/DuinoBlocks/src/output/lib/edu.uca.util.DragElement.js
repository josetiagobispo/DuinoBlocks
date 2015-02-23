/* start module: edu.uca.util.DragElement */
$pyjs['loaded_modules']['edu.uca.util.DragElement'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.util.DragElement']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.util.DragElement'];
	if(typeof $pyjs['loaded_modules']['edu.uca.util'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.util']['__was_initialized__']) $p['___import___']('edu.uca.util', null);
	var $m = $pyjs['loaded_modules']['edu.uca.util.DragElement'];
	$m['__repr__'] = function() { return '<module: edu.uca.util.DragElement>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.util.DragElement';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.util']['DragElement'] = $pyjs['loaded_modules']['edu.uca.util.DragElement'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.util', null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', 'edu.uca.util', null, false);
	$m['json'] = $p['___import___']('json', 'edu.uca.util');
	$m['setDragStartPosition'] = function(event) {
		var $sub8,Block,$sub3,$sub2,$sub1,$sub7,$sub6,$sub5,clientX,clientY,saveComponent,dt,ComponentBlock,target,saveStackBlock,package,absx,absy,getWorkspace,$add2,$add3,$add1,$add4,$sub4;
		dt = $p['getattr'](event, 'dataTransfer');
		target = $m['DOM']['eventGetTarget'](event);
		var $tupleassign1 = $p['__ass_unpack']($p['tuple']([$p['getattr'](event, 'clientX'), $p['getattr'](event, 'clientY')]), 2, null);
		clientX = $tupleassign1[0];
		clientY = $tupleassign1[1];
		var $tupleassign2 = $p['__ass_unpack']($p['tuple']([$p['__op_add']($add1=clientX,$add2=$m['Window']['getScrollLeft']()), $p['__op_add']($add3=clientY,$add4=$m['Window']['getScrollTop']())]), 2, null);
		absx = $tupleassign2[0];
		absy = $tupleassign2[1];
		Block = $p['___import___']('edu.uca.renderable.block.Block.Block', 'edu.uca.util', null, false);
		saveStackBlock = $p['___import___']('edu.uca.util.Serializable.saveStackBlock', 'edu.uca.util', null, false);
		getWorkspace = $p['___import___']('edu.uca.Workspace.getWorkspace', 'edu.uca.util', null, false);
		ComponentBlock = $p['___import___']('edu.uca.renderable.hardware.ComponentBlock.ComponentBlock', 'edu.uca.util', null, false);
		saveComponent = $p['___import___']('edu.uca.util.Serializable.saveComponent', 'edu.uca.util', null, false);
		if ($p['bool']($p['isinstance'](getWorkspace()['getMovingBlock'](), ComponentBlock))) {
			package = $m['json']['dumps']($p['dict']([['offsetX', $p['__op_sub']($sub1=absx,$sub2=$m['DOM']['getAbsoluteLeft'](target))], ['offsetY', $p['__op_sub']($sub3=absy,$sub4=$m['DOM']['getAbsoluteTop'](target))], ['componetHardware', saveComponent(getWorkspace()['getMovingBlock']())]]));
		}
		else if ($p['bool']($p['isinstance'](getWorkspace()['getMovingBlock'](), Block))) {
			package = $m['json']['dumps']($p['dict']([['offsetX', $p['__op_sub']($sub5=absx,$sub6=$m['DOM']['getAbsoluteLeft'](target))], ['offsetY', $p['__op_sub']($sub7=absy,$sub8=$m['DOM']['getAbsoluteTop'](target))], ['stackBlock', saveStackBlock(getWorkspace()['getMovingBlock']())]]));
		}
		dt['setData']('text', package);
		dt['allowedEffects'] = 'copy';
		return null;
	};
	$m['setDragStartPosition']['__name__'] = 'setDragStartPosition';

	$m['setDragStartPosition']['__bind_type__'] = 0;
	$m['setDragStartPosition']['__args__'] = [null,null,['event']];
	$m['getDropPosition'] = function(target, event) {
		var $sub20,text,al,at,$sub9,$sub19,$sub18,$sub13,$sub12,$sub11,$sub10,$sub17,$sub16,$sub15,$sub14,dt,package,offsetX,offsetY,scrollX,scrollY,posX,posY,y,x;
		dt = $p['getattr'](event, 'dataTransfer');
		text = dt['getData']('text');
		package = $m['json']['loads'](text);
		var $tupleassign3 = $p['__ass_unpack']($p['tuple']([$m['DOM']['eventGetClientX'](event), $m['DOM']['eventGetClientY'](event)]), 2, null);
		x = $tupleassign3[0];
		y = $tupleassign3[1];
		var $tupleassign4 = $p['__ass_unpack']($p['tuple']([$m['Window']['getScrollLeft'](), $m['Window']['getScrollTop']()]), 2, null);
		scrollX = $tupleassign4[0];
		scrollY = $tupleassign4[1];
		if ($p['bool']($p['op_eq'](package, false))) {
			var $tupleassign5 = $p['__ass_unpack']($p['tuple']([0, 0]), 2, null);
			offsetX = $tupleassign5[0];
			offsetY = $tupleassign5[1];
		}
		else {
			var $tupleassign6 = $p['__ass_unpack']($p['tuple']([$p['float_int'](package['__getitem__']('offsetX')), $p['float_int'](package['__getitem__']('offsetY'))]), 2, null);
			offsetX = $tupleassign6[0];
			offsetY = $tupleassign6[1];
		}
		var $tupleassign7 = $p['__ass_unpack']($p['tuple']([target['getAbsoluteTop'](), target['getAbsoluteLeft']()]), 2, null);
		at = $tupleassign7[0];
		al = $tupleassign7[1];
		var $tupleassign8 = $p['__ass_unpack']($p['tuple']([$p['__op_sub']($sub11=x,$sub12=$p['__op_sub']($sub9=al,$sub10=scrollX)), $p['__op_sub']($sub15=y,$sub16=$p['__op_sub']($sub13=at,$sub14=scrollY))]), 2, null);
		posX = $tupleassign8[0];
		posY = $tupleassign8[1];
		return $p['tuple']([$p['max']($p['__op_sub']($sub17=posX,$sub18=offsetX), 0), $p['max']($p['__op_sub']($sub19=posY,$sub20=offsetY), 0)]);
	};
	$m['getDropPosition']['__name__'] = 'getDropPosition';

	$m['getDropPosition']['__bind_type__'] = 0;
	$m['getDropPosition']['__args__'] = [null,null,['target'],['event']];
	$m['getCurrentOffsetPosition'] = function(event) {
		var clientX,clientY,$sub21,target,$sub24,$sub23,absx,absy,$add6,$add7,$sub22,$add5,$add8;
		target = $m['DOM']['eventGetTarget'](event);
		var $tupleassign9 = $p['__ass_unpack']($p['tuple']([$p['getattr'](event, 'clientX'), $p['getattr'](event, 'clientY')]), 2, null);
		clientX = $tupleassign9[0];
		clientY = $tupleassign9[1];
		var $tupleassign10 = $p['__ass_unpack']($p['tuple']([$p['__op_add']($add5=clientX,$add6=$m['Window']['getScrollLeft']()), $p['__op_add']($add7=clientY,$add8=$m['Window']['getScrollTop']())]), 2, null);
		absx = $tupleassign10[0];
		absy = $tupleassign10[1];
		return $p['tuple']([$p['__op_sub']($sub21=absx,$sub22=$m['DOM']['getAbsoluteLeft'](target)), $p['__op_sub']($sub23=absy,$sub24=$m['DOM']['getAbsoluteTop'](target))]);
	};
	$m['getCurrentOffsetPosition']['__name__'] = 'getCurrentOffsetPosition';

	$m['getCurrentOffsetPosition']['__bind_type__'] = 0;
	$m['getCurrentOffsetPosition']['__args__'] = [null,null,['event']];
	$m['getOffsetStartPosition'] = function(event) {
		var text,dt,package;
		dt = $p['getattr'](event, 'dataTransfer');
		text = dt['getData']('text');
		package = $m['json']['loads'](text);
		return $p['tuple']([$p['float_int'](package['__getitem__']('offsetX')), $p['float_int'](package['__getitem__']('offsetY'))]);
	};
	$m['getOffsetStartPosition']['__name__'] = 'getOffsetStartPosition';

	$m['getOffsetStartPosition']['__bind_type__'] = 0;
	$m['getOffsetStartPosition']['__args__'] = [null,null,['event']];
	$m['contains'] = function(x, y, block) {
		var $sub28,$sub26,$sub27,$sub25,$and1,top,$add10,$add11,$add12,$add9,$and2,left;
		var $tupleassign11 = $p['__ass_unpack']($p['tuple']([$p['float_int']($p['__getslice'](block['getStyleAttribute']('left'), 0, (typeof ($usub1=2)=='number'?
			-$usub1:
			$p['op_usub']($usub1)))), $p['float_int']($p['__getslice'](block['getStyleAttribute']('top'), 0, (typeof ($usub2=2)=='number'?
			-$usub2:
			$p['op_usub']($usub2))))]), 2, null);
		left = $tupleassign11[0];
		top = $tupleassign11[1];
		top = $p['__op_add']($add11=$p['__op_add']($add9=top,$add10=$p['getattr'](block, 'height')),$add12=$p['getattr'](block, 'mb'));
		if ($p['bool'](($p['bool']($and1=($p['cmp']($p['abs']($p['__op_sub']($sub25=left,$sub26=x)), 10) == -1))?($p['cmp']($p['abs']($p['__op_sub']($sub27=top,$sub28=y)), 10) == -1):$and1))) {
			return true;
		}
		return false;
	};
	$m['contains']['__name__'] = 'contains';

	$m['contains']['__bind_type__'] = 0;
	$m['contains']['__args__'] = [null,null,['x'],['y'],['block']];
	return this;
}; /* end edu.uca.util.DragElement */


/* end module: edu.uca.util.DragElement */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Window', 'json', 'edu.uca.renderable.block.Block.Block', 'edu', 'edu.uca', 'edu.uca.renderable', 'edu.uca.renderable.block', 'edu.uca.renderable.block.Block', 'edu.uca.util.Serializable.saveStackBlock', 'edu.uca.util', 'edu.uca.util.Serializable', 'edu.uca.Workspace.getWorkspace', 'edu.uca.Workspace', 'edu.uca.renderable.hardware.ComponentBlock.ComponentBlock', 'edu.uca.renderable.hardware', 'edu.uca.renderable.hardware.ComponentBlock', 'edu.uca.util.Serializable.saveComponent']
*/
