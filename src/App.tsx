 import './App.css'

function App() {

  const copyAddress = () => {
    navigator.clipboard.writeText("nostalgicraft.com");
  }

  return (
    <div id="app">
      <section id="title-container">
        <div className='container-img' id="title-container-img"></div>
        <h1 id="title" className="fantasy">Nostalgicraft</h1>
        <a id="scroll-down-btn" href="#story"></a>
      </section>
      <div id="content">
        <section className="content-section" id="story">
          <div className="section-content">
            <h2 style={{marginTop: "0px"}}>Welcome, wanderers!</h2>
            <p>
              Welcome, to the world of <b>Nostalgicraft</b>. <br />
              Welcome, to a place where creativity flourishes and a world full of possibilities emerges.
              Each new region of the vast world you travel feels like a marvelous dream that never ends.
              Every block holds potential. Every resource is a tool for creation. From the tallest mountains to the deepest caves, everything in this world is yours to shape.
              What are you going to build? What marks will you leave behind that make the sprouting land even more admirable than anyone would have thought?<br />
              But be careful of the dark. As calm as the world looks, things change when the protecting sun sets and the hazardous night draws in.
              Monsters will lurk in the shadows casted by the moon no matter how safe you feel and you should strive hard to survive.
              Come and experience this adventure with your own eyes, be creative, bring your friends, have fun!<br />
              Yours sincerely<br />
              <b>Felix</b>
            </p>
          </div>
        </section>
        <section id="address-container">
          <div className='container-img' id="address-container-img"></div>
          <button onClick={copyAddress} id="address" className="fantasy">nostalgicraft.com</button>
          <p className="fantasy">1.21.4</p>
        </section>
        <section className="content-section">
          <div className="section-content">
            <h2>Technical</h2>
            <p>You can join the server without mods at any time</p>
            <p>However, I've created a Quality-of-Life Modpack for enhancing your immersive gameplay :)</p>
            <div id="mod-container">
              <a target='_blank' href="/assets/Nostalgicraft.zip">Mods .zip</a>
              <a target='_blank' href="/assets/Nostalgicraft-CurseForge.zip">CurseForge Modpack</a>
            </div>
          </div>
        </section>
        <section style={{"minHeight": "200px", "position": "relative"}}>
          <div className='container-img' id="spacing-img"></div>
        </section>
        <section className="content-section">
          <div className="section-content">
            <h2>Rules</h2>
            <ol>
              <li>Don't grieve other buildings</li>
              <li>Don't kill others intentionally</li>
              <li>Don't be mean</li>
              <li>Don't scream around</li>
              <li>Be creative. Nostalgicraft is more than just survival. The first goal is NOT having full enchanted armor!</li>
              <li>Have fun!</li>
            </ol>
          </div>
        </section>
        <section style={{"position": "relative"}}>
          <div className='container-img' id="end-img"></div>
        </section>
      </div>
    </div>
  );
}

export default App
