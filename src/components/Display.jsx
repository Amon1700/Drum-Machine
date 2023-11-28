import { useSelector } from "react-redux"

export default function Display() {

    const display = useSelector(state => state.all.display)

    return (
        <div id="display" className="bg-indigo-600 m-4 md:m-6 lg:m-8 rounded-lg flex justify-center items-center 
        w-[150px] md:w-[200px] lg:w-[300px] h-[50px] md:h-[70px] lg:h-[90px] text-white ">
            <h1 className="text-xl md:text-2xl lg:text-4xl">{display}</h1>
        </div>
    )
}