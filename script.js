const  inputTexto = document.querySelector(".texto");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage = "none"
    

}

function encriptar(stringEncriptada){
    let matrizCodigo =  [["e", "enter"], ["i", "imes"], ["a", "ai"],  ["o", "ober"], ["u", "ufar"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(i=0; i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
        
    }
    // Botão de copiar é exibido na tela quando a função "criptografar()" é chamada 
    document.getElementById('copiar').innerHTML = '<button class="button btn-1" onclick="copy()">Copiar</button>';
    return stringEncriptada

    
    
   
}
function btnDesincriptar(){
    const textoDescriptado = desincriptar(inputTexto.value)
    mensagem.value = textoDescriptado
    

}

function desincriptar(stringDescriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"],  ["o", "ober"], ["u", "ufar"]];

    for(i=0; i<matrizCodigo.length; i++){
        if(stringDescriptada.includes(matrizCodigo[i][0])){
            stringDescriptada = stringDescriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDescriptada
    
}

function copy() {
    document.querySelector('.mensagem').select();
    document.execCommand('copy');
    document.querySelector(".texto").value = "";
    document.querySelector(".mensagem").value = "Copiado com êxito, cole ao lado!!";
    
   
    // document.querySelector(".texto").value = "Copiado para a área de transferência.";
    // msg.innerHTML = "O texto copiado já está na área de transferência!";

}

