// TMDB getting information  from the api

export const apiKey = "07b870c21213848a4a5f99985d44b475";
const mainUrl = "https://api.themoviedb.org/3";
const apiUrl =
  mainUrl + "/discover/movie?sort_by=popularity.desc&api_key=" + apiKey;
export const mainImg = "https://image.tmdb.org/t/p/w500";
const mainContainer = document.getElementById("movies-container");

// Form variables
export const form = document.getElementById("form__banner");
export const formInput = document.getElementById("form__banner-search");
export const buttonBanner = document.getElementById("button_banner");

// Form EventListener
export const formEventListener = form.addEventListener("submit", searchInfo);

//Functions
export function searchInfo(e) {
  e.preventDefault();
  const userSearch = formInput.value;

  const searchApiUrl =
    mainUrl + "/search/movie?api_key=" + apiKey + "&query=" + userSearch;

  searchApi(searchApiUrl);

  function searchApi(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        clearHtml();

        showMovies(data.results);
      });
  }
}

moviesApi(apiUrl);

function moviesApi(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showMovies(data.results);
    });
}

function showMovies(data) {
  data.forEach((movie) => {
    const { title, poster_path, vote_average, overview, release_date, id } =
      movie;

    const movieId = id;

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

    const movieCard = document.createElement("div");
    movieCard.classList.add("movie");
    movieCard.innerHTML = `

            <a  title="${title}">
              <img data-id= "${id}" class="movie__img"  src="${
      mainImg + poster_path
    }" alt="${title}">
            </a>

            <div class="movie__info">
              <h3 class="movie__info--title" data-id= "${movieId}">${title}</h3>
              <span class="${getColor(vote_average)}">${vote_average}</span>
            </div>
            <div class="movie__date">
             ${monthFormatReady} ${day},${year}
            </div>
            `;
    mainContainer.appendChild(movieCard);
    const movieImg = document.querySelectorAll(".movie__img");
    const movieTitle = document.querySelectorAll(".movie__info--title");

    movieImg.forEach((item) => {
      item.addEventListener("click", movieSelected);
    });
  });
}

export function getColor(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

export function movieSelected(e) {
  const movieId = e.target.dataset.id;
  window.location = `movie.html?id=${movieId}`;
}

function clearHtml() {
  mainContainer.innerHTML = "";
}
