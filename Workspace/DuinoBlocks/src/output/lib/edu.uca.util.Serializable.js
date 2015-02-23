/* start module: edu.uca.util.Serializable */
$pyjs['loaded_modules']['edu.uca.util.Serializable'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['edu.uca.util.Serializable']['__was_initialized__']) return $pyjs['loaded_modules']['edu.uca.util.Serializable'];
	if(typeof $pyjs['loaded_modules']['edu.uca.util'] == 'undefined' || !$pyjs['loaded_modules']['edu.uca.util']['__was_initialized__']) $p['___import___']('edu.uca.util', null);
	var $m = $pyjs['loaded_modules']['edu.uca.util.Serializable'];
	$m['__repr__'] = function() { return '<module: edu.uca.util.Serializable>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'edu.uca.util.Serializable';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['edu.uca.util']['Serializable'] = $pyjs['loaded_modules']['edu.uca.util.Serializable'];


	$m['ArduinoBlocks'] = $p['___import___']('edu.uca.renderable.block.ArduinoBlocks', 'edu.uca.util', null, false);
	$m['getWorkspace'] = $p['___import___']('edu.uca.Workspace.getWorkspace', 'edu.uca.util', null, false);
	$m['logicVars'] = $p['___import___']('edu.uca.Workspace.logicVars', 'edu.uca.util', null, false);
	$m['numericVars'] = $p['___import___']('edu.uca.Workspace.numericVars', 'edu.uca.util', null, false);
	$m['alphaNumericVars'] = $p['___import___']('edu.uca.Workspace.alphaNumericVars', 'edu.uca.util', null, false);
	$m['hardwares'] = $p['___import___']('edu.uca.Workspace.hardwares', 'edu.uca.util', null, false);
	$m['countComponents'] = $p['___import___']('edu.uca.Workspace.countComponents', 'edu.uca.util', null, false);
	$m['createdBlocks'] = $p['___import___']('edu.uca.Workspace.createdBlocks', 'edu.uca.util', null, false);
	$m['stateIndex'] = $p['___import___']('edu.uca.Workspace.stateIndex', 'edu.uca.util', null, false);
	$m['states'] = $p['___import___']('edu.uca.Workspace.states', 'edu.uca.util', null, false);
	$m['stateMax'] = $p['___import___']('edu.uca.Workspace.stateMax', 'edu.uca.util', null, false);
	$m['Block'] = $p['___import___']('edu.uca.renderable.block.Block.Block', 'edu.uca.util', null, false);
	$m['ArduinoHardwares'] = $p['___import___']('edu.uca.renderable.hardware.ArduinoHardwares', 'edu.uca.util', null, false);
	$m['PopupOpenState'] = $p['___import___']('edu.uca.util.PopupOpenState.PopupOpenState', 'edu.uca.util', null, false);
	$m['COMFIRM'] = $p['___import___']('edu.uca.util.Popup.COMFIRM', 'edu.uca.util', null, false);
	$m['popupConfirmNewBlock'] = $p['___import___']('edu.uca.util.PopupNewBlock.popupConfirmNewBlock', 'edu.uca.util', null, false);
	$m['JSONParser'] = $p['___import___']('pyjamas.JSONParser.JSONParser', 'edu.uca.util', null, false);
	$m['json'] = $m['JSONParser']();
	$m['stateChange'] = function() {
		var $iter1_nextval,$iter1_type,i,$iter1_iter,$add2,$add3,$add1,$add6,$iter1_array,$add4,$add5,$sub3,$sub2,$sub1,$sub4,$iter1_idx;
		if ($p['bool'](($p['cmp']($m['stateIndex'], $p['__op_sub']($sub1=$p['len']($m['states']),$sub2=1)) == -1))) {
			$p['__delslice']($m['states'], $p['__op_add']($add1=$m['stateIndex'],$add2=1), null)
		}
		if ($p['bool'](($p['cmp']($p['len']($m['states']), $m['stateMax']) == -1))) {
			$m['stateIndex'] = $p['__op_add']($add3=$m['stateIndex'],$add4=1);
		}
		else {
			$iter1_iter = $p['range']($p['__op_sub']($sub3=$p['len']($m['states']),$sub4=1));
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				i = $iter1_nextval['$nextval'];
				$m['states']['__setitem__'](i, $m['states']['__getitem__']($p['__op_add']($add5=i,$add6=1)));
			}
			$m['states']['pop']();
		}
		$m['states']['insert']($m['stateIndex'], $pyjs_kwargs_call(null, (typeof saveState == "undefined"?$m['saveState']:saveState), null, null, [{'returnState':true}]));
		(typeof refreshUndoRedoButtons == "undefined"?$m['refreshUndoRedoButtons']:refreshUndoRedoButtons)();
		if ($p['bool']($p['getattr']($m['getWorkspace']()['getHeaderPanel'](), 'isAutomatic'))) {
			$pyjs_kwargs_call($m['getWorkspace']()['getHeaderPanel']()['codeGenerator'], 'onClick', null, null, [{'automatic':true}]);
		}
		return null;
	};
	$m['stateChange']['__name__'] = 'stateChange';

	$m['stateChange']['__bind_type__'] = 0;
	$m['stateChange']['__args__'] = [null,null];
	$m['refreshUndoRedoButtons'] = function() {
		var $sub5,hearder,$sub6;
		hearder = $m['getWorkspace']()['getHeaderPanel']();
		if ($p['bool'](($p['cmp']($m['stateIndex'], 0) == 1))) {
			hearder['buttonUndo']['removeStyleName']('disabled');
		}
		else {
			hearder['buttonUndo']['addStyleName']('disabled');
		}
		if ($p['bool'](($p['cmp']($m['stateIndex'], $p['__op_sub']($sub5=$p['len']($m['states']),$sub6=1)) == -1))) {
			hearder['buttonRedo']['removeStyleName']('disabled');
		}
		else {
			hearder['buttonRedo']['addStyleName']('disabled');
		}
		return null;
	};
	$m['refreshUndoRedoButtons']['__name__'] = 'refreshUndoRedoButtons';

	$m['refreshUndoRedoButtons']['__bind_type__'] = 0;
	$m['refreshUndoRedoButtons']['__args__'] = [null,null];
	$m['undo'] = function(sender) {
		var $sub8,$sub7;
		if ($p['bool'](!sender['getStyleName']()['__contains__']('disabled'))) {
			$m['stateIndex'] = $p['__op_sub']($sub7=$m['stateIndex'],$sub8=1);
			$m['refreshUndoRedoButtons']();
			$pyjs_kwargs_call(null, (typeof loadState == "undefined"?$m['loadState']:loadState), null, null, [{'state':$m['states']['__getitem__']($m['stateIndex'])}]);
		}
		return null;
	};
	$m['undo']['__name__'] = 'undo';

	$m['undo']['__bind_type__'] = 0;
	$m['undo']['__args__'] = [null,null,['sender']];
	$m['redo'] = function(sender) {
		var $add8,$add7;
		if ($p['bool'](!sender['getStyleName']()['__contains__']('disabled'))) {
			$m['stateIndex'] = $p['__op_add']($add7=$m['stateIndex'],$add8=1);
			$m['refreshUndoRedoButtons']();
			$pyjs_kwargs_call(null, (typeof loadState == "undefined"?$m['loadState']:loadState), null, null, [{'state':$m['states']['__getitem__']($m['stateIndex'])}]);
		}
		return null;
	};
	$m['redo']['__name__'] = 'redo';

	$m['redo']['__bind_type__'] = 0;
	$m['redo']['__args__'] = [null,null,['sender']];
	$m['exportWiringCode'] = function() {

 
        var a = document.createElement('a');
        try{
            var blob = new Blob([$doc.defaultView.editor.getSession()], {'type': 'text/plain'});
            window.URL = window.URL || window.webkitURL;
            a.href = window.URL.createObjectURL(blob);
            a.download = 'WiringCode.ino';
            a.click();
        }
        catch(e){ 
            console.log(e);
        }               
    
	};
	$m['exportWiringCode']['__name__'] = 'exportWiringCode';

	$m['exportWiringCode']['__bind_type__'] = 0;
	$m['exportWiringCode']['__args__'] = [null,null];
	$m['exportCustomBlocks'] = function() {
		var conteudo,popup,ok,dic;
		dic = $pyjs_kwargs_call(null, $p['dict'], null, null, [{'customBlocks':(typeof saveAllCustomBlocks == "undefined"?$m['saveAllCustomBlocks']:saveAllCustomBlocks)()}]);
		conteudo = $m['json']['encode'](dic);
		ok = true;
 
        var a = document.createElement('a');
        try{
            var blob = new Blob([conteudo], {'type': 'text/plain'});
            window.URL = window.URL || window.webkitURL;
            a.href = window.URL.createObjectURL(blob);
            a.download = 'filename.txt';
            a.click();
        }
        catch(e){
            ok = false; 
        }               
    
		if ($p['bool'](!$p['bool'](ok))) {
			popup = $pyjs_kwargs_call(null, $m['PopupOpenState'], null, null, [{'title':'Exportar Bloco', 'options':$m['COMFIRM']}]);
			popup['okButton']['removeStyleName']('disabled');
			popup['textBox']['removeInputListener'](popup);
			popup['textBox']['setText'](conteudo);
			popup['show']();
			popup['textBox']['selectAll']();
		}
		return null;
	};
	$m['exportCustomBlocks']['__name__'] = 'exportCustomBlocks';

	$m['exportCustomBlocks']['__bind_type__'] = 0;
	$m['exportCustomBlocks']['__args__'] = [null,null];
	$m['importCustomBlock'] = function(sender) {
		var popupConfirmOpenState,popup;
		popupConfirmOpenState = function(s) {
			var $iter2_nextval,$iter2_type,$iter2_iter,$iter2_idx,dic,block,$iter2_array;
			dic = $m['json']['decode'](s);
			(typeof loadAllCustomBlocks == "undefined"?$m['loadAllCustomBlocks']:loadAllCustomBlocks)(dic['__getitem__']('customBlocks'));
			$m['stateChange']();
			$iter2_iter = $m['getWorkspace']()['getBlocks']();
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				block = $iter2_nextval['$nextval'];
				block['changeTexts']();
			}
			return null;
		};
		popupConfirmOpenState['__name__'] = 'popupConfirmOpenState';

		popupConfirmOpenState['__bind_type__'] = 0;
		popupConfirmOpenState['__args__'] = [null,null,['s']];
		popup = $m['PopupOpenState'](popupConfirmOpenState);
		popup['show']();
		return null;
	};
	$m['importCustomBlock']['__name__'] = 'importCustomBlock';

	$m['importCustomBlock']['__bind_type__'] = 0;
	$m['importCustomBlock']['__args__'] = [null,null,['sender']];
	$m['saveState'] = function(sender, returnState) {
		if (typeof returnState == 'undefined') returnState=arguments['callee']['__args__'][3][1];
		var popup,ok,dic,conteudo;
		dic = $pyjs_kwargs_call(null, $p['dict'], null, null, [{'variables':(typeof saveAllVariables == "undefined"?$m['saveAllVariables']:saveAllVariables)()}]);
		$pyjs_kwargs_call(dic, 'update', null, null, [{'components':(typeof saveAllComponents == "undefined"?$m['saveAllComponents']:saveAllComponents)()}]);
		$pyjs_kwargs_call(dic, 'update', null, null, [{'customBlocks':(typeof saveAllCustomBlocks == "undefined"?$m['saveAllCustomBlocks']:saveAllCustomBlocks)()}]);
		$pyjs_kwargs_call(dic, 'update', null, null, [{'blocks':(typeof saveAllStackBlocks == "undefined"?$m['saveAllStackBlocks']:saveAllStackBlocks)()}]);
		if ($p['bool'](returnState)) {
			return $m['json']['encode'](dic);
		}
		else {
			conteudo = $m['json']['encode'](dic);
			ok = true;
 
            var a = document.createElement('a');
            try{
                var blob = new Blob([conteudo], {'type': 'text/plain'});
                window.URL = window.URL || window.webkitURL;
                a.href = window.URL.createObjectURL(blob);
                a.download = 'filename.dbk';
                a.click();
            }
            catch(e){
                ok = false; 
            }               
        
			if ($p['bool'](!$p['bool'](ok))) {
				popup = $pyjs_kwargs_call(null, $m['PopupOpenState'], null, null, [{'title':'Salvar', 'options':$m['COMFIRM']}]);
				popup['okButton']['removeStyleName']('disabled');
				popup['textBox']['removeInputListener'](popup);
				popup['textBox']['setText'](conteudo);
				popup['show']();
				popup['textBox']['selectAll']();
			}
		}
		return null;
	};
	$m['saveState']['__name__'] = 'saveState';

	$m['saveState']['__bind_type__'] = 0;
	$m['saveState']['__args__'] = [null,null,['sender'],['returnState', false]];
	$m['loadState'] = function(sender, state) {
		if (typeof state == 'undefined') state=arguments['callee']['__args__'][3][1];
		var popupConfirmOpenState,popup;
		popupConfirmOpenState = function(s, change) {
			if (typeof change == 'undefined') change=arguments['callee']['__args__'][3][1];
			var block,$iter3_idx,$iter3_nextval,$iter3_array,dic,$iter3_iter,$iter3_type;
			$m['getWorkspace']()['reload']();
			dic = $m['json']['decode'](s);
			(typeof loadAllVariables == "undefined"?$m['loadAllVariables']:loadAllVariables)(dic['__getitem__']('variables'));
			(typeof loadAllComponents == "undefined"?$m['loadAllComponents']:loadAllComponents)(dic['__getitem__']('components'));
			(typeof loadAllCustomBlocks == "undefined"?$m['loadAllCustomBlocks']:loadAllCustomBlocks)(dic['__getitem__']('customBlocks'));
			(typeof loadAllStackBlocks == "undefined"?$m['loadAllStackBlocks']:loadAllStackBlocks)(dic['__getitem__']('blocks'));
			if ($p['bool'](change)) {
				$m['stateChange']();
			}
			$iter3_iter = $m['getWorkspace']()['getBlocks']();
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				block = $iter3_nextval['$nextval'];
				block['changeTexts']();
			}
			$m['getWorkspace']()['getHardwaresPad']()['changeTexts']();
			return null;
		};
		popupConfirmOpenState['__name__'] = 'popupConfirmOpenState';

		popupConfirmOpenState['__bind_type__'] = 0;
		popupConfirmOpenState['__args__'] = [null,null,['s'],['change', true]];
		if ($p['bool']((state === null))) {
			popup = $m['PopupOpenState'](popupConfirmOpenState);
			popup['show']();
		}
		else {
			$pyjs_kwargs_call(null, popupConfirmOpenState, null, null, [{'change':false}, state]);
		}
		return null;
	};
	$m['loadState']['__name__'] = 'loadState';

	$m['loadState']['__bind_type__'] = 0;
	$m['loadState']['__args__'] = [null,null,['sender'],['state', null]];
	$m['saveAllVariables'] = function() {

		return $pyjs_kwargs_call(null, $p['dict'], null, null, [{'logicVars':$m['logicVars'], 'numericVars':$m['numericVars'], 'alphaNumericVars':$m['alphaNumericVars']}]);
	};
	$m['saveAllVariables']['__name__'] = 'saveAllVariables';

	$m['saveAllVariables']['__bind_type__'] = 0;
	$m['saveAllVariables']['__args__'] = [null,null];
	$m['loadAllVariables'] = function(varList) {
		var $iter5_nextval,$iter5_idx,textVar,varCategory,$iter6_idx,$iter4_nextval,$iter4_idx,$iter6_type,$iter6_array,$iter5_iter,$iter4_type,$iter5_array,$iter4_array,$iter5_type,$iter6_iter,$iter4_iter,$iter6_nextval;
		varCategory = $p['getattr']($m['getWorkspace']()['getBlockList'](), 'variables');
		$iter4_iter = varList['__getitem__']('logicVars');
		$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
		while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
			textVar = $iter4_nextval['$nextval'];
			$pyjs_kwargs_call(varCategory, 'popupConfirmNewVar', null, null, [{'saveChange':false}, textVar, $p['getattr']($m['Block'], 'BOOLEAN_BLOCK')]);
		}
		$iter5_iter = varList['__getitem__']('numericVars');
		$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
		while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
			textVar = $iter5_nextval['$nextval'];
			$pyjs_kwargs_call(varCategory, 'popupConfirmNewVar', null, null, [{'saveChange':false}, textVar, $p['getattr']($m['Block'], 'NUMBER_BLOCK')]);
		}
		$iter6_iter = varList['__getitem__']('alphaNumericVars');
		$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
		while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
			textVar = $iter6_nextval['$nextval'];
			$pyjs_kwargs_call(varCategory, 'popupConfirmNewVar', null, null, [{'saveChange':false}, textVar, $p['getattr']($m['Block'], 'STRING_BLOCK')]);
		}
		return null;
	};
	$m['loadAllVariables']['__name__'] = 'loadAllVariables';

	$m['loadAllVariables']['__bind_type__'] = 0;
	$m['loadAllVariables']['__args__'] = [null,null,['varList']];
	$m['saveComponent'] = function(comp) {
		var $iter7_nextval,$iter7_array,dic,item,$$arguments,$iter7_idx,$iter7_iter,$iter7_type,arg;
		dic = $pyjs_kwargs_call(null, $p['dict'], null, null, [{'name':$p['getattr'](comp, '$$name'), 'number':$p['getattr'](comp, 'number')}]);
		$pyjs_kwargs_call(dic, 'update', null, null, [{'left':comp['getStyleAttribute']('left'), 'top':comp['getStyleAttribute']('top')}]);
		$$arguments = $p['list']([]);
		$iter7_iter = $p['getattr'](comp, 'argumentList');
		$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
		while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
			item = $iter7_nextval['$nextval'];
			arg = item['getSelectedPin']();
			if ($p['bool']((arg === null))) {
				arg = $p['getattr'](item, 'text');
			}
			$$arguments['append'](arg);
		}
		$pyjs_kwargs_call(dic, 'update', null, null, [{'$$arguments':$$arguments}]);
		return dic;
	};
	$m['saveComponent']['__name__'] = 'saveComponent';

	$m['saveComponent']['__bind_type__'] = 0;
	$m['saveComponent']['__args__'] = [null,null,['comp']];
	$m['saveAllComponents'] = function() {
		var $iter8_idx,comp,$iter8_type,$iter8_array,$iter8_iter,$iter8_nextval,components;
		components = $p['list']([]);
		$iter8_iter = $m['getWorkspace']()['getHardwaresPad']()['getComponents']();
		$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
		while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
			comp = $iter8_nextval['$nextval'];
			components['append']($m['saveComponent'](comp));
		}
		return components;
	};
	$m['saveAllComponents']['__name__'] = 'saveAllComponents';

	$m['saveAllComponents']['__bind_type__'] = 0;
	$m['saveAllComponents']['__args__'] = [null,null];
	$m['loadAllComponents'] = function(components) {
		var $iter9_iter,comp,$iter9_nextval,$iter9_idx,$iter9_type,iten,$iter9_array;
		$iter9_iter = components;
		$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
		while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
			iten = $iter9_nextval['$nextval'];
			comp = (typeof loadComponent == "undefined"?$m['loadComponent']:loadComponent)(iten);
			$m['getWorkspace']()['getHardwaresPad']()['add'](comp);
		}
		$m['getWorkspace']()['getBlockList']()['refreshComponentBlocks']($p['getattr']($m['getWorkspace']()['getHardwaresPad'](), 'children'));
		return null;
	};
	$m['loadAllComponents']['__name__'] = 'loadAllComponents';

	$m['loadAllComponents']['__bind_type__'] = 0;
	$m['loadAllComponents']['__args__'] = [null,null,['components']];
	$m['loadComponent'] = function(dic) {
		var index,$iter10_nextval,comp,$iter10_idx,$iter10_array,$add10,$add11,$add12,arg,$iter10_type,$iter10_iter,$add9,names;
		comp = $p['getattr']($m['ArduinoHardwares'], dic['__getitem__']('name'))();
		comp['changeText'](dic['__getitem__']('number'));
		comp['setStyleAttribute']($p['dict']([['left', dic['__getitem__']('left')], ['top', dic['__getitem__']('top')]]));
		comp['original'] = false;
		$m['hardwares']['__setitem__'](comp['getCompleteText'](), comp);
		names = $m['countComponents']['get']($p['getattr'](comp, '$$name'));
		if ($p['bool']($p['op_eq'](names, null))) {
			$m['countComponents']['__setitem__']($p['getattr'](comp, '$$name'), $p['list']([$p['__op_add']($add9=$p['getattr'](comp, 'text'),$add10=$p['str']($p['getattr'](comp, 'number')))]));
		}
		else {
			names['append']($p['__op_add']($add11=$p['getattr'](comp, 'text'),$add12=$p['str']($p['getattr'](comp, 'number'))));
		}
		$iter10_iter = $p['enumerate'](dic['__getitem__']('arguments'));
		$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
		while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
			var $tupleassign1 = $p['__ass_unpack']($iter10_nextval['$nextval'], 2, null);
			index = $tupleassign1[0];
			arg = $tupleassign1[1];
			$p['getattr'](comp, 'argumentList')['__getitem__'](index)['setSelectedPin'](arg);
		}
		return comp;
	};
	$m['loadComponent']['__name__'] = 'loadComponent';

	$m['loadComponent']['__bind_type__'] = 0;
	$m['loadComponent']['__args__'] = [null,null,['dic']];
	$m['saveStackBlock'] = function(root) {
		var $iter12_idx,$iter11_iter,$iter12_type,$iter11_type,$iter12_array,holderArgument,dic,$iter12_iter,$iter12_nextval,holderChild,$$arguments,$iter11_array,$iter11_nextval,$iter11_idx,children,siblingDown;
		dic = $pyjs_kwargs_call(null, $p['dict'], null, null, [{'type':$p['getattr'](root, 'blockType'), 'name':$p['getattr'](root, '$$name'), 'custom':$p['getattr'](root, 'custom'), 'varName':$p['getattr'](root, 'varName')}]);
		if ($p['bool']($p['getattr'](root, 'custom'))) {
			$pyjs_kwargs_call(dic, 'update', null, null, [{'color':$p['getattr'](root, 'color')}]);
		}
		$pyjs_kwargs_call(dic, 'update', null, null, [{'left':root['getStyleAttribute']('left'), 'top':root['getStyleAttribute']('top')}]);
		$$arguments = $p['list']([]);
		$iter11_iter = $p['getattr'](root, 'holderArguments');
		$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
		while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
			holderArgument = $iter11_nextval['$nextval'];
			if ($p['bool'](($p['getattr'](holderArgument, 'subBlock') !== null))) {
				$$arguments['append']($m['saveStackBlock']($p['getattr'](holderArgument, 'subBlock')));
			}
			else {
				$$arguments['append']($pyjs_kwargs_call(null, $p['dict'], null, null, [{'type':'argument', 'value':holderArgument['getArgumentValue']()}]));
			}
		}
		$pyjs_kwargs_call(dic, 'update', null, null, [{'$$arguments':$$arguments}]);
		children = $p['list']([]);
		$iter12_iter = $p['getattr'](root, 'holderChildren');
		$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
		while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
			holderChild = $iter12_nextval['$nextval'];
			if ($p['bool'](($p['getattr'](holderChild, 'subBlock') !== null))) {
				children['append']($m['saveStackBlock']($p['getattr'](holderChild, 'subBlock')));
			}
		}
		$pyjs_kwargs_call(dic, 'update', null, null, [{'children':children}]);
		siblingDown = null;
		if ($p['bool'](($p['getattr'](root, 'holderSiblingDown') !== null))) {
			if ($p['bool'](($p['getattr']($p['getattr'](root, 'holderSiblingDown'), 'subBlock') !== null))) {
				siblingDown = $m['saveStackBlock']($p['getattr']($p['getattr'](root, 'holderSiblingDown'), 'subBlock'));
			}
		}
		$pyjs_kwargs_call(dic, 'update', null, null, [{'siblingDown':siblingDown}]);
		return dic;
	};
	$m['saveStackBlock']['__name__'] = 'saveStackBlock';

	$m['saveStackBlock']['__bind_type__'] = 0;
	$m['saveStackBlock']['__args__'] = [null,null,['root']];
	$m['saveAllStackBlocks'] = function() {
		var $iter13_nextval,$iter13_iter,$iter13_type,$iter13_idx,blocks,$iter13_array,block;
		blocks = $p['list']([]);
		$iter13_iter = $m['getWorkspace']()['getBlocksPad']()['getBlocks']();
		$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
		while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
			block = $iter13_nextval['$nextval'];
			blocks['append']($m['saveStackBlock'](block));
		}
		return blocks;
	};
	$m['saveAllStackBlocks']['__name__'] = 'saveAllStackBlocks';

	$m['saveAllStackBlocks']['__bind_type__'] = 0;
	$m['saveAllStackBlocks']['__args__'] = [null,null];
	$m['loadStackBlock'] = function(root) {
		var index,$iter14_array,$iter15_array,$iter14_type,$iter15_iter,$and1,$and2,$iter15_type,child,$iter15_idx,$iter14_idx,$$arguments,$iter14_iter,arg,$iter15_nextval,children,block,$iter14_nextval;
		if ($p['bool'](!$p['bool'](root['__getitem__']('custom')))) {
			block = $p['getattr']($m['ArduinoBlocks'], root['__getitem__']('name'))();
		}
		else {
			block = $p['getattr']($m['ArduinoBlocks'], root['__getitem__']('name'))(root['__getitem__']('varName'), root['__getitem__']('color'));
		}
		block['setStyleAttribute']($p['dict']([['left', root['__getitem__']('left')], ['top', root['__getitem__']('top')]]));
		block['original'] = false;
		$m['getWorkspace']()['addBlock'](block);
		if ($p['bool']($p['op_eq'](root['__getitem__']('type'), $p['getattr']($m['Block'], 'END_BLOCK')))) {
			$m['getWorkspace']()['setMainBlock'](block);
			$m['getWorkspace']()['getBlockList']()['hideMainBlock']();
		}
		$$arguments = root['__getitem__']('arguments');
		$iter14_iter = $p['enumerate']($$arguments);
		$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
		while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
			var $tupleassign2 = $p['__ass_unpack']($iter14_nextval['$nextval'], 2, null);
			index = $tupleassign2[0];
			arg = $tupleassign2[1];
			if ($p['bool']($p['op_eq'](arg['__getitem__']('type'), 'argument'))) {
				$p['getattr'](block, 'holderArguments')['__getitem__'](index)['setArgumentValue'](arg['__getitem__']('value'));
			}
			else {
				$p['getattr'](block, 'holderArguments')['__getitem__'](index)['addSubBlock']($m['loadStackBlock'](arg));
			}
		}
		children = root['__getitem__']('children');
		$iter15_iter = $p['enumerate'](children);
		$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
		while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
			var $tupleassign3 = $p['__ass_unpack']($iter15_nextval['$nextval'], 2, null);
			index = $tupleassign3[0];
			child = $tupleassign3[1];
			$p['getattr'](block, 'holderChildren')['__getitem__'](index)['addSubBlock']($m['loadStackBlock'](child));
		}
		if ($p['bool']((root['__getitem__']('siblingDown') !== null))) {
			block['holderSiblingDown']['addSubBlock']($m['loadStackBlock'](root['__getitem__']('siblingDown')));
		}
		if ($p['bool'](($p['bool']($and1=(root['__getitem__']('varName') !== ''))?!$p['bool'](root['__getitem__']('custom')):$and1))) {
			block['dropDownVarName']['setValue'](root['__getitem__']('varName'));
		}
		return block;
	};
	$m['loadStackBlock']['__name__'] = 'loadStackBlock';

	$m['loadStackBlock']['__bind_type__'] = 0;
	$m['loadStackBlock']['__args__'] = [null,null,['root']];
	$m['loadAllStackBlocks'] = function(stacks) {
		var $iter16_array,$iter16_type,root,stack,$iter16_idx,$iter16_nextval,$iter16_iter;
		$iter16_iter = stacks;
		$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
		while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
			root = $iter16_nextval['$nextval'];
			stack = $m['loadStackBlock'](root);
			$m['getWorkspace']()['getBlocksPad']()['add'](stack);
		}
		return null;
	};
	$m['loadAllStackBlocks']['__name__'] = 'loadAllStackBlocks';

	$m['loadAllStackBlocks']['__bind_type__'] = 0;
	$m['loadAllStackBlocks']['__args__'] = [null,null,['stacks']];
	$m['saveAllCustomBlocks'] = function() {
		var $iter17_nextval,$iter17_iter,$iter17_array,$iter17_idx,$iter17_type,customBlocks,popupBlockEditor;
		customBlocks = $p['list']([]);
		$iter17_iter = $m['createdBlocks']['values']();
		$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
		while (typeof($p['__wrapped_next']($iter17_nextval)['$nextval']) != 'undefined') {
			popupBlockEditor = $iter17_nextval['$nextval'];
			customBlocks['append']((typeof saveCustomBlocks == "undefined"?$m['saveCustomBlocks']:saveCustomBlocks)(popupBlockEditor));
		}
		return customBlocks;
	};
	$m['saveAllCustomBlocks']['__name__'] = 'saveAllCustomBlocks';

	$m['saveAllCustomBlocks']['__bind_type__'] = 0;
	$m['saveAllCustomBlocks']['__args__'] = [null,null];
	$m['saveCustomBlocks'] = function(popup) {
		var $iter18_type,$iter18_iter,blocks,$iter18_array,ret,dic,$iter18_idx,$iter18_nextval,block;
		dic = $pyjs_kwargs_call(null, $p['dict'], null, null, [{'type':$p['getattr']($p['getattr'](popup, 'block'), 'blockType'), 'name':$p['getattr']($p['getattr'](popup, 'block'), '$$name'), 'category':$p['getattr'](popup, 'categoryBlock'), 'varName':$p['getattr']($p['getattr'](popup, 'block'), 'varName')}]);
		$pyjs_kwargs_call(dic, 'update', null, null, [{'showing':$p['getattr'](popup, 'showing'), 'left':popup['getStyleAttribute']('left'), 'top':popup['getStyleAttribute']('top')}]);
		blocks = $p['list']([]);
		$iter18_iter = popup['blocksPad']['getBlocks']();
		$iter18_nextval=$p['__iter_prepare']($iter18_iter,false);
		while (typeof($p['__wrapped_next']($iter18_nextval)['$nextval']) != 'undefined') {
			block = $iter18_nextval['$nextval'];
			blocks['append']($m['saveStackBlock'](block));
		}
		$pyjs_kwargs_call(dic, 'update', null, null, [{'blocks':blocks}]);
		ret = null;
		if ($p['bool'](($p['getattr'](popup, 'ret') !== null))) {
			if ($p['bool'](($p['getattr']($p['getattr']($p['getattr'](popup, 'ret'), 'holderArguments')['__getitem__'](0), 'subBlock') !== null))) {
				ret = $m['saveStackBlock']($p['getattr']($p['getattr']($p['getattr'](popup, 'ret'), 'holderArguments')['__getitem__'](0), 'subBlock'));
			}
			else {
				ret = $pyjs_kwargs_call(null, $p['dict'], null, null, [{'type':'argument', 'value':$p['getattr']($p['getattr'](popup, 'ret'), 'holderArguments')['__getitem__'](0)['getArgumentValue']()}]);
			}
		}
		$pyjs_kwargs_call(dic, 'update', null, null, [{'ret':ret}]);
		return dic;
	};
	$m['saveCustomBlocks']['__name__'] = 'saveCustomBlocks';

	$m['saveCustomBlocks']['__bind_type__'] = 0;
	$m['saveCustomBlocks']['__args__'] = [null,null,['popup']];
	$m['loadAllCustomBlocks'] = function(customBlocks) {
		var custom,$iter20_nextval,$iter19_idx,$iter20_idx,popup,$iter20_iter,$iter19_array,$iter19_iter,$iter19_nextval,$iter19_type,$iter20_type,root,$iter20_array;
		$iter19_iter = customBlocks;
		$iter19_nextval=$p['__iter_prepare']($iter19_iter,false);
		while (typeof($p['__wrapped_next']($iter19_nextval)['$nextval']) != 'undefined') {
			custom = $iter19_nextval['$nextval'];
			$pyjs_kwargs_call(null, $m['popupConfirmNewBlock'], null, null, [{'showPopup':false}, custom['__getitem__']('varName'), custom['__getitem__']('category'), custom['__getitem__']('type')]);
			popup = $m['createdBlocks']['__getitem__'](custom['__getitem__']('varName'));
			$iter20_iter = custom['__getitem__']('blocks');
			$iter20_nextval=$p['__iter_prepare']($iter20_iter,false);
			while (typeof($p['__wrapped_next']($iter20_nextval)['$nextval']) != 'undefined') {
				root = $iter20_nextval['$nextval'];
				if ($p['bool']($p['op_eq'](root['__getitem__']('name'), 'hatBlockType'))) {
					if ($p['bool']((root['__getitem__']('siblingDown') !== null))) {
						popup['hatBlock']['holderSiblingDown']['addSubBlock']($m['loadStackBlock'](root['__getitem__']('siblingDown')));
					}
				}
				else {
					popup['blocksPad']['add']($m['loadStackBlock'](root));
				}
			}
			if ($p['bool']((custom['__getitem__']('ret') !== null))) {
				if ($p['bool']($p['op_eq'](custom['__getitem__']('ret')['__getitem__']('type'), 'argument'))) {
					$p['getattr']($p['getattr'](popup, 'ret'), 'holderArguments')['__getitem__'](0)['setArgumentValue'](custom['__getitem__']('ret')['__getitem__']('value'));
				}
				else {
					$p['getattr']($p['getattr'](popup, 'ret'), 'holderArguments')['__getitem__'](0)['addSubBlock']($m['loadStackBlock'](custom['__getitem__']('ret')));
				}
			}
			if ($p['bool'](custom['__getitem__']('showing'))) {
				popup['setStyleAttribute']($p['dict']([['left', custom['__getitem__']('left')], ['top', custom['__getitem__']('top')]]));
			}
			else {
				popup['hide']();
			}
		}
		return null;
	};
	$m['loadAllCustomBlocks']['__name__'] = 'loadAllCustomBlocks';

	$m['loadAllCustomBlocks']['__bind_type__'] = 0;
	$m['loadAllCustomBlocks']['__args__'] = [null,null,['customBlocks']];
	return this;
}; /* end edu.uca.util.Serializable */


/* end module: edu.uca.util.Serializable */


/*
PYJS_DEPS: ['edu.uca.renderable.block.ArduinoBlocks', 'edu', 'edu.uca', 'edu.uca.renderable', 'edu.uca.renderable.block', 'edu.uca.Workspace.getWorkspace', 'edu.uca.Workspace', 'edu.uca.Workspace.logicVars', 'edu.uca.Workspace.numericVars', 'edu.uca.Workspace.alphaNumericVars', 'edu.uca.Workspace.hardwares', 'edu.uca.Workspace.countComponents', 'edu.uca.Workspace.createdBlocks', 'edu.uca.Workspace.stateIndex', 'edu.uca.Workspace.states', 'edu.uca.Workspace.stateMax', 'edu.uca.renderable.block.Block.Block', 'edu.uca.renderable.block.Block', 'edu.uca.renderable.hardware.ArduinoHardwares', 'edu.uca.renderable.hardware', 'edu.uca.util.PopupOpenState.PopupOpenState', 'edu.uca.util', 'edu.uca.util.PopupOpenState', 'edu.uca.util.Popup.COMFIRM', 'edu.uca.util.Popup', 'edu.uca.util.PopupNewBlock.popupConfirmNewBlock', 'edu.uca.util.PopupNewBlock', 'pyjamas.JSONParser.JSONParser', 'pyjamas', 'pyjamas.JSONParser']
*/
