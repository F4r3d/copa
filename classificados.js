const classificados = [
    {
        id: 1,
        selecao: "África do Sul",
        bandeira: "africadosul.png",
        continente: "África",
        sigla: "ZAF",
    },
    {
        id: 2,
        selecao: "Alemanha",
        bandeira: "alemanha.png",
        continente: "Europa",
        sigla: "DEU",
    },
    {
        id: 3,
        selecao: "Arábia Saudita",
        bandeira: "arabiasaudita.png",
        continente: "Ásia",
        sigla: "SAU",
    },
    {
        id: 4,
        selecao: "Argélia",
        bandeira: "argelia.png",
        continente: "África",
        sigla: "DZA",
    },
    {
        id: 5,
        selecao: "Argentina",
        bandeira: "argentina.png",
        continente: "América do Sul",
        sigla: "ARG",
    },
    {
        id: 6,
        selecao: "Austrália",
        bandeira: "australia.png",
        continente: "Oceania",
        sigla: "AUS",
    },
    {
        id: 7,
        selecao: "Áustria",
        bandeira: "austria.png",
        continente: "Europa",
        sigla: "AUT",
    },
    {
        id: 8,
        selecao: "Bélgica",
        bandeira: "belgica.png",
        continente: "Europa",
        sigla: "BEL",
    },
    {
        id: 9,
        selecao: "Brasil",
        bandeira: "brasil.png",
        continente: "América do Sul",
        sigla: "BRA",
    },
    {
        id: 10,
        selecao: "Cabo Verde",
        bandeira: "caboverde.png",
        continente: "África",
        sigla: "CPV",
    },
    {
        id: 11,
        selecao: "Canadá",
        bandeira: "canada.png",
        continente: "América do Norte",
        sigla: "CAN",
    },
    {
        id: 12,
        selecao: "Catar",
        bandeira: "catar.png",
        continente: "Ásia",
        sigla: "QAT",
    },
    {
        id: 13,
        selecao: "Colômbia",
        bandeira: "colombia.png",
        continente: "América do Sul",
        sigla: "COL",
    },
    {
        id: 14,
        selecao: "Coreia do Sul",
        bandeira: "coreiadosul.png",
        continente: "Ásia",
        sigla: "KOR",
    },
    {
        id: 15,
        selecao: "Costa do Marfim",
        bandeira: "costadomarfim.png",
        continente: "África",
        sigla: "CIV",
    },
    {
        id: 16,
        selecao: "Croácia",
        bandeira: "croacia.png",
        continente: "Europa",
        sigla: "HRV",
    },
    {
        id: 17,
        selecao: "Curaçao",
        bandeira: "curacao.png",
        continente: "América Central e Caribe",
        sigla: "CUW",
    },
    {
        id: 18,
        selecao: "Egito",
        bandeira: "egito.png",
        continente: "África",
        sigla: "EGY",
    },
    {
        id: 19,
        selecao: "Equador",
        bandeira: "equador.png",
        continente: "América do Sul",
        sigla: "ECU",
    },
    {
        id: 20,
        selecao: "Escócia",
        bandeira: "escocia.png",
        continente: "Europa",
        sigla: "SCO",
    },
    {
        id: 21,
        selecao: "Espanha",
        bandeira: "espanha.png",
        continente: "Europa",
        sigla: "ESP",
    },
    {
        id: 22,
        selecao: "Estados Unidos",
        bandeira: "estadosunidos.png",
        continente: "América do Norte",
        sigla: "USA",
    },
    {
        id: 23,
        selecao: "França",
        bandeira: "franca.png",
        continente: "Europa",
        sigla: "FRA",
    },
    {
        id: 24,
        selecao: "Gana",
        bandeira: "gana.png",
        continente: "África",
        sigla: "GHA",
    },
    {
        id: 25,
        selecao: "Haiti",
        bandeira: "haiti.png",
        continente: "América Central e Caribe",
        sigla: "HTI",
    },
    {
        id: 26,
        selecao: "Holanda",
        bandeira: "holanda.png",
        continente: "Europa",
        sigla: "NLD",
    },
    {
        id: 27,
        selecao: "Inglaterra",
        bandeira: "inglaterra.png",
        continente: "Europa",
        sigla: "ENG",
    },
    {
        id: 28,
        selecao: "Irã",
        bandeira: "ira.png",
        continente: "Ásia",
        sigla: "IRN",
    },
    {
        id: 29,
        selecao: "Japão",
        bandeira: "japao.png",
        continente: "Ásia",
        sigla: "JPN",
    },
    {
        id: 30,
        selecao: "Jordânia",
        bandeira: "jordania.png",
        continente: "Ásia",
        sigla: "JOR",
    },
    {
        id: 31,
        selecao: "Marrocos",
        bandeira: "marrocos.png",
        continente: "África",
        sigla: "MAR",
    },
    {
        id: 32,
        selecao: "México",
        bandeira: "mexico.png",
        continente: "América do Norte",
        sigla: "MEX",
    },
    {
        id: 33,
        selecao: "Noruega",
        bandeira: "noruega.png",
        continente: "Europa",
        sigla: "NOR",
    },
    {
        id: 34,
        selecao: "Nova Zelândia",
        bandeira: "novazelandia.png",
        continente: "Oceania",
        sigla: "NZL",
    },
    {
        id: 35,
        selecao: "Panamá",
        bandeira: "panama.png",
        continente: "América Central e Caribe",
        sigla: "PAN",
    },
    {
        id: 36,
        selecao: "Paraguai",
        bandeira: "paraguai.png",
        continente: "América do Sul",
        sigla: "PRY",
    },
    {
        id: 37,
        selecao: "Portugal",
        bandeira: "portugal.png",
        continente: "Europa",
        sigla: "PRT",
    },
    {
        id: 38,
        selecao: "Senegal",
        bandeira: "senegal.png",
        continente: "África",
        sigla: "SEN",
    },
    {
        id: 39,
        selecao: "Suíça",
        bandeira: "suica.png",
        continente: "Europa",
        sigla: "CHE",
    },
    {
        id: 40,
        selecao: "Tunísia",
        bandeira: "tunisia.png",
        continente: "África",
        sigla: "TUN",
    },
    {
        id: 41,
        selecao: "Uruguai",
        bandeira: "uruguai.png",
        continente: "América do Sul",
        sigla: "URY",
    },
    {
        id: 42,
        selecao: "Uzbequistão",
        bandeira: "uzbequistao.png",
        continente: "Europa",
        sigla: "UZB",
    }
];


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

