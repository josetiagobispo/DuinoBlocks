/* start module: edu.uca.translator.Translator */
$pyjs['loaded_modules']['edu.uca.translator.Translator'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.translator.Translator']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.translator.Translator'];
	if(typeof $pyjs['loaded_modules']['edu.uca.translator'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.translator']['__was_initialized__']) $p['___import___']('edu.uca.translator', null);
	var $m = $pyjs['loaded_modules']['edu.uca.translator.Translator'];
	$m['__repr__'] = function() { return '<module: edu.uca.translator.Translator>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.translator.Translator';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.translator']['Translator'] = $pyjs['loaded_modules']['edu.uca.translator.Translator'];


	$m['TranslatorBlockFactory'] = $p['___import___']('edu.uca.translator.TranslatorBlockFactory', 'edu.uca.translator', null, false);
	$m['asciize'] = $p['___import___']('edu.uca.util.ASCII.asciize', 'edu.uca.translator', null, false);
	$m['Translator'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'edu.uca.translator.Translator';
		$cls_definition['variableUserPrefix'] = 'usr';
		$cls_definition['variableSystemPrefix'] = 'syst';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['reset']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('translate', function(loopBlock, rootSetupBlock) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				loopBlock = arguments[1];
				rootSetupBlock = arguments[2];
			}
			if (typeof rootSetupBlock == 'undefined') rootSetupBlock=arguments['callee']['__args__'][4][1];
			var $iter5_nextval,$iter4_idx,$iter5_array,$iter3_type,$iter1_iter,$iter5_iter,$add27,$iter4_type,$iter5_type,$iter2_type,$iter4_iter,$add23,$add29,$iter4_array,$iter3_idx,$iter2_iter,$add21,$add20,$add22,$add25,$iter3_iter,loopCommand,$add26,program,$iter1_array,translatorBlock,$iter5_idx,command,$iter3_array,$iter1_idx,$iter1_nextval,$add28,headerCommand,$add14,$add15,$iter2_idx,pinNumber,$add10,$add11,$add12,$add13,$add18,$add19,$iter2_nextval,$iter1_type,$add32,$iter4_nextval,$add30,$add31,file_,$add16,$add34,$add33,$add2,$add3,$add1,$add6,$add7,$add4,$add5,$add17,$add24,$add8,$add9,$iter3_nextval,$iter2_array;
			self['reset']();
			if ($p['bool']((rootSetupBlock !== null))) {
				translatorBlock = $p['getattr']($m['TranslatorBlockFactory'], $p['getattr'](rootSetupBlock, '$$name'))(rootSetupBlock, self);
				while ($p['bool'](!$p['op_eq'](translatorBlock, null))) {
					self['addSetupCommand'](translatorBlock['toCode']());
					translatorBlock = translatorBlock['nextTranslatorBlock']();
				}
			}
			loopCommand = $p['getattr']($m['TranslatorBlockFactory'], $p['getattr'](loopBlock, '$$name'))(loopBlock, self)['toCode']();
			headerCommand = '';
			if ($p['bool'](($p['cmp']($p['len']($p['getattr'](self, 'headerFileSet')), 0) == 1))) {
				$iter1_iter = $p['getattr'](self, 'headerFileSet');
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					file_ = $iter1_nextval['$nextval'];
					headerCommand = $p['__op_add']($add5=$p['__op_add']($add3=$p['__op_add']($add1=headerCommand,$add2='#include <'),$add4=file_),$add6='>\n');
				}
				headerCommand = $p['__op_add']($add7=headerCommand,$add8='\n');
			}
			if ($p['bool'](($p['cmp']($p['len']($p['getattr'](self, 'definitionSet')), 0) == 1))) {
				$iter2_iter = $p['getattr'](self, 'definitionSet');
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					command = $iter2_nextval['$nextval'];
					headerCommand = $p['__op_add']($add11=$p['__op_add']($add9=headerCommand,$add10=command),$add12='\n');
				}
				headerCommand = $p['__op_add']($add13=headerCommand,$add14='\n');
			}
			headerCommand = $p['__op_add']($add15=headerCommand,$add16='void setup(){\n');
			if ($p['bool'](($p['cmp']($p['len']($p['getattr'](self, 'inputPinSet')), 0) == 1))) {
				$iter3_iter = $p['getattr'](self, 'inputPinSet');
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					pinNumber = $iter3_nextval['$nextval'];
					headerCommand = $p['__op_add']($add21=$p['__op_add']($add19=$p['__op_add']($add17=headerCommand,$add18='pinMode('),$add20=pinNumber),$add22=', INPUT);\n');
				}
			}
			if ($p['bool'](($p['cmp']($p['len']($p['getattr'](self, 'outputPinSet')), 0) == 1))) {
				$iter4_iter = $p['getattr'](self, 'outputPinSet');
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					pinNumber = $iter4_nextval['$nextval'];
					headerCommand = $p['__op_add']($add27=$p['__op_add']($add25=$p['__op_add']($add23=headerCommand,$add24='pinMode('),$add26=pinNumber),$add28=', OUTPUT);\n');
				}
			}
			if ($p['bool'](($p['cmp']($p['len']($p['getattr'](self, 'setupSet')), 0) == 1))) {
				$iter5_iter = $p['getattr'](self, 'setupSet');
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					command = $iter5_nextval['$nextval'];
					headerCommand = $p['__op_add']($add29=headerCommand,$add30=command);
				}
			}
			headerCommand = $p['__op_add']($add31=headerCommand,$add32='}\n\n');
			program = $p['__op_add']($add33=headerCommand,$add34=loopCommand);
			return program;
		}
	, 1, [null,null,['self'],['loopBlock'],['rootSetupBlock', null]]);
		$cls_definition['translate'] = $method;
		$method = $pyjs__bind_method2('buildVariableName', function(reference) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				reference = arguments[1];
			}
			if (typeof reference == 'undefined') reference=arguments['callee']['__args__'][3][1];
			var $add46,$add38,$add39,$or1,c,i,varName,$add44,$add36,$add37,$add41,$add35,$add47,$add48,$add42,$or2,$add43,$add40,$add45;
			if ($p['bool']($p['op_eq'](reference, ''))) {
				self['variableSystemCnt'] = $p['__op_add']($add35=$p['getattr'](self, 'variableSystemCnt'),$add36=1);
				varName = $p['__op_add']($add37=$p['getattr'](self, 'variableSystemPrefix'),$add38=$p['str']($p['getattr'](self, 'variableSystemCnt')));
			}
			else {
				reference = $m['asciize'](reference);
				self['variableUserCnt'] = $p['__op_add']($add39=$p['getattr'](self, 'variableUserCnt'),$add40=1);
				varName = $p['__op_add']($add43=$p['__op_add']($add41=$p['getattr'](self, 'variableUserPrefix'),$add42=$p['str']($p['getattr'](self, 'variableUserCnt'))),$add44='_');
			}
			i = 0;
			while ($p['bool'](($p['cmp'](i, $p['len'](reference)) == -1))) {
				c = reference['__getitem__'](i);
				if ($p['bool'](($p['bool']($or1=c['isalnum']())?$or1:$p['op_eq'](c, '_')))) {
					varName = $p['__op_add']($add45=varName,$add46=c);
				}
				i = $p['__op_add']($add47=i,$add48=1);
			}
			return varName;
		}
	, 1, [null,null,['self'],['reference', '']]);
		$cls_definition['buildVariableName'] = $method;
		$method = $pyjs__bind_method2('buildDefinitionName', function(reference) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				reference = arguments[1];
			}
			var $add50,$add51,$add52,$add53,$add54,$add49,$or4,i,$add57,$add58,c,DefinitionName,$add56,$or3,$add55;
			reference = $m['asciize'](reference);
			self['variableUserCnt'] = $p['__op_add']($add49=$p['getattr'](self, 'variableUserCnt'),$add50=1);
			DefinitionName = $p['__op_add']($add53=$p['__op_add']($add51=$p['getattr'](self, 'variableUserPrefix'),$add52=$p['str']($p['getattr'](self, 'variableUserCnt'))),$add54='_');
			i = 0;
			while ($p['bool'](($p['cmp'](i, $p['len'](reference)) == -1))) {
				c = reference['__getitem__'](i);
				if ($p['bool'](($p['bool']($or3=c['isalnum']())?$or3:$p['op_eq'](c, '_')))) {
					DefinitionName = $p['__op_add']($add55=DefinitionName,$add56=c);
				}
				i = $p['__op_add']($add57=i,$add58=1);
			}
			return DefinitionName;
		}
	, 1, [null,null,['self'],['reference']]);
		$cls_definition['buildDefinitionName'] = $method;
		$method = $pyjs__bind_method2('getBlockAdaptor', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'blockAdaptor');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getBlockAdaptor'] = $method;
		$method = $pyjs__bind_method2('reset', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['headerFileSet'] = $p['set']($p['list']([]));
			self['definitionSet'] = $p['set']($p['list']([]));
			self['setupSet'] = $p['set']($p['list']([]));
			self['inputPinSet'] = $p['set']($p['list']([]));
			self['outputPinSet'] = $p['set']($p['list']([]));
			self['numberVariableSet'] = $p['dict']([]);
			self['booleanVariableSet'] = $p['dict']([]);
			self['stringVariableSet'] = $p['dict']([]);
			self['variableUserCnt'] = 0;
			self['variableSystemCnt'] = 0;
			self['definitionMethod'] = $p['dict']([]);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['reset'] = $method;
		$method = $pyjs__bind_method2('addHeaderFile', function(headerFile) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				headerFile = arguments[1];
			}

			self['headerFileSet']['add'](headerFile);
			return null;
		}
	, 1, [null,null,['self'],['headerFile']]);
		$cls_definition['addHeaderFile'] = $method;
		$method = $pyjs__bind_method2('addDefinitionCommand', function(command) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				command = arguments[1];
			}

			self['definitionSet']['add'](command);
			return null;
		}
	, 1, [null,null,['self'],['command']]);
		$cls_definition['addDefinitionCommand'] = $method;
		$method = $pyjs__bind_method2('addSetupCommand', function(command) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				command = arguments[1];
			}

			self['setupSet']['add'](command);
			return null;
		}
	, 1, [null,null,['self'],['command']]);
		$cls_definition['addSetupCommand'] = $method;
		$method = $pyjs__bind_method2('addInputPin', function(pinNumber) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pinNumber = arguments[1];
			}

			self['inputPinSet']['add'](pinNumber);
			return null;
		}
	, 1, [null,null,['self'],['pinNumber']]);
		$cls_definition['addInputPin'] = $method;
		$method = $pyjs__bind_method2('addOutputPin', function(pinNumber) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pinNumber = arguments[1];
			}

			self['outputPinSet']['add'](pinNumber);
			return null;
		}
	, 1, [null,null,['self'],['pinNumber']]);
		$cls_definition['addOutputPin'] = $method;
		$method = $pyjs__bind_method2('getNumberVariable', function(userVarName) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				userVarName = arguments[1];
			}

			return self['numberVariableSet']['get'](userVarName);
		}
	, 1, [null,null,['self'],['userVarName']]);
		$cls_definition['getNumberVariable'] = $method;
		$method = $pyjs__bind_method2('getBooleanVariable', function(userVarName) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				userVarName = arguments[1];
			}

			return self['booleanVariableSet']['get'](userVarName);
		}
	, 1, [null,null,['self'],['userVarName']]);
		$cls_definition['getBooleanVariable'] = $method;
		$method = $pyjs__bind_method2('getStringVariable', function(userVarName) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				userVarName = arguments[1];
			}

			return self['stringVariableSet']['get'](userVarName);
		}
	, 1, [null,null,['self'],['userVarName']]);
		$cls_definition['getStringVariable'] = $method;
		$method = $pyjs__bind_method2('getDefinitionMethod', function(userMethodName) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				userMethodName = arguments[1];
			}

			return self['definitionMethod']['get'](userMethodName);
		}
	, 1, [null,null,['self'],['userMethodName']]);
		$cls_definition['getDefinitionMethod'] = $method;
		$method = $pyjs__bind_method2('addNumberVariable', function(userVarName, internalName) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				userVarName = arguments[1];
				internalName = arguments[2];
			}

			$p['getattr'](self, 'numberVariableSet')['__setitem__'](userVarName, internalName);
			return null;
		}
	, 1, [null,null,['self'],['userVarName'],['internalName']]);
		$cls_definition['addNumberVariable'] = $method;
		$method = $pyjs__bind_method2('addBooleanVariable', function(userVarName, internalName) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				userVarName = arguments[1];
				internalName = arguments[2];
			}

			$p['getattr'](self, 'booleanVariableSet')['__setitem__'](userVarName, internalName);
			return null;
		}
	, 1, [null,null,['self'],['userVarName'],['internalName']]);
		$cls_definition['addBooleanVariable'] = $method;
		$method = $pyjs__bind_method2('addStringVariable', function(userVarName, internalName) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				userVarName = arguments[1];
				internalName = arguments[2];
			}

			$p['getattr'](self, 'stringVariableSet')['__setitem__'](userVarName, internalName);
			return null;
		}
	, 1, [null,null,['self'],['userVarName'],['internalName']]);
		$cls_definition['addStringVariable'] = $method;
		$method = $pyjs__bind_method2('addDefinitionMethod', function(userMethodName, internalName) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				userMethodName = arguments[1];
				internalName = arguments[2];
			}

			$p['getattr'](self, 'definitionMethod')['__setitem__'](userMethodName, internalName);
			return null;
		}
	, 1, [null,null,['self'],['userMethodName'],['internalName']]);
		$cls_definition['addDefinitionMethod'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Translator', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end edu.uca.translator.Translator */


/* end module: edu.uca.translator.Translator */


/*
PYJS_DEPS: ['edu.uca.translator.TranslatorBlockFactory', 'edu', 'edu.uca', 'edu.uca.translator', 'edu.uca.util.ASCII.asciize', 'edu.uca.util', 'edu.uca.util.ASCII']
*/
