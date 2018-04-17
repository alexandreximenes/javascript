class DateHelper{

	constructor(){
		throw new Error("DateHelper não pode ser instanciada");
	}

	static dataParaTexto(data){
		//return data.toLocaleString();   //formato 01/01/2018 19:05:59
		//return data.toLocaleDateString(); //formato 01/01/2018

		// Retornando a data com Template String
		return `${data.getDate()+1}/${data.getMonth()+1}/${data.getFullYear()}`;
		//usado para o treinamento
		//return data.getDate() + "/" + ( data.getMonth() + 1 ) + "/" + data.getFullYear();
	}

	static textoParaData(texto){
		if(!/\d{4}-\d{2}-\d{2}/.test(texto)) throw new Error("Data deve estar no formato aaaa-mm-dd");
		
		return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
	}

}