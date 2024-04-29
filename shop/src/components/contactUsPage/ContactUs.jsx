import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify'; 

const ContactUs = () => {
    const sendMessage = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_sncjg0j', 'template_25wmhfq', e.target, 'WjTWbuqJG3N6ilwCW')
            .then(result => {
                if(result.status === 200){
                    toast.success('پیام شما با موفقیت ارسال شد.', {position:"top-center", closeOnClick:true})
                }
            }, (error) =>{
                console.log(error);
            })
    }
    return (
        <section className='container mb-5'>
            <div className="title text-center py-5 mb-5">
                <h2>تماس با ما</h2>
                <p>راه های ارتباطی با اوریف مارکت:</p>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <p>در صورت تمایل برای مطرح کردن هرگونه سوال در مورد محصولات، مشاوره در مورد آنها و یا سفارش محصول خاصی از اوریفلیم از طریق روش های زیر در ارتباط باشید.  هدف ما جلب رضایت شما عزیزان است و از اینرو در کمترین زمان ممکن به سوالات شما پاسخ خواهیم داد.
                    </p><b />
                    <h3 className='h6'><MdOutlineEmail /> orifmarket@gmail.com</h3>
                    <h3 className='h6'><BsTelephone /> 09027132201</h3>
                    <p>همچنین در صورت تمایل هنگام ثبت سفارش شماره تلفن خود را ارائه دهید تا کارشناسان ما در اسرع وقت با شما تماس حاصل نمایند.</p>
                    <form onSubmit={sendMessage}>
                        <div className='form-group mb-3'>
                            <input className='form-control p-3'
                                type="text"
                                name='name'
                                placeholder='نام شما' />
                        </div>
                        <div className='form-group mb-3'>
                            <input className='form-control p-3'
                                type="email"
                                name='email'
                                placeholder='ایمیل شما' />
                        </div>
                        <div className='form-group mb-3'>
                            <textarea className='form-control p-3' name='message' placeholder='پیام شما'></textarea>
                        </div>
                        <div className='form-group mb-3 text-start'>
                            <button className='btn btn-orif' type='submit'>ارسال</button>
                        </div>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </section>
    );
}

export default ContactUs;
