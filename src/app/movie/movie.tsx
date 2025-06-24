
import { useRouter } from "next/navigation"
import MovieForm from "../components/MovieForm";
export default function movie(){
    const router = useRouter();
    return (
        <div>
            <div>
            <button className="bg-green-700 hover:bg-green-800" onClick={()=>router.push('/')}>Back</button>
            </div>
            <div>
                <MovieForm/>
            </div>
        </div>

    )
}