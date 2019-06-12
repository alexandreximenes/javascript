class Negociacao{

    constructor(date, quantidade, valor){
        this._data = date;
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);
    }

    get data(){
        return new Date(this._data.getTime());
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }

    get volume(){
        return parseInt(this._quantidade) * parseFloat(this._valor);
    }
}