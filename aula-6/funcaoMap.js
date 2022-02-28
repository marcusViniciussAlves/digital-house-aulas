const numeros = [1, 2, 3, 5];

let numerosDobrados = numeros.map( (numero, indice) => {
    console.log(`Valor: ${numero} e posição no Array: ${indice}`)
    return numero * 2 
} )

console.log(numeros)
console.log(numerosDobrados)

