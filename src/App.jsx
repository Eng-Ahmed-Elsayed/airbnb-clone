// import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Card from './components/Card'
import cardData from './data'

function App() {
  const cards = cardData.map(item => {
      return (
        <Card 
        key={item.id}
        // img={item.coverImg}
        // rating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // location={item.location}
        // title={item.title}
        // price={item.price} 
        // openSpots={item.openSpots} 
        item={item}
        />  
      )
    }
    )

  return (
    <div className='container'>
      <Navbar />
      <HeroSection />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}

export default App
