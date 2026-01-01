import React from 'react'
import "../pagesCss/card2.css"
import photo from "../assets/mayur.webp";

const card2 = () => {
  return (
    <div>
        <div className='card2'>
            <div className="picture" style={{backgroundImage: `url(${photo})`}}></div>
            <div className="me">
              <h1>About me!..</h1>
              <h2>I am a passionate Web Developer with strong problem-solving skills.</h2>
              <h2>I enjoy building responsive and interactive web applications.</h2>
              <div className='edu'>
                <h3>Education: </h3>
                <h4>BE In Electronics and Telecummunication</h4>
              </div>
              <div className="exp">
                <h3>Experience:</h3>
                <h4>Fresher</h4>
              </div>
            </div>
        </div>
    </div>
  )
}

export default card2