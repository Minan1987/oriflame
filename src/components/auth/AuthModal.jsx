import ReactDOM from 'react-dom'
import { useState, useEffect } from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterModal'

const AuthModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('login')

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative p-6">
        <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>
          ✕
        </button>

        <div className="flex mb-4 border-b">
          <button
            className={`flex-1 py-2 text-center ${activeTab === 'login' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('login')}
          >
            ورود
          </button>
          <button
            className={`flex-1 py-2 text-center ${activeTab === 'register' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('register')}
          >
            ثبت‌نام
          </button>
        </div>

        {activeTab === 'login' ? (
          <LoginForm onSuccess={onClose} />
        ) : (
          <RegisterForm onSuccess={onClose} />
        )}
      </div>
    </div>,
    document.getElementById('modal-root')
  )
}

export default AuthModal
