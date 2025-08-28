import { Queue } from '../../Queue';
import leia = require('readline-sync')

const fila = new Queue<String>()
let continuar: boolean = true
let opcao : number = 0

do{
console.log("      1 - Adicione um cliente na fila: ");
console.log("      2 - Listar todos os clientes: ");
console.log("      3 - Retirar cliente da fila: ");
console.log("      0 - Sair");
console.log("Digite a opção desejada: ");

opcao = leia.questionInt()

switch(opcao){ 
    case 1:
        let nome : string = leia.question('Adicione alguem na fila: ')
        fila.enqueue(nome)
        console.log('Pessoa atualmente na fila')
        fila.printQueue()
        break
    case 2:
        console.log(fila.printQueue())    
        break
    case 3:
        console.log(fila.dequeue(), 'Chamar o proximo');break
    case 0:
        console.log('Tes')
        continuar = false
        break;
    default:
        console.log('Opcao invalida.')
        break        
}
}while(continuar)