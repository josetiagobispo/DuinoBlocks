/* start module: edu.uca.util.PopupBlockEditor */
$pyjs['loaded_modules']['edu.uca.util.PopupBlockEditor'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.util.PopupBlockEditor']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.util.PopupBlockEditor'];
	if(typeof $pyjs['loaded_modules']['edu.uca.util'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.util']['__was_initialized__']) $p['___import___']('edu.uca.util', null);
	var $m = $pyjs['loaded_modules']['edu.uca.util.PopupBlockEditor'];
	$m['__repr__'] = function() { return '<module: edu.uca.util.PopupBlockEditor>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.util.PopupBlockEditor';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.util']['PopupBlockEditor'] = $pyjs['loaded_modules']['edu.uca.util.PopupBlockEditor'];


	$m['Popup'] = $p['___import___']('edu.uca.util.Popup.Popup', 'edu.uca.util', null, false);
	$m['BlocksPad'] = $p['___import___']('edu.uca.ui.BlocksPad.BlocksPad', 'edu.uca.util', null, false);
	$m['Block'] = $p['___import___']('edu.uca.renderable.block.Block.Block', 'edu.uca.util', null, false);
	$m['createStringBlock'] = $p['___import___']('edu.uca.renderable.CreatorBlockFactory.createStringBlock', 'edu.uca.util', null, false);
	$m['createBooleanBlockHolder'] = $p['___import___']('edu.uca.renderable.CreatorBlockFactory.createBooleanBlockHolder', 'edu.uca.util', null, false);
	$m['createNumberBlockHolder'] = $p['___import___']('edu.uca.renderable.CreatorBlockFactory.createNumberBlockHolder', 'edu.uca.util', null, false);
	$m['createStringBlockHolder'] = $p['___import___']('edu.uca.renderable.CreatorBlockFactory.createStringBlockHolder', 'edu.uca.util', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'edu.uca.util', null, false);
	$m['hatBlockType'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks.hatBlockType', 'edu.uca.util', null, false);
	$m['_'] = $p['___import___']('edu.uca.util.i18n._', 'edu.uca.util', null, false);
	$m['PopupBlockEditor'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.util.PopupBlockEditor';
		$method = $pyjs__bind_method2('__init__', function(block, categoryBlock, showPopup) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				block = arguments[1];
				categoryBlock = arguments[2];
				showPopup = arguments[3];
			}
			var $add2,$add3,$add1,$add4;
			$pyjs_kwargs_call($m['Popup'], '__init__', null, null, [{'title':$p['__op_add']($add3=$p['__op_add']($add1='<b>',$add2=$m['_']('Block Editor')),$add4='</b>'), 'hasBackground':false}, self]);
			self['block'] = block;
			self['categoryBlock'] = categoryBlock;
			self['hatBlock'] = $m['hatBlockType']($p['getattr']($p['getattr'](self, 'block'), 'varName'), $p['getattr']($p['getattr'](self, 'block'), 'color'));
			$p['getattr'](self, 'hatBlock')['original'] = false;
			self['hatBlock']['setStyleAttribute']($p['dict']([['left', 0], ['top', 0]]));
			self['blocksPad'] = $m['BlocksPad'](self);
			self['blocksPad']['setSize']('', '');
			self['ret'] = null;
			if ($p['bool'](!$p['op_eq']($p['getattr']($p['getattr'](self, 'block'), 'blockType'), $p['getattr']($m['Block'], 'STATEMENT_BLOCK')))) {
				self['ret'] = $m['createStringBlock'](false, 'ret', $p['getattr']($p['getattr'](self, 'block'), 'color'));
				$p['getattr'](self, 'ret')['original'] = false;
				self['ret']['setStyleAttribute']($p['dict']([['left', (typeof ($usub1=7)=='number'?
					-$usub1:
					$p['op_usub']($usub1))], ['top', 0]]));
				$m['DOM']['setAttribute'](self['ret']['getElement'](), 'draggable', false);
				self['ret']['addCodeElement']($m['_']('return'));
				if ($p['bool']($p['op_eq']($p['getattr']($p['getattr'](self, 'block'), 'blockType'), $p['getattr']($m['Block'], 'BOOLEAN_BLOCK')))) {
					self['ret']['addArgumentHolder']($m['createBooleanBlockHolder'](false, $p['getattr'](self, 'ret')));
				}
				else if ($p['bool']($p['op_eq']($p['getattr']($p['getattr'](self, 'block'), 'blockType'), $p['getattr']($m['Block'], 'NUMBER_BLOCK')))) {
					self['ret']['addArgumentHolder']($m['createNumberBlockHolder'](false, $p['getattr'](self, 'ret')));
				}
				else if ($p['bool']($p['op_eq']($p['getattr']($p['getattr'](self, 'block'), 'blockType'), $p['getattr']($m['Block'], 'STRING_BLOCK')))) {
					self['ret']['addArgumentHolder']($m['createStringBlockHolder'](false, $p['getattr'](self, 'ret')));
				}
			}
			self['center']['append']($p['getattr'](self, 'blocksPad'));
			self['center']['addStyleName']('border-collapse_collapse');
			if ($p['bool'](showPopup)) {
				self['show']();
			}
			self['blocksPad']['add']($p['getattr'](self, 'hatBlock'));
			if ($p['bool'](($p['getattr'](self, 'ret') !== null))) {
				self['south']['add']($p['getattr'](self, 'ret'));
			}
			return null;
		}
	, 1, [null,null,['self'],['block'],['categoryBlock'],['showPopup']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['Popup']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PopupBlockEditor', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.util.PopupBlockEditor */


/* end module: edu.uca.util.PopupBlockEditor */


/*
PYJS_DEPS: ['edu.uca.util.Popup.Popup', 'edu', 'edu.uca', 'edu.uca.util', 'edu.uca.util.Popup', 'edu.uca.ui.BlocksPad.BlocksPad', 'edu.uca.ui', 'edu.uca.ui.BlocksPad', 'edu.uca.renderable.block.Block.Block', 'edu.uca.renderable', 'edu.uca.renderable.block', 'edu.uca.renderable.block.Block', 'edu.uca.renderable.CreatorBlockFactory.createStringBlock', 'edu.uca.renderable.CreatorBlockFactory', 'edu.uca.renderable.CreatorBlockFactory.createBooleanBlockHolder', 'edu.uca.renderable.CreatorBlockFactory.createNumberBlockHolder', 'edu.uca.renderable.CreatorBlockFactory.createStringBlockHolder', 'pyjamas.DOM', 'pyjamas', 'edu.uca.renderable.block.ArduinoBlocks.hatBlockType', 'edu.uca.renderable.block.ArduinoBlocks', 'edu.uca.util.i18n._', 'edu.uca.util.i18n']
*/
