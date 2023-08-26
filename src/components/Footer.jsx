import React from 'react'

import { AiFillFacebook } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'


const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className="footer-container container padding-block">
        <div className="div">
            <h1 className='text-head'>
                LOCAL <br/>
                LIFE
            </h1>
            <div className="social ">
            <AiFillFacebook  className="icon"/>
            <AiFillInstagram  className="icon"/>
            <AiOutlineTwitter className="icon" />
            </div>
        </div>
        <div className="footer-menu">
            <p className='text-medium'>CUR SERVICE</p>
            <ul>
                <li>What New</li>
                <li>How to Order</li>
                <li>Paynment Method</li>
                <li>Order Status</li>
                <li>Subscription</li>
                <li></li>
            </ul>
        </div>
        <div className="footer-menu">
        <p className='text-medium'>CUR SERVICE</p>
            <ul>
                <li>What New</li>
                <li>How to Order</li>
                <li>Paynment Method</li>
                <li>Order Status</li>
                <li>Subscription</li>
                <li></li>
            </ul>
        </div>
        <div className="footer-menu">
        <p className='text-medium'>CUR SERVICE</p>
            <ul>
                <li>What New</li>
                <li>How to Order</li>
                <li>Paynment Method</li>
                <li>Order Status</li>
                <li>Subscription</li>
                <li></li>
            </ul>
        </div>

        
        </div>
        <div className="copy-right container">
            <span>Copyright 202 The Local Life Co. ALL Rights Reserved.</span>
        </div>
    </div>
  )
}

export default Footer