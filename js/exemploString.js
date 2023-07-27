/*
MÉTODOS PARA STRING
length – Retorna o tamanho da String;
concat() - O método concatena duas String e retorna uma  nova String contendo os caracteres das duas Strings  originais.
trim() – Remove os espaços em branco do início e do final  da String;
toLowerCase() – Retorna uma cópia de uma String com  todas as letras convertidas para minúsculo, mantendo a  original inalterada;
toUpperCase() – Retorna uma nova String com o conteúdo  da original convertido para letras maiúsculas, mantendo a  original inalterada;
indexOf() – Verifica se uma substring está contida dentro  de uma String. Se tiver retorna o índice da posição onde  se inicia a substring, ou -1 caso não encontre;
slice() – Copia uma substring de uma String. Define-se  onde se inicia a cópia e onde termina, ou caso não se  indique o término, ele copia até o final da String;
replace() – Retorna uma nova String contendo a String  original com um trecho especificado substituído por outra  expressão indicada;
split() – Divide uma String em partes e retorna as partes  como um array. Para isso é passado um parâmetro, que  funciona como o “agente” divisor.
*/

let curso = "Analise e Desenvolvimento de Sistemas";
let tamanho = curso.length;
console.log("Tamanho da String: " + tamanho);
console.log("\n------------------------------------------");

let disciplina = "Desenvolvimento Web";
let conteudo = " com JavaScript";
console.log(disciplina.concat(conteúdo));
console.log("\n------------------------------------------");

let texto = "     Teste de remoção de espaços em branco      ";
console.log(texto.trim());
console.log(texto);
console.log("\n------------------------------------------");

let caixaAlta = "DESENVOLVIMENTO WEB";
let caixaBaixa = "html, css e javascript";
console.log(caixaAlta.toLowerCase());
console.log(caixaBaixa.toUpperCase());
console.log("\n------------------------------------------");

let indice = curso.indexOf("Desen");
console.log("Índice: " + indice);
console.log("\n------------------------------------------");

let pedaco = curso.slice(10, 25);
console.log(pedaco);
console.log(curso);
console.log("\n------------------------------------------");

let troca = curso.replace("Desnvolvimento", "Criação");
console.log(troca);
console.log("\n------------------------------------------");

let recorte = curso.split(" ");
console.log(recorte);
console.log("\n------------------------------------------");
