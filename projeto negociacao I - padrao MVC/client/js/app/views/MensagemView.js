class MensagemView extends View{

	constructor(elemento){
		super(elemento);
	}

	template(model){
		var p = `<p class="mensagem alert alert-info">${model.texto}</p>`;
		return model.texto ? p : `<p></p>`;
	}

	displayNone($){
		let div = $('.mensagemView');
		let p = $('.mensagem');
		
		
		setTimeout(function(){
			div.classList.add('fadeOut');
		},3000);

		setTimeout(function(){
			p.remove();
		},5000);

	}
}