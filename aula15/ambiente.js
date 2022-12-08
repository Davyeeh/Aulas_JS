
//VARIÁVEL COMPOSTA

let num = [5, 2, 8, 9, 3]
num[5] = 6 //add um número a varialvel composta e pode tbm subistituir um
num.push(1) //add um número a varialvel composta
//num.length

num.sort() //Coloca os numeros em ordem crescente
console.log(num) //Mostra os valores da variável
console.log(`O vetor tem ${num.length} posições`) //.length mostra o tamanho da variável
console.log(`O primeiro valor do vetor é ${num[0]}`) //mostra o valor de um vetor usando uma posição

let pos = num.indexOf(8) //busca uma chave de um valor
if(pos == -1){ //caso o valor n exista ele retorna -1
    console.log(`O valor não foi encontrado`) //mostra essa frase caso o valor não exista
}else{
console.log(`O valor esta na posição ${pos}`) //mostra essa caso o valor exista
}