import Hero from "./Hero"
import Navbar from "./Navbar"

function Header() {
    return <header
    className="sticky top-0 z-30 border-b border-line bg-surface sm:static"
  >
    <Navbar />
    <Hero />
  </header>
}

export default Header