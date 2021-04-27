// textContent

const element = document.querySelector('h1');

// element.textContent = "Olá devs!";
element.textContent += " Olá devs!";

// innerText

const element = document.querySelector('h1');

element.innerText = " Olá devs!";

// innerHTML

const element = document.querySelector('h1');

element.innerHTML = " Olá devs! <small>!!!</small>";

// value

const element = document.querySelector('input');

element.value = " Olá devs!";
console.log(element.value);

// atributos

const header = document.querySelector('header');

header.setAttribute('id', 'header');

const headerID = document.querySelector('#header');

console.log(headerID.getAttribute('id'));

header.removeAttribute('id');

console.log(headerID);