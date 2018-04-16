class DateHelper{

	dataParaTexto(data){
		//return data.toLocaleString();     formato 01/01/2018 19:05:59
		//return data.toLocaleDateString(); formato 01/01/2018

		//usado para o treinamento
		return data.getDate() + "/" + ( data.getMonth() + 1 ) + "/" + data.getFullYear();
	}

	textoParaData(texto){
		return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
	}

}