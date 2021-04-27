# Display: block vs display: inline

-como as caixas se comportam em relação às outras caixas
-comportamento externo das caixas

Block:
    -ocupa toda a linha, colocando o próximo elemento abaixo desse
    -width e height são respeitados
    -padding, margin, border irão funcionar normalmente.
Inline:
    -Elemento ao lado do outro
    -width e height não funcionam
    -Somente valores horizontais de margin, padding e border

Exemplos:
block: `<p><div><section>`, todos headings `<h1><h2>...`
inline: `<a><strong><span><em>`

// html
<p>
    um <div>texto</div> qualquer
</p>

<div>block</div>

<span>inline</span>


//html

//css
div{
    height: 100px;
    border: 1px solid red;
    width: 10px;
    display: inline;
    margin: 20px;
}
span{
    width: 10px;
    height: 100px;
    border: 1px solid green;
    display: block;
    margin: 100px;

}

//css