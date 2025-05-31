import React from 'react'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../../features/authSlice'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useLoginMutation } from '../../api/apiSlice'
import { toast } from 'react-toastify'


const LoginForm = ({ onSuccess }) => {
    const dispatch = useDispatch()
    const [login, { isLoading }] = useLoginMutation()

    const formik = useFormik({
        initialValues: { email: '', password: '' },
        validationSchema: Yup.object({
            email: Yup.string().email('ایمیل شما نامعتبر است.').required('لطفا ایمیل خود را وارد کنید.'),
            password: Yup.string().min(6, 'رمز عبور باید حداقل ۶ کاراکتر باشد.').required('لطفا رمز عبور خود را وارد کنید.')
        }),
        onSubmit: async (values) => {
            try {
                const result = await login(values).unwrap()
                if (result.length > 0) {
                dispatch(loginSuccess(result[0]))
                    toast.success(`خوش آمدید ${result[0].name}`)
                    onSuccess(result[0])
                } else {
                    alert('ایمیل یا رمز عبور نادرست است')
                }
            } catch (err) {
                alert('خطا در ورود: ' + err.message)
            }
        }
    })
    return (
        <form onSubmit={formik.handleSubmit} className="space-y-4">
            <input
                name="email"
                placeholder="ایمیل"
                className="w-full p-2 border border-gray-300 rounded"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
                <p className="text-sm text-red-500">{formik.errors.email}</p>
            )}

            <input
                name="password"
                type="password"
                placeholder="رمز عبور"
                className="w-full p-2 border border-gray-300 rounded"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
                <p className="text-sm text-red-500">{formik.errors.password}</p>
            )}

            <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary-600 text-white py-2 rounded hover:bg-primary-700 transition-colors duration-300 ease-in-out"
            >
                {isLoading ? 'در حال ورود...' : 'ورود'}
            </button>
        </form>
    )
}

export default LoginForm
