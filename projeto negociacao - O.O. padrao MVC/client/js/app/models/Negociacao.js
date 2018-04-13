class Negociacao{
	
	//Criando construtor com parametros
	constructor(data, quantidade, valor){
		this._data = new Date( data.getTime() );
		this._quantidade = quantidade;
		this._valor = valor;

		// Congelando objetos para não ser alterado
		Object.freeze(this);
	
	}

	get volume(){
		return this._quantidade * this._valor;
	}

	get data(){
		//programação defensiva
		return new Date( this._data.getTime() ).toLocaleString();
	}

	get quantidade(){
		return this._quantidade;
	}

	get valor(){
		return this._valor;
	}


}