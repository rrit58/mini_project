import React from 'react'
import Footer from '../components/Footer'

const stats = [
  { id: 1, label: "Happy Patients", value: "100,000+", icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/></svg> },
  { id: 2, label: "Expert Doctors", value: "500+", icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  { id: 3, label: "Cities Covered", value: "15+", icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg> },
  { id: 4, label: "Consultations", value: "2.5M+", icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> },
]

const values = [
  {
    title: "Patient-Centric Care",
    description: "Everything we do starts and ends with our patients. Your health, comfort, and time are our highest priorities.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/></svg>
  },
  {
    title: "Verified Excellence",
    description: "Every doctor on CareConnect undergoes a rigorous multi-step verification process to ensure top-tier medical expertise.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
  },
  {
    title: "Seamless Technology",
    description: "We bridge the gap between healthcare and technology, making booking appointments as easy as ordering a cab.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
  },
  {
    title: "Data Privacy",
    description: "Your medical records and personal data are encrypted and secured with bank-level security protocols.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
  }
]

const team = [
  {
    id: 1,
    name: "Dr. Arvind Mehta",
    role: "Founder & CEO",
    img: "https://img.freepik.com/free-photo/portrait-successful-mid-adult-doctor-with-crossed-arms_1262-12865.jpg"
  },
  {
    id: 2,
    name: "Dr. Ananya Sharma",
    role: "Chief Medical Officer",
    img: "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg"
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "Chief Technology Officer",
    img: "https://static.vecteezy.com/system/resources/thumbnails/035/308/361/small_2x/ai-generated-a-young-indian-male-designer-engineer-architect-who-is-wearing-glasses-and-a-blue-shirt-smiling-standing-in-the-office-and-looking-at-the-camera-photo.jpg"
  }
]

const About = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="bg-cyan-950 pt-14 pb-24 px-4 relative overflow-hidden">
        {/* Decorative rings */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full border border-white/5 pointer-events-none" />

        {/* Logo */}
        {/* <div className="flex items-center justify-center gap-3 mb-10">
          <img className="h-10 w-auto object-contain" src="../src/assets/logo2.png" alt="CareConnect" />
          <span className="font-extrabold text-xl tracking-tight flex">
            <span className="text-violet-100">Care</span>
            <span className="text-amber-500">Connect</span>
          </span>
        </div> */}

        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/15 py-1.5 px-4 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <p className="text-xs font-semibold tracking-widest text-green-300 uppercase">India's Leading Health Platform</p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-[1.1]">
            Making Quality Healthcare<br />
            <span className="text-cyan-400">Accessible to All</span>
          </h1>
          <p className="text-cyan-200 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light">
            CareConnect connects patients with top-tier specialists — reducing wait times and ensuring you get the care you deserve, exactly when you need it.
          </p>
        </div>
      </section>

      {/* ── STATS — floats over hero ── */}
      <section className="max-w-5xl mx-auto px-4 -mt-10 relative z-10 mb-8">
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200 border border-gray-100 grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-100">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center justify-center py-8 px-4 gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-accent mb-1 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                {stat.icon}
              </div>
              <span className="text-3xl md:text-4xl font-extrabold text-gray-900">{stat.value}</span>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest text-center">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 relative">
            <img
              src="https://img.freepik.com/free-photo/medical-workers-covid-19-vaccination-concept-confident-professional-doctor-female-nurse-blue-scrubs-listening-patient-clinic-appointment-cross-arms-chest-smiling_1258-57434.jpg"
              alt="Doctor consulting patient"
              className="rounded-3xl shadow-2xl w-full object-cover h-[420px] lg:h-[500px]"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-4 bg-cyan-950 text-accent  rounded-2xl px-5 py-4 shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 bg-white hover:bg-primary rounded-xl flex items-center justify-center shrink-0">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-cyan-300 font-medium">Founded</p>
                <p className="text-white font-bold text-sm">Since 2021</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 bg-cyan-500 rounded-full" />
              <p className="text-xs font-bold text-cyan-600 uppercase tracking-widest">Our Story</p>
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Born out of a simple realization.
            </h3>
            <p className="text-gray-500 leading-relaxed text-base">
              In 2021, we noticed a critical flaw in the healthcare system: finding the right doctor and booking an appointment was needlessly complicated, leading to delayed treatments and frustrated patients.
            </p>
            <p className="text-gray-500 leading-relaxed text-base">
              We built CareConnect to strip away the complexity. By bringing thousands of verified doctors onto a single, intuitive platform, we've transformed the healthcare journey from a stressful chore into a seamless experience. Your health shouldn't wait on hold.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-3">
                {team.map(m => (
                  <img key={m.id} src={m.img} alt={m.name} className="w-10 h-10 rounded-full object-cover object-top border-2 border-white" />
                ))}
              </div>
              <p className="text-sm text-gray-500 font-medium">Led by <span className="text-gray-800 font-bold">world-class experts</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-cyan-300 rounded-full" />
              <p className="text-xs font-bold text-cyan-600 uppercase tracking-widest">Our Values</p>
              <div className="h-px w-12 bg-cyan-300 rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">What Drives Us</h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">The core principles that guide every decision we make at CareConnect.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <div key={idx} className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 bg-cyan-50 group-hover:bg-cyan-500 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                  <span className="text-accent group-hover:text-white transition-colors duration-300">
                    {val.icon}
                  </span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{val.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-cyan-300 rounded-full" />
            <p className="text-xs font-bold text-cyan-600 uppercase tracking-widest">Our Team</p>
            <div className="h-px w-12 bg-cyan-300 rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Meet the Leadership</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">The medical and technological minds working behind the scenes to revolutionize your healthcare experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member) => (
            <div key={member.id} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1">
              <div className="h-64 overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-gray-900 text-base">{member.name}</h3>
                  <p className="text-cyan-500 text-sm font-medium mt-0.5">{member.role}</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-cyan-50 group-hover:bg-cyan-500 flex items-center justify-center transition-colors duration-300">
                  <svg className="w-4 h-4 text-cyan-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About