import React from "react";

const SectionMenu = () => {
  return (
    <div className="section-wrapper">
      <div className="sectionMenu-container container padding-block ">
        <div className="text">
          <span className="text-medium">READY FOR</span>
          <h1 className="text-head">WHAT'S NEW</h1>
        </div>

        <div className="menu-grid">
        <div className="menu-items">
          <img src="/public/img2.png" alt="" />
          <div className="text-menu flex-col">
            <span className="text-medium">
              GREEN VEGATABLE PAK
            </span>
            <span className="text-medium">
              $12.99
            </span>
          </div>
        </div>
        <div className="menu-items">
        <img src="/public/img2.png" alt="" />
          <div className="text-menu flex-col">
            <span className="text-medium">
              GREEN VEGATABLE PAK
            </span>
            <span className="text-medium">
              $12.99
            </span>
          </div>
        </div>
        <div className="menu-items">
        <img src="/public/img2.png" alt="" />
          <div className="text-menu flex-col">
            <span className="text-medium">
              GREEN VEGATABLE PAK
            </span>
            <span className="text-medium">
              $12.99
            </span>
          </div>
        </div>
        </div>

        <div className="cirecle">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SectionMenu;
