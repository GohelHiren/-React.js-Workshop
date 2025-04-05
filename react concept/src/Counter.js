import { isDisabled } from '@testing-library/user-event/dist/utils';
import React from 'react';
class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = { Counter: 0 }
    }
    inc() {
        if (this.state.Counter >= 5) {
            this.setState({ msg: "Sorry > 5" })
        } else {

            this.setState({ Counter: this.state.Counter + 1, msg: '' })
        }
    }

    dec() {
        if (this.state.Counter <= 0) {
            this.setState({ msg: 'Sorry < 0' })
        } else {
            this.setState({ Counter: this.state.Counter - 1, msg: '' })
        }
    }

    render() {
        return (
            <>
                <div style={{ padding: "50px" }}>


                    <h1>Counter</h1>
                    Value is {this.state.Counter}
                    <br />
                    <input type="button" value="+" onClick={this.inc.bind(this)} />
                    <input type="button" value="-" onClick={this.dec.bind(this)} />
                    <input type="button" value="X" onClick={() => this.setState({ Counter: 0 })} />
                    <p style={{ color: 'red' }}>{this.state.msg}</p>
                </div>
            </>
        )
    }

}

export default Counter