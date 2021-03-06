class PacienteView extends View{

    constructor(elemento) {
        super(elemento)
    }

    _template(model) {
        // if(model.pacientes.length> 0)
        return `
            <table id="tabela">
            <thead>
            <tr>
                <th>Nome</th>
                <th>Data</th>
                <th>Peso(kg)</th>
                <th>Altura(m)</th>
                <th>Gordura Corporal(%)</th>
                <th>IMC</th>
            </tr>
            </thead>
            <tbody id="tabela-pacientes">
                ${model.pacientes.map(n => `
                        <tr class="paciente">
                            <td class="info-nome"> ${n.nome} </td>
                            <td class="info-data"> ${DateHelper.dataParaTexto(n.data)} </td>
                            <td class="info-peso"> ${n.peso} </td>
                            <td class="info-altura"> ${n.altura} </td>
                            <td class="info-gordura"> ${n.gordura} </td>
                            <td class="info-imc"> ${n.imc} </td>
                         </tr>
                `).join('')}
            </tbody> 
            <tfoot>
                    <tr>
                        <td colspan="5" style="text-align: left">Total de pacientes: </td>
                        <td> ${model.pacientes.length}</td>
                    </tr>
            </tfoot>
        `;

    }
}