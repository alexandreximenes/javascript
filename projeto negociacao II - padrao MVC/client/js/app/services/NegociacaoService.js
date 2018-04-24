class NegociacaoService {
  obterNegociacaoDaSemana(cb) {
    let xhr = new XMLHttpRequest();
    let recurso = "negociacoes/semana";
    xhr.open("GET", recurso);

    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          cb(
            null,
            JSON.parse(xhr.responseText).map(
              objeto =>
                new Negociacao(
                  new Date(objeto.data),
                  objeto.quantidade,
                  objeto.valor
                )
            )
          );
        } else {
          console.log(
            "Aconteceu um erro no servidor!\n" +
              recurso +
              " invalido! \n" +
              xhr.readyState +
              " - status : " +
              xhr.status
          );
          cb("Não foi possivel importar negociações");
          console.log("Não foi possivel importar negociações");
        }
      }
    };

    xhr.send();
  }

  obterNegociacaoDaSemanaAnterior(cb) {
    let xhr = new XMLHttpRequest();
    let recurso = "negociacoes/anterior";

    xhr.open("GET", recurso);

    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          cb(
            null,
            JSON.parse(xhr.responseText).map(
              objeto =>
                new Negociacao(
                  new Date(objeto.data),
                  objeto.quantidade,
                  objeto.valor
                )
            )
          );
        } else {
          console.log(
            "Aconteceu um erro no servidor!\n" +
              recurso +
              " invalido! \n" +
              xhr.readyState +
              " - status : " +
              xhr.status
          );
          cb("Não foi possivel importar negociações");
          console.log("Não foi possivel importar negociações");
        }
      }
    };
    xhr.send();
  }

  obterNegociacaoDaSemanaRetrasada(cb) {
    let xhr = new XMLHttpRequest();
    let recurso = "negociacoes/retrasada";

    xhr.open("GET", recurso);

    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          cb(
            null,
            JSON.parse(xhr.responseText).map(
              objeto =>
                new Negociacao(
                  new Date(objeto.data),
                  objeto.quantidade,
                  objeto.valor
                )
            )
          );
        } else {
          console.log(
            "Aconteceu um erro no servidor!\n" +
              recurso +
              " invalido! \n" +
              xhr.readyState +
              " - status : " +
              xhr.status
          );
          cb("Não foi possivel importar negociações");
          console.log("Não foi possivel importar negociações");
        }
      }
    };
    xhr.send();
  }
}
