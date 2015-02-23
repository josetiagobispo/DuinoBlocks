/* start module: pyjamas.ui.TabBar */
$pyjs['loaded_modules']['pyjamas.ui.TabBar'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.TabBar']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.TabBar'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.TabBar'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.TabBar>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.TabBar';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['TabBar'] = $pyjs['loaded_modules']['pyjamas.ui.TabBar'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', 'pyjamas.ui', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', 'pyjamas.ui', null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', 'pyjamas.ui', null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui', null, false);
	$m['ClickDelegatePanel'] = $p['___import___']('pyjamas.ui.ClickDelegatePanel.ClickDelegatePanel', 'pyjamas.ui', null, false);
	$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', 'pyjamas.ui', null, false);
	$m['TabBar'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.TabBar';
		$cls_definition['STYLENAME_DEFAULT'] = 'gwt-TabBarItem';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}
			var element,rest,first;
			if ($p['bool'](!$p['bool'](kwargs['has_key']('StyleName')))) {
				kwargs['__setitem__']('StyleName', 'gwt-TabBar');
			}
			element = null;
			if ($p['bool'](kwargs['has_key']('Element'))) {
				element = kwargs['pop']('Element');
			}
			self['panel'] = $pyjs_kwargs_call(null, $m['HorizontalPanel'], null, null, [{'Element':element}]);
			self['selectedTab'] = null;
			self['tabListeners'] = $p['list']([]);
			self['panel']['setVerticalAlignment']($p['getattr']($m['HasAlignment'], 'ALIGN_BOTTOM'));
			first = $m['HTML']('&nbsp;', true);
			rest = $m['HTML']('&nbsp;', true);
			first['setStyleName']('gwt-TabBarFirst');
			rest['setStyleName']('gwt-TabBarRest');
			first['setHeight']('100%');
			rest['setHeight']('100%');
			self['panel']['add'](first);
			self['panel']['add'](rest);
			first['setHeight']('100%');
			self['panel']['setCellHeight'](first, '100%');
			self['panel']['setCellWidth'](rest, '100%');
			$pyjs_kwargs_call($m['Composite'], '__init__', null, kwargs, [{}, self, $p['getattr'](self, 'panel')]);
			self['sinkEvents']($p['getattr']($m['Event'], 'ONCLICK'));
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('addTab', function(text, asHTML) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				asHTML = arguments[2];
			}
			if (typeof asHTML == 'undefined') asHTML=arguments['callee']['__args__'][4][1];

			self['insertTab'](text, asHTML, self['getTabCount']());
			return null;
		}
	, 1, [null,null,['self'],['text'],['asHTML', false]]);
		$cls_definition['addTab'] = $method;
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
		$method = $pyjs__bind_method2('getSelectedTab', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $sub2,$sub1;
			if ($p['bool'](($p['getattr'](self, 'selectedTab') === null))) {
				return (typeof ($usub1=1)=='number'?
					-$usub1:
					$p['op_usub']($usub1));
			}
			return $p['__op_sub']($sub1=self['panel']['getWidgetIndex']($p['getattr'](self, 'selectedTab')),$sub2=1);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getSelectedTab'] = $method;
		$method = $pyjs__bind_method2('getTabCount', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $sub3,$sub4;
			return $p['__op_sub']($sub3=self['panel']['getWidgetCount'](),$sub4=2);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTabCount'] = $method;
		$method = $pyjs__bind_method2('getTabWidget', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var widget,delPanel,$add2,$add1,focusablePanel;
			if ($p['bool'](((($p['cmp'](index, self['getTabCount']()))|1) == 1))) {
				return null;
			}
			delPanel = self['panel']['getWidget']($p['__op_add']($add1=index,$add2=1));
			focusablePanel = delPanel['getFocusablePanel']();
			widget = focusablePanel['getWidget']();
			return widget;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['getTabWidget'] = $method;
		$method = $pyjs__bind_method2('getTabHTML', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var fpe,widget;
			widget = self['getTabWidget'](index);
			if ($p['bool']($p['hasattr'](widget, 'getHTML'))) {
				return widget['getHTML']();
			}
			else if ($p['bool']($p['hasattr'](widget, 'getText'))) {
				return widget['getText']();
			}
			else {
				fpe = $m['DOM']['getParent'](self['focusablePanel']['getElement']());
				return $m['DOM']['getInnerHTML'](fpe);
			}
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['getTabHTML'] = $method;
		$method = $pyjs__bind_method2('createTabTextWrapper', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['createTabTextWrapper'] = $method;
		$method = $pyjs__bind_method2('insertTab', function(text, asHTML, beforeIndex) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				asHTML = arguments[2];
				beforeIndex = arguments[3];
			}
			if (typeof beforeIndex == 'undefined') beforeIndex=arguments['callee']['__args__'][5][1];
			var istext,$or1,$or2,$add3,item,$add4;
			if ($p['bool']((beforeIndex === null))) {
				beforeIndex = asHTML;
				asHTML = false;
			}
			if ($p['bool'](($p['bool']($or1=($p['cmp'](beforeIndex, 0) == -1))?$or1:($p['cmp'](beforeIndex, self['getTabCount']()) == 1)))) {
			}
			if ($p['bool']((text === null))) {
				text = $m['HTML']('&nbsp;', true);
				text['setWidth']('100%');
				text['setStyleName']('gwt-TabBarRest');
				self['panel']['insert'](text, $p['__op_add']($add3=beforeIndex,$add4=1));
				self['panel']['setCellWidth'](text, '100%');
				return null;
			}
			istext = $p['isinstance'](text, $p['basestring']);
			if ($p['bool'](istext)) {
				if ($p['bool'](asHTML)) {
					item = $m['HTML'](text);
				}
				else {
					item = $m['Label'](text);
				}
				item['setWordWrap'](false);
			}
			else {
				item = text;
			}
			self['insertTabWidget'](item, beforeIndex);
			return null;
		}
	, 1, [null,null,['self'],['text'],['asHTML'],['beforeIndex', null]]);
		$cls_definition['insertTab'] = $method;
		$method = $pyjs__bind_method2('insertTabWidget', function(widget, beforeIndex) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				beforeIndex = arguments[2];
			}
			var focusablePanel,$add7,$add5,$add6,$add8,delWidget;
			delWidget = $m['ClickDelegatePanel'](self, widget, self, self);
			delWidget['setStyleName']($p['getattr'](self, 'STYLENAME_DEFAULT'));
			focusablePanel = delWidget['getFocusablePanel']();
			self['panel']['insert'](delWidget, $p['__op_add']($add5=beforeIndex,$add6=1));
			self['setStyleName']($m['DOM']['getParent'](delWidget['getElement']()), $p['__op_add']($add7=$p['getattr'](self, 'STYLENAME_DEFAULT'),$add8='-wrapper'), true);
			return null;
		}
	, 1, [null,null,['self'],['widget'],['beforeIndex']]);
		$cls_definition['insertTabWidget'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
			var $iter1_nextval,$iter1_type,$iter1_idx,i,$iter1_iter,$sub8,$iter1_array,$sub7,$sub6,$sub5;
			$iter1_iter = $p['range'](1, $p['__op_sub']($sub5=self['panel']['getWidgetCount'](),$sub6=1));
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				i = $iter1_nextval['$nextval'];
				if ($p['bool']($m['DOM']['isOrHasChild'](self['panel']['getWidget'](i)['getElement'](), sender['getElement']()))) {
					return self['selectTab']($p['__op_sub']($sub7=i,$sub8=1));
				}
			}
			return false;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method2('removeTab', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $add9,$add10,toRemove;
			self['checkTabIndex'](index);
			toRemove = self['panel']['getWidget']($p['__op_add']($add9=index,$add10=1));
			if ($p['bool']($p['op_eq'](toRemove, $p['getattr'](self, 'selectedTab')))) {
				self['selectedTab'] = null;
			}
			self['panel']['remove'](toRemove);
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['removeTab'] = $method;
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
			var $iter2_nextval,$iter2_type,$iter2_iter,$iter3_array,listener,$iter2_idx,$iter3_idx,$add11,$add12,$iter3_type,$iter3_nextval,$iter2_array,$iter3_iter;
			self['checkTabIndex'](index);
			$iter2_iter = $p['getattr'](self, 'tabListeners');
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				listener = $iter2_nextval['$nextval'];
				if ($p['bool'](!$p['bool'](listener['onBeforeTabSelected'](self, index)))) {
					return false;
				}
			}
			self['setSelectionStyle']($p['getattr'](self, 'selectedTab'), false);
			if ($p['bool']($p['op_eq'](index, (typeof ($usub2=1)=='number'?
				-$usub2:
				$p['op_usub']($usub2))))) {
				self['selectedTab'] = null;
				return true;
			}
			self['selectedTab'] = self['panel']['getWidget']($p['__op_add']($add11=index,$add12=1));
			self['setSelectionStyle']($p['getattr'](self, 'selectedTab'), true);
			$iter3_iter = $p['getattr'](self, 'tabListeners');
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				listener = $iter3_nextval['$nextval'];
				listener['onTabSelected'](self, index);
			}
			return true;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['selectTab'] = $method;
		$method = $pyjs__bind_method2('checkTabIndex', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $or3,$or4;
			if ($p['bool'](($p['bool']($or3=($p['cmp'](index, (typeof ($usub3=1)=='number'?
				-$usub3:
				$p['op_usub']($usub3))) == -1))?$or3:((($p['cmp'](index, self['getTabCount']()))|1) == 1)))) {
			}
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['checkTabIndex'] = $method;
		$method = $pyjs__bind_method2('setSelectionStyle', function(item, selected) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
				selected = arguments[2];
			}

			if ($p['bool']((item !== null))) {
				if ($p['bool'](selected)) {
					item['addStyleName']('gwt-TabBarItem-selected');
					self['setStyleName']($m['DOM']['getParent'](item['getElement']()), 'gwt-TabBarItem-wrapper-selected', true);
				}
				else {
					item['removeStyleName']('gwt-TabBarItem-selected');
					self['setStyleName']($m['DOM']['getParent'](item['getElement']()), 'gwt-TabBarItem-wrapper-selected', false);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['item'],['selected']]);
		$cls_definition['setSelectionStyle'] = $method;
		var $bases = new Array($m['Composite']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TabBar', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.TabBar', 'TabBar', $m['TabBar']);
	return this;
}; /* end pyjamas.ui.TabBar */


/* end module: pyjamas.ui.TabBar */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.Composite.Composite', 'pyjamas.ui', 'pyjamas.ui.Composite', 'pyjamas.ui.Event', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.ClickDelegatePanel.ClickDelegatePanel', 'pyjamas.ui.ClickDelegatePanel', 'pyjamas.ui.HasAlignment']
*/
