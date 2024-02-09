import { useState } from 'react'

function QuickStart(){

    function RenderingLists(){
        /* Rendering lists */
        const products = [
            { title: 'Cabbage', id: 1},
            { title: 'Garlic', id: 2},
            { title: 'Apple', id :3},
        ];

        const listItems = products.map((item) =>
            <li key={item.id}>
                {item.title}[{item.id}]
            </li>
        )

        return (
            <ol>
                {listItems}
            </ol>
        )
    }

    /* Keep track of state/count */
    const [count, setCount] = useState(0);
    
    function onClick(){
        setCount(count + 1);
    }

    return(
        // FWIU, the enclosing tag can be anything
        //  It's often a <div></div> or an empty tag pair <></>
        <> 
            <RenderingLists />
            <h2>Counters update together: {count}</h2>
            {/* The conters update together because they're referring to the same state 
                Instead of individually having their own states*/}
            <button onClick={onClick}>
                Clicked {count} times (button A)!
            </button>
            <button onClick={onClick}>
                Clicked {count} times (button B)
            </button>
        </>
    )
}

export default QuickStart