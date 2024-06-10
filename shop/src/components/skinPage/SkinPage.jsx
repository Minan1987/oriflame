import React from 'react';
import {itemCategory} from '../productCategory/Data'

const SkinPage = () => {
  const skinItems = itemCategory("محصولات مراقبتی پوست")
  return (
    <div className='container'>
      <div className="row">
        {
          skinItems.map((item) => (
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

export default SkinPage;
