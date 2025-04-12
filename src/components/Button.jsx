import React from 'react'
import '../App.css'
const Button = ({ label, onClick, variant = 'primary' }) => {
  const baseStyles =
    "px-3 py-1 rounded-xl font-mono text-base border transition-all duration-300 ease-in-out";
    
  const variants = {
    primary: "bg-green-500 hover:bg-green-600 text-white shadow-lg",
    secondary: "bg-gray-700 hover:bg-gray-600 text-white",
    outline: "border border-green-400 text-green-300 hover:bg-green-400 hover:text-black",
    ghost: "border border-white text-white bg-transparent hover:bg-white hover:text-black", // new variant
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {label}
    </button>
  )
}

export default Button
