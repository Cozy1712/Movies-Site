const APILINK = 'https://api.themoviedb.org/3/movie/550?api_key=07484714ff3cb0562d3e9c1e652ad1db';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = "https://api.themoviedb.org/3/movie?&api_key=07484714ff3cb0562d3e9c1e652ad1db&query=";



const main = document.getElementById('section')
const form = document.getElementById('form')
const search = document.getElementById('query')


returnMovies(APILINK)

function returnMovies(url){ fetch(url).then(res => res.json())
    .then(function(data)
    {   
        data.result.forEach(element => {
            /////creating a div tag
            const div_card = document.createElement('div');
            ///seting the class attttribute
            div_card.setAttribute('class', 'card')

            const div_col = document.createElement('div');
            div_col.setAttribute('class', 'col')

            const div_row = document.createElement('div');
            div_row.setAttribute('class', 'row')


            const image = document.createElement('img');
            image.setAttribute('class', 'thumbnail')
            image.setAttribute('id', 'image')


            const title = document.createElement('h3');
            title.setAttribute('id', 'title')
            const center = document.createElement('center');
          ///////////////////////////////////////////////////////////////////////////

          title.innerHTML = `${element.title}`;
          image.src = IMG_PATH + element.poster_path;
         ///// APPENDCHID==adding element UNDER/INSIDE another element
          center.appendChild(image);
          div_card.appendChild(center,title);
          div_col.appendChild(div_card);
            div_row.appendChild(div_col);
          
          main.appendChild(div_row);
        });

    })

}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';
   

    ///replace the movie
    const searchItem = search.value;
    
    if (searchItem){
        returnMovies(SEARCHAPI + searchItem)
        search.value = "";
    }
});