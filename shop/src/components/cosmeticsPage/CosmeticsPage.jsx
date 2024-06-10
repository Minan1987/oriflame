import React, { useState } from 'react';
import Filter from './Filter';
import Products from './Products';
import Cart from './Cart';
import data from './Data'
import { itemCategory } from '../productCategory/Data';

const CosmeticsPage = () => {
  const cosmeticsItems = itemCategory("آرایشی")
  const [items, setItems] = useState(data)
  const [sort, setSort] = useState("asc")
  const [filterCategory, setFilterCategory] = useState("")
  const [cartItems, setCartItems] = useState([])

  const sortProducts = (event) => {
    setSort(event.target.value)
    if (sort === "asc") {
      setItems(data.sort((a, b) => (a.id < b.id ? 1 : -1)))
    }
    if (sort === "desc") {
      setItems(data.sort((a, b) => (a.id > b.id ? 1 : -1)))
    }
  }

  const filterProduct = (event) => {
    const category = event.target.value;
    setFilterCategory(category);
    if (category === "") {
      setItems(cosmeticsItems);
    } else {
      setItems(cosmeticsItems.filter(product => product.category.indexOf(category) >= 0));
    }
  };

  const addProduct = (product) => {
    const exist = cartItems.find((element) => element.id === product.id)
    if (exist) {
      setCartItems(
        cartItems.map((element) => element.id === product.id ? { ...exist, qty: exist.qty + 1 } : element)
      )
    } else {
      setCartItems([...cartItems, { ...product }])
    }

  }

  const removeProduct = (product) => {
    const exist = cartItems.find((element) => element.id === product.id)
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((element) => element.id !== product.id))
    } else {
      setCartItems(
        cartItems.map((element) => element.id === product.id ? { ...exist, qty: exist.qty - 1 } : element)
      )
    }
  }

  return (
    <section className='cosmetics container'>
      <div className="row content mt-5">
        {
          cosmeticsItems.map((item) => (
            <div key={item.id} className="item col-md-6 col-lg-3">
              <a href="#">
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
        <div className="col-sm-8 main">
          <Filter
            count={items.length}
            sortProducts={sortProducts}
            filterCategory={filterCategory}
            filterProduct={filterProduct}
          />
          <Products
            items={items}
            addProduct={addProduct}
          />
        </div>
        <div className="col-sm-4 sidebar">
          <Cart
            removeProduct={removeProduct}
            cartItems={cartItems}
          />
        </div>
      </div>
    </section>
  );
}

export default CosmeticsPage;
