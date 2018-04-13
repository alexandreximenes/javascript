class NegociacaoController{

	adiciona(event){
		event.preventDefault();

		// Imitando o jQuery :)
		let $ = document.querySelector.bind(document);

		let form = $(".form");

		let inputData = form.data.value;
		let inputQuantidade = form.quantidade.value;
		let inputValor = form.valor.value;

		console.log(inputData);
		console.log(inputQuantidade);
		console.log(inputValor);

	}
}