// Id do filme em tela
const idFilme = JSON.parse(sessionStorage.getItem('id'));
console.log(idFilme);

// Chave da api do TMDB
const ptBR = '&language=pt-BR';
const API_KEY = 'api_key=250d01a9ef76763fba514ac9fcf6be88';
const BASE_URL = 'https://api.themoviedb.org/3';
const EMBREVE_API = BASE_URL + '/movie/upcoming?' + API_KEY + ptBR;
const IMG_URL = 'https://image.tmdb.org/t/p/w400';
const SEARCH_URL = BASE_URL + '/search/movie?' + API_KEY + ptBR;

const espaco = document.getElementById("divFilme");

const FILME_URL = BASE_URL + '/movie/' + idFilme + 'external_ids?'+ API_KEY + ptBR;


getFilmes(FILME_URL);

function getFilmes(url) {
    fetch(url).then(res => res.json()).then(dados =>{
        console.log(dados);
        mostrarFilme(dados);
    })
}


function mostrarFilme(dados) {
    espaco.innerHTML = '';

    const elementoFilme = document.createElement('div');
    elementoFilme.classList.add('more-information');
    elementoFilme.innerHTML = `
        <div class="container">
            <div class="esquerda">
                <img src=${IMG_URL + dados.poster_path} alt="" style="border-radius:10px">
            </div>
            <div class="direita">
                <div class="texto">
                    <h1 class="title-more">${dados.original_title}</h1>
                    <p class="sinopse-more">${dados.overview}</p>
                </div>
                <div class="classificacao">
                    <div class="likes">
                        <p>Avaliação:</p>
                        <span><i class="fa-solid fa-star-half-stroke">${dados.vote_average}</i></span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--            About Movie                     -->

    <div class="about-movie">
        <div class="container">
            <div class="esquerda-about">
                <h1 class="title-about">Detalhes do filme</h1>
                <p>Data de Lançamento: ${dados.release_date}</p>
                <p>Gênero: ${dados.genres[0]['name']}</p>
                <p>Idioma original: ${dados.spoken_languages[0]['name']}</p>
                <p>País de produção: ${dados.production_countries[0]['name']}</p>
            </div>
            <div class="direita-about">
                <img src="${IMG_URL + dados.backdrop_path}" alt="" width="100%">
            </div>
        </div>
    </div>
    `
    espaco.appendChild(elementoFilme);

}


