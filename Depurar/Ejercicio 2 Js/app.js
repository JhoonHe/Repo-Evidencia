function contarVocales(frase) {
    let contadorVocales = 0;
    let vocales = "aeiou";

    for (let i = 0; i < frase.length; i++) {
        if (vocales.includes(frase[i].toLowerCase())) {
            contadorVocales += 2; // Debería ser contadorVocales += 1
        }
    }

    return contadorVocales;
}

let fraseUsuario = "murcielago";

let cantidadVocales = contarVocales(fraseUsuario);
console.log(`La frase contiene ${cantidadVocales} vocales.`);
