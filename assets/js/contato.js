function tipoPessoa() {
  //Verifica qual opção selecionada
  const tipoPessoa = document.getElementById("tipoPessoa");
  let opcao = tipoPessoa.options[tipoPessoa.selectedIndex].value;
  const tipoAssunto = document.getElementById("tipoAssunto");
  let opcaoAssunto = tipoAssunto.options[tipoAssunto.selectedIndex].value;

  //Puxa o ID do assunto
  const assunto = document.getElementById("assunto");
  //Puxa o ID dos ícones de contato
  const tipoMensagem = document.getElementById("icons-contato");

  let whatsapp = document.getElementById("whatsapp");
  let email = document.getElementById("email");

  if (opcao == "recrutador") {
    assunto.style.display = "none";
    tipoMensagem.style.display = "flex";
    whatsapp.href =
      "https://api.whatsapp.com/send?phone=5511983562209&text=Ol%C3%A1,%20Edson!%20Eu%20sou%20um%20recrutador(a)%20e%20gostaria%20de%20conversar%20com%20voc%C3%AA!";
    email.href =
      "mailto:edsonabarros01@gmail.com?subject=Recrutamento%20-%20Site&body=Ol%C3%A1%2C%20Edson!%0D%0A%0D%0AEu%20sou%20um%20recrutador(a)%20e%20gostaria%20de%20conversar%20com%20voc%C3%AA!";

  } else if (opcao == "dev") {
    assunto.style.display = "block";
    tipoMensagem.style.display = "none";

  } else {
    assunto.style.display = "none";
    tipoMensagem.style.display = "none";
  }

  if(opcao == "dev" && opcaoAssunto == "comeco" ){
    whatsapp.href =
    "https://api.whatsapp.com/send?phone=5511983562209&text=Ol%C3%A1,%20Edson!%20Eu%20estou%20come%C3%A7ando%20na%20%C3%A1rea%20de%20programa%C3%A7%C3%A3o%20e%20gostaria%20de%20algumas%20dicas!";
  email.href =
    "mailto:edsonabarros01@gmail.com?subject=Estou%20come%C3%A7ando%20-%20Site&body=Ol%C3%A1%2C%20Edson!%0D%0A%0D%0AEu%20estou%20come%C3%A7ando%20na%20%C3%A1rea%20e%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas!%0D%0A%0D%0A%5BDescreva%20do%20que%20precisa%20%3B)%20%5D";
    tipoMensagem.style.display = "flex";
  }
  else if(opcao == "dev" && opcaoAssunto == "duvida" ){
    whatsapp.href =
    "https://api.whatsapp.com/send?phone=5511983562209&text=Ol%C3%A1,%20Edson!%20Eu%20sou%20um%20DEV%20e%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas!";
  email.href =
    "mailto:edsonabarros01@gmail.com?subject=Estou%20com%20uma%20d%C3%BAvida%20-%20Site&body=Ol%C3%A1%2C%20Edson!%0D%0A%0D%0AEu%20estava%20olhando%20um%20c%C3%B3digo%2Fp%C3%A1gina%20e%20fiquei%20com%20uma%20d%C3%BAvida%0D%0A%0D%0A%5BDescreva%20do%20que%20quer%20saber%20%3B)%20%5D";
    tipoMensagem.style.display = "flex";
  }
  else if(opcao == "dev" && opcaoAssunto == "projeto" ){
    whatsapp.href =
    "https://api.whatsapp.com/send?phone=5511983562209&text=Ol%C3%A1,%20Edson!%20Eu%20sou%20um%20DEV%20que%20gostaria%20de%20fazer%20um%20projeto%20com%20voc%C3%AA!%20O%20que%20acha?";
  email.href =
    "mailto:edsonabarros01@gmail.com?subject=Projeto%20-%20Site&body=Ol%C3%A1%2C%20Edson!%0D%0A%0D%0ASou%20um%20desenvolvedor%20e%20gostaria%20de%20fazer%20um%20projeto%20com%20voc%C3%AA%2C%20o%20que%20acha%3F%0D%0A%0D%0A%5BDescreva%20sobre%20o%20projeto%20%3B)%20%5D";
    tipoMensagem.style.display = "flex";
  }

  console.log(whatsapp);
  console.log(email);
}
