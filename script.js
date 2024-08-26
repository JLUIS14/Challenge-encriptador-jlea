const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


//La; letra; "e"; es; convertida; para; "enter";
//La; letra; "i"; es; convertida; para; "imes";
//La; letra; "a"; es; convertida; para; "ai";
//La; letra; "o"; es; convertida; para; "ober";
//La; letra; "u"; es; convertida; para; "ufat";


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}
function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"],["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i <matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])

        }
    }
    return stringEncriptada
}
function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}
function desencriptar(stringDessecriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"],["u", "ufat"]]
    stringDessecriptada = stringDessecriptada.toLowerCase();

    for(let i = 0; i <matrizCodigo.length; i++){
        if(stringDessecriptada.includes(matrizCodigo[i][1])){
            stringDessecriptada = stringDessecriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])

        }
    }
    return stringDessecriptada
}

function copyTextToClipboard(text) {
    // voy a crear un elemento de entrada temporal
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
      // Selecciono el elemento de entrada
    input.select();
      // Copio el texto al portapapeles
      document.execCommand('copy');
      // Elimino el elemento de entrada temporal
    document.body.removeChild(input);
  }

  function btnCopiar() {
    const textArea = document.querySelector(".mensaje"); 
    copyTextToClipboard(textArea.value); 
    textArea.value = "";
    mensaje.style.backgroundImage= 'url("/imagenes/Muñeco.png")';
       
  }

 