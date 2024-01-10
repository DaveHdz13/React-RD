import './App.css'
import Card from './components/card/Card'

import ship01 from './assets/img/stability.png'
import ship02 from './assets/img/stability_01.png'
import ship03 from './assets/img/spaceship.jpg'


function App() {

  return (
    <>
      <main>
        <Card 
          image={ship01}
          title="Tech-672"
          description="The Stellar Voyager, a pinnacle of space exploration, boasts a sleek, meta-material-coated exterior for protection and enhanced aerodynamics. Its fusion-powered engine enables unparalleled speeds, driven by a limitless and clean energy source."
        />
        <Card
          image={ship02}
          title="Tech-900"
          description="The Nublar, a cutting-edge spacecraft, embodies the epitome of futuristic design and functionality. Named after the lush and dynamic fictional island in the works of science fiction, this sleek vessel boasts a gleaming metallic exterior with a signature luminescent blue trim."
        />
        <Card
          image={ship03}
          title="Tech-012"
          description="The Big-G spaceship is a colossal marvel of interstellar engineering, embodying sheer size and power in the cosmic expanse. This behemoth of a spacecraft features an imposing, angular design, with massive hull plating hinting at its formidable strength. "
        />
      </main>
    </>
  )
}

export default App
