//FUNÇÕES (tem retorno)
function somar(numeroA, numeroB) {
  return numeroA + numeroB;
}

//chamada das funções
let resultado = somar(5, 3);
imprimir(resultado);

//PROCEDIMENTOS (não te retorno)
function imprimir(resultado) {
  console.log("Resultado da soma: " + resultado);
}

//FUNÇÃO ANONIMA  e ARROW FUNCTION
/*
Função Anonima: função como  expressão, ou seja, permite que a função seja atribuída  a uma variável.)
Arrow Function: caracterizada por uma seta (=>), os parâmetros ficam  do lado esquerdo da seta e o corpo da função fica do  lado direito da seta.
*/
function imprimirFunction(mensagem) {
  console.log(mensagem);
}

let imprimirFunctionAnonima = function (mensagem) {
  console.log(mensagem);
};

let imprimirArrowFunction = (mensagem) => {
  console.log(mensagem);
};

imprimirFunction("Bem vindo ao JavaScript.");
imprimirFunctionAnonima("Desenvolvimento WEB");
imprimirArrowFunction("Desenvolvimento Desktop");

//Comparando tipos de função: regural, anônima e arrow function
//Função Regular
function somar1(numeroA, numeroB) {
  return numeroA + numeroB;
}

//Função Anônima
const somar2 = function (numeroA, numeroB) {
  return numeroA + numeroB;
};

//Arrow Function
const somar3 = (numeroA, numeroB) => {
  return numeroA + numeroB;
};

/*
Arrow Function simplificada em uma linha, não precisa de chaves e nem da palavra return*/
const somar4 = (numeroA, numeroB) => numeroA + numeroB;


console.log("Resultado soma1: " + somar1(5, 3));

console.log("Resultado soma2: " + somar2(5, 3));

console.log("Resultado soma3: " + somar3(5, 3));

console.log("Resultado soma4: " + somar4(5, 3));
