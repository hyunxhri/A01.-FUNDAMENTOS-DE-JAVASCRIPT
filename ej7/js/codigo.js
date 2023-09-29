let numero = prompt("Por favor, introduce un número entero: ")
if (numero == parseInt(numero)){
    if (parseInt(numero) % 2 == 0){
        alert(`El número ${numero} es par.`)
    }
    else{
        alert(`El número ${numero} es impar.`)
    }    
}else{
    alert("Error, introduzca un entero por favor.")
}
