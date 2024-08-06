import { useState } from "react";
import CustomButton from "../../utils/CustomButton";
import { Item, items as sampleItems } from "./items";
import "./Categories.css";
import { ImageMap } from "./ImageImport";
import Shopping_bag from "../../assets/shopping-bag.png"
import StarIcon from "../../assets/Star.png"
import { RiSearchLine } from "react-icons/ri";
import { RiAddLargeLine } from "react-icons/ri";
import { IoOptionsOutline } from "react-icons/io5";
import CupcakeImage from "../../assets/Cupcake.png"
import BurgerchipsImage from "../../assets/BurgerChips.png"
import DoughtnutImage from "../../assets/Doughnut-Bg.png"

export default function Categories() {
    const [sortBy, setSortBy] = useState("");

    //
    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSortBy(event.target.value);
    };
  
    const handleSearch = () => {
      // To be implemented
    };
  
    const itemsPerPage = 15;
    const [currentPage, setCurrentPage] = useState(1);
  
    const totalPages = Math.ceil(sampleItems.length / itemsPerPage);
  
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, sampleItems.length);
  
    const itemsToShow: Item[] = sampleItems.slice(startIndex, endIndex);
  
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    const paginationButtons: JSX.Element[] = [];
    if (totalPages <= 16) {
      for (let i = 1; i <= totalPages; i++) {
        paginationButtons.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={currentPage === i ? "active" : ""}
          >
            {i}
          </button>
        );
      }
    } else {
      const firstPages = [...Array(Math.min(4, currentPage))].map((_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
          className={currentPage === index + 1 ? "active" : ""}
        >
          {index + 1}
        </button>
      ));
  
      const lastPages = [...Array(Math.min(4, totalPages - currentPage))].map(
        (_, index) => (
          <button
            key={totalPages - index}
            onClick={() => handlePageChange(totalPages - index)}
            className={currentPage === totalPages - index ? "active" : ""}
          >
            {totalPages - index}
          </button>
        )
      );
  
      paginationButtons.push(
        ...firstPages,
        currentPage > 4 && ((<span key="start-ellipsis">...</span>) as any),
        currentPage > 4 &&
          lastPages.length > 0 &&
          ((<span key="end-ellipsis">...</span>) as any)
      );
    }
  
    return (
      <div className="categories">
        <section className="categories__head">
          <div className="categories__head-heading_img1">
            <img src={CupcakeImage} alt="Cupcake" />
          </div>
          <div className="categories__head-heading">
            <img className="categories-head-img2" src={DoughtnutImage} alt="Doughtnuts" />
            <span className="heading-title-group">
            <h6>WHAT WE SELL</h6>
            <h2 className="categories__head-heading_Tasty-Title">Categories</h2>
            </span>
          </div>
          <div className="categories__head-heading_img3">
            <img src={BurgerchipsImage} alt="Burger and Chips" />
          </div>
        </section>

        <div className="categories__lists-nav">
          <div className="cat-filter">
            <div className="categories__lists-nav_search-sec">
                <input type="text" placeholder="Search Product" onChange={handleSearch} />
                <button onClick={handleSearch}> <RiSearchLine /></button>
                <p >All Products</p> 
              </div>

              <div className="mobile-filter-con">
                <p className="mobile-filter-title">All Products</p>
                <IoOptionsOutline className="mobile-filter" size={25}  color="#006633"/>
              </div>
              
        
              <div className="categories__lists-nav_dropdown">
                <h2>Sort By:</h2>
                <select value={sortBy} onChange={handleSortChange}> 
                  <option value="Default">Default</option>
                  <option value="name">Name</option>
                  <option value="price">Price</option>
                </select>
              </div>

          </div>
           
          
          <div className="categories__item-sec">
            <div className="categories__item-sec_filter">
              <h3>Filter By:</h3>
              <div className="categories__item-sec_filter-cat">
                <p>Categories</p>
                <span><RiAddLargeLine /></span>
              </div>
              <div className="categories__item-sec_filter-cat">
                <p>Price</p>
                <span><RiAddLargeLine /></span>
              </div>
              <div className="categories__item-sec_filter-cat">
                <p>Ratings</p>
                <span><RiAddLargeLine /></span>
              </div>
            </div>
            <div className="categories-items-parent">
              <div className="categories-items-parent-container">
                {itemsToShow.map((item) => (
                  <div
                    key={item.id}
                    className="categories-items-cards"
                  >
                    <div className="categories-items-img">
                      {item.imageUrl && (
                        <img className="image"
                          src={ImageMap[item.imageUrl as string]}
                          alt={item.name}
                        />
                      )}
                    </div>
  
                    <div className="categories-items-details-container">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      <div className="categories-item-amount">
                        <span className="categories-item-amount-deco">
                          {item.oldamount}
                        </span>{" "}
                        <span className="categories-item-amount-new">{item.newamount}</span>
                      </div>
                      <div className="categories-viewdetails-container-btn">
                        <button className="categories-viewdetails-btn">
                          View Details
                        </button>
                        <button className="categories-viewdetails-shoppingbag-btn">
                          <img className="shoppingBag" src={Shopping_bag} />
                        </button>
                        <div className="rating">
                          {Array.from({ length: item.rating }, (_, index) => (
                            <span key={index}><img className="star-icon" src={StarIcon} /></span>
                          ))}
                          <span className="count">{item.reviewsCount}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pagination">
                {paginationButtons}
                <button>3</button>
                <button>4</button>
                <button>...</button>
                <button>15</button>
                <button>16</button>
                <CustomButton className="next-button">Next</CustomButton>
              </div>
              
            </div>
          </div>
          </div>
        
      </div>
    );
}
