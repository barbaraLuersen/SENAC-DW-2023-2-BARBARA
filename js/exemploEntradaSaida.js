let prompt = require('prompt-sync')();
let curso = prompt ('Qual o nome do seu curso? ');
console.log('Curso: ' + curso);

let fase = Number(prompt('Informe a fase: '));
console.log(fase + 'a fase');

/* 
ENTRADAS E SAÍDAS
- prompt = captura uma informação (teclado)
- console.log = imprime uma informação no terminal (System.out.print)
*/

/*
ORDEM DOS COMANDOS 
- PARA RODAR O CÓDIGO 
1. npm install prompt-sync
2. node nomeDaClasse/nomeDoFile

- PARA CONECTAR COM O GITHUB E FAZER COMMIT AND PUSH
3. git config --global user.name "Bárbara Luersen"
4. git config --global user.email barbaraluersenlima@gmail.com
*/

