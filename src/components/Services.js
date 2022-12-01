import React from 'react'
import ServiceItem from './ServiceItem'


const Services = () => {
  return (
    <div className="section bg-dark text-light py-5">
        <div className="container">
                <h1>Interest...</h1>  
                <div className="col">
                    <ServiceItem 
                        judul="Web Develpoment"
                        deskripsi="Membangun situs web menggunakan HTML,CSS,Javascript,ReactJs."
                    />
                    <ServiceItem 
                        judul="Desain"
                        deskripsi="Figma, Photoshop, Canva"
                    />
                    <ServiceItem 
                        judul="Others"
                        deskripsi="Wordpress"
                    />
                </div>
        </div>
    </div>
  )
}

export default Services