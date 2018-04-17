//Testando a performance do carregamento
console.time("Classe NegociacaoController");

class NegociacaoController{

	constructor(){

		// Imitando o jQuery :)
		let $ = document.querySelector.bind(document);
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');	
		this._listaNegociacoes = new ListaNegociacoes();
		this._negociacoesView = new NegociacoesView($('.negociacoesView'));
		//this._negociacoesView.update(this._listaNegociacoes);
	}

	adiciona(event){
		event.preventDefault();

		// criando um objeto Negociacao
		this._listaNegociacoes.adiciona(this._criaNegociacao());
		this._listaNegociacoes.imprime;
		this._negociacoesView.update(this._listaNegociacoes);
		this._limpaFormulario();
			

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



