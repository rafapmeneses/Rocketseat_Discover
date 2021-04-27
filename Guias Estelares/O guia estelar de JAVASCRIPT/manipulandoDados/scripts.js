// Prototype --> funcionalidades do javascript 
"teste".__proto__

//Type conversion (typecasting) vs Type coersion
//Alteração de um tipo de dado para outro tipo

console.log('9' + 5); //type coersion

console.log(Number('9') + 5); //type conversion

// Manipulando Strings e números

// conversão
let string = "123"; 
console.log(typeof Number(string)); // transformar string em numero
let number = 321; 
console.log(typeof String(number)); // transformar numero em string

// contar caracteres

let word = "teste de palavras";
console.log(word.length); // length é usado para contar a quantidade de caracteres
let numero = 1234;
console.log(String(numero).length); // nao é possível contar os caracteres de números, por isso a conversão

// transformar número quebrado com 2 casas decimais e mudar ponto por vírgula

let numero2 = 312.42312;
console.log(numero2.toFixed(2).replace(".", ",")); //toFixed transforma as casas pela quantidade passada por parâmetro, e o replace pode ser usado para mudar caracteres
numero2 = numero2.toFixed(2).replace(".", ","); // teste para mostrar que depois de usar replace, a variável vira uma string
console.log(typeof numero2); // comprovação do teste

// transformar letras minúsculas em maiúsculas e ao contrario também

let palavra = "Programar é top";
console.log(palavra.toUpperCase()); // touppercase usado para deixar os caractéres maiúsculas
console.log(palavra.toLowerCase()); // tolowercase usado para deixar os caractéres minúsculas

// verificar se existe em um texto uma palavra

let phrase = "Eu quero Programar";
console.log(phrase.includes("Programar")); // includes usado para procurar algo em uma string, letras maiúsculas importam

// manipulando strings

let frase = "Eu quero aprender mais";
let meuArray = frase.split(" "); // split usado para separar a string em posições do array, separando pelo argumento passado
console.log(meuArray);
let novoArray = meuArray.join("_"); // join usado para juntar os elementos do array com o argumento passado
console.log(novoArray);

// criar array com construtor
let arrayConstruct = new Array('a', 'b', 'c'); // criando um array usando a função construtora Array do js
console.log(arrayConstruct);

// contar elementos de um array
console.log([ 
    "a",
    2,
    {type: "array"},
    function(){return "teste"}
].length); // criado um array com 4 tipos de dados diferentes e usando a função length para contar

// transformar uma string em elementos de array

let arrayFrase = "manipução";
console.log(Array.from(arrayFrase)); // usando a função construtora Array e o método from

// manipulando arrays

let techs = ["html", "css", "js"];

techs.pop(); // remover a ultima string do array

techs.shift(); // remove a string do inicio do array

techs.push("node.js"); //adicionando uma string com push

techs.unshift("sql"); // adicionando uma string no inicio do array

console.log(techs.slice(1, 2)); // para exibir uma parte do array com o slice, no caso ele exibe as posições adiante da primeira informada no parâmetro

techs.splice(0, 1); // remove os elementos do array, no caso o que esta entre a posição 1 até a 1...

let testenovo = ["1","2","3","4","5","6","7"]; // outro teste do splice

testenovo.splice(1,5); // remove 2,3,4,5,6, pois esta entre as posições 1 e 5

console.log(testenovo); // resultado

let index = techs.indexOf("css"); //encontrar a posição de um elemento no array

console.log(index); // retornou 0 pois é a posição do elemento "css", depois de algumas manipulações

let outroExemplo = ["Buscar", "a", "palavra"]; // outro exemplo para buscar uma palavra 

let buscar = outroExemplo.indexOf("a"); // encontra elemento "a"

outroExemplo.splice(buscar,1); // remove o elemento "a"

console.log(outroExemplo); // resultado


