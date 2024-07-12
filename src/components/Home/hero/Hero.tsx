import Image from "../../../assets/hero.png"
import './Hero.css'

export default function Hero() {
  return (
    <div className='hero'>
        <div className='hero-container' >
                <div className='hero-text-box'>
                    <p className='heading-primary' >Explore, Indulge, Repeat</p>
                    <h4 className='heading-secondary'> Delivers <span className='heading-secondary orange-text'><br/> Deliciousness </span><br /> to Your Door</h4>
                    <p className='heading-description'>Indulge your taste buds and satisfy your cravings with our vast <br/> selection of delicious snacks. 
                        From crispy chips to mouthwatering <br/>  chcolates, we've got the perfect treats to tickle your palate.<br/> 
                        Discover a world of flavors, textures, and endless snacking <br/> possibilities right at your fingertips.</p>
                        
                    <div className='hero-btn-box'>
                        <button className='btn btn--green'> Shop Now </button>
                        <button className='btn btn--orange'> Learn More </button>
                    </div>
                </div>

                <div className='hero-img-box'>
                    <img className='hero-img' src={Image} alt="Burger" />
                </div>
            </div>

    </div>
  )
}
