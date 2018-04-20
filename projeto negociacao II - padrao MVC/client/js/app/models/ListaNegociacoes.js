class ListaNegociacoes{

	constructor(contexto, armadilha){
		this._listaNegociacoes = [];
		this._contexto = contexto;
		this._armadilha = armadilha;
	}

	adiciona(negociacao){
		this._listaNegociacoes.push(negociacao);
		Reflect.apply(this._armadilha, this._contexto, [this]);
	}

	get negociacoes(){
		return [].concat(this._listaNegociacoes);
	}

	esvazia(){
		this._listaNegociacoes = [];
		Reflect.apply(this._armadilha, this._contexto, [this]);
	}

	get imprime(){
		console.clear();
		this._listaNegociacoes.forEach(negociacao => {
			console.log(negociacao);
		});
	}
}