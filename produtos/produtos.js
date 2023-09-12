function preencherTabela(jsonProdutos) {
  var dadosTabelaProdutos = document.getElementById("corpoTabela");

  dadosTabelaProdutos.innerHTML = "";

  jsonProdutos.forEach((item) => {
    let novaLinha = dadosTabelaProdutos.insertRow();

    let celulaId = novaLinha.insertCell();
    celulaId.innerText = jsonProdutos[i].id;

    let celulaNome = novaLinha.insertCell();
    celulaNome.innerText = jsonProdutos[i].nome;

    let celulaFabricante = novaLinha.insertCell();
    celulaFabricante.innerText = jsonProdutos[i].fabricanteDoProduto.nome;

    let celulaValor = novaLinha.insertCell();
    celulaValor.innerText = jsonProdutos[i].valor;

    let celulaPeso = novaLinha.insertCell();
    celulaPeso.innerText = jsonProdutos[i].peso;
  });
}

window.addEventListener("DOMContentLoaded", buscarProdutoSeletor());

async function buscarProdutoSeletor() {
  fetch("http://localhost:8080/api/filtros", {
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

function esconderFiltro() {
  document.getElementById("meuConteudo").classList.toggle("show");
}

window.onclick = (event) => {
  if (!event.target.matches(".btn-drop")) {
    var dropdown = document.getElementsByClassName("dropdown-conteudo");
    dropdowns.forEach((item) => {
      var openDropdown = dropdown[item];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    });
  }
};
