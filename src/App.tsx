import React, { useState } from 'react'
import { Header, Add, Hero, Companies, Footer } from "./components"

const App: React.FC = () => {
  const [add, closeadd] = useState<boolean>(false)

  const oncloseadd = () => {
    closeadd((prev) => !prev)
  }
  return (
    <div className={`flex flex-col h-[100vh] w-[100vw] ${add ? "gap-5" : "gap-0"}`}>
      <Header />
      {!add &&
        <Add oncloseadd={oncloseadd} />}
      <Hero />
      <Companies />
      <Footer />
    </div >
  )
}

export default App