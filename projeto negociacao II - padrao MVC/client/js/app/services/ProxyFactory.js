class ProxyFactory{

	static create(objeto, props, acao){

		return new Proxy(objeto, 
		{ 
			get(target, prop, receiver) {
				if ( props.includes(prop) && typeof(target[prop]) == typeof(Function) ) 
				{
					return function() 
					{
						//console.log(`interceptando ${prop}`);
						Reflect.apply(target[prop], target, arguments);

						return acao(target);
					}
				}
				return Reflect.get(target, prop, receiver);
			},
			set(target, prop, value, receiver){
				if(props.includes(prop)){
					acao(value);
				}

				return Reflect.set(target, prop, receiver);
			}
		
		 });
	}
}