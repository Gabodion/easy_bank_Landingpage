import React from 'react';
import "./Services.css";
import serviceData from './data';


const Services = () => {
  return (
    <div className="Service__wrapper">
      <div className='Service__title'>
        <h1>Why choose Easybank?</h1>
        <p>We leverage Open Banking to turn your bank account into your financial hub. Control
          your finances like never before.</p>
      </div>
      <div className='row'>
      {serviceData.map(data => {
        
       return(
        
          <div key={data.id} className="col-lg-3 col-md-6 Service__features">
            <img src={data.img} />
            <h3>{data.title}</h3>
            <p>{data.desc}</p>
          </div>
        )}
       
      )}
      </div>
    </div>
  )
}

export default Services