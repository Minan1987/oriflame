import imageCat01 from '../../assets/img/small-item-18.jpg'
import imageCat02 from '../../assets/img/small-item-19.jpg'
import imageCat03 from '../../assets/img/small-item-16.jpg'
import imageCat04 from '../../assets/img/small-item-17.jpg'
import imageCat05 from '../../assets/img/small-item-20.jpg'
import imageCat06 from '../../assets/img/small-item-21.jpg'
import imageCat07 from '../../assets/img/small-item-23.jpg'
import imageCat08 from '../../assets/img/small-item-24.jpg'
import imageCat09 from '../../assets/img/small-item-29.jpg'
import imageCat10 from '../../assets/img/small-item-30.jpg'
import imageCat11 from '../../assets/img/small-item-31.jpg'
import imageCat12 from '../../assets/img/small-item-33.jpg'
import imageCat13 from '../../assets/img/small-item-25.jpg'
import imageCat14 from '../../assets/img/small-item-26.jpg'
import imageCat15 from '../../assets/img/small-item-27.jpg'
import imageCat16 from '../../assets/img/small-item-28.jpg'
import imageCat17 from '../../assets/img/category-1.jpg'
import imageCat18 from '../../assets/img/category-2.jpg'
import imageCat19 from '../../assets/img/category-6.jpg'
import imageCat20 from '../../assets/img/category-3.jpg'

const menu = [
    {
        id: 1,
        title: "ماسک پوست",
        category: "محصولات مراقبتی پوست",
        img: imageCat05
    },
    {
        id: 2,
        title: "کرم ضد آفتاب",
        category: "محصولات مراقبتی پوست",
        img: imageCat06
    },
    {
        id: 3,
        title: "مراقبتی لب و چشم",
        category: "محصولات مراقبتی پوست",
        img: imageCat07
    },
    {
        id: 4,
        title: "ابزار مراقبت از پوست",
        category: "محصولات مراقبتی پوست",
        img: imageCat08
    },
    {
        id: 5,
        title: "سِرم و درمان",
        category: "محصولات مراقبتی پوست",
        img: imageCat01
    },
    {
        id: 6,
        title: "کمپین خرید محصولات Novage+",
        category: "محصولات مراقبتی پوست",
        img: imageCat02
    },
    {
        id: 7,
        title: "پاک کننده و تونر",
        category: "محصولات مراقبتی پوست",
        img: imageCat03
    },
    {
        id: 8,
        title: "مرطوب کننده",
        category: "محصولات مراقبتی پوست",
        img: imageCat04
    },
    {
        id: 9,
        title: "شامپو",
        category: "محصولات مراقبتی مو",
        img: imageCat09
    },
    {
        id: 10,
        title: "نرم کننده و تقویت کننده مو",
        category: "محصولات مراقبتی مو",
        img: imageCat10
    },
    {
        id: 11,
        title: "ژل، موس و اسپری مو",
        category: "محصولات مراقبتی مو",
        img: imageCat11
    },
    {
        id: 12,
        title: "ماسک مو",
        category: "محصولات مراقبتی مو",
        img: imageCat12
    },
    {
        id: 13,
        title: "عطر زنانه",
        category: "عطر و ادکلن",
        img: imageCat13
    },
    {
        id: 14,
        title: "عطر مردانه",
        category: "عطر و ادکلن",
        img: imageCat14
    },
    {
        id: 15,
        title: "مام و اسپری ضد تعریق",
        category: "عطر و ادکلن",
        img: imageCat15
    },
    {
        id: 16,
        title: "بادی اسپلش",
        category: "عطر و ادکلن",
        img: imageCat16
    },
    {
        id: 17,
        title: "آرایش صورت",
        category: "آرایشی",
        img: imageCat17
    },
    {
        id: 18,
        title: "لاک ناخن",
        category: "آرایشی",
        img: imageCat18
    },
    {
        id: 19,
        title: "آرایش چشم",
        category: "آرایشی",
        img: imageCat19
    },
    {
        id: 20,
        title: "آرایش لب",
        category: "آرایشی",
        img: imageCat20
    },
]
export default menu

export const itemCategory = (category) => {
    return menu.filter((item) => item.category === category)
}

