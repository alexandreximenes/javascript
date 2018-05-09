class NegociacaoController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);
        
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
         
        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(), 
            new NegociacoesView($('#negociacoesView')), 
            'adiciona', 'esvazia' , 'ordena', 'inverteOrdem');
       
        this._mensagem = new Bind(
            new Mensagem(), new MensagemView($('#mensagemView')),
            'texto');    
            
        this._ordemAtual = ''         
        
        connectionFactory.getConnection()
            .then(connection => new NegociacaoDao(connection))
            .then(dao => dao.listaTodos())
            .then(negociacoes => {
                negociacoes.forEach(negociacao => {
                    this._listaNegociacoes.adiciona(negociacao);
                });
            })
    }
    
    adiciona(event) {
       
        event.preventDefault();

        connectionFactory.getConnection()
            .then(connection => {

                let negociacao = this._criaNegociacao();
                new NegociacaoDao(connection)
                  .adiciona(negociacao)
                  .then(() => {
                    this._listaNegociacoes.adiciona(negociacao);
                    this._mensagem.texto = "Negociação adicionada com sucesso";
                    this._limpaFormulario();
                  })
                  .catch(erro => console.log(erro));

            })
            .catch(erro => console.log(erro));
    }
    
    importaNegociacoes() {
        

        let service = new NegociacaoService();
        service
            .obterNegociacoes()
            .then(negociacoes => 
                negociacoes.filter(negociacao => 
                                        //outra forma de fazer isso
                    !this._listaNegociacoes.negociacoes.some(negociacoesExistentes => 
                        JSON.stringify(negociacao) == JSON.stringify(negociacoesExistentes)
                )))
                    // uma forma de importar negociações que ainda não estão na lista
                    /*JSON.stringify(this._listaNegociacoes.negociacoes).indexOf(JSON.stringify(negociacao)) == -1)*/
            .then(negociacoes => negociacoes.forEach(negociacao => {
                this._listaNegociacoes.adiciona(negociacao);
                this._mensagem.texto = 'Negociações do período importadas'   
            }))
            .catch(erro => this._mensagem.texto = erro);                              
    }
    
    apaga() {
        
        connectionFactory.getConnection()
            .then(connection => new NegociacaoDao(connection))
            .then(dao => dao.apagaTodos())
            .then(mensagem => {
                this._listaNegociacoes.esvazia();
                this._mensagem.texto = mensagem;        
            });
        
    }
    
    _criaNegociacao() {
        
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value));    
    }
    
    _limpaFormulario() {
     
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();   
    }
    
    ordena(coluna) {
        
        if(this._ordemAtual == coluna) {
            this._listaNegociacoes.inverteOrdem(); 
        } else {
            this._listaNegociacoes.ordena((p, s) => p[coluna] - s[coluna]);    
        }
        this._ordemAtual = coluna;    
    }
}