'use client'
import React from "react";
import "../_styles/cardsslider.css";
 
export const CardSlider = React.memo(function (StackedCarouselSlideProps) {
  const {
    data,
    dataIndex,
    isCenterSlide,
    swipeTo,
    slideIndex,
  } = StackedCarouselSlideProps;
  // console.log(data);

  const coverImage = data[dataIndex].image;
  const text = data[dataIndex].text;

  return (
    <div className="card-card" draggable={false}>
      <div className={`cover fill ${isCenterSlide ? "off" : "on"}`}>
        <div
          className="card-overlay fill"
          // onClick={() => {
          //   if (!isCenterSlide) swipeTo(slideIndex);
          // }}
        />
      </div>
      <div className="detail fill">
        <div className="discription">
          <img style={{}} alt="Cover" className="cover-image" src={coverImage} />
          {/* <p>{text}</p> */}
        </div>
      </div>
    </div>
  );
});

