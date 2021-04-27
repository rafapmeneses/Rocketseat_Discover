# -> Seletores <-

Conecta um elemento HTML com o CSS a fim de alterar o elemento.

# Tipos

* Element selector
    -Todos os elementos HTML
* ID Selector
    - Um elemento que tenha um atributo `id`.
    - Cada id deverá ser único.
* Class Selector
    - Os elementos que contenha um atributo `class`.
    - Podemos ter uma ou mais classes.
* Attribute selector
    - Um elemento que tenha um atributo específico.
* Pseudo-class selector
    * elementos em um estado específico.

# Múltiplos
    Você poderá selecionar múltiplos elementos e aplicar alguma regra css para todos eles.
    Usamos uma separação por vírgula para isso.
    Exemplo:
    ```css
    h1, p, a{
        color:red;
    }
    ```

// html
<h1 id="tittle" class="red big" title="Algum titulo">Título da página</h1>
<p title="conteudo" id="content" class="red big">Conteúdo da página</p>
//html

//css
h1{
    color:blue;
    font-size:60px;
}
p{
    color:green;
}
#content{
    color: organge;
}
#title{
    color: yellow;
}
.red{
    color:red;
}
.big{
    font-size: 3em;
}
[title]{
    color:orange;
}

p:hover{
    color:red;
}
h1:hover{
    color:red;
}

# -> Combinators <-

Combinadores, pois eles trabalham para buscar e combinar seletores a fim de aplicar uma estilização

# Descendant combinator

* Identificado por um espaço entre os seletores.
* Busca um elemento dentro de outro

```css
body article h2
```

//html
<body>
    <article>  
        <h2>Um titulo</h2>
    </article>

    <article>  
        <h2>Outro título</h2>
    </article>

    <div>
        <h2>Teste</h2>
    </div>
</body>
//html

//css
body article h2{
    color: red;
}
//css

# Child combinator

* Identificado pelo sinal ` > ` entre dois seletores
* Seleciona somente o elemento que é filho direto do pai
* Elementos depois do filho direto serão desconsiderados

```css
body > ul > li
```
//html
<body>
    <ul>
        <li>item 1</li>
        <ul>
            <li>item 2</li>
        </ul>
    </ul>
</body>
//html

//css
body > ul > li{
    color: blue;
}
//css

# Adjacent sibling combinator

* Identificado pelo sinal ` + ` entre dois seletores
* Seleciona somente o elemento do lado direto que é irmão direto na hierarquia

```css
h1 + p
```

//html
<h1>
Titulo
</h1>

<p>
Paragrafo
</p>

<p>
Paragrafo 2
</p>
//html

//css
h1 + p{
    color: red;
}
//css

#General sibling combinator

* Identificado pelo sinal ` ~ `  entre dois seletores
* Seleciona todos os elementos irmãos

```css
h1 ~ p
```
//html
<h1>
Titulo
</h1>

<p>
Paragrafo
</p>

<p>
Paragrafo 2
</p>
//html

//css
h1 ~ p{
    color: red;
}
//css


#Utilizando combinadores

```css
ul > li[class="red"]
```

//html
<ul>
    <li> Aloo </li>
    <li class="red"> Aloo </li>

</ul>
//html

//css
ul > li[class="red"]{
    color: red;
}
//css


# Dica
* Seletores muito específicos tendem a causar dificuldades no reuso das regras de estilização dos elementos
* Muitas vezes, um simples uso de classes, torna o trabalho muito mais eficiente.

-> CSS do ultimo exemplo: 
//css
ul > li[class="red"]{
    color: red;
}
//css

Maneira mais eficiente

//css
.red{
    color: red;
}
//css



