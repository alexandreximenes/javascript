class NegociacaoController{

    constructor(){
        let form = document.querySelector('.form');
        let $ = document.querySelector.bind(document);
        this._data = $('#data');
        this._quantidade = $('#quantidade');
        this._valor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
    }
    
    adiciona(event){
        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao())
        this._limpaFormulario();
        console.log(this._listaNegociacoes);
    }

    _criaNegociacao(){
        let data = DateHelper.textoParaData(this._data.value);
        return new Negociacao(
                data, 
                this._quantidade.value, 
                this._valor.value
            );
    }

    _limpaFormulario(){
        console.log(this.form); 
    }
}