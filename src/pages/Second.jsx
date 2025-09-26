import { Link } from "react-router-dom";

export default function Second(){
    return (
        <div className="h-screen bg-blue-400 flex flex-col items-center">
            <h1 className="text-5xl text-center">Second</h1>
            <Link to={'/'}>Home</Link>
        </div>
    )
}
