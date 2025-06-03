import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useLazyCheckUserByEmailQuery, useRegisterMutation } from '../../api/apiSlice'
import { toast } from 'react-toastify'

const RegisterForm = ({ onSuccess }) => {
    const [checkUserByEmail] = useLazyCheckUserByEmailQuery()
    const [register, { isLoading }] = useRegisterMutation()

    const formik = useFormik({
        initialValues: { name: '', email: '', password: '' },
        validationSchema: Yup.object({
            name: Yup.string().required('نام الزامی است'),
            email: Yup.string().email('ایمیل نامعتبر').required('ایمیل الزامی است'),
            password: Yup.string().min(6, 'حداقل ۶ کاراکتر').required('رمز عبور الزامی است'),
        }),
        onSubmit: async (values) => {
            try {

                //چک کردن ایمیل تکراری
                const result = await checkUserByEmail(values.email)
                const existingUsers = result?.data

                if (existingUsers && existingUsers.length > 0) {
                    toast.error("شما قبلا با این ایمیل ثبت نام کرده‌اید.")
                    return
                }

                if (existingUsers.length > 0) {
                    toast.error("شما قبلا با این ایمیل ثبت نام کرده‌اید.")
                    return
                }

                const res = await register(values).unwrap()
                localStorage.setItem('user', JSON.stringify(res))
                toast.success(`خوش آمدید ${res.name}`)
                onSuccess(res)
            } catch (err) {
                toast.error('خطا در ثبت‌نام. لطفاً دوباره تلاش کنید.')
            }
        },
    })

    return (
        <form onSubmit={formik.handleSubmit} className="space-y-4" autoComplete='off'>
            <input
                name="name"
                placeholder="نام"
                className="w-full p-2 border border-gray-300 rounded"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name && (
                <p className="text-sm text-red-500">{formik.errors.name}</p>
            )}

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
                {isLoading ? 'در حال ثبت‌نام...' : 'ثبت‌نام'}
            </button>
        </form>
    )
}

export default RegisterForm