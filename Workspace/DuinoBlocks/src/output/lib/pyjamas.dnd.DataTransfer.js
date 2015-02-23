/* start module: pyjamas.dnd.DataTransfer */
$pyjs['loaded_modules']['pyjamas.dnd.DataTransfer'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.dnd.DataTransfer']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.dnd.DataTransfer'];
	if(typeof $pyjs['loaded_modules']['pyjamas.dnd'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.dnd']['__was_initialized__']) $p['___import___']('pyjamas.dnd', null);
	var $m = $pyjs['loaded_modules']['pyjamas.dnd.DataTransfer'];
	$m['__repr__'] = function() { return '<module: pyjamas.dnd.DataTransfer>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.dnd.DataTransfer';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.dnd']['DataTransfer'] = $pyjs['loaded_modules']['pyjamas.dnd.DataTransfer'];


	$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', 'pyjamas.dnd', null, false);
	$m['cloneElement'] = $p['___import___']('pyjamas.dnd.utils.cloneElement', 'pyjamas.dnd', null, false);
	$m['DOMStringList'] = $p['___import___']('pyjamas.dnd.utils.DOMStringList', 'pyjamas.dnd', null, false);
	$m['READ_ONLY'] = $p['___import___']('pyjamas.dnd.READ_ONLY', 'pyjamas.dnd', null, false);
	$m['READ_WRITE'] = $p['___import___']('pyjamas.dnd.READ_WRITE', 'pyjamas.dnd', null, false);
	$m['PROTECTED'] = $p['___import___']('pyjamas.dnd.PROTECTED', 'pyjamas.dnd', null, false);
	$m['DISABLED'] = $p['___import___']('pyjamas.dnd.DISABLED', 'pyjamas.dnd', null, false);
	$m['identity'] = function(obj) {

		return obj;
	};
	$m['identity']['__name__'] = 'identity';

	$m['identity']['__bind_type__'] = 0;
	$m['identity']['__args__'] = [null,null,['obj']];
	$m['DataTransferItem'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.dnd.DataTransfer';
		$method = $pyjs__bind_method2('__init__', function(type, data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				type = arguments[1];
				data = arguments[2];
			}

			self['_type'] = type;
			self['_data'] = data;
			return null;
		}
	, 1, [null,null,['self'],['type'],['data']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getType', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool']($p['op_eq']($p['getattr'](self, 'mode'), $m['DISABLED']))) {
				return '';
			}
			return $p['getattr'](self, '_type');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getType'] = $method;
		$cls_definition['type'] = $p['property']($p['staticmethod']($cls_definition['getType']));
		$method = $pyjs__bind_method2('getKind', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool']($p['op_eq']($p['getattr'](self, 'mode'), $m['DISABLED']))) {
				return '';
			}
			return 'string';
		}
	, 1, [null,null,['self']]);
		$cls_definition['getKind'] = $method;
		$cls_definition['kind'] = $p['property']($p['staticmethod']($cls_definition['getKind']));
		$method = $pyjs__bind_method2('getMode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '_mode');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getMode'] = $method;
		$method = $pyjs__bind_method2('setMode', function(mode) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				mode = arguments[1];
			}

			self['_mode'] = mode;
			return null;
		}
	, 1, [null,null,['self'],['mode']]);
		$cls_definition['setMode'] = $method;
		$cls_definition['mode'] = $p['property']($p['staticmethod']($cls_definition['getMode']), $p['staticmethod']($cls_definition['setMode']));
		$method = $pyjs__bind_method2('getAsString', function(callback) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				callback = arguments[1];
			}
			if (typeof callback == 'undefined') callback=arguments['callee']['__args__'][3][1];
			var $and2,$and1;
			if ($p['bool'](($p['bool']($and1=callback)?$p['op_eq']($p['getattr'](self, 'kind'), 'string'):$and1))) {
				if ($p['bool']($p['list']([$m['READ_WRITE'], $m['READ_ONLY']])['__contains__']($p['getattr'](self, 'mode')))) {
					callback($p['getattr'](self, '_data'));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['callback', null]]);
		$cls_definition['getAsString'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '_data');
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('DataTransferItem', $p['tuple']($bases), $data);
	})();
	$m['DataTransferItems'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.dnd.DataTransfer';
		$method = $pyjs__bind_method2('getMode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '_mode');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getMode'] = $method;
		$method = $pyjs__bind_method2('setMode', function(mode) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				mode = arguments[1];
			}
			var $iter1_nextval,$iter1_type,$iter1_idx,$iter1_iter,item,$iter1_array;
			self['_mode'] = mode;
			$iter1_iter = self;
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				item = $iter1_nextval['$nextval'];
				item['mode'] = mode;
			}
			return null;
		}
	, 1, [null,null,['self'],['mode']]);
		$cls_definition['setMode'] = $method;
		$cls_definition['mode'] = $p['property']($p['staticmethod']($cls_definition['getMode']), $p['staticmethod']($cls_definition['setMode']));
		$method = $pyjs__bind_method2('__delitem__', function(key) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}

			if ($p['bool'](!$p['bool']($p['op_eq']($p['getattr'](self, 'mode'), $m['READ_WRITE'])))) {
				throw ($p['Exception']('Cannot delete item except in READ_WRITE mode.'));
			}
			else {
				$p['list']['__delitem__'](self, key);
			}
			return null;
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['__delitem__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool']($p['op_eq']($p['getattr'](self, 'mode'), $m['DISABLED']))) {
				return 0;
			}
			return $p['list']['__len__'](self);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('clear', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool']($p['op_eq']($p['getattr'](self, 'mode'), $m['READ_WRITE']))) {
				while ($p['bool']($p['len'](self))) {
					self['__delitem__']((typeof ($usub1=1)=='number'?
						-$usub1:
						$p['op_usub']($usub1)));
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('add', function(data, mime) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				mime = arguments[2];
			}
			var idx,item;
			if ($p['bool']($p['op_eq']($p['getattr'](self, 'mode'), $m['READ_WRITE']))) {
				item = $m['DataTransferItem'](mime['lower'](), data);
				self['append'](item);
				idx = self['index'](item);
				return self['__getitem__'](idx);
			}
			return null;
		}
	, 1, [null,null,['self'],['data'],['mime']]);
		$cls_definition['add'] = $method;
		var $bases = new Array($p['list']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('DataTransferItems', $p['tuple']($bases), $data);
	})();
	$m['DragDataStore'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.dnd.DataTransfer';
		$cls_definition['_mode'] = $m['PROTECTED'];
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['items'] = $m['DataTransferItems']();
			self['default_feedback'] = null;
			self['elements'] = $p['list']([]);
			self['bitmap'] = null;
			self['hotspot_coordinate'] = null;
			self['allowed_effects_state'] = 'uninitialized';
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('setMode', function(mode) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				mode = arguments[1];
			}

			if ($p['bool']($p['list']([$m['PROTECTED'], $m['READ_WRITE'], $m['READ_ONLY']])['__contains__'](mode))) {
				self['_mode'] = mode;
				$p['getattr'](self, 'items')['mode'] = mode;
			}
			return null;
		}
	, 1, [null,null,['self'],['mode']]);
		$cls_definition['setMode'] = $method;
		$method = $pyjs__bind_method2('getMode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '_mode');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getMode'] = $method;
		$cls_definition['mode'] = $p['property']($p['staticmethod']($cls_definition['getMode']), $p['staticmethod']($cls_definition['setMode']));
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('DragDataStore', $p['tuple']($bases), $data);
	})();
	$m['DataTransfer'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.dnd.DataTransfer';
		$method = $pyjs__bind_method2('__init__', function(dataStore) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				dataStore = arguments[1];
			}

			self['dataStore'] = dataStore;
			self['setEffectAllowed']($p['getattr'](dataStore, 'allowed_effects_state'));
			self['_dropEffect'] = 'none';
			self['_value'] = null;
			return null;
		}
	, 1, [null,null,['self'],['dataStore']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('acquireData', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			self['_value'] = value;
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['acquireData'] = $method;
		$method = $pyjs__bind_method2('setDropEffect', function(effect) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				effect = arguments[1];
			}

			if ($p['bool']($p['tuple'](['none', 'copy', 'link', 'move'])['__contains__'](effect))) {
				self['_dropEffect'] = effect;
			}
			return null;
		}
	, 1, [null,null,['self'],['effect']]);
		$cls_definition['setDropEffect'] = $method;
		$method = $pyjs__bind_method2('getDropEffect', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '_dropEffect');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getDropEffect'] = $method;
		$cls_definition['dropEffect'] = $p['property']($p['staticmethod']($cls_definition['getDropEffect']), $p['staticmethod']($cls_definition['setDropEffect']));
		$method = $pyjs__bind_method2('setEffectAllowed', function(effect) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				effect = arguments[1];
			}

			if ($p['bool']($p['tuple'](['none', 'copy', 'copyLink', 'copyMove', 'link', 'linkMove', 'move', 'all', 'uninitialized'])['__contains__'](effect))) {
				self['_effectAllowed'] = effect;
			}
			return null;
		}
	, 1, [null,null,['self'],['effect']]);
		$cls_definition['setEffectAllowed'] = $method;
		$method = $pyjs__bind_method2('getEffectAllowed', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '_effectAllowed');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getEffectAllowed'] = $method;
		$cls_definition['effectAllowed'] = $p['property']($p['staticmethod']($cls_definition['getEffectAllowed']), $p['staticmethod']($cls_definition['setEffectAllowed']));
		$method = $pyjs__bind_method2('setData', function(format, data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				format = arguments[1];
				data = arguments[2];
			}
			var items,z;
			if ($p['bool']($p['op_eq']($p['getattr']($p['getattr'](self, 'dataStore'), 'mode'), $m['READ_WRITE']))) {
				format = format['strip']()['lower']();
				if ($p['bool']($p['op_eq'](format, 'text'))) {
					format = 'text/plain';
				}
				else if ($p['bool']($p['op_eq'](format, 'url'))) {
					format = 'text/uri-list';
				}
				self['clearData'](format);
				items = $p['getattr']($p['getattr'](self, 'dataStore'), 'items');
				z = items['add'](data, format);
				z['mode'] = $m['READ_WRITE'];
			}
			return null;
		}
	, 1, [null,null,['self'],['format'],['data']]);
		$cls_definition['setData'] = $method;
		$method = $pyjs__bind_method2('getTypes', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter2_nextval,$iter2_type,theList,$iter2_iter,items,item,$iter2_idx,$iter2_array;
			theList = $p['list']([]);
			if ($p['bool'](($p['getattr'](self, 'dataStore') !== null))) {
				items = $p['getattr']($p['getattr'](self, 'dataStore'), 'items');
				$iter2_iter = items;
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					item = $iter2_nextval['$nextval'];
					theList['append']($p['getattr'](item, 'type'));
				}
			}
			return $m['DOMStringList'](theList);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTypes'] = $method;
		$cls_definition['types'] = $p['property']($p['staticmethod']($cls_definition['getTypes']));
		$method = $pyjs__bind_method2('getData', function(format) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				format = arguments[1];
			}
			var $iter3_idx,theList,$iter3_array,item,$iter3_iter,$iter3_type,$iter3_nextval;
			format = format['strip']()['lower']();
			if ($p['bool']($p['op_eq'](format, 'text'))) {
				format = 'text/plain';
			}
			else if ($p['bool']($p['op_eq'](format, 'url'))) {
				format = 'text/uri-list';
			}
			theList = $p['getattr']($p['getattr'](self, 'dataStore'), 'items');
			$iter3_iter = theList;
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				item = $iter3_nextval['$nextval'];
				if ($p['bool']($p['op_eq']($p['getattr'](item, 'type'), format))) {
					item['getAsString']($p['getattr'](self, 'acquireData'));
					return $p['getattr'](self, '_value');
				}
			}
			return '';
		}
	, 1, [null,null,['self'],['format']]);
		$cls_definition['getData'] = $method;
		$method = $pyjs__bind_method2('clearData', function(format) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				format = arguments[1];
			}
			if (typeof format == 'undefined') format=arguments['callee']['__args__'][3][1];
			var $iter5_nextval,$iter5_idx,idx,thelist,$iter4_nextval,$iter4_idx,item,$iter5_iter,$iter4_type,$iter5_array,$iter4_array,$iter5_type,$iter4_iter,to_del;
			thelist = $p['getattr']($p['getattr'](self, 'dataStore'), 'items');
			if ($p['bool'](($p['getattr'](self, 'dataStore') !== null))) {
				if ($p['bool']((format === null))) {
					thelist['clear']();
				}
				else {
					format = format['lower']();
					to_del = $p['list']([]);
					$iter4_iter = $p['enumerate'](thelist);
					$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
					while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
						var $tupleassign1 = $p['__ass_unpack']($iter4_nextval['$nextval'], 2, null);
						idx = $tupleassign1[0];
						item = $tupleassign1[1];
						if ($p['bool']($p['op_eq']($p['getattr'](item, 'type'), format))) {
							to_del['append'](idx);
						}
					}
					to_del['reverse']();
					$iter5_iter = to_del;
					$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
					while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
						idx = $iter5_nextval['$nextval'];
						thelist['__delitem__'](idx);
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['format', null]]);
		$cls_definition['clearData'] = $method;
		$method = $pyjs__bind_method2('addElement', function(element) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
			}

			self['dataStore']['elements']['append']($m['cloneElement'](element));
			return null;
		}
	, 1, [null,null,['self'],['element']]);
		$cls_definition['addElement'] = $method;
		$method = $pyjs__bind_method2('setDragImage', function(element, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			if (typeof x == 'undefined') x=arguments['callee']['__args__'][4][1];
			if (typeof y == 'undefined') y=arguments['callee']['__args__'][5][1];

			$p['getattr'](self, 'dataStore')['bitmap'] = element;
			$p['getattr'](self, 'dataStore')['hotspot_coordinate'] = $p['tuple']([x, y]);
			return null;
		}
	, 1, [null,null,['self'],['element'],['x', 0],['y', 0]]);
		$cls_definition['setDragImage'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('DataTransfer', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.dnd.DataTransfer */


/* end module: pyjamas.dnd.DataTransfer */


/*
PYJS_DEPS: ['pyjamas.Timer.Timer', 'pyjamas', 'pyjamas.Timer', 'pyjamas.dnd.utils.cloneElement', 'pyjamas.dnd', 'pyjamas.dnd.utils', 'pyjamas.dnd.utils.DOMStringList', 'pyjamas.dnd.READ_ONLY', 'pyjamas.dnd.READ_WRITE', 'pyjamas.dnd.PROTECTED', 'pyjamas.dnd.DISABLED']
*/
