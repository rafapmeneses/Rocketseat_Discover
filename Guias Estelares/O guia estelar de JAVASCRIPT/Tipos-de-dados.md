//comentários em linha
/*
comentários
em
bloco
*/

# String

Usado com:

"" -> aspas duplas - console.log("teste");
'' -> aspas simples 
`` -> template literals - mais usado quando se precisa de expressões
console.log(`teste ${1+1}`);

# Number

3 -> inteiros - console.log(3);
3.3 -> float - console.log(3.3);
NaN -> not a number - console.log(3 / "string");
Infinity -> infinito - console.log(Infinity);

# Boolean

0 ou 1
True // 1 - console.log(3==3);
False // 0 - console.log(3==2);

# Undefined e NULL

undefined -> dado nao existe
NULL -> dado existe mas dentro dele não tem nada

# Object

Possui propriedades/atributos
tem funcionalidades/métodos 
{propriedade: "valor"}

console.log({
    name: "Fake",
    idade: 22,
    andar: function(){
        console.log("andar");
    }
});

# Array

Vetores
é uma lista onde agrupa dados
["Fake", 22]

console.log([
    "Fake",
    22
]);

# Dados primitivos:

*String
*Number
*Boolean
*undefined
*Symbol
*BigInt

# Dados Estruturais:

*Object
    *Array
    *Map
    *Set
    *Date
    *
*Function

# Dados Primitivo Estrutural

*null

# Variáveis

var clima = "quente"; -> atribuindo valor a variavel clima
let clima = "frio";
const variavel = "variavel"; -> variavel que nao pode ser mudada

-> Tipagem

var clima:String = "quente" -> forçando a variavel a ser uma string

console.log(typeof clima); -> mostrando o tipo da variavel

# Block Statment

{ // inicio do bloco

} // fim do bloco

# Var

console.log('> existe x antes do bloco?', x); // undefined

{

    var x = 0;

}

console.log('> existe x depois do bloco?', x); // valor de x é = 0

# Let

--> Exemplo 01: <--

console.log('> existe y antes do bloco?', y); // erro: y nao existe no escopo

{

    let y = 0;
    console.log('> existe y?', y); // valor de y é = 0

}

console.log('> existe y depois do bloco?', y); // erro: y nao existe no escopo

--> Exemplo 02: <--

let y = 1;

{

    y = 0;
    console.log('> existe y?', y); // valor de y é = 0

}

console.log('> existe y depois do bloco?', y); // valor de y é = 0

# Const

--> Exemplo 01: <--

const z = 1;

{

    z = 0;
    console.log('> existe z?', z); // Const nao pode ser alterado

}

console.log('> existe z depois do bloco?', z); // Const nao pode ser alterado

--> Exemplo 02: <--

const z = 1;

{

    const z = 0;
    console.log('> existe z?', z); // valor de z é = 0

}

console.log('> existe z depois do bloco?', z); // valor de z é = 1

# Criação de variáveis

Pode
-Aceita criar variável com acento
-Iniciando com $ ou _
-Letra maiúscula e minúscula fazem diferença

Não pode
-Iniciar com números
-Deixar espaços