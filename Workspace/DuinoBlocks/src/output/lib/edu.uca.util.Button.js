/* start module: edu.uca.util.Button */
$pyjs['loaded_modules']['edu.uca.util.Button'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.util.Button']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.util.Button'];
	if(typeof $pyjs['loaded_modules']['edu.uca.util'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.util']['__was_initialized__']) $p['___import___']('edu.uca.util', null);
	var $m = $pyjs['loaded_modules']['edu.uca.util.Button'];
	$m['__repr__'] = function() { return '<module: edu.uca.util.Button>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.util.Button';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.util']['Button'] = $pyjs['loaded_modules']['edu.uca.util.Button'];


	$m['Element'] = $p['___import___']('edu.uca.renderable.Element.Element', 'edu.uca.util', null, false);
	$m['ClickHandler'] = $p['___import___']('pyjamas.ui.ClickListener.ClickHandler', 'edu.uca.util', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.util', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'edu.uca.util', null, false);
	$m['MouseHandler'] = $p['___import___']('pyjamas.ui.MouseListener.MouseHandler', 'edu.uca.util', null, false);
	$m['Button'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.util.Button';
		$method = $pyjs__bind_method2('__init__', function(text, listener, classIcon) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				listener = arguments[2];
				classIcon = arguments[3];
			}
			if (typeof classIcon == 'undefined') classIcon=arguments['callee']['__args__'][5][1];

			$pyjs_kwargs_call($m['Element'], '__init__', null, null, [{'Element':$m['DOM']['createElement']('li'), 'StyleName':'btn'}, self]);
			$m['ClickHandler']['__init__'](self);
			$m['MouseHandler']['__init__'](self);
			self['text'] = text;
			self['classIcon'] = classIcon;
			self['draw']();
			if ($p['bool']((listener !== null))) {
				self['addClickListener'](listener);
			}
			return null;
		}
	, 1, [null,null,['self'],['text'],['listener'],['classIcon', '']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('draw', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool'](!$p['op_eq']($p['getattr'](self, 'classIcon'), ''))) {
				self['icon'] = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createElement']('i'), 'StyleName':$p['getattr'](self, 'classIcon')}]);
				self['add']($p['getattr'](self, 'icon'));
			}
			self['title'] = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createSpan'](), 'StyleName':'title'}]);
			$m['DOM']['setInnerHTML'](self['title']['getElement'](), $p['getattr'](self, 'text'));
			self['add']($p['getattr'](self, 'title'));
			self['add']($pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'r'}]));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['draw'] = $method;
		$method = $pyjs__bind_method2('setText', function(text) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			self['text'] = text;
			$m['DOM']['setInnerHTML'](self['title']['getElement'](), $p['getattr'](self, 'text'));
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['setText'] = $method;
		$method = $pyjs__bind_method2('changeIcon', function(classIcon) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				classIcon = arguments[1];
			}

			self['classIcon'] = classIcon;
			$m['DOM']['setAttribute'](self['icon']['getElement'](), 'className', classIcon);
			return null;
		}
	, 1, [null,null,['self'],['classIcon']]);
		$cls_definition['changeIcon'] = $method;
		var $bases = new Array($m['Element'],$m['ClickHandler'],$m['MouseHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Button', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.util.Button */


/* end module: edu.uca.util.Button */


/*
PYJS_DEPS: ['edu.uca.renderable.Element.Element', 'edu', 'edu.uca', 'edu.uca.renderable', 'edu.uca.renderable.Element', 'pyjamas.ui.ClickListener.ClickHandler', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.ClickListener', 'pyjamas.DOM', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget', 'pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui.MouseListener']
*/
