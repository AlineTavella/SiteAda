document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
  if(document.getElementById("nome").value != "" && document.getElementById    ("email").value != "" && document.getElementById("tel").value != ""){
    alert("Obrigada! Logo você receberá mensagens no seu e-mail.")
  }else{
    alert("Por favor, preencha os campos nome, e-mail e telefone.")
  }
}


