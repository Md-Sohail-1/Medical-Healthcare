import React from 'react'

const ContactSection = () => {
  return (
    <section id="contactUs" className="pt-16 md:pt-4 mt-4 md:mt-10" >
      <div className="flex flex-col pb-6 px-3 md:px-18 max-w-[1440px] mx-auto" >
        <h2 className="text-center leading-10 mb-2" >Book an Appointment</h2>
        <p className="text-center block font-[Molengo] mb-4 mt-0 text-black/60" >Simple, secure, and stress-free medical appointments.</p>
        <p className="text-center" >Scheduling an appointment with us is easy. Share your basic details, select a suitable time, and our team will connect with you for confirmation.</p>
        <p className="text-center" >Your information is kept confidential and used only for medical purposes. We value your privacy as much as your health.</p>
        <button aria-label="Book an appointment button" className="mx-auto my-4 bg-base active:outline-base active:outline-1 active:bg-base focus:bg-base/80 text-base-text px-6 py-3 rounded-md" >Book your Appointment</button>
      </div>
    </section>
  )
}

export default ContactSection