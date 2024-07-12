import { useState } from "react";
import { Item, items as sampleItems } from "../category/Items";
import { ImageMap } from "../category/ImageImport";
import Pagination from '../../../helper/Pagination';
import ShoppingBag from "../../../assets/shopping-bag.png";
import StarIcon from "../../../assets/Star.png"
import './Deals.css';


export default function Deals() {
    const [currentPage, setCurrentPage] = useState<number>(1)

    const itemsToShow: Item[] = sampleItems;

    const itemsPerPage = 1;
  
    const totalPages = Math.ceil(sampleItems.length / itemsPerPage);
  
  
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };


  return (
    <div className='deals'>
        <div className="container-grouped">
            <div className="text-container ">
                <h6 className='deals-heading orange-coloured-text'>The best price</h6>
                <p className='deals-title'>Top <span className='deals-title orange-coloured-text'>Snack</span> Deals</p>
            </div>



            <div className="deals-subheading">
                <p className='deals-subheading-text'>Our Best Deals</p>
                <button className='deals-subheading-btn'>View All</button>
            </div>

            <div className="deals-parent">
            <div className="deals-parent-container">
            {itemsToShow.map((item) => (
                <div
                key={item.id}
                className="deals-items-cards"
                >
                <div className="deals-img">
                    {item.imageUrl && (
                    <img className='item-img'
                        src={ImageMap[item.imageUrl as string]}
                        alt={item.name}
                    />
                    )}
                </div>

                <div className="deals-items-details-container">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <div className="deals-item-amount">
                    <span className="deals-item-amount-deco">
                        {item.oldamount}
                    </span>{" "}
                    <span className='deals-item-amount-new'>{item.newamount}</span>
                    </div>
                    <div className="deals-viewdetails-icon">
                    <button className="deals-viewdetails-btn">
                        View Details
                    </button>
                    <button className="deals-viewdetails-shoppingbag-btn">
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
