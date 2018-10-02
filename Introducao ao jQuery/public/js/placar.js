

// var tempoScroll = 1000;
//
//
// $("#botao-placar").click(mostrarPlacar);
// function mostrarPlacar(){
//     $(".placar").stop().slideToggle(700);
// }
// function inserePlacar() {
//     var corpoTabela = $(".placar").find("tbody");
//     var usuario = prompt('Informe seu nome : ');
//     var numPalavras = $("#contador-palavras").text();
//
//     var linha = novaLinha(usuario, numPalavras);
//     linha.find(".botao-remover").click(removeLinha);
//
//     corpoTabela.append(linha);
//
//     $('.placar').slideDown(500);
//     scrollPlacar();
// }
//
// function scrollPlacar(){
//     var posicao = $('.placar').offset().top;
//     $('body').animate({
//         scrollTop : posicao + 'px'
//     },tempoScroll);
// }
//
// function novaLinha(usuario, palavras) {
//     var linha = $("<tr>");
//     var colunaUsuario = $("<td>").text(usuario);
//     var colunaPalavras = $("<td>").text(palavras);
//     var colunaRemover = $("<td>");
//
//     var link = $("<a>").addClass("botao-remover").attr("href", "#");
//     var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");
//
//     link.append(icone);
//
//     colunaRemover.append(link);
//
//     linha.append(colunaUsuario);
//     linha.append(colunaPalavras);
//     linha.append(colunaRemover);
//
//     return linha;
// }
//
// function removeLinha() {
//     event.preventDefault();
//     var linha = $(this).parent().parent();
//     var tempo = 1000;
//     linha.fadeOut(tempo);
//     setTimeout(function(){
//         linha.remove();
//     },tempo);
// }
