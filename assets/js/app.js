// ============================================
// JavaScript simples do site
// Luiz Gustavo Pocceschi
// ============================================

/*
  DOMContentLoaded = evento que dispara quando o HTML
  já foi carregado (antes das imagens, por exemplo).
  Assim garantimos que o elemento #ano já existe na página.
*/
document.addEventListener("DOMContentLoaded", function () {

  // getElementById busca um elemento pelo atributo id="ano"
  var elementoAno = document.getElementById("ano");

  // textContent altera só o texto dentro da tag (sem HTML)
  if (elementoAno) {
    elementoAno.textContent = new Date().getFullYear();
  }
});
