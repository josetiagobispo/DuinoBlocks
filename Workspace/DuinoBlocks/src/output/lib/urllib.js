/* start module: urllib */
$pyjs['loaded_modules']['urllib'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['urllib']['__was_initialized__']) return $pyjs['loaded_modules']['urllib'];
	var $m = $pyjs['loaded_modules']['urllib'];
	$m['__repr__'] = function() { return '<module: urllib>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'urllib';
	$m['__name__'] = __mod_name__;


	$m['quote'] = function(s, safe) {
		if (typeof safe == 'undefined') safe=arguments['callee']['__args__'][3][1];

		return encodeURIComponent(s);
	};
	$m['quote']['__name__'] = 'quote';

	$m['quote']['__bind_type__'] = 0;
	$m['quote']['__args__'] = [null,null,['s'],['safe', '']];
	$m['unquote_plus'] = function(st) {

		return decodeURIComponent(st['$$replace']('+', ' '));
	};
	$m['unquote_plus']['__name__'] = 'unquote_plus';

	$m['unquote_plus']['__bind_type__'] = 0;
	$m['unquote_plus']['__args__'] = [null,null,['st']];
	$m['unquote'] = function(st) {

		return decodeURIComponent(st);
	};
	$m['unquote']['__name__'] = 'unquote';

	$m['unquote']['__bind_type__'] = 0;
	$m['unquote']['__args__'] = [null,null,['st']];
	$m['urlencode'] = function(d) {
		var $iter1_nextval,$iter1_type,$iter1_idx,i,$iter1_iter,$add2,s,$add1,$iter1_array,v;
		s = '';
		$iter1_iter = d['iteritems']();
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
			var $tupleassign1 = $p['__ass_unpack']($iter1_nextval['$nextval'], 2, null);
			i = $tupleassign1[0];
			v = $tupleassign1[1];
			s = $p['__op_add']($add1=s,$add2=$p['sprintf']('%s=%s&', $p['tuple']([i, $m['quote']($p['str'](v))])));
		}
		if ($p['bool'](!$p['op_eq'](s, ''))) {
			s = $p['__getslice'](s, 0, (typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1)));
		}
		return s;
	};
	$m['urlencode']['__name__'] = 'urlencode';

	$m['urlencode']['__bind_type__'] = 0;
	$m['urlencode']['__args__'] = [null,null,['d']];
	return this;
}; /* end urllib */


/* end module: urllib */


