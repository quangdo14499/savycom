import React from 'react'

export const Job = (props) => {
  return (
    <div key={props.id} className='job-container col-12 col-md-6 px-3'>
        <div className="job_content d-flex flex-wrap justify-content-around p-3">
            <span className='job_name col-12 mb-3' style={{fontWeight: 'bold'}}>{props.jname}</span>
            <div className='col-6 d-flex mt-2 align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.25 3.125H3.75C3.40482 3.125 3.125 3.40482 3.125 3.75V16.25C3.125 16.5952 3.40482 16.875 3.75 16.875H16.25C16.5952 16.875 16.875 16.5952 16.875 16.25V3.75C16.875 3.40482 16.5952 3.125 16.25 3.125Z" stroke="#A5B862" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.75 1.875V4.375" stroke="#A5B862" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.25 1.875V4.375" stroke="#A5B862" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.125 6.875H16.875" stroke="#A5B862" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className='ms-1'>{props.dl}</span>
            </div>
            <div className='col-6 d-flex mt-2 align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 1.875V18.125" stroke="#A5B862" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.375 6.875C14.375 6.46462 14.2942 6.05826 14.1371 5.67911C13.9801 5.29997 13.7499 4.95547 13.4597 4.66529C13.1695 4.37511 12.825 4.14492 12.4459 3.98788C12.0667 3.83083 11.6604 3.75 11.25 3.75H8.4375C7.6087 3.75 6.81384 4.07924 6.22779 4.66529C5.64174 5.25134 5.3125 6.0462 5.3125 6.875C5.3125 7.7038 5.64174 8.49866 6.22779 9.08471C6.81384 9.67076 7.6087 10 8.4375 10H11.875C12.7038 10 13.4987 10.3292 14.0847 10.9153C14.6708 11.5013 15 12.2962 15 13.125C15 13.9538 14.6708 14.7487 14.0847 15.3347C13.4987 15.9208 12.7038 16.25 11.875 16.25H8.125C7.2962 16.25 6.50134 15.9208 5.91529 15.3347C5.32924 14.7487 5 13.9538 5 13.125" stroke="#A5B862" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className='ms-1'>{props.salary}</span>
            </div>
            <div className='col-6 d-flex mt-2 align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 10.625C11.3807 10.625 12.5 9.50571 12.5 8.125C12.5 6.74429 11.3807 5.625 10 5.625C8.61929 5.625 7.5 6.74429 7.5 8.125C7.5 9.50571 8.61929 10.625 10 10.625Z" stroke="#A5B862" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.25 8.125C16.25 13.75 10 18.125 10 18.125C10 18.125 3.75 13.75 3.75 8.125C3.75 6.4674 4.40848 4.87769 5.58058 3.70558C6.75269 2.53348 8.3424 1.875 10 1.875C11.6576 1.875 13.2473 2.53348 14.4194 3.70558C15.5915 4.87769 16.25 6.4674 16.25 8.125V8.125Z" stroke="#A5B862" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className='ms-1'>{props.add}</span>
            </div>
            <div className='col-6 d-flex mt-2 align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#A5B862" strokeWidth="1.3" strokeMiterlimit="10"/>
                    <path d="M10 5.625V10H14.375" stroke="#A5B862" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className='ms-1'>{props.request}</span>
            </div>
        </div>
    </div>
  )
}
