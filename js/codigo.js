var btnEncriptar = document.querySelector(".btn-encriptar");
var btnDesencriptar = document.querySelector(".btn-desencriptar");
var muneco = document.querySelector(".conteiner-muneco");
var h1 = document.querySelector(".container-h1");
var parrafo = document.querySelector(".container-parrafo");
var resultado = document.querySelector("#txt-resultado");
var btnCopiar = document.querySelector(".btn-copiar");
var area = document.querySelector(".area");


btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copy;

function encriptar(){ 
    ocultarAdelante();
    resultado.textContent = encriptarTexto(recuperarTexto());
}

function desencriptar(){ 
    ocultarAdelante();
    resultado.textContent= desencriptarTexto(recuperarTexto());
}

function copy() { 
    var textoEncriptado = resultado.textContent;
    navigator.clipboard.writeText(textoEncriptado);
    area.value = "";
    alert("texto copiado");
    area.focus();
}

function recuperarTexto() { 
    var area = document.querySelector(".area");
    return area.value;
}

function ocultarAdelante() {
    muneco.classList.add("ocultar");
    h1.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
    var mayusculas = /[A-Z]/g;
    var caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++){
        if (texto[i].match(mayusculas) || texto[i].match(caracteres)) {
            alert("No se admite -> [mayúsculas y caracteres especiales ]")
            break;
        }
        if (texto[i] == "a") { 
            textoFinal += "ai";
        }
        else if (texto[i] == "e") { 
            textoFinal += "enter";
        }
        else if (texto[i] == "i") { 
            textoFinal += "imes";
        }
        else if (texto[i] == "o") { 
            textoFinal += "ober";
        }
        else if (texto[i] == "u") { 
            textoFinal += "ufat";
        }
        else { 
            textoFinal += texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++){
        if (texto[i] == "a") { 
            textoFinal += "a";
            i += 1;
        }
        else if (texto[i] == "e") { 
            textoFinal += "e";
            i += 4;
        }
        else if (texto[i] == "i") { 
            textoFinal += "i";
            i += 3;
        }
        else if (texto[i] == "o") { 
            textoFinal += "o";
            i += 3;
        }
        else if (texto[i] == "u") { 
            textoFinal += "u";
            i += 3;
        }
        else { 
            textoFinal += texto[i];
        }
    }
    return textoFinal;
}



