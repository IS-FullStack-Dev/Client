import React, { useState } from "react";
import { Item, items as sampleItems } from "./items";
import "./Categories.css";
import { ImageMap } from "./ImageImport";
import Burger_n_chips from "../../assets/Burger_n_Chips.png";
import Burger_Image from "../../assets/Burger-Image.png";
import Shopping_bag from "../../assets/shopping-bag.png";
import Cupcake from "../../assets/Cupcake.png";
import Faint2 from "../../assets/faint2.png";
import Layer from "../../assets/layer.png";
import Fifteen from "../../assets/Fifteen.png";
import { RiSearchLine } from "react-icons/ri";
import { RiAddLargeLine } from "react-icons/ri";

const Categories: React.FC = () => {
  const [sortBy, setSortBy] = useState("");

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
      <div className="categories__head">
        <div className="categories__head-heading_bgimg1">
          <img src={Cupcake} alt="Cupcake" />
        </div>
        <div className="categories__head-heading">
          <h3>WHAT WE SELL</h3>
          <h2 className="categories__head-heading_Tasty-Title">Categories</h2>
        </div>
        <div className="categories__head-heading_bgimg3">
          <img src={Burger_n_chips} alt="Burger and Chips" />
        </div>
      </div>
      <div className="categories__lists">
        <div className="categories__lists-nav">
          <div className="categories__lists-nav_search-sec">
            <input
              type="text"
              placeholder="Search Product"
              onChange={handleSearch}
            />
            <button onClick={handleSearch}>
              <RiSearchLine />
            </button>
          </div>
          <h3>All Products</h3>
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
              <span>
                <RiAddLargeLine />
              </span>
            </div>
            <div className="categories__item-sec_filter-cat">
              <p>Price</p>
              <span>
                <RiAddLargeLine />
              </span>
            </div>
            <div className="categories__item-sec_filter-cat">
              <p>Ratings</p>
              <span>
                <RiAddLargeLine />
              </span>
            </div>

          </div>
          <div className="categories__item-sec_filter-items_parent">
            <div className="categories__item-sec_filter-items-parent-item1">
              {itemsToShow.map((item) => (
                <div
                  key={item.id}
                  className="categories__item-sec_filter-item_items"
                >
                  <div className="categories__item-sec_filter-item_items-img">
                    {item.imageUrl && (
                      <img
                        src={ImageMap[item.imageUrl as string]}
                        alt={item.name}
                      />
                    )}
                  </div>

                  <div className="categories__item-sec_filter-item_items-details">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <div className="categories__item-sec_filter-item_items-details_amount">
                      <span className="categories__item-sec_filter-item_items-details_amount-deco">
                        {item.oldamount}
                      </span>{" "}
                      <span>{item.newamount}</span>
                    </div>
                    <div className="categories__item-sec_filter-item_items-details_viewdetails">
                      <button className="categories__item-sec_filter-item_items-details_viewdetails-but">
                        View Details
                      </button>
                      <button className="categories__item-sec_filter-item_items-details_viewdetails-shoppingbag">
                        <img src={Shopping_bag} />
                      </button>
                      <div className="rating">
                        {Array.from({ length: item.rating }, (_, index) => (
                          <span key={index}>⭐</span>
                        ))}
                        <span>{item.reviewsCount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="pagination">
              {paginationButtons}
              <button>3,</button>
              <button>4</button>
              ...<button>15,</button>
              <button>16</button>
              <button className="pagination-last-c">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
