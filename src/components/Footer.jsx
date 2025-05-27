import footerLogo from "/img/logo-main-dark.png"
import {
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
  FaGem,
  FaHome,
  FaEnvelope,
  FaPhone,
  FaPrint,
} from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaLinkedin, FaPinterest } from 'react-icons/fa';
import CustomNumeralNumericFormat from "./Price";

const Footer = () => {
  return (
    <footer className="[background-image:url('/img/footer-bg.jpg')] bg-no-repeat bg-cover bg-center text-gray-700 text-center lg:text-right font-sans">

      {/* خبرنامه */}
      {/* <div>
        <form action="">
          <div className="grid-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
            <div className="md:mb-6 md:ms-auto">
              <p>
                <strong>برای دریافت خبرنامه ما عضو شوید</strong>
              </p>
            </div>

            <div className="relative md:mb-6" data-twe-input-wrapper-init>
              <input
                type="email"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary"
                id="exampleFormControlInputEmail"
                placeholder="آدرس ایمیل"
              />
              <label
                htmlFor="exampleFormControlInputEmail"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
              >
                آدرس ایمیل
              </label>
            </div>

            <div className="mb-6 md:me-auto">
              <button
                type="submit"
                class="inline-block rounded px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-surface shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:bg-neutral-700 dark:text-white"
                data-twe-ripple-init
                data-twe-ripple-color="light">
                عضویت
              </button>
            </div>
          </div>
        </form>
      </div> */}

      {/* محتوای اصلی */}
      <div className="mx-6 py-10 text-center md:text-right">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* درباره ما */}
          <div >
            <img src={footerLogo}
              alt="لوگو"
              className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-45 h-auto mb-3" />
            <p>
              برند اوریفلیم (Oriflame)، یکی از شرکت های معتبر در زمینه تولید محصولات آرایشی و بهداشتی ارگانیک در اروپاست می باشد.
              محصولات آرایشی و بهداشتی شرکت اوریفلیم، کاملا طبیعی و ارگانیک هستند و بدون هیچگونه مواد شیمیایی می باشد.
            </p>
          </div>

          {/* دسته‌بندی‌ها */}
          <div>
            <h6 className="mb-4 font-semibold uppercase text-pink-600">دسته‌بندی‌ها</h6>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">درباره ما</a></li>
              <li><a href="#" className="hover:underline">مشاهده محصولات</a></li>
              <li><a href="#" className="hover:underline">اطمینان از اصل بودن محصولات</a></li>
              <li><a href="#" className="hover:underline">نحوه ارسال سفارش</a></li>
              <li><a href="#" className="hover:underline">شرایط و قوانین استفاده از سایت</a></li>
              <li><a href="#" className="hover:underline">حفظ حریم خصوصی</a></li>
            </ul>
          </div>

          {/* لینک‌های مفید */}
          <div>
            <h6 className="mb-4 font-semibold uppercase text-pink-600">لینک‌های مفید</h6>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">قوانین خرید</a></li>
              <li><a href="#" className="hover:underline">سؤالات متداول</a></li>
              <li><a href="#" className="hover:underline">پیگیری سفارش</a></li>
              <li><a href="#" className="hover:underline">تماس با ما</a></li>
            </ul>
          </div>

          {/* تماس با ما */}
          <div>
            <h6 className="mb-4 font-semibold uppercase text-pink-600">تماس با ما</h6>
            <ul className="space-y-2">
              <li className="flex justify-center md:justify-start items-center gap-2"><FaHome /> تهران، خیابان ولیعصر</li>
              <li className="flex justify-center md:justify-start items-center gap-2"><FaEnvelope /> info@oriflame.ir</li>
              <li className="flex justify-center md:justify-start items-center gap-2"><FaPhone />
                <CustomNumeralNumericFormat
                    value="0912 4548 361"
                />
              </li>
              <li className="flex justify-center md:justify-start items-center gap-2"><FaPrint />
              <CustomNumeralNumericFormat  className="[direction:ltr]"
              value={87654321}
              prefix={`021- `}
               
               />
               </li>
            </ul>
          </div>
        </div>
      </div>

      {/* شبکه های اجتماعی */}
      <div className="mb-6 flex justify-center space-x-2 pt-6">
        <a
          href="#!"
          type="button"
          className="rounded-full bg-white p-3 uppercase leading-normal text-surface shadow-lg transition duration-150 ease-in-out hover:shadow-xl focus:shadow-xl focus:outline-none focus:ring-0 active:shadow-lg dark:bg-neutral-700 dark:text-white"
        >
          <FaFacebook className="h-5 w-5" />
        </a>

        <a
          href="#!"
          type="button"
          className="rounded-full bg-white p-3 uppercase leading-normal text-surface shadow-lg transition duration-150 ease-in-out hover:shadow-xl focus:shadow-xl focus:outline-none focus:ring-0 active:shadow-lg dark:bg-neutral-700 dark:text-white"
        >
          <FaTwitter className="h-5 w-5" />
        </a>

        <a
          href="#!"
          type="button"
          className="rounded-full bg-white p-3 uppercase leading-normal text-surface shadow-lg transition duration-150 ease-in-out hover:shadow-xl focus:shadow-xl focus:outline-none focus:ring-0 active:shadow-lg dark:bg-neutral-700 dark:text-white"
        >
          <FaInstagram className="h-5 w-5" />
        </a>

        <a
          href="#!"
          type="button"
          className="rounded-full bg-white p-3 uppercase leading-normal text-surface shadow-lg transition duration-150 ease-in-out hover:shadow-xl focus:shadow-xl focus:outline-none focus:ring-0 active:shadow-lg dark:bg-neutral-700 dark:text-white"
        >
          <FaLinkedin className="h-5 w-5" />
        </a>

        <a
          href="#!"
          type="button"
          className="rounded-full bg-white p-3 uppercase leading-normal text-surface shadow-lg transition duration-150 ease-in-out hover:shadow-xl focus:shadow-xl focus:outline-none focus:ring-0 active:shadow-lg dark:bg-neutral-700 dark:text-white"
        >
          <FaPinterest className="h-5 w-5" />
        </a>
      </div>


      {/* کپی‌رایت */}
      <div className="p-4 text-center text-sm">
        © 2025 کلیه حقوق محفوظ است | طراحی توسط <a href="https://yourwebsite.com" className="font-bold text-pink-700 dark:text-pink-300 hover:underline">Mina Nazari</a>
      </div>
    </footer >
  );
};

export default Footer