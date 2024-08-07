import "./Service.css";
import { Item, items as sampleItems } from "./Items";
import { ImageMap } from "../category/ImageImport";
import ShoppingBag from "../../../assets/shopping-bag.png";
import StarIcon from "../../../assets/star.png"
import ChefImg from '../../../assets/chef.png';
import ChefCombo from '../../../assets/chef-combo.png';

export default function Service() {
    const itemsToShow: Item[] = sampleItems

  return (
    <div className="service">
       
        <div className="second-container">
        <p className='service-first-heading orange-text'>Our Chef</p>
        <h3 className='service-second-heading'>We Serve  <strong className='service-second-heading orange-text'>Deliciousness</strong></h3>
        
        <div className="service-parent">
            <div className="service-parent-container">
              {itemsToShow.map((item) => (
                <div
                  key={item.id}
                  className="service-items-cards"
                >
                  <div className="service-img">
                    {item.imageUrl && (
                      <img className='item-img'
                        src={ImageMap[item.imageUrl as string]}
                        alt={item.name}
                      />
                    )}
                  </div>

                  <div className="service-items-details-container">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <div className="service-item-amount">
                      <span className="service-item-amount-deco">
                        {item.oldamount}
                      </span>{" "}
                      <span className='service-item-amount-new'>{item.newamount}</span>
                    </div>
                    <div className="service-viewdetails-icon">
                      <button className="service-viewdetails-btn">
                        View Details
                      </button>
                      <button className="service-viewdetails-shoppingbag-btn">
                        <img className="shoppingBag" src={ShoppingBag} alt="shopping bag" />
                      </button>
                      <div className="rating">
                        {Array.from({ length: item.rating }, (_, index) => (
                          <span key={index}><img className='star-icon' src={StarIcon} alt="Star" /></span>
                        ))}
                        <span className='count'>{item.reviewsCount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
        </div>

        <div className="combo-container">
            <div className="chef">
              <img className='image-chef' src={ChefImg} alt="profile" />
              <p className='chef-name'>Otor John Stephen</p>
              <p className='chef-title'>Chef Officer</p>
            </div>
          
            <div className="stats">
                <img className='image-stats' src={ChefCombo} alt="card" />
            </div>
        </div>

   



    </div>
  )
}
