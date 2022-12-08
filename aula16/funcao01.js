// FUNÇÃO PARA SABER SE UM NÚMERO É ÍMPAR OU PAR

function parimpar(n) { //NOME DA FUNÇÃO
    if (n%2 == 0) { //CONDIÇÃO DE SE O NÚMERO FOR DIVISIVEL POR 2 E O RESTO FOR 0
        return 'par' //REORNA PAR
    }else{ //SE NÃO
        return 'ímpar' //RETORNA ÍMPAR
    }
}

console.log(parimpar(4)) //MOSTRE O RESULTADO DA FUNÇÃO USANDO O NÚMERO 4