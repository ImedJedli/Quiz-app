import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
            <Button color="blue">color blue</Button>
           <div className='text-3xl text-cyan-800'>hello world</div>
           <Input label="Username" crossOrigin={undefined} />
    </>
  )
}

export default App
