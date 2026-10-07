import AreasSection from './AreasSection'
import Footer from './Footer'
import GetTheAppSection from './GetTheAppSection'
import Header from './Header'
import HowItWorksSection from './HowItWorksSection'
import PopularSection from './PopularSection'

function App() {
  

  return (
    <>
       <Header />
       <main>
        <HowItWorksSection/>
        <PopularSection />
        <AreasSection />
        <GetTheAppSection />
       </main>
       <Footer />
    </>
  )
}

export default App
