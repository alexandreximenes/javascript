/**
* @autor Alexandre Ximenes
* Responsavel por filtrar dados do input procurar paciente 
*/

// A cada evento de input - cada tecla que for digitada, o evento key será capturado
var inputProcurar = document.querySelector('#procurar');
inputProcurar.addEventListener('input', function(){

	// Tras todos os dados da tabela
	var tabela_paciente = document.querySelectorAll(".paciente");
	
	var palavraBuscada = this.value;
	//console.log("palavraBuscada = "+palavraBuscada);

	// Se existir alguma letra ou numero digitada no campo input type="text"
	if(this.value.length > 0){

		// @param paciente - Percorre cada linha da tabela, cada TR e procura o texto classe info-nome 
		// var tbNome - Recebe o texto nome da tabela
		// var expressaoReguar - avalia se a palavra buscada no input é igual a algum nome da tabela e exibi-0
		tabela_paciente.forEach(function(paciente){
			// Recebe o texto nome da tabela
			var tbNome = paciente.querySelector('.info-nome').textContent;
			// Avalia se a palavra buscada no input é igual a algum nome da tabela e exibi-0
			var expressaoRegular = new RegExp(palavraBuscada, "i");
			// Faz o teste da expressao regular descrita acima
			if(!expressaoRegular.test(tbNome)){
				//Se NÂO existir nome com as letras digitadas no input adicionda um display:none do arquivo css/index.css
				paciente.classList.add("invisivel");
			}else{
				//Se existir nome com as letras digitadas no input remove-se qualquer classe com o nome invisivel
				paciente.classList.remove("invisivel");
			}
		});
	}else{
		// Caso não tenha nenhuma letra digitada no input, faz aparecer todos para que possa ser buscado
		tabela_paciente.forEach(function(paciente){
			paciente.classList.remove("invisivel");
		});
	}
	
	

});

inputProcurar.addEventListener('select', function(){
	console.log(this.value);
	//this.value.select();
});
