/* start module: edu.uca.util.ResizeWidget */
$pyjs['loaded_modules']['edu.uca.util.ResizeWidget'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.util.ResizeWidget']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.util.ResizeWidget'];
	if(typeof $pyjs['loaded_modules']['edu.uca.util'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.util']['__was_initialized__']) $p['___import___']('edu.uca.util', null);
	var $m = $pyjs['loaded_modules']['edu.uca.util.ResizeWidget'];
	$m['__repr__'] = function() { return '<module: edu.uca.util.ResizeWidget>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.util.ResizeWidget';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.util']['ResizeWidget'] = $pyjs['loaded_modules']['edu.uca.util.ResizeWidget'];


	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', 'edu.uca.util', null, false);
	$m['FocusWidget'] = $p['___import___']('pyjamas.ui.FocusWidget.FocusWidget', 'edu.uca.util', null, false);
	$m['MouseHandler'] = $p['___import___']('pyjamas.ui.MouseListener.MouseHandler', 'edu.uca.util', null, false);
	$m['ONMOUSEUP'] = $p['___import___']('pyjamas.ui.Event.ONMOUSEUP', 'edu.uca.util', null, false);
	$m['ONMOUSEMOVE'] = $p['___import___']('pyjamas.ui.Event.ONMOUSEMOVE', 'edu.uca.util', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.util', null, false);
	$m['ResizeWidget'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.util.ResizeWidget';
		$method = $pyjs__bind_method2('__init__', function(target, mi, ma, invert, horizontal) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				target = arguments[1];
				mi = arguments[2];
				ma = arguments[3];
				invert = arguments[4];
				horizontal = arguments[5];
			}
			if (typeof invert == 'undefined') invert=arguments['callee']['__args__'][6][1];
			if (typeof horizontal == 'undefined') horizontal=arguments['callee']['__args__'][7][1];

			$pyjs_kwargs_call($m['FocusWidget'], '__init__', null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'control_bar'}, self]);
			$m['MouseHandler']['__init__'](self);
			self['horizontal'] = horizontal;
			if ($p['bool']($p['getattr'](self, 'horizontal'))) {
				self['addStyleName']('horizontal_resize');
			}
			else {
				self['addStyleName']('vertical_resize');
			}
			self['target'] = target;
			self['min'] = mi;
			self['max'] = ma;
			self['invert'] = invert;
			self['mouse'] = 'up';
			self['vectorX'] = 0;
			self['vectorY'] = 0;
			self['addMouseListener'](self);
			$m['RootPanel']()['addMouseListener'](self);
			$m['DOM']['sinkEvents']($m['RootPanel']()['getElement'](), ($m['ONMOUSEUP'])|($m['ONMOUSEMOVE'])|($m['DOM']['getEventsSunk']($m['RootPanel']()['getElement']())));
			return null;
		}
	, 1, [null,null,['self'],['target'],['mi'],['ma'],['invert', false],['horizontal', true]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onMouseDown', function(sender, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var $add2,$add3,$add1,$add4;
			if ($p['bool']($p['op_eq'](sender, self))) {
				self['mouse'] = 'down';
				self['vectorX'] = $p['__op_add']($add1=self['getAbsoluteLeft'](),$add2=x);
				self['vectorY'] = $p['__op_add']($add3=self['getAbsoluteTop'](),$add4=y);
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseDown'] = $method;
		$method = $pyjs__bind_method2('onMouseMove', function(sender, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var $sub9,$sub8,$and2,$sub12,$sub3,$sub2,$sub1,$sub7,$sub6,$sub5,$sub4,$and1,$sub11,$sub10,$add6,$add7,w,$add5,$add8;
			if ($p['bool'](($p['bool']($and1=$p['op_eq']($p['getattr'](self, 'mouse'), 'down'))?!$p['op_eq'](sender, self):$and1))) {
				if ($p['bool']($p['getattr'](self, 'horizontal'))) {
					if ($p['bool']($p['getattr'](self, 'invert'))) {
						w = $p['__op_add']($add5=$p['float_int'](self['target']['parent']['getCellWidth']($p['getattr'](self, 'target'))),$add6=$p['__op_sub']($sub1=$p['getattr'](self, 'vectorX'),$sub2=x));
					}
					else {
						w = $p['__op_sub']($sub5=$p['float_int'](self['target']['parent']['getCellWidth']($p['getattr'](self, 'target'))),$sub6=$p['__op_sub']($sub3=$p['getattr'](self, 'vectorX'),$sub4=x));
					}
				}
				else {
					if ($p['bool']($p['getattr'](self, 'invert'))) {
						w = $p['__op_add']($add7=$p['float_int'](self['target']['parent']['getCellHeight']($p['getattr'](self, 'target'))),$add8=$p['__op_sub']($sub7=$p['getattr'](self, 'vectorY'),$sub8=y));
					}
					else {
						w = $p['__op_sub']($sub11=$p['float_int'](self['target']['parent']['getCellHeight']($p['getattr'](self, 'target'))),$sub12=$p['__op_sub']($sub9=$p['getattr'](self, 'vectorY'),$sub10=y));
					}
				}
				if ($p['bool']((($p['cmp']($p['getattr'](self, 'min'), ($compare1 = w)) < 1)&&($p['cmp']($compare1, ($compare2 = $p['getattr'](self, 'max'))) < 1)))) {
					self['vectorX'] = x;
					self['vectorY'] = y;
					if ($p['bool']($p['getattr'](self, 'horizontal'))) {
						self['target']['parent']['setCellWidth']($p['getattr'](self, 'target'), w);
					}
					else {
						self['target']['parent']['setCellHeight']($p['getattr'](self, 'target'), w);
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseMove'] = $method;
		$method = $pyjs__bind_method2('onMouseUp', function(sender, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}

			self['mouse'] = 'up';
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseUp'] = $method;
		var $bases = new Array($m['FocusWidget'],$m['MouseHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ResizeWidget', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.util.ResizeWidget */


/* end module: edu.uca.util.ResizeWidget */


/*
PYJS_DEPS: ['pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.FocusWidget.FocusWidget', 'pyjamas.ui.FocusWidget', 'pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui.MouseListener', 'pyjamas.ui.Event.ONMOUSEUP', 'pyjamas.ui.Event', 'pyjamas.ui.Event.ONMOUSEMOVE', 'pyjamas.DOM']
*/
