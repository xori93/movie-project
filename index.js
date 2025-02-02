// api key = 46b68acf
// http://www.omdbapi.com/?i=tt3896198&apikey=46b68acf

const searchBar = document.getElementById('search');
const searchMovie = document.querySelector('.search__icon');
const filterDropdown = document.getElementById("filter");
const searchForm = document.getElementById('form')
let movieList = [];




async function main(filter) {
  if (filterOption === "LATEST_MOVIE") {
    console.log(filter)
    // console.log(filterOption)
  }

  const response = await fetch(`https://www.omdbapi.com/?apikey=46b68acf&s=marvel`);
  const data = await response.json();
  movieList = data.Search;
  
  const movieListElement = document.querySelector(".movie-list");
  movieListElement.innerHTML = movieList.map(
    (movie) => 
      renderMovies(movie)
  ).join("");
}


async function search() {
  const searchText = searchBar.value;
  const response = await fetch(`https://www.omdbapi.com/?apikey=46b68acf&s=${searchText}`);
  const data = await response.json();
  movieList = data.Search;
  
  const movieListElement = document.querySelector(".movie-list");
  movieListElement.innerHTML = movieList.map(
    (movie) => 
      renderMovies(movie)
  ).join("");
}

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault()
 await search()
})

searchMovie.addEventListener('click', async() => {
 await search()
});

// searchBar.addEventListener('keyup', async (e) => {
//   const search = e.target.value.trim();
//   if (search.length >= 3) {
//     const response = await fetch(`http://www.omdbapi.com/?apikey=46b68acf&s=${search}`);
//     const data = await response.json();
//     movieList = data.Search || [];

//     const movieListElement = document.querySelector(".movie-list");
//     movieListElement.innerHTML = movieList.map(
//       (movie) => 
//         renderMovies(movie)
//     ).join("");
//   }



function filterMovie(event) {

  const filterOption = event.target.value
  
  renderMovies(event.target.value)

    // renderMovies(event.target.value)
  
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