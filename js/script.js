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
    res.innerHTML = `CONTANDO..`
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (p <= 0){
        window.alert('Passo Inválido')
        p=1
    }
    if(i < f){
        // contagem crescente
        for(let c = i;c<=f;c+=p){
            res.innerHTML += `${c} \u{1F600}`
        }
    }else {
        // contagem regressiva
        for(let c=i;c>=f;c-=p){
            res.innerHTML += `${c} \u{1F600}`
        }
    }
}
}

// -------------- Terceira Section----------//

function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0 ){
        window.alert('Por Favor, Digite um numero.')
        let n = Number(num.value)
    } else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' // pra que quando mudar o numero ele zera a caixa
        while (c <=10){
            let item = document.createElement('option')// pra criar elemen
            tos sem precisar ir no html
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    
    }

    
}

// -------------- Terceira Section----------//


let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function adicionar(){
    if()
}