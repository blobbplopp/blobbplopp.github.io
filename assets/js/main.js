// mein Schlafzimmer

(function() {
	try{

			if( document.readyState == "complete" ){ 
				onloadActions_431446();
			}  else {
			  	window.addEventListener('load', function (){
			  		onloadActions_431446();
			  	}, false);
			}

			function onloadActions_431446(){
				constructDiv_431446();
				
			}

			function constructDiv_431446(){
				var iframeDiv = document.createElement("div");
				iframeDiv.setAttribute('id','6Cc4r7HxTRLyIKldC0mDi6FqffWTlnL9t7Ahpu_2z74_431446');
				iframeDiv.setAttribute('class','zf_main_id_431446');

				var closeFormDiv = document.createElement("div");
				closeFormDiv.setAttribute('id','deleteform_431446');
				closeFormDiv.setAttribute('class','zf_lb_closeform_431446');
				

				var containerDiv = document.createElement("div");
				containerDiv.setAttribute('id','containerDiv_431446');
				containerDiv.setAttribute('class','zf_lB_Container_431446 fadeIn');
				containerDiv.appendChild(iframeDiv);
				containerDiv.appendChild(closeFormDiv);
				
				var wrapperDiv = document.createElement("div");
				wrapperDiv.setAttribute('class','zf_lB_Wrapper_431446');
				wrapperDiv.appendChild(containerDiv);


				var dimmerDiv = document.createElement("div");
				dimmerDiv.setAttribute('class','zf_lB_Dimmer_431446');
				dimmerDiv.setAttribute('elname','popup_box');

				var mainDiv = document.createElement("div");
				mainDiv.setAttribute('id','formsLightBox_431446');
				mainDiv.style.display = "none";
				mainDiv.appendChild(wrapperDiv);
				mainDiv.appendChild(dimmerDiv);

				document.body.appendChild(mainDiv);

			}

			function showZForm_431446(){
				var iframe = document.getElementById("6Cc4r7HxTRLyIKldC0mDi6FqffWTlnL9t7Ahpu_2z74_431446").getElementsByTagName("iframe")[0];
				if(iframe == undefined ||iframe.length == 0){
					loadZForm_431446();
					
				} 
				document.getElementById("formsLightBox_431446").style.display = "block"; 
				document.body.style.overflow = "hidden";
			}

			function loadZForm_431446() {
				var iframe = document.getElementById("6Cc4r7HxTRLyIKldC0mDi6FqffWTlnL9t7Ahpu_2z74_431446").getElementsByTagName("iframe")[0];
				if(iframe == undefined ||iframe.length == 0){
					var f = document.createElement("iframe");
					f.src = getsrcurlZForm_431446('https://forms.zohopublic.eu/nejmanserge/form/meinSchlafzimmer/formperma/6Cc4r7HxTRLyIKldC0mDi6FqffWTlnL9t7Ahpu_2z74?zf_rszfm=1');
				    
					    f.setAttribute("allow","camera;");
					
					f.style.border="none";
					f.style.minWidth="100%";
					f.style.overflow="hidden";
					var d = document.getElementById("6Cc4r7HxTRLyIKldC0mDi6FqffWTlnL9t7Ahpu_2z74_431446");
					d.appendChild(f);

					var deleteForm = document.getElementById("deleteform_431446");
					deleteForm.onclick = function deleteZForm_431446() {
						var divCont = document.getElementById("formsLightBox_431446");
						divCont.style.display="none";
						document.body.style.overflow = "";

						var iframe = document.getElementById("6Cc4r7HxTRLyIKldC0mDi6FqffWTlnL9t7Ahpu_2z74_431446").getElementsByTagName("iframe")[0];
						iframe.remove();
					}

					

					window.addEventListener('message', function (){
						var evntData = event.data;
						if( evntData && evntData.constructor == String ){
							var zf_ifrm_data = evntData.split("|");
							if ( zf_ifrm_data.length == 2 ) {
								var zf_perma = zf_ifrm_data[0];
								var zf_ifrm_ht_nw = ( parseInt(zf_ifrm_data[1], 10) + 15 ) + "px";
								var iframe = document.getElementById("6Cc4r7HxTRLyIKldC0mDi6FqffWTlnL9t7Ahpu_2z74_431446").getElementsByTagName("iframe")[0];
								if ( (iframe.src).indexOf('formperma') > 0 && (iframe.src).indexOf(zf_perma) > 0 ) {
									var prevIframeHeight = iframe.style.height;
									if ( prevIframeHeight != zf_ifrm_ht_nw ) {
									iframe.style.minHeight = zf_ifrm_ht_nw;
										var containerDiv = document.getElementById("containerDiv_431446");
										containerDiv.style.height=zf_ifrm_ht_nw;
									}
								}
							}
						}

					}, false);
				}
			}

			

			function getsrcurlZForm_431446(zf_src) {
				try {
					
						if(zf_src.indexOf("?") == -1){
							zf_src+="?zf_enablecamera=true"; // No I18N
						} else {
							zf_src+="&zf_enablecamera=true" // No I18N
						}
					
					if ( typeof ZFAdvLead !== "undefined" && typeof zfutm_zfAdvLead !== "undefined" ) {
						for( var prmIdx = 0 ; prmIdx < ZFAdvLead.utmPNameArr.length ; prmIdx ++ ) {
				        	var utmPm = ZFAdvLead.utmPNameArr[ prmIdx ];
				        	var utmVal = zfutm_zfAdvLead.zfautm_gC_enc( ZFAdvLead.utmPNameArr[ prmIdx ] );
					        if ( typeof utmVal !== "undefined" ) {
					          if ( utmVal != "" ){
					            if(zf_src.indexOf('?') > 0){
					              zf_src = zf_src+'&'+utmPm+'='+utmVal;//No I18N
					            }else{
					              zf_src = zf_src+'?'+utmPm+'='+utmVal;//No I18N
					            }
					          }
					        }
				      	}
					}

					if ( typeof ZFLead !== "undefined" && typeof zfutm_zfLead !== "undefined" ) {
						for( var prmIdx = 0 ; prmIdx < ZFLead.utmPNameArr.length ; prmIdx ++ ) {
				        	var utmPm = ZFLead.utmPNameArr[ prmIdx ];
				        	var utmVal = zfutm_zfLead.zfutm_gC_enc( ZFLead.utmPNameArr[ prmIdx ] );
					        if ( typeof utmVal !== "undefined" ) {
					          if ( utmVal != "" ){
					            if(zf_src.indexOf('?') > 0){
					              zf_src = zf_src+'&'+utmPm+'='+utmVal;//No I18N
					            }else{
					              zf_src = zf_src+'?'+utmPm+'='+utmVal;//No I18N
					            }
					          }
					        }
				      	}
					}
				}catch(e){}
				return zf_src;
			}
			var buttonElem = document.getElementById("zf_button_431446");
			buttonElem.style.display = "block";
			buttonElem.addEventListener("click", showZForm_431446);
		
			
	}catch(e){}
})();

// mein Haus

(function() {
	try{

			if( document.readyState == "complete" ){ 
				onloadActions_386905();
			}  else {
			  	window.addEventListener('load', function (){
			  		onloadActions_386905();
			  	}, false);
			}

			function onloadActions_386905(){
				constructDiv_386905();
				
			}

			function constructDiv_386905(){
				var iframeDiv = document.createElement("div");
				iframeDiv.setAttribute('id','ZAqMSaOvSyg_sUmcIDGv6nuMgrmA8z6cUtvG9vDmnSA_386905');
				iframeDiv.setAttribute('class','zf_main_id_386905');

				var closeFormDiv = document.createElement("div");
				closeFormDiv.setAttribute('id','deleteform_386905');
				closeFormDiv.setAttribute('class','zf_lb_closeform_386905');
				

				var containerDiv = document.createElement("div");
				containerDiv.setAttribute('id','containerDiv_386905');
				containerDiv.setAttribute('class','zf_lB_Container_386905 fadeIn');
				containerDiv.appendChild(iframeDiv);
				containerDiv.appendChild(closeFormDiv);
				
				var wrapperDiv = document.createElement("div");
				wrapperDiv.setAttribute('class','zf_lB_Wrapper_386905');
				wrapperDiv.appendChild(containerDiv);


				var dimmerDiv = document.createElement("div");
				dimmerDiv.setAttribute('class','zf_lB_Dimmer_386905');
				dimmerDiv.setAttribute('elname','popup_box');

				var mainDiv = document.createElement("div");
				mainDiv.setAttribute('id','formsLightBox_386905');
				mainDiv.style.display = "none";
				mainDiv.appendChild(wrapperDiv);
				mainDiv.appendChild(dimmerDiv);

				document.body.appendChild(mainDiv);

			}

			function showZForm_386905(){
				var iframe = document.getElementById("ZAqMSaOvSyg_sUmcIDGv6nuMgrmA8z6cUtvG9vDmnSA_386905").getElementsByTagName("iframe")[0];
				if(iframe == undefined ||iframe.length == 0){
					loadZForm_386905();
					
				} 
				document.getElementById("formsLightBox_386905").style.display = "block"; 
				document.body.style.overflow = "hidden";
			}

			function loadZForm_386905() {
				var iframe = document.getElementById("ZAqMSaOvSyg_sUmcIDGv6nuMgrmA8z6cUtvG9vDmnSA_386905").getElementsByTagName("iframe")[0];
				if(iframe == undefined ||iframe.length == 0){
					var f = document.createElement("iframe");
					f.src = getsrcurlZForm_386905('https://forms.zohopublic.eu/nejmanserge/form/blobbploppmeinHaus/formperma/ZAqMSaOvSyg_sUmcIDGv6nuMgrmA8z6cUtvG9vDmnSA?zf_rszfm=1');
				    
					    f.setAttribute("allow","camera;");
					
					f.style.border="none";
					f.style.minWidth="100%";
					f.style.overflow="hidden";
					var d = document.getElementById("ZAqMSaOvSyg_sUmcIDGv6nuMgrmA8z6cUtvG9vDmnSA_386905");
					d.appendChild(f);

					var deleteForm = document.getElementById("deleteform_386905");
					deleteForm.onclick = function deleteZForm_386905() {
						var divCont = document.getElementById("formsLightBox_386905");
						divCont.style.display="none";
						document.body.style.overflow = "";

						var iframe = document.getElementById("ZAqMSaOvSyg_sUmcIDGv6nuMgrmA8z6cUtvG9vDmnSA_386905").getElementsByTagName("iframe")[0];
						iframe.remove();
					}

					

					window.addEventListener('message', function (){
						var evntData = event.data;
						if( evntData && evntData.constructor == String ){
							var zf_ifrm_data = evntData.split("|");
							if ( zf_ifrm_data.length == 2 ) {
								var zf_perma = zf_ifrm_data[0];
								var zf_ifrm_ht_nw = ( parseInt(zf_ifrm_data[1], 10) + 15 ) + "px";
								var iframe = document.getElementById("ZAqMSaOvSyg_sUmcIDGv6nuMgrmA8z6cUtvG9vDmnSA_386905").getElementsByTagName("iframe")[0];
								if ( (iframe.src).indexOf('formperma') > 0 && (iframe.src).indexOf(zf_perma) > 0 ) {
									var prevIframeHeight = iframe.style.height;
									if ( prevIframeHeight != zf_ifrm_ht_nw ) {
									iframe.style.minHeight = zf_ifrm_ht_nw;
										var containerDiv = document.getElementById("containerDiv_386905");
										containerDiv.style.height=zf_ifrm_ht_nw;
									}
								}
							}
						}

					}, false);
				}
			}

			

			function getsrcurlZForm_386905(zf_src) {
				try {
					
						if(zf_src.indexOf("?") == -1){
							zf_src+="?zf_enablecamera=true"; // No I18N
						} else {
							zf_src+="&zf_enablecamera=true" // No I18N
						}
					
					if ( typeof ZFAdvLead !== "undefined" && typeof zfutm_zfAdvLead !== "undefined" ) {
						for( var prmIdx = 0 ; prmIdx < ZFAdvLead.utmPNameArr.length ; prmIdx ++ ) {
				        	var utmPm = ZFAdvLead.utmPNameArr[ prmIdx ];
				        	var utmVal = zfutm_zfAdvLead.zfautm_gC_enc( ZFAdvLead.utmPNameArr[ prmIdx ] );
					        if ( typeof utmVal !== "undefined" ) {
					          if ( utmVal != "" ){
					            if(zf_src.indexOf('?') > 0){
					              zf_src = zf_src+'&'+utmPm+'='+utmVal;//No I18N
					            }else{
					              zf_src = zf_src+'?'+utmPm+'='+utmVal;//No I18N
					            }
					          }
					        }
				      	}
					}

					if ( typeof ZFLead !== "undefined" && typeof zfutm_zfLead !== "undefined" ) {
						for( var prmIdx = 0 ; prmIdx < ZFLead.utmPNameArr.length ; prmIdx ++ ) {
				        	var utmPm = ZFLead.utmPNameArr[ prmIdx ];
				        	var utmVal = zfutm_zfLead.zfutm_gC_enc( ZFLead.utmPNameArr[ prmIdx ] );
					        if ( typeof utmVal !== "undefined" ) {
					          if ( utmVal != "" ){
					            if(zf_src.indexOf('?') > 0){
					              zf_src = zf_src+'&'+utmPm+'='+utmVal;//No I18N
					            }else{
					              zf_src = zf_src+'?'+utmPm+'='+utmVal;//No I18N
					            }
					          }
					        }
				      	}
					}
				}catch(e){}
				return zf_src;
			}
			var buttonElem = document.getElementById("zf_button_386905");
			buttonElem.style.display = "block";
			buttonElem.addEventListener("click", showZForm_386905);
		
			
	}catch(e){}
})();


// meine Gäste

(function() {
	try{

			if( document.readyState == "complete" ){ 
				onloadActions_515187();
			}  else {
			  	window.addEventListener('load', function (){
			  		onloadActions_515187();
			  	}, false);
			}

			function onloadActions_515187(){
				constructDiv_515187();
				
			}

			function constructDiv_515187(){
				var iframeDiv = document.createElement("div");
				iframeDiv.setAttribute('id','iR-Cn9n39vi6_ZZHl_UfU7EGmN1RDxk8O8EFL9ul_es_515187');
				iframeDiv.setAttribute('class','zf_main_id_515187');

				var closeFormDiv = document.createElement("div");
				closeFormDiv.setAttribute('id','deleteform_515187');
				closeFormDiv.setAttribute('class','zf_lb_closeform_515187');
				

				var containerDiv = document.createElement("div");
				containerDiv.setAttribute('id','containerDiv_515187');
				containerDiv.setAttribute('class','zf_lB_Container_515187 fadeIn');
				containerDiv.appendChild(iframeDiv);
				containerDiv.appendChild(closeFormDiv);
				
				var wrapperDiv = document.createElement("div");
				wrapperDiv.setAttribute('class','zf_lB_Wrapper_515187');
				wrapperDiv.appendChild(containerDiv);


				var dimmerDiv = document.createElement("div");
				dimmerDiv.setAttribute('class','zf_lB_Dimmer_515187');
				dimmerDiv.setAttribute('elname','popup_box');

				var mainDiv = document.createElement("div");
				mainDiv.setAttribute('id','formsLightBox_515187');
				mainDiv.style.display = "none";
				mainDiv.appendChild(wrapperDiv);
				mainDiv.appendChild(dimmerDiv);

				document.body.appendChild(mainDiv);

			}

			function showZForm_515187(){
				var iframe = document.getElementById("iR-Cn9n39vi6_ZZHl_UfU7EGmN1RDxk8O8EFL9ul_es_515187").getElementsByTagName("iframe")[0];
				if(iframe == undefined ||iframe.length == 0){
					loadZForm_515187();
					
				} 
				document.getElementById("formsLightBox_515187").style.display = "block"; 
				document.body.style.overflow = "hidden";
			}

			function loadZForm_515187() {
				var iframe = document.getElementById("iR-Cn9n39vi6_ZZHl_UfU7EGmN1RDxk8O8EFL9ul_es_515187").getElementsByTagName("iframe")[0];
				if(iframe == undefined ||iframe.length == 0){
					var f = document.createElement("iframe");
					f.src = getsrcurlZForm_515187('https://forms.zohopublic.eu/nejmanserge/form/blobbploppmeineGste/formperma/iR-Cn9n39vi6_ZZHl_UfU7EGmN1RDxk8O8EFL9ul_es?zf_rszfm=1');
				    
					f.style.border="none";
					f.style.minWidth="100%";
					f.style.overflow="hidden";
					var d = document.getElementById("iR-Cn9n39vi6_ZZHl_UfU7EGmN1RDxk8O8EFL9ul_es_515187");
					d.appendChild(f);

					var deleteForm = document.getElementById("deleteform_515187");
					deleteForm.onclick = function deleteZForm_515187() {
						var divCont = document.getElementById("formsLightBox_515187");
						divCont.style.display="none";
						document.body.style.overflow = "";

						var iframe = document.getElementById("iR-Cn9n39vi6_ZZHl_UfU7EGmN1RDxk8O8EFL9ul_es_515187").getElementsByTagName("iframe")[0];
						iframe.remove();
					}

					

					window.addEventListener('message', function (){
						var evntData = event.data;
						if( evntData && evntData.constructor == String ){
							var zf_ifrm_data = evntData.split("|");
							if ( zf_ifrm_data.length == 2 ) {
								var zf_perma = zf_ifrm_data[0];
								var zf_ifrm_ht_nw = ( parseInt(zf_ifrm_data[1], 10) + 15 ) + "px";
								var iframe = document.getElementById("iR-Cn9n39vi6_ZZHl_UfU7EGmN1RDxk8O8EFL9ul_es_515187").getElementsByTagName("iframe")[0];
								if ( (iframe.src).indexOf('formperma') > 0 && (iframe.src).indexOf(zf_perma) > 0 ) {
									var prevIframeHeight = iframe.style.height;
									if ( prevIframeHeight != zf_ifrm_ht_nw ) {
									iframe.style.minHeight = zf_ifrm_ht_nw;
										var containerDiv = document.getElementById("containerDiv_515187");
										containerDiv.style.height=zf_ifrm_ht_nw;
									}
								}
							}
						}

					}, false);
				}
			}

			

			function getsrcurlZForm_515187(zf_src) {
				try {
					
					if ( typeof ZFAdvLead !== "undefined" && typeof zfutm_zfAdvLead !== "undefined" ) {
						for( var prmIdx = 0 ; prmIdx < ZFAdvLead.utmPNameArr.length ; prmIdx ++ ) {
				        	var utmPm = ZFAdvLead.utmPNameArr[ prmIdx ];
				        	var utmVal = zfutm_zfAdvLead.zfautm_gC_enc( ZFAdvLead.utmPNameArr[ prmIdx ] );
					        if ( typeof utmVal !== "undefined" ) {
					          if ( utmVal != "" ){
					            if(zf_src.indexOf('?') > 0){
					              zf_src = zf_src+'&'+utmPm+'='+utmVal;//No I18N
					            }else{
					              zf_src = zf_src+'?'+utmPm+'='+utmVal;//No I18N
					            }
					          }
					        }
				      	}
					}

					if ( typeof ZFLead !== "undefined" && typeof zfutm_zfLead !== "undefined" ) {
						for( var prmIdx = 0 ; prmIdx < ZFLead.utmPNameArr.length ; prmIdx ++ ) {
				        	var utmPm = ZFLead.utmPNameArr[ prmIdx ];
				        	var utmVal = zfutm_zfLead.zfutm_gC_enc( ZFLead.utmPNameArr[ prmIdx ] );
					        if ( typeof utmVal !== "undefined" ) {
					          if ( utmVal != "" ){
					            if(zf_src.indexOf('?') > 0){
					              zf_src = zf_src+'&'+utmPm+'='+utmVal;//No I18N
					            }else{
					              zf_src = zf_src+'?'+utmPm+'='+utmVal;//No I18N
					            }
					          }
					        }
				      	}
					}
				}catch(e){}
				return zf_src;
			}
			var buttonElem = document.getElementById("zf_button_515187");
			buttonElem.style.display = "block";
			buttonElem.addEventListener("click", showZForm_515187);
		
			
	}catch(e){}
})();