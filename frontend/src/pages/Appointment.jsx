import React, {  useContext ,useState } from 'react'
import { useAppContext } from '../Appcontext';
import logo from '../assets/logo2.png';
import CustomSelect from '../components/CustomSelect';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



const DEPARTMENTS = ['General Physician', 'Gynecologist', 'Dermatologist', 'Pediatrician', 'Neurologist', 
                     'Gastroenterologist', 'Cardiologist', 'Orthopedics','ENT Specialist', 'Dentist',
                     'Ophthalmologist','Physiotherapist' ]

 
const TIMES = [
  '09:00 AM','09:30 AM','10:00 AM','10:30 AM','11:00 AM','11:30 AM',
  '02:00 PM','02:30 PM','03:00 PM','03:30 PM','04:00 PM','04:30 PM',
]

const REASONS = [
  'Routine Check-up', 'Follow-up Visit', 'New Symptoms', 'Chronic Condition',
  'Second Opinion', 'Prescription Renewal', 'Lab Results Review', 'Emergency / Urgent Care', 'Other',
]

const today = new Date().toISOString().split('T')[0]

const Label = ({ children, required }) => (
  <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wide mb-1.5">
    {children}{required && <span className="text-text-secondary">*</span>}
  </label>
)

const inputCls = "w-full px-3.5 py-2.5 rounded-xl border border-accent bg-primary-light/10 text-text-primary text-sm placeholder-text-text-secondary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition"

const Appointment = () => {
  const {doctors} = useAppContext();
  console.log(doctors)
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    dob: '', gender: '', department: '', doctor: '',
    date: '', time: '', reason: '', notes: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const step1OK = form.firstName && form.lastName && form.email && form.phone && form.dob && form.gender
  const step2OK = form.department && form.doctor && form.date && form.time
  const step3OK = form.reason

  const reset = () => {
    setSubmitted(false); setStep(1)
    setForm({ firstName:'',lastName:'',email:'',phone:'',dob:'',gender:'',department:'',doctor:'',date:'',time:'',reason:'',notes:'' })
  }

  const steps = ['Personal Info', 'Schedule', 'Reason']

  if (submitted) {
    return (
      <div className="min-h-screen bg-linear-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-xl shadow-emerald-100 p-10 max-w-md w-full text-center">
          <div className="w-16 h-16  rounded-2xl flex items-center justify-center mx-auto mb-5">
            <img src={logo} alt="logo" />
          </div>
          <h2 className="text-2xl font-bold text-text-secondary mb-1">Appointment Confirmed!</h2>
          <p className="text-sm text-shadow-text-secondary mb-7">Confirmation sent to <span className="font-medium text-text-secondary">{form.email}</span></p>

          <div className="grid grid-cols-2 gap-3 text-left mb-7">
            {[
              ['Patient', `${form.firstName} ${form.lastName}`],
              ['Doctor', form.doctor],
              ['Department', form.department],
              ['Date', form.date],
              ['Time', form.time],
              ['Reason', form.reason],
            ].map(([k, v]) => (
              <div key={k} className="bg-emerald-50 rounded-xl p-3">
                <p className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-0.5">{k}</p>
                <p className="text-sm font-semibold text-shadow-text-secondary leading-tight">{v}</p>
              </div>
            ))}
          </div>

          <button onClick={reset} className="w-full py-3 bg-accent hover:bg-accent-hover text-white rounded-xl font-semibold text-sm transition">
            Book Another Appointment
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10 px-4">

      {/* Header */}
      <div className="flex items-center gap-5 mb-8 ">
        {/* <div className="w-15 h-15  rounded-xl flex items-center justify-center shadow-md shadow-primary-light/100 ">
           <img src={logo} alt="logo" />
        </div> */}
        <div>
          {/* <p className="text-3xl font-bold text-accent leading-none">Care Connect</p> */}
          <p className="text-md text-5xl font-bold text-text-secondary mt-0.3">Book your appointment</p>
        </div>
      </div>

      {/* Stepper */}
      <div className="flex items-center gap-0 mb-7 w-full max-w-md">
        {steps.map((label, i) => {
          const n = i + 1
          const active = step === n
          const done = step > n
          return (
            <React.Fragment key={n}>
              <div className="flex flex-col items-center gap-1.5 shrink-0">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all
                  ${done ? 'bg-accent text-text-primary' : active ? 'bg-accent-hover text-white ring-4 ring-emerald-100' : 'bg-white text-text-secondary border border-slate-200'}`}>
                  {done ? '✓' : n}
                </div>
                <span className={`text-[10px] font-semibold uppercase tracking-wide whitespace-nowrap
                  ${active ? 'text-text-primary' : done ? 'text-text-primary' : 'text-text-secondary'}`}>
                  {label}
                </span>
              </div>
              {i < 2 && (
                <div className={`flex-1 h-0.5 mb-4 mx-1 rounded-full transition-all ${step > n ? 'bg-accent' : 'bg-primary-light'}`} />
              )}
            </React.Fragment>
          )
        })}
      </div>

      {/* Card */}
      <form 
        onSubmit={e => e.preventDefault()} 
        className="bg-primary-light/10 rounded-3xl shadow-xl shadow-tertiary w-full max-w-md overflow-hidden" 
        autoComplete="off"
      >
        <div className="h-1.5 bg-primary" />

        <div className="p-7">

          {/* ── STEP 1 ── */}
          {step === 1 && (
            <div>
              <h2 className="text-xl font-bold text-text-primary mb-0.5">Personal Information</h2>
              <p className="text-sm text-text-secondary mb-6">Enter your details to get started.</p>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label required>First Name</Label>
                    <input className={inputCls} placeholder="John" value={form.firstName} onChange={e => set('firstName', e.target.value)} />
                  </div>
                  <div>
                    <Label required>Last Name</Label>
                    <input className={inputCls} placeholder="Doe" value={form.lastName} onChange={e => set('lastName', e.target.value)} />
                  </div>
                </div>

                <div>
                  <Label required>Email Address</Label>
                  <input className={inputCls} type="email" placeholder="john@example.com" value={form.email} onChange={e => set('email', e.target.value)} />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label required>Phone</Label>
                    <input className={inputCls} type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={e => set('phone', e.target.value)} />
                  </div>
                   <div>
                        <Label required>Date of Birth</Label>
                        <DatePicker
                          selected={form.dob ? new Date(form.dob) : null}
                          onChange={(date) => {
                            if (!date) return set('dob', '');
                            const year = date.getFullYear();
                            const month = String(date.getMonth() + 1).padStart(2, '0');
                            const day = String(date.getDate()).padStart(2, '0');
                            set('dob', `${year}-${month}-${day}`);
                          }}
                          maxDate={new Date()} 
                          showYearDropdown     
                          showMonthDropdown    
                          scrollableYearDropdown 
                          yearDropdownItemNumber={100} 
                          className={inputCls} 
                          placeholderText="Select DOB"
                          dateFormat="yyyy-MM-dd"
                          wrapperClassName="w-full" 
                        />
                    </div>
                </div>

                <div>
                  <Label required>Gender</Label>
                  <div className="flex gap-2">
                    {['Male', 'Female', 'Other'].map(g => (
                      <button key={g} type="button" onClick={() => set('gender', g)}
                        className={`flex-1 py-2.5 rounded-xl text-sm font-semibold border transition
                          ${form.gender === g
                            ? 'bg-primary-light border-accent text-text-secondary shadow-md shadow-primary'
                            : 'bg-white border-accent text-text-secondary hover:accent-accent-hover hover:text-emerald-700'}`}>
                        {g}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-7">
                <button disabled={!step1OK} onClick={() => setStep(2)}
                  className={`px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition 
                    ${step1OK ? 'bg-accent hover:bg-primary hover:text-text-primary shadow-lg shadow-primary-light cursor-pointer' : 'bg-accent text-text-secondary cursor-not-allowed'}`}>
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* ── STEP 2 ── */}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-0.5">Schedule Appointment</h2>
              <p className="text-sm text-slate-400 mb-6">Choose your department, doctor and time.</p>

              <div className="space-y-4">
                <div>
                  <Label required>Department</Label>
                  <CustomSelect 
                    value={form.department} 
                    onChange={(val) => { set('department', val); set('doctor', ''); }} 
                    options={DEPARTMENTS} 
                    placeholder="Select a department" 
                  />
                </div>

                <div>
                  <Label required>Preferred Doctor</Label>
                  <CustomSelect 
                    value={form.doctor} 
                    onChange={(val) => set('doctor', val)} 
                    options={doctors?.filter(doc => doc.specialist === form.department).map(doc => doc.name) || []} 
                    placeholder={form.department ? 'Select a doctor' : 'Select department first'} 
                    disabled={!form.department}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                      <Label required>Date</Label>
                      <DatePicker
                        selected={form.date ? new Date(form.date) : null}
                        onChange={(date) => {
                          if (!date) return set('date', '');
                          // Format to YYYY-MM-DD safely avoiding timezone shifts
                          const year = date.getFullYear();
                          const month = String(date.getMonth() + 1).padStart(2, '0');
                          const day = String(date.getDate()).padStart(2, '0');
                          set('date', `${year}-${month}-${day}`);
                        }}
                        minDate={new Date()} // Only allow today or future dates
                        className={inputCls} 
                        placeholderText="Select a date"
                        dateFormat="yyyy-MM-dd"
                        wrapperClassName="w-full" 
                      />
                   </div>
                  <div>
                    <Label required>Time Slot</Label>
                    <CustomSelect 
                      value={form.time} 
                      onChange={(val) => set('time', val)} 
                      options={TIMES} 
                      placeholder="Pick a slot" 
                    />
                  </div>
                </div>

                {form.doctor && form.date && form.time && (
                  <div className="flex items-center gap-3 bg-primary-light border-accent-hover rounded-xl px-4 py-3">
                    <span className="text-xl">📅</span>
                    <p className="text-sm text-text-secondary">
                      <span className="font-semibold">{form.doctor}</span> · {form.date} at {form.time}
                    </p>
                  </div>
                )}
              </div>

              <div className="flex justify-between mt-7">
                <button onClick={() => setStep(1)} className="px-5 py-2.5 rounded-xl text-sm font-semibold text-text-seondary border border-accent hover:border-accent-hover transition cursor-pointer">
                  ← Back
                </button>
                <button disabled={!step2OK} onClick={() => setStep(3)}
                  className={`px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition
                    ${step2OK ? 'bg-primary hover:bg-primary-light hover:text-text-primary shadow-md shadow-primary-light cursor-pointer' : 'bg-accent text-text-seondary cursor-not-allowed'}`}>
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* ── STEP 3 ── */}
          {step === 3 && (
            <div>
              <h2 className="text-xl font-bold text-text-primary mb-0.5">Reason for Visit</h2>
              <p className="text-sm text-text-secondary mb-6">Help us prepare for your visit.</p>

              <div className="space-y-4">
                <div>
                  <Label required>Primary Concern</Label>
                  <CustomSelect 
                    value={form.reason} 
                    onChange={(val) => set('reason', val)} 
                    options={REASONS} 
                    placeholder="What brings you in?" 
                  />
                </div>

                <div>
                  <Label>Additional Notes</Label>
                  <textarea className={`${inputCls} resize-none`} rows={4}
                    placeholder="Any symptoms, concerns or information for the doctor..."
                    value={form.notes} onChange={e => set('notes', e.target.value)} />
                </div>

                {/* Summary */}
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4">
                  <p className="text-xs font-bold text-accent-hover uppercase tracking-widest mb-3">Appointment Summary</p>
                  <div className="space-y-2">
                    {[
                      ['Patient', `${form.firstName} ${form.lastName}`],
                      ['Email', form.email],
                      ['Doctor', form.doctor],
                      ['Department', form.department],
                      ['Date & Time', `${form.date} · ${form.time}`],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between items-start gap-4">
                        <span className="text-xs text-slate-400 font-medium shrink-0">{k}</span>
                        <span className="text-xs font-semibold text-slate-700 text-right">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-7">
                <button onClick={() => setStep(2)} className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-500 border border-slate-200 hover:border-slate-300 transition cursor-pointer" disabled={isSubmitting}>
                  ← Back
                </button>
                <div className="flex flex-col items-end">
                  <button 
                    disabled={!step3OK || isSubmitting} 
                    onClick={async () => {
                      setIsSubmitting(true);
                      setSubmitError('');
                      try {
                        const response = await fetch('http://localhost:5000/api/appointments', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify(form)
                        });
                        const data = await response.json();
                        if (response.ok && data.success) {
                          setSubmitted(true);
                        } else {
                          setSubmitError(data.message || 'Failed to book appointment');
                        }
                      } catch (err) {
                        setSubmitError('Server error. Please try again later.');
                      } finally {
                        setIsSubmitting(false);
                      }
                    }}
                    className={`px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition
                      ${(step3OK && !isSubmitting) ? 'bg-primary hover:bg-primary-light hover:text-text-primary shadow-md shadow-primary-light cursor-pointer' : 'bg-accent text-text-secondary cursor-not-allowed'}`}>
                    {isSubmitting ? 'Booking...' : 'Confirm Appointment ✓'}
                  </button>
                  {submitError && <p className="text-red-500 text-xs mt-2">{submitError}</p>}
                </div>
              </div>
            </div>
          )}

        </div>
      </form>

      <p className="text-xs text-slate-400 mt-6">Your information is safe and encrypted 🔒</p>
    </div>
  )
}

export default Appointment