import React from 'react'
import { Navigation } from '../components/Navigation'
import { Slider } from '../components/Slider'
import { Position } from '../components/Position'
import { Introduce } from '../components/Introduce'
import { Slick } from '../components/Slick'
import { Photos } from '../components/Photos'
import { Profit } from '../components/Profit'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'


export const Home = () => {
  return (
    <>
        <Navigation/>
        <div className='content m-auto'>
            <Slider/>
            <div id='position' className="clear_height"></div>
            <Position/>
            <div id='introduce' className="clear_height"></div>
            <Introduce/>
            <Slick/>
            <div id='photos' className="clear_height"></div>
            <Photos/>
            <div id='profit' className="clear_height"></div>
            <Profit/>
            <div id='apply' className="clear_height"></div>
            <Contact/>
        </div>
        <div id='contact' className="clear_height"></div>
        <div className="clear_height"></div>
        <Footer/>
    </>
    
  )
}
