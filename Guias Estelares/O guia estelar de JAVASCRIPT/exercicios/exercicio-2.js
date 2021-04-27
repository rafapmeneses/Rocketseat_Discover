/* 
receitas e despesas
calcular o saldo se esta positivo ou negativo
*/

let familia = {
    entrada: [1000, 50.30],
    saida: [200,100,200,403]
};

function calcular(array){
    let total = 0;
    for (let valor of array) {
        total+= valor;
    }
    return total;
}

function saldo(){
    const entrada = calcular(familia.entrada);
    const saida = calcular(familia.saida);

    const resto = entrada - saida; 
    let posOrNeg = 'negativo';

    if(resto >= 0){
        posOrNeg = 'positivo'
    }

    console.log(`Saldo ${posOrNeg} de: ` + resto.toFixed(2));

}

saldo();