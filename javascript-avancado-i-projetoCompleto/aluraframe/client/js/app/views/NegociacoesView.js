class NegociacoesView{

    constructor(elemento){
        this._elemento = elemento;
    }

    _template(model){
        return `
            <table class="table">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Quantidade</th>
                            </tr>
                            <th>Valor</th>
                            <th>Volume</th>
                    </thead>
                    <tbody>
                        ${
                            model.negociacoes.map((n) =>{
                                return `
                                    <tr>
                                        <td>${DateHelper.dataParaTexto(n.data)}</td>
                                        <td>${n.quantidade}</td>
                                        <td>${n.valor}</td>
                                        <td>${n.volume}</td>
                                    </tr>
                                `;
                            }).join('')
                        }
                    </tbody>
                </table>
        `;
    }

    update(model){
        this._elemento.innerHtml = this._template(model);
    }
}