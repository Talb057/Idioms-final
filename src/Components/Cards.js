import React from 'react';
import CardItem from './CardItem';
import './Cards.css';


function Cards() {
  return (
    <div className='cards'>
        <h1>Here are our courses</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                        src="images/img-1.jpg"
                        text = "Join a course and unlock new dicovery opportunities"
                        Label = "Courses"
                        path = "/courses"
                    />

                    <CardItem 
                        src="images/img-3.jpg"
                        text = "Join a course and unlock new dicovery opportunities"
                        Label = "Courses"
                        path = "/courses"
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards