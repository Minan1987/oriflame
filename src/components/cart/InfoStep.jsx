import React from 'react'

const InfoStep = ({ nextStep, previousStep }) => {
    return (
        <div className="text-center">
            <h3 className="text-lg font-bold mb-4">اطلاعات / ورود</h3>
            <p>فرم اطلاعات تماس و ورود کاربر...</p>
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
                    ادامه
                </button>
            </div>
        </div>
    )
}

export default InfoStep
