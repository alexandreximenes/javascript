class Negociacao{
	
	constructor(data, quantidade, valor){
		this.data = data;
		this.quantidade = quantidade;
		this.valor = valor;
	}

	getVolume(){
		return this.quantidade * this.valor;
	}
}