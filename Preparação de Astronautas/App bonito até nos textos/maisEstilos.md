# Atribuindo mais estilos às fontes

https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals


# Font-variant

* variações na apresentação fonte

```css
p{
    font-variant: small-caps;
}
```

https://developer.mozilla.org/en-US/docs/Learn/CSS/font-variant

# Font-stretch

* alargamento ou encolhimento da fonte
* aceita palavra-chaves como: expanded, condensed, normal
* aceita porcentagens de 50% a 200%

```css
p{
    font-stretch: expanded;
}
```

https://developer.mozilla.org/en-US/docs/Learn/CSS/font-stretch

# Letter-spacing

* espaços entre caracteres

```css
p{
    letter-spacing: 4px;
}
```

https://developer.mozilla.org/en-US/docs/Learn/CSS/letter-spacing

# Word-spacing

* Espaços entre caracteres

```css
p{
    word-spacing: 4px;
}
```

https://developer.mozilla.org/en-US/docs/Learn/CSS/word-spacing


# Line-height

* Espaços entre linhas
* Pode ser unidades ou sem unidades de medida
* Comuns: 1.5 ou 2

```css
p{
    line-height: 1.6;
}
```

https://developer.mozilla.org/en-US/docs/Learn/CSS/line-height

# Text-transform

* transformação do texto

```css
p{
    text-transform: uppercase; /* capitalize | lowercase | none */
}
```

https://developer.mozilla.org/en-US/docs/Learn/CSS/text-transform

# Text-decoration

* Aparência decorativa de um texto
* line: underline | overline | line-through
    * podemos aplicar mais de 1 valor
* style: wavy | dotted | double | dashed | solid
* color: `<color>` values

```css
p{
    text-decoration: underline wavy; /*shorthand*/
}
```

https://developer.mozilla.org/en-US/docs/Learn/CSS/text-decoration


# Text-align

* Alinhamento de um texto


```css
p{
    text-align: center; /*left | right | center | justify */
}
```

https://developer.mozilla.org/en-US/docs/Learn/CSS/text-align


# Text-shadow

* sombra aplicada a um texto
* permite múltiplos valores

```css
p{
    text-shadow: 1px 1px 1px red,
                2px 2px 1px green; /* offset-x | offset-y | blur-radius | color */
}
```

https://developer.mozilla.org/en-US/docs/Learn/CSS/text-shadow


# Shorthand

* font-style, font-variant, font-weight, font-stretch, font-size, line-height e font-family.

```css
p{
    /* style, -variant, -weight, -stretch, -size, line-height e -family. */
    font: italic normal bold normal 3em/1.5 Helvetica, Arial, sans-serif;
}
```