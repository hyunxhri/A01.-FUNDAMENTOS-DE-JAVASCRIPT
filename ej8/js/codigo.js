let cadena = "La ruta nos aporto otro paso natural"
cadena = cadena.toLowerCase().split(" ").join("")
let cadena2 = cadena.split("").reverse().join("")
if (cadena === cadena2){
    alert("Es palíndromo.")
}else {
    alert("No es palíndromo.")
}