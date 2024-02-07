import featuredMovies from "./featuredMovies.js";

const apiKey = "4d4c0e2f";
const movieDetailsContainer = document.getElementById("moviedetails");
const searchInput = document.getElementById("searchinput");

window.addEventListener("scroll", function () {
  document
    .querySelector("header")
    .classList.toggle("scrolled", window.scrollY > 0);
});

window.addEventListener("load", fetchFeaturedMovies);

function fetchFeaturedMovies() {
  featuredMovies.forEach((movieID) => {
    fetch(`https://www.omdbapi.com/?i=${movieID}&apikey=${apiKey}`)
      .then((res) => res.json())
      .then((movieDetails) => {
        updateHTML(movieDetails);
      });
  });
}

searchInput.addEventListener("input", fetchingMovieInfo);

function fetchingMovieInfo() {
  if (searchInput.value) {
    fetch(`https://www.omdbapi.com/?s=${searchInput.value}&apikey=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        movieDetailsContainer.innerHTML = "";

        if (data.Search) {
          data.Search.forEach((movie) => {
            fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${apiKey}`)
              .then((res) => res.json())
              .then((movieDetails) => {
                console.log(movieDetails);
                updateHTML(movieDetails);
              });
          });
        }
      });
  } else {
    fetchFeaturedMovies();
  }
}

function updateHTML(movie) {
  if (movieDetailsContainer) {
    movieDetailsContainer.innerHTML += `<div class="movieunit" data-id="${movie.imdbID}">
                                          <div class="movieposter">
                                            <img src="${movie.Poster}"/>                                            
                                          </div>
                                          <div class="movietext">
                                            <h3>${movie.Title}</h3>
                                            <p>Year: ${movie.Year}</p>
                                            <p>Genre: ${movie.Genre}</p>
                                            <p>Director: ${movie.Director}</p>
                                            <p>Plot: ${movie.Plot}</p>                                        
                                          </div>
                                          <div class="addbtn">
                                          <button id="addToListBtn" data-add=${movie.imdbID}>Add to Watchlist</button>
                                 
                                          </div>
                                      </div>`;
  }
}

/* ADD TO WATCHLIST PART*/

document.addEventListener("click", function (e) {
  if (e.target.id === "addToListBtn") {
    handleAddToWatchList(e.target.dataset.add);
  }
  if (e.target.id === "RemoveBtn") {
    handleRemoveFromTheList(e.target.dataset.remove);
  }
});

const watchlistDetailsContainer = document.getElementById("watchlistdetails");

document.addEventListener("DOMContentLoaded", function () {
  const storedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
  storedWatchlist.forEach((movieId) => {
    updateWatchlistHTML(movieId);
  });
});

function handleAddToWatchList(movieId) {
  console.log("item added", movieId);

  const storedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

  if (!storedWatchlist.includes(movieId)) {
    storedWatchlist.push(movieId);
    localStorage.setItem("watchlist", JSON.stringify(storedWatchlist));

    updateWatchlistHTML(movieId);

    const addButton = document.querySelector(
      `#addToListBtn[data-add="${movieId}"]`
    );
    if (addButton) {
      addButton.disabled = true;
      addButton.style.backgroundColor = "#161617cc";
      addButton.style.color = "#fc0";
      addButton.textContent = "In your watchlist";
    }
  }
}

function handleRemoveFromTheList(movieId) {
  console.log("item removed", movieId);

  const storedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
  const updatedWatchlist = storedWatchlist.filter((id) => id !== movieId);
  localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));

  const movieElement = document.querySelector(`[data-id="${movieId}"]`);
  if (movieElement) {
    movieElement.remove();
  }
}

function updateWatchlistHTML(movieId) {
  fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=${apiKey}`)
    .then((res) => res.json())
    .then((movie) => {
      if (movie && movie.Title) {
        watchlistDetailsContainer.innerHTML += `<div class="watchlistmovieunit" data-id="${movie.imdbID}">
                                          <div class="movieposter">
                                            <img src="${movie.Poster}"/>                                            
                                          </div>
                                          <div class="watchlistmovietext">
                                            <h3>${movie.Title}</h3>
                                            <p>Year: ${movie.Year}</p>
                                            <p>Genre: ${movie.Genre}</p>
                                            <p>Director: ${movie.Director}</p>      
                                            <p>Plot: ${movie.Plot}</p>
                                            </div>
                                          <div class="addbtn">
                                          <button id="RemoveBtn" data-remove=${movie.imdbID}>Remove from list</button>
                                          </div>
                                      </div>`;
      }
    });
}
