import { useState } from "react";

const User = (props) => {
  let [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h1>Count is {count}</h1>
      <button
        onClick={() => {
          let add = (count += 1);
          setCount(add);
        }}
      >
        On click
      </button>
      <h2>Name: {props.name}</h2>
      <h2>Location: varanasi</h2>
      <h2>Contact: 9956979096</h2>
    </div>
  );
};

export default User;
