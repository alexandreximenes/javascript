let tempoInicial = $('#tempo-digitacao').text();

$( () => {
    inicializaContadores();
    cronometro();
    reiniciarJogo();
    inicializaCorretorOrtografico();
    $('#botao-reiniciar').click( reiniciarJogo );

});

let frase = $('.frase').text();
let palavras = frase.split(' ');
let numeroPalavras = palavras.length;
let spanTamanhoFrase = $('#tamanho-frase');
let spanContadorCaracteres = $('#contador-caracteres');
let spanContadorPalavras = $('#contador-palavras');
let spanTempoDigitacao = $('#tempo-digitacao');
let tempoDigitacao = spanTempoDigitacao.text();
spanTamanhoFrase.text(numeroPalavras);
let campoDigitacao = $('.campo-digitacao');

function inicializaCorretorOrtografico(){
    campoDigitacao.on('input', () => {
        let digitado = campoDigitacao.val();
        var comparavel = frase.substr(0, digitado.length);
        // console.log(digitado);
        // console.warn(comparavel);
        if(digitado == comparavel){
            campoDigitacao.addClass("borda-verde");
            campoDigitacao.removeClass("borda-vermelha");
        }else{
            campoDigitacao.removeClass("borda-verde");
            campoDigitacao.addClass("borda-vermelha");
        }
    });
}

function inicializaContadores(){
    campoDigitacao.on('input', () => {
        let conteudo = campoDigitacao.val();
        let qtdPalavras = conteudo.split(" ");
        let qtdCaracteres = conteudo.length - 1;
        spanContadorPalavras.text(qtdPalavras.length -1);
        spanContadorCaracteres.text(qtdCaracteres);
    });
}

function cronometro(){
let tempoRestante = spanTempoDigitacao.text();
    campoDigitacao.one('focus', () => {
        campoDigitacao.removeClass("borda-verde");
        campoDigitacao.removeClass("borda-vermelha");
        let tempoId = setInterval(() => {
            spanTempoDigitacao.text(--tempoRestante);
            if(tempoRestante == 0){
                clearInterval(tempoId);
                finalizaJogo();
            }
        }, 1000)
    });
}

function finalizaJogo(){
    campoDigitacao.attr('disabled', true);
    campoDigitacao.addClass('campo-desativado');
    inserePlacar();
}
function reiniciarJogo(){
        campoDigitacao.attr('disabled', false);
        campoDigitacao.val("");
        campoDigitacao.removeClass("campo-desativado");
        spanTempoDigitacao.text(tempoInicial);
        spanContadorCaracteres.text("0");
        spanContadorPalavras.text("0");
        cronometro();
}
// var tempoInicial = $("#tempo-digitacao").text();
// var campo = $(".campo-digitacao");
//
// $(function() {
//     atualizaTamanhoFrase();
//     inicializaContadores();
//     inicializaCronometro();
//     inicializaMarcadores();
//     $("#botao-reiniciar").click(reiniciaJogo);
// });
//
// function atualizaTamanhoFrase() {
//     var frase = $(".frase").text();
//     var numPalavras  = frase.split(" ").length;
//     var tamanhoFrase = $("#tamanho-frase");
//
//     tamanhoFrase.text(numPalavras);
// }
//
// function inicializaContadores() {
//     campo.on("input", function() {
//         var conteudo = campo.val();
//
//         var qtdPalavras = conteudo.split(/\S+/).length - 1;
//         $("#contador-palavras").text(qtdPalavras);
//
//         var qtdCaracteres = conteudo.length;
//         $("#contador-caracteres").text(qtdCaracteres);
//     });
// }
//
// function inicializaMarcadores() {
//     var frase = $(".frase").text();
//     campo.on("input", function() {
//         var digitado = campo.val();
//         var comparavel = frase.substr(0, digitado.length);
//
//         if (digitado == comparavel) {
//             campo.addClass("borda-verde");
//             campo.removeClass("borda-vermelha");
//         } else {
//             campo.addClass("borda-vermelha");
//             campo.removeClass("borda-verde");
//         }
//     });
// }
//
// function inicializaCronometro() {
//     var tempoRestante = $("#tempo-digitacao").text();
//     campo.one("focus", function() {
//     	var cronometroID = setInterval(function() {
//     		tempoRestante--;
//     		$("#tempo-digitacao").text(tempoRestante);
//     		if (tempoRestante < 1) {
//                 clearInterval(cronometroID);
//                 finalizaJogo();
//     		}
//     	}, 1000);
//     });
// }
//
// function finalizaJogo() {
//     campo.attr("disabled", true);
//     campo.toggleClass("campo-desativado");
//     inserePlacar();
// }
//
// function reiniciaJogo() {
//     campo.attr("disabled", false);
//     campo.val("");
//     $("#contador-palavras").text(0);
//     $("#contador-caracteres").text(0);
//     $("#tempo-digitacao").text(tempoInicial);
//     inicializaCronometro();
//     campo.toggleClass("campo-desativado");
//     campo.removeClass("borda-vermelha");
//     campo.removeClass("borda-verde");
//
//
//     var posicao = $('.frase').offset().top;
//     $('body').animate({
//         scrollTop : posicao +'px'
//     },600
//     ,'swing'
//     ,function(){
//         $('#botao-reiniciar').focus();
//     });
//
//
// }
