import React from 'react'
import photo1 from '../assets/images/ga5_5ab2432660.jpg'
import photo2 from '../assets/images/ga1_b90ccdca86.jpg'
import photo3 from '../assets/images/ga4_01ca50807d.jpg'
import photo4 from '../assets/images/ga2_54ce8415a1.jpg'
import photo5 from '../assets/images/ga3_6bd495628f.jpg'

export const Photos = () => {
  return (
    <div className='photos_container d-flex flex-column align-items-center'>
      <div className="big_title" style={{marginBottom:'30px'}}>Thư viện hình ảnh</div>
      <div className='d-flex flex-wrap' style={{marginBottom:'30px'}}>
        <div className='col-md-3 col-12'>
          <img className='col-12 photo' src={photo1} alt=""  style={{height:'60%',padding:'2px'}}/>
          <img className='col-12 photo' src={photo2} alt="" style={{height:'40%',padding:'2px'}}/>
        </div>
        <div className='col-md-6 col-12'>
          <img className='col-12 photo' src={photo3} alt="" style={{height:'100%',padding:'2px'}}/>
        </div>
        <div className='col-md-3 col-12'>
          <img className='col-12 photo' src={photo4} alt="" style={{height:'40%',padding:'2px'}}/>
          <img className='col-12 photo' src={photo5} alt="" style={{height:'60%',padding:'2px'}}/>
        </div>
      </div>
      <button className='btn_more'>Xem thêm</button>
    </div>
  )
}
