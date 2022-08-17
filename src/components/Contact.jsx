import React from 'react'
import { itJobs } from '../data'
import { kdJobs } from '../data'
import { vpJobs } from '../data'

export const Contact = () => {
  return (
    <div className='contact_container col-12 d-flex flex-wrap'>
      <div className="col-md-6 col-12">
        <h1 className='contact_title'>Ứng tuyển ngay các vị trí tại Savvycom?</h1>
        <p>Tại Savvycom, chúng tôi luôn đề cao tính ham học hỏi, tinh thần làm việc nhóm, sự sáng tạo và lòng tin.</p>
        <p>Hãy gửi CV của bạn tới Savvycom để chúng ta có thể bàn về bước tiến tiếp theo trên sự nghiệp của bạn</p>
        <h2 className='contact_guide'>Vui lòng để lại thông tin và nhận hỗ trợ từ đội ngũ tuyển dụng của Savvycom.</h2>
      </div>
      <div className="col-md-1"></div>
      <div className="col-md-5 col-12 d-flex flex-column">
        <form action="" className='col-12'>
        <div>Họ tên</div>
        <input className='input_contact col-12' type="text" />
        <div>Số điện thoại</div>
        <input className='input_contact col-12' type="text" />
        <div>Email</div>
        <input className='input_contact col-12' type="text" />
        <div>Ứng tuyển vị trí</div>
        <select className='input_contact col-12' name="jobs" id="jobs">
            <option value="default">--Vui lòng chọn vị trí--</option>
          <optgroup label="Khối công nghệ">
            {itJobs.map((el)=>{
              return <option key={el.id}>{el.jname}</option>
            })}
          </optgroup>
          <optgroup label="Khối kinh doanh">
            {kdJobs.map((el)=>{
              return <option key={el.id}>{el.jname}</option>
            })}
          </optgroup>
          <optgroup label="Khối văn phòng">
            {vpJobs.map((el)=>{
              return <option key={el.id}>{el.jname}</option>
            })}
          </optgroup>
        </select>
        <button className='attachments'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" className="icon_upload"><path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6.354 9.854a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 8.707V12.5a.5.5 0 0 1-1 0V8.707L6.354 9.854z"></path></svg>
          <span>Đính kèm CV</span>
        </button>
        <div className='mt-2'><iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LdUW5sdAAAAADdvnrI8Zi5M9U5JvmyhhHwQ5-Yz&amp;co=aHR0cHM6Ly9jYXJlZXJzLnNhdnZ5Y29tLnZuOjQ0Mw..&amp;hl=vi&amp;type=image&amp;v=gWN_U6xTIPevg0vuq7g1hct0&amp;theme=light&amp;size=normal&amp;badge=bottomright&amp;cb=51qcorv3iwu2" width="304" height="78" role="presentation" name="a-4kzcbofia2hm" frameBorder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe></div>
        <button className='col-12 d-flex justify-content-center mt-4 btn_submit'>Gửi CV</button>
        </form>
      </div>
    </div>
  )
}
