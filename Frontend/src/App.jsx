
import { useState } from 'react';
import './App.css'
import FaceDetection from './components/FaceDetection'
import MoodSongs from './components/MoodSongs'

function App() {
  const [songs,setsongs] = useState([ ]);

  return (
    <div className='max-w-[60%] mx-auto '>
    <FaceDetection setsongs={setsongs} />
    <MoodSongs songs ={songs} />
    </div>
  )
}

export default App
