//Desafio de projeto, curso Lógica de Programação.
//Calculadora de partidas Ranqueadas.

/*Neste deafio irei criar uma função que recebe como parâmetro a quantidade de vitórias 
e derrotas de um jogador, depois disso retorna o resultado para uma variável, 
com o saldo de Rankeadas sendo feito através do calculo (vitórias - derrotas).
O Ranking será exibido conforme lista abaixo:

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/

//Iniciando código declarando variáveis
let nivel = ""  //Variável do tipo String, iniciando com "vazio"
let numVitorias = 90  //Variável do tipo Number com o número de vitórias do herói
let numDerrotas = 10  //Variável do tipo Number com o número de derrotas do herói
let saldoVitorias = calculandoSaldo(numVitorias , numDerrotas)  /*Variável do tipo Number, recebendo o 
return da função "calculandoSaldo"*/

//Início da condição para verificação do nível do herói
if(saldoVitorias <= 10){      //Se vitórias for menor do que 10 = Ferro
    nivel = "Ferro"
}else if(saldoVitorias <= 20){  //Se vitórias for entre 11 e 20 = Bronze
    nivel = "Bronze"
}else if(saldoVitorias <= 50){  //Se vitórias for entre 21 e 50 = Prata
    nivel = "Prata"
}else if(saldoVitorias <= 80){  //Se vitórias for entre 51 e 80 = Ouro
    nivel = "Ouro"
}else if(saldoVitorias <= 90){  //Se vitórias for entre 81 e 90 = Diamante
    nivel = "Diamante"
}else if(saldoVitorias <= 100){  //Se vitórias for entre 91 e 100= Lendário
    nivel = "Lendário"
}else{
    nivel = "Imortal"  //Se vitórias for maior ou igual a 101 = Imortal
}

//Escreve no console o saldo de vitórias e o nível do herói
console.log("O Herói tem um saldo de " + saldoVitorias + " vitórias e está no nível de " + nivel + ".")

function calculandoSaldo (qtdVitorias , qtdDerrotas){ //Função para cálculo de saldo entre vitórias - derrotas
    let saldo = qtdVitorias - qtdDerrotas  //Variável dentro da função para calcular o saldo

    return saldo  //Retorno da função após cálculo realizado
}