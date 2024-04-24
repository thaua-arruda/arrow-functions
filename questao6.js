/*
Questão 06: Escreva uma arrow function chamada ehPrimo que recebe um número 
como parâmetro e retorna true se o número for primo e false se não for
*/

const ehPrimo = (x) => {
    return (x % 2 != 0) && (x % 3 != 0)
    
}
console.log(ehPrimo(45))