import React from 'react'

const OurTeamCard = ({name, specialization, image}) => {
  return (
    <div className="flex grow w-40 md:max-w-60 flex-col border border-base/10 rounded-xl overflow-x-hidden" >
      <img
        src={image} 
        alt={`${name} doctor's image`}
        height=""
        width=""
        className="aspect-video object-cover object-top w-full rounded-tl-xl rounded-tr-xl"
      />
      <div className="px-2 py-4" >
        <h4 className="text-center leading-6" >{name}</h4>
        <p className="text-center leading-4 text-black/80" >{specialization}</p>
      </div>
    </div>
  )
}

export default OurTeamCard