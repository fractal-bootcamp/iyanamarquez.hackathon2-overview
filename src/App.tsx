import { useState } from 'react'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='h-screen relative'>
        <Header />
      </section>
      <section>
        <h1 className='h-screen text-white'>hello0000</h1>
      </section>
      <section>
        <h1>hello</h1>
      </section>
      <section>
        <h1>hello</h1>
      </section>

    </>
  )
}

export default App
