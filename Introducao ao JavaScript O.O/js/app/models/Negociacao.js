class Negociacao{
    constructor(nome, data, peso, altura, gordura){
        this._nome = nome;
        this._data = new Date(data).toLocaleDateString();
        this._peso = peso;
        this._altura = altura;
        this._gordura = gordura;
    }

    obterIMC(){
        return (this._peso / (this._altura * this._altura)).toFixed(2);
    }

    get data(){
        return this.data;
    }

    get nome(){
        return this._nome;
    }



}