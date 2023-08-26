import React from 'react'

const SectionShop = () => {
  return (
    <div className='sectionShop-wrapper'>
        <div className="bg"></div>
        <div className="sectionShop-container container padding-block">
            <div className="text-shop flex-col-start">
                <span className='text-medium'>SUPPORT OUR FARMERS</span>
                <h1 className='text-head'>
                    Shop local: <br />
                    Our Cause
                </h1>
                <p className='text-small'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error  sed tenetur ut dolor deserunt necessitatibus id provident, aspe rnatur et commodi?
                </p>

                <button className="btn">
                    OUR PROMISE
                </button>
            </div>
            <div className="image-content">
                <img src="/public/img4.jpg" alt="" />
            </div>

        </div>
    </div>
  )
}

export default SectionShop