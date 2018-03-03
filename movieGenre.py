class Movie:
    uuid = ""
    title = ""
    year = ""
    genres = None
    related = []

    def addRelatedMovie(self, m):
        if isinstance(m, Movie):
            related.append(m)
            return true
        return false

    def setGenre(self, g):
        if isinstance(g, Genre):
            genres = g
            g.addMovie(self)
            return true
        return false

class Genre:
    name = ""
    movies = []

    def addMovie(self, m):
        if isinstance(m, Movie):
            movies.append(m)
            return true
        return false

