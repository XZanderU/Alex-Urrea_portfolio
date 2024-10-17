import About from "./components/About"
import BlurBackground from "./components/BlurBackground"
import Contacts from "./components/Contacts"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Testimonial from "./components/Testimonial"

const App = () => {
  return (
    <> 
    <BlurBackground />
    <Navbar />
    <main className="antialiased overflow-x-hidden max-w-7xl mx-auto
    relative z-10">
      <Hero />
      <Navbar />
      <Projects />
      <About />
      <Experience />
      <Testimonial />
      <Contacts/>
    </main>
    
    </>
  )
}

export default App
