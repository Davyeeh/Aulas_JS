function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERROR] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','homem-crianca.svg')
            }else if(idade >= 10 && idade < 21){
                //Jovem
                img.setAttribute('src', 'homem-jovem.svg')
            }else if (idade >= 21 && idade < 51) {
                //Adulto
                img.setAttribute('src', 'homem-adulto.svg')
            }else {
                //Idoso
                img.setAttribute('src', 'homem-idoso.svg')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'mulher-crianca.svg')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'mulher-jovem.svg')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulher-adulta.svg')
            }else {
                //Idoso
                img.setAttribute('src', 'mulher-idosa.svg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}