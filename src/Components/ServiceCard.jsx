import React from 'react'

const ServiceCard = ({symbol, title, body}) => {
  return (
    <div className="group grow md:w-32 flex flex-col p-4 border-base/10 border rounded-xl">
      <b className="text-center w-full group:hover:rotate-180">{symbol}</b>
      <h3 className="text-center" >{title}</h3>
      <p className="md:hidden group-hover:block text-center" >{body}</p>
    </div>
  )
}

export default ServiceCard