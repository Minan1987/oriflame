import React from 'react'
import pro1 from '../../assets/img/small-item-1.webp'

function Cart(props) {
    const { cartItems, removeProduct } = props
    const totalPrice = cartItems.reduce((a, b) => a + b.price * b.qty, 0)
    return (
        <div className="cart bg-light p-3 mt-4 rounded">
            {
                cartItems.length === 0 ? <div className="empty-price my-4">سبد خرید خالی است</div> : <div className="show-price my-4">شما {cartItems.length} محصول در سبد خرید دارید.</div>
            }
            {
                cartItems.map((item) =>
                    <div key={item.id}>
                        <div className="cart-item">
                            <div className="product-item d-flex justify-content-between align-items-center">
                                <div className="product-details d-flex align-items-center">
                                    <img src={item.image} alt={item.title} width="25%" />
                                    <h2 className='me-2'>{item.title}</h2>
                                </div>
                                <div className="product-price text-left">
                                    <div className="price d-flex align-items-center">
                                        <div>{item.price} تومان</div>
                                        <div className='purchases-number'>{item.qty} خرید</div>
                                    </div>
                                    <div className="remove-item mt-4">
                                        <button className='btn btn-outline-orif' onClick={() => removeProduct(item)}>حذف از سبد</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="total-price bg-white p-2 mt-4 rounded d-flex justify-content-between">
                            <h4 className='total-text'>مجموع قیمت:</h4>
                            <div className="total">{totalPrice} تومان</div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Cart
