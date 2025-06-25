import { NextResponse } from "next/server";
import { NextRequest} from "next/server";




export async function GET (request : NextRequest){
    const {searchParams} = new URL(request.url);
    const title = searchParams.get("title");
    const api = process.env.OMDB_API_KEY;
   
    if(!title || typeof title != 'string'){
        return NextResponse.json({error:'missing or invalid title'},{status:400})
    }
   
            const res = await fetch(`https://www.omdbapi.com/?apikey=${api}&t=${title}`)
            const data = await res.json()
            return NextResponse.json(data);
            
    

}