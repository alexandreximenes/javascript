class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);
        this._data = $('#data');
        this._quantidade = $('#quantidade');
        this._valor = $('#valor');
    }
    
    adiciona(event){
        event.preventDefault();
        document.querySelector(".resultado").innerHTML = this._valor.value;
    }
}