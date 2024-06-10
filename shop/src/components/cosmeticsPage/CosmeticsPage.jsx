import React from 'react';
import { Link , Outlet } from 'react-router-dom';
import { itemCategory } from '../productCategory/Data';



const CosmeticsPage = () => {
  const cosmeticsItems = itemCategory("آرایشی")

  return (
    <section className='cosmetics container'>
      <div className="row content mt-5">
        {
          cosmeticsItems.map((item) => (
            <div key={item.id} className="item col-md-6 col-lg-3">
              <Link to={`/products/${encodeURIComponent(item.title)}`}>
                <div className="mask-content">
                  <img src={item.img} alt={item.title} width="100%" />
                </div>
                <div className="detail-content">
                  <p>{item.title}</p>
                </div>
              </Link>
              <Outlet />
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default CosmeticsPage;
