class DateHelper{

    constructor(){
        throw new Error("Essa classe não pode ser instanciada");
    }

    static textoParaData(texto){
        return new Date(...texto
        .split("-")
        .map((item, indice) => item - indice % 2));
    }

    static dataParaTexto(data){
            if(!/\d{4}-\d{2}-\d{2}/.test(data))
                throw new Error("Formato de data invalido.");
            return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }
    
}