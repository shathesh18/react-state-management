import React from 'react'

class ClassComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0,
        }
    }
    render(){
        return (
            <>
                <h1>Class Component</h1>
                <div>
                    <button onClick = {() => this.setState({count: this.state.count+1})}> Increment </button>
                    <button onClick = {() => this.setState({count: this.state.count-1})}> Decrement </button>
                </div>
                <div>
                    The current count is {this.state.count}
                </div>
            </>
        )
    }
}

export default ClassComponent