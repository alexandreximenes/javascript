class MensagemView extends View{

	constructor(elemento){
		super(elemento);
		this._div = document.querySelector('.mensagemView');
	}

	template(model){
		this._div.classList.remove('fadeOut');
		var p = `<p class="mensagem alert alert-info">${model.texto}</p>`;
		return model.texto ? p : `<p></p>`;
	}

	displayNone($){
		let p = $('.mensagem');
		let div = $('.mensagemView');
		setTimeout(function(){
			div.classList.add('fadeOut');
		},3000);

		setTimeout(function(){
			p.remove();
		},5000);

	}
}