import React from 'react'
import { Link } from 'react-router-dom'
import './offer.css'

//React icon
import { FaArrowRight } from 'react-icons/fa'

const Offer = () => {
  return (
    <div>
                <section className='offer section'>
                    <div className='offer_container'>
                        <div className='offer_data'>
                            <h3 className='offer_title'>100% Lope wkwkw</h3>
                            <p className='offer_description'>Happ birtday yah dinn semoga jadi pribadi yang lebih baik lagi dari hari yang kemarin yahh, harus sayang terus sama mamah, abi sama kakak kamu</p>
                            <Link to="#" className='button-light'> <FaArrowRight /></Link>
                        </div>

                        <img src='/videos/foto5.jpg' className='offer_img'/>
                    </div>
                </section>
    </div>
  )
}

export default Offer