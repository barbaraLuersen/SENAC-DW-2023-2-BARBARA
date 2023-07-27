let prompt = require('prompt-sync')();
let curso = prompt ('Qual o nome do seu curso? ');
console.log('Curso: ' + curso);

let fase = Number(prompt('Informe a fase: '));
console.log(fase + 'a fase');

/*
ORDEM DOS COMANDOS PARA RODAR O CÓDIGO 
1. npm install prompt-sync
2. node nomeDaClasse/nomeDoFile
*/
