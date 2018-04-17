class NegociacoesView{

	constructor(elemento){

		this._elemento = elemento;
	
	}

	_template(negociacao){
		return `
			 <table class="table table-hover table-bordered">
		        <thead>
		            <tr>
		                <th>DATA</th>
		                <th>QUANTIDADE</th>
		                <th>VALOR</th>
		                <th>VOLUME</th>
		            </tr>
		        </thead>
		        <tbody>
		        	${negociacao.negociacoes.map(n => `
        					<tr>
        						<td>${DateHelper.dataParaTexto( new Date(n.data) )}</td>
	        					<td>${n.quantidade}</td>
	        					<td>${n.valor}</td>
	        					<td>${n.volume}</td>
        					</tr>
		        		
		        		`).join('')}
		        </tbody>
		        <tfoot>
		        		<tr><td colspan="3">Total</td>
		        			<td>
		        				${negociacao.negociacoes.reduce( (total, n) => total + n.volume , 0.0).toFixed(2)}
		        			</td>
		        		</tr>
		        </tfoot>

		    </table>
		`;
	}

	update(negociacao){
		this._elemento.innerHTML = this._template(negociacao);
	}
}