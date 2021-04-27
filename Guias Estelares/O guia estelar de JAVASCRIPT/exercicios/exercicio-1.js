/*Transformar sistema de notas numérica para sistema com caracteres*/ 

/* 
    exemplo:
- de 90 para cima -> A
- entre 80 - 89   -> B 
- entre 70 - 79   -> C
- entre 60 - 69   -> D
- menor que  60   -> F 
*/

//minha resolução:

let nota = 60;
let nome = 'Rafa';

if(nota >= 90){
    console.log("Aluno: " + nome );
    nota = 'A';
    console.log("Nota: " + nota);
}
else if(nota >= 80 && nota <=89 ){
    console.log("Aluno: " + nome );
    nota = 'B';
    console.log("Nota: " + nota);
}
else if(nota >= 70 && nota <=79){
    console.log("Aluno: " + nome );
    nota = 'C';
    console.log("Nota: " + nota);
}
else if(nota >= 60 && nota <=69){
    console.log("Aluno: " + nome );
    nota = 'D';
    console.log("Nota: " + nota);
}
else{
    console.log("Aluno: " + nome );
    nota = 'F';
    console.log("Nota: " + nota);
}

// resolução Maik


function getScore(score){

    let scoreA = score >= 90 && score <= 100;
    let scoreB = score >= 80 && score <= 89;
    let scoreC = score >= 70 && score <= 79;
    let scoreD = score >= 60 && score <= 69;
    let scoreF = score < 60 && score >= 0;

    if(scoreA){
        score = "A";
    }
    else if(scoreB){
        score = "B";
    }
    else if(scoreC){
        score = "C";
    }
    else if(scoreD){
        score = "D";
    }
    else if(scoreF){
        score = "F";
    }
    else{
        score = "Nota Inválida";
    }

    return score;

}

console.log(getScore(0));
console.log(getScore(70));
console.log(getScore(60));
console.log(getScore(89));