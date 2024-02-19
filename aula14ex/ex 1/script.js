function contar() {
    let ini = window.document.getElementById('inicio')
    let fim = window.document.getElementById('fim')
    let pas = document.getElementById('passo')
    let res = document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        //window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if(p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if(i < f) {
            // Contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            // Contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }

}
