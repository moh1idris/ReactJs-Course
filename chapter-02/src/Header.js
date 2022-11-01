// rafce  //-->this will give you the fucntional component
// import React from 'react'

// const Header = (props) => {
//   return (
//     <header >
//          <h1>{props.title}</h1>
//     </header>
//   )
// }

// export default Header
//-->here we are refering to props all the time 


//--> we will use destrucinh method instead of the above 
// import React from 'react'

// const Header = ({ title }) => {
//   return (
//     <header >
//          <h1>{title}</h1>
//     </header>
//   )
// }
// export default Header


//--> we are setting it as default 
import React from 'react'

const Header = ({ title }) => {
  return (
    <header >
         <h1>{title}</h1>
    </header>
  )
}
Header.defaultProps = {
  title: "Default Title"
 }
export default Header