import React from 'react'
import ButtonSaya from './ButtonSaya'

const Intro = () => {
  return (
    <div className="section text-dark intro">
        <div className="section text-center">
          <img className="avatar" src="circle.png"/>
          
          
            <h1>... Welcome To My Website ...</h1>
            
            <a target="_blank" href="https://m.facebook.com/putri.dien.3?eav=AfZLiv-vhmD-svbJXZxsCqVZZpb-LB8lDqBQ-Src69WqPUHN-EcDv84rOqRriHRJ6eQ&paipv=0" className="social-media">
            <i class="bi bi-facebook"></i>
            </a>
            <a target="_blank" href="https://www.instagram.com/putrydien/" className="social-media">
            <i class="bi bi-instagram"></i>
            </a>
            <a target="_blank" href="https://github.com/PutriDien" className="social-media">
            <i class="bi bi-github"></i>
            </a>
            <div className="col">
              <div className="row">
                <ButtonSaya 
                  text="Pick Me"
                  link="s22020014@student.unklab.ac.id"
                  warna="pink"
                  
                />    
              </div>
            </div>
        </div>
    </div>
  )
}

export default Intro