import leia = require('readline-sync') 
const cores: Array<string> = new Array<string> () 


for(let i = 1; i <= 5; i++){
    let cor : string = leia.question('Escolha 5 cores: ')
    cores.push(cor)
}

console.log('Voce digitou essas cores: ',cores)

console.log('Em ordem alfabetica: ',cores.sort())