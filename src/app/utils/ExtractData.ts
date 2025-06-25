import { MovieType } from "../types/type";
import { RawMovie } from "../types/type";
export default function ExtractData(raw:RawMovie ):MovieType{
     
     
    return {
      title:raw.Title,
      year:raw.Year,
     rating:raw.imdbRating,
     poster:raw.Poster,
     plot:raw.Plot,
    genre:raw.genre,
    imdbID:raw.imdbID,
    }
}