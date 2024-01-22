let movieCardTemplate = document.querySelector('.movie-card-template').content;
let movieBody = document.querySelector('.movie-body');
let newMovieTemplate = new DocumentFragment()


function renderMovie(film) {



    for (let i = 0; i < film.length; i++) {

        // Htmldagi cardni clone qilib oldik
        let cloneMovieTemplate = movieCardTemplate.cloneNode(true);


        let cardImg = cloneMovieTemplate.querySelector('.movie-card-img');
        cardImg.src = film[i].poster


        let cardTitle = cloneMovieTemplate.querySelector('.movie-card-body-title');
        cardTitle.innerHTML = film[i].title;

        let cardOverview = cloneMovieTemplate.querySelector('.movie-card-body-overview');

        cardOverview.innerHTML = film[i].overview.slice(0,100);
      
        let movieCardBodyGenres = cloneMovieTemplate.querySelector('.movie-card-body-genres');

        movieCardBodyGenres.innerHTML = film[i].genres

        movieBody.appendChild(cloneMovieTemplate)


    }
}

renderMovie(films)


let searchBtn = document.querySelector('.search-btn')
let searchInput = document.querySelector('.search-input');


searchBtn.addEventListener('click',()=>{
    searchInput.classList.toggle('input-togle');
})