import React from 'react'

function Input({
    handler,type,placeholder
}) {
  return (
    <input
    required
    type={type}
    className="lg:mt-8 mt-4 lg:py-4 py-2 lg:px-5 px-2 outline-none rounded-xl border border-[#1A3B583D]"
    placeholder={placeholder}
    onChange={handler}
  />
  )
}

export default Input