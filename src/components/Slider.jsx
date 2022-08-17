import React from 'react'
import banner from '../assets/images/banner_2a68a37b9b.png'
import { useState } from 'react'
import { useEffect } from 'react'

export const Slider = () => {
  const [changeText,setChangeText] = useState(0)

  useEffect (() => {
    setTimeout(() => {
      setChangeText(changeText === 2 ? 0 : changeText + 1);
    }, 3000)
  }, [changeText])

  return ( 
    <div className='slider_container d-md-flex mt-md-5 pt-md-5'>
      <div className='col-md-6 col-12 d-flex flex-column justify-content-center px-3'>
        <div className="big_title position-relative">
          Cơ hội đang mở ra tại Savvycom
          <svg className='star position-absolute' style={{bottom: '14px', right: '30px'}} xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 22C12.1503 22 22 31.8497 22 44C22 31.8497 31.8497 22 44 22C31.8497 22 22 12.1503 22 0C22 12.1503 12.1503 22 0 22Z" fill="#A5B862"/>
          </svg>
        </div>
       {changeText === 0? <div className='auto_swap_text item1'>Khối công nghệ</div> : changeText=== 1? <div className='auto_swap_text item2'>Khối kinh doanh</div> : <div className='auto_swap_text item3'>Khối văn phòng</div>}
       <div className="sub_title_intro">Tiếp cận các tin tuyển dụng việc làm mới nhất tại công ty công nghệ hàng đầu Việt Nam.</div>
       <button className='btn_send_select btn_primary'>Xem tất cả vị trí</button>
      </div>
      <img src={banner} alt="" className='col-md-6 col-12'/>
    </div>
  )
}
