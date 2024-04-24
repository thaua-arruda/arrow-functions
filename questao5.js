/*
Questão 05: Escreva uma arrow function chamada maiorNumero que recebe dois 
números como parâmetros e retorna o maior deles.
*/

const maiorNumero = (x, y) => {
    if (x > y){
        return x
    } else {
        return y
    }
}
console.log(maiorNumero(30, 60))