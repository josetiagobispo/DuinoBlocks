/* start module: pyjamas.ui.ClickDelegatePanel */
$pyjs['loaded_modules']['pyjamas.ui.ClickDelegatePanel'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.ClickDelegatePanel']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.ClickDelegatePanel'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.ClickDelegatePanel'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.ClickDelegatePanel>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.ClickDelegatePanel';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['ClickDelegatePanel'] = $pyjs['loaded_modules']['pyjamas.ui.ClickDelegatePanel'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', 'pyjamas.ui', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	$m['Focus'] = $p['___import___']('pyjamas.ui.Focus', 'pyjamas.ui', null, false);
	$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui', null, false);
	$m['KeyboardListener'] = $p['___import___']('pyjamas.ui.KeyboardListener', 'pyjamas.ui', null, false);
	$m['ClickDelegatePanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.ClickDelegatePanel';
		$method = $pyjs__bind_method2('__init__', function(p, child, cDelegate, kDelegate) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				p = arguments[1];
				child = arguments[2];
				cDelegate = arguments[3];
				kDelegate = arguments[4];
			}
			var wrapperWidget;
			$m['Composite']['__init__'](self);
			self['clickDelegate'] = cDelegate;
			self['keyDelegate'] = kDelegate;
			self['focusablePanel'] = $m['SimplePanel']($m['Focus']['createFocusable']());
			self['focusablePanel']['setWidget'](child);
			wrapperWidget = p['createTabTextWrapper']();
			if ($p['bool']((wrapperWidget === null))) {
				self['initWidget']($p['getattr'](self, 'focusablePanel'));
			}
			else {
				wrapperWidget['setWidget']($p['getattr'](self, 'focusablePanel'));
				self['initWidget'](wrapperWidget);
			}
			if ($p['bool']($p['hasattr'](child, 'addKeyboardListener'))) {
				child['addKeyboardListener'](kDelegate);
			}
			self['sinkEvents'](($p['getattr']($m['Event'], 'ONCLICK'))|($p['getattr']($m['Event'], 'ONKEYDOWN')));
			return null;
		}
	, 1, [null,null,['self'],['p'],['child'],['cDelegate'],['kDelegate']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

			self['clickDelegate']['onClick'](sender);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method2('getFocusablePanel', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'focusablePanel');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getFocusablePanel'] = $method;
		$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var modifiers,type;
			type = $m['DOM']['eventGetType'](event);
			if ($p['bool']($p['op_eq'](type, 'click'))) {
				self['onClick'](self);
			}
			else if ($p['bool']($p['op_eq'](type, 'keydown'))) {
				modifiers = $m['KeyboardListener']['getKeyboardModifiers'](event);
				if ($p['bool']($p['hasattr']($p['getattr'](self, 'keyDelegate'), 'onKeyDown'))) {
					self['keyDelegate']['onKeyDown'](self, $m['DOM']['eventGetKeyCode'](event), modifiers);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		var $bases = new Array($m['Composite']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ClickDelegatePanel', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.ui.ClickDelegatePanel */


/* end module: pyjamas.ui.ClickDelegatePanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.Composite.Composite', 'pyjamas.ui', 'pyjamas.ui.Composite', 'pyjamas.ui.Event', 'pyjamas.ui.Focus', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.KeyboardListener']
*/
