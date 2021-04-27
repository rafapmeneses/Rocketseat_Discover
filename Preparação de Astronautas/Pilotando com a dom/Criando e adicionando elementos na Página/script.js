// parentNode parentElement

const body = document.querySelector('body');

console.log(body.parentElement);

// childNodes children

const el = document.querySelector('body');
const el2 = document.querySelector('header');


console.log(el.childNodes)
console.log(el.children)

// firstChild firstElementChild

console.log(el.firstChild)
console.log(el.firstElementChild)

// lastChild lastElementChild

console.log(el.lastChild)
console.log(el.lastElementChild)

// nextSibling nextElementSibling

console.log(el2.nextSibling)
console.log(el2.nextElementSibling)


// previusSibling previusElementSibling

console.log(el2.previousSibling)
console.log(el2.previousElementSibling)
