class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);
        this._data = $('#data');
        this._quantidade = $('#quantidade');
        this._valor = $('#valor');
        this._negociacoes = [];
    }
    
    adiciona(event){
        event.preventDefault();

        let negociacao = new Negociacao(
                DateHelper.textoParaData(this._data.value), 
                this._quantidade.value, 
                this._valor.value
            );

        console.log(`volume = ${negociacao.volume}`);
        
        this._negociacoes.push(negociacao);

        console.log(this._negociacoes);
    }
}