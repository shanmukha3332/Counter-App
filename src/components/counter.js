import React, { Component } from 'react'

class counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count:0
        }
    }
    increment = ()=>{
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
    }
    decrement = ()=>{
        this.setState(prevState => {
            return {count: prevState.count - 1}
        })
    }

    reset = ()=> {
        this.setState(()=>{
            return {count:0}
        })
    }
    
    render() {
        return (
            <div className = "counter">
                <h2>Counter App</h2>
                <div className="count-value">
                    <p >{this.state.count}</p>
                </div>

                <button onClick={this.increment} className = "incr">Increment</button>
                <button onClick={this.decrement} className = "decr">Decrement</button>
                <button onClick={this.reset} className = "reset">Reset</button>

            </div>
        )
    }
}

export default counter