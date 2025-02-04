const searchBar = document.getElementById('search');
const searchMovie = document.querySelector('.search__icon');
const filterDropdown = document.getElementById("filter");
const searchForm = document.getElementById('form')
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


// The search function will be async
async function search() {
  // store the value of the input
  const searchText = searchBar.value;
  // make an api call. and show the value of searchText
  const response = await fetch(`https://www.omdbapi.com/?apikey=46b68acf&s=${searchText}`);
  // make the api frontend
  const data = await response.json();
  // store the movielist in data
  movieList = data.Search;
  
  const movieListElement = document.querySelector(".movie-list");
  movieListElement.innerHTML = movieList.map(
    (movie) => 
      renderMovies(movie)
  ).join("");
}

// add event listener to the form 
searchForm.addEventListener('submit', async (event) => {
  // prevent the page from auto re-load
  event.preventDefault()
  // call the search funtion to show the movies
 await search()
})

// when user click the search, show the searched movie
searchMovie.addEventListener('click', async() => {
 await search()
});


function filterMovie(event) {

  const filterOption = event.target.value;
  let filteredMovies = [...movieList];
  
  if (filterOption === "LATEST_MOVIE") {
    filteredMovies.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
  } else if (filterOption === "OLDEST_MOVIE") {
    filteredMovies.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
  }
  const movieListElement = document.querySelector(".movie-list");
  movieListElement.innerHTML = filteredMovies.map(
    (movie) => renderMovies(movie)
  ).join("");  
}

filterDropdown.addEventListener('change', filterMovie);

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