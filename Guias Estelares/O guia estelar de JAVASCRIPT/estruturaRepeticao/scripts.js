// Estrutura de repetição

//For

for (let i = 0; i < 5; i++) { // condição de inicio, de parada e incremento
    console.log(i + 'for');
}

for (let i = 0; i < 10; i++) {
    if(i===7){ 
        break; // termina o laço
    }
    console.log(i + 'for');
}

for (let i = 0; i < 10; i++) {
    if(i===6){ 
        continue; // pula a repetição e continua
    }
    console.log(i + 'for');
}

//While

let i = 0; //condição de inicio

while (i < 10) {
    console.log(i + 'while'); //

    i++; //
}

//For...of

let nome = 'Rafa';
let nomes = ['Rafa','Damke','Lipe'];

for (let char of nome) {
    console.log(char);
}

for (let palavra of nomes) {
    console.log(palavra);
}

//For...in

let person = {
    nome:'Mau',
    age: 30,
    weight: 88.6
}

for (let property in person) {
    // console.log(person);
    console.log(person[property]);
}