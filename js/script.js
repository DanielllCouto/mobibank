const camposDoFormlario = document.querySelectorAll("[required]")

camposDoFormlario.forEach((campo)=>{
    campo.addEventListener("blur", ()=> verificaCampo(campo))
} )

function verificaCampo(campo) {

}