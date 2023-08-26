import React from "react";

const SectionDaily = () => {
  return (
    <>
      <div className="sectionDaily-container ">
        <div className="image-content">
          <img src="/public/img6.jpg" alt="" />
        </div>
        <div className="text-daily ">
          <div className="inner">
            <h1 className="text-head">
              Newly
              <br />
              Harvest
            </h1>

            <p className="text-small">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus alias aperiam, facilis nam architecto consequuntur
              dolor suscipit
            </p>
            <button className="btn">OUR PRODUCT</button>
          </div>
        </div>
      </div>
      <div className="sectionDaily-container-1">
        <div className="text-daily ">
          <div className="inner">
            <h1 className="text-head">
              Fresh Daily
              <br />
              Products
            </h1>

            <p className="text-small">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus alias aperiam, facilis nam architecto consequuntur
              dolor suscipit
            </p>
            <button className="btn">OUR PRODUCT</button>
          </div>
        </div>
        <div className="image-content">
          <img src="/public/img6.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default SectionDaily;
