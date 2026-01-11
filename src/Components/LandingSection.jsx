import React from 'react'

export const LandingSection = () => {
  return (
    <div >
      
    <main id="home" class="max-w-[1440px] max-h-[680px] mx-auto bg-[linear-gradient(to_left,rgba(255,255,255,0.1),#0041FF),url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnx2ZVMlydsd5Q9-Dy3dVJ_bfC2jTQlJEa9Sxv8LS5r4DbR-mxo0TEBAuz2afpctAjaF_nzWjwkEInm3WRsKcu5nW1DrQf7O-9ETeUVVwmK_W2ytXSYIR7_H7x3XBQfq5sYIwUtQ/s1600/Nueva+imagen.png')]
      bg-cover px-5 md:px-15 bg-right h-screen flex flex-col  justify-center">
      <h1 className="md:max-w-1/2 leading-14 text-base-text text-left" >Caring for Your Health, One Patient at a Time</h1>
      <p className="md:max-w-1/2 text-base-text/90 text-left" >A patient-first medical healthcare service focused on honest care, qualified doctors, and safe treatment — built for your everyday health needs.</p>
      <button className="mt-6 bg-base-text active:outline-base-text active:outline-1 active:bg-base-text/80 focus:bg-base-text/80 text-base rounded-md px-5 py-3 mr-auto" >Book an Appointment</button>
    </main>
    </div>
  )
}