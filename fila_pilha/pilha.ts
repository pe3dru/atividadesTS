import { Stack } from '../../Stack'

import leia = require('readline-sync')

const pilha = new Stack<String>()
let continuar: boolean = true
let opcao : number = 0

do{
console.log("      1 - Adicionar um livro na pilha");
console.log("      2 - Listar todos os livros");
console.log("      3 - Tirar o próximo livro da pilha");
console.log("      0 - Sair");
console.log("Digite a opção desejada: ");

opcao = leia.questionInt()
switch(opcao){ 
    case 1:
        let livro : string = leia.question('Adicione um livro na pilha: ')
        pilha.push(livro)       
        break
    case 2:
        console.log(pilha.printStack())    
        break
    case 3:
        console.log(pilha.pop(), 'Tire o próximo livro.')
        break
    case 0:
        console.log('Saindo da fila')
        continuar = false
        break;
    default:
        console.log('Opcao invalida, tente novamente')    
        break        
}
}while(continuar)