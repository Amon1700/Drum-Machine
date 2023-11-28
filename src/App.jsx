import DrumPad from './components/DrumPad'
import Display from './components/Display'

function App() {
  return (
    <div id="drum-machine" className="bg-slate-800 h-screen flex flex-col justify-center items-center">
      <Display />
      <DrumPad />
    </div>
  )
}

export default App
