/* start module: pyjamas.dnd.utils */
$pyjs['loaded_modules']['pyjamas.dnd.utils'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.dnd.utils']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.dnd.utils'];
	if(typeof $pyjs['loaded_modules']['pyjamas.dnd'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.dnd']['__was_initialized__']) $p['___import___']('pyjamas.dnd', null);
	var $m = $pyjs['loaded_modules']['pyjamas.dnd.utils'];
	$m['__repr__'] = function() { return '<module: pyjamas.dnd.utils>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.dnd.utils';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.dnd']['utils'] = $pyjs['loaded_modules']['pyjamas.dnd.utils'];


	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.dnd', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.dnd', null, false);
	$m['isIn'] = function(element, x, y) {
		var $add3,$and1,top,$and3,$and4,height,$add2,width,$add1,$add4,$and2,left;
		top = $m['DOM']['getAbsoluteTop'](element);
		height = $m['DOM']['getIntAttribute'](element, 'offsetHeight');
		if ($p['bool'](($p['bool']($and1=((($p['cmp'](y, top))|1) == 1))?($p['cmp'](y, $p['__op_add']($add1=top,$add2=height)) < 1):$and1))) {
			left = $m['DOM']['getAbsoluteLeft'](element);
			width = $m['DOM']['getIntAttribute'](element, 'offsetWidth');
			if ($p['bool'](($p['bool']($and3=((($p['cmp'](x, left))|1) == 1))?($p['cmp'](x, $p['__op_add']($add3=left,$add4=width)) < 1):$and3))) {
				return true;
			}
		}
		return false;
	};
	$m['isIn']['__name__'] = 'isIn';

	$m['isIn']['__bind_type__'] = 0;
	$m['isIn']['__args__'] = [null,null,['element'],['x'],['y']];
	$m['isCanceled'] = function(event) {

		return !$p['bool']($p['getattr'](event, 'returnValue'));
	};
	$m['isCanceled']['__name__'] = 'isCanceled';

	$m['isCanceled']['__bind_type__'] = 0;
	$m['isCanceled']['__args__'] = [null,null,['event']];
	$m['findDraggable'] = function(element, x, y) {
		var $iter1_nextval,$iter1_type,$iter1_iter,draggable,$pyjs_try_err,$iter1_array,elt,$iter1_idx;
		$iter1_iter = $m['DOM']['IterWalkChildren'](element);
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
			elt = $iter1_nextval['$nextval'];
			try {
				draggable = $p['getattr'](elt, 'draggable');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
					draggable = false;
				}
			}
			if ($p['bool'](draggable)) {
				if ($p['bool']($m['isIn'](elt, x, y))) {
					return elt;
				}
			}
		}
		return null;
	};
	$m['findDraggable']['__name__'] = 'findDraggable';

	$m['findDraggable']['__bind_type__'] = 0;
	$m['findDraggable']['__args__'] = [null,null,['element'],['x'],['y']];
	$m['cloneElement'] = function(element) {
		var clone;
		clone = element['cloneNode'](true);
		return clone;
	};
	$m['cloneElement']['__name__'] = 'cloneElement';

	$m['cloneElement']['__bind_type__'] = 0;
	$m['cloneElement']['__args__'] = [null,null,['element']];
	$m['getComputedStyle'] = function(element, style) {
		if (typeof style == 'undefined') style=arguments['callee']['__args__'][3][1];
		var element_style;
		element_style = $doc['defaultView']['getComputedStyle'](element, null);
		if ($p['bool'](style)) {
			return element_style['__getitem__'](style);
		}
		return element_style;
	};
	$m['getComputedStyle']['__name__'] = 'getComputedStyle';

	$m['getComputedStyle']['__bind_type__'] = 0;
	$m['getComputedStyle']['__args__'] = [null,null,['element'],['style', null]];
	$m['copyStyles'] = function(elem1, elem2) {
		var style,$iter2_nextval,$iter2_type,$iter2_iter,value,element_style,$iter2_idx,$pyjs_try_err,$iter2_array;
		element_style = $m['getComputedStyle'](elem1);
		if ($p['bool'](element_style)) {
			element_style = $p['dict'](element_style);
		}
		else {
			return null;
		}
		$iter2_iter = element_style;
		$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
		while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
			style = $iter2_nextval['$nextval'];
			try {
				value = element_style['__getitem__'](style);
				if ($p['bool']($p['isinstance'](value, $p['str']))) {
					if ($p['bool'](!$p['bool']($p['op_eq'](style, 'cssText')))) {
						$m['DOM']['setStyleAttribute'](elem2, style, value);
						if ($p['bool']($p['op_eq'](value, 'font'))) {
							$m['DOM']['setStyleAttribute'](elem2, 'fontSize', $m['DOM']['getStyleAttribute'](elem1, 'fontSize'));
						}
					}
				}
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
				}
			}
		}
		return null;
	};
	$m['copyStyles']['__name__'] = 'copyStyles';

	$m['copyStyles']['__bind_type__'] = 0;
	$m['copyStyles']['__args__'] = [null,null,['elem1'],['elem2']];
	$m['getTargetInChildren'] = function(element, x, y) {
		var $iter3_idx,hit,$iter3_nextval,$iter3_array,return_elt,$iter3_iter,$iter3_type,elt;
		return_elt = null;
		if ($p['bool'](($p['cmp']($m['DOM']['getChildCount'](element), 0) == 1))) {
			$iter3_iter = $m['DOM']['IterWalkChildren'](element);
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				elt = $iter3_nextval['$nextval'];
				hit = $m['isIn'](elt, x, y);
				if ($p['bool'](hit)) {
					return_elt = elt;
				}
			}
		}
		return return_elt;
	};
	$m['getTargetInChildren']['__name__'] = 'getTargetInChildren';

	$m['getTargetInChildren']['__bind_type__'] = 0;
	$m['getTargetInChildren']['__args__'] = [null,null,['element'],['x'],['y']];
	$m['getElementUnderMouse'] = function(widget, x, y) {
		var hit,element,child_elem;
		element = widget['getElement']();
		hit = $m['isIn'](element, x, y);
		if ($p['bool'](hit)) {
			child_elem = $m['getTargetInChildren'](element, x, y);
			if ($p['bool'](child_elem)) {
				return child_elem;
			}
			return element;
		}
		return null;
	};
	$m['getElementUnderMouse']['__name__'] = 'getElementUnderMouse';

	$m['getElementUnderMouse']['__bind_type__'] = 0;
	$m['getElementUnderMouse']['__args__'] = [null,null,['widget'],['x'],['y']];
	$m['eventCoordinates'] = function(event) {

		return $p['tuple']([$p['getattr'](event, 'pageX'), $p['getattr'](event, 'pageY')]);
	};
	$m['eventCoordinates']['__name__'] = 'eventCoordinates';

	$m['eventCoordinates']['__bind_type__'] = 0;
	$m['eventCoordinates']['__args__'] = [null,null,['event']];
	$m['getScrollOffsets'] = function() {

 		return null;
	};
	$m['getScrollOffsets']['__name__'] = 'getScrollOffsets';

	$m['getScrollOffsets']['__bind_type__'] = 0;
	$m['getScrollOffsets']['__args__'] = [null,null];
	$m['DraggingWidget'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.dnd.utils';
		$method = $pyjs__bind_method2('__init__', function(element) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
			}
			if (typeof element == 'undefined') element=arguments['callee']['__args__'][3][1];
			var clone;
			$pyjs_kwargs_call($m['Widget'], '__init__', null, null, [{'Element':$m['DOM']['createElement']('div')}, self]);
			self['children'] = $p['list']([]);
			if ($p['bool']((element !== null))) {
				clone = $m['cloneElement'](element);
				self['addChild'](clone);
			}
			self['setStyleAttribute']('position', 'absolute');
			return null;
		}
	, 1, [null,null,['self'],['element', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('addChild', function(element) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
			}

			$m['DOM']['appendChild'](self['getElement'](), element);
			self['children']['append'](element);
			return null;
		}
	, 1, [null,null,['self'],['element']]);
		$cls_definition['addChild'] = $method;
		$method = $pyjs__bind_method2('setImage', function(element) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
			}
			var child,container,clone;
			container = self['getElement']();
			clone = $m['cloneElement'](element);
			while ($p['bool']($p['getattr'](self, 'children'))) {
				child = self['children']['pop']();
				$m['DOM']['removeChild'](container, child);
			}
			self['addChild'](clone);
			return null;
		}
	, 1, [null,null,['self'],['element']]);
		$cls_definition['setImage'] = $method;
		$method = $pyjs__bind_method2('addElement', function(element) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
			}
			var clone;
			clone = $m['cloneElement'](element);
			self['addChild'](clone);
			return null;
		}
	, 1, [null,null,['self'],['element']]);
		$cls_definition['addElement'] = $method;
		$method = $pyjs__bind_method2('updateCursor', function(operation) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				operation = arguments[1];
			}

			if ($p['bool']($p['op_eq'](operation, 'copy'))) {
			}
			else if ($p['bool']($p['op_eq'](operation, 'link'))) {
			}
			else if ($p['bool']($p['op_eq'](operation, 'move'))) {
			}
			else {
				self['setStyleAttribute']('cursor', 'auto');
			}
			return null;
		}
	, 1, [null,null,['self'],['operation']]);
		$cls_definition['updateCursor'] = $method;
		var $bases = new Array($m['Widget']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('DraggingWidget', $p['tuple']($bases), $data);
	})();
	$m['DOMStringList'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.dnd.utils';
		$method = $pyjs__bind_method2('__init__', function(iterable) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				iterable = arguments[1];
			}
			if (typeof iterable == 'undefined') iterable=arguments['callee']['__args__'][3][1];
			var $iter4_nextval,$iter4_idx,item,$iter4_type,$iter4_array,$iter4_iter;
			self['_data'] = $p['list']([]);
			if ($p['bool'](iterable)) {
				$iter4_iter = iterable;
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					item = $iter4_nextval['$nextval'];
					self['_data']['append']($p['str'](item));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['iterable', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_getLength', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['len']($p['getattr'](self, '_data'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getLength'] = $method;
		$cls_definition['length'] = $p['property']($p['staticmethod']($cls_definition['_getLength']));
		$method = $pyjs__bind_method2('item', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $pyjs_try_err;
			try {
				return $p['getattr'](self, '_data')['__getitem__'](index);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
					return null;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['item'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['str']($p['getattr'](self, '_data'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('DOMStringList', $p['tuple']($bases), $data);
	})();
	$m['Uri_list'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.dnd.utils';
		$method = $pyjs__bind_method2('__init__', function(data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
			var $iter5_nextval,$iter5_array,item,$iter5_iter,$iter5_idx,$iter5_type;
			self['_data'] = $p['list']([]);
			if ($p['bool'](data)) {
				$iter5_iter = data['$$split']('\r\n');
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					item = $iter5_nextval['$nextval'];
					self['_data']['append'](item['strip']());
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['data', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('add_url', function(url) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
			}

			self['_data']['append'](url);
			return null;
		}
	, 1, [null,null,['self'],['url']]);
		$cls_definition['add_url'] = $method;
		$method = $pyjs__bind_method2('get_first_url', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter6_idx,$iter6_type,item,$iter6_array,$iter6_iter,$iter6_nextval;
			$iter6_iter = $p['getattr'](self, '_data');
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
				item = $iter6_nextval['$nextval'];
				if ($p['bool'](!$p['op_eq'](item['__getitem__'](0), '#'))) {
					return item;
				}
			}
			return '';
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_first_url'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add6,$add5;
			if ($p['bool']($p['getattr'](self, '_data'))) {
				return $p['__op_add']($add5='\r\n'['join']($p['getattr'](self, '_data')),$add6='\r\n');
			}
			return '';
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Uri_list', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.dnd.utils */


/* end module: pyjamas.dnd.utils */


/*
PYJS_DEPS: ['pyjamas.ui.Widget.Widget', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Widget', 'pyjamas.DOM']
*/
