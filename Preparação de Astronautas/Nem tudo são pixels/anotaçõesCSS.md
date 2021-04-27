# -> Números <-
# Tipos numéricos

* <integer> número inteiro como -10 ou 223
* <number> número decimal como -2.4, 64 ou 0.234
* <dimension> é um <number> com uma unidade junto: 90deg, 2s, 8px
* <percentagem> representa a fração de outro número: 50%

# Unidades Comuns

* <length> Representa um valor de distância: px, em, vw
* <angle> Representa um ângulo: deg, rad, turn
* <time> Representa um tempo: s, ms
* <resolution> Representa resoluções para dispositivos: dpi

# -> Distâncias absolutas <length> <-

São fixas e não alteram seu valor.

Unidade     Nome                Equivalência
cm          Centímetros         1cm = 96px/2.54
in          Inches(polegadas)   1in = 2.54cm = 96px
px          Pixels              1px = 1/96th of 1in

* o mais comum e mais utilizado é o **px**
* não recomendado usar cm

# Distâncias relativas

São relativas a algum outro valor, pode ser o elemento pai, ou root, ou o tamanha da tela.

* Benefício: Maior adaptação aos diferentes tipos de tela

Unidade         Relativo a
em              Tamanho da font do pai.
rem             Tamanho da font do elemento raiz (root/html)
vw              1% da viewport width.
vh              1% da viewport height.

// html
<div>
    <p>Parágrafo<p>
</div>
// html
// css
div {
    font-size: 16px;
}
p {
    font-size: 1.6em;
}
// css

# -> Porcentagens <-

* Em muitos casos é tratado da mesma maneira que as distancias <length>
* Sempre será relativo a algum valor

// html
<p>Parágrafo<p>
// html
// css
html{
    font-size: 50%;
}
// css

# -> Posições <-

<position>

Representa um conjunto de coordenadas 2D:
-top, right, bottom, left e center

*Usado para alguns tipos de propriedades
* Não confundir com a propriedade `position`

// html
<div class="box"> </div>
// html
// css
.box{
    height: 300px;
    width: 400px;
    background-image: url(http://source.unsplash.com/random);
    background-repeat: no-repeat;
    background-position: right 50px;
}
// css

# -> Funções <-

Em programação, funções sao reconhecidas por causar um reaproveitamento de código.

* rgb()
* hsl()
* url()
* calc()

// html
<div class="box"> </div>
// html
// css
body {
    height: 100vh;
}
.box{
    height: calc(50% + 20px);
    width: 400px;
    background-image: url(http://source.unsplash.com/random);
    background-repeat: no-repeat;
    background-position: right 50px;
}
// css

# -> Strings e identificadores <-

* Strings: Texto envolto em aspas
* Identificadores: red, black, gold;

// html
<div class="box"> </div>
// html
// css
body {
    height: 100vh;
}
.box{
    height: calc(50% + 20px);
    width: 400px;
    background-image: url(http://source.unsplash.com/random);
    background-repeat: no-repeat;
    background-position: right 50px;
}
.box::after{
    content: "aqui vem alguma mensagem";
    color: white;
}
// css