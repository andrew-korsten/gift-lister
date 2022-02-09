import { useState } from "react";

const Create = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gift, setGift] = useState('');
    const [id, setId] = useState('');

    const [items, setItems] = useState('');


    // A2	form handler function
    const submitHandler = (e) => {
        e.preventDefault();

        const item = {firstName, lastName, gift, id};

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

            <label>ID</label>
            <input 
            type="text" 
            required 
            value={id}
            onChange={(e) => setId(e.target.value)}
            />

            <button>Add</button>

        </form>

        <h1>Get-all button</h1>
        {/* <button onClick={getAllHandler}>Get all</button> */}
    </div>);
}
 
export default Create;