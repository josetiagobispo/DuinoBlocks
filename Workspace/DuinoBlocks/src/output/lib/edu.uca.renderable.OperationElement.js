/* start module: edu.uca.renderable.OperationElement */
$pyjs['loaded_modules']['edu.uca.renderable.OperationElement'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.renderable.OperationElement']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.renderable.OperationElement'];
	if(typeof $pyjs['loaded_modules']['edu.uca.renderable'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.renderable']['__was_initialized__']) $p['___import___']('edu.uca.renderable', null);
	var $m = $pyjs['loaded_modules']['edu.uca.renderable.OperationElement'];
	$m['__repr__'] = function() { return '<module: edu.uca.renderable.OperationElement>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.renderable.OperationElement';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.renderable']['OperationElement'] = $pyjs['loaded_modules']['edu.uca.renderable.OperationElement'];


	$m['Element'] = $p['___import___']('edu.uca.renderable.Element.Element', 'edu.uca.renderable', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.renderable', null, false);
	$m['ClickHandler'] = $p['___import___']('pyjamas.ui.ClickListener.ClickHandler', 'edu.uca.renderable', null, false);
	$m['MenuItenListener'] = $p['___import___']('edu.uca.ui.listener.MenuItenListener.MenuItenListener', 'edu.uca.renderable', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'edu.uca.renderable', null, false);
	$m['PopupPanel'] = $p['___import___']('pyjamas.ui.PopupPanel.PopupPanel', 'edu.uca.renderable', null, false);
	$m['_'] = $p['___import___']('edu.uca.util.i18n._', 'edu.uca.renderable', null, false);
	$m['OperationElement'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.renderable.OperationElement';
		$method = $pyjs__bind_method2('__init__', function(text, group, groupLabel, block) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				group = arguments[2];
				groupLabel = arguments[3];
				block = arguments[4];
			}

			$pyjs_kwargs_call($m['Element'], '__init__', null, null, [{'Element':$m['DOM']['createElement']('code'), 'StyleName':'group_operation'}, self]);
			$m['ClickHandler']['__init__'](self);
			self['addClickListener'](self);
			self['text'] = text;
			self['group'] = group;
			self['groupLabel'] = groupLabel;
			self['block'] = block;
			self['draw']();
			return null;
		}
	, 1, [null,null,['self'],['text'],['group'],['groupLabel'],['block']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('changeTexts', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool'](!$p['op_eq']($p['getattr'](self, 'text'), ''))) {
				$m['DOM']['setInnerHTML'](self['title']['getElement'](), $m['_']($p['getattr'](self, 'text')));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['changeTexts'] = $method;
		$method = $pyjs__bind_method2('draw', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var div;
			self['title'] = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createSpan'](), 'StyleName':'title'}]);
			$m['DOM']['setInnerHTML'](self['title']['getElement'](), $p['getattr'](self, 'text'));
			self['add']($p['getattr'](self, 'title'));
			self['tip'] = $pyjs_kwargs_call(null, $m['PopupPanel'], null, null, [{'Element':$m['DOM']['createElement']('code'), 'autoHide':true, 'modal':false, 'rootpanel':self}]);
			div = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createElement']('div'), 'StyleName':'joyride-tip-guide'}]);
			div['add']($pyjs_kwargs_call(null, $m['Widget'], null, null, [{'Element':$m['DOM']['createSpan'](), 'StyleName':'joyride-nub left'}]));
			self['tipItens'] = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createElement']('div'), 'StyleName':'tip-itens'}]);
			div['add']($p['getattr'](self, 'tipItens'));
			self['tip']['add'](div);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['draw'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			if ($p['bool']($p['getattr']($p['getattr'](self, 'tip'), 'showing'))) {
				self['tip']['hide']();
			}
			else {
				if ($p['bool'](($p['getattr'](self, 'groupLabel') === null))) {
					self['addValues']($p['getattr'](self, 'group'));
				}
				else {
					self['addValues']($p['getattr'](self, 'groupLabel'));
				}
				self['tip']['show']();
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method2('addValues', function(values) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				values = arguments[1];
			}
			var $iter1_nextval,$iter1_type,value,$iter1_iter,$iter1_array,$iter1_idx;
			self['tipItens']['removeAll']();
			if ($p['bool']($p['op_eq']($p['len'](values), 2))) {
				self['tip']['getWidget']()['addStyleName']('two_itens');
			}
			else {
				self['tip']['getWidget']()['removeStyleName']('two_itens');
			}
			if ($p['bool']($p['op_eq']($p['len'](values), 3))) {
				self['tip']['getWidget']()['addStyleName']('tree_itens');
			}
			else {
				self['tip']['getWidget']()['removeStyleName']('tree_itens');
			}
			$iter1_iter = values['keys']();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				value = $iter1_nextval['$nextval'];
				self['tipItens']['append']($pyjs_kwargs_call(null, $m['MenuItenListener'], null, null, [{'StyleName':'tip-item'}, $p['getattr'](self, 'itemClick'), value]));
			}
			return null;
		}
	, 1, [null,null,['self'],['values']]);
		$cls_definition['addValues'] = $method;
		$method = $pyjs__bind_method2('itemClick', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}
			var stateChange,oldValue;
			if ($p['bool']($p['getattr']($p['getattr'](self, 'block'), 'original'))) {
				return null;
			}
			oldValue = $p['getattr']($p['getattr'](self, 'block'), '$$name');
			if ($p['bool'](($p['getattr'](self, 'groupLabel') === null))) {
				$m['DOM']['setInnerHTML'](self['title']['getElement'](), $m['_'](value));
				$p['getattr'](self, 'block')['$$name'] = $p['getattr'](self, 'group')['__getitem__'](value);
			}
			else {
				$m['DOM']['setInnerHTML'](self['title']['getElement'](), $m['_']($p['getattr'](self, 'groupLabel')['__getitem__'](value)));
				$p['getattr'](self, 'block')['$$name'] = $p['getattr'](self, 'group')['__getitem__']($p['getattr'](self, 'groupLabel')['__getitem__'](value));
			}
			if ($p['bool'](!$p['op_eq'](oldValue, value))) {
				stateChange = $p['___import___']('edu.uca.util.Serializable.stateChange', 'edu.uca.renderable', null, false);
				stateChange();
			}
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['itemClick'] = $method;
		var $bases = new Array($m['Element'],$m['ClickHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('OperationElement', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.renderable.OperationElement */


/* end module: edu.uca.renderable.OperationElement */


/*
PYJS_DEPS: ['edu.uca.renderable.Element.Element', 'edu', 'edu.uca', 'edu.uca.renderable', 'edu.uca.renderable.Element', 'pyjamas.DOM', 'pyjamas', 'pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui', 'pyjamas.ui.ClickListener', 'edu.uca.ui.listener.MenuItenListener.MenuItenListener', 'edu.uca.ui', 'edu.uca.ui.listener', 'edu.uca.ui.listener.MenuItenListener', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget', 'pyjamas.ui.PopupPanel.PopupPanel', 'pyjamas.ui.PopupPanel', 'edu.uca.util.i18n._', 'edu.uca.util', 'edu.uca.util.i18n', 'edu.uca.util.Serializable.stateChange', 'edu.uca.util.Serializable']
*/
