const ingresoTexto = document.getElementById("ingresoTexto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const mensajeFinal = document.getElementById("mensajeFinal");
const Muñeco = document.getElementById("Muñeco");
const ringhtinfo = document.getElementById("ringhtinfo");
const right = document.getElementById("right");

let remplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
]

const remplace = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor
    Muñeco.classList.add("oculto");
    ingresoTexto.value = "";
    ringhtinfo.style.display = "none";
    botonCopiar.style.display = "block";
    right.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar")

}

botonEncriptar.addEventListener("click", () =>{

    const texto = ingresoTexto.value.toLowerCase();
    if (texto!= "") {
        function encriptar(newText){
            for (let i = 0; i < remplazar.length; i++){
                if (newText.includes(remplazar[i][0])){
                    newText = newText.replaceAll(remplazar[i][0], remplazar[i][1]);
                };
            };
            return newText
    
        };
    
    } else{
        alert("Ingrese Texto a Encriptar")
    }
   
    //const textoEncriptado = encriptar(texto)

    remplace(encriptar(texto));
  
});

botonDesencriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    if (texto!= ""){
        function desencriptar(newText){
            for (let i = 0; i <remplazar.length; i++){
                if(newText.includes(remplazar[i][1])) {
                    newText = newText.replaceAll(remplazar[i][1], remplazar[i][0]);
                };
            };
            return newText
        };
        
       
    } else{
        alert("Ingrese Texto a Desencriptar")
    }
    remplace(desencriptar(texto))
});

botonCopiar.addEventListener("click", () => {
    let texto = mensajeFinal;
    texto.select();
    document.execCommand("copy")
    alert("Texto Copiado")

    mensajeFinal.innerHTML = "";
    Muñeco.classList.remove("oculto");
    ringhtinfo.style.display = "block";
    botonCopiar.style.display = "none";
    right.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    ingresoTexto.focus();
})


