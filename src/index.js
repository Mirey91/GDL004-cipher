
function saveMensaje() {
    let mensaje = document.getElementById("mensajedeWA").value;
    return mensaje;
}

function saveOffset() {
    let numberOffset = parseInt(document.getElementById("offset").value);
    return numberOffset;
}

function clickCodificar() {
    const mensaje = saveMensaje();
    const offSet = saveOffset();
    const mensajeMayusculas = mensaje.toUpperCase();
    let cadenaFinal = ""
    for (let i = 0; i < mensajeMayusculas.length; i++) {
        const x = mensajeMayusculas.charCodeAt(i);
        if (x > 64 && x < 91) {
            const formula = (x - 65 + offSet) % 26 + 65;
            const regresoFormula = String.fromCharCode(formula)
            cadenaFinal = cadenaFinal + regresoFormula;
        } else {
            cadenaFinal = cadenaFinal + String.fromCharCode(x);
        }
    }
    mostrarTxt(cadenaFinal)
    //console.log(cadenaFinal)
}

function clickDecodificar() {
    const mensaje = saveMensaje();
    const offSet = saveOffset();
    const mensajeMayusculas = mensaje.toUpperCase();
    let cadenaFinal = ""
    for (let i = 0; i < mensajeMayusculas.length; i++) {
        const x = mensajeMayusculas.charCodeAt(i);
        if (x > 64 && x < 91) {
            const formula = (x + 65 - offSet) % 26 + 65;
            const regresoFormula = String.fromCharCode(formula)
            cadenaFinal = cadenaFinal + regresoFormula;
        } else {
            cadenaFinal = cadenaFinal + String.fromCharCode(x);
        }
    }
    mostrarTxt(cadenaFinal)
    //console.log(cadenaFinal)
}

function mostrarTxt(mensaje) {
    document.getElementById("mensajedeWA2").value = (mensaje);
}