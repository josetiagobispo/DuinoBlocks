/* start module: edu.uca.renderable.GroupElement */
$pyjs['loaded_modules']['edu.uca.renderable.GroupElement'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.renderable.GroupElement']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.renderable.GroupElement'];
	if(typeof $pyjs['loaded_modules']['edu.uca.renderable'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.renderable']['__was_initialized__']) $p['___import___']('edu.uca.renderable', null);
	var $m = $pyjs['loaded_modules']['edu.uca.renderable.GroupElement'];
	$m['__repr__'] = function() { return '<module: edu.uca.renderable.GroupElement>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.renderable.GroupElement';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.renderable']['GroupElement'] = $pyjs['loaded_modules']['edu.uca.renderable.GroupElement'];


	$m['Element'] = $p['___import___']('edu.uca.renderable.Element.Element', 'edu.uca.renderable', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.renderable', null, false);
	$m['GroupElement'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.renderable.GroupElement';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs_kwargs_call($m['Element'], '__init__', null, null, [{'Element':$m['DOM']['createTable'](), 'StyleName':'line_table'}, self]);
			self['draw']();
			self['subElements'] = $p['list']([]);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('draw', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var body;
			$m['DOM']['setAttribute'](self['getElement'](), 'border', 0);
			$m['DOM']['setAttribute'](self['getElement'](), 'cellPadding', 0);
			$m['DOM']['setAttribute'](self['getElement'](), 'cellSpacing', 0);
			body = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createTBody']()}]);
			self['row'] = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createTR'](), 'StyleName':'code_row'}]);
			body['append']($p['getattr'](self, 'row'));
			self['append'](body);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['draw'] = $method;
		$method = $pyjs__bind_method2('drawSubElement', function(element) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
			}
			var td;
			td = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createTD']()}]);
			td['append'](element);
			self['row']['append'](td);
			self['subElements']['append'](element);
			return null;
		}
	, 1, [null,null,['self'],['element']]);
		$cls_definition['drawSubElement'] = $method;
		var $bases = new Array($m['Element']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('GroupElement', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.renderable.GroupElement */


/* end module: edu.uca.renderable.GroupElement */


/*
PYJS_DEPS: ['edu.uca.renderable.Element.Element', 'edu', 'edu.uca', 'edu.uca.renderable', 'edu.uca.renderable.Element', 'pyjamas.DOM', 'pyjamas']
*/
