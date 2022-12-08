// RECURSIVIDADE 

function fatorial(n){ //CRIA UMA FUNÇÃO DE UM N NÚMERO PARA SABER SEU VALOR FATORIAL
    if(n == 1){ //SE O N FOR IGUAL À 1
        return 1 //RETORNE 1
    }else{ //SE NÃO
        return n * fatorial(n-1) //RETORNE O FALOR DE N VEZES O SEU VALOR - 1
    }
}

console.log(fatorial(5)) //MOSTRE O VALOR DA FATORAÇÃO DO NÚMERO

/*

5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

n! = n x (n-1)!
1! = 1

*/