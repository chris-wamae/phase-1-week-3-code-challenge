const baseUrl = "http://localhost:3000/films";
fetch(baseUrl)
function fetchMovies(){
    fetch(baseUrl)
        .then((response) => response.json())
        .then((data) =>{
            data.forEach((films) =>{
              let li = document.createElement("li");
              li.textContent = films.title;
              li.addEventListener("click",
              (e)=>{