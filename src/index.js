
function saveMensaje() {
    let mensaje = document.getElementById("mensajedeWA").value;
    return mensaje;
}

function saveOffset() {
    let numberOffset = parseInt(document.getElementById("offset").value);
    return numberOffset;
}
document.getElementById("clickCodi").addEventListener("click", clickCodificar)

function clickCodificar() {
    const mensaje = saveMensaje();
    const offSet = saveOffset();
    const mostrarCipher = window.cipher.encode(offSet, mensaje);
    mostrarTxt(mostrarCipher)

}

document.getElementById("clickDeco").addEventListener("click", clickDecodificar)

function clickDecodificar() {
    const mensaje = saveMensaje();
    const offSet = saveOffset();
    const mostrardecode = window.cipher.decode(offSet, mensaje)
    mostrarTxt(mostrardecode)

}

function mostrarTxt(mensaje) {
    document.getElementById("mensajedeWA2").value = (mensaje);
}