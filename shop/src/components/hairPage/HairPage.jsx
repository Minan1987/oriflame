import React from 'react';
import { itemCategory } from '../productCategory/Data'

const HairPage = () => {
  const hairItems = itemCategory("محصولات مراقبتی مو")
  return (
    <div className='container'>
      <div className="row">
        {
          hairItems.map((item) => (
            <div key={item.id} className="item col-md-6 col-lg-3">
              <a href="#" className="">
                <div className="mask-content">
                  <img src={item.img} alt={item.title} width="100%" />
                </div>
                <div className="detail-content">
                  <p>{item.title}</p>
                </div>
              </a>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default HairPage;
