export class Movie {
    Type: string
    Title: string
    Poster: string
    Year: string
    description: string

    constructor(Type: string, Title: string, Poster: string, Year: string, description: string) {
        this.Type = Type
        this.Title = Title
        this.Poster = Poster
        this.Year = Year
        this.description = description
    }

}