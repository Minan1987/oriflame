import React from 'react'

const PaymentStep = ({ previousStep, nextStep }) => {
    return (
        <div className="text-center">
            <h3 className="text-lg font-bold mb-4">پرداخت</h3>
            <p>درگاه پرداخت یا خلاصه سفارش...</p>
            <div className="flex justify-center gap-3 mt-5">
                <button
                    className="bg-gray-400 text-white px-4 py-2 rounded"
                    onClick={previousStep}
                >
                    قبلی
                </button>
                <button
                    className="bg-primary text-white px-4 py-2 rounded"
                    onClick={nextStep}
                >
                    پرداخت
                </button>
            </div>
        </div>
    )
}

export default PaymentStep
