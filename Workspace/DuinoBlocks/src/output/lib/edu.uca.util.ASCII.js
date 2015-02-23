/* start module: edu.uca.util.ASCII */
$pyjs['loaded_modules']['edu.uca.util.ASCII'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.util.ASCII']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.util.ASCII'];
	if(typeof $pyjs['loaded_modules']['edu.uca.util'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.util']['__was_initialized__']) $p['___import___']('edu.uca.util', null);
	var $m = $pyjs['loaded_modules']['edu.uca.util.ASCII'];
	$m['__repr__'] = function() { return '<module: edu.uca.util.ASCII>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.util.ASCII';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.util']['ASCII'] = $pyjs['loaded_modules']['edu.uca.util.ASCII'];


	$m['_table'] = $p['dict']([['\xc3\xa1', 'a'], ['\xc3\xa0', 'a'], ['\xc3\xa2', 'a'], ['\xc3\xa4', 'a'], ['\xc3\xa3', 'a'], ['\xc3\xa5', 'a'], ['\xc3\xa9', 'e'], ['\xc3\xa8', 'e'], ['\xc3\xaa', 'e'], ['\xc3\xab', 'e'], ['\xc3\xad', 'i'], ['\xc3\xac', 'i'], ['\xc3\xae', 'i'], ['\xc3\xaf', 'i'], ['\xc3\xb3', 'o'], ['\xc3\xb2', 'o'], ['\xc3\xb4', 'o'], ['\xc3\xb6', 'o'], ['\xc3\xb5', 'o'], ['\xc3\xb8', 'o'], ['\xc3\xba', 'u'], ['\xc3\xb9', 'u'], ['\xc3\xbb', 'u'], ['\xc3\xbc', 'u'], ['\xc3\xb1', 'n'], ['\xc3\xa7', 'c'], ['\xc3\x81', 'A'], ['\xc3\x80', 'A'], ['\xc3\x82', 'A'], ['\xc3\x84', 'A'], ['\xc3\x83', 'A'], ['\xc3\x85', 'A'], ['\xc3\x89', 'E'], ['\xc3\x88', 'E'], ['\xc3\x8a', 'E'], ['\xc3\x8b', 'E'], ['\xc3\x8d', 'I'], ['\xc3\x8c', 'I'], ['\xc3\x8e', 'I'], ['\xc3\x8f', 'I'], ['\xc3\x93', 'O'], ['\xc3\x92', 'O'], ['\xc3\x94', 'O'], ['\xc3\x96', 'O'], ['\xc3\x95', 'O'], ['\xc3\x98', 'O'], ['\xc3\x9a', 'U'], ['\xc3\x99', 'U'], ['\xc3\x9b', 'U'], ['\xc3\x9c', 'U'], ['\xc3\x91', 'N'], ['\xc3\x87', 'C'], ['\xc3\x9f', 'ss'], ['\xc3\x9e', 'd'], ['\xc3\xa6', 'ae']]);
	$m['asciize'] = function(s) {
		var $iter1_nextval,$iter1_type,plain,$iter1_iter,$iter1_array,original,$iter1_idx;
		$iter1_iter = $m['_table']['items']();
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
			var $tupleassign1 = $p['__ass_unpack']($iter1_nextval['$nextval'], 2, null);
			original = $tupleassign1[0];
			plain = $tupleassign1[1];
			s = s['$$replace'](original, plain);
		}
		return s;
	};
	$m['asciize']['__name__'] = 'asciize';

	$m['asciize']['__bind_type__'] = 0;
	$m['asciize']['__args__'] = [null,null,['s']];
	return this;
}; /* end edu.uca.util.ASCII */


/* end module: edu.uca.util.ASCII */


