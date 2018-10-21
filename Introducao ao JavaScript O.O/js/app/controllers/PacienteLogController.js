class PacienteLogController{

    constructor(){
        let $ = document.querySelector.bind(document);
        this._nome = $('nome');
        this._data = $('data');
        this._peso = $('peso');
        this._altura = $('altura');
        this._gordura = $('gordura');
    }

    adiciona(event){
        alert("chamou PacienteLogController");
        event.preventDefault();
    }
}