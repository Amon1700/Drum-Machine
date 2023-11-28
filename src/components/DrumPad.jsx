import { useSelector, useDispatch } from "react-redux"
import { updateDisplay } from "../features/audioSlice"
import KeyBoard from "./KeyBoard"

export default function DrumPad() {
    const Audio = useSelector(state => state.all.sound)
    const character = useSelector(state => state.all.character)
    const dispatch = useDispatch()

    function handleClick(id) {
        const element = document.getElementById(id)
        if (element !== null) {
            element.play()
            dispatch(updateDisplay(Audio.filter(val => val.key == id).map(val => val.description)[0]))
        }
    }

    return (
        <div className="grid grid-cols-3 grid-rows-3 gap-4 md:gap-6 lg:gap-8">
            <KeyBoard handleEvent={handleClick} />
            {Audio.map(audio => <div id={audio.description} className={`drum-pad bg-pink-700 p-4 md:p-6 lg:p-8 rounded-lg border-2 border-pink-700 
        flex justify-center items-center hover:bg-slate-700 hover:text-pink-700 ${character == audio.key && "bg-slate-700 text-pink-700"}`}
                key={audio.key} onClick={() => handleClick(audio.key)}>
                <h1 className="text-xl md:text-2xl lg:text-4xl">{audio.key}</h1>
                <audio id={audio.key} className="clip" src={audio.url}></audio>
            </div>
            )}
        </div>
    )
}