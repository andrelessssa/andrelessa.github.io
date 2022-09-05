function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} Horas`

if (hora >= 0 && hora < 12) {
    // BOM DIA
    img.src = 'img/manha.PNG'
    document.body.style.background = 'rgb(151, 144, 144'
    
}else if (hora >=12 && hora <= 18){
    // BOA TARDE
    img.src = 'img/tardee.PNG'
}else{
    img.src = 'img/noitee.PNG'
}

}

// -------------- Segunda Section----------//

function contar(){
    let ini = document.getElementById('txti') // estou pegando as inf dessa id
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    window.alert('[ERRO] Faltam Dados')

} else {
    window.alert('Tudo Ok')
}
}