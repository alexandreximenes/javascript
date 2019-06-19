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

        let data = DateHelper.textoParaData(this._data.value);
        console.log(data);
        let negociacao = new Negociacao(
                data, 
                this._quantidade.value, 
                this._valor.value
            );

        console.log(DateHelper.textoParaData(this._data.value));
        // console.log(DateHelper.dataParaTexto(data));
        
        this._negociacoes.push(negociacao);

        console.log(this._negociacoes);
    }
}