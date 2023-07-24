import React from 'react';
import "./Flyer.css";

function Flyer() {
  return (
    <div className='flyer-container'>
      <div className="flyer-imgae1">
        <img src="/public/images/img-9" alt="flyer" className='flyer-image'/>
      </div>
      <div className="flyer-text1">
        <h3>Courses</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aspernatur reiciendis officia modi. Ullam, veritatis modi.</p>
      </div>
    </div>
  )
}

export default Flyer