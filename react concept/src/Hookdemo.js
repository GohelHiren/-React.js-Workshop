import React from 'react'


export default function Hookdemo() {
    const [counter, setCounter] = React.useState(50)
    const [color, setcolor] = React.useState('red')
    const [name, setname] = React.useState("")
    return (
        <>
            <div style={{padding:"50px"}}>
                <h1>HOOK DEMO</h1>
                <hr />

                <h3>Counter Example</h3>
                Counter Value is {counter} <br />
                <input type="button" value="+" onClick={() => setCounter(100)} />
                <hr />

                <h3>Color Demo</h3>
                Color Value is {color} <br />
                <input type="button" value="Update" onClick={() => setcolor('blue')} />
                <hr />

                <h3>Name Demo</h3>
                <input type="text" onChange={(e) => setname(e.target.value)} />
                <h4> Name is {name}</h4>
            </div>
        </>
    )
}
