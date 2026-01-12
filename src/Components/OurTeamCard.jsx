import React from 'react'

const OurTeamCard = ({name, specialization, image}) => {
  return (
    <div className="flex  flex-col border border-base/10 rounded-xl overflow-x-hidden" >
      <img
        src={image} 
        alt={`${name} doctor's image`}
        height="100%"
        width="100%"
        className="aspect-video object-cover object-top w-full rounded-tl-xl rounded-tr-xl"
      />
      <div className="px-2 py-4" >
        <h3 className="text-center leading-6" >{name}</h3>
        <p className="text-center leading-6 text-black/80" >{specialization}</p>
      </div>
    </div>
  )
}

export default OurTeamCard