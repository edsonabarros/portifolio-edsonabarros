function esconderArquivo(idBotao, idArquivo) {
  var valueBotao = document.getElementById(idBotao);
  var valueArquivo = document.getElementById(idArquivo);
  valueBotao.style.display = "none";
  valueArquivo.style.display = "none";

}

function abrirArquivo(idBotao, idArquivo) {
  var valueBotao = document.getElementById(idBotao);
  var valueArquivo = document.getElementById(idArquivo);
  valueBotao.style.display = "flex";
  valueArquivo.style.display = "inline";
}
