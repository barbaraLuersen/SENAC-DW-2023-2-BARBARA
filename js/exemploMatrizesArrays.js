//ARRAY
let nomes = [];
nomes[0] = "Zeca";
nomes[1] = "Sandra";
nomes[2] = "Maria";
nomes[3] = "João";

let numeros = [3, 6, 9, 12];

console.log(nomes);
console.log(numeros);

/*
Como as variáveis no JavaScript não são tipadas o  Array pode ser composto de tipos diferente de dados.
*/
let conjuntos = ["morango", 3.14, -25, [0, 2, 4]];
console.log(conjuntos);

/*
MÉTODOS PARA ARRAYS
length – Retorna o tamanho do array;
push() – Adiciona elemento no final do array;
pop() – Remove elemento no final do array e retorna o  seu novo tamanho;
unshift() – Adiciona elemento no início do array;
shift() – Remove elemento no início do array e retorna o seu novo tamanho;
splice() – Remove um determinado elemento do array e  devolve o elemento removido;
sort() – Ordena o array;
*/

let cidades = ["Florianópolis"];
let tamanho = cidades.length;
console.log(cidades);
console.log("Tamanho do Array: " + tamanho);
console.log("\n------------------------------");

cidades.push("Biguaçu");
tamanho = cidades.push("Curitiba", "Porto Alegre");
console.log(cidades);
console.log("Tamanho do Array: " + tamanho);
console.log("\n------------------------------");

let cidade = cidades.pop();
tamanho = cidades.length;
console.log("Cidade removida: " + cidade);
console.log(cidades);
console.log("Tamanho do Array: " + tamanho);
console.log("\n------------------------------");

tamanho = cidades.unshift("São José", "Palhoça");
console.log(cidades);
console.log("Tamanho do Array: " + tamanho);
console.log("\n------------------------------");

cidade = cidades.shift();
tamanho = cidades.length;
console.log("Cidade removida: " + cidade);
console.log(cidades);
console.log("Tamanho do Array: " + tamanho);
console.log("\n------------------------------");

cidades.splice(1, 1);
tamanho = cidades.length;
console.log(cidades);
console.log("Tamanho do Array: " + tamanho);
console.log("\n------------------------------");

cidades.sort();
console.log(cidades);

//MATRIZES
let algorismos = [];
let valores = [];

for (let linha = 0; linha < 3; linha++) {
  for (let coluna = 0; coluna < 4; coluna++) {
    valores[coluna] = coluna + 1;
  }
  algorismos[linha] = valores;
}

for (let linha = 0; linha < 3; linha++) {
  console.log(numeros[linha]);
}
