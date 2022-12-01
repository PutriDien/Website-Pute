import React from 'react'
import "../styles/ServiceItem.css"

const ServiceItem = (props) => {
  return (
    <div className="col-6 mt-3">
        <div className="card text-dark">
            <div className="card-body">
                <h5 className="card-title">{props.judul}</h5>
                <p className="card-text">{props.deskripsi}</p>
            </div>
        </div>
    </div>
  )
}

export default ServiceItem