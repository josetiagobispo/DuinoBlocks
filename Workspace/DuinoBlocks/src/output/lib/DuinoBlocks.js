/* start module: DuinoBlocks */
$pyjs['loaded_modules']['DuinoBlocks'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['DuinoBlocks']['__was_initialized__']) return $pyjs['loaded_modules']['DuinoBlocks'];
	var $m = $pyjs['loaded_modules']['DuinoBlocks'];
	$m['__repr__'] = function() { return '<module: DuinoBlocks>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'DuinoBlocks';
	$m['__name__'] = __mod_name__;


	$m['__author__'] = 'Rafael Machado Alves (rafamachadoalves@gmail.com.br)';
	$m['__date__'] = '2013/12/20';
	$m['__version__'] = '0.1';
	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['manageRootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.manageRootPanel', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['RootPanelListener'] = $p['___import___']('edu.uca.ui.listener.RootPanelListener.RootPanelListener', null, null, false);
	$m['BlockList'] = $p['___import___']('edu.uca.ui.BlockList.BlockList', null, null, false);
	$m['BlocksPad'] = $p['___import___']('edu.uca.ui.BlocksPad.BlocksPad', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['Header'] = $p['___import___']('edu.uca.ui.Header.Header', null, null, false);
	$m['Element'] = $p['___import___']('edu.uca.renderable.Element.Element', null, null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
	$m['FocusWidget'] = $p['___import___']('pyjamas.ui.FocusWidget.FocusWidget', null, null, false);
	$m['HardwareList'] = $p['___import___']('edu.uca.ui.HardwareList.HardwareList', null, null, false);
	$m['HardwaresPad'] = $p['___import___']('edu.uca.ui.HardwaresPad.HardwaresPad', null, null, false);
	$m['getWorkspace'] = $p['___import___']('edu.uca.Workspace.getWorkspace', null, null, false);
	$m['stateChange'] = $p['___import___']('edu.uca.util.Serializable.stateChange', null, null, false);
	$m['exportWiringCode'] = $p['___import___']('edu.uca.util.Serializable.exportWiringCode', null, null, false);
	$m['i18n'] = $p['___import___']('edu.uca.util.i18n.i18n', null, null, false);
	$m['ResizeWidget'] = $p['___import___']('edu.uca.util.ResizeWidget.ResizeWidget', null, null, false);
	$m['lang'] = $p['list'](['pt_BR', 'es_ES', 'en_US']);
	$m['ContainerUCA'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'DuinoBlocks';
		$method = $pyjs__bind_method2('__init__', function(ws) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ws = arguments[1];
			}

			$pyjs_kwargs_call($m['VerticalPanel'], '__init__', null, null, [{'Width':'100%', 'Height':'100%'}, self]);
			self['codeTextArea'] = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'codePanel'}]);
			self['codeTextArea']['setID']('clip_text');
			ws['setCodePanel']($p['getattr'](self, 'codeTextArea'));
			self['header'] = $m['Header']($p['getattr'](self, 'changeLanguage'));
			$m['getWorkspace']()['setHeaderPanel']($p['getattr'](self, 'header'));
			self['blockList'] = $m['BlockList']();
			self['hardwareList'] = $m['HardwareList']();
			self['hardwareList']['addStyleName']('invisible');
			self['left'] = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createDiv'](), 'Width':'100%', 'Height':'100%'}]);
			ws['setBlockList']($p['getattr'](self, 'blockList'));
			ws['setHardwaresList']($p['getattr'](self, 'hardwareList'));
			self['serialMonitor'] = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'serialMonitor'}]);
			self['blocksPad'] = $m['BlocksPad']();
			self['hardwaresPad'] = $m['HardwaresPad']();
			self['hardwaresPad']['addStyleName']('invisible');
			self['middle'] = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createDiv'](), 'Width':'100%', 'Height':'100%'}]);
			ws['setBlocksPad']($p['getattr'](self, 'blocksPad'));
			ws['setHardwaresPad']($p['getattr'](self, 'hardwaresPad'));
			return null;
		}
	, 1, [null,null,['self'],['ws']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onLoad', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var usbFlash,divCode,monitor,$lambda1,bottom,bot,divButtonDownload,res,progress,progress_val;
			self['add']($p['getattr'](self, 'header'));
			self['setCellHeight']($p['getattr'](self, 'header'), '38px');
			self['left']['add']($p['getattr'](self, 'blockList'));
			self['left']['add']($p['getattr'](self, 'hardwareList'));
			self['mainPanel'] = $pyjs_kwargs_call(null, $m['HorizontalPanel'], null, null, [{'Width':'100%', 'Height':'100%'}]);
			self['mainPanel']['add']($p['getattr'](self, 'left'));
			self['mainPanel']['setCellWidth']($p['getattr'](self, 'left'), '250');
			self['middle']['add']($p['getattr'](self, 'blocksPad'));
			self['middle']['add']($p['getattr'](self, 'hardwaresPad'));
			self['center'] = $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{'Width':'100%', 'Height':'100%', 'StyleName':'center_panel'}]);
			self['center']['add']($p['getattr'](self, 'middle'));
			bottom = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'drawer_bottom'}]);
			self['showHideLeft'] = $pyjs_kwargs_call(null, $m['FocusWidget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'control_bar close_left'}]);
			self['showHideLeft']['addClickListener']($p['getattr'](self, 'showHidePanelLeft'));
			self['showHideLeft']['setStyleAttribute']('float', 'lef');
			bottom['add']($p['getattr'](self, 'showHideLeft'));
			self['showHideRight'] = $pyjs_kwargs_call(null, $m['FocusWidget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'control_bar'}]);
			self['showHideRight']['addClickListener']($p['getattr'](self, 'showHidePanelRight'));
			bottom['add']($p['getattr'](self, 'showHideRight'));
			self['showHideMonitor'] = $pyjs_kwargs_call(null, $m['FocusWidget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'control_bar'}]);
			self['showHideMonitor']['addClickListener']($p['getattr'](self, 'showHidePanelMonitor'));
			bottom['add']($p['getattr'](self, 'showHideMonitor'));
			self['resizeMonitor'] = $pyjs_kwargs_call(null, $m['ResizeWidget'], null, null, [{'invert':true, 'horizontal':false}, $p['getattr'](self, 'serialMonitor'), 100, 400]);
			$m['DOM']['setStyleAttribute'](self['resizeMonitor']['getElement'](), 'display', 'none');
			bottom['add']($p['getattr'](self, 'resizeMonitor'));
			self['center']['add'](bottom);
			self['center']['setCellHeight'](bottom, '20px');
			usbFlash = $pyjs_kwargs_call(null, $m['FocusWidget'], null, null, [{'Element':$m['DOM']['createDiv']()}]);
			usbFlash['setID']('cb_cf');
			$m['DOM']['setElemAttribute'](usbFlash['getElement'](), 'data-sections', 'usbflash serialmonitor');
			self['serialMonitor']['add'](usbFlash);
			progress = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'progress progress-striped active'}]);
			progress['setID']('progress');
			$m['DOM']['setStyleAttribute'](progress['getElement'](), 'display', 'none');
			progress_val = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'bar'}]);
			progress_val['setID']('progress_val');
			progress['add'](progress_val);
			self['serialMonitor']['add'](progress);
			monitor = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createDiv']()}]);
			monitor['setID']('monitor');
			self['serialMonitor']['add'](monitor);
			self['center']['add']($p['getattr'](self, 'serialMonitor'));
			self['center']['setCellHeight']($p['getattr'](self, 'serialMonitor'), '100');
			self['showHidePanelMonitor']();
			self['mainPanel']['add']($p['getattr'](self, 'center'));
			self['cod'] = $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{'Width':'100%', 'Height':'100%', 'StyleName':'right_panel'}]);
			divCode = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createDiv'](), 'Width':'100%', 'Height':'100%', 'StyleName':'download-button-container'}]);
			divCode['add']($p['getattr'](self, 'codeTextArea'));
			divButtonDownload = $pyjs_kwargs_call(null, $m['FocusWidget'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'download-button'}]);
			var 			$lambda1 = function() {

				return $m['exportWiringCode']();
			};
			$lambda1['__name__'] = '$lambda1';

			$lambda1['__bind_type__'] = 0;
			$lambda1['__args__'] = [null,null];
			$pyjs_kwargs_call(divButtonDownload, 'addClickListener', null, null, [{'listener':$lambda1}]);
			$m['DOM']['setInnerText'](divButtonDownload['getElement'](), 'download');
			divCode['add'](divButtonDownload);
			self['cod']['add'](divCode);
			bot = $pyjs_kwargs_call(null, $m['Element'], null, null, [{'Element':$m['DOM']['createDiv'](), 'StyleName':'drawer_bottom'}]);
			res = $pyjs_kwargs_call(null, $m['ResizeWidget'], null, null, [{'invert':true}, $p['getattr'](self, 'cod'), 100, 500]);
			res['setStyleAttribute']('float', 'left');
			bot['append'](res);
			self['cod']['add'](bot);
			self['cod']['setCellHeight'](bot, '20px');
			self['mainPanel']['add']($p['getattr'](self, 'cod'));
			self['mainPanel']['setCellWidth']($p['getattr'](self, 'cod'), '200');
			self['showHidePanelRight']();
			self['header']['buttonBlocks']['addClickListener']($p['getattr'](self, 'showBlocksList'));
			self['header']['buttonHarwares']['addClickListener']($p['getattr'](self, 'showHardwaresList'));
			self['header']['buttonTranslate']['addClickListener']($p['getattr'](self, 'showPanelRight'));
			self['add']($p['getattr'](self, 'mainPanel'));
			$m['stateChange']();
			self['changeLanguage']('pt_BR');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onLoad'] = $method;
		$method = $pyjs__bind_method2('changeLanguage', function(language) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				language = arguments[1];
			}

			$pyjs_kwargs_call($m['i18n'], 'load', null, null, [{'base_url':'../lang', 'lang':language, 'onCompletion':$p['getattr'](self, 'changeTexts')}]);
			return null;
		}
	, 1, [null,null,['self'],['language']]);
		$cls_definition['changeLanguage'] = $method;
		$method = $pyjs__bind_method2('changeTexts', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter1_nextval,$iter1_type,$iter1_iter,$iter1_array,block,$iter1_idx;
			$m['getWorkspace']()['getBlockList']()['changeTexts']();
			$iter1_iter = $m['getWorkspace']()['getBlocks']();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				block = $iter1_nextval['$nextval'];
				block['changeTexts']();
			}
			$m['getWorkspace']()['getHeaderPanel']()['changeTexts']();
			$m['getWorkspace']()['getHardwaresList']()['changeTexts']();
			$m['getWorkspace']()['getHardwaresPad']()['changeTexts']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['changeTexts'] = $method;
		$method = $pyjs__bind_method2('showBlocksList', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['hardwareList']['addStyleName']('invisible');
			self['blockList']['removeStyleName']('invisible');
			self['hardwaresPad']['addStyleName']('invisible');
			self['blocksPad']['removeStyleName']('invisible');
			self['blockList']['refreshComponentBlocks']($p['getattr']($p['getattr'](self, 'hardwaresPad'), 'children'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['showBlocksList'] = $method;
		$method = $pyjs__bind_method2('showHardwaresList', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['blockList']['addStyleName']('invisible');
			self['hardwareList']['removeStyleName']('invisible');
			self['blocksPad']['addStyleName']('invisible');
			self['hardwaresPad']['removeStyleName']('invisible');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['showHardwaresList'] = $method;
		$method = $pyjs__bind_method2('hidePanelRight', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool']($p['op_eq']($m['DOM']['getStyleAttribute'](self['mainPanel']['getWidgetTd']($p['getattr'](self, 'cod')), 'display'), ''))) {
				$m['DOM']['setStyleAttribute'](self['mainPanel']['getWidgetTd']($p['getattr'](self, 'cod')), 'display', 'none');
				self['showHideRight']['setStyleName']('control_bar open_left');
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['hidePanelRight'] = $method;
		$method = $pyjs__bind_method2('showPanelRight', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool']($p['op_eq']($m['DOM']['getStyleAttribute'](self['mainPanel']['getWidgetTd']($p['getattr'](self, 'cod')), 'display'), 'none'))) {
				$m['DOM']['setStyleAttribute'](self['mainPanel']['getWidgetTd']($p['getattr'](self, 'cod')), 'display', '');
				self['showHideRight']['setStyleName']('control_bar close_right');
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['showPanelRight'] = $method;
		$method = $pyjs__bind_method2('showHidePanelLeft', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool']($p['op_eq']($m['DOM']['getStyleAttribute'](self['mainPanel']['getWidgetTd']($p['getattr'](self, 'left')), 'display'), ''))) {
				$m['DOM']['setStyleAttribute'](self['mainPanel']['getWidgetTd']($p['getattr'](self, 'left')), 'display', 'none');
				self['showHideLeft']['setStyleName']('control_bar open_right');
			}
			else {
				$m['DOM']['setStyleAttribute'](self['mainPanel']['getWidgetTd']($p['getattr'](self, 'left')), 'display', '');
				self['showHideLeft']['setStyleName']('control_bar close_left');
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['showHidePanelLeft'] = $method;
		$method = $pyjs__bind_method2('showHidePanelMonitor', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool']($p['op_eq']($m['DOM']['getStyleAttribute']($m['DOM']['getParent'](self['center']['getWidgetTd']($p['getattr'](self, 'serialMonitor'))), 'display'), 'none'))) {
				$m['DOM']['setStyleAttribute']($m['DOM']['getParent'](self['center']['getWidgetTd']($p['getattr'](self, 'serialMonitor'))), 'display', '');
				self['showHideMonitor']['setStyleName']('collapse open_down');
				$m['DOM']['setStyleAttribute'](self['resizeMonitor']['getElement'](), 'display', '');
			}
			else {
				$m['DOM']['setStyleAttribute']($m['DOM']['getParent'](self['center']['getWidgetTd']($p['getattr'](self, 'serialMonitor'))), 'display', 'none');
				self['showHideMonitor']['setStyleName']('collapse close_up');
				$m['DOM']['setStyleAttribute'](self['resizeMonitor']['getElement'](), 'display', 'none');
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['showHidePanelMonitor'] = $method;
		$method = $pyjs__bind_method2('showHidePanelRight', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool']($p['op_eq']($m['DOM']['getStyleAttribute'](self['mainPanel']['getWidgetTd']($p['getattr'](self, 'cod')), 'display'), 'none'))) {
				$m['DOM']['setStyleAttribute'](self['mainPanel']['getWidgetTd']($p['getattr'](self, 'cod')), 'display', '');
				self['showHideRight']['setStyleName']('control_bar close_right');
			}
			else {
				$m['DOM']['setStyleAttribute'](self['mainPanel']['getWidgetTd']($p['getattr'](self, 'cod')), 'display', 'none');
				self['showHideRight']['setStyleName']('control_bar open_left');
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['showHidePanelRight'] = $method;
		var $bases = new Array($m['VerticalPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ContainerUCA', $p['tuple']($bases), $data);
	})();
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__'))) {
		$m['pyjd']['setup']('./public/DuinoBlocks.html');
		$m['manageRootPanel']($pyjs_kwargs_call(null, $m['RootPanelListener'], null, null, [{'StyleName':'rootstyle'}]));
		$m['RootPanel']()['add']($m['ContainerUCA']($m['getWorkspace']()));
		$m['pyjd']['run']();
	}
	return this;
}; /* end DuinoBlocks */


/* end module: DuinoBlocks */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.RootPanel.manageRootPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'edu.uca.ui.listener.RootPanelListener.RootPanelListener', 'edu', 'edu.uca', 'edu.uca.ui', 'edu.uca.ui.listener', 'edu.uca.ui.listener.RootPanelListener', 'edu.uca.ui.BlockList.BlockList', 'edu.uca.ui.BlockList', 'edu.uca.ui.BlocksPad.BlocksPad', 'edu.uca.ui.BlocksPad', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'edu.uca.ui.Header.Header', 'edu.uca.ui.Header', 'edu.uca.renderable.Element.Element', 'edu.uca.renderable', 'edu.uca.renderable.Element', 'pyjamas.DOM', 'pyjamas.ui.FocusWidget.FocusWidget', 'pyjamas.ui.FocusWidget', 'edu.uca.ui.HardwareList.HardwareList', 'edu.uca.ui.HardwareList', 'edu.uca.ui.HardwaresPad.HardwaresPad', 'edu.uca.ui.HardwaresPad', 'edu.uca.Workspace.getWorkspace', 'edu.uca.Workspace', 'edu.uca.util.Serializable.stateChange', 'edu.uca.util', 'edu.uca.util.Serializable', 'edu.uca.util.Serializable.exportWiringCode', 'edu.uca.util.i18n.i18n', 'edu.uca.util.i18n', 'edu.uca.util.ResizeWidget.ResizeWidget', 'edu.uca.util.ResizeWidget']
*/
