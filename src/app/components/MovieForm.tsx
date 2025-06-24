'use client'

import { useState } from "react"
import { MovieType } from "../types/type";
import ExtractData from "../utils/ExtractData";
import SkeletonMovieCardUI from "./SkeletonMovieCardUi";

export default function MovieForm(){
     const [name,setName] = useState("");
     const [details,setDetails]=useState<MovieType>();
     const [loadingState,setLoadingState] = useState<boolean>(false);



  async  function handleSubmit(e:React.FormEvent){
      e.preventDefault();
      setLoadingState(true);
      try{
      const movieName=name;
      const data= await fetch(`api/movie?title=${movieName}`)
      const rawdata = await data.json();
     const movieDetail:MovieType =  ExtractData(rawdata); 
     setDetails(movieDetail) 
      }catch(error){
        console.log("error  fetching movie  " , error)

      }
      setLoadingState(true)
    }
    return (
        <div>
            <form 
               onSubmit={handleSubmit}
            >
               <input type="text" placeholder="batman" value={name} onChange={(e)=>setName(e.target.value)} className="" />
               <button type="submit" className="bg-white text-black px-4 py-2 rounded-2xl hover:bg-gray-300">Send</button>
            </form> 
            <div>
                {loadingState&& <SkeletonMovieCardUI />}
                {details&& !loadingState && (
                    <div>
                           <div>
                            <img src={details.poster}  alt={details.title} />
                               
                           </div>
                       <div> 
                          <h1> Name: {details.title}</h1> 
                          <h1> Year of release{details.year}</h1>
                          <h1> Rating : {details.rating}</h1>
                          <h1>imdb id : {details.imdbID}</h1>
                       </div>
                          <div>
                            <h1 className="text-gray-300">{details.plot}</h1>
                          </div>
                    </div>
                )}
            </div>
        </div>
    )
}