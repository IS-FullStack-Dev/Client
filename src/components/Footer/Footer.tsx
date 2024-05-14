import Facebooklogo from "../../assets/facebook-logo.png";
import Instagramlogo from "../../assets/instagram-logo.png";
import Twitterlogo from "../../assets/twitter-logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__sec1">
        <div className="footer__sec1-div1">
          <div className="footer__sec1-div1_section1">
            <div className="footer__sec1-div1_section1-socialmedia">
              <img src={Facebooklogo} alt="facebook-logo" />
              <img src={Instagramlogo} alt="Instagram-logo" />
              <img src={Twitterlogo} alt="Facebook-logo" />
            </div>
            <p>
              the ultimate destination for snack enthusiasts. We are passionate
              about bringing you a delectable assortment of snacks that will
              satisfy your cravings and ignite your taste buds.
            </p>
          </div>
          <div className="footer__sec1-div1_section2">
            <h2>Contact Us</h2>
            <p>
              570 Ajayi Street, 8th Ave, Gwarimpa, Abuja 08130000000,
              09081000000 grostore.enquiry@gmail.com
            </p>
          </div>
          <div className="footer__sec1-div1_section3">
            <h2>Delivery Support</h2>
            <p>
              +2348130000000 Monday – Friday: 9:00am-08:00pm Saturday - Sunday:
              11:00am – 05:00pm
            </p>
          </div>
          <div className="footer__sec1-div1_section4">
            <h2>Quick Links</h2>
            <ul>
              <li>Home</li>
              <li>Categories</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="footer__sec1-div2">
          <p>Pastries</p>
          <p>Cake</p>
          <p>Burger</p>
          <p>Pizza</p>
          <p>Drink</p>
        </div>
      </div>
      <div className="footer__sec2"></div>
    </div>
  );
};
export default Footer;
