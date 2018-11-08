class PacienteLogController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._nome = $('#nome');
        this._data = $('#data');
        this._peso = $('#peso');
        this._altura = $('#altura');
        this._gordura = $('#gordura');
    }

    adiciona(event) {
        event.preventDefault();
        let paciente = new PacienteLog(
            this._nome.value,
            new Date(...this._data.value.split("/")
                        .map((item, indice) => item - indice % 2)
            ),
            this._peso.value,
            this._altura.value,
            this._gordura.value
        );
        console.log(paciente);
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