function esconderArquivo(idBotao, idArquivo, idMostrar) {
  let valueBotao = document.getElementById(idBotao);
  let valueArquivo = document.getElementById(idArquivo);
  let valueMostrar = document.getElementById(idMostrar);

  let vSobre;
  let vHabilidades;
  let vEducacao;

  let sobre = document.querySelector("#sobre");
  let educacao = document.querySelector("#educacao");
  let habilidades = document.querySelector("#habilidades");

  if (idArquivo === "p-educacao" && habilidades.offsetParent === null) {
    valueMostrar = document.getElementById("p-sobre");
    alert("Sobre1");
  } else if (idArquivo === "p-sobre" && educacao.offsetParent == null) {
    valueMostrar = document.getElementById("p-educacao");
    alert("Educa1");
  } else if (idArquivo === "p-habilidades" && educacao.offsetParent === !null) {
    alert("Educa 2");
    valueMostrar = document.getElementById("p-educacao");
  } else {
    valueMostrar = document.getElementById(idMostrar);
  }

  let displayA = window.getComputedStyle(valueArquivo, null).display;

  if (displayA == "block") {
    valueArquivo.style.display = "none";
    valueBotao.style.display = "none";
    valueMostrar.style.display = "block";
  } else {
    valueArquivo.style.display = "none";
    valueBotao.style.display = "none";
  }

  if (
    sobre.offsetParent === null &&
    educacao.offsetParent === null &&
    habilidades.offsetParent === null
  ) {
    valueArquivo.style.display = "none";
    valueBotao.style.display = "none";
    valueMostrar.style.display = "none";
  }
  /*     if (
      sobre.offsetParent === !null &&
      educacao.offsetParent === null &&
      habilidades.offsetParent === null
    ) {
      vSobre.style.display = "block";
    } else if (
      sobre.offsetParent === null &&
      educacao.offsetParent === !null &&
      habilidades.offsetParent === null
    ) {
      vEducacao.style.display = "block";
    }else if (
      sobre.offsetParent === null &&
      educacao.offsetParent === null &&
      habilidades.offsetParent === !null
    ){
      vHabilidades.style.display = "block";
    }

  alert(vSobre, vEducacao, vHabilidades);

/  if (
    sobre.offsetParent === null &&
    educacao.offsetParent === null &&
    habilidades.offsetParent === null
  ) {
    valueBotao.style.display = "none";
    valueArquivo.style.display = "none";
    valueMostrar.style.display = "none";
  } else if (
    sobre.offsetParent === !null &&
    educacao.offsetParent === null &&
    habilidades.offsetParent === null
  ) {
    vSobre.style.display = "block";
  }  */
}
function abrirArquivo(idBotao, idArquivo, idEsconder, idEsconder2) {
  let valueBotao = document.getElementById(idBotao);
  let valueArquivo = document.getElementById(idArquivo);
  let esconderArquivo = document.getElementById(idEsconder);
  let esconderArquivo2 = document.getElementById(idEsconder2);
  valueBotao.style.display = "flex";
  valueArquivo.style.display = "block";
  esconderArquivo.style.display = "none";
  esconderArquivo2.style.display = "none";
}
