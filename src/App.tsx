import './index.css'

function App() {
  const fractalLink = 'https://fractaltech.xyz'
  const SeekhanaLink = 'https://seekhana.app'
  const dreamDaimonLink = 'https://dream-daimon.net'
  const iyanaaiLink = 'https://iyanaai.netlify.app'
  const forgeMLLink = 'https://www.npmjs.com/package/forge-ml'
  const eternalPlusLink = 'https://eternal.plus/'

  return (
    <>
      {/* Page 1 */}
      <section className='w-screen relative'>
        <img src="/assets/images/page1.jpg" className='w-full h-full object-contain'></img>
        {/* eternal plus link */}
        <a
          href={eternalPlusLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-[72%] top-[36.5%] w-[14.4%] h-[4.5%] bg-transparent hover:bg-white hover:bg-opacity-20 transition-all duration-300 "
          aria-label="eternal plus"
        >
        </a>
      </section>
      {/* Page 2 */}
      <section className='w-screen relative'>
        <img src="/assets/images/page2.jpg" className='w-full h-full object-contain'></img>
        {/* seekhana link */}
        <a
          href={SeekhanaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-[80.7%] top-[25.5%] w-[16.2%] h-[4%] bg-transparent hover:bg-white hover:bg-opacity-20 transition-all duration-300 "
          aria-label="seekhana"
        >
        </a>
        {/* dream daimon link */}
        <a
          href={dreamDaimonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-[74.8%] top-[49.5%] w-[21.7%] h-[4%] bg-transparent hover:bg-white hover:bg-opacity-20 transition-all duration-300 "
          aria-label="dream daimon"
        >
        </a>
      </section>
      {/* Page 3 Projects*/}
      <section className='w-screen  relative'>
        <img src="/assets/images/page3.jpg" className='w-full h-full object-contain'></img>
        {/* forgeml link */}
        <a
          href={forgeMLLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-[6%] top-[94%] w-[32.1%] h-[3%] bg-transparent  hover:bg-white hover:bg-opacity-20 transition-all duration-300 "
          aria-label="Visit example site"
        >
        </a>
        {/* iyanaai link */}
        <a
          href={iyanaaiLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-[25.9%] top-[68%] w-[21.7%] h-[5%] bg-transparent hover:bg-white hover:bg-opacity-20 transition-all duration-300 "
          aria-label="iyanaai"
        >
        </a>
      </section>
      {/* Page 4 */}
      <section className='w-screen relative'>
        <img src="/assets/images/page4.jpg" className='w-full h-full object-contain' alt="Page 4" />
        <a
          href={fractalLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-[9%] top-[75%] w-[19%] h-[3%] bg-transparent hover:bg-white hover:bg-opacity-20 transition-all duration-300 "
          aria-label="fractal"
        >
        </a>
        <a
          href={fractalLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-[70%] top-[82%] w-[20%] h-[5%] bg-transparent hover:bg-white hover:bg-opacity-30 transition-all duration-300"
          aria-label="iyanaai"
        >
        </a>
      </section>


    </>
  )
}

export default App
