//Testando a performance do carregamento
console.time("Classe NegociacaoController");

class NegociacaoController{

	constructor(){

		// Imitando o jQuery :)
		let $ = document.querySelector.bind(document);
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');	 
		
		let self = this;
		this._listaNegociacoes = new Proxy(new ListaNegociacoes(), 
		{ 
			get(target, prop, receiver) {
				if ( ["adiciona", "esvazia"].includes(prop) && typeof(target[prop]) == typeof(Function) ) 
				{
					return function() 
					{
						console.log(`interceptando ${prop}`);
						
						Reflect.apply(target[prop], target, arguments);

						self._negociacoesView.update(target);
					}
				}
				return Reflect.get(target, prop, receiver);
			}
		 });

		this._negociacoesView = new NegociacoesView($('.negociacoesView'));
		this._mensagem = new Mensagem();
		this._mensagemView = new MensagemView($('.mensagemView'));
		this._mensagemView.update(this._mensagem);
		//this._negociacoesView.update(this._listaNegociacoes);
	}

	adiciona(event){
		event.preventDefault();

		// criando um objeto Negociacao
		this._listaNegociacoes.adiciona(this._criaNegociacao());
		//this._listaNegociacoes.imprime;
		this._mensagem = new Mensagem("Negociação adicionada com sucesso!");
		this._mensagemView.update(this._mensagem);
		this._mensagemView.displayNone($);
		this._limpaFormulario();
			

	}

	apaga(){
		if(this._listaNegociacoes.tamanho() == 0){

			this._mensagem.texto = "Não existe nenhuma negociação";
			this._mensagemView.update(this._mensagem);
			this._mensagemView.displayNone($);
		
		}else{			
		
			this._listaNegociacoes.esvazia();
			this._mensagem.texto = "Negociação apaga com sucesso!";
			this._mensagemView.update(this._mensagem);
			this._mensagemView.displayNone($);
		}

	}
	_criaNegociacao(){
		return new Negociacao(
				DateHelper.textoParaData(this._inputData.value),
				this._inputQuantidade.value,
				this._inputValor.value
			);
	}

	_limpaFormulario(){
		let form = $('.form');
		form.reset();
		form.data.focus();
	}

}
//tempo em ms do carregamento deste arquivo (performance)
console.timeEnd("Classe NegociacaoController");


//console.log(typeof(this._inputData.value));

//debugger;

//Spread operator
/*let data = new Date(...this._inputData.value
	.split('-')
	.map((item, indice) => item - indice % 2)
);*/


/*this._listaNegociacoes.negociacoes.forEach(negociacao => {
				console.log("negociacao array : "+negociacao);
			});*/

			/*console.group();
			//console.log("Data e Time  : "+new Date(new Date().getTime()));
			console.log("Data  : "+negociacao.data);
			console.log("Qtde  : "+negociacao.quantidade);
			console.log("Valor : "+negociacao.valor);
			console.groupEnd();
			console.table(negociacao);*/
