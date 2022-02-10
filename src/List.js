import { useEffect, useState } from "react";


const List = ({ items, itemDeleter }) => {

    const [status, setStatus] = useState('-');
    
    // D1. Create the state for "background"
    const [background, setBackground] = useState('');

    useEffect(() => {

        // the ternary for bg
        if(status === '-') {
            setBackground('yellow')
        } else {
            setBackground('#00FFFF')
        }

        console.log(background)

    }, [status])

    console.log(background)

    // D2. Create the deleteHandler + pass in the "id"
    const deleteHandler = (id) => {
        // D3. Invoke the uplifter
        itemDeleter(id) 
        
    }





    return (<div className="list">


        <h2>Gifts List</h2>

        {items && 

            items.map((item) => (
                // D2. Set the bg color for light blue in the div
                // D3. Create the variable code for the bg color: 
                // 1. If "status" is "-", then bg should be yellow; otherwise, the bg should be #00FFFF. - in funct
                <div className="item-container" key={item.id} style={{backgroundColor: {background} }}>
                    <div>Name: {item.firstName} {item.lastName}</div>
                    <div>Gift: {item.gift}</div>
                    {/* D1. Create the delete button + hook the handler + add the "item.id" to identify the item */}
                    <button
                        onClick={() => deleteHandler(item.id)}
                    >
                        Delete</button>
                    {/* <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >

                    <option value="-">-</option>
                    <option value="+">+</option>

                    </select> */}
                </div>
            ))

        }

    </div>);
}
 
export default List;