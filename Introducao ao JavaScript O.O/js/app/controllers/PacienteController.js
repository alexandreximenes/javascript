class PacienteController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._nome = $('#nome');
        this._data = $('#data');
        this._peso = $('#peso');
        this._altura = $('#altura');
        this._gordura = $('#gordura');
        this._listaPacientes = new ListaPacientes();
        this._pacienteView = new PacienteView( $('#pacientesView') );
        this._pacienteView.update(this._listaPacientes);
    }

    adiciona(event) {
        event.preventDefault();
        let paciente = this._criaPaciente();
        this._limpaFormulario();
        this._listaPacientes.adiciona( paciente );
        this._pacienteView.update(this._listaPacientes);

        console.log(DateHelper.dataParaTexto(paciente.data));
        console.log(this._listaPacientes.pacientes);
    }

    _criaPaciente(){
        return new Paciente(
            this._nome.value,
            DateHelper.textParaData(this._data.value),
            this._peso.value,
            this._altura.value,
            this._gordura.value
        );
    }

    _limpaFormulario(){
        let form = document.querySelector("#form-add");
        form.reset();
        form.nome.focus();
    }
}
/*
*  new Date(...
                this._data.value
                    .split("/")
                    .map(function(item, indice){
                        if(indice == 1){
                            return item -1;
                        }
                        return item;
                    })
            ),
* */