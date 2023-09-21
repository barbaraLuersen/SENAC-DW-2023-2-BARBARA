function preencherTabela(jsonFabricantes) {
  var dadosTabelaFabricantes = document.getElementById("corpoTabela");

  dadosTabelaFabricantes.innerHTML = "";

  jsonFabricantes.forEach((item) => {
    let novaLinha = dadosTabelaFabricantes.insertRow();

    let celulaId = novaLinha.insertCell();
    celulaId.innerText = item.id;

    let celulaNome = novaLinha.insertCell();
    celulaNome.innerText = item.nome;

    let celulaCNPJ = novaLinha.insertCell();
    celulaCNPJ.innerText = item.cnpj;

    let celulaCEP = novaLinha.insertCell();
    celulaCEP.innerText = item.cep;

    let celulaCidade = novaLinha.insertCell();
    celulaCidade.innerText = item.cidade;

    let celulaUF = novaLinha.insertCell();
    celulaUF.innerText = item.uf;
  });
}

async function buscarCEP() {
  var cepFabricante = document.getElementById("input-cep-fabricante");
  var cepInformado = cepFabricante.value;

  const promiseConsultaCEP = fetch(
    `https://viacep.com.br/ws/${cepInformado}/json/`
  )
    .then((resultado) => resultado.json())
    .then((json) => {
      if (json.erro) {
        mostrarTelaErro();
      } else {
        preencherCamposComJSON(json);
      }
    })
    .catch((erro) => {
      mostrarTelaErro();
    });
}

function limpar() {
  document.getElementById("input-nome-fabricante").value = "";
  document.getElementById("input-cnpj-fabricante").value = "";
  document.getElementById("input-cep-fabricante").value = "";
  document.getElementById("input-cidade-fabricante").value = "";
  document.getElementById("input-uf-fabricante").value = "";
}

function limparFiltros() {
  document.getElementById("input-nome-fabricante-filtro").value = "";
  document.getElementById("input-cnpj-fabricante-filtro").value = "";
  document.getElementById("input-cep-fabricante-filtro").value = "";
  document.getElementById("input-cidade-fabricante-filtro").value = "";
  document.getElementById("input-uf-fabricante-filtro").value = "";
}

function preencherCamposComJSON(json) {
  document.getElementById("input-uf-fabricante").value = json.uf;
  document.getElementById("input-cidade-fabricante").value = json.localidade;
}

function mostrarTelaErro() {
  limpar();
  alert("CEP informado não existe!");
}

function validarCampos() {
  let mensagem = "";
  if (document.getElementById("input-nome-fabricante").value == "") {
    mensagem += "- Nome inválido";
  }
  if (document.getElementById("input-cnpj-fabricante").value == "") {
    mensagem += "- CNPJ inválido";
  }
  if (document.getElementById("input-cep-fabricante").value == "") {
    mensagem += "- CEP inválido";
  }
  if (document.getElementById("input-cidade-fabricante").value == "") {
    mensagem += "- Cidade inválida";
  }
  if (document.getElementById("input-uf-fabricante").value == "") {
    mensagem += "- UF inválida";
  }

  return mensagem;
}

function validarCEP(cepFormatado) {
  var fieldsetCep = document.getElementById("input-cep-fabricante");
  var cepValido = false;
  if (cepFormatado.length == 8) {
    fieldsetCep.style = "background-color: purple";
    cepValido = true;
  } else {
    fieldsetCep.style = "background-color: orange";
  }
  return cepValido;
}
////////////////////////////////////////////////////////////////////

window.addEventListener("DOMContentLoaded", buscarProdutoSeletor());

//MÉTODOS POST
async function salvar() {
  let mensagemValidacao = validarCampos();

  if (mensagemValidacao != "") {
    alert(mensagemValidacao);
  } else {
    fetch("http://localhost:8080/api/fabricantes", {
      method: "POST",
      body: JSON.stringify({
        nome: document.getElementById("input-nome-fabricante").value,
        cnpj: document.getElementById("input-cnpj-fabricante").value,
        cep: document.getElementById("input-cep-fabricante").value,
        cidade: document.getElementById("input-cidade-fabricante").value,
        uf: document.getElementById("input-uf-fabricante").value,
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((resultado) => resultado.json())
      .then((json) => {
        alert("Salvou!");
      });
  }
}

async function buscarProdutoSeletor() {
  fetch("http://localhost:8080/api/fabricantes/filtro", {
    method: "POST",
    body: JSON.stringify({
      nome: document.getElementById("input-nome-fabricante-filtro").value,
      cnpj: document.getElementById("input-cnpj-fabricante-filtro").value,
      cep: document.getElementById("input-cep-fabricante-filtro").value,
      cidade: document.getElementById("input-cidade-fabricante-filtro").value,
      uf: document.getElementById("input-uf-fabricante-filtro").value,
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
