import "./Blog.css";
import Profile from '../../../assets/profile.png';
import DrinkRating from '../../../assets/Drink-rating.png';
import FruitDrink from '../../../assets/Fruit-drink.png';
import Smoothie1 from '../../../assets/Smoothie1.png';
import Smoothie2 from '../../../assets/Smoothie2.png';
import Quote from '../../../assets/quotes.png';

export default function Blog() {
  return (
    <div className='blog'>
        <div className='container'>
            <div className="grid-container">
                <figure className="featured">
                    <img className='span-2 image-grid-1' src={DrinkRating} alt='rating'/>
                </figure>
                <figure className="featured">
                    <img className='span-2 image-grid-2' src={FruitDrink} alt='Fruit drink' />
                </figure>
                <figure >
                    <img  src={Smoothie1} alt='smoothie ' />
                </figure>
                <figure >
                    <img  src={Smoothie2} alt='Smoothie ' />
                </figure>
               
               
                
            </div>
            <div className='blog-text-container'>
                <h3 className='blog-heading'>Fruit Drinks Help Your  Harmonious & <strong className='blog-heading green-coloured-text'> Relation <br /> Health </strong></h3>
                <div className='blog-quote'>
                    <img className='blog-quote-img' src={Profile} alt='profile' />
                    <p className='blog-quote-text'>They Who Drink healthy Will think <img className='blog-text-icon' src={Quote} alt="quote" /> <br/> Better</p>
                </div>
                <button className='blog-btn'>See All Drinks</button>
            </div>
            
        </div>


    </div>
  )
}
