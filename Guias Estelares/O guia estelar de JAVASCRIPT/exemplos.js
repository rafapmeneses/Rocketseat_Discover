var nome; //declarar variável

nome = "Fake"; //atribuir valor

console.log(typeof nome); // tipo de dado

let age = 22, isHuman = true; // agrupamento de declarações

console.log(nome, age, isHuman); // passar mais de uma argumento e printar 

console.log('O ' + nome + ' tem ' + age + ' anos'); // concatenar variáveis 

console.log(`O ${nome} tem ${age} anos`); // interpolando variáveis - template literals - com crase 

// Objeto

const person = {
    name: 'Fake',
    age: 30,
    weight: 88.6,
    isAdmin: true
};

console.log(person); // mostrar todo objeto

console.log(person.name); // mostrar só uma variável do objeto

console.log(`${person.name} tem ${person.age} anos`); // mostrar só uma variável do objeto

// Array

const animals = [
    'Lion', // posição 0
    'Monkey', // posição 1
    'Cat', // posição 2
    { // posição 3 - objeto
        name: 'Damke', 
        age: 3
    }
];

animals.push('Dudu'); // inserir outro valor

animals[1] = "Dudu"; // Sobrescrever outro valor na posição 1

console.log(animals); // mostrar todo objeto

console.log(animals[0]); // mostrar informação da posição 0 do array

console.log(animals[3]); // mostrar o objeto do array

console.log(animals[3].name); // mostrar o nome do objeto do array
