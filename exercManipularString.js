
function converter(texto){
    numeroConvertido = ""
    numero = parseInt(texto)
    numeroConvertido = numero + 2
    return numeroConvertido
    
}
console.log(converter("10"));



function mudarMaiuscula(nome){
    nomeUpper = nome.toUpperCase()
    return nomeUpper
    
}
console.log(mudarMaiuscula("peter park"));


function Contar(palavra){
    numeroCaractere = palavra.length
    return numeroCaractere
}
console.log(Contar("softex"))
