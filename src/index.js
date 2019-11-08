//Event listeners
document.getElementById("clickCodi").addEventListener("click", clickCodificar);
document.getElementById("clickDeco").addEventListener("click", clickDecodificar);
document.getElementById("borrar").addEventListener("click", reiniciar);

//funciones
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
    const mostrarCipher = window.cipher.encode(offSet, mensaje);
    mostrarTxt(mostrarCipher);
}

function clickDecodificar() {
    const mensaje = saveMensaje();
    const offSet = saveOffset();
    const mostrardecode = window.cipher.decode(offSet, mensaje);
    mostrarTxt(mostrardecode);
}

function mostrarTxt(mensaje) {
    document.getElementById("mensajedeWA2").value = (mensaje);
    document.getElementById("resultados").style.display = "block";
}

function reiniciar() {
    document.getElementById("mensajedeWA").value = "";
    document.getElementById("mensajedeWA2").value = "";
    document.getElementById("offset").value = "";
    document.getElementById("resultados").style.display = "none";
    
}
