import "./CTA.css"

export default function CTA() {
  return (
    <div className='cta'>
         <div className='cta-container'>
            <p className='cta-first-heading'>DON'T MISS OUT</p>
            <h2 className='cta-second-heading'>Subscribe To Our <strong className='cta-second-heading orange-text'> Newsletter</strong></h2>
            <p className='cta-description'>Stay in the snack loop and never miss a delicious update! Subscribe to our newsletter and be
            the first to know about new arrivals, exclusive offers, and tasty promotions. Join our snacking
            community and indulge in a world of flavor straight to your inbox. Don't let the best snacks slip away
            - subscribe now and treat your to a regular dose of snacking goodness.</p>

            <form className='cta-search'>
                <div>
                    <input className="input-box" type='text' placeholder='Enter your email' />
                </div>
                <button type='submit' className='cta-btn'>Subscribe</button>
    
            </form>
        </div>

    </div>
  )
}
