import React from 'react'
import pro1 from '../../assets/img/small-item-1.webp'

function Cart() {
    return (
        <div className="cart bg-light p-3 mt-4 rounded">
            <div className="empty-price text-danger my-4">سبد خرید خالی است</div>
            <div className="cart-item">
                <div className="product-item d-flex justify-content-between align-items-center">
                    <div className="product-details d-flex align-items-center">
                        <img src={pro1} alt="اسفنج آرایشی" width="30%"/>
                        <h2 className='h6 me-2'>اسفنج آرایشی گل</h2>
                    </div>
                    <div className="product-price text-left">
                        <div className="price">
                            <span>۴۲۰,۰۰۰ تومان</span>
                            <span className='purchases-number'>۱ خرید</span>
                        </div>
                        <div className="remove-item mt-4">
                            <button className='btn btn-outline-orif'>حذف از سبد</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="total-price bg-white p-2 mt-4 rounded d-flex justify-content-between">
                <h4 className='total-text'>مجموع قیمت:</h4>
                <div className="total">۵۰۰۰۰۰ تومان</div>
            </div>
        </div>
    )
}

export default Cart
