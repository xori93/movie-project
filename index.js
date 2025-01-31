// api key = 46b68acf
// http://www.omdbapi.com/?i=tt3896198&apikey=46b68acf

const searchBar = document.getElementById('search');
const searchIcon = document.querySelector('.search__icon')
let movieList = [];


async function main() {
  const response = await fetch(`https://www.omdbapi.com/?apikey=46b68acf&s=marvel`);
  const data = await response.json();
  movieList = data.Search;
  
  const movieListElement = document.querySelector(".movie-list");
  movieListElement.innerHTML = movieList.map(
    (movie) => 
      renderMovies(movie)
  ).join("");
}

searchBar.addEventListener('keyup', async (e) => {
  const search = e.target.value.trim();
  if (search.length >= 3) {
    const response = await fetch(`http://www.omdbapi.com/?apikey=46b68acf&s=${search}`);
    const data = await response.json();
    movieList = data.Search || [];

    const movieListElement = document.querySelector(".movie-list");
    movieListElement.innerHTML = movieList.map(
      (movie) => 
        renderMovies(movie)
    ).join("");
  }
});

searchIcon.addEventListener("click", () => {
  fetchMovies(searchBar.value.trim());
});


function filterBooks(event) {
  if (event.target.value === 'LATEST_MOVIE') {
    console.log('sort latest mvovie')
    
  }
}

/*
fetchMovie.addEventListener("click", async(e) => {
  const searchIcon = e.target.value.trim();
  if (searchIcon.length >= 3) {
    const response = await fetch(`http://www.omdbapi.com/?apikey=46b68acf&s=${search}`);
    const data = await response.json();
    movieList = data.Search || [];
  
    const movieListElement = document.querySelector(".movie-list");
    movieListElement.innerHTML = movieList.map(
      (movie) => 
        renderMovies(movie)
    ).join("");
  }
})

*/

main();

function renderMovies(movie) {
  return `<div class="container">
        <div class="row">
          <div class="movie-list">
            <div class="movie__wrapper">
              <div class= "movie__container">
              <img src="${movie.Poster}" class="movie__img"/>
              </div>
              <div class="movie__wrapper--bg"></div>
              <div class="movie-info">
                <h3>${movie.Title}</h3>
                <p class="movie__type">${movie.Type}</p>
                <p class="movie__year">${movie.Year}</p>
            </div>
            </div>
          </div>
        </div>
    </div>`
}






































/*

const searchBar = document.getElementById('search');
const searchIcon = document.querySelector('.search__icon')
let movieList = [];

async function fetchMovies(query) {
  if (query.length < 3) return; 
  
  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=46b68acf&s=${query}`);
    const data = await response.json();
    movieList = data.Search || [];

    const movieListElement = document.querySelector(".movie-list");
    movieListElement.innerHTML = movieList.map((movie) => renderMovies(movie)).join("");
  } catch (error) {
    console.error("Error fetching movie data:", error);
  }
}


searchBar.addEventListener("keyup", async (e) => {
  fetchMovies(e.target.value.trim());
});

searchIcon.addEventListener("click", () => {
  fetchMovies(searchBar.value.trim());
});


async function main() {
  const response = await fetch(`https://www.omdbapi.com/?apikey=46b68acf&s=marvel`);
  const data = await response.json();
  movieList = data.Search;
  
  const movieListElement = document.querySelector(".movie-list");
  movieListElement.innerHTML = movieList.map(
    (movie) => 
      renderMovies(movie)
  ).join("");
}

main();

function renderMovies(movie) {
  return `<div class="container">
        <div class="row">
          <div class="movie-list">
            <div class="movie__wrapper">
              <div class= "movie__container">
              <img src="${movie.Poster}" class="movie__img"/>
              </div>
              <div class="movie__wrapper--bg"></div>
              <div class="movie-info">
                <h3>${movie.Title}</h3>
                <p class="movie__type">${movie.Type}</p>
                <p class="movie__year">${movie.Year}</p>
            </div>
            </div>
          </div>
        </div>
    </div>`
}

*/
