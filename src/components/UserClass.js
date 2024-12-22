import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="user-card">
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          onClick
        </button>
        <h2>Name: {this.props.name}</h2>
        <h2>Location: varanasi</h2>
        <h2>Contact: 9956979096</h2>
      </div>
    );
  }
}

export default UserClass;
