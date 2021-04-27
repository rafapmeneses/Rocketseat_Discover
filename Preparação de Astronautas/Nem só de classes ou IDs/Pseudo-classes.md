# Pseudo-classes

é um tipo de seletor que irá selecionar um elemento que estiver em um estado específico.

exemplo: é o primeiro elemento dentro de uma caixa, ou, o elemento está com o ponteiro do mouse em cima dele.

Pseudo-classes começam com 2 pontos seguido do nome da pseudo class

`:pseudo-class-name`

# Selecionando elementos com pseudo-classes

* :first-child
* :nth-of-type()
* :nth-child()

---> Exemplo 01 <---

//html
<ul>
    <h3>Test</h3>
    <li>Teste1</li>
    <li>teste2</li>
    <li>test3</li>
</ul>
//html

//css
ul li:first-child {
    font-weight: bold;
    color: red;
}
//css

---> Exemplo 02 <---

//html
<article>
    <h3>Testando</h3>
    <p>Texto aleatorioo</p>
    <p>Texto aleatorioo</p>
    <p>Texto aleatorioo</p>
<article>
//html

//css
article p:nth-of-type(1) {
    font-weight: bold;
    font-size: 18px;
}
//css

---> Exemplo 03 <---

//html
<article>
    <h3>Testando</h3>
    <p>Texto aleatorioo</p>
    <p>Texto aleatorioo</p>
    <p>Texto aleatorioo</p>
<article>
//html

//css
article p:nth-child(2) {
    font-weight: bold;
    font-size: 18px;
}
//css

---> Exemplo 04 <---

//html
<ul>
    <h3>Test</h3>
    <li>Teste1</li>
    <li>teste2</li>
    <li>test3</li>
</ul>
//html

//css
ul li:nth-child(odd) { // ou odd
    color: black;
    background; #eee;
}

ul li:nth-child(even) { // ou odd
    color: gray;
}
//css

# -> Ações do usuário <-

* :hover
* :focus

# Atributos

* :disabled
* :required

//html
<a href="#">Clique aqui</a>
<input type="text" disabled required>

//html

//CSS

a:hover{
    color: red;
}
input:focus{
    border-color: red;
}
input:disabled{
    background-color: green;
}
input:required{
    background-color: red;
}
// CSS

# Referência

https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes