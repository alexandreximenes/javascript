class PacienteLog{
    constructor(nome, data, peso, altura, gordura){
        this._nome = nome;
        this._data = new Date(data.getTime());//.toLocaleDateString();
        this._peso = peso;
        this._altura = altura;
        this._gordura = gordura;
        this._imc = this.obterIMC();
        Object.freeze(this);
    }

    obterIMC(){
        return (this._peso / (this._altura * this._altura)).toFixed(2);
    }

    get nome(){
        return this._nome;
    }

    get data(){
        return new Date(this._data.getTime());
    }

    get peso(){
        return this._peso;
    }

    get altura(){
        return this._altura;
    }

    get gordura(){
        return this._gordura;
    }

    get imc(){
        return this._imc;
    }




}