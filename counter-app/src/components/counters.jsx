import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  
  render() {
    return (
      <div className="container">
        <button
          onClick={this.props.onReset}
          
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map(counters => (
          <Counter
            key={counters.id}
            counters={counters}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
          >
            {/* <h4>Counter {counters.id}</h4> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
