class ListaNegociacoes{

	constructor(){
		this._listaNegociacoes = []
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

	get imprime(){
		console.clear();
		this._listaNegociacoes.forEach(negociacao => {
			console.log(negociacao);
		});
	}
}