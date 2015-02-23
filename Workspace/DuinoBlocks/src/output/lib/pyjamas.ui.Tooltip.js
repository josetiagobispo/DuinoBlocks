/* start module: pyjamas.ui.Tooltip */
$pyjs['loaded_modules']['pyjamas.ui.Tooltip'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.Tooltip']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.Tooltip'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.Tooltip'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.Tooltip>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Tooltip';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['Tooltip'] = $pyjs['loaded_modules']['pyjamas.ui.Tooltip'];


	$m['PopupPanel'] = $p['___import___']('pyjamas.ui.PopupPanel.PopupPanel', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', 'pyjamas.ui', null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui', null, false);
	$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', 'pyjamas.ui', null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', 'pyjamas.ui', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['tooltip_hide_timer'] = null;
	$m['Tooltip'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.Tooltip';
		$method = $pyjs__bind_method2('__init__', function(sender, offsetX, offsetY, contents, show_delay, hide_delay, styleName) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var kwargs = arguments['length'] >= 8 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				sender = arguments[1];
				offsetX = arguments[2];
				offsetY = arguments[3];
				contents = arguments[4];
				show_delay = arguments[5];
				hide_delay = arguments[6];
				styleName = arguments[7];
				var kwargs = arguments['length'] >= 9 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof styleName != 'undefined') {
					if (styleName !== null && typeof styleName['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = styleName;
						styleName = arguments[8];
					}
				} else 				if (typeof hide_delay != 'undefined') {
					if (hide_delay !== null && typeof hide_delay['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = hide_delay;
						hide_delay = arguments[8];
					}
				} else 				if (typeof show_delay != 'undefined') {
					if (show_delay !== null && typeof show_delay['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = show_delay;
						show_delay = arguments[8];
					}
				} else 				if (typeof contents != 'undefined') {
					if (contents !== null && typeof contents['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = contents;
						contents = arguments[8];
					}
				} else 				if (typeof offsetY != 'undefined') {
					if (offsetY !== null && typeof offsetY['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = offsetY;
						offsetY = arguments[8];
					}
				} else 				if (typeof offsetX != 'undefined') {
					if (offsetX !== null && typeof offsetX['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = offsetX;
						offsetX = arguments[8];
					}
				} else 				if (typeof sender != 'undefined') {
					if (sender !== null && typeof sender['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = sender;
						sender = arguments[8];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[8];
					}
				} else {
				}
			}
			var top,$add2,$add3,$add1,$add4,left;
			$pyjs_kwargs_call($m['PopupPanel'], '__init__', null, kwargs, [{}, self, true]);
			self['show_delay'] = show_delay;
			self['hide_delay'] = hide_delay;
			if ($p['bool']($p['isinstance'](contents, $p['basestring']))) {
				contents = $m['HTML'](contents);
			}
			self['add'](contents);
			left = $p['__op_add']($add1=sender['getAbsoluteLeft'](),$add2=offsetX);
			top = $p['__op_add']($add3=sender['getAbsoluteTop'](),$add4=offsetY);
			self['setPopupPosition'](left, top);
			self['setStyleName'](styleName);
			if ($p['bool']($m['tooltip_hide_timer'])) {
				self['tooltip_show_timer'] = $m['Timer'](1, self);
			}
			else {
				self['tooltip_show_timer'] = $m['Timer']($p['getattr'](self, 'show_delay'), self);
			}
			return null;
		}
	, 1, [null,['kwargs'],['self'],['sender'],['offsetX'],['offsetY'],['contents'],['show_delay'],['hide_delay'],['styleName']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onShowImpl', function(popup) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				popup = arguments[1];
			}
			var heigth,$and1,$add5,$add6,$sub2,element,width,offset_x,offset_y,w_heigth,$sub3,w_width,$sub1,$sub4,$add8,$and2,$add7;
			width = self['getOffsetWidth']();
			heigth = self['getOffsetHeight']();
			w_width = $m['Window']['getClientWidth']();
			w_heigth = $m['Window']['getClientHeight']();
			if ($p['bool'](($p['bool']($and1=($p['cmp'](w_width, width) == 1))?($p['cmp'](w_heigth, heigth) == 1):$and1))) {
				offset_x = self['getAbsoluteLeft']();
				offset_y = self['getAbsoluteTop']();
				element = self['getElement']();
				if ($p['bool'](($p['cmp']($p['__op_add']($add5=offset_x,$add6=width), w_width) == 1))) {
					offset_x = $p['__op_sub']($sub1=w_width,$sub2=width);
					$m['DOM']['setStyleAttribute'](element, 'left', $p['sprintf']('%dpx', offset_x));
				}
				if ($p['bool'](($p['cmp']($p['__op_add']($add7=offset_y,$add8=heigth), w_heigth) == 1))) {
					offset_y = $p['__op_sub']($sub3=w_heigth,$sub4=heigth);
					$m['DOM']['setStyleAttribute'](element, 'top', $p['sprintf']('%dpx', offset_y));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['popup']]);
		$cls_definition['onShowImpl'] = $method;
		$method = $pyjs__bind_method2('show', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['tooltip_hide_timer'] = $m['Timer']($p['getattr'](self, 'hide_delay'), self);
			$m['PopupPanel']['show'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['show'] = $method;
		$method = $pyjs__bind_method2('hide', function(autoClosed) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				autoClosed = arguments[1];
			}
			if (typeof autoClosed == 'undefined') autoClosed=arguments['callee']['__args__'][3][1];

			self['tooltip_show_timer']['cancel']();
			$m['PopupPanel']['hide'](self, autoClosed);
			return null;
		}
	, 1, [null,null,['self'],['autoClosed', false]]);
		$cls_definition['hide'] = $method;
		$method = $pyjs__bind_method2('onTimer', function(timer) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				timer = arguments[1];
			}

			if ($p['bool']((timer === $m['tooltip_hide_timer']))) {
				$m['tooltip_hide_timer'] = null;
			}
			if ($p['bool']((timer === $p['getattr'](self, 'tooltip_show_timer')))) {
				self['show']();
			}
			else {
				self['hide']();
			}
			return null;
		}
	, 1, [null,null,['self'],['timer']]);
		$cls_definition['onTimer'] = $method;
		var $bases = new Array($m['PopupPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Tooltip', $p['tuple']($bases), $data);
	})();
	$m['TooltipListener'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.Tooltip';
		$cls_definition['DEFAULT_TOOLTIP_STYLE'] = 'TooltipPopup';
		$cls_definition['DEFAULT_OFFSET_X'] = 10;
		$cls_definition['DEFAULT_OFFSET_Y'] = 35;
		$method = $pyjs__bind_method2('__init__', function(text, show_delay, hide_delay, styleName) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				show_delay = arguments[2];
				hide_delay = arguments[3];
				styleName = arguments[4];
			}
			if (typeof show_delay == 'undefined') show_delay=arguments['callee']['__args__'][4][1];
			if (typeof hide_delay == 'undefined') hide_delay=arguments['callee']['__args__'][5][1];
			if (typeof styleName == 'undefined') styleName=arguments['callee']['__args__'][6][1];

			if ($p['bool'](!$p['bool'](styleName))) {
				styleName = $p['getattr'](self, 'DEFAULT_TOOLTIP_STYLE');
			}
			self['tooltip'] = null;
			self['text'] = text;
			self['styleName'] = styleName;
			self['show_delay'] = show_delay;
			self['hide_delay'] = hide_delay;
			self['offsetX'] = $p['getattr'](self, 'DEFAULT_OFFSET_X');
			self['offsetY'] = $p['getattr'](self, 'DEFAULT_OFFSET_Y');
			return null;
		}
	, 1, [null,null,['self'],['text'],['show_delay', 1000],['hide_delay', 5000],['styleName', '']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onMouseEnter', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			self['hide']();
			self['tooltip'] = $m['Tooltip'](sender, $p['getattr'](self, 'offsetX'), $p['getattr'](self, 'offsetY'), $p['getattr'](self, 'text'), $p['getattr'](self, 'show_delay'), $p['getattr'](self, 'hide_delay'), $p['getattr'](self, 'styleName'));
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseEnter'] = $method;
		$method = $pyjs__bind_method2('onMouseLeave', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			self['hide']();
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseLeave'] = $method;
		$method = $pyjs__bind_method2('onMouseMove', function(sender, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseMove'] = $method;
		$method = $pyjs__bind_method2('onMouseDown', function(sender, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseDown'] = $method;
		$method = $pyjs__bind_method2('onMouseUp', function(sender, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseUp'] = $method;
		$method = $pyjs__bind_method2('getStyleName', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'styleName');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getStyleName'] = $method;
		$method = $pyjs__bind_method2('setStyleName', function(styleName) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				styleName = arguments[1];
			}

			self['styleName'] = styleName;
			return null;
		}
	, 1, [null,null,['self'],['styleName']]);
		$cls_definition['setStyleName'] = $method;
		$method = $pyjs__bind_method2('getOffsetX', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'offsetX');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getOffsetX'] = $method;
		$method = $pyjs__bind_method2('setOffsetX', function(offsetX) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				offsetX = arguments[1];
			}

			self['offsetX'] = offsetX;
			return null;
		}
	, 1, [null,null,['self'],['offsetX']]);
		$cls_definition['setOffsetX'] = $method;
		$method = $pyjs__bind_method2('getOffsetY', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'offsetY');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getOffsetY'] = $method;
		$method = $pyjs__bind_method2('setOffsetY', function(offsetY) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				offsetY = arguments[1];
			}

			self['offsetY'] = offsetY;
			return null;
		}
	, 1, [null,null,['self'],['offsetY']]);
		$cls_definition['setOffsetY'] = $method;
		$method = $pyjs__bind_method2('hide', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool'](($p['getattr'](self, 'tooltip') !== null))) {
				self['tooltip']['hide']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['hide'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TooltipListener', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.Tooltip', 'Tooltip', $m['Tooltip']);
	return this;
}; /* end pyjamas.ui.Tooltip */


/* end module: pyjamas.ui.Tooltip */


/*
PYJS_DEPS: ['pyjamas.ui.PopupPanel.PopupPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.PopupPanel', 'pyjamas.Factory', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.Timer.Timer', 'pyjamas.Timer', 'pyjamas.Window', 'pyjamas.DOM']
*/
