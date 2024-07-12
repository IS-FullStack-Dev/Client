import "./Promo.css"
import cinamon from "../../../assets/cinamon-roll-combo.png"

export default function Promo() {
  return (
    <div className='promo'>
        <div className='promo-container'>
            <img className="promo-img" src={cinamon} alt="cinamon roll" />
            <div className='promo-content'>
                <p className='promo-first-heading'>Deal of the week</p>
                <h3 className="promo-second-heading">Sale off 10%</h3>
                <p className="promo-description">On all cinnamon rolls combo</p>
                <p className='promo-new-amount'><span className='promo-amount-deco'>₦2000.00 </span>₦1800.00</p>
                <button className="promo-btn">Shop Now</button>
            </div>
        </div>

    </div>
  )
}
