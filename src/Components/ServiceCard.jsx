import React from 'react'

const ServiceCard = ({symbol, title, body}) => {
  return (
    <div className="no-wrap group hover:h-content grow  flex flex-col p-4 border-base/10 border shadow-[0px_0px_2px_rgba(1,1,1,0.1)] rounded-xl">
      <b className="text-center w-full group-hover:animate-bounce transition ease-in-out duration-00">{symbol}</b>
      <h3 className="text-center" >{title}</h3>
      <p className=" transition ease-in  text-center" >{body}</p>
    </div>
  )
}

export default ServiceCard