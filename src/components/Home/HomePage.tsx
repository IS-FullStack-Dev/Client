import Navbar from './navbar/Navbar'
import Hero from './hero/Hero'
import Category from './category/Category'
import Promo from './promo/Promo'
import Blog from './blog/Blog';
import Deals from './deals/Deals';
import About from './about/About';
import Service from './service/Service';
import CTA from './cta/CTA';
import Footer from './footer/Footer';



const HomePage = () => {
  return (
    <main>
      <Navbar/>
      <Hero />
      <Category />
      <Promo />
      <Blog />
      <Deals />
      <About />
      <Service />
      <CTA />
      <Footer />
    </main>
  )
}

export default HomePage