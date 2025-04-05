import React from 'react'

export default function Sumhook() {
    const [data, setData] = React.useState({})
    const [ans, setAns] = React.useState(0)

    const dosum = () => {
        var c = parseInt(data.no1) + parseInt(data.no2)
        setAns("Sum is " + c)
    }
    return (
        <>
            <div style={{ padding: "50px" }}>

                <h1>SUM</h1>
                No1 : <input type="text" onChange={(e) => setData({ ...data, no1: e.target.value })} />  
                  No2 : <input type="text" onChange={(e) => setData({ ...data, no2: e.target.value })} />
                <input type="button" value='SUM' onClick={dosum} />
                <h4>Sum is {ans}</h4>
            </div>
        </>
    )
}
