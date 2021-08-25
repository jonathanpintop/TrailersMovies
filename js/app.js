// TMDB getting information  from the api

export const apiKey = "07b870c21213848a4a5f99985d44b475";
const mainUrl = "https://api.themoviedb.org/3";
const apiUrl = mainUrl + "/discover/movie?sort_by=popularity.desc&api_key="+apiKey;
export const mainImg = "https://image.tmdb.org/t/p/w500";
const mainContainer = document.getElementById('movies-container');


// Form variables
export const form = document.getElementById('form__banner');
export const  formInput = document.getElementById("form__banner-search")
export const buttonBanner = document.getElementById("button_banner")
