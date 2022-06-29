// Chave da api do TMDB
const ptBR = '&language=pt-BR';
const API_KEY = 'api_key=250d01a9ef76763fba514ac9fcf6be88';
const BASE_URL = 'https://api.themoviedb.org/3';
const EMBREVE_API = BASE_URL + '/movie/upcoming?' + API_KEY + ptBR;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const SEARCH_URL = BASE_URL + '/search/movie?' + API_KEY + ptBR;
const espacoFilmes = document.getElementById("espaco-filmes");

getFilmes(EMBREVE_API);

function getFilmes(url) {
    fetch(url).then(res => res.json()).then(dados =>{
        console.log(dados.results);
        mostrarFilme(dados.results);
    })
}

function mostrarFilme(dados) {
    espacoFilmes.innerHTML = '';

    dados.forEach(filme =>{
        const {title, poster_path, vote_average, overview, id} = filme;
        const elementoFilme = document.createElement('div');
        elementoFilme.classList.add('movie-card');
        elementoFilme.innerHTML = `
            <img src="${IMG_URL + poster_path}" alt="${title}">

            <div class="informacoes-filme">
                <h3>${title}</h3>
                <span class="grade">${vote_average}</span>
            </div>
            <div class="review-filme">
                ${overview}
                <div class="div-btn-vermais">
                    <button class="btn-vermais" id="${id}" type="button">Ver Mais</button>
                </div> 
            </div>
        `
        espacoFilmes.appendChild(elementoFilme);
        
        document.getElementById(id).addEventListener('click', (e) => {
            e.preventDefault();
            
            var idFilmeDetalhes = id;
            sessionStorage.setItem('id', idFilmeDetalhes);
            passaValor(idFilmeDetalhes);
        })
    })
}


function passaValor(valor){
    location.href = "http://127.0.0.1:5500/TelaFilmeAPI.html?id=" + valor;
}
