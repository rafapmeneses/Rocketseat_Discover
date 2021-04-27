// getElementById() retorno = (element)

console.log(document.getElementById('blog-title'));

// getElementsByClassName() retorno = (HTMLCollection)

console.log(document.getElementsByClassName('one'));

// getElementsByTagName() retorno = (HTMLCollection)

console.log(document.getElementsByTagName('h1'));

// querySelector() retorno = (element)

console.log(document.querySelector('.one')) // busca tag css

// querySelectorAll() retorno = (Nodelist)

console.log(document.querySelectorAll('meta'));

console.log(document.querySelectorAll('#blog-title'));

const elements = document.querySelectorAll('.one');

elements.forEach(el => console.log(el));