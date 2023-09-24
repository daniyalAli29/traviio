import React from 'react'

const BUTTON_VARIANT = {
  primary: 'bg-blue',
  secondary: 'bg-yellow',
}
const Button = ({
  text,
  varient = 'primary',
  ref,
  className = '',
  onClick,
}: {
  text: any
  varient?: keyof typeof BUTTON_VARIANT
  ref?: any
  className?: string
  onClick?: any
}) => {
  return (
    <div
      ref={ref}
      className={`bg-blue text-center  rounded-full py-2 font-bold my-2 text-sm text-white ${BUTTON_VARIANT[varient]} ${className}`}
      onClick={onClick}
    >
      {text}
    </div>
  )
}

export default Button
