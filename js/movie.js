// // Variables
import {
  mainImg,
  getColor,
  form,
  formInput,
  buttonBanner,
  formEventListener,
  searchInfo,
} from "./app.js";
const MovieCardContainer = document.getElementById("movieSelected-container");
const trailerContainerdiv = document.getElementById("trailer-container");

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

const currentUrl = window.location.href;

const movieId = currentUrl.slice(36, 42);

const movieSelectedUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=07b870c21213848a4a5f99985d44b475`;

const movieTrailer = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=07b870c21213848a4a5f99985d44b475`;

// Functions

movieSelectedApi(movieSelectedUrl);

function movieSelectedApi(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showMovieSelected(data);
    });
}

function showMovieSelected(data) {
  const { title, poster_path, vote_average, overview, release_date, id } = data;

  const hideBanner = document.getElementById("welcome-banner").style.display = "none";

  const movieSelectedCard = document.createElement("div");

  movieSelectedCard.innerHTML = ` 


<img data-id= "${id}" class="movie__img--selected"  src="${
    mainImg + poster_path
  }" alt="${title}">


<div class= "infoMovie__wrapper"  id= "infoMovie__wrapper">
  <h2 class= "infoMovie__title"  id= "infoMovie__title">${title}</h2>

  <span class="${getColor(vote_average)}">${vote_average}</span>


  <p class= "infoMovie__overview"  id= "infoMovie__overview">${overview}</p>


</div>



`;

  MovieCardContainer.appendChild(movieSelectedCard);
}

// Show Trailer
TrailerApi(movieTrailer);

function TrailerApi(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showTrailerMovie(data);
    });
}

function showTrailerMovie(data) {
  const trailerkey = data.results[0].key;

  const trailerContainer = document.createElement("div");

  trailerContainer.classList.add("trailerContainer");
  trailerContainer.innerHTML = `
<iframe width="560" height="315" src="https://www.youtube.com/embed/${trailerkey}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

`;
  trailerContainerdiv.appendChild(trailerContainer);
}
