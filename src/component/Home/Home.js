import React from 'react';
import Product from '../Product/Product';
import './Home.css';

export default function Home() {
  return (
    <div className='home'>
      <div className="home_container">
        <img className="home_Image" src='https://m.media-amazon.com/images/I/717QTBh9WNL._SX3000_.jpg' alt="homepage" ></img>
        
        {/* https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg */}
      </div>

      <div className="home_row">
        <Product id ={1} title='OnePlus Nord 2 5G (Blue Haze, 8GB RAM, 128GB Storage)' 
        image='https://m.media-amazon.com/images/I/61TnX0PmqES._AC_UL480_QL65_.jpg' price={29999.00} rating={4} vote={16789}></Product>
        <Product  id={2} title="Levi's Men's Regular Polo Shirt" image='https://m.media-amazon.com/images/I/71OfK+KOVkL._UX569_.jpg' price={1259.00} rating={3} vote={453}></Product>
        <Product id={3} title='boAt Airdopes 121v2 Bluetooth Truly Wireless in Ear Earbuds with Mic (Active Black)' 
        image='https://m.media-amazon.com/images/I/71ByNT34bfL._AC_UL480_QL65_.jpg' price={1299.00} rating={4} vote={562}></Product>
        <Product id={4} title='Tata Tea Premium, 1500 g' image='https://images-eu.ssl-images-amazon.com/images/I/41DwPE1rBQS._AC_SX184_.jpg' price={501.00} rating={5} vote={87782}></Product>

      </div>

      <div className="home_row">
        <Product  id={5} title='HP Pavilion 14, Intel 11th Gen i5 16GB RAM/512GB SSD 14 inch(35.6 cm) Laptop, FHD IPS Anti-Glare Display/Iris X Graphics/B...'
        image='https://m.media-amazon.com/images/I/81rbG8d1X8L._AC_UL480_QL65_.jpg' price={67490.00} rating={5} vote={1616}></Product>
        <Product id ={6} title='Noise ColorFit Icon Buzz Bluetooth Calling Smart Watch with Voice Assistance, 1.69" Display, Built-in Games, Sleep, Spo2, HR Monitors (Jet Black)'
         image='https://m.media-amazon.com/images/I/61v6HokIL2L._AC_SS450_.jpg' price={3999.00} rating={3} vote={13421} ></Product>
         <Product id ={7} title="Puma BMW MMS A3EROCAT Mid White-Strong B" image='https://m.media-amazon.com/images/I/51wpJqNoncL._AC_UL480_FMwebp_QL65_.jpg' price={4999.00} rating={4} vote={56}></Product>

      </div>

      <div className="home_row">

      <Product id ={8} title='Mi Notebook Ultra 3K Resolution Display Intel Core i5-11300H 11th Gen 15.6-inch(39.62 cms) Thin and Light Laptop (8GB/512GB SSD/Iris Xe Graphics/Win 10/MS Office/Backlit KB/Fingerprint Sensor/1.7Kg)'
        image='	https://m.media-amazon.com/images/I/71YTwU1IexL._AC_UL480_QL65_.jpg' price={32999.00} rating={4} vote={1242}></Product>

      </div>

    </div>
  )
}
