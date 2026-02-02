import React from 'react'

const ContactSection = () => {
  return (
    <section id="contactUs" className="grid auto-cols-fr grid-rows-2 md:grid-cols-2 pt-16  pb-6 max-w-360 mx-auto mt-4 md:mt-10" >
      <h2 className="text-center leading-10 md:col-span-2 mb-2" >Book an Appointment</h2>
        <p className="text-center block font-[Molengo] md:col-span-2 mb-4 mt-0 text-black/60" >Simple, secure, and stress-free medical appointments.</p>
      <div className="order-2 flex-1 md:order-2 flex flex-col pb-6 px-3  md:px-8 md:pr-15 lg:px-15 lg:pl-10 py-5" >
        <p className="text-center" >Scheduling an appointment with us is easy. Share your basic details, select a suitable time, and our team will connect with you for confirmation.</p>
        <p className="text-center" >Your information is kept confidential and used only for medical purposes. We value your privacy as much as your health.</p>
        <button aria-label="Book an appointment button" className="cursor-pointer mx-auto my-4 bg-base/80 active:outline-base active:outline-1 active:bg-base/80 hover:bg-base text-base-text px-6 py-3 rounded-md" >Book your Appointment</button>
      </div>
      <div className="order-1 flex-1 md:order-1 flex flex-col pb-6 px-3  md:px-8 md:pl-15 lg:px-15 lg:pr-10 py-5 ">
        <img 
          loading='lazy'
          className='shadow-[0px_0px_4px_rgba(1,1,1,0.2)] aspect-video object-cover rounded-xl '
          src='https://img.freepik.com/psd-gratuitas/fundo-3d-com-venda-de-elementos-medicos_23-2150732519.jpg'
          alt="contact us Image"
          height="100%"
          width="100%"
        />
      </div>
    </section>
  )
}

export default ContactSection