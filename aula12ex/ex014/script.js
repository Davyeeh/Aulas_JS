function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 9
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'manha.svg'
        document.body.style.background = '#FFE356'
    }else if (hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = 'tarde.svg'
        document.body.style.background = '#FE7E02'
    }else{
        //boa noite
        img.src = 'noite.svg'
        document.body.style.background = '#537F98'
    }
}

