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
  fetch(
    "http://localhost:8080/api/produtos/{" +
      document.getElementById("input-ID").value +
      "}",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    }
  )
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
      valorMinimo: document.getElementById("input-valor").value,
      PesoMinimo: document.getElementById("input-peso").value,
      dataCadastroInicial: document.getElementById("input-data").value,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((resultado) => resultado.json())
    .then((json) => {
      console.log(json);
    });
}

async function buscarProdutoSeletor() {
  fetch("http://localhost:8080/api/produtos/filtro", {
    method: "POST",
    body: JSON.stringify({
      nome: document.getElementById("input-produto").value,
      fabricante: document.getElementById("input-fabricante").value,
      cnpjFabricante: document.getElementById("input-cnpj").value,
      valorMinimo: document.getElementById("input-valor-min").value,
      valorMaximo: document.getElementById("input-valor-max").value,
      PesoMinimo: document.getElementById("input-peso-min").value,
      pesoMaximo: document.getElementById("input-peso-max").value,
      dataCadastroInicial: document.getElementById("input-data-inicio").value,
      dataCadastroFinal: document.getElementById("input-data-fim").value,
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
      valorMinimo: document.getElementById("input-valor").value,
      PesoMinimo: document.getElementById("input-peso").value,
      dataCadastroInicial: document.getElementById("input-data").value,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((resultado) => resultado.json())
    .then((json) => {
      console.log(json);
    });
}

//MÉTODO DELETE
async function excluir() {
  fetch(
    "http://localhost:8080/api/produtos/filtro/{" +
      document.getElementById("input-ID").value +
      "}",
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    }
  )
    .then((resultado) => resultado.json())
    .then((json) => {
      console.log(json);
    });
}

window.onclick = (event) => {
  if (!event.target.matches(".btn-drop")) {
    var dropdowns = document.getElementsByClassName("dropdown-conteudo");

    for (let i; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[item];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
