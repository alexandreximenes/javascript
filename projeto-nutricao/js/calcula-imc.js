/**
@autor Alexandre Ximenes
Responsavel por calcular os IMC's (peso / (altura * altura))
Percorre todos os tr da table e faz o calculo, inserindo na td IMC
Porpositalmente foi incluido manualmente alguns dados invalidos para o sistema validar peso e altura
*/
var pacientes = document.querySelectorAll('.paciente');
var arrayPacientes = pacientes.length;

// usado para validar os dados do paciente 
let _MIN_PESO = 0;
let _MAX_PESO = 1000;
let _MIN_ALTURA = 0;
let _MAX_ALTURA = 3.00;
let _MIN_GORDURA = 0;
let _MAX_GORDURA = 1000;

for(var i = 0 ; i < arrayPacientes ; i++){
	var paciente = pacientes[i];

	//captura as informações do cliente
	var tdPeso = paciente.querySelector('.info-peso').textContent;
	var tdAltura = paciente.querySelector('.info-altura').textContent;
	var tdGordura = paciente.querySelector('.info-gordura').textContent;
	var tdIMC = paciente.querySelector('.info-imc');

	var pesoEhValido = pesoValido(tdPeso);
	var alturaEhValida = alturaValida(tdAltura);
 	var gorduraEhValida = gorduraValida(tdGordura);


	if(pesoEhValido && alturaEhValida && gorduraEhValida){
	 		//atrubui o resultado do calculo imc
			tdIMC.textContent = calculaImc(tdPeso, tdAltura); 
	 	}else{
	 		//adiciona linha coral light (vermelho) para cada linha que deu algum erro ao calcular o IMC
	 		paciente.classList.add("paciente-invalido");
	 	}
}

// realiza o calculo do IMC do paciente e retorna com o resultado
function calculaImc(peso, altura){
	return (peso / (altura * altura)).toFixed(2);
}

// valida o peso entre 0 e 1000 e retorna com o resultado
function pesoValido(peso){

	if(peso <= _MIN_PESO || peso >= _MAX_PESO){
		mensagemIMC("Peso inválido!");
		return false;
	}
	return true;
}
// valida a altura entre 0 e 3.0
function alturaValida(altura){

	if(altura <= _MIN_ALTURA || altura >= _MAX_ALTURA){
		mensagemIMC("Altura inválida!");	
		return false;
	}
	return true;

}
// valida a gordura entre 0 e 1000
function gorduraValida(gordura){

	if(gordura <= _MIN_GORDURA || gordura >= _MAX_GORDURA){
		mensagemIMC("Gordura inválida!");
		return false;
	}
	return true;
}


// exibe mensagem no corpo do html
function mensagemIMC(msg){
	tdIMC.textContent = msg;		
}



// td IMC da tabela - aula 3
// var imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
// console.log(imc.toFixed(2));
// console.log(typeof(imc));

// AULA 1 E 2
	// var h1 = document.querySelector('.titulo');
	// console.log(h1);
	// console.log(h1.textContent);
	// h1.textContent = "Aparecida Nutricionista Ltda";
