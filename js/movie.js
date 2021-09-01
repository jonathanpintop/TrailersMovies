// // Variables
import {
  mainImg,
  getColor,
  form,
  formInput,
  buttonBanner,
  button_loadMore,
  searchInfo,
} from "./app.js";
const movieCardContainer = document.getElementById("movieSelected-container");
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
      console.log("data movies", data);
      showMovieSelected(data);
    });
}

function showMovieSelected(data) {
  const { title, poster_path, vote_average, overview, release_date, id } = data;

  let date = new Date(release_date);

  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();

  const monthFormatReady = monthFormat(month);

  function monthFormat(month) {
    if (month === 1) {
      return "Jan";
    }
    if (month === 2) {
      return "Feb";
    }
    if (month === 3) {
      return "Mar";
    }
    if (month === 4) {
      return "Apr";
    }
    if (month === 5) {
      return "May";
    }
    if (month === 6) {
      return "Jun";
    }
    if (month === 7) {
      return "Jul";
    }
    if (month === 8) {
      return "Aug";
    }
    if (month === 9) {
      return "Sept";
    }
    if (month === 10) {
      return "Oct";
    }
    if (month === 11) {
      return "Nov";
    }
    if (month === 12) {
      return "Dic";
    }
  }

  const hideBanner = (document.getElementById("welcome-banner").style.display =
    "none");

  const movieSelectedCard = document.createElement("div");

  const imgSelectedUrl = mainImg + poster_path;

  movieSelectedCard.innerHTML = ` 
  <div id= "movie__selected_container">
<img data-id= "${id}" class="movie__img--selected"  id="movie__img--selected"  src="${
    mainImg + poster_path
  }" alt="${title}">


<div class= "infoMovie__wrapper"  id= "infoMovie__wrapper">
  <h2 class= "infoMovie__title"  id= "infoMovie__title">${title}<span class="infoMovie__title--span">(${year})</span></h2>
  <p class= "infoMovie__date"  id= "infoMovie__date">${monthFormatReady}/${day}/${year}</p>

  <span class="${getColor(
    vote_average
  )}__movie--selected">${vote_average}</span>

  <h3 class="overview__title">Overview</h3>
  




  <p class= "infoMovie__overview"  id= "infoMovie__overview">${overview}</p>
</div>

</div>

`;

  movieCardContainer.appendChild(movieSelectedCard);

  // MOVIE COVER

  //   const movieSelectedContainer = document.getElementById('movie__selected_container');

  //  movieCardContainer.style.cssText+=`background-image:url(${imgSelectedUrl})`
  //  movieCardContainer.style.backgroundSize = "cover"
  //  movieCardContainer.style.backgroundPosition = "center"
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
