//IF ELSE
let sol = true;
let vento = false;
if (sol === true && vento === false) {
  console.log("Vou a praia!");
} else {
  console.log("Não vou a praia!");
}

//SWITCH CASE
let tempo = "sol";
switch (tempo) {
  case "sol": {
    console.log("Vou a praia!");
    break;
  }
  case "nublado": {
    console.log("Vou ao cinema!");
    break;
  }
  default: {
    console.log("Fico em casa!");
  }
}

//OPERADOR TERNÁRIO
/*
? – Separa a condição das opções de retorno.
: - Separa os retornos verdadeiro e falso
*/

//Aqui antes teria um 'let sol = true'; mas isso já foi declarado mais acima
let mensagem = sol ? "Voua a praia!" : "Vou ficar em casa!";
console.log(mensagem);

