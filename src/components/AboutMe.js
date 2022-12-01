import React from 'react'
import ButtonSaya from './ButtonSaya'

const AboutMe = () => {
  return (
    <div className="section">
        <div className="row align-items-flex">
            <div className="col-6 text-center">
            <img className="avatar" src="put.png"/>
            </div>
            <div className="col-6 ">
                    <h1>About Me</h1>
                    <p>
                        Hello... Panggil saya Putri. Saya seorang mahasiswa tingkat 3 yang
                        sedang menikmati masa perkulihan. Saya sangat suka sekali Pantai dan traveling.
                        saya juga sangat tertarik tentang hal-hal yang baru.
                    </p>
                <ButtonSaya 
                    text="CV" 
                    warna="info"
                    link="https://github.com/PutriDien" />
            </div>
        </div>
    </div>
  )
}

export default AboutMe