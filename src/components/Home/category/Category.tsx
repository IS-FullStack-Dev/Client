import { useState } from "react";
import { Item, items as sampleItems } from "./Items";
import { ImageMap } from "./ImageImport";
import "./Category.css";
import PastryImage from "../../../assets/pastries.png"
import PizzaImage from "../../../assets/pizza.png";
import CakeImage from "../../../assets/cake.png";
import DrinksImage from "../../../assets/drinks.png";
import BurgerImage from "../../../assets/burger.png";
import ShoppingBag from "../../../assets/shopping-bag.png";
import deliverIcon from "../../../assets/DeliveryIcon.png";
import payIcon from "../../../assets/PaymentIcon.png";
import SupportIcon from "../../../assets/SupportIcon.png";
import StarIcon from "../../../assets/Star.png"
import Pagination from "../../../helper/Pagination";


export default function Category() {
    const [currentPage, setCurrentPage] = useState<number>(1)

    const itemsToShow: Item[] = sampleItems;

    const itemsPerPage = 1;
  
    const totalPages = Math.ceil(sampleItems.length / itemsPerPage);
  
  
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };
  
  
  return (
    <div className='category'>
        <div className="cards">
            <div className='card-container'>
                <img className='card-icon' src={deliverIcon} alt='/' />
                <h3 className='card-heading'>Fast Delivery</h3>
                <p className='card-description'>Have your snacks delivered at your  doorstep, fast than you can say 'hungry'</p>
            </div>
            <div className='card-container'>
                <img className='card-icon' src={payIcon} alt='/' />
                <h3 className='card-heading'>Safe, Secure, Payment</h3>
                <p className='card-description'>Shop with confidence, knowing that we provide a safe and secure payment</p>
            </div>
            <div className='card-container'>
                <img className='card-icon' src={SupportIcon} alt='/' />
                <h3 className='card-heading'>24/7 Support</h3>
                <p className='card-description'>We're here for you around the clock, ready to assist with any snacking inquiries</p>
            </div>
        </div>

        <div className="container-grouped">

            <div className="text-container center-text">
                <h6 className='sub-heading orange-coloured-text'>What We Sell</h6>
                <p className='heading-title'>All <span className='heading-title orange-coloured-text'>Categories</span></p>
            </div>

            <div className="container-category-1">
                <div className="sample-item orange-color">
                    <img className="sample-img"  src={PastryImage} alt='Pastry' />
                    <p>Pastries</p>
                </div>
                <div className="sample-item">
                    <img className="sample-img" src={CakeImage} alt='Cake ' />
                    <p>Cake</p>
                </div>
                <div className="sample-item">
                    <img className="sample-img" src={BurgerImage} alt='Burger' />
                    <p>Burger</p>
                </div>
                <div className="sample-item">
                    <img className="sample-img" src={PizzaImage} alt='Pizza ' />
                    <p>Pizza</p>
                </div>
                <div className="sample-item">
                    <img className="sample-img" src={DrinksImage} alt='Fruit drink ' />
                    <p>Drinks</p>
                </div>
            </div>

            <div className="category-subheading">
                <p className='category-subheading-text'>Pastries</p>
                <button className='category-subheading-btn'>View All</button>
            </div>

            <div className="category-parent">
            <div className="category-parent-container">
              {itemsToShow.map((item) => (
                <div
                  key={item.id}
                  className="category-items-cards"
                >
                  <div className="category-img">
                    {item.imageUrl && (
                      <img className='item-img'
                        src={ImageMap[item.imageUrl as string]}
                        alt={item.name}
                      />
                    )}
                  </div>

                  <div className="category-items-details-container">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <div className="category-item-amount">
                      <span className="category-item-amount-deco">
                        {item.oldamount}
                      </span>{" "}
                      <span className='category-item-amount-new'>{item.newamount}</span>
                    </div>
                    <div className="category-viewdetails-icon">
                      <button className="category-viewdetails-btn">
                        View Details
                      </button>
                      <button className="category-viewdetails-shoppingbag-btn">
                        <img className="shoppingBag" src={ShoppingBag} alt="shopping bag" />
                      </button>
                      <div className="rating">
                        {Array.from({ length: item.rating }, (_, index) => (
                          <span key={index}><img className='star-icon' src={StarIcon} alt="star" /></span>
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
        <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange} />


    </div>
  )
}
