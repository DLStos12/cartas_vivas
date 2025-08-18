//Ative isto para o pop-up aparecer apenas uma vez por dia
function mostrarPopup() {
  const hoje = new Date().toDateString(); // Ex: "Mon Aug 18 2025"
  const ultimaExibicao = localStorage.getItem("popupData");

if (ultimaExibicao !== hoje) {
  document.getElementById("popup").style.display = "block";
    localStorage.setItem("popupData", hoje);
}
}
window.onload = mostrarPopup;

//Ative isto para o pop-up aparecer toda vez que a pagina for carregada
// window.onload = function() {
//   document.getElementById('popup').style.display = 'block';
// };


document.getElementById("fechar").onclick = function () {
  document.getElementById("popup").style.display = "none";
};
