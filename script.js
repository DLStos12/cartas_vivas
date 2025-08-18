
//Ative isto para o pop-up aparecer toda vez que a pagina for carregada
//window.onload = function() {
//  document.getElementById('popup').style.display = 'block';
//};


function mostrarPopupSemanal() {
  const agora = Date.now(); // timestamp atual
  const umaSemana = 7 * 24 * 60 * 60 * 1000; // milissegundos em 7 dias
  const ultimaExibicao = localStorage.getItem("popupTimestamp");

  // Se nunca foi exibido ou já passou uma semana
  if (!ultimaExibicao || agora - parseInt(ultimaExibicao) > umaSemana) {
    document.getElementById("popup").style.display = "block";
    localStorage.setItem("popupTimestamp", agora.toString());
  }
}

window.onload = mostrarPopupSemanal;

document.getElementById("fechar").onclick = function () {
  document.getElementById("popup").style.display = "none";
};

