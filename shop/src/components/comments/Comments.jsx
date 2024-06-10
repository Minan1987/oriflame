import React, { useState } from 'react'
import axios from 'axios'

function Comments() {
    const dataUrl= "https://jsonplaceholder.typicode.com/comments"
    const [comments, setCommnets] = useState({
        name: "",
        email: "",
        message: ""
    })
    const nameHandler = (e) => {
        setCommnets({ ...comments, name: e.target.value })
    }
    const emailHandler = (e) => {
        setCommnets({ ...comments, email: e.target.value })
    }
    const messageHandler = (e) => {
        setCommnets({ ...comments, message: e.target.value })
    }
    const clickHandler = () => {
        axios
        .post(dataUrl, comments)
        .then((response) =>{})
        .catch(() =>{})
    }
    return (
        <div className='border w-100 p-3 rounded my-3 '>
            <div>
                <label>نام شما</label>
                <input type="text"
                    className='form-control mb-3'
                    onChange={nameHandler}
                />
            </div>
            <div>
                <label>ایمیل شما</label>
                <input type="email"
                    className='form-control mb-3'
                    onChange={emailHandler}
                />
            </div>
            <div>
                <textarea rows="3"
                    className='form-control mb-3'
                    onChange={messageHandler}
                />
            </div>
            <div className='mt-3 d-flex justify-content-end'>
                <button onClick={clickHandler} className='btn btn-outline-orif'>ارسال</button>
            </div>
        </div>
    )
}

export default Comments
