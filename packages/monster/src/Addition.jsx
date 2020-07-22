/* eslint-disable react/destructuring-assignment */
import React from 'react';

class Addition extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div>
        <h1>Hello, tyler</h1>
        <h2>
          It is
          {this.state.date.toLocaleTimeString()}
          .
        </h2>
      </div>
    );
  }
}

export default Addition;

// function Addition() {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }

// export default Addition;
