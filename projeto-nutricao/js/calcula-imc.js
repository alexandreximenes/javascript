
var pacientes = document.querySelectorAll('.paciente');
var arrayPacientes = pacientes.length;

for(var i = 0 ; i < arrayPacientes ; i++){
	var paciente = pacientes[i];

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

function calculaImc(peso, altura){
	return (peso / (altura * altura)).toFixed(2);
}

function pesoValido(peso){

	if(peso <= 0 || peso >= 1000){
		mensagemIMC("Peso inválido!");
		return false;
	}
	return true;
}
function alturaValida(altura){

	if(altura <= 0 || altura >= 3.00){
		mensagemIMC("Altura inválida!");	
		return false;
	}
	return true;

}

function gorduraValida(gordura){

	if(gordura <= 0 || peso >= 1000){
		mensagemIMC("Gordura inválida!");
		return false;
	}
	return true;
}



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
