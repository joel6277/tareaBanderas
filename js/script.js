function ocultarBandera(nombre) {
    document.getElementById(nombre).style.display = 'none'
}

function ocultarBanderas() {
    for (let i = 1; i <= 5; i++) {
        esconderBandera('ejercicio' + i)
    }
}

function mostrarBandera(nombre) {
    document.getElementById(nombre).style.display = 'contents'
}

function seleccionarBandera() {
    esconderBanderas()
    let select = document.getElementById('select')
    mostrarBandera(select.value)
}

esconderBanderas()
let select = document.getElementById('select')
select.onchange = seleccionarBandera
mostrarBandera(select.value)