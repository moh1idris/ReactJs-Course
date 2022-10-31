//--> rafce
import React from 'react'

const Footer = () => {
    const today = new Date()    //--> defining a variable called today 
  return (
    <footer>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer
