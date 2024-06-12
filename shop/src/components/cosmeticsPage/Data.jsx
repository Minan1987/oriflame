import pro01 from '../../assets/img/small-item-1.webp'
import pro02 from '../../assets/img/small-item-2.webp'
import pro03 from '../../assets/img/small-item-3.webp'
import pro04 from '../../assets/img/small-item-36.jpg'
import pro05 from '../../assets/img/small-item-5.webp'
import pro06 from '../../assets/img/small-item-35.jpg'
import pro07 from '../../assets/img/small-item-7.jpg'
import pro08 from '../../assets/img/small-item-8.jpg'
import pro09 from '../../assets/img/small-item-37.jpg'
import pro10 from '../../assets/img/small-item-38.jpg'
import pro11 from '../../assets/img/small-item-11.jpg'
import pro12 from '../../assets/img/small-item-4.webp'
import pro13 from '../../assets/img/small-item-6.webp'

const products = [
   {
      id: "1",
      title: "اسفنج آرایشی گل",
      image: pro01,
      price: 35000,
      category: "آرایش صورت",
      brand: "Oriflame",
      qty: 1,
      desc: ""
   },
   {
      id: "2",
      title: "رژ لب نمادین SPF 15",
      image: pro02,
      price: 16000000,
      category: "آرایش لب",
      brand: "The ONE",
      qty: 1,
      desc: ""
   },
   {
      id: "3",
      title: "رژگونه مرواریدی جوردانی گلد",
      image: pro03,
      price: 450000,
      category: "آرایش صورت",
      brand: "Giordani Gold Rose Petal Blushing Pearls",
      qty: 1,
      desc: ""
   },
   {
      id: "4",
      title: "خط چشم Stylo Jumbo",
      image: pro04,
      price: 850000,
      category: "آرایش چشم",
      brand: "Giordani Gold",
      qty: 1,
      desc: ""
   },
   {
      id: "5",
      title: "ریمل حجم دهنده وان کالر",
      image: pro05,
      price: 990000,
      category: "آرایش چشم",
      brand: "ONCOLOUR",
      qty: 1,
      desc: ""
   },
   {
      id: "6",
      title: "رژ لب مات کالر آنلیمیتد دوان",
      image: pro06,
      price: 500000,
      category: "آرایش لب",
      brand: "Colour Unlimited",
      qty: 1,
      desc: "با ترکیبات مراقبت از لب، روغن جوجوبا و روغن ابربری که سرشار از آنتی اکسیدان هستند، به تغذیه و محافظت از لب ها در برابر عوامل خارجی مانند رادیکال های آزاد آسیب رسانده کمک می کند. فرمول تقویت کننده رطوبت ضروری را برای کمک به کاهش علائم قابل مشاهده پیری لب، فورا و در طول زمان ارائه می دهد. انتظار لب‌های نرم، مرطوب و جوانی داشته باشید که هیچ فرمولی در خطوط ریز ایجاد نمی‌کند."
   },
   {
      id: "7",
      title: "پنکیک جوردانی گلد",
      image: pro07,
      price: 350000,
      category: "آرایش صورت",
      brand: "Giordani Gold Pressed Powder",
      qty: 1,
      desc: ""
   },
   {
      id: "8",
      title: "کپسول برنزر صورت",
      image: pro08,
      price: 890000,
      category: "آرایش صورت",
      brand: "Oriflame",
      qty: 1,
      desc: ""
   },
   {
      id: "9",
      title: "ریمل 5 در 1 Wonder Lash XXL",
      image: pro09,
      price: 1100000,
      category: "آرایش چشم",
      brand: "The ONE",
      qty: 1,
      desc: ""
   },
   {
      id: "10",
      title: "پنکیک Everlasting Sync SPF 30",
      image: pro10,
      price: 590000,
      category: "آرایش صورت",
      brand: "The ONE",
      qty: 1
   },
   {
      id: "11",
      title: "ست سوهان ناخن ۴کاره اوریفلیم",
      image: pro11,
      price: 350000,
      category: "لاک ناخن",
      brand: "Oriflame",
      qty: 1,
      desc: ""
   },
   {
      id: "12",
      title: "ادوتویلت زنانه دِوان",
      image: pro12,
      price: 3500000,
      category: "عطر و ادکلن",
      brand: "The One EdT",
      qty: 1,
      desc: ""
   },
   {
      id: "13",
      title: "عطر زنانه جوردانی گلد",
      image: pro13,
      price: 4500000,
      category: "عطر و ادکلن",
      brand: "GIORDANI GOLD",
      qty: 1,
      desc: ""
   }
]
export default products

export const getProduct = (id) => {
   return products.find(product => product.id === id)
}

export const itemCategory = (category) => {
   return products.filter((item) => item.category === category)
}