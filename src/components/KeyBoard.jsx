import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setcharacter } from "../features/audioSlice";

export default function KeyBoard(props) {

    const dispatch = useDispatch()
    useEffect(() => {

        function handleKeyDown(event) {
            const key = event.key.toUpperCase()
            dispatch(setcharacter(key))
            props.handleEvent(key)
        }

        function handleKeyUp() {
            dispatch(setcharacter(""))
        }

        window.addEventListener("keydown", handleKeyDown)
        window.addEventListener("keyup", handleKeyUp)

        return () => {
            window.removeEventListener("keydown", handleKeyDown)
            window.removeEventListener("keyup", handleKeyUp)
        }
    })
    return
}