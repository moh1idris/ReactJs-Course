
import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ['bob' , 'job' , 'khob']
        const int = Math.floor(Math.random() * 3)    //--> this will take random no from 0-3
        return names[int];
     }     
     
  return (
    <main>
       <p>
        Hello {handleNameChange()}!
       </p>
    </main>
  )
}

export default Content
