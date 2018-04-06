/** @autor Alexandre Ximenes
* Arquivo responsavel por buscar dados no servidor e exibi-los na tabela
*
* Escutador de evento click do botão buscar pacientes, 
* vai fazer uma requisição get no servidor, 
* trazer os dados no formato json 
* converter os dados array, em dados um objeto paciente
/ e inserir na tabela
*/
var buscarPacientes = document.querySelector('#buscar-pacientes');
buscarPacientes.addEventListener('click', function(event){
	
	//Previne o comportamento padrão do clique no botão
	event.preventDefault();

	// Cria um objeto do tipo XMLHttpRequest
	var xhr = new XMLHttpRequest();

	// Abre a conexão, manda requisição do tipo GET e tenta buscar os dados na url especificada
	xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');
	
	// Quando os dados estiverem carregados (load) do servidor, executa o evento da função anonima
	xhr.addEventListener('load', function(){

		var response = xhr.responseText;
		//dados recebidos
		console.log(response);
		

	});

	xhr.send();

});
