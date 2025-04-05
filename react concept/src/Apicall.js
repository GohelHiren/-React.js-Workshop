import React from "react";


class Apicall extends React.Component {
    constructor(props) {
        super(props)
        this.state = { myDate: [] };
    }
    componentDidMount() {
        fetch('http://fakestoreapi.com/products')
            .then(res => res.json())
            .then(res => {
                console.table(res);
                this.setState({ myDate: res })
            })
            .catch(err => alert(err))
    }

    render() {
        return (
            <>

                <h1>PRODUCT DATA CALLING</h1>
                <hr />

                {
                    this.state.myDate.map((value, index) => {
                        return (
                            <>
                                <hr />
                                <div style={{width:"250px",border:"1px solid black",borderRadius:"12px",padding:"10px"}}>
                                    <img src={value.image} alt="demo" width={100} />
                                    <h3>{value.title}</h3>
                                    <p> <b>PRICE </b>${value.price}</p>
                                </div>
                                <hr />

                            </>
                        )
                    })
                }
            </>
        )
    }
}
export default Apicall