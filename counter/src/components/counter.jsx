import React,{Component} from "react";

class Counter extends Component{
    state={
        count: 0
    };
    render() {
        return <h1>Pierwszy Komponent</h1>
    };

    incrementNumber = () => {
        this.setState({count: this.state.count + 1});
    };

    currentCount = () => {
        return this.state.count === 0? 'Zero' : this.state.count;
    };

    resetCount =() => {
        this.setState({count: 0});
    };

    render()
    {
        return <div>
            <span className="badge badge-primary m-2">{this.currentCount()}</span>
            <button className="btn btn-secondary btn-sm" onClick={this.incrementNumber}>Add Value</button>
            <button className="btn btn-danger btn-sm" onClick={this.resetCount}>Reset</button>

        </div>


    }


}

export default Counter;