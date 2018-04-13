class Negociacao{
	
	//Criando construtor com parametros
	constructor(data, quantidade, valor){
		this._data = data;
		this._quantidade = quantidade;
		this._valor = valor;

		// Congelando objetos para não ser alterado
		Object.freeze(this);
	
	}

	get volume(){
		return this._quantidade * this._valor;
	}

	get data(){
		return this._data;
	}

	get quantidade(){
		return this._quantidade;
	}

	get valor(){
		return this._valor;
	}


}