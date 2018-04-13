class NegociacaoController{

	adiciona(event){
		event.preventDefault();

		let form = document.querySelector(".form");

		let inputData = form.data.value;
		let inputQuantidade = form.quantidade.value;
		let inputValor = form.valor.value;

		console.log(inputData);
		console.log(inputQuantidade);
		console.log(inputValor);

	}
}