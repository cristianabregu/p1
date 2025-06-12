
function actualizarTexto() {
  const texto = document.getElementById('inputText').value;
  document.getElementById('miH1').innerText = texto;
}

document.getElementById('inputText').addEventListener('input', actualizarTexto);
