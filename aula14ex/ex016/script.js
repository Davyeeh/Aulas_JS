function contar(){
    let ini = document.getElementById('txti') //VAI PEGAR O ID DE INÍCIO
    let fim = document.getElementById('txtf') // VAI PEGAR O ID DE FIM
    let passo = document.getElementById('txtp') // VAI PEGAR O ID DOS PASSOS
    let res = document.getElementById('res') //VAI PEGAR O ID DE RESULTADO

    
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){ //SE ALGUM DOS VALORES FOREM INEXISTENTES 
        res.innerHTML = 'Impossível contar!' //SERÁ IMPOSSÍVEL CONTAR
        //window.alert('[ERRO] Faltam dados!')
    }else{
        res.innerHTML = 'Contando: <br>' //CASO NÃO HAJA ESSE PROBLEMA ELE IRÁ CONTAR
        //CONVERTENDO OS VALORES PARA NÚMEROS
        let i = Number(ini.value) 
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){ //SE A QUANTIDADE DE PASSOS FOR 0
            window.alert('Passo inválido! Considerando PASSO 1') //IRÁ APRESENTAR UM ALERT
            p = 1 //E CONSIDERARÁ O PASSO COMO 1
        }

        if(i < f){ //SE O INÍCIO FOR MENOR QUE O FIM A CONTAGEM SERÁ CRESCENTE
            for(let c = i; c <= f; c += p){
            res.innerHTML += ` ${c} \u{1F449} `
        }
            res.innerHTML += `\u{1F3C1}`
        }else{ //CASO O FIM SEJA MENOR QUE O INÍCIO A CONTAGEM SERÁ DECRESCENTE
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
            
        }
        res.innetHTML += `\u{1F3C1}`
    }
}