import { useState } from "react";

// A2.1.2 Import uuid
import { v4 as uuidv4 } from 'uuid';

const Create = () => {

    const randomId = uuidv4();
    console.log(randomId)

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gift, setGift] = useState('');

    const [items, setItems] = useState('');


    // A2	form handler function
    const submitHandler = (e) => {
        e.preventDefault();

        const itemWithoutId = {firstName, lastName, gift};

        //A2.1 Create the random id 
        // A2.1.1 Install uuid $ npm install uuid (next is above)

        // A2.1.3. Invoke the randomId
        const randomId = uuidv4()

        // A2.1.4. Create the obj for the randomId

        let randomIdObject = {
            id: randomId
        }

        //A2.1.4 Merge the two objects
        let item = {
            ...itemWithoutId,
            ...randomIdObject
        };

        //A.2.2 Fetch POST req

        fetch('http://localhost:8000/items/', {
            method: 'POST',
            headers: { 
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(item)
        })
        .then(() => {
            console.log('New item added')
            console.log(item);
        })
    }

    // const getAllHandler = () => {

    //     fetch('http://localhost:8000/items/')
    //     .then(res => {
          
    //       // ERR-2, Create the if-else statement to track for the 404 errors, when I add the id for example in the url
    //       if(res.ok) {
    //         console.log('SUCCESS')
    //       } else {
    //         console.log('NOT SUCCESS')
    //       }
    
    //         return res.json()
    //     })
    //     .then(data => {
    //         console.log(data)
    //         setItems(data);
    //         console.log(items);
    //     })
    //     // ERR-1. Create the line to track for server/browser/fetch errors (404 is not included)
    //     .catch(error => console.log('ERROR'))
    // }
    
    console.log(items);

    return (<div className="create">
        {/* A1	form */}
        <form onSubmit={submitHandler}>
            <label>First Name</label>
            <input 
            type="text" 
            required 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            />

            <label>Last Name</label>
            <input 
            type="text" 
            required 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            />

            <label>Gift</label>
            <input 
            type="text" 
            required 
            value={gift}
            onChange={(e) => setGift(e.target.value)}
            />

            <button>Add</button>

        </form>

        <h1>Get-all button</h1>
        {/* <button onClick={getAllHandler}>Get all</button> */}
    </div>);
}
 
export default Create;