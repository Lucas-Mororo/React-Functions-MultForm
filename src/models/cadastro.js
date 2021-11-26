
function validarCpf(cpf){
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 digitos." };
  } else {
    return { valido: true, texto: "" };
  }
}

function validarSenha(senha){
  if (senha.length < 4 || senha.length > 18) {
    return { valido: false, texto: "Senha deve ter entre 4 e 18 dígitos" };
  } else {
    return { valido: true, texto: "" };
  }
}

export {validarCpf, validarSenha};