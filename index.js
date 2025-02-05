const searchBar = document.getElementById('search');
const searchMovie = document.querySelector('.search__icon');
const filterDropdown = document.getElementById("filter");
const searchForm = document.getElementById('form')
let movieList = [];

// when the page loads I want to show marvel movies
// Call the function that does this job
main();

// This function will get all the marvel movies and show them 
async function main() {
  // make an api call to get the data. 
  // create and endpoint to get the data to marvel movies
  const response = await fetch(`https://www.omdbapi.com/?apikey=46b68acf&s=marvel`);
  // wait for the response for the api.
  // convert response into json data
  const data = await response.json();
  // I have the data let me look at it
  // console.log(data);
  // The data I want is in an array called search
  // Store that in my movie list.
  movieList = data.Search;
  // console.log(movieList)
  
  // I want to show these movies on the webpage.
  // Where do they go?
  // Target the movie list element on the page.
  const movieListElement = document.querySelector(".movie-list");
  // I want to create a movie card for each element in the array.
  movieListElement.innerHTML = movieList.map(
    (movie) => 
      renderMovies(movie)
  ).join("");


// step by step code
  // let movieCards = movieList.map(
  //   (movie) => 
  //     renderMovies(movie)
  // );
  // console.log(movieCards.join(""))
    // This is the html that goes on the page
  // movieListElement.innerHTML = movieCards.join("")
}


// The search function will be async
async function search() {
  // I need to know which movie to search for
  // store the value of the input
  const searchText = searchBar.value;
  // console.log(searchText);
  
  // I want to get the movies that match searchText.
  // make an api call using this data in the endpoint.
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


// The function is createing HTML for a single movie.
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