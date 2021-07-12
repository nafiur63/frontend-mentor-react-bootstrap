import React, { useEffect, useState } from 'react'
import { SliderData } from './imagedata'

const Slider = () => {

    const [current,setCurrent] = useState(0)
    const length = SliderData.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current - 1)
    }

    console.log(current)

    useEffect(() => {
        let interval = setInterval(()=>{
            nextSlide()
        }, 3*1000)
        return () => {
            clearInterval(interval)
          }
        
    }, [current])

    return (
        <div className="slider">
            <i className="fas fa-chevron-circle-left left-arrow fs-1" onClick={prevSlide}></i>
            <i className="fas fa-chevron-circle-right right-arrow fs-1" onClick={nextSlide}></i>
            {SliderData.map((slide,index) =>{
               return <div key={index} className={index === current ? 'slide active' : 'slide'}>
                   {index === current && (<img className="image " src={slide.image} alt='images'/>)}
                   </div>
            })}
            
        </div>
    )
}

export default Slider
