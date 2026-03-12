import React from 'react'



const inputCls='flex items-center w-full bg-white border border-primary focus-within:border-primary-light focus-within:ring-1 focus-within:ring-primary-light h-12 rounded-xl overflow-hidden px-4 gap-3 transition-all'
const UserLogin = ({ onClose }) => {
    const [state, setState] = React.useState("login")

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form Submitted:", formData)
    }

    return (
        // Modal Backdrop - clicking this closes the modal
        <div 
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md px-4 transition-all duration-300'
            onClick={onClose}
        >
            {/* Ambient Background Glows */}
            <div className='fixed inset-0 -z-10 pointer-events-none overflow-hidden'>
                <div className='absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/20 rounded-full blur-[100px]' />
                <div className='absolute right-0 bottom-0 w-[400px] h-[300px] bg-blue-600/20 rounded-full blur-[100px]' />
            </div>

            {/* Form Card */}
            <form
                onSubmit={handleSubmit}
                onClick={(e) => e.stopPropagation()} // Prevents clicking inside the card from closing it
                className="relative w-full max-w-[400px] text-center bg-indigo-50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl"
            >
                {/* Close Button */}
                <button 
                    type="button"
                    onClick={onClose}
                    className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors cursor-pointer p-1"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>

                {/* Header */}
                <h1 className="text-accent text-3xl mt-2 font-bold tracking-tight">
                    {state === "login" ? "Welcome Back" : "Create Account"}
                </h1>
                <p className="text-primary text-sm mt-1 mb-8">
                    {state === "login" ? "Please sign in to continue" : "Sign up to get started with us"}
                </p>

                <div className="space-y-4">
                    {/* Name Input (Only for Sign Up) */}
                    {state !== "login" && (
                        <div className={inputCls}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-slate-400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <circle cx="12" cy="8" r="5" /> <path d="M20 21a8 8 0 0 0-16 0" /> </svg>
                            <input type="text" name="name" placeholder="Full Name" className="w-full bg-transparent text-white placeholder-primary border-none outline-none text-sm" value={formData.name} onChange={handleChange} required />
                        </div>
                    )}

                    {/* Email Input */}
                    <div className={inputCls}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-slate-400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /> <rect x="2" y="4" width="20" height="16" rx="2" /> </svg>
                        <input type="email" name="email" placeholder="Email Address" className="w-full bg-transparent text-white placeholder-primary border-none outline-none text-sm" value={formData.email} onChange={handleChange} required />
                    </div>

                    {/* Password Input */}
                    <div className={inputCls}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-slate-400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <rect width="18" height="11" x="3" y="11" rx="2" ry="2" /> <path d="M7 11V7a5 5 0 0 1 10 0v4" /> </svg>
                        <input type="password" name="password" placeholder="Password" className="w-full bg-transparent text-white placeholder-slate-500 border-none outline-none text-sm" value={formData.password} onChange={handleChange} required />
                    </div>
                </div>

                {/* Forgot Password */}
                {state === "login" && (
                    <div className="mt-3 text-right">
                        <button type="button" className="text-xs font-medium text-primary hover:text-shadow-text-secondary hover:underline transition-colors cursor-pointer">
                            Forgot password?
                        </button>
                    </div>
                )}

                {/* Submit Button */}
                <button 
                    type="submit" 
                    className="mt-6 w-full h-12 rounded-xl text-white font-semibold tracking-wide bg-accent hover:bg-accent-hover shadow-lg shadow-indigo-600/30 transition-all active:scale-[0.98] cursor-pointer" 
                >
                    {state === "login" ? "Login" : "Create Account"}
                </button>

                {/* Toggle Login/Register */}
                <p className="text-slate-400 text-sm mt-8 mb-2">
                    {state === "login" ? "Don't have an account?" : "Already have an account?"}
                    <button 
                        type="button"
                        onClick={() => setState(prev => prev === "login" ? "register" : "login")} 
                        className="text-text-secondary font-medium hover:text-shadow-text-secondary hover:underline ml-1.5 transition-colors cursor-pointer"
                    >
                        {state === "login" ? "Sign up" : "Log in"}
                    </button>
                </p>
            </form>
        </div>
    )
}

export default UserLogin;