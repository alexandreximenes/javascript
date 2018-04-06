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
	
	// url especificada, poderia ser qualquer uma que trabalhasse com REST ou disponibilizasse um recurso em AJAX
	var url = 'https://api-pacientes.herokuapp.com/pacientes';

	// Abre a conexão, manda requisição do tipo GET e tenta buscar os dados na url especificada
	xhr.open('GET', url);
	
	// Quando os dados estiverem carregados (load) do servidor, executa o evento da função anonima
	xhr.addEventListener('load', function(){

		try{
			//Somente se tudo ocorrer bem, status 200 e 301
			if( xhr.status == 200 || xhr.status == 301){
				var response = xhr.responseText;
				//dados recebidos
				console.log(response);
				//verifica o tipo do dado recebido (string)
				console.log(typeof response);
				//Faz um parser do array recebido em formato json para um array do tipo paciente
				var pacientes = JSON.parse(xhr.responseText);

				//Adiciona na tabela todos os pacientes vindos do servidor
				pacientes.forEach(function(paciente){
					adicionaPacientesNaTabela(paciente);
				});
			}else{
				console.log('Erro ao fazer requisição get na url ' + url);
			}
		}catch(Error){
			console.log(Error);
		}

	});

	xhr.send();

});
