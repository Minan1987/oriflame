import React, { useMemo, useState } from 'react'
import StepWizard from 'react-step-wizard';
import { Helmet } from 'react-helmet-async';
import CartStep from '../cart/CartStep';
import InfoStep from '../cart/InfoStep';
import PaymentStep from '../cart/PaymentStep';
import { FaCheck } from "react-icons/fa";
import emptyCart from "/img/empty-cart.svg";
import { useGetCartQuery } from '../../api/apiSlice';


const StepHeader = ({ currentStep }) => {
    const steps = [
        { id: 1, label: "سبد خرید" },
        { id: 2, label: "اطلاعات / ورود" },
        { id: 3, label: "پرداخت" },
    ];

    return (
        <div className="flex justify-between items-center mb-8">
            {steps.map((step, index) => {
                const stepNumber = index + 1;
                const isCurrent = currentStep === stepNumber;
                const isCompleted = currentStep > stepNumber;

                return (
                    <div key={index} className="flex flex-col items-center flex-1 relative">
                        {/* خط اتصال مراحل */}
                        {index !== 0 && (
                            <div
                                className={`absolute top-4 left-1/2 w-full h-0.5 ${currentStep >= index + 1 ? "bg-green-500" : "bg-gray-300"
                                    }`}
                            ></div>
                        )}

                        {/* دایره مرحله */}
                        <div
                            className={`w-8 h-8 flex items-center justify-center rounded-full text-white text-sm z-10
                            ${isCurrent ? "bg-primary" : isCompleted ? "bg-green-500" : "bg-gray-400"}`}
                        >
                            {isCompleted ? <FaCheck size={14} /> : stepNumber}
                        </div>

                        {/* عنوان مرحله */}
                        <span className="mt-2 text-sm">{step.label}</span>
                    </div>
                );
            })}
        </div>
    );
};

const CartPage = () => {

    const [step, setStep] = useState(1);
    // اطلاعات سبد خرید رو از سرور بگیر:(producId, quantity)
    const { data: cart, isSuccess, isLoading } = useGetCartQuery();

    const isCartEmpty = useMemo(() => {
        return isSuccess && (!cart || cart.length === 0);
    }, [cart, isSuccess]);

    return (
        <>
            <Helmet>
                <title> سبد خرید | اوریفلیم</title>
                <meta name="اوریفلیم" content="فروشگاه اینترنتی محصولات آرایشی و بهداشتی" />
            </Helmet>
            <section className='container mx-auto'>
                <div className="w-full flex items-center justify-center">
                    <div className='w-full lg:max-w-6xl mx-auto p-2 lg:p-4 m-6 bg-white rounded shadow'>
                        {isLoading ? (
                            <p className='text-center py-10'>در حال بارگذاری...</p>
                        ) : isCartEmpty ? (
                            <div className="flex flex-col justify-center items-center gap-y-5 text-center text-gray-600 mt-10 text-lg font-medium">
                                <img src={emptyCart} className='object-contain' width="200px" height="150px" alt='سبد خرید خالی' />
                                سبد خرید شما خالی است.
                            </div>
                        ) : (
                            <>
                                <StepHeader currentStep={step} />
                                <StepWizard onStepChange={({ activeStep }) => setStep(activeStep)}>
                                    <CartStep />
                                    <InfoStep />
                                    <PaymentStep />
                                </StepWizard>
                            </>
                        )}
                    </div>
                </div>
            </section>

        </>

    )
}

export default CartPage
