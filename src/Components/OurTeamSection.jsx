import React from 'react'
import OurTeamCard from "./OurTeamCard"

const OurTeamSection = () => {
  const ourTeams = [{
    id: 1,
    name: "Dr. Ananya Sharma",
    specialization: "MBBS, MD (General Medicine)",
    image: "https://img.freepik.com/premium-photo/male-female-doctor-portrait-healthcare-medical-staff-concept-confident-doctor-portrait_71956-33586.jpg"
  },{
    id: 2,
    name: "Dr. Rahul Verma",
    specialization: "MBBS, DNB (Internal Medicine)",
    image: "https://img.freepik.com/premium-photo/confident-male-doctor-embracing-healthcare-profession-portrait-smiling-general-practitio_1000124-211259.jpg"
  },{
    id: 3,
    name: "Dr. Amit Kumar Singh",
    specialization: "MBBS, MS (Orthopedics)",
    image: "https://img.freepik.com/premium-photo/male-doctor-with-stethoscope-his-neck_1300826-75.jpg"
  },{
    id: 4,
    name: "Dr. Neha Gupta",
    specialization: "MBBS, MD (Pediatrics)",
    image: "https://img.freepik.com/premium-photo/male-female-doctor-portrait-healthcare-medical-staff-concept-confident-doctor-portrait_71956-33813.jpg"
  }]
  
  
  return (
    <section id="ourTeam" className="pt-16 md:pt-4 md:mt-10 mt-4" >
      <div className="px-2 md:px-12 max-w-[1440px] mx-auto" >
        <h2 className="text-center leading-10 mb-2" >Our Team</h2>
        <p className="px-3 text-center text-black/60 pb-6 mt-0">Our team consists of qualified and licensed medical professionals who believe in ethical healthcare and patient education.</p>
        <div className="px-3 gap-3 flex flex-wrap md:nowrap" >
          {
            ourTeams.map((doctor)=>(
              <OurTeamCard name={doctor.name} specialization={doctor.specialization} image={doctor.image} key={doctor.id}/>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default OurTeamSection