# Basic font properties

* font-family
* font-weight
* font-style
* font-size

# Font Family

* tipo de fonte de um elemento
* lista de fontes e ordem de prioridade
* inclui *fallback* font

```css
p{
    font-family: "Times New Roman", Times, serif;
}
```
    - serif
    - sans

//html
<p>Teste</p>
//html

//css
p{
    font-family: "Times New Roman", Times, serif;
}
//css


# Font weight

* Peso da fonte

```css
p{
    font-weight: bold;
}
```

//html
<p>Teste</p>
//html

//css
p{
    font-weight: bold;
}
//css


# Font Style

* O estilo da fonte

```css
span {
    font-style: italic;
}
```

//html
<p>Teste</p>
//html

//css
p{
    font-style: italic;
}
//css


# Font Size

* O tamanho da fonte

```css
p{
    font-size: 18px;
}
```
//html
<p>Teste</p>
//html

//css
p{
    font-size: 18px;
}
//css

# Web Fonts

- Fontes do sistema x fontes da web
- como usar fontes para web?

* @font-face
* @import
* link

<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap" rel="stylesheet">

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap');
</style>

font-family: 'Roboto', sans-serif;

# Referências

https://www.w3.org/TR/css-fonts-3/
https://css-tricks.com/snippets/css/using-font-face/