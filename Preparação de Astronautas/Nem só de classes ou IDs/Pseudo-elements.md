# Pseudo-elements

com pseudo-elements nós podemos adicionar elementos html pelo próprio CSS

`::pseudo-element-name`

# Exemplos

* ::before
* ::after
* ::first-line

->> exemplo 01

//html
<li>teste1</li>
<li>teste2</li>
<li>teste3</li>
<li>teste4</li>
//html

//css
li{
    position: relative;
}

li::before{
    content: ">";
}
li::after{
    content: ";";
    width: 10px;
    height: 1px;
    background-color: blue;
    position: absolute;
    bottom: 0px;
}   

//css

->> exemplo 02

//html

<p>testo enorme aqui ......aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaa
</p>


//html

//css
p::first-line{
    font-weight: bold;
}

//css


# Referência

https://developer.mozilla.org;en-US/docs/Web/CSS/Pseudo-elements