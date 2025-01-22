// api key = 46b68acf
// http://www.omdbapi.com/?i=tt3896198&apikey=46b68acf

const searchBar = document.getElementById('search')
const movieList = []
console.log(searchBar)

searchBar.addEventListener('keyup', (e) => {
  console.log(e.target.value);
  movieList.filter(user => {
    
  })
});

async function main() {
  const search = "marvel"
  const users = await fetch(
    `http://www.omdbapi.com/?apikey=46b68acf&s=${search}`
  );
  // displayData(users);
  
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

// function displayData(data) {
//   const resultsList = document.getElementById('results-list');
//   resultsList.innerHTML = ''; // Clear existing results


//   data.forEach(item => {
//     const li = document.createElement('li')
//     li.textContent = item.Title;
//     li.dataset.id = item.id;
//     resultsList.appendChild 
//   });
// }

// function filterData() {
//   const search = document.getElementById('#search__input').value.toLowerCase()
//   const listItems = document.querySelectorAll('#results-list li');

//   listItems.forEach(item => {
//     const text = item.textContent.toLowerCase();
//     if (text.includes(users)) {
//       item.classList.remove('hidden');
//     } else {
//       item.classList.add('hidden');
//     }
//   })
// }
main();
