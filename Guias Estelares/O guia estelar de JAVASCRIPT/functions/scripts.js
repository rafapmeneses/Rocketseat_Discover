// declaração da função
function createPhrases(){

    console.log('Estudar é bom!');

};
// executar a função
createPhrases();

//variável sum recebe uma função anônima 
const sum = function(num1, num2){ // function recebe os argumentos nos parâmetros 

    return (num1+num2); // retorna o valor da soma das duas variáveis

};

let newNum1 = 1, newNum2 = 2, total = 0;  //definindo os valores para o somatório 

total = sum( newNum1, newNum2 ); // total recebe o retorno de sum e passa os argumentos

console.log(total); // chama sum e passa os argumentos


// Função hoisting

hoistingFunction();

function hoistingFunction() {
    console.log("Função hoisting");
};

// Usando função anônima nao vai funcionar

// sayMyName();

// var sayMyName = function(){

//     console.log("funcionou?");

// }


// Arrow Function -> funciona igual as outras funções

const arrowFunction = () => {
    console.log("Arrow Function");
};

arrowFunction();


// Callback Function

function callbackFunction(argumento){ // recebe os valores e retorna
    console.log(argumento)
};

callbackFunction('callback function');
callbackFunction(10 + 10);

function callbackFunction2(argumento){ // recebe uma função no momento que é chamada
    argumento(num1=2, num2=2); // a função recebida pode ser executada, ao mesmo tempo envia os argumentos para a função chamada
};

callbackFunction2( // no momento de chamar uma função callback2, pode-se enviar outra função por parâmetro 
    (nu1, nu2) => { // recebe por parâmetro os valores quando for executada
        console.log(nu1 + nu2);
    }
);


// Function Constructor -- exemplo -- porque geralmente a função construtora tem o nome da classe

function Person(variavel){ // criado a função construtora que recebe um parâmetro 
    
    this.atribuicaoVariavel = variavel; // this se refere ao objeto que foi instanciado e recebe a variável que foi recebida por parâmetro
    
    this.andar = function(){ // this se refere ao objeto que foi instanciado e recebe uma função anônima
        
        if(variavel == "Rafa"){ // se a variavel receber o valor retorna sabe andar
            
            return "Sabe andar";
        
        }
        else{ // se nao retorna se arrasta
            
            return " se arrasta";
        
        }
    
    };
};

// A mágica acontece aqui
const rafa = new Person("Rafa"); // variável é instanciada pela função construtora e envia o argumento
const dudu = new Person("Dudu"); // variável é instanciada pela função construtora e envia o argumento

console.log(rafa); // chama a variável que recebe o objeto da função construtora 
console.log(rafa.atribuicaoVariavel + rafa.andar()); // chama só a variável de dentro do objeto e o seu retorno se for uma função

console.log(dudu.atribuicaoVariavel + dudu.andar()); // chama só a variável de dentro do objeto e o seu retorno se for uma função


let date = new Date(); // variável é instanciada da função construtora Date do javascript

console.log(date); // retorna o dia
