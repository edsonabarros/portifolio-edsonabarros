function esconderArquivo(idBotao, idArquivo, idMostrar) {
  var valueBotao = document.getElementById(idBotao);
  var valueArquivo = document.getElementById(idArquivo);
  var mostrarArquivo = document.getElementById(idMostrar);

  var display = window.getComputedStyle(valueArquivo, null).display;

  if (display == "block") {
    alert("Está");
    valueBotao.style.display = "none";
    valueArquivo.style.display = "none";
    mostrarArquivo.style.display = "block";

      //var visibleObject = document.querySelector(".header-li");


  } else {
    alert("Não está!");
    valueBotao.style.display = "none";
    valueArquivo.style.display = "none";
  }
}

function abrirArquivo(idBotao, idArquivo, idEsconder, idEsconder2) {
  var valueBotao = document.getElementById(idBotao);
  var valueArquivo = document.getElementById(idArquivo);
  var esconderArquivo = document.getElementById(idEsconder);
  var esconderArquivo2 = document.getElementById(idEsconder2);
  valueBotao.style.display = "flex";
  valueArquivo.style.display = "block";
  esconderArquivo.style.display = "none";
  esconderArquivo2.style.display = "none";
}
