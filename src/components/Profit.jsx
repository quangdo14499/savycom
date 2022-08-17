import React from 'react'

export const Profit = () => {
  return (
    <div className='profit_container d-flex flex-column align-items-center'>
      <div className="big_title">Giá trị đem lại</div>
      <div className='col-12 d-flex flex-wrap mt-4'>
        <div className="col-md-6 col-12 p-2 position-relative blur">
          <div className='profit1'></div>
          <div className='profit_content'>Tính cam kết</div>
        </div>
        <div className="col-md-6 col-12 p-2 position-relative blur">
          <div className='profit2'></div>
          <div className='profit_content'>Sự sáng tạo</div>
        </div>
        <div className="col-md-6 col-12 p-2 position-relative blur">
          <div className='profit3'></div>
          <div className='profit_content'>Khả năng làm việc nhóm</div>
        </div>
        <div className="col-md-6 col-12 p-2 position-relative blur">
          <div className='profit4'></div>
          <div className='profit_content'>Làm việc với đam mê</div>
        </div>
      </div>
    </div>
  )
}
