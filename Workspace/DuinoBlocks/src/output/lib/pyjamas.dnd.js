/* start module: pyjamas.dnd */
$pyjs['loaded_modules']['pyjamas.dnd'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.dnd']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.dnd'];
	if(typeof $pyjs['loaded_modules']['pyjamas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas']['__was_initialized__']) $p['___import___']('pyjamas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.dnd'];
	$m['__repr__'] = function() { return '<module: pyjamas.dnd>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.dnd';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas']['dnd'] = $pyjs['loaded_modules']['pyjamas.dnd'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.dnd', null, false);
	$m['makeDraggable'] = function(widget) {
		var element;
		element = widget['getElement']();
		$m['DOM']['setAttribute'](element, 'draggable', true);
		return null;
	};
	$m['makeDraggable']['__name__'] = 'makeDraggable';

	$m['makeDraggable']['__bind_type__'] = 0;
	$m['makeDraggable']['__args__'] = [null,null,['widget']];
	$m['PROTECTED'] = 1;
	$m['READ_WRITE'] = 2;
	$m['READ_ONLY'] = 3;
	$m['DISABLED'] = 4;
	$m['getTypes'] = function(event) {
		var $iter1_iter,$iter2_type,ct,$iter2_iter,$add3,$pyjs_try_err,$iter1_array,$iter1_nextval,type_i,$iter2_idx,dt_types,dt,types,$iter2_nextval,$iter1_type,$add2,item,$add1,$iter1_idx,$add4,$iter2_array;
		types = $p['list']([]);
		dt = $p['getattr'](event, 'dataTransfer');
		try {
			dt_types = $p['getattr'](dt, 'types');
			if ($p['bool']($p['isinstance'](dt_types, $p['basestring']))) {
				return dt_types['$$split'](',');
			}
			ct = 0;
			try {
				type_i = dt_types['item'](ct);
				while ($p['bool'](type_i)) {
					types['append'](type_i);
					ct = $p['__op_add']($add1=ct,$add2=1);
					type_i = dt_types['item'](ct);
				}
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
					try {
						type_i = dt_types['__getitem__'](ct);
						while ($p['bool'](type_i)) {
							types['append'](type_i);
							ct = $p['__op_add']($add3=ct,$add4=1);
							type_i = dt_types['__getitem__'](ct);
						}
					} catch($pyjs_try_err) {
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (true) {
							$iter1_iter = $p['list'](['Text', 'URL', 'File', 'HTML', 'Image', 'String']);
							$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
							while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
								item = $iter1_nextval['$nextval'];
								try {
									if ($p['bool']($p['len'](dt['getData'](item)))) {
										types['append'](item);
									}
								} catch($pyjs_try_err) {
									var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
									$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
									if (true) {
									}
								}
							}
						}
					}
				}
			}
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if (true) {
				$iter2_iter = $p['list'](['Text', 'URL', 'File', 'HTML', 'Image']);
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					item = $iter2_nextval['$nextval'];
					try {
						if ($p['bool']($p['len'](dt['getData'](item)))) {
							types['append'](item);
						}
					} catch($pyjs_try_err) {
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (true) {
						}
					}
				}
			}
		}
		return types;
	};
	$m['getTypes']['__name__'] = 'getTypes';

	$m['getTypes']['__bind_type__'] = 0;
	$m['getTypes']['__args__'] = [null,null,['event']];
	return this;
}; /* end pyjamas.dnd */


/* end module: pyjamas.dnd */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas']
*/
