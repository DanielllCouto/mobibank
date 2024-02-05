import ehUmCPF from "./validaCPF.js"
import ehMaiorDeIdade from "./validaIdade.js"
const camposDoFormlario = document.querySelectorAll("[required]")

camposDoFormlario.forEach((campo)=>{
    campo.addEventListener("blur", ()=> verificaCampo(campo))
} )

function verificaCampo(campo) {
    if(campo.name == "cpf" && campo.value.length >= 11 ){
        ehUmCPF(campo)
    }
    if (campo.name == "aniversario" && campo.value != ""){
        ehMaiorDeIdade(campo)
    }

}