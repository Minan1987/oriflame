import React from 'react'
import { toast } from 'react-toastify'
import {
    useGetCartQuery,
    useAddToCartMutation,
    useUpdateCartItemMutation
} from '../api/apiSlice'


const AddToCartButtom = ({ productId, quantity }) => {
    
    const { data: cart } = useGetCartQuery()
    const [addToCart] = useAddToCartMutation()
    const [updateCartItem] = useUpdateCartItemMutation()

    const handleAddToCart = async () => {
        try {
            // بررسی اینکه محصول قبلاً در سبد هست یا نه
            const existingItem = cart?.find(item => item.productId === productId)

            if (existingItem) {
                await updateCartItem({
                    itemId: existingItem.id,
                    quantity: existingItem.quantity + quantity
                    
                })
                toast.warning("محصول قبلاً در سبد خرید بوده، مقدار آن افزایش یافت.")
            } else {
                await addToCart({ productId, quantity }).unwrap()
                toast.success("محصول با موفقیت به سبد خرید اضافه شد.")
            }
        } catch (err) {
            toast.error("خطا در افزودن محصول به سبد خرید.")
        }
    }


    return (
        <button
            onClick={handleAddToCart}
            className="bg-primary text-white px-6 py-2 rounded-lg shadow-md hover:bg-primary-accent-300 focus:outline-none focus:ring-2 focus:ring-primary-500 active:bg-primary-600"
        >
            اضافه به سبد خرید
        </button>
    )
}

export default AddToCartButtom
