class DateHelper{

    constructor(){
        throw new Error("Não é possivel instanciar essa classe");
    }
    static textParaData(texto){
        let padrao = /\d{4}-\d{2}-\d{2}/;
        if( ! padrao.test(texto) )
            throw new Error("Deve estar no formato aaaa-mm-dd");

        return new Date(...texto.split("-")
            .map((item, indice) => item - indice % 2)
        );
    }

    static dataParaTexto(data){
        return `${data.getDate()}/${(data.getMonth()+1)}/${data.getFullYear()}`;
    }
}