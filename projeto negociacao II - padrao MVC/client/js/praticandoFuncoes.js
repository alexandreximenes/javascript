
			/*
			Funções abaixo, são aleatorias, não faz parte do treinamento, 
			mas sim da aprendizegem da linguagem javascript
			*/	

			//------------------------
			
			//Um pouco de history
			//console.warn("history = "+history.length);

			//------------------------
			
			// um pouco de navegator
			var txt = "";
			txt += "<p>Browser CodeName: " + navigator.appCodeName + "</p>";
			txt += "<p>Browser Name: " + navigator.appName + "</p>";
			txt += "<p>Browser Version: " + navigator.appVersion + "</p>";
			txt += "<p>Cookies Enabled: " + navigator.cookieEnabled + "</p>";
			txt += "<p>Browser Language: " + navigator.language + "</p>";
			txt += "<p>Browser Online: " + navigator.onLine + "</p>";
			txt += "<p>Platform: " + navigator.platform + "</p>";
			txt += "<p>User-agent header: " + navigator.userAgent + "</p>";

			document.querySelector('.info').innerHTML = txt;
			
			//------------------------
			
			//Brincando um pouco com localização

			var x = document.querySelector('.info');
			function getLocation() {
			    if (navigator.geolocation) {
			        navigator.geolocation.getCurrentPosition(showPosition);
			    } else {
			        x.innerHTML = txt +"\nGeolocation não é suportada pelo seu browser.";
			    }
			}
			function showPosition(position) {
			    x.innerHTML = "Latitude: " + position.coords.latitude + 
			    "<br>Longitude: " + position.coords.longitude
			    + "<br>" + txt; 
			}

			getLocation();

			//------------------------
			let $ = document.querySelector.bind(document);
			var _inputData = $('#data');
			var _inputQuantidade = $('#quantidade');
			var _inputValor = $('#valor');	
				// criando um objeto Negociacao
			let negociacao = new Negociacao(
					new Date(this._inputData.value),
					this._inputQuantidade.value,
					this._inputValor.value
				);

			// um pouco de localStorage
			var objeto = {
				data: negociacao.data,
				quantidade: negociacao.quantidade,
				valor: negociacao.valor
			};

			if(Storage !== "undefined"){
				localStorage.setItem("negociacao", objeto);
				localStorage.setItem("data", negociacao.data);
				localStorage.setItem("quantidade", negociacao.quantidade);
				localStorage.setItem("valor", negociacao.valor);

			}else{
				console.log("Browser nao suporta Storage");
			}

			//var retorno = localStorage.getItem("negociacao");
			//console.log("retorno" + retorno.data);

			//------------------------
		
		// testando os tipos de saida do console
		/*
			console.info("Data  : "+negociacao.data);
			console.error("Qtde  : "+negociacao.quantidade);
			console.warn("Valor : "+negociacao.valor);

			console.log("Data  : "+negociacao.data);
			//console.clear();
			console.group("group Valor : "+negociacao.valor);
			console.groupCollapsed("groupCollapsed Data  : "+negociacao.data);
			console.groupEnd("groupEnd Qtde  : "+negociacao.quantidade);
			console.time("time");
			console.trace("trace Data  : "+negociacao.data);
			console.error("error Qtde  : "+negociacao.quantidade);
		*/
		