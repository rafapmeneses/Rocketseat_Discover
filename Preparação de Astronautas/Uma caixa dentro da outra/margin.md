# Margin

espaços entre os elementos

- margin-top | margin-right | margin-bottom | margin-left
- values: `<length>` | `<percentage>` | auto

```css
div{
    /* shorthand */
    margin: 12px 16px 10px 4px;
    margin: 12px 16px 0;
    margin: 8px 16px;
    margin: 8px;
}
```

* Cuidado com margin collapsing (top se ajunta ao bottom)

//html
<div>Margin</div>

<section> Elemento abaixo</section>

//html
//css

* {
    margin: 0;
}

div, section{
    border: 1px solid red;
    width: 100px;
    height: 100px;
}

//margin collapsing
div{
    margin-bottom: 8px;
}
section{
    margin-top: 8px;
}

//css


https://developer.mozilla.org/en-US/docs/Web/CSS/margin