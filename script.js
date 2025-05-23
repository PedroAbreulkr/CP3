const form = document.getElementById("formprod");
const nome = document.getElementById("nome");
const preco = document.getElementById("preco");
const categoria = document.getElementById("categoria");
const erro = document.getElementById("mensagemerro");
const lista = document.getElementById("lista");

form.onsubmit = function(evento) {
  evento.preventDefault();

  const nomeValor = nome.value.trim();
  const precoValor = parseFloat(preco.value);
  const categoriaValor = categoria.value;

  if (nomeValor === "" || isNaN(precoValor) || precoValor <= 0 || categoriaValor === "") {
    erro.textContent = "Preencha todos os campos corretamente.";
    return;
  }

const item = document.createElement("li");
item.textContent = `Produto: ${nomeValor} – R$ ${precoValor.toFixed(2).replace(".", ",")} – Categoria: ${categoriaValor}`;


  if (categoriaValor === "Tecnologia") {
    item.className = "tecnologia";
  } else if (categoriaValor === "Alimentos") {
    item.className = "alimentos";
  }

  lista.appendChild(item);

  nome.value = "";
  preco.value = "";
  categoria.value = "";
  erro.textContent = "";
}
