const inputTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")

function botonencriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none"
    inputTexto.value = ""
}


function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();
    
    for(let i = 0; i < matrizCodigo.length; i++){
    if(stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
    }
    return stringEncriptada;
    }

    function botondesencriptar(){
        const textoEncriptado = desencriptar(inputTexto.value)
        mensaje.value = textoEncriptado;
        inputTexto.value = ""
    }


    function desencriptar(stringdesencriptada){
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
        stringdesencriptada = stringdesencriptada.toLowerCase();
        
        for(let i = 0; i < matrizCodigo.length; i++){
        if(stringdesencriptada.includes(matrizCodigo[i][1])){
            stringdesencriptada = stringdesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
        }
        return stringdesencriptada;
        }

       
        
function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = ""
    alert("Texto copiado")
}