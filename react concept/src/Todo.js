import React from "react";


class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = { mydata: [], txt1: '' };
    }
    addData() {
        var temparr = this.state.mydata
        temparr.push(this.state.txt1)
        this.setState({ mydata: temparr, txt1: '' })
    }

    removeData() {

        this.setState.pop()
    }
    render() {
        return (
            <>

                <div style={{ padding: "50px" }}>
                    <h1>TODO LIST</h1>
                    ADD YOUR LIST : <input type="text" value={this.state.txt1} onChange={(e) => this.setState({ txt1: e.target.value })} />
                    <input type="button" value="Add" onClick={this.addData.bind(this)} /> <br /><br />

                    <ol>

                        {
                            this.state.mydata.map((value, index) => {
                                return (
                                    <li key={index}>
                                        {value}
                                        <input type="button" value='delete' onClick={this.removeData.bind(this)} />
                                    </li>
                                )
                            })
                        }
                    </ol>
                </div>
            </>
        )
    }
}
export default Todo