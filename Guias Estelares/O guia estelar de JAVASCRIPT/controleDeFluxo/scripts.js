// Control flow

//if else
let temperatura = 36.9;
let tempAlta = temperatura >= 37.5;
let tempBaixa = temperatura < 37.5 && temperatura >= 37;


if(tempAlta){
    console.log("Febre alta");
}
else if(tempBaixa){
    console.log("Febre moderada");
}
else {
    console.log("Saudável");
}

// switch

let expressao = '1';

switch (expressao) {

    case 'a':
        console.log('a');
        break;
    case 'b':
        console.log('b');
        break;
    case '1':
        console.log('1');    
        //sem break ele passa para as outras
    case '2':
        console.log('2');
        //break;

    default:
        console.log('default');
        break;
}

function calculadora(num1, operacao, num2) {
    let resultado = 0;

    switch (operacao) {

        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;
        default:
            console.log('Input incorreto');
            break;
    }

    return resultado;
    
}

console.log(calculadora(2, '+', 2));

// throw e try...catch

function sayMyName(nome = ''){
    if(nome === ''){

        throw 'Nome é obrigatório'; // retorna o erro pro catch

    }

    console.log(nome);

}

try{ // tenta chamar a funçao sem mandar nada
    sayMyName();
}catch(e){
    console.log(e)
}

console.log("continuação da aplicação");
