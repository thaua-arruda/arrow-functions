/*
Questão 03: Escreva uma arrow function chamada somaArray que recebe um array 
de números como parâmetro e retorna a soma de todos os elementos desse array. 
*/

let array = [1, 2, 3, 4, 5]
let soma = 0
const somaArray = (x) => {
    x.forEach(function(num) {
        soma += num
    });
    return soma
}
console.log(somaArray(array));
