//Testando a performance do carregamento
console.time("Classe NegociacaoController");

class NegociacaoController {
  constructor() {
    // Imitando o jQuery :)
    let $ = document.querySelector.bind(document);
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");

    let self = this;

    this._listaNegociacoes = new Bind(
      new ListaNegociacoes(),
      new NegociacoesView($(".negociacoesView")),
      "adiciona",
      "esvazia"
    );

    this._mensagemView = new MensagemView($(".mensagemView"));

    this._mensagem = new Bind(new Mensagem(), this._mensagemView, "texto");

    this._mensagemView.update(this._mensagem);
  }

  adiciona(event) {
    event.preventDefault();

    // criando um objeto Negociacao
    this._listaNegociacoes.adiciona(this._criaNegociacao());
    //this._listaNegociacoes.imprime;
    this._mensagem = new Mensagem("Negociação adicionada com sucesso!");
    this._mensagemView.update(this._mensagem);
    this._mensagemView.displayNone($);
    this._limpaFormulario();
  }

  importaNegociacoes(){
    let service = new NegociacaoService();
    
    service.obterNegociacaoDaSemana((err, negociacoes) => {
        
      if(err){
        this._mensagem.texto = err;
        console.log(err);
        return;
      }

      negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
      this._mensagem.texto = "Negociacoes adicionadas com sucesso.";
    });
  }

  apaga() {
    if (this._listaNegociacoes.tamanho() == 0) {
      this._mensagem.texto = "Não existe nenhuma negociação";
      this._mensagemView.update(this._mensagem);
      this._mensagemView.displayNone($);
    } else {
      this._listaNegociacoes.esvazia();
      this._mensagem.texto = "Negociação apaga com sucesso!";
      this._mensagemView.update(this._mensagem);
      this._mensagemView.displayNone($);
    }
  }
  _criaNegociacao() {
    return new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    );
  }

  _limpaFormulario() {
    let form = $(".form");
    form.reset();
    form.data.focus();
  }
}
//tempo em ms do carregamento deste arquivo (performance)
console.timeEnd("Classe NegociacaoController");


//console.log(typeof(this._inputData.value));

//debugger;

//Spread operator
/*let data = new Date(...this._inputData.value
	.split('-')
	.map((item, indice) => item - indice % 2)
);*/


/*this._listaNegociacoes.negociacoes.forEach(negociacao => {
				console.log("negociacao array : "+negociacao);
			});*/

			/*console.group();
			//console.log("Data e Time  : "+new Date(new Date().getTime()));
			console.log("Data  : "+negociacao.data);
			console.log("Qtde  : "+negociacao.quantidade);
			console.log("Valor : "+negociacao.valor);
			console.groupEnd();
			console.table(negociacao);*/
