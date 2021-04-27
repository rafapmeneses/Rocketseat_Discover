# Box-sizing

Como será calculado o tamanho total da caixa?

- content-box|border-box

```css
div{
    box-sizing: border-box;
}
```

//html

<div> CSS é incrivel! </div>

//html
//css

* {
    box-sizing: border-box;
    
}


div{
    width: 100px;
    height: 100px;
    border: 1px solid red;
    margin: 10%;
    padding: 0 20px;

    box-sizing: border-box;
}

//css