import { useState, useEffect } from 'react';
import Create from './Create';
import List from './List';

const Home = () => {

    const [items, setItems] = useState('');

  
    useEffect(() => {
  
        // FETCH
      fetch('http://localhost:8000/items/')
          .then(res => {
            
            // ERR-2, Create the if-else statement to track for the 404 errors, when I add the id for example in the url
            if(res.ok) {
              console.log('SUCCESS')
            } else {
              console.log('NOT SUCCESS')
            }
      
              return res.json()
          })
          .then(data => {
              console.log(data)
              setItems(data);
          })
          // ERR-1. Create the line to track for server/browser/fetch errors (404 is not included)
          .catch(error => console.log('ERROR'))       

    }, [])

    // B1. in Home.js, create the function "itemGrabber" to grab the "item" obj and CL it
    const itemGrabber = (addedItem) => {
      console.log(items)
      console.log(addedItem)

      //C1 Update THE ARRAY!!! "items" with "newItem" by creating "updatedItems"
      setItems([...items, addedItem]);

      console.log(items)

    }

    console.log(items)    


    return (<div className="home">
        <h1>Christmas Gift Lister: List Gifts like it's your first nature!</h1>

        <p>this is the list this is the listthis is the listthis is the list </p>

        {items && 

          items.map((item) => (
              <div className="item-container" key={item.id}>
                  <p>Name: {item.firstName} {item.lastName}</p>
                  <p>Gift: {item.gift}</p>
              </div>
          ))

        }


        {/* // B2. Prop in and out the function in Create.js */}
        <Create itemGrabber={itemGrabber} />

        <List />

    </div>);
}
 
export default Home;