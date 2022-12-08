let valores = [8, 1, 7, 4, 2, 9] //variável composta

//console.log(valores)
/*
console.log(valores[0]) //*pior* maneira de mostrar o valor de uma posição
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5]) 
*/

/*
for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) //mostra o valor de cada posição
}*/
valores.sort()
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) //*melhor* maneira de informar o valor de cada posição
}