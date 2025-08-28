import leia = require('readline-sync') 
const lista: Set<number> = new Set<number> ()


for(let i = 1; i <= 10; i++){
    let numero : number = leia.questionInt('Escolhe 10 numeros: ')
    lista.add(numero)
}

console.log('Voce digitou esses numeros: ',lista)

