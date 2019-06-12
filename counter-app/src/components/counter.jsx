import React, { Component } from "react";

class Counter extends Component {
  //   constructor() {
  //     super();
  //     this.handleIncreament = this.handleIncreament.bind(this);
  //   }

  

  render() {
    return (
      <div>
        <div className="container">
          {/* <h4>Counter {this.props.id}</h4> */}
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button
            onClick={() => this.props.onIncrement(this.props.counters)}
            className="btn btn-secondary btn-sm m-2"
          >
            Increament
          </button>
          <button
            onClick={() =>this.props.onDelete(this.props.counters.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge badge-";
    classes += this.props.counters.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counters;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
