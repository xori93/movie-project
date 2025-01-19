// api key = 46b68acf
// http://www.omdbapi.com/?i=tt3896198&apikey=46b68acf

async function main() {
  const search = "marvel"
  const users = await fetch(
    `http://www.omdbapi.com/?apikey=46b68acf&s=${search}`
  );
  
  const userData = await users.json();
  console.log(userData.Search)
  const movieList = document.querySelector(".movie-list");
  movieList.innerHTML = userData.Search.map(
    (user) => 
      `<div class="container">
        <div class="row">
          <div class="img__wrapper">
            <img src="${user.Poster}" 
            alt="Image">
            <div class="movie-info">
              <h3>${user.Title}</h3>
              <p>${user.Type}</p>
              <p>${user.Year}</p>
            </div>
          </div>
        </div>
    </div>`
  ).join("");
}
main();
