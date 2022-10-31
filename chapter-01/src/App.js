import logo from './logo.svg';
import './App.css';

function App() {
  // const name = "Ajju";      //-->adding it just to show how jsx works  
  const handleNameChange = () => {
     const names = ['bob' , 'job' , 'khob']
     const int = Math.floor(Math.random() * 3)    //--> this will take random no from 0-3
     return names[int];
  }     
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
             <p>
            Hello {handleNameChange()}!     {/*this willl give you the random name  */}
             </p>
       
      
        
      </header>
    </div>
  );
}

export default App;
