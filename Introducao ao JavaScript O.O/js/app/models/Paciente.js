class Paciente{
    constructor(nome, data, peso, altura, gordura){
        let erros = this._validarPaciente(nome, data, peso, altura, gordura);
        if(erros > 0) throw new Error(erros);

        this._nome = nome;
        this._data = new Date(data.getTime());//.toLocaleDateString();
        this._peso = peso;
        this._altura = altura;
        this._gordura = gordura;
        this._imc = this.obterIMC();
        Object.freeze(this);
    }

    _validarPaciente(nome, data, peso, altura, gordura){
        let erros = [];
        nome == "" || nome.length <= 2 ? erros.push('Nome invalido!') : '';
        data == "" ? erros.push('Nome invalido!') : '';
        peso == "" || (peso <= 0 || peso > 1000) ? erros.push('Peso invalido!') : '';
        altura == "" || (altura <= 0 || altura >= 4.0) ? erros.push('Altura invalida!') : '';
        gordura == "" || gordura < 0 || gordura > peso ? erros.push('Gordura invalida!') : '';
        return erros;

    }

    obterIMC(){
        return (this._peso / (this._altura * this._altura)).toFixed(2);
    }

    get nome(){
        return this._nome;
    }

    get data(){
        return new Date(this._data.getTime());
    }

    get peso(){
        return this._peso;
    }

    get altura(){
        return this._altura;
    }

    get gordura(){
        return this._gordura;
    }

    get imc(){
        return this._imc;
    }




}