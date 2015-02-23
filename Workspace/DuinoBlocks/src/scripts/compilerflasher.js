$(document).ready(function () {	
	window.setTimeout(function () {
		addPlugin();
    }, 3000);
});

function addPlugin(){
	//console.log('addPlugin')
    //verifier scripts
    if ($("#cb_cf").length > 0) {
    	
        /*if($.isNumeric($("#cb_cf").data().sketch)) {
            $.post("http://codebender.cc/files", {'project_id':$("#cb_cf").data().sketch}, function(data) {
                window.files = JSON.parse(data);
            });
        }*/

        if ($("#cb_cf").data().sections.indexOf("verify") != -1 || !$("#cb_cf").data().board)
            $("#cb_cf").html($("#cb_cf").html() + '\x3cdiv id\x3d\x22verify\x5fdiv\x22\x3e\x0a\x3c\x2fdiv\x3e');

        if($("#cb_cf").data().sections.indexOf("verify") != -1)
            $("#verify_div").html($("#verify_div").html() + '\x3cbutton id\x3d\x22compile\x22 class\x3d\x22btn\x22 onclick\x3d\x22verify\x28\x29\x22 title\x3d\x22Analyze and verify code\x22\x3e\x0a    \x3ci id\x3d\x22compile\x5ficon\x22 class\x3d\x22icon\x2dcheck\x22\x3e\x3c\x2fi\x3e\x0a    \x3cspan id\x3d\x22compile\x5ftext\x22\x3eVerify Code\x3c\x2fspan\x3e\x0a\x3c\x2fbutton\x3e\x0a');

        /*$.getJSON("http://codebender.cc/board/listboards", function (data) {
        	window.boards_list = data;
	        if ($("#cb_cf").data().board) {
	            for (var i = 0; i < window.boards_list.length; i++) {
	                if (window.boards_list[i]["name"] == $("#cb_cf").data().board)
	                    window.selectedBoard = window.boards_list[i];
	            }
	        }
	        else {
	            $("#verify_div").html('\x3cselect id\x3d\x22boards\x22 onChange\x3d\x22saveBoard\x28\x29\x22\x3e\x3c\x2fselect\x3e\x0a' + $("#verify_div").html());
	            for (var i = 0; i < window.boards_list.length; i++)
	                $("#boards").append($('<option></option>').val(window.boards_list[i]["name"]).html(window.boards_list[i]["name"]));
	            loadBoard();
	        }
        });*/
		loadBoard();

        //flasher scripts
        if ($("#cb_cf").data().sections.indexOf("usbflash") != -1 || $("#cb_cf").data().sections.indexOf("serialmonitor") != -1) {
            $("#cb_cf").html($("#cb_cf").html() + '\x3cdiv id\x3d\x22plugin\x5fdiv\x22\x3e\x0a    \x3cdiv id\x3d\x22ports\x5fdiv\x22\x3e\x0a        \x3cselect id\x3d\x22ports\x22 onchange\x3d\x22savePort\x28\x29\x22  title\x3d\x22Selecione a porta USB que seu Arduino est\xe1 conectado\x22    \x3e\x3c\x2fselect\x3e\x0a    \x3c\x2fdiv\x3e\x0a\x3c\x2fdiv\x3e\x0a');
            if ($("#cb_cf").data().sections.indexOf("usbflash") != -1) {
                //$("#ports_div").html($("#ports_div").html() + '\x3cbutton id\x3d\x22uploadusb\x22 class\x3d\x22btn\x22 onclick\x3d\x22usbflash\x28\x29\x22 title\x3d\x22Load your program to your Arduino via USB\x22\x3e\x0a    \x3ci id\x3d\x22upload\x5ficon\x22 class\x3d\x22icon\x2dupload\x22\x3e\x3c\x2fi\x3e\x0a    \x3cspan id\x3d\x22upload\x5ftext\x22\x3e USB Flash \x3c\x2fspan\x3e\x0a\x3c\x2fbutton\x3e\x0a');
            	$("#ports_div").html($("#ports_div").html() + '\x3cli id\x3d\x22uploadusb\x22 class\x3d\x22btn\x22 onclick\x3d\x22usbflash\x28\x29\x22 title\x3d\x22Carregue seu programa em seu Arduino via USB\x22\x3e\x0a    \x3ci id\x3d\x22upload\x5ficon\x22 class\x3d\x22icon\x2dupload\x22\x3e\x3c\x2fi\x3e\x0a    \x3cspan id\x3d\x22upload\x5ftext\x22 class\x3d\x22title\x22 \x3eCarregar\x3c\x2fspan\x3e\x0a \x3cdiv class\x3d\x22r\x22\x3e\x3c\x2fdiv\x3e\x0a \x3c\x2fli\x3e\x0a');
                $("#ports_div").addClass("input-append");
            }
            if ($("#cb_cf").data().sections.indexOf("serialmonitor") != -1)
                //$("#plugin_div").html($("#plugin_div").html() + '\x3cdiv id\x3d\x22serial\x5futil\x22\x3e\x0a    \x3cspan id\x3d\x22speed\x5flabel\x22 class\x3d\x22help\x2dinline\x22\x3eSpeed\x3a \x3c\x2fspan\x3e\x0a    \x3cselect id\x3d\x22baudrates\x22\x3e\x0a            \x3coption\x3e9600\x3c\x2foption\x3e\x0a            \x3coption\x3e19200\x3c\x2foption\x3e\x0a            \x3coption\x3e28800\x3c\x2foption\x3e\x0a            \x3coption\x3e38400\x3c\x2foption\x3e\x0a            \x3coption\x3e57600\x3c\x2foption\x3e\x0a            \x3coption\x3e115200\x3c\x2foption\x3e\x0a        \x3c\x2fselect\x3e\x0a    \x3cbutton class\x3d\x22btn\x22 id\x3d\x22toggle\x5fconnect\x5fserial\x22 onclick\x3d\x22connect\x28\x29\x3b\x22 title\x3d\x22Open Serial Monitor\x22\x3e\x0a        \x3ci class\x3d\x22icon\x2dlist\x2dalt\x22\x3e\x3c\x2fi\x3e\x0a        Open Serial Monitor\x0a    \x3c\x2fbutton\x3e\x0a\x0a    \x3cdiv id\x3d\x22serial\x5fmonitor\x5fcontent\x22 style\x3d\x22display\x3anone\x3b\x22\x3e\x0a        \x3cdiv class\x3d\x22input\x2dappend\x22\x3e\x0a            \x3cinput id\x3d\x22text2send\x22 type\x3d\x22text\x22 placeholder\x3d\x22Serial Message\x22 onkeypress\x3d\x22serialSendOnEnter\x28\x29\x22\x3e\x0a            \x3cbutton id\x3d\x22serial\x5fsend\x22 onclick\x3d\x22serialSend\x28\x29\x22 class\x3d\x22btn\x22 title\x3d\x22Send Message\x22\x3eSend\x0a            \x3c\x2fbutton\x3e\x0a        \x3c\x2fdiv\x3e\x0a        \x3cpre id\x3d\x22serial\x5fhud\x22 class\x3d\x22well\x22  style\x3d\x22overflow\x2dy\x3ascroll\x22\x3e\x3c\x2fpre\x3e\x0a    \x3c\x2fdiv\x0a\x3c\x2fdiv\x3e\x0a');
            	$("#monitor").html('\x3cdiv id\x3d\x22serial\x5futil\x22\x3e\x0a \x3cli class\x3d\x22btn\x22 id\x3d\x22toggle\x5fconnect\x5fserial\x22 onclick\x3d\x22connect\x28\x29\x3b\x22 title\x3d\x22Abrir Monitor Serial\x22\x3e\x0a        \x3ci class\x3d\x22icon\x2dmonitor\x22\x3e\x3c\x2fi\x3e\x0a  \x3cspan class\x3d\x22title\x22 \x3eAbrir Monitor Serial\x3c\x2fspan\x3e\x0a  \x3cdiv class\x3d\x22r\x22\x3e\x3c\x2fdiv\x3e\x0a       \x3c\x2fli\x3e\x0a\x0a    \x3cdiv id\x3d\x22serial\x5fmonitor\x5fcontent\x22 style\x3d\x22display\x3anone\x3b\x22\x3e\x0a        \x3cdiv class\x3d\x22input\x2dappend\x22\x3e\x0a            \x3cinput id\x3d\x22text2send\x22 type\x3d\x22text\x22 placeholder\x3d\x22Mensagem\x22 onkeypress\x3d\x22serialSendOnEnter\x28\x29\x22\x3e\x0a            \x3cli id\x3d\x22serial\x5fsend\x22 onclick\x3d\x22serialSend\x28\x29\x22 class\x3d\x22btn\x22 title\x3d\x22Enviar Mensagem\x22\x3e        \x3ci class\x3d\x22icon\x2dsend\x22\x3e\x3c\x2fi\x3e\x0a  \x3cspan class\x3d\x22title\x22 \x3eEnviar\x3c\x2fspan\x3e\x0a  \x3cdiv class\x3d\x22r\x22\x3e\x3c\x2fdiv\x3e\x0a     \x0a            \x3c\x2fli\x3e\x0a        \x3c\x2fdiv\x3e\x0a        \x3cpre id\x3d\x22serial\x5fhud\x22 class\x3d\x22well\x22  style\x3d\x22overflow\x2dy\x3ascroll\x22\x3e\x3c\x2fpre\x3e\x0a    \x3c\x2fdiv\x0a\x3c\x2fdiv\x3e\x0a');
            initializePlugin();
        }

        $("#cb_cf").html($("#cb_cf").html() + "<div id='operation_output'></div>");
    }
	else{
		window.setTimeout(function () {
			addPlugin();
		}, 3000);
	}
}

function setOperationProgress(percentage) {
    //$("#operation_output").html("Working...");
	$("#operation_output").html("Processando...");
	$("#progress").show();
    $("#progress_val").width(percentage + '%');
}

function setOperationOutput(message) {
    $("#operation_output").html(message);
    window.setTimeout(function () {
    	$("#progress").hide();
        $("#progress_val").width('0%');
    }, 500);    
}

function load_files() {
	//window.files = new Object({"Arduino Generic Blink.ino":document.getElementById('clip_text').value});//
	window.files = new Object({"Arduino Generic Blink.ino":editor.getValue()});//
    return window.files;
}

function saveBoard() {
    new Lawnchair(function () {
        this.save({key:'board', name:$("#boards option:selected").text()});
    });
    window.selectedBoard = window.boards_list[$("#boards").prop("selectedIndex")];
}

function loadBoard() {
    /*Lawnchair(function () {
        this.exists('board', function (exists) {
            if (exists) {
                this.get('board', function (config) {
                    $("#boards").val(config.name)
                })
            }
            window.selectedBoard = window.boards_list[$("#boards").prop("selectedIndex")];
        });
    });*/
	window.selectedBoard = new Object({"name":"Arduino Uno","upload":{"protocol":"arduino","maximum_size":"32256","speed":"115200"},"bootloader":{"low_fuses":"0xff","high_fuses":"0xde","extended_fuses":"0x05","path":"optiboot","file":"optiboot_atmega328.hex","unlock_bits":"0x3F","lock_bits":"0x0F"},"build":{"mcu":"atmega328p","f_cpu":"16000000L","core":"arduino","variant":"standard"},"description":"The Uno is the reference model for the Arduino platform. It has 14 digital input\/output pins (of which 6 can be used as PWM outputs), 6 analog inputs, a 16 MHz ceramic resonator, a USB connection, a power jack, an ICSP header, and a reset button. It does not use the FTDI USB-to-serial driver chip. Instead, it features the Atmega16U2 (Atmega8U2 up to version R2) programmed as a USB-to-serial converter.","personal":false,"id":1});	
}
    
function getMaxSize() {
    return parseInt(window.selectedBoard["upload"]["maximum_size"]);
}

function generate_payload(format) {
    var files = load_files();
    var count = 0;
    var files_array = Array();
    jQuery.each(files, function (i, val) {
        files_array[count++] = {"filename":i, "content":$("<div/>").html(val).text()};
    });
    var payload = {"files":files_array, "format":format, "build":window.selectedBoard["build"]};
    return JSON.stringify(payload)
}

function verify() {
    //$.get("http://codebender.cc/utilities/log/verify");
    var payload = generate_payload("syntax");
    setOperationProgress(90);
    //$.post("http://compiler.codebender.cc", payload, function (data) {
	$.post("http://146.164.3.25/compiler", payload, function (data) {
        var obj = jQuery.parseJSON(data);
        if (obj.success == 0) {
            $("#compile").addClass("btn-warning");
            $("#compile_icon").addClass("icon-remove");
            //setOperationOutput("Verification failed.")
            setOperationOutput("Falha na verifica\xE7\xE3o.")
        }
        else {
            $("#compile").addClass("btn-success");
            $("#compile_icon").addClass("icon-ok");
            //setOperationOutput("<p>Verification Successful!</p>")
            setOperationOutput("<p>Verificado com Sucesso!</p>")
        }
        $("#compile_icon").removeClass("icon-check").addClass("icon-white");

        window.setTimeout(function () {
            $("#compile").removeClass("btn-success").removeClass("btn-warning");
            $("#compile_icon").removeClass("icon-white").removeClass("icon-remove").removeClass("icon-ok").addClass("icon-check");
        }, 500);
        if (obj.success == 0) {
            if (typeof verification_onFail == 'function')
                verification_onFail(obj.message);
        }
        else {
            if (typeof verification_onSuccess == 'function')
                verification_onSuccess();
        }
    });
}
	
window.flashing_errors = {256:"Could not open serial port. Make sure you have selected the correct device and serial port."};

function initializePlugin() {
    if (isMobile()) {
        $("#plugin_div").hide();
    }
    else {
        var plugin_found = false;
        //load it anyway on ie
        if(navigator.userAgent.toLowerCase().indexOf('msie') == -1) {
            for (i = 0; i < navigator.plugins.length; i++)
                if (navigator.plugins[i].name == "Codebender.cc" || navigator.plugins[i].name == "Codebendercc")
                    plugin_found = true;
            if (!plugin_found) {
                //var alert = browserSpecificPluginInstall("You need to enable or install the Codebender Plugin. ");
            	var alert = browserSpecificPluginInstall("Voc\xEA precisa habilitar ou instalar o Plugin Codebender. ");
            	show_alert(alert, "alertupdatediv");
            	$("#monitor").hide();//
                return;
            }
            $("#monitor").show();//
        }
        //$("#plugin_div").html($("#plugin_div").html() + '<object id="plugin0" type="application/x-codebendercc" width="0" height="0" xmlns="http://www.w3.org/1999/html"></object>');
		$("#codeBenderPluginContent").html($("#codeBenderPluginContent").html() + '<object id="plugin0" type="application/x-codebendercc" width="0" height="0" xmlns="http://www.w3.org/1999/html"></object>');

        setTimeout(function(){
            window.plugin = document.getElementById('plugin0');

            version = "1.5.5.3";
            if($("#cb_cf").data().pluginVersion)
                version = $("#cb_cf").data().pluginVersion;
            validateVersion(version);
        }, 100);
    }
}

function parseVersionString(str) {
    if (typeof(str) != 'string') {
        return false;
    }
    var x = str.split('.');
    // parse from string or default to 0 if can't parse
    var maj = parseInt(x[0]) || 0;
    var min = parseInt(x[1]) || 0;
    var pat = parseInt(x[2]) || 0;
    var bui = parseInt(x[3]) || 0;
    return {
        major:maj,
        minor:min,
        patch:pat,
        build:bui
    }
}

function comparePluginVersions(firstVersion, secondVersion) {
    var major = firstVersion.major - secondVersion.major;
    var minor = firstVersion.minor - secondVersion.minor;
    var patch = firstVersion.patch - secondVersion.patch;
    var build = firstVersion.build - secondVersion.build;

    if (major != 0) return major;
    if (minor != 0) return minor;
    if (patch != 0) return patch;
    return build;
}

function validateVersion(version) {
    if (comparePluginVersions(parseVersionString(window.plugin.version), parseVersionString(version)) < 0) {
        //var alert = browserSpecificPluginInstall("You need to update the Codebender Plugin. ");
    	var alert = browserSpecificPluginInstall("Voc\xEA precisa atalizar o Plugin Codebender . ");
        show_alert(alert, "alertupdatediv");
        $("#monitor").hide();//
    } else if (window.plugin.version == null) {
        //var alert = browserSpecificPluginInstall("You need to enable or install the Codebender Plugin. ");
    	var alert = browserSpecificPluginInstall("Voc\xEA precisa habilitar ou instalar o Plugin Codebender. ");
        show_alert(alert, "alertupdatediv");
        $("#monitor").hide();//
    } else {
    	$("#monitor").show();//
        enableUSB();
    }
}

function getbin(callback) {
    //$.get("http://codebender.cc/utilities/log/flash");

    var payload = generate_payload("binary");

    //$.post("http://compiler.codebender.cc", payload, function (data) {
	$.post("http://146.164.3.25/compiler", payload, function (data) {
        var obj = jQuery.parseJSON(data);
        callback(obj);
    });
}


function usbflash(){
    disconnect();

    if (($("#ports").val() != null && $("#ports").val() != "") || typeof window.selectedBoard["upload"]["using"] === "string") {

        setOperationProgress(50);

        getbin(function (obj) {
            if (obj.success == 0) {
            	$(".serialMonitor").addClass("warning");
            	
                if (document.getElementById('clip_text').value == ""){
                	setOperationOutput("Nenhuma tradu\xE7\xE3o encontrada. Clique em Traduzir.");
                }
                else{
                	//setOperationOutput("There was an error compiling.");
                	setOperationOutput("Houve um erro na compila\xE7\xE3o.");
                }
                
            	window.setTimeout(function () {$(".serialMonitor").removeClass("success").removeClass("warning");}, 500);
                if (typeof verification_onFail == 'function')
	                verification_onFail(obj.message);

            }
            else {

                if (typeof verification_onSuccess == 'function')
	                verification_onSuccess();

                if (parseInt(obj.size) > getMaxSize()) {
                	$(".serialMonitor").addClass("warning");
                    //setOperationOutput("There is not enough space!");
                	setOperationOutput("N\xE3o h\xE1 espa\xE7o suficiente!");
                	window.setTimeout(function () {$(".serialMonitor").removeClass("success").removeClass("warning");}, 500);
                    return;
                }

                binary = obj["output"];

                setOperationProgress(80);

                //this fixes the plugin crashing when no device is selected for DigiSpark etc
                var device = "COM0";
                if(typeof window.selectedBoard["upload"]["using"] === "undefined")
                    device = portslist.options[portslist.selectedIndex].text;

                plugin.flash(device, binary, window.selectedBoard["upload"]["maximum_size"], window.selectedBoard["upload"]["protocol"], window.selectedBoard["upload"]["speed"], window.selectedBoard["build"]["mcu"],
                        function (from, progress) {               			
                            
                			if (progress) {
                                //$("#uploadusb").addClass("btn-warning");
                            	$(".serialMonitor").addClass("warning");

                                if(window.flashing_errors[progress])
	                                //setOperationOutput(window.flashing_errors[progress]+" <a href='https://codebender.uservoice.com/knowledgebase/articles/183395-usb-flashing-known-errors' target='_blank'>More Info</a>");
                                	setOperationOutput(window.flashing_errors[progress]+" <a href='https://codebender.uservoice.com/knowledgebase/articles/183395-usb-flashing-known-errors' target='_blank'>Mais Info</a>");
                                else
                                    //setOperationOutput("There was an error uploading. Error #" + progress);
                                	setOperationOutput("Houve um erro no carregamento. Error #" + progress);
                            } else {                            	
                            	setOperationProgress(100)
                            	
                                //$("#uploadusb").addClass("btn-success");
                            	$(".serialMonitor").addClass("success");
                                
                                //setOperationOutput("Upload successful");
                            	setOperationOutput("Carregado com sucesso.");
                            }

                            //$("#upload_icon").addClass("icon-white");
                            window.setTimeout(function () {
	                            //$("#uploadusb").removeClass("btn-success").removeClass("btn-warning");
                            	$(".serialMonitor").removeClass("success").removeClass("warning");
	                            //$("#upload_icon").removeClass("icon-white");
                            }, 500);

                        });
            }
        });
    }
    else {
    	$(".serialMonitor").addClass("warning");
        //setOperationOutput("Please select a valid port or enable the plugin!!");
    	setOperationOutput("Por favor selecione uma porta v\xE1lida ou habilite o plugin!!");
    	window.setTimeout(function () {$(".serialMonitor").removeClass("success").removeClass("warning");}, 500);
    }
}


function browserSpecificPluginInstall(alert) {
    if(BrowserDetect.browser == "Chrome") {
        //alert += "<a href='https://chrome.google.com/webstore/detail/codebendercc-extension/fkjidelplakiboijmadcpcbpboihkmee' target='_blank'>Add to Chrome</a>";
    	alert += "<a href='https://chrome.google.com/webstore/detail/codebendercc-extension/fkjidelplakiboijmadcpcbpboihkmee' target='_blank'>Adicionar ao Chrome</a>";
    }
    else if(BrowserDetect.browser == "Firefox") {
        //alert+= '<a id="xpi-download-url" href = "http://codebender.cc/codebender.xpi" >Add to Firefox.</a>';
    	alert+= '<a id="xpi-download-url" href = "http://codebender.cc/codebender.xpi" >Adicionar ao Firefox.</a>';
    }
    else if(BrowserDetect.OS == "Windows") {
        alert+= '<a id="msi-download-url" href = "http://codebender.cc/Codebendercc.msi" >Adicionar ao Windows.</a>';
    }
    else {
        //alert += "<a href='http://codebender.cc/static/plugin'>Learn More</a>.";
    	alert += "<a href='http://codebender.cc/static/plugin'>Leia Mais</a>.";
    }
    return alert;
}

function getFire() {
    var ports = "";
    try {
        ports = plugin.probeUSB();
        if (ports != oldPorts) {
            $('#ports').find('option').remove();
            portsAvail = ports.split(",");
            for (var i = 0; i < portsAvail.length; i++) {
                if (portsAvail[i] != "") {
                    portslist.options[i] = new Option(portsAvail[i], portsAvail[i], true, false);
                }
            }

            if(window.loaded_port != null)
                savePort(window.loaded_port);
            oldPorts = ports;
            loadPort();
        }
    }
    catch (err) {
        $('#ports').find('option').remove();
        oldPorts = ports;
    }
    checkPermissions();
}


function enableUSB() {

    window.connected = false;

    window.portslist = $("#ports")[0];
    window.oldPorts = "";

    setTimeout(function () {
        scan();
    }, 200);

    setTimeout(function () {
        loadPort();
    }, 500);
}

function savePort(port) {
    new Lawnchair(function () {
        if(port === undefined)
            port = $("#ports option:selected").text();

        this.save({key:'port', name:port});
    });
    checkPermissions();
}

function loadPort() {
    Lawnchair(function () {
        this.exists('port', function (exists) {
            if (exists) {
                this.get('port', function (config) {
                    $("#ports").val(config.name);
                    window.loaded_port = config.name;
                })

            }
        });
    });
}

function checkPermissions() {
    if ((navigator.appVersion.indexOf("X11") != -1) || (navigator.appVersion.indexOf("Linux") != -1)) {
        var group = window.plugin.checkPermissions($("#ports option:selected").text());
        if (group != "") {
            var message = "<small>You do not have the required <span style=\"color:red\">permissions<\/span> to communicate with Arduino Devices. To fix this add yourself to the <span style=\"color:red\">" + group.replace('\n', '') + "<\/span> group running \"<span style=\"color:red\">gpasswd -a username " + group.replace('\n', '') + " <\/span>\" with root permissions. Then <span style=\"color:red\">log-out<\/span> and <span style=\"color:red\">log-in<\/span> again from your computer to reload user permissions.</small>";
            show_alert(message);
        }
    } else if (navigator.appVersion.indexOf("MSIE") != -1 ) {
        var protectedModeEnabled = window.plugin.checkPermissions("");
        if (protectedModeEnabled == "1") {
            var message = "<small>You need to disable the <span style=\"color:red\">Protected Mode</span> to communicate with Arduino Devices. <a target=\"_blank\" href=\"https://codebender.uservoice.com/knowledgebase/articles/188530-running-the-codebender-plugin-on-internet-explorer\">Learn More</a></small>";
            show_alert(message);
        }
    }
}

function scan() {
	
    window.hasPerm = window.plugin.setCallback(function (from, output) {
        if (output == "disconnect") {
            disconnect();
        } else {
            if (output == "Could not auto-reset or detect a manual reset!")
                $.get("http://codebender.cc/utilities/log/programmer%3A%20leonardo%20didn%27t%20reset");
            else
                $.get("http://codebender.cc/utilities/log/programmer%3A%20unkown%20error"); //todo find a way to send the output
            setOperationOutput(output);
        }
    });

    if (!window.hasPerm) {
        show_alert("You need to grant permissions to the Codebender extension.", "permissions_alert");
    }

    getFire();
    setInterval(function () {
        getFire();
    }, 1000);
}

function show_alert(message, divname) {
    alertElement = "<div id='";
    alertElement += divname;
    alertElement += "' class='alert'>";
//  alertElement += "<button type='button' class='close' data-dismiss='alert'>x</button>";
    alertElement += message
    alertElement += "</div>";
    $("#plugin_div").html(alertElement);
}

//Device check function
function isMobile() {
    return navigator.userAgent.match(/Android/i) ? true : false
        || navigator.userAgent.match(/BlackBerry/i) ? true : false
        || navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false
        || navigator.userAgent.match(/IEMobile/i) ? true : false;
}

/*
Serial Monitor functions
 */
function connect() {
    //speed = $("#baudrates option:selected").val();
	speed = "9600";
	if (window.connected == false) {
        if ($("#ports").val() != null && $("#ports").val() != "") {
            $("#serial_monitor_content").show(1000);
            window.connected = true;
            //$("#toggle_connect_serial").html("Disconnect").attr("onClick", "disconnect();");
            $("#toggle_connect_serial").html("\x3ci class\x3d\x22icon\x2dmonitor\x22\x3e\x3c\x2fi\x3e\x0a  \x3cspan class\x3d\x22title\x22 \x3eFechar Monitor Serial\x3c\x2fspan\x3e\x0a  \x3cdiv class\x3d\x22r\x22\x3e\x3c\x2fdiv\x3e\x0a").attr("onClick", "disconnect();").attr("title", "Fechar Monitor Serial");      
            $("#serial_hud").html("");
            window.plugin.serialRead(
                portslist.options[portslist.selectedIndex].text,
                speed,
                function (from, line) {
                    serialHudAppend(line);
                }
            );
        } else {
            //setOperationOutput("Please select a valid port or enable the plugin!!");
        	setOperationOutput("Por favor selecione uma porta v\xE1lida ou habilite o plugin!!");
        }
    } else {
        disconnect();
    }
}


function disconnect() {
    if (window.connected == true) {
        //$("#toggle_connect_serial").html("<i class='icon-list-alt'></i> Open Serial Monitor").attr("onClick", "connect();");
    	$("#toggle_connect_serial").html("\x3ci class\x3d\x22icon\x2dmonitor\x22\x3e\x3c\x2fi\x3e\x0a  \x3cspan class\x3d\x22title\x22 \x3eAbrir Monitor Serial\x3c\x2fspan\x3e\x0a  \x3cdiv class\x3d\x22r\x22\x3e\x3c\x2fdiv\x3e\x0a").attr("onClick", "connect();");
        window.connected = false;
        window.plugin.disconnect();
        $("#serial_monitor_content").hide(1000);
    }
}

function serialHudAppend(line) {
	if (isNaN(line)) {
	    serialHudWrite($("#serial_hud").html() + line + "<br>");
	} else {
	    if (line == "13")    return;
	    if (line == "10")    serialHudWrite($("#serial_hud").html() + "<br>");
	    if (line != "10")    serialHudWrite($("#serial_hud").html() + String.fromCharCode(line));
	}
}

function serialHudWrite(message) {
    $("#serial_hud").html(message);
    $("#serial_hud").scrollTo(99999999);
}

function serialSendOnEnter(event){
    e = window.event;   // resolve event instance
    if (e.keyCode == '13'){
    	serialSend();
    }else if (e.keyCode == '10'){
    	serialSend();
    }
}

function serialSend() {
    window.plugin.serialWrite($("#text2send").val());
}

//Scrolling function
(function ($) {
    var h = $.scrollTo = function (a, b, c) {
        $(window).scrollTo(a, b, c)
    };
    h.defaults = {axis:'xy', duration:parseFloat($.fn.jquery) >= 1.3 ? 0 : 1, limit:true};
    h.window = function (a) {
        return $(window)._scrollable()
    };
    $.fn._scrollable = function () {
        return this.map(function () {
            var a = this, isWin = !a.nodeName || $.inArray(a.nodeName.toLowerCase(), ['iframe', '#document', 'html', 'body']) != -1;
            if (!isWin) return a;
            var b = (a.contentWindow || a).document || a.ownerDocument || a;
            return/webkit/i.test(navigator.userAgent) || b.compatMode == 'BackCo    mpat' ? b.body : b.documentElement
        })
    };
    $.fn.scrollTo = function (e, f, g) {
        if (typeof f == 'object') {
            g = f;
            f = 0
        }
        if (typeof g == 'function')g = {onAfter:g};
        if (e == 'max')e = 9e9;
        g = $.extend({}, h.defaults, g);
        f = f || g.duration;
        g.queue = g.queue && g.axis.length > 1;
        if (g.queue)f /= 2;
        g.offset = both(g.offset);
        g.over = both(g.over);
        return this._scrollable().each(function () {
            if (e == null)return;
            var d = this, $elem = $(d), targ = e, toff, attr = {}, win = $elem.is('html,body');
            switch (typeof targ) {
                case'number':
                case'string':
                    if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)) {
                        targ = both(targ);
                        break
                    }
                    targ = $(targ, this);
                    if (!targ.length)return;
                case'object':
                    if (targ.is || targ.style)toff = (targ = $(targ)).offset()
            }
            $.each(g.axis.split(''), function (i, a) {
                var b = a == 'x' ? 'Left' : 'Top', pos = b.toLowerCase(), key = 'scroll' + b, old = d[key], max = h.max(d, a);
                if (toff) {
                    attr[key] = toff[pos] + (win ? 0 : old - $elem.offset()[pos]);
                    if (g.margin) {
                        attr[key] -= parseInt(targ.css('margin' + b)) || 0;
                        attr[key] -= parseInt(targ.css('border' + b + 'Width')) || 0
                    }
                    attr[key] += g.offset[pos] || 0;
                    if (g.over[pos])attr[key] += targ[a == 'x' ? 'width' : 'height']() * g.over[pos]
                } else {
                    var c = targ[pos];
                    attr[key] = c.slice && c.slice(-1) == '%' ? parseFloat(c) / 100 * max : c
                }
                if (g.limit && /^\d+$/.test(attr[key]))attr[key] = attr[key] <= 0 ? 0 : Math.min(attr[key], max);
                if (!i && g.queue) {
                    if (old != attr[key])animate(g.onAfterFirst);
                    delete attr[key]
                }
            });
            animate(g.onAfter);
            function animate(a) {
                $elem.animate(attr, f, g.easing, a && function () {
                    a.call(this, e, g)
                })
            }
        }).end()
    };
    h.max = function (a, b) {
        var c = b == 'x' ? 'Width' : 'Height', scroll = 'scroll' + c;
        if (!$(a).is('html,body'))return a[scroll] - $(a)[c.toLowerCase()]();
        var d = 'client' + c, html = a.ownerDocument.documentElement, body = a.ownerDocument.body;
        return Math.max(html[scroll], body[scroll]) - Math.min(html[d], body[d])
    };
    function both(a) {
        return typeof a == 'object' ? a : {top:a, left:a}
    }
})(jQuery);
