
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';


function App() {
      const [items, setItems] = useState([
        {
            id: 1,
            checked: true,
            item: "One half pound bag of Cocoa Covered Almonds Unsalted"
        },
        {
            id: 2,
            checked: false,
            item: "Item 2"
        },
        {
            id: 3,
            checked: false,
            item: "Item 3"
        }
    ]);

    const handleCheck = (id) => {
      //   console.log(`key: ${id}`);          //--> this will change the id when u click on the button
      const listItems = items.map((item) => item.id === id ? { ...item, 
      checked: !item.checked } : item);       //--> here we are changing the status if the id maytches then change it to the cheked to false
      setItems(listItems)
      localStorage.setItem('shoppinglist', JSON.stringify(listItems))          //--> this is noting but we are storing it to the local storgae if anything we change wil l be same n localaastrage
    }

    const handleDelete = (id) =>{
      // console.log(id);                  //--> this will show the id 
      const listItems  = items.filter((item) => item.id !== id)          //--> this will create only the item with the id which are not eqaul to ittem.id
      setItems(listItems)
      localStorage.setItem('shoppinglist', JSON.stringify(listItems))          //--> this is noting but we are storing it to the local storgae if anything we change wil l be same n localaastrage
    }

  return (
    <div className="App">
     <Header title="Grocery List"/>                 {/*here we can set the normal props n as well as by destrucing it */ }
     {/* <Header />                                  here we ahve already settted it as a default titlt we do not need to do that  gaian  */}
     <Content 
     items={items}
     handleCheck={handleCheck}
     handleDelete={handleDelete}
     />
     <Footer length={items.length} />
    </div>
  );
}

export default App;
