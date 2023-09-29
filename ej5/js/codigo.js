let valores = [true, 5, false, "hola", "adios", 2]

if(valores[3] > valores[4]){
    document.write(`El elemento ${valores[3]} es mayor.<br>`)
} else {
    document.write(`El elemento ${valores[4]} es mayor.<br>`)
}

let resultadoTrue = valores[0] || valores[2]
document.write(`Resultado true: ${resultadoTrue}<br>`)

let resultadoFalse = valores[0] && valores[2]
document.write(`Resultado false: ${resultadoFalse}<br>`)

let suma = valores[1] + valores[5]
document.write(`Resultado ${valores[1]} + ${valores[5]}: ${suma}<br>`)

let resta = valores[1] - valores[5]
document.write(`Resultado ${valores[1]} - ${valores[5]}: ${resta}<br>`)

let multiplicacion = valores[1] * valores[5]
document.write(`Resultado ${valores[1]} * ${valores[5]}: ${multiplicacion}<br>`)

let division = valores[1] / valores[5]
document.write(`Resultado ${valores[1]} / ${valores[5]}: ${division}<br>`)

let resto = valores[1] % valores[5]
document.write(`Resultado ${valores[1]} % ${valores[5]}: ${resto}<br>`)

