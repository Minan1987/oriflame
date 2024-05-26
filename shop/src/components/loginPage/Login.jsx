import React from 'react'
import { useForm } from 'react-hook-form'

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
        }
    })

    const formSubmitting = (data) => {

    }

    return (
        <div className="contianer">
            <div className='row mb-5 rounded-2 p-5 d-flex justify-content-center'>
                <div className="col-md-6 col-lg-4 border p-3 rounded">
                    <h2 className='h5 mb-4'>ورود | عضویت</h2>
                    <form onSubmit={handleSubmit(formSubmitting)} className='form-group'>
                        <input
                            className='form-control mb-3 w-100'
                            type="text"
                            placeholder='نام شما...'
                            {...register("name", {
                                required: "وارد کردن نام ضروری است.",
                                minLength: {
                                    value: 3,
                                    message: "نام شما باید حداقل شامل ۳ کاراکتر باشد."
                                },
                                maxLength: {
                                    value: 12,
                                    message: "نام شما باید حداکثر شامل ۱۲ کاراکتر باشد."
                                },
                            })
                            }
                        />
                        {errors.name && errors.name.message}
                        <input
                            className='form-control mb-3 w-100'
                            type="email"
                            placeholder='ایمیل شما...'
                            {...register("email", {
                                required: "وارد کردن ایمیل ضروری است.",
                                minLength: {
                                    value: 10,
                                    message: "ایمیل باید حداقل شامل ۱۰کاراکتر باشد"
                                },
                                maxLength: {
                                    value: 30,
                                    message: "ایمیل باید حداکثر شامل ۳۰ کاراکتر باشد."
                                },
                                pattern: {
                                    value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g,
                                    message: "ایمیل معتبر نیست."
                                }
                            })
                            }
                        />
                        {errors.email && errors.email.message}
                        <div className='d-flex justify-content-between'>
                            <p>
                                ثبت نام کرده اید؟ <a href="#">ورود</a>
                            </p>
                            <button type='submit' className='btn btn-primary mb-3'>ثبت نام</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    )
}

export default Login
