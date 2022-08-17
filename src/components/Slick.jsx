import React from 'react'
import Slider from "react-slick"
import { sliders } from '../data'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#a5b862", borderRadius: '50%'}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#a5b862", borderRadius: '50%'}}
        onClick={onClick}
      />
    );
  }

export const Slick = () => {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }
  return (
    <div className='slick_slider_container mx-auto'>
        <Slider {...settings}>
            {sliders.map((item) => (
                <div key={item.year} className="card col-2 d-flex flex-column align-items-center" style={{height:'160px'}}>
                    <div style={{fontWeight: '700', fontSize: '24px'}}>{item.year}</div>
                    <div className="item_title">{item.title}</div>
                </div>
            ))}
        </Slider>
    </div>
  )
}



