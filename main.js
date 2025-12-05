// CLASSIFICADOS
const lista = document.getElementById("lista-selecoes");

const selecoesOrdenadas = classificados
  .map(sel => sel.selecao)
  .sort((a, b) => a.localeCompare(b, 'pt-BR'));

selecoesOrdenadas.forEach(nome_pais => {
  const dadosSelecao = classificados.find(sel => sel.selecao === nome_pais);

  const card = document.createElement("div");
  card.className = "cardBandeira";

  const imagem = document.createElement("img");
  imagem.src = "bandeiras/" + dadosSelecao.bandeira;
  imagem.alt = nome_pais;

  const nomeSelecao = document.createElement("p");
  nomeSelecao.textContent = nome_pais;

  card.appendChild(imagem);
  card.appendChild(nomeSelecao);

  lista.appendChild(card);
});
// FIM Classificados
