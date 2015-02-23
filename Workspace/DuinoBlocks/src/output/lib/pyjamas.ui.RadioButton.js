/* start module: pyjamas.ui.RadioButton */
$pyjs['loaded_modules']['pyjamas.ui.RadioButton'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.RadioButton']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.RadioButton'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.RadioButton'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.RadioButton>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.RadioButton';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['RadioButton'] = $pyjs['loaded_modules']['pyjamas.ui.RadioButton'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['CheckBox'] = $p['___import___']('pyjamas.ui.CheckBox.CheckBox', 'pyjamas.ui', null, false);
	$m['RadioButton'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.RadioButton';
		$cls_definition['_props'] = $p['list']([$p['tuple'](['group', 'Group', 'Name', null])]);
		$method = $pyjs__bind_method2('__init__', function(group, $$label, asHTML) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var ka = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (ka === null || typeof ka != 'object' || ka['__name__'] != 'dict' || typeof ka['$pyjs_is_kwarg'] == 'undefined') {
					var ka = arguments[arguments['length']+1];
				} else {
					delete ka['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				group = arguments[1];
				$$label = arguments[2];
				asHTML = arguments[3];
				var ka = arguments['length'] >= 5 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (ka === null || typeof ka != 'object' || ka['__name__'] != 'dict' || typeof ka['$pyjs_is_kwarg'] == 'undefined') {
					ka = arguments[arguments['length']+1];
				} else {
					delete ka['$pyjs_is_kwarg'];
				}
			}
			if (typeof ka == 'undefined') {
				ka = $p['__empty_dict']();
				if (typeof asHTML != 'undefined') {
					if (asHTML !== null && typeof asHTML['$pyjs_is_kwarg'] != 'undefined') {
						ka = asHTML;
						asHTML = arguments[4];
					}
				} else 				if (typeof $$label != 'undefined') {
					if ($$label !== null && typeof $$label['$pyjs_is_kwarg'] != 'undefined') {
						ka = $$label;
						$$label = arguments[4];
					}
				} else 				if (typeof group != 'undefined') {
					if (group !== null && typeof group['$pyjs_is_kwarg'] != 'undefined') {
						ka = group;
						group = arguments[4];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						ka = self;
						self = arguments[4];
					}
				} else {
				}
			}
			if (typeof group == 'undefined') group=arguments['callee']['__args__'][3][1];
			if (typeof $$label == 'undefined') $$label=arguments['callee']['__args__'][4][1];
			if (typeof asHTML == 'undefined') asHTML=arguments['callee']['__args__'][5][1];
			var $or1,$or2,$$label;
			ka['__setitem__']('StyleName', ka['get']('StyleName', 'gwt-RadioButton'));
			ka['__setitem__']('Element', ($p['bool']($or1=ka['get']('Element', null))?$or1:$m['DOM']['createInputRadio'](group)));
			$pyjs_kwargs_call($m['CheckBox'], '__init__', null, ka, [{}, self, $$label, asHTML]);
			return null;
		}
	, 1, [null,['ka'],['self'],['group', null],['$$label', null],['asHTML', false]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_getProps', function() {
    var self = this['prototype'];
			var $add2,$add1;
			return $p['__op_add']($add1=$m['CheckBox']['_getProps'](),$add2=$p['getattr'](self, '_props'));
		}
	, 2, [null,null,['self']]);
		$cls_definition['_getProps'] = $method;
		var $bases = new Array($m['CheckBox']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('RadioButton', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.RadioButton', 'RadioButton', $m['RadioButton']);
	return this;
}; /* end pyjamas.ui.RadioButton */


/* end module: pyjamas.ui.RadioButton */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.CheckBox.CheckBox', 'pyjamas.ui', 'pyjamas.ui.CheckBox']
*/
