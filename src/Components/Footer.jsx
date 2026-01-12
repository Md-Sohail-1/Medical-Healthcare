import React from 'react'
import Logo from './Logo'

const Footer = () => {
  const date = new Date()
  return (
    <footer className="pt-4 bg-base/80 text-base-text flex flex-col overflow-x-hidden gap-4 h-auto max-w-screen " >
      <div className="px-5 md:px-15 mx-auto max-w-360 overflow-x-hidden flex items-center gap-2 flex-col pt-5">
        <Logo />
        <ul className="flex gap-4" >
          <li>
            <a aria-label="our instagram social link" href="#" className='p-1 group'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className=" group-hover:animate-pulse group-hover:scale-105 lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </li>
          <li>
            <a aria-label="our twitter social link" href="#" className='p-1 group'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className=" group-hover:animate-pulse group-hover:scale-105 lucide lucide-twitter-icon lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
          </li>
          <li>
            <a aria-label="our linkedin social link" href="#" className='p-1 group'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className=" group-hover:animate-pulse group-hover:scale-105 lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </li>
        </ul>
      </div>
      <div className="px-5 md:px-15 md:mx-auto md:min-w-360 max-w-360 overflow-x-hidden flex md:gap-8 lg:gap-20 flex-col flex-col-1 md:flex-row  md:flex-row-2 " >
        <div className="w-full md:w-auto" >
          <ul className="flex flex-col gap-1 *:py-1" >
            <li>Quick links:</li>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Who we are</a></li>
            <li><a href="#contactUs">Book an Appointment</a></li>
            <li><a href="#services">Our Medical Services</a></li>
            <li><a href="#ourTeam">Our Medical Team</a></li>
          </ul>
        </div>
        <div className="w-full md:w-2/3" >
          <ul className="flex flex-col gap-1 *:py-1 *:text-base-text *:flex *:gap-2 *:items-center" >
            <li><a aria-label="our privacy policy link" href="#">Privacy Policy</a></li>
            <li><a aria-label="our terms & conditions link" href="#">Term & Conditions</a></li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pinned-icon lucide-map-pinned"><path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"/><circle cx="12" cy="8" r="2"/><path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"/></svg>
              Sagarpur, New Delhi, 110046
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
              9876543210 
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
              medicalhealthcare@gmail.com 
            </li>
          </ul>
        </div>
      </div>
      <div className="px-5 md:px-15 mx-auto max-w-360 overflow-x-hidden " >
        <p className="text-center font-[poppins] text-sm font-thin" >© {date.getFullYear()} Medical Healthcare. All rights reserved.</p>
      </div>
      <section className='px-5 md:px-15 max-w-360 mx-auto overflow-x-hidden flex w-screen items-center justify-between bg-black/70 text-base-text py-2 '>
        <div className='flex items-center gap-1 *:text-[14px] md:*:text-md'>
          <p>Made with</p> 
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#dd0000" stroke="currentColor" strokeWidth=".125" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>
          <p>By</p>
          <a aria-label="go to developer portfolio"  href='https://sohail-portfolio-theta.vercel.app/' className='hover:underline text-amber-300 transition ease-in hover:underline-offset-4 decoration-slate-200 font-[molengo]'>MD Sohail</a>
        </div>
        <div className='flex gap-3 md:gap-4 text-xl md:text-2xl '>
          <a aria-label="view developer github profile"  href='https://github.com/Md-Sohail-1' target="_blank" className='group text-base-text'>
            <svg className='group-hover:text-slate-300 transition ease-in-out lucide lucide-github-icon lucide-github' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
          <a aria-label="view developer linkedin profile"  href="https://linkedin.com" target="_blank" className='group text-base-text'>
            <svg className='group-hover:text-slate-300 lucide lucide-linkedin-icon lucide-linkedin' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </div>
      </section>
    </footer>
  )
}

export default Footer