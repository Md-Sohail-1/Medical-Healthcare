import React from 'react'
import ServiceCard from './ServiceCard'

const ServiceSection = () => {
  const services = [{
    id: 1,
    title: "General Consultation",
    body: "Professional medical consultations for common health concerns, symptoms, and preventive care.",
    symbol: "🩺"
  },{
    id: 2,
    title: "Health Guidance & Advice",
    body: "Clear explanations, treatment guidance, and lifestyle recommendations tailored to your condition.",
    symbol: "🧠"
  },{
    id: 3,
    title: "Basic Diagnosis Support",
    body: "Initial diagnosis assistance and medical direction based on symptoms and patient history.",
    symbol: "💊"
  },{
    id: 4,
    title: "Follow-up Care",
    body: "Continuous support after consultation to ensure proper recovery and understanding.",
    symbol: "📞"
  }]
  
  
  return (
    <section id="services" className="pt-16 md:pt-4 px-3 md:mt-10 mt-4">
      <h2 className="text-center px-2 leading-10 mb-2" >Our Medical Services</h2>
      <p className="px-3 text-center text-black/60 pb-6 mt-0" >We provide essential healthcare services designed for everyday medical needs and long-term wellness.</p>
      <div className="px-2 md:px-12 flex flex-wrap md:flex-nowrap justify-center gap-4 mx-auto" >
        {services.map((service)=>(
          <ServiceCard 
            title={service.title}
            body={service.body}
            symbol={service.symbol}
            key={service.id}/>
        ))}
      </div>
    </section>
  )
}

export default ServiceSection