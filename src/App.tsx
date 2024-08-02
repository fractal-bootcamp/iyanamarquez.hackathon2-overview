import './index.css'

function App() {

  return (
    <>
      <section className='h-screen'>
        <h1>hello</h1>
        {/* <embed src="src/assets/again/page1copy.pdf" type="application/pdf" /> */}

        {/* <iframe
          className='pdf-container'
          src="src/assets/again/page1copy.pdf"
          // style={{ width: '100%', height: '100vh', border: 'none' }}
          title="PDF Viewer"
        ></iframe> */}
        {/* <embed
          src="src/assets/again/page1copy.pdf"
          type="application/pdf"
          height="100%"
          width="100%"
        ></embed> */}
        <iframe
          src="src/assets/again/page1copy.pdf"
          style={{ width: '100%', height: '100vh', border: 'none' }}
          title="PDF Viewer"
          allow="fullscreen"
        ></iframe>
      </section>


    </>
  )
}

export default App
