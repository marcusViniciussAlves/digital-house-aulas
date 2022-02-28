// function digaOla() {
//     return 'Olá!'            Já foi usado
// };

// const digaOla = function() {
//     return 'Olá'            Já foi usado também
// };

const digaOla = () => 'Olá';

let horaAtual = () => {
    let data = new Date();
    return data.getHours() + ':' + data.getMinutes();
}

console.log(horaAtual());