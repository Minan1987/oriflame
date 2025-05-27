import React, { useEffect } from 'react'
import spa from "/img/herbs.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const MotivationContent = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div className='container px-20 pt-20 pb-10 text-center'>
            <div className="flex flex-col items-center justify-center" data-aos="fade-down">
                <h3 className='flex items-end text-primary text-2xl font-bold mb-5'><img src={spa} width="45px" className='ml-2' />به آرامش درونی‌ات برس</h3>
                <p>زندگی خوب یعنی زندگی به <b>سبک خودت</b>!  ما باور داریم که حال خوب برای هر کسی معنای خاص خودش رو داره و راستش رو بخوای، تو هر لحظه از زندگی می‌تونه فرق کنه.
                    یه وقتایی فقط یه شب دنج با سریال موردعلاقه‌ت و یه ماسک صورت مغذی حالتو خوب می‌کنه، یه وقتایی هم انرژی می‌خوای و بودن بین دوستات برات بهترین حس دنیاست.
                    ما اینجاییم تا بهت کمک کنیم خودت باشی، بدون قضاوت و بدون انتظار.

                    ما یه جامعه‌ از آدم‌های عاشق زیبایی و زندگی سالمیم – با روحیه‌ای کارآفرین و حمایت‌گر.
                    قراره با هم مسیر منحصر‌به‌فرد تو رو برای داشتن یه حس خوب بسازیم...
                    تا از هر لحظه زندگی لذت ببری. چون خوشحال بودن، به همه میاد! 🌸</p>
                <div className="seprator my-7"></div>
            </div>
        </div>
    )
}

export default MotivationContent
