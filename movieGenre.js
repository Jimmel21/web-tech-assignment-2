class Movie {
    constructor(){
        uuid = "";
        title = "";
        year = "";
        genres = null;
        related = new Movie();   
    }
    addRelatedMovie(Movie m){
        if(m instanceof Movie){
            related.push(m);
            return true;
        }
        return false;
    }
    setGenre(Genre g){
        if(g instanceof Genre){
            genres = g;
            g.addMovie(this);
            return true;
        }
        return false;
    }

}

class Genre{
    constructor(){
        name = "";
        movies = new Movie();
    }
    addMovie(Movie m){
        if(m instanceof Movie){
            movies.push(m);
            return true;
        }
        return false;
    }
}