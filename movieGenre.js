class Movie {
    constructor(){
        this.uuid = "";
        this.title = "";
        this.year = "";
        this.genres = null;
        this.related = [];   
    }
   addRelatedMovie(m){
        if(m instanceof Movie){
            related.push(m);
            return true;
        }
        return false;
    }
    setGenre(g){
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
        this.name = "";
        this.movies = [];
    }
    addMovie(m){
        if(m instanceof Movie){
            movies.push(m);
            return true;
        }
        return false;
    }
}


