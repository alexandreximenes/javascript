//Testando a performance do carregamento
console.time("Classe NegociacaoController");

class NegociacaoController{

	constructor(){

		// Imitando o jQuery :)
		let $ = document.querySelector.bind(document);
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');	
		
		//let form = $(".form");

	}

	adiciona(event){
		event.preventDefault();

		//console.log(typeof(this._inputData.value));

		//debugger;
		
		// criando um objeto Negociacao
		let negociacao = new Negociacao(
				new Date(this._inputData.value),
				this._inputQuantidade.value,
				this._inputValor.value
			);

			console.group();
			console.log("Data  : "+negociacao.data);
			console.log("Qtde  : "+negociacao.quantidade);
			console.log("Valor : "+negociacao.valor);
			console.groupEnd();
			console.table(negociacao);

	}

}
//tempo em ms do carregamento deste arquivo (performance)
console.timeEnd("Classe NegociacaoController");