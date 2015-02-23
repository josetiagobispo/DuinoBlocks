/* start module: pyjamas.ui.TabPanel */
$pyjs['loaded_modules']['pyjamas.ui.TabPanel'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.TabPanel']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.TabPanel'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.TabPanel'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.TabPanel>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.TabPanel';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['TabPanel'] = $pyjs['loaded_modules']['pyjamas.ui.TabPanel'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', 'pyjamas.ui', null, false);
	$m['DeckPanel'] = $p['___import___']('pyjamas.ui.DeckPanel.DeckPanel', 'pyjamas.ui', null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui', null, false);
	$m['PanelBase'] = $p['___import___']('pyjamas.ui.Panel.PanelBase', 'pyjamas.ui', null, false);
	$m['TabBar'] = $p['___import___']('pyjamas.ui.TabBar.TabBar', 'pyjamas.ui', null, false);
	$m['TabPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.TabPanel';
		$method = $pyjs__bind_method2('__init__', function(tabBar) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				tabBar = arguments[1];
				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof tabBar != 'undefined') {
					if (tabBar !== null && typeof tabBar['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = tabBar;
						tabBar = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			if (typeof tabBar == 'undefined') tabBar=arguments['callee']['__args__'][3][1];
			var element,floatingtab,panel;
			self['children'] = $p['list']([]);
			self['tab_names'] = $p['dict']([]);
			self['deck'] = kwargs['pop']('Deck', null);
			floatingtab = kwargs['pop']('FloatingTab', false);
			if ($p['bool'](($p['getattr'](self, 'deck') === null))) {
				self['deck'] = $pyjs_kwargs_call(null, $m['DeckPanel'], null, null, [{'StyleName':'gwt-TabPanelBottom'}]);
			}
			if ($p['bool']((tabBar === null))) {
				self['tabBar'] = $m['TabBar']();
			}
			else {
				self['tabBar'] = tabBar;
			}
			self['tabListeners'] = $p['list']([]);
			element = kwargs['pop']('Element', null);
			panel = $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{'Element':element}]);
			if ($p['bool'](!$p['bool'](floatingtab))) {
				panel['add']($p['getattr'](self, 'tabBar'));
			}
			if ($p['bool']((self['deck']['getParent']() === null))) {
				panel['add']($p['getattr'](self, 'deck'));
				panel['setCellHeight']($p['getattr'](self, 'deck'), '100%');
			}
			self['tabBar']['setWidth']('100%');
			self['tabBar']['addTabListener'](self);
			kwargs['__setitem__']('StyleName', kwargs['get']('StyleName', 'gwt-TabPanel'));
			$m['PanelBase']['__init__'](self);
			$pyjs_kwargs_call($m['Composite'], '__init__', null, kwargs, [{}, self, panel]);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['tabBar', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('add', function(widget, tabText, asHTML, name) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				tabText = arguments[2];
				asHTML = arguments[3];
				name = arguments[4];
			}
			if (typeof tabText == 'undefined') tabText=arguments['callee']['__args__'][4][1];
			if (typeof asHTML == 'undefined') asHTML=arguments['callee']['__args__'][5][1];
			if (typeof name == 'undefined') name=arguments['callee']['__args__'][6][1];

			self['insert'](widget, tabText, asHTML, self['getWidgetCount'](), name);
			return null;
		}
	, 1, [null,null,['self'],['widget'],['tabText', null],['asHTML', false],['name', null]]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('addTabListener', function(listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['tabListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addTabListener'] = $method;
		$method = $pyjs__bind_method2('getDeckPanel', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'deck');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getDeckPanel'] = $method;
		$method = $pyjs__bind_method2('getTabBar', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'tabBar');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTabBar'] = $method;
		$method = $pyjs__bind_method2('insert', function(widget, tabText, asHTML, beforeIndex, name) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				tabText = arguments[2];
				asHTML = arguments[3];
				beforeIndex = arguments[4];
				name = arguments[5];
			}
			if (typeof asHTML == 'undefined') asHTML=arguments['callee']['__args__'][5][1];
			if (typeof beforeIndex == 'undefined') beforeIndex=arguments['callee']['__args__'][6][1];
			if (typeof name == 'undefined') name=arguments['callee']['__args__'][7][1];

			if ($p['bool']((beforeIndex === null))) {
				beforeIndex = asHTML;
				asHTML = false;
			}
			self['children']['insert'](beforeIndex, widget);
			if ($p['bool']((name !== null))) {
				$p['getattr'](self, 'tab_names')['__setitem__'](name, widget);
			}
			self['tabBar']['insertTab'](tabText, asHTML, beforeIndex);
			self['deck']['insert'](widget, beforeIndex);
			return null;
		}
	, 1, [null,null,['self'],['widget'],['tabText'],['asHTML', false],['beforeIndex', null],['name', null]]);
		$cls_definition['insert'] = $method;
		$method = $pyjs__bind_method2('onBeforeTabSelected', function(sender, tabIndex) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				tabIndex = arguments[2];
			}
			var $iter1_nextval,$iter1_idx,$iter1_iter,listener,$iter1_array,$iter1_type;
			$iter1_iter = $p['getattr'](self, 'tabListeners');
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				listener = $iter1_nextval['$nextval'];
				if ($p['bool'](!$p['bool'](listener['onBeforeTabSelected'](sender, tabIndex)))) {
					return false;
				}
			}
			return true;
		}
	, 1, [null,null,['self'],['sender'],['tabIndex']]);
		$cls_definition['onBeforeTabSelected'] = $method;
		$method = $pyjs__bind_method2('onTabSelected', function(sender, tabIndex) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				tabIndex = arguments[2];
			}
			var $iter2_nextval,$iter2_type,$iter2_iter,listener,$iter2_idx,$iter2_array;
			self['deck']['showWidget'](tabIndex);
			$iter2_iter = $p['getattr'](self, 'tabListeners');
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				listener = $iter2_nextval['$nextval'];
				listener['onTabSelected'](sender, tabIndex);
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['tabIndex']]);
		$cls_definition['onTabSelected'] = $method;
		$method = $pyjs__bind_method2('remove', function(widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var index,$iter3_idx,$iter3_type,$iter3_iter,w,$iter3_array,k,$iter3_nextval;
			if ($p['bool']($p['isinstance'](widget, $p['basestring']))) {
				widget = $p['getattr'](self, 'tab_names')['__getitem__'](widget);
			}
			else if ($p['bool']($p['isinstance'](widget, $p['float_int']))) {
				widget = self['getWidget'](widget);
			}
			$iter3_iter = self['tab_names']['items']();
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter3_nextval['$nextval'], 2, null);
				k = $tupleassign1[0];
				w = $tupleassign1[1];
				if ($p['bool']($p['op_eq'](widget, w))) {
					self['tab_names']['pop'](k);
					break;
				}
			}
			index = self['getWidgetIndex'](widget);
			if ($p['bool']($p['op_eq'](index, (typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1))))) {
				return false;
			}
			self['children']['remove'](widget);
			self['tabBar']['removeTab'](index);
			self['deck']['remove'](widget);
			return true;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('removeTabListener', function(listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['tabListeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeTabListener'] = $method;
		$method = $pyjs__bind_method2('selectTab', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			if ($p['bool']($p['isinstance'](index, $p['basestring']))) {
				index = $p['getattr'](self, 'tab_names')['__getitem__'](index);
			}
			if ($p['bool'](!$p['bool']($p['isinstance'](index, $p['float_int'])))) {
				index = self['getWidgetIndex'](index);
			}
			self['tabBar']['selectTab'](index);
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['selectTab'] = $method;
		var $bases = new Array($m['PanelBase'],$m['Composite']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TabPanel', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.TabPanel', 'TabPanel', $m['TabPanel']);
	return this;
}; /* end pyjamas.ui.TabPanel */


/* end module: pyjamas.ui.TabPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.Composite.Composite', 'pyjamas.ui', 'pyjamas.ui.Composite', 'pyjamas.ui.DeckPanel.DeckPanel', 'pyjamas.ui.DeckPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.Panel.PanelBase', 'pyjamas.ui.Panel', 'pyjamas.ui.TabBar.TabBar', 'pyjamas.ui.TabBar']
*/
