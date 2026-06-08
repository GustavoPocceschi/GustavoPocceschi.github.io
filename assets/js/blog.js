// ============================================
// Blog dinâmico com JSON (funciona no GitHub Pages)
// Luiz Gustavo Pocceschi
// ============================================

/*
  Como adicionar um post novo:
  1. Abra o arquivo assets/data/posts.json
  2. Copie um bloco { ... } existente
  3. Altere data, titulo e paragrafos
  4. Salve, faça git add / commit / push
*/

document.addEventListener("DOMContentLoaded", function () {

  // Elemento vazio no blog.html onde os posts serão inseridos
  var container = document.getElementById("lista-posts");

  // Se não estiver na página do blog, não faz nada
  if (!container) {
    return;
  }

  // fetch = pede um arquivo ao servidor (ou ao GitHub Pages)
  fetch("assets/data/posts.json")
    .then(function (resposta) {
      if (!resposta.ok) {
        throw new Error("Não foi possível carregar os posts.");
      }
      return resposta.json();
    })
    .then(function (posts) {
      container.innerHTML = "";

      posts.forEach(function (post) {
        container.appendChild(criarPost(post));
      });
    })
    .catch(function (erro) {
      container.innerHTML = "<p class='blog-erro'>Erro ao carregar posts: " + erro.message + "</p>";
    });
});

// Monta o HTML de um post e devolve um elemento <article>
function criarPost(post) {
  var artigo = document.createElement("article");
  artigo.className = "post-blog";

  var data = document.createElement("p");
  data.className = "data-post";
  data.textContent = post.data;
  artigo.appendChild(data);

  var titulo = document.createElement("h2");
  titulo.textContent = post.titulo;
  artigo.appendChild(titulo);

  post.paragrafos.forEach(function (texto) {
    var paragrafo = document.createElement("p");
    paragrafo.textContent = texto;
    artigo.appendChild(paragrafo);
  });

  if (post.link) {
    var pLink = document.createElement("p");
    pLink.style.marginTop = "10px";
    var a = document.createElement("a");
    a.href = post.link.url;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = post.link.texto;
    pLink.appendChild(a);
    artigo.appendChild(pLink);
  }

  return artigo;
}
