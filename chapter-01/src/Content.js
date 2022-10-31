
import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ['bob' , 'job' , 'khob']
        const int = Math.floor(Math.random() * 3)    //--> this will take random no from 0-3
        return names[int];
     }     
     
     const handleClick =() =>{
      console.log('you clicked it ');
     }

     const handleClick2 =(name) =>{
      console.log(`${name} was Clicked `);
     }

     const handleClick3 =(e) =>{                      //--> passing the event 
      // console.log(e)                               //--> this will give the event object 
      // console.log(e.target)                        //--><button>click it </button>
      console.log(e.target.innerText)                 //--> click it 
     }

  return (
    <main>
       <p onDoubleClick={handleClick}>          {/* this will shoe in console a su will click o the name */}
        Hello {handleNameChange()}!
       </p>
       <button onClick={handleClick}>Click it</button>
       {/* when we do not passs parameter then use this  */}
       <button onClick={() => handleClick2('AJJU')}>Click it</button>
       <button onClick={(e) => handleClick3(e)}>Click it</button>   {/* this will give the object in which u will be having all the evenets  */}
      
    </main>
  )
}

export default Content
