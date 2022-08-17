import React from 'react'
import {jobs} from '../data'
import { useState } from 'react'
import { Job } from './Job'
import { itJobs } from '../data'
import { kdJobs } from '../data'
import { vpJobs } from '../data'

const branches = ['Tất cả vị trí','Khối công nghệ','Khối kinh doanh','Khối văn phòng']

export const Position = () => {
  const [type,setType] = useState('Tất cả vị trí')
  const [query,setQuery] = useState('')

  return (
    <div className='position_container d-flex flex-column align-items-center'>
      <div className="big_title">Vị trí dành cho bạn</div>
      <div className="search_container col-7 d-flex align-items-center">
        <input 
          className='position_search col-11' 
          type="text" 
          placeholder='Tìm kiếm vị trí'
          onChange={(e) => setQuery(e.target.value)}
        />
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <g opacity="0.3">
          <path d="M14.5 25C20.299 25 25 20.299 25 14.5C25 8.70101 20.299 4 14.5 4C8.70101 4 4 8.70101 4 14.5C4 20.299 8.70101 25 14.5 25Z" stroke="#101010" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21.9238 21.925L27.9989 28.0001" stroke="#101010" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
        </svg>
      </div>
      <div className="branch_option col-7 d-flex flex-wrap justify-content-around">
          {branches.map(branch => (
            <button
              className='btn_branch'
              style={type === branch ? {
                backgroundColor: '#a5b862',
                color: '#ffffff',
                border: '1px solid transparent',
              } : {}}
              key={branch}
              onClick={()=> setType(branch)}
            >
              {branch}
            </button>
          ))}
      </div>
      <div className="listjob_container d-flex flex-wrap">
          {type === 'Tất cả vị trí' ? jobs.filter(el => el.jname.toLocaleLowerCase().includes(query)).map((el) => {
            return Job(el);
          }) : type === 'Khối công nghệ' ? itJobs.filter(el => el.jname.toLocaleLowerCase().includes(query)).map((el) => {
            return Job(el);
          }) : type === 'Khối kinh doanh' ? kdJobs.filter(el => el.jname.toLocaleLowerCase().includes(query)).map((el) => {
            return Job(el);
          }) : vpJobs.filter(el => el.jname.toLocaleLowerCase().includes(query)).map((el) => {
            return Job(el);
          })}
    </div>
    </div>
  )
}
