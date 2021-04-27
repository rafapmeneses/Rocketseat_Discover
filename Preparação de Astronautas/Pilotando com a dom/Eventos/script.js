// eventos

const h1 = document.querySelector('h1');

h1.addEventListener('click', print);

h1.onclick = print;

const input = document.querySelector('input');

input.onkeydown = function(){
    console.log('rodei');
}

function print(){
    console.log('print');
}

h1.onclick = function() {
    console.log('outro print');
}


// argumento event


input.onkeypress = function() {
    console.log(event.currentTarget.value);
}