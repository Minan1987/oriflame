import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useRegisterMutation } from '../../api/apiSlice'
import { toast } from 'react-toastify'

const RegisterForm = ({ onSuccess }) => {
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
                const res = await register(values).unwrap()
                if (res.length > 0) {
                    localStorage.setItem('user', JSON.stringify(res[0]))
                    toast.success(`خوش آمدید ${res[0].name}`)
                    onSuccess(res[0])
                } else {
                    alert('ایمیل یا رمز عبور نامعتبر است')
                }
            } catch (err) {
                alert('خطا در ثبت‌نام')
            }
        },
    })

    return (
        <form onSubmit={formik.handleSubmit} className="space-y-4">
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