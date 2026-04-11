import React from 'react'
import { useAppContext } from '../../Appcontext'
import { toast } from 'react-toastify'

const inputCls='flex items-center w-full bg-white border border-primary focus-within:border-primary-light focus-within:ring-1 focus-within:ring-primary-light h-12 rounded-xl overflow-hidden px-4 gap-3 transition-all'
const UserLogin = ({ onClose }) => {
    const [state, setState] = React.useState("login")
    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const { loadUserProfile } = useAppContext()

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: '',
        token: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting) return;
        setIsSubmitting(true);

        try {
            let endpoint;
            let payload;

            if (state === 'login' || state === 'register') {
                endpoint = state === 'login' ? 'login' : 'register';
                payload = {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password
                };
            } else if (state === 'forgot') {
                endpoint = 'forgot-password';
                payload = { email: formData.email };
            } else if (state === 'reset') {
                endpoint = 'reset-password';
                payload = { token: formData.token, password: formData.password };
            }

            const response = await fetch(`http://localhost:5000/api/users/${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (!data.success) {
                toast.error(data.message || 'Operation failed');
                return;
            }

            if (state === 'login' || state === 'register') {
                localStorage.setItem('token', data.token);
                await loadUserProfile();

                const userName = data.user?.name || formData.name || 'User';
                toast.success(state === 'login' ? `Welcome, ${userName}!` : `Account created successfully, ${userName}!`);

                setFormData({ name: '', email: '', password: '', token: '' });
                onClose();
                return;
            }

            if (state === 'forgot') {
                if (data.resetToken) {
                    setFormData(prev => ({ ...prev, token: data.resetToken }));
                    setState('reset');
                    toast.success('Reset token generated. Please enter it below.');
                } else {
                    toast.info(data.message || 'Check your email for the reset token.');
                    // Stay in forgot state or handle differently
                }
                return;
            }

            if (state === 'reset') {
                setFormData({ name: '', email: '', password: '', token: '' });
                setState('login');
                toast.success(data.message || 'Password changed successfully. You can now log in.');
                return;
            }

        } catch (error) {
            console.error("Error during authentication:", error);
            toast.error("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
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
                autoComplete="off"
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
                    {state === 'login' ? 'Welcome Back' : state === 'register' ? 'Create Account' : state === 'forgot' ? 'Forgot Password' : 'Reset Password'}
                </h1>
                <p className="text-primary text-sm mt-1 mb-8">
                    {state === 'login' && 'Please sign in to continue'}
                    {state === 'register' && 'Sign up to get started with us'}
                    {state === 'forgot' && 'Provide your email to receive password reset token'}
                    {state === 'reset' && 'Enter token and new password'}
                </p>

                <div className="space-y-4">
                    {/* Name Input (Only for Sign Up) */}
                    {state === "register" && (
                        <div className={inputCls}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-slate-400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <circle cx="12" cy="8" r="5" /> <path d="M20 21a8 8 0 0 0-16 0" /> </svg>
                            <input type="text" name="name" placeholder="Full Name" className="w-full bg-transparent text-black placeholder-primary border-none outline-none text-sm" value={formData.name} onChange={handleChange} required />
                        </div>
                    )}

                    {/* Email Input */}
                    <div className={inputCls}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-slate-400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /> <rect x="2" y="4" width="20" height="16" rx="2" /> </svg>
                        <input type="email" name="email" placeholder="Email Address" className="w-full bg-transparent text-black placeholder-primary border-none outline-none text-sm" value={formData.email} onChange={handleChange} required autoComplete="new-email" />
                    </div>

                    {/* Token Input (for Reset) */}
                    {state === 'reset' && (
                        <div className={inputCls}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-slate-400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <circle cx="12" cy="12" r="10" /> <line x1="12" y1="8" x2="12" y2="12" /> <line x1="12" y1="16" x2="12" y2="16" /> </svg>
                            <input type="text" name="token" placeholder="Reset Token" className="w-full bg-transparent text-black placeholder-primary border-none outline-none text-sm" value={formData.token} onChange={handleChange} required />
                        </div>
                    )}

                    {/* Password Input (Login/Register/Reset) */}
                    {state !== 'forgot' && (
                        <div className={inputCls}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-slate-400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <rect width="18" height="11" x="3" y="11" rx="2" ry="2" /> <path d="M7 11V7a5 5 0 0 1 10 0v4" /> </svg>
                            <input type="password" name="password" placeholder="Password" className="w-full bg-transparent text-black placeholder-slate-500 border-none outline-none text-sm" value={formData.password} onChange={handleChange} required autoComplete="new-password" />
                        </div>
                    )}
                </div>

                {/* Forgot Password / Back Button */}
                <div className="mt-3 text-right">
                    {state === 'login' && (
                        <button type="button" onClick={() => { setState('forgot'); setFormData({ name:'', email:'', password:'', token:'' }); }} className="text-xs font-medium text-primary hover:text-shadow-text-secondary hover:underline transition-colors cursor-pointer">
                            Forgot password?
                        </button>
                    )}
                    {state === 'forgot' && (
                        <button type="button" onClick={() => { setState('login'); setFormData({ name:'', email:'', password:'', token:'' }); }} className="text-xs font-medium text-primary hover:text-shadow-text-secondary hover:underline transition-colors cursor-pointer">
                            Back to login
                        </button>
                    )}
                    {state === 'reset' && (
                        <button type="button" onClick={() => { setState('login'); setFormData({ name:'', email:'', password:'', token:'' }); }} className="text-xs font-medium text-primary hover:text-shadow-text-secondary hover:underline transition-colors cursor-pointer">
                            Back to login
                        </button>
                    )}
                </div>

                {/* Submit Button */}
                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="mt-6 w-full h-12 rounded-xl text-white font-semibold tracking-wide bg-accent hover:bg-accent-hover shadow-lg shadow-indigo-600/30 transition-all active:scale-[0.98] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed" 
                >   
                    {isSubmitting ? 'Please wait...' : (state === 'login' ? 'Login' : state === 'register' ? 'Create Account' : state === 'forgot' ? 'Send Reset Token' : 'Reset Password')}
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