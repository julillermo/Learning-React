import { useState } from 'react'

function QuickStart(){

    /* Rendering lists */
    function RenderingLists(){
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
        <div>
            <RenderingLists />
            <h2>Counters update together: {count}</h2>
            <button onClick={onClick}>
                Clicked {count} times (button A)!
            </button>
            <button onClick={onClick}>
                Clicked {count} times (button B)
            </button>
        </div>
    )
}

export default QuickStart