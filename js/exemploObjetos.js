//Formas de acessar as propriedades de um objeto

//1 - notação regular, com a notação ponto e a representação do objeto entre aspas
let carro1 = new Object();
carro1.fabricante = "Ford";
carro1.modelo = "Mustang";
carro1.ano = 1969;

console.log("Carro 1: " + JSON.stringify(carro1));

//2 - notação  de colchetes, vistos como arrays associativos
let carro2 = new Object();
carro2["fabricante"] = "Ford";
carro2["modelo"] = "Pickup";
carro2["ano"] = 1969;

console.log("Carro 2: " + JSON.stringify(carro2));

//3 - notação literal, deve-se usar  um par de chaves para delimitar o objeto e inserir suas  propriedades com a estratégia chave valor.
let carro3 = {
  fabricante: "Porche",
  modelo: "Macan",
  ano: 2023,
};

console.log("Carro 3: " + JSON.stringify(carro3));

//4- construtor personalizado. A palavra this representa  que aquela propriedade é do objeto que está sendo  manipulado.
function Carro(fabricante, modelo, ano) {
  this.fabricante = fabricante;
  this.modelo = modelo;
  this.ano = ano;
}

let carro4 = new Carro("Volkswagen", "Fusca", 1990);

console.log("Carro 4: " + JSON.stringify(carro4));
