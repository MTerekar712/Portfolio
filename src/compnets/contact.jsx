import React from 'react'
import "../pagesCss/contact.css"

const contact = () => {
  return (
    <div className='box'>
        <div className="links">
            <div><img src="src\assets\mail.webp" alt="" /><a href="https://mail.google.com/mail/?view=cm&fs=1&to=mayurterekar712@gmail.com" target="_blank">Mail </a></div>
            <div> <img src="src\assets\linkdin.webp" alt="" /><a href="https://www.linkedin.com/in/mayurterekar2306" target="_blank">Linkdine</a></div>
            <div> <img src="src\assets\whatapp.webp" alt="" /><a href="https://wa.me/7304752306" target="_blank">WhatsApp</a></div>
            <div> <img src="src\assets\github.webp" alt="" /><a href="https://github.com/MTerekar712" target="_blank">GitHub</a></div>
            <div> <img src="src\assets\leetcode.webp" alt="" /><a href="https://leetcode.com/mayurTerekar712" target='_blank'>leetcode</a></div>
        </div>
        <div className="messg">
          <form >
            <h1>Contact Me!..</h1>
            <input type="text" placeholder='Enter Your Name' />
            <input type="email" placeholder='Enter your Email ' />
            <input type="tel" placeholder='Enter Mobile Number' />
            <textarea name="" id="" placeholder='Write Message'></textarea>
            <button>Submit</button>
          </form>
        </div>
    </div>
  )
}

export default contact

