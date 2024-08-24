const AreaDetexto = document.querySelector(".texto");
const AreaDeMensaje = document.querySelector(".tex-mensaje");

function BotonEncrirtar(){
    const OtroTextoEncriptado = Encriptar(AreaDetexto.value);
    let textoNinguno= document.querySelector(".textos");
    let cuadro= document.querySelector(".cuadro_blanco");
    let botonCopiar= document.querySelector(".Copiar");
    AreaDeMensaje.value=OtroTextoEncriptado;
    AreaDetexto.value="";
    AreaDeMensaje.style.display="block"
    AreaDeMensaje.style.backgroundImage="none";
    textoNinguno.style.display= "none";
    cuadro.style.display="flex";
    botonCopiar.style.display= "block";


 }

function Encriptar(TextoEncriptar){
    let Arreglo = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
    TextoEncriptar=TextoEncriptar.toLowerCase();

    for (let i=0; i<Arreglo.length; i++){
        if (TextoEncriptar.includes(Arreglo[i][0])){
            TextoEncriptar=TextoEncriptar.replaceAll( Arreglo[i][0], Arreglo[i][1])
        }
    }
    return TextoEncriptar
}

function BotonDesncrirtar(){
    const TextoParaDesncriptado = Desncriptar(AreaDetexto.value);
    let textoNinguno= document.querySelector(".textos");
    let cuadro= document.querySelector(".cuadro_blanco");
    let botonCopiar= document.querySelector(".Copiar");
    AreaDeMensaje.value=TextoParaDesncriptado;
    AreaDetexto.value="";
    AreaDeMensaje.style.display="block"
    AreaDeMensaje.style.backgroundImage="none";
    textoNinguno.style.display= "none";
    cuadro.style.display="flex";
    botonCopiar.style.display= "block";


 }


function Desncriptar(TextoDesncriptar){
    let Arreglo = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
    TextoDesncriptar=TextoDesncriptar.toLowerCase();

    for (let i = Arreglo.length - 1; i >= 0; i--){
        if (TextoDesncriptar.includes(Arreglo[i][1])){
            TextoDesncriptar=TextoDesncriptar.replaceAll( Arreglo[i][1], Arreglo[i][0]);
        }
    }
    console.log(TextoDesncriptar);
    return TextoDesncriptar
}



function Copiar(){
    AreaDeMensaje.select();
    document.execCommand('copy');

}