import React, { useMemo } from 'react'
import Spinner from '../Spinner'
import { useGetCartQuery, useGetProductsQuery, useRemoveFromCartMutation, useUpdateCartItemMutation } from '../../api/apiSlice'
import CustomNumeralNumericFormat from '../Price'
import { FiPlus, FiMinus } from "react-icons/fi"
import { RxCross2 } from "react-icons/rx";


const CartStep = ({ nextStep }) => {

    //1. اطلاعات سبد خرید رو از سرور بگیر:(producId, quantity)
    const { data: cart, isSuccess: cartSuccess } = useGetCartQuery()
    //2. اطلاعات محصولات رو از سرور بگیر:(id, price, discount)
    const { data: products, isSuccess: productsSuccess } = useGetProductsQuery()
    const [updateCartItem] = useUpdateCartItemMutation()
    const [removeCartItem] = useRemoveFromCartMutation()

    const handleIncreaseQty = (item) => {
        updateCartItem({
            itemId: item.id,
            quantity: item.quantity + 1
        })
    }
    const handleDecreaseQty = (item) => {
        if (item.quantity > 1) {
            updateCartItem({
                itemId: item.id,
                quantity: item.quantity - 1
            })
        } else {
            // اگه رسید به 1 و باز کم کرد، حذفش کن
            removeCartItem(item.id)
        }

    }
    const handleRemoveItem = (item) => {
        removeCartItem(item.id)
    }

    //3. برای هر آیتم داخل سبد خرید، اطلاعات کامل محصول + قیمت بعد از تخفیف رو محاسبه کنیم.
    const cartWithDetail = useMemo(() => {
        // اگه داده‌ها هنوز بارگذاری نشده باشن، یک آرایه‌ی خالی برمی‌گردونه
        if (!cart || !products) return []

        return cart.map(item => {
            const product = products.find(p => p.id === item.productId)
            console.log(item.quantity)
            const discountPrice = product ? product.price - (product.price * product.discount) / 100 : 0
            return { ...item, product, discountPrice }
        })
    }, [cart, products])

    //4. مبلغ قابل پرداخت رو محاسبه کنیم.
    const totalPrice = useMemo(() => {
        // reduce: تمام آیتم‌های سبد رو جمع می‌کنه
        return cartWithDetail.reduce((acc, item) => acc + (item.discountPrice * item.quantity), 0)
    }, [cartWithDetail])

    if (!cartSuccess || !productsSuccess) {
        return <Spinner />
    }
    return (
        <div className="cart m-5">
            <div className="w-full flex flex-col lg:flex-row justify-between gap-3">
                <div className="w-full p-4 bg-white  sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4 pb-7 border-b">
                        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">سبد خرید</h5>
                        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">قیمت</h5>
                        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">تعداد</h5>
                        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">قیمت کل</h5>
                    </div>
                    <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                            {cartWithDetail.map(item => (
                                <li className="py-3 border-b sm:py-4" key={item.id}>
                                    <div className="flex items-center">
                                        <div className='flex items-center justify-center'>
                                            <button onClick={() => handleRemoveItem(item)} className='p-5'>
                                                <RxCross2 style={{ color: "tomato", fontSize: "1.3rem" }} />
                                            </button>
                                        </div>
                                        <div className="shrink-0">
                                            <img src={item.product.image} alt={item.product.title} className="w-16 h-16" />

                                        </div>
                                        <div className="flex-1 min-w-0 ms-4">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                {item.product.title}
                                            </p>
                                        </div>
                                        <div className="flex-1 min-w-0 ms-4">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                <CustomNumeralNumericFormat
                                                    value={item.discountPrice}
                                                    thousandSeparator=","
                                                // prefix="قیمت با تخفیف: "
                                                />
                                            </p>
                                        </div>
                                        <div className="flex-1 min-w-0 ms-4">
                                            <div className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                <div className="flex items-center justify-center me-6">
                                                    <button
                                                        onClick={() => handleDecreaseQty(item)}
                                                        className="bg-gray-200 p-3 rounded"
                                                    >
                                                        <FiMinus />
                                                    </button>
                                                    <span className="w-10 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => handleIncreaseQty(item)}
                                                        className="bg-gray-200 p-3 rounded"
                                                    >
                                                        <FiPlus />
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="w-full inline-flex items-center justify-start text-base font-semibold text-gray-900 dark:text-white">
                                            <CustomNumeralNumericFormat
                                                value={totalPrice}
                                                thousandSeparator=","
                                                prefix="تومان "
                                                className="text-lg text-gray-800 font-bold"
                                            />
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">مجموع کل سبد خرید</h5>
                    </div>
                    <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center">

                                    <div className="flex-1 min-w-0 ms-4">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            قیمت کل:
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        <CustomNumeralNumericFormat
                                            value={totalPrice}
                                            thousandSeparator=","
                                            suffix="تومان "
                                            className="text-lg text-gray-800 font-bold"
                                        />
                                    </div>
                                </div>
                            </li>
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center ">

                                    <div className="flex-1 min-w-0 ms-4">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            حمل و نقل
                                        </p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            پست ( سفارشتان بین 7 تا 30 روز کاری به دستتان خواهد رسید): تومان120.000
                                        </p>
                                    </div>
                                    {/* <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                تعییر آدرس
                                            </div> */}
                                </div>
                            </li>
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center">
                                    <div className="flex-1 min-w-0 ms-4">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            مجموع
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        <CustomNumeralNumericFormat
                                            value={totalPrice + 120000}
                                            thousandSeparator=","
                                            suffix="تومان "
                                            className="text-lg text-gray-800 font-bold"
                                        />
                                    </div>


                                </div>
                            </li>
                            <li className="py-3 sm:py-4">
                                <div className="inline-flex items-center justify-center">
                                    <button
                                        className="bg-primary text-white px-4 py-2 mt-5 rounded"
                                        onClick={nextStep}
                                    >
                                        ادامه
                                    </button>
                                </div>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartStep
