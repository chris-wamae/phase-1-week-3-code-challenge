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
              (e)=>{let buttonContent =
                document.querySelector("button#buy-ticket")
                buttonContent.textContent = "Buy Tickets"
                    let title =
                 document.getElementById("movie-title");
                    title.textContent =
                films.title;
                let img =
                document.getElementById("movie-poster");
                   img.src =
                films.poster;
                let showTime =
                document.getElementById("showtime");
                  showTime.textContent =
                films.showtime;
                let runTime =
                document.getElementById("runtime");
                  runTime.textContent =
                `${films.runtime} Minutes`;