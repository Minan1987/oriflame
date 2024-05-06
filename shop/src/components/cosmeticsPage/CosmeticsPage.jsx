import React, { useState } from 'react';
import Filter from './Filter';
import Products from './Products';
import Cart from './Cart';
import data from './Data'

const CosmeticsPage = () => {
  const [item, setItem] = useState(data)
  const [sort, setSort] = useState("asc")
  const [filterCategory, setFilterCategory] = useState("")

  const sortProducts = (event) => {
    setSort(event.target.value)
    if (sort === "asc") {
      setItem(data.sort((a, b) => (a.id < b.id ? 1 : -1)))
    }
    if (sort === "desc") {
      setItem(data.sort((a, b) => (a.id > b.id ? 1 : -1)))
    }
  }

  const filterProduct = (event) => {
    if (event.target.value === "") {
      setFilterCategory(event.target.value)
      setItem(data)
    } else {
      setFilterCategory(event.target.value)
      setItem(data.filter((product) => product.category.indexOf(event.target.value) >= 0))
    }
  }

  return (
    <section className='cosmetics container'>
      <div className="row content">
        <div className="col-sm-8 main">
          <Filter
            count={item.length}
            sortProducts={sortProducts}
            filterCategory={filterCategory}
            filterProduct={filterProduct}
          />
          <Products item={item} />
        </div>
        <div className="col-sm-4 sidebar">
          <Cart />
        </div>
      </div>
    </section>
  );
}

export default CosmeticsPage;
