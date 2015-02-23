/* start module: edu.uca.renderable.hardware.ComponentBlock */
$pyjs['loaded_modules']['edu.uca.renderable.hardware.ComponentBlock'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.renderable.hardware.ComponentBlock']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.renderable.hardware.ComponentBlock'];
	if(typeof $pyjs['loaded_modules']['edu.uca.renderable.hardware'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.renderable.hardware']['__was_initialized__']) $p['___import___']('edu.uca.renderable.hardware', null);
	var $m = $pyjs['loaded_modules']['edu.uca.renderable.hardware.ComponentBlock'];
	$m['__repr__'] = function() { return '<module: edu.uca.renderable.hardware.ComponentBlock>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.renderable.hardware.ComponentBlock';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.renderable.hardware']['ComponentBlock'] = $pyjs['loaded_modules']['edu.uca.renderable.hardware.ComponentBlock'];


	$m['Element'] = $p['___import___']('edu.uca.renderable.Element.Element', 'edu.uca.renderable.hardware', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.renderable.hardware', null, false);
	$m['DragWidget'] = $p['___import___']('pyjamas.ui.DragWidget.DragWidget', 'edu.uca.renderable.hardware', null, false);
	$m['getWorkspace'] = $p['___import___']('edu.uca.Workspace.getWorkspace', 'edu.uca.renderable.hardware', null, false);
	$m['INPUT'] = $p['___import___']('edu.uca.util.Constants.INPUT', 'edu.uca.renderable.hardware', null, false);
	$m['_'] = $p['___import___']('edu.uca.util.i18n._', 'edu.uca.renderable.hardware', null, false);
	$m['drawComponentBlock'] = function(s) {
		var body,tableArguments,$add2,$add1,table,td,row;
		s['addStyleName']('hardware_block block simple_hardware_block');
		table = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createTable']()}]);
		body = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createTBody']()}]);
		row = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createTR'](), 'StyleName':'simple_hardware_row'}]);
		td = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createTD'](), 'StyleName':$p['__op_add']($add1='simple_hardware_icon ',$add2=$p['getattr'](s, '$$name'))}]);
		row['append'](td);
		s['td'] = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createTD'](), 'StyleName':'simple_hardware_name'}]);
		$m['DOM']['setInnerHTML'](s['td']['getElement'](), $p['getattr'](s, 'text'));
		row['append']($p['getattr'](s, 'td'));
		body['append'](row);
		table['append'](body);
		s['append'](table);
		tableArguments = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createTable'](), 'StyleName':'simple_hardware_pins'}]);
		s['bodyArguments'] = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createTBody']()}]);
		tableArguments['append']($p['getattr'](s, 'bodyArguments'));
		s['append'](tableArguments);
		return null;
	};
	$m['drawComponentBlock']['__name__'] = 'drawComponentBlock';

	$m['drawComponentBlock']['__bind_type__'] = 0;
	$m['drawComponentBlock']['__args__'] = [null,null,['s']];
	$m['addArgument'] = function(s, arg) {
		var $add7,$add5,$add3,$add6,mode,$add4,$add10,td,$add9,$add8,row;
		mode = ($p['bool']($p['op_eq']($p['getattr'](s, 'mode'), $m['INPUT']))? ('input') : ('output'));
		row = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createTR'](), 'StyleName':'simple_hardware_pin'}]);
		td = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createTD'](), 'StyleName':'simple_hardware_pin_left'}]);
		row['append'](td);
		td = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createTD'](), 'StyleName':$p['__op_add']($add5=$p['__op_add']($add3='simple_hardware_pin_label simple_',$add4=mode),$add6='_pin')}]);
		$m['DOM']['setInnerText'](td['getElement'](), $p['getattr'](arg, '$$label'));
		row['append'](td);
		td = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createTD'](), 'StyleName':$p['__op_add']($add9=$p['__op_add']($add7='dropdown_holder simple_',$add8=mode),$add10='_pin')}]);
		td['add'](arg);
		row['append'](td);
		s['bodyArguments']['append'](row);
		return null;
	};
	$m['addArgument']['__name__'] = 'addArgument';

	$m['addArgument']['__bind_type__'] = 0;
	$m['addArgument']['__args__'] = [null,null,['s'],['arg']];
	$m['ComponentBlock'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.renderable.hardware.ComponentBlock';
		$method = $pyjs__bind_method2('__init__', function(name, text, mode, listBlockName, original) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				text = arguments[2];
				mode = arguments[3];
				listBlockName = arguments[4];
				original = arguments[5];
			}
			if (typeof listBlockName == 'undefined') listBlockName=arguments['callee']['__args__'][6][1];
			if (typeof original == 'undefined') original=arguments['callee']['__args__'][7][1];

			$pyjs_kwargs_call($m['Element'], '__init__', null, null, [{'Element':$m['DOM']['createDiv']()}, self]);
			$m['DragWidget']['__init__'](self);
			self['original'] = original;
			self['$$name'] = name;
			self['text'] = text;
			self['mode'] = mode;
			self['listBlockName'] = listBlockName;
			self['number'] = null;
			$m['drawComponentBlock'](self);
			self['argumentList'] = $p['list']([]);
			return null;
		}
	, 1, [null,null,['self'],['name'],['text'],['mode'],['listBlockName', $p['list']([])],['original', true]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getPinAtArgument', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			return $p['getattr'](self, 'argumentList')['__getitem__'](index)['getSelectedPin']();
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['getPinAtArgument'] = $method;
		$method = $pyjs__bind_method2('getUsedPins', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter1_nextval,$iter1_type,$iter1_iter,$iter1_array,arg,usedPins,$iter1_idx;
			usedPins = $p['list']([]);
			$iter1_iter = $p['getattr'](self, 'argumentList');
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				arg = $iter1_nextval['$nextval'];
				if ($p['bool'](arg['hasSelectedPin']())) {
					usedPins['append'](arg['getSelectedPin']());
				}
			}
			return usedPins;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getUsedPins'] = $method;
		$method = $pyjs__bind_method2('addArgument', function(arg) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				arg = arguments[1];
			}

			self['argumentList']['append'](arg);
			$m['addArgument'](self, arg);
			return null;
		}
	, 1, [null,null,['self'],['arg']]);
		$cls_definition['addArgument'] = $method;
		$method = $pyjs__bind_method2('getCompleteText', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add11,$add12;
			return $p['__op_add']($add11=$p['getattr'](self, 'text'),$add12=$p['str']($p['getattr'](self, 'number')));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getCompleteText'] = $method;
		$method = $pyjs__bind_method2('changeText', function(number) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				number = arguments[1];
			}
			var $add14,$add13;
			self['number'] = number;
			$m['DOM']['setInnerHTML'](self['td']['getElement'](), $p['__op_add']($add13=$p['getattr'](self, 'text'),$add14=$p['str']($p['getattr'](self, 'number'))));
			return null;
		}
	, 1, [null,null,['self'],['number']]);
		$cls_definition['changeText'] = $method;
		$method = $pyjs__bind_method2('changeTexts', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add15,$add16;
			if ($p['bool'](($p['getattr'](self, 'number') !== null))) {
				$m['DOM']['setInnerHTML'](self['td']['getElement'](), $p['__op_add']($add15=$m['_']($p['getattr'](self, 'text')),$add16=$p['str']($p['getattr'](self, 'number'))));
			}
			else {
				$m['DOM']['setInnerHTML'](self['td']['getElement'](), $m['_']($p['getattr'](self, 'text')));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['changeTexts'] = $method;
		$method = $pyjs__bind_method2('onDragStart', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$m['getWorkspace']()['setMovingBlock'](self);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragStart'] = $method;
		$method = $pyjs__bind_method2('onDrag', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			if ($p['bool'](!$p['bool']($p['getattr'](self, 'original')))) {
				self['addStyleName']('invisible');
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDrag'] = $method;
		$method = $pyjs__bind_method2('onDragEnd', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			self['removeStyleName']('invisible');
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragEnd'] = $method;
		var $bases = new Array($m['Element'],$m['DragWidget']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ComponentBlock', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.renderable.hardware.ComponentBlock */


/* end module: edu.uca.renderable.hardware.ComponentBlock */


/*
PYJS_DEPS: ['edu.uca.renderable.Element.Element', 'edu', 'edu.uca', 'edu.uca.renderable', 'edu.uca.renderable.Element', 'pyjamas.DOM', 'pyjamas', 'pyjamas.ui.DragWidget.DragWidget', 'pyjamas.ui', 'pyjamas.ui.DragWidget', 'edu.uca.Workspace.getWorkspace', 'edu.uca.Workspace', 'edu.uca.util.Constants.INPUT', 'edu.uca.util', 'edu.uca.util.Constants', 'edu.uca.util.i18n._', 'edu.uca.util.i18n']
*/
