var inputProcurar = document.querySelector('#procurar');
inputProcurar.addEventListener('input', function(){

	var tabela_paciente = document.querySelectorAll(".paciente");
	
	var palavraBuscada = this.value;


	console.log("palavraBuscada = "+palavraBuscada);

	if(this.value.length > 0){

		tabela_paciente.forEach(function(paciente){
			var tbNome = paciente.querySelector('.info-nome').textContent;

			if(tbNome != palavraBuscada){
				paciente.classList.add("invisivel");
			}else{
				paciente.classList.remove("invisivel");
			}
		});
	}else{
		tabela_paciente.forEach(function(paciente){
			paciente.classList.remove("invisivel");
		});
	}
	
	

});

inputProcurar.addEventListener('select', function(){
	console.log(this.value);
	//this.value.select();
});
