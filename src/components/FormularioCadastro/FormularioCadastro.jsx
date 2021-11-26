import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import React, {useEffect, useState} from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({aoEnviar}) {
  const [etapaAtual, setEtapaAtual] = useState(0)
  const [dadosColetado, setDados] = useState({});

  useEffect(()=>{
    if(etapaAtual === formularios.length){
      aoEnviar(dadosColetado);
    }
  })
 
  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} />,
    <DadosEntrega aoEnviar={coletarDados} />,
    <Typography variant="h5" >Obrigado pelo cadastro!</Typography>
  ];

  function coletarDados(dados){
    setDados({...dadosColetado, ...dados})
    console.log(dadosColetado);
    proximo();
  } 

  function proximo(){
    setEtapaAtual(etapaAtual+1);
  }

/*
  funcao subtituida pelo array
  function formularioAtual(etapa){
    switch (etapa) {
      case 0:
        return <DadosUsuario aoEnviar={proximo}/>;
      case 1:
        return <DadosPessoais aoEnviar={proximo} validarCpf={validarCpf} />;
      case 2:
        return <DadosEntrega aoEnviar={aoEnviar}/>;
      default:
        return <Typography>Erro</Typography>;
    }
  }
  return <>{formularioAtual(etapaAtual)}</>;
*/

return (
  <>
    <Stepper activeStep={etapaAtual}>
      <Step><StepLabel>Login</StepLabel></Step>
      <Step><StepLabel>Pessoal</StepLabel></Step>
      <Step><StepLabel>Entrega</StepLabel></Step>
      <Step><StepLabel>Finalização</StepLabel></Step>
    </Stepper>
    {formularios[etapaAtual]}
  </>
);

}


export default FormularioCadastro;

//<DadosPessoais aoEnviar={aoEnviar} validarCpf={validarCpf}/>
//<DadosUsuario/>
//<DadosEntrega/>