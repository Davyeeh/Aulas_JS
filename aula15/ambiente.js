let num = [5, 2, 8, 9, 3]
num[5] = 6
num.push(1)
//num.length

num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)
if(pos == -1){
    console.log(`O valor não foi encontrado`)
}else{
console.log(`O valor esta na posição ${pos}`)
}