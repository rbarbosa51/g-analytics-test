import { Link } from "react-router-dom";

export default function Home(){
    return (
        <div className="h-screen bg-lime-400 flex flex-col items-center">
            <h1 className="text-5xl text-center">Home</h1>
            <Link to={'second'}>Second</Link>
        </div>
    )
}
