import { useRouter } from "next/navigation"

export default function home(){
    const router = useRouter()
  return(

    <div>
        <div>
          <h1 className="text-green-700 text-bold">MovieFinder</h1>
          <p className="text-">Get the information about your favourite movies in a click of a button</p>

        </div>
        <button onClick={()=>router.push('/movie')}>Get started</button>
    </div>
  )
}