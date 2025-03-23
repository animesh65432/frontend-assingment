import React from 'react'
import { Button } from "./components/ui/button"

const App: React.FC = () => {
  return (
    <div className='flex h-[100vh] w-[100vw] justify-center items-center'>
      <div>
        <Button >Click Me</Button>
      </div>
    </div>
  )
}

export default App