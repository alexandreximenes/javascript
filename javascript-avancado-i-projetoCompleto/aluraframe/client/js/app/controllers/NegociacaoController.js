class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);
        this._data = $('#data');
        this._quantidade = $('#quantidade');
        this._valor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);
    }
    
    adiciona(event){
        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao())
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

}