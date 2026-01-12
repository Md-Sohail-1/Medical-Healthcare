import React from 'react'

const ServiceCard = ({symbol, title, body}) => {
  return (
    <div className=" group hover:h-content grow md:w-32 flex flex-col p-4 border-base/10 border rounded-xl">
      <b className="text-center w-full group-hover:animate-bounce transition ease-in-out duration-00">{symbol}</b>
      <h3 className="text-center" >{title}</h3>
      <p className=" transition ease-in  text-center" >{body}</p>
    </div>
  )
}

export default ServiceCard