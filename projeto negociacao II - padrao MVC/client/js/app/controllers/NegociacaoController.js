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

    // REFATORAÇÃO 3
    Promise.all(
      [
        service.obterNegociacaoDaSemana(),
        service.obterNegociacaoDaSemanaAnterior(),
        service.obterNegociacaoDaSemanaRetrasada()  
      ]
    ).then(negociacoes => {
        negociacoes
        .reduce((arrayAchatado, array) => arrayAchatado.concat(array), [])
        .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
      })
      .catch(erro => {
        console.console.error(erro);
      });


    /* REFATORAÇÃO 2
    //Trabalhando com Promisses
    service.obterNegociacaoDaSemana()
    .then(negociacoes => {
      negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
    })
    .catch(erro => console.log("Não foi possivel obter as negociações da semana " + erro));
    
    service.obterNegociacaoDaSemanaAnterior()
    .then(negociacoes => {
      negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
    })
    .catch(erro => console.log("Não foi possivel obter as negociações da semana " + erro));
    

    service.obterNegociacaoDaSemanaRetrasada()
    .then(negociacoes => {
      negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
    })
    .catch(erro => console.log("Não foi possivel obter as negociações da semana " + erro));
    */



    // REFATORAÇÃO 1
    /*service.obterNegociacaoDaSemana((err, negociacoes) => {
        
      if(err){
        this._mensagem.texto = "Não foi possivel obter negociacoes";
        this._mensagemView.update(this._mensagem);
        console.log(err);
        return;
      }

      negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
      this._mensagem.texto = "Negociacoes adicionadas com sucesso.";
      this._mensagemView.update(this._mensagem);
    });


    service.obterNegociacaoDaSemanaAnterior((err, negociacoes) => {
      if (err) {
        this._mensagem.texto = "Não foi possivel obter negociacoes";
        this._mensagemView.update(this._mensagem);
        console.log(err);
        return;
      }

      negociacoes.forEach(negociacao =>
        this._listaNegociacoes.adiciona(negociacao)
      );
      this._mensagem.texto = "Negociacoes adicionadas com sucesso.";
      this._mensagemView.update(this._mensagem);
    });

    
    service.obterNegociacaoDaSemanaRetrasada((err, negociacoes) => {
      if (err) {
        this._mensagem.texto = "Não foi possivel obter negociacoes";
        this._mensagemView.update(this._mensagem);
        console.log(err);
        return;
      }

      negociacoes.forEach(negociacao =>
        this._listaNegociacoes.adiciona(negociacao)
      );
      this._mensagem.texto = "Negociacoes adicionadas com sucesso.";
      this._mensagemView.update(this._mensagem);
    });*/
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
