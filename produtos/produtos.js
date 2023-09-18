function preencherTabela(jsonProdutos) {
  //var = variavel
  var dadosTabelaProdutos = document.getElementById("corpoTabela");

  dadosTabelaProdutos.innerHTML = "";

  //forEach = para cada
  jsonProdutos.forEach((item) => {
    let novaLinha = dadosTabelaProdutos.insertRow();

    let celulaId = novaLinha.insertCell();
    celulaId.innerText = item.id;

    let celulaNome = novaLinha.insertCell();
    celulaNome.innerText = item.nome;

    let celulaFabricante = novaLinha.insertCell();
    celulaFabricante.innerText = item.fabricanteDoProduto.nome;

    let celulaValor = novaLinha.insertCell();
    celulaValor.innerText = item.valor;

    let celulaPeso = novaLinha.insertCell();
    celulaPeso.innerText = item.peso;
  });
}

window.addEventListener("DOMContentLoaded", buscarProdutoSeletor());

//MÉTODOS GET
async function listarTodos() {
  fetch("http://localhost:8080/api/produtos/todos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((resultado) => resultado.json())
    .then((json) => {
      console.log(json);
      preencherTabela(json);
    });
}

async function consultarPorId() {
  let id = document.getElementById("input-ID").value;
  fetch("http://localhost:8080/api/produtos/{" + id + "}", {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((resultado) => resultado.json())
    .then((json) => {
      console.log(json);
      preencherTabela(json);
    });
}

//MÉTODOS POST
async function salvar() {
  fetch("http://localhost:8080/api/produtos", {
    method: "POST",
    body: JSON.stringify({
      nome: document.getElementById("input-produto").value,
      fabricante: document.getElementById("input-fabricante").value,
      cnpjFabricante: document.getElementById("input-cnpj").value,
      valor: document.getElementById("input-valor").value,
      peso: document.getElementById("input-peso").value,
      dataCadastro: document.getElementById("input-data").value,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((resultado) => resultado.json())
    .then((json) => console.log(json))
    .catch((err) => console.log("Erro de solicitação", err));
}

async function buscarProdutoSeletor() {
  fetch("http://localhost:8080/api/produtos/filtro", {
    method: "POST",
    body: JSON.stringify({
      nome: document.getElementById("input-produto-filtro").value,
      fabricante: document.getElementById("input-fabricante-filtro").value,
      cnpjFabricante: document.getElementById("input-cnpj-filtro").value,
      valorMinimo: document.getElementById("input-valor-min-filtro").value,
      valorMaximo: document.getElementById("input-valor-max-filtro").value,
      PesoMinimo: document.getElementById("input-peso-min-filtro").value,
      pesoMaximo: document.getElementById("input-peso-max-filtro").value,
      dataCadastroInicial: document.getElementById("input-data-inicio-filtro")
        .value,
      dataCadastroFinal: document.getElementById("input-data-fim-filtro").value,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((resultado) => resultado.json())
    .then((json) => {
      console.log(json);
      preencherTabela(json);
    });
}

//MÉTODOS PUT
async function atualizar() {
  fetch("http://localhost:8080/api/produtos", {
    method: "PUT",
    body: JSON.stringify({
      nome: document.getElementById("input-produto").value,
      fabricante: document.getElementById("input-fabricante").value,
      cnpjFabricante: document.getElementById("input-cnpj").value,
      valor: document.getElementById("input-valor").value,
      peso: document.getElementById("input-peso").value,
      dataCadastro: document.getElementById("input-data").value,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((resultado) => resultado.json())
    .then((json) => console.log(json))
    .catch((err) => console.log("Erro de solicitação", err));
}

//MÉTODO DELETE
async function excluir() {
  let id = document.getElementById("input-ID").value;
  fetch("http://localhost:8080/api/produtos/filtro/{" + id + "}", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((resultado) => resultado.json())
    .then((json) => console.log(json))
    .catch((err) => console.log("Erro de solicitação", err));
}
