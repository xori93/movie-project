// api key = 46b68acf
// http://www.omdbapi.com/?i=tt3896198&apikey=46b68acf

const searchBar = document.getElementById('search');
let movieList = [];

async function main() {
  const response = await fetch(`http://www.omdbapi.com/?apikey=46b68acf&s=marvel`);
  const data = await response.json();
  movieList = data.Search;
  
  const movieListElement = document.querySelector(".movie-list");
  movieListElement.innerHTML = movieList.map(
    (movie) => 
      `<div class="container">
        <div class="row">
          <div class="img__wrapper">
            <img src="${movie.Poster}" 
            alt="Image">
            <div class="movie-info">
              <h3>${movie.Title}</h3>
              <p>${movie.Type}</p>
              <p>${movie.Year}</p>
            </div>
          </div>
        </div>
    </div>`
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
        `<div class="container">
          <div class="row">
            <div class="img__wrapper">
              <img src="${movie.Poster}" 
              alt="Image">
              <div class="movie-info">
                <h3>${movie.Title}</h3>
                <p>${movie.Type}</p>
                <p>${movie.Year}</p>
              </div>
            </div>
          </div>
      </div>`
    ).join("");
  }
});

main();
