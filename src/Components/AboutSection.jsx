import React from 'react'

const AboutSection = () => {
  return (
    <section id="about" className="pt-16 bg-base-element mx-auto max-w-[1440px] mt-4 md:mt-10">
      <h2 className="text-center pb-6 px-3" >Who we Are</h2>
      <div className="px-2 md:px-12 flex items-center gap-y-8 gap-x-4 flex-col-reverse md:flex-row max-w-[1440px] mx-auto">
        <div className="px-3 md:max-w-3/5" >
          <p>We are a small, dedicated healthcare team built with one simple goal — to make quality medical care accessible, transparent, and human.</p>
          <p>As a new healthcare service, we focus on ethical medical practices, verified professionals, and clear communication. We believe patients deserve to understand their health, their treatment options, and their care journey without confusion or pressure.</p>
          <p>Every patient is treated with respect, privacy, and genuine concern — because trust is earned, not claimed.</p>
        </div>
        <div className="px-2 w-full h-full" >
          <img src="https://assets.e-konomista.pt/uploads/2021/02/consulta-medico--375x280.jpg"
            className="object-cover aspect-square rounded-xl"
            alt=""
            height="100%"
            width="100%"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutSection