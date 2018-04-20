class ListaNegociacoes{

	constructor(){
		this._listaNegociacoes = [];
	}

	adiciona(negociacao){
		this._listaNegociacoes.push(negociacao);
	}

	get negociacoes(){
		return [].concat(this._listaNegociacoes);
	}

	esvazia(){
		this._listaNegociacoes = [];
	}

	tamanho(){
		return this._listaNegociacoes.length;
	}


	get imprime(){
		console.clear();
		console.log(this._listaNegociacoes.length);
		this._listaNegociacoes.forEach(negociacao => {
			console.log(negociacao);
		});
	}
}