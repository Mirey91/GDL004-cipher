window.cipher = {
  encode: function (offset, string) {
    const mensajeMayusculas = string.toUpperCase();
    let cadenaFinal = ""
    for (let i = 0; i < mensajeMayusculas.length; i++) {
      const x = mensajeMayusculas.charCodeAt(i);
      if (x > 64 && x < 91) {
        const formula = (x - 65 + offset) % 26 + 65;
        const regresoFormula = String.fromCharCode(formula)
        cadenaFinal = cadenaFinal + regresoFormula;
      } else {
        cadenaFinal = cadenaFinal + String.fromCharCode(x);
      }
    }
    return cadenaFinal;
  },

  decode: function (offset, string) {
    const mensajeMayusculas = string.toUpperCase();
    let cadenaFinal = ""
    for (let i = 0; i < mensajeMayusculas.length; i++) {
      const x = mensajeMayusculas.charCodeAt(i);
      if (x > 64 && x < 91) {
        const formula = (x + 65 - offset) % 26 + 65;
        const regresoFormula = String.fromCharCode(formula)
        cadenaFinal = cadenaFinal + regresoFormula;
      } else {
        cadenaFinal = cadenaFinal + String.fromCharCode(x);
      }
    }
    return cadenaFinal
  },
}