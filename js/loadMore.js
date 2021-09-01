
import { moviesApi, } from "./app.js";
export const button_loadMore = document.getElementById("button_loadMore"); 
console.log('button_loadMore', button_loadMore)

const app = {
    page: 1,
  };


export function loadNewData() {
    moviesApi(pageNumber());
  }
  
  if(button_loadMore) {
    button_loadMore.addEventListener('click',loadNewData)
  }
 
  
  
  export function pageNumber() {
    app.page = app.page + 1;
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=07b870c21213848a4a5f99985d44b475&language=en-US&page=${app.page}
  `;
    return apiUrl;
  }