import PostPics from '../../../assets/post-pics.png';
import DelPics from '../../../assets/delivery-icon.png';
import "./About.css"

export default function About() {
  return (
    <div className='about'>
        
        <div className="container-1">
            <div className="image-box">
                <img className='about-image' src={PostPics} alt='A lady with burger in her hand'/>
            </div>
            <div className="about-text-box">
                <p className='about-first-heading orange-text'>Who Are We ?</p>
                <h4 className='about-second-heading '>Snacks That Makes A <strong className='about-second-heading orange-text'>Difference</strong></h4>
                <p className='about-description'>Welcome to the ultimate destination for snack enthusiasts. We are passionate 
                about bringing you a delectable assortment of snacks that will satisfy your 
                cravings and ignite your tast buds. 
                We understand the love Nigerians have for snacks. It's an integral part of our  
                culture, bringing people together in moments of joy, celebration, and  togetherness, 
                We are dedicated to showcasing the iverse array of snacks that 
                our country has to offer, from traditional favorites to hidden gems from local artisans.
                We are more than just an online store; it's a celebration of Nigerian snacks and 
                the people who create them. We are dedicated to preserving and sharing the 
                flavors that have been passed down through generations, allowing you to savor 
                a piece of our cultural tapestry with every bite.</p>

                <button className='about-btn'>Shop Now</button>
            </div>
        </div>

        <div className="container-2">
            <div className="delivery-text-box">
                <p className='delivery-first-heading orange-text'>Fast Delivery</p>
                <h4 className='delivery-second-heading'>No More <strong className='delivery-second-heading orange-text'>Waiting</strong></h4>
                <p className='delivery-description'>Snacks at your doorstep, faster than you can say 'hungry'.
                We prioritize your cravings and understand the need for quick satisfaction. That's
                why we offer lightning-fast delivery, bringing your favorite snacks right to your door in record time. 
                No more waiting, no more delays, Order now and experience the thrill of our speedy snack delivery service.<br/>
                <strong className='orange-text'>Hungry minds can't wait, and neither do we!</strong></p>
                <button className='about-btn'>Shop Now</button>

            </div>
                

            <div className="image-box">
                <img className='delivery-image' src={DelPics} alt='A rider'/>
            </div>
            </div>
       

    </div>
  )
}
