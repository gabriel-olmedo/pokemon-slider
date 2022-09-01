const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartaoSelecionado = document.querySelector("selecionado");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) return;
  cartaoAtual++;
  cartoes[cartaoAtual].classList.add("selecionado");
  cartaoSelecionado.classList.remove("selecionado");
});

btnVoltar.addEventListener("click", function () {
  cartaoAtual - 1;
  cartoes[cartaoAtual].classList.add("selecionado");
});
