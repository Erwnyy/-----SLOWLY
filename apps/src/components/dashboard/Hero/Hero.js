import React from 'react'
import './hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
        <section className='herosection'>
          <div class="home_container">
                        <div class="home_sneaker">
                            <div class="home_shape"></div>
                            <img src='/videos/foto1.jpeg' alt='' className='home_img'/>
                        </div>

                        <div className='home_data'>
                            <span class="home_new">Hi'ii</span>
                            <h1 className="home_title">Dinda Syahnaz Hafidzani</h1>
                            
                            <p class="home_description">Haloo semuannya aku lagi ulang tahun yang ke 17 tahun, hari ini sangat-sangat spesial banget buat akuhh karena yahh yang kalian bisa tau aku ulang tahun dong wkwk.</p>
                            <p class="home_description">Bahkan kue ulang tahun paling manis pun tak akan mampu mengalahkan manisnnya senyuman kamu, ahaay wkwk    </p>
                            <Link to="/produk_detail" className='button-orange'>Explore now</Link>
                        </div>
                    </div>
          </section>


          <section>
              <div className='biodata_container'>
                    
              </div>
          </section>
    </div>
  )
}

export default Hero