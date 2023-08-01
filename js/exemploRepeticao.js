//WHILE
let contador = 0;

while (contador < 10) {
  if (contador % 2 == 0) {
    console.log("Par: " + contador);
  } else {
    console.log("Ímpar: " + contador);
  }
  contador++;
}

//DO WHILE
do {
  if (contador % 2 == 0) {
    console.log("Par: " + contador);
  } else {
    console.log("Ímpar: " + contador);
  }
  contador++;
} while (contador < 10);

//FOR
for (let contador = 0; contador < 10; contador++) {
  if (contador % 2 == 0) {
    console.log("Par: " + contador);
  } else {
    console.log("Ímpar: " + contador);
  }
}

//FOR IN E FOR OF
/*
O FOR OF percorre objetos em uma lista de objetos.
O FOR IN percorre a lista de propriedades de um objeto
*/
let carroA = { fabricante: "Ford", modelo: "Mustang", ano: 1969 };
let carroB = { fabricante: "Porche", modelo: "Macan", ano: 2023 };
let carros = [carroA, carroB];

for (let carro of carros) {
  console.log(carro);
}

console.log("------------------------");
console.log("CarroA: ")
for (let propriedade in carroA) {
  console.log(propriedade + ": " + carroA[propriedade]);
}

console.log("------------------------");
console.log("CarroB: ")
for (let propriedade in carroB) {
  console.log(propriedade + ": " + carroB[propriedade]
  );
}

console.log("------------------------");
let nomes = ["Fred", "Sheila", "Sara"];
for (let nome of nomes) {
  console.log(nome);
}
