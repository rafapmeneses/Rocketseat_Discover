// Expressões 

let number = 1;

// Operators:
// Binary
console.log(++number); // operador de incremento (+1) tem diferença em usar o sinal antes ou depois (number++) no caso do exemplo, está incrementando antes de printar
console.log(number--); // operador de decremento (-1) tem diferença em usar o sinal antes ou depois (number--) no caso do exemplo, está decrementando depois de printar
console.log(number);
console.log(3.3 * 5.5); // multiplicação
console.log(5 + 5); // soma
console.log(16 / 4 ); // divisão
console.log(5 - 5); // subtração
console.log(11 % 3); // resto da divisão
console.log(3 ** 3); // exponencial

//Grouping operator ()

let total = (2 + 3) * 5;
console.log(total);

// Operadores de comparação - O retorno é boolean

let one = 1;
let two = 2;

console.log(one == one); // igual -> one == "1" --> funcionaria, pois o js faz uma conversão
console.log(one != two); // diferente
console.log(one === "1"); // estritamente igual -> compara o tipo da variável também
console.log(one !== two); // estritamente diferente
console.log(two > one); // maior
console.log(two >= one); // maior igual
console.log(two < one); // menor
console.log(two <= one); // menor igual

// Operadores de atribuição

let x;

console.log(x = 1); // x recebe 1;
console.log(x += 1); // x recebe ele mesmo mais 1 (x = x + 1)
console.log(x -= 1); // x recebe ele mesmo menos 1
console.log(x *= 2); // x recebe ele mesmo vezes 2
console.log(x /= 2); // x recebe ele mesmo dividido por 2
console.log(x %= 2); // x recebe ele mesmo do resto da divisão por 2
console.log(x **= 2); // x recebe ele mesmo do exponencial por 2

// Operadores Lógicos

let pao = true;
let queijo = false;

console.log(pao && queijo); // pão e queijo
console.log(pao || queijo); // pao ou queijo
console.log(!pao); // negação
console.log(!queijo); // negação


// Unary
console.log(typeof number);

const person = {
    nome: 'Fake',
    age: 22,
};

delete person.age;
console.log(person);

// Ternary
console.log(number==1 ? 'alo' : 'nada'); // se number for igual a 1 entra em 'alo', se não for entra em 'nada'

let idade = 18;

const canDrive = idade >= 18 ? "pode dirigir" : "não pode dirigir"; // se idade é maior ou igual a 18 pode dirigir, se não, não pode

console.log(canDrive);

// Operadores de String

console.log("a" == "a"); // comparação
console.log("a" + "a"); // concatenação
console.log("a" + 321); // concatenação

// Condições onde o contexto é falso ou true --> type coersion 
// false: false, 0, -0, "", null, undefined, NaN

console.log(0 ? 'é verdadeiro' : 'é falso'); // 0 é considerado como falso
console.log(-0 ? 'é verdadeiro' : 'é falso'); // -0 é considerado como falso 
console.log("" ? 'é verdadeiro' : 'é falso'); // "" é considerado como falso 
console.log(null ? 'é verdadeiro' : 'é falso'); // null é considerado como falso 
console.log(undefined ? 'é verdadeiro' : 'é falso'); // undefined é considerado como falso 
console.log(NaN ? 'é verdadeiro' : 'é falso'); // NaN é considerado como falso 

// true: true, [], {}, 1, 3.23, "0", "false", -1, Infinity, -Infinity
console.log(1 ? 'é verdadeiro' : 'é falso'); // 1 é considerado como verdadeiro
console.log([] ? 'é verdadeiro' : 'é falso'); // [] é considerado como verdadeiro
console.log({} ? 'é verdadeiro' : 'é falso'); // {} é considerado como verdadeiro
console.log(3.23 ? 'é verdadeiro' : 'é falso'); // 3.23 é considerado como verdadeiro
console.log("0" ? 'é verdadeiro' : 'é falso'); // "0" é considerado como verdadeiro
console.log("false" ? 'é verdadeiro' : 'é falso'); // "false" é considerado como verdadeiro
console.log(-1 ? 'é verdadeiro' : 'é falso'); // -1 é considerado como verdadeiro
console.log(Infinity ? 'é verdadeiro' : 'é falso'); // Infinity é considerado como verdadeiro
console.log(-Infinity ? 'é verdadeiro' : 'é falso'); // -Infinity é considerado como verdadeiro

//Operator precedence - Precedência de operadores
// grouping ()
// negação !
// multiplicação e divisão * /
// adição e subtração + -
// incremento e decremento ++ -- 
// relacional < <= > >= >=
// igualdade == != === !==
// AND &&
// OR ||
// condicional ?:
// atribuição = += -= *= /= %= **=

console.log(3 > 2 > 1); // 3 > 2 = true , true > 1 ? não --> (3 > 2) -> true -> true > 1? -> false
console.log(3 > 2 && 2 > 1); // true

// New - left-hand-side expression - usado para criar um novo objeto

let nome = new String('Fake');
nome.surName = 'b';
let age = new Number(23);
console.log(nome.surName);
let data = new Date('2021-01-23');
console.log(data);
