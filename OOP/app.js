//const movieGenre = require('./movieGenre').movieGenre;
function myUtil( url ) {
    var ajax = new XMLHttpRequest();
    ajax.open( 'GET', url, false );
    ajax.onreadystatechange = function () {
        var script = ajax.response || ajax.responseText;
        if (ajax.readyState === 4) {
            switch( ajax.status) {
                case 200:
                    eval.apply( window, [script] );
                    console.log("script loaded: ", url);
                    break;
                default:
                    console.log("ERROR: script not loaded: ", url);
            }
        }
    };
    ajax.send(null);
}

myUtil('util.js');

const genres = [];
const movies = [];

function createGenre(){
    var n = document.getElementById("name").value;
    var g = new Genre();
    g.name = n;
     
    enqueue(genres, g);

    document.getElementById("createGenre").reset(); 
    
    dropmenu();
    var genreNames = []; 
    for (var i = 0; i < genres.length; i += 1) {
        genreNames[i] = genres[i].name;
    }
    
    JSsort(genreNames,true); 
    for (var i = 0; i < genreNames.length; i += 1) {
        var gr = new Genre(); 
        gr.name = genreNames[i]; 

        genres[i] = gr; 
    }

    console.log(genres);
    display();
    

}

 

function createMovie(){
    var uuid = document.getElementById("uuid").value;
    var title = document.getElementById("title").value;
    var year = document.getElementById("year").value;
    var listed = document.getElementById("genres");
    var genre = listed.options[listed.selectedIndex].value;
    let gen = JSON.parse(genre);

    gen = new Genre();
    gen.name = genre;
    let movie = new Movie();
    movie.uuid = uuid;
    movie.title = title;
    movie.year = year;
    movie.setGenre(gen);
    console.log(movie);
    
}
function dropmenu(){

var gen = document.getElementById("genres");
    
        let g = genres[genres.length-1];
        var e = document.createElement("option");
        //e.value = g.name;
        e.innerHTML = g.name;
        var stringobj = flatten(g);
        e.value = stringobj;

        gen.appendChild(e);
}

/*function displayGenres(){
    var gen = document.getElementById("genreList");

    for(var i=0; i<genres.length; i++){
        var g = genres[i];
        var e = document.createElement("li");
        
    }
    let h = new Genre();
    h.setName("Action");
    genres.push(h);

}*/

function display(){
    for(i=0; i<genres.length; i++){
        console.log(genres[i].name);
    }
}

function test(){
    console.log($('#genres').attr('value'));
}

//display();
//displayGenres();
