let usuario = prompt("Introduzca su nombre de usuario:")
let usuarioRegex = /^[a-zA-Z0-9\._]{3,}$/
if (usuarioRegex.test(usuario)){
    let diaHora = prompt("Introduzca qué hora es con formato XX:XX")
    let diaHoraRegex = /^[0-9]{2}:[0-9]{2}$/
    if (diaHoraRegex.test(diaHora)){
        if (diaHora.substring(3,) >= 0 && diaHora.substring(3,) <= 59){
            let hora = parseInt(diaHora.substring(0,2))
            switch (true) {
                case hora >= 6 && hora < 12:
                alert(`Buenos días ${usuario} !! Ten una buena mañana.`)
                break
                case hora >= 12 && hora <= 20:
                alert(`Buenas tardes ${usuario} !! Ten una buena tarde.`)
                break
                case (hora > 20 && hora <= 23) || (hora >= 0 && hora < 6):
                alert(`Buenas noches ${usuario} !! Ten una buena noche.`)
                break
                default:
                    alert(`Hora no válida.`)
            }
        } else {
            alert(`Error, hora no válida.`)
        }
    } else { 
        alert(`Error, introduzca la hora con el formato indicado.`)
    }
} else {
    alert(`Error, usuario no válido.`)
}