import React from 'react'
import notFound from "/img/404-error.png"

const NotFound = () => {
  return (
    <div className='flex flex-col gap-2 p-8 items-center justify-center'>
      <img src={notFound} width="400px" />
      <h3 style={{ color: "#E84EA0", fontSize: "1.5rem" }}>متاسفانه صفحه مورد نظر شما یافت نشد...</h3>
    </div>
  )
}

export default NotFound
