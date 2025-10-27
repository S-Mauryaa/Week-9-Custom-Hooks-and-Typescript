
import './App.css'
import React, { useState } from 'react';
import { useEffect } from 'react';
function App(){
  const [render,  setRender]=useState(true);
  useEffect(() =>{
    setTimeout(()=>{
      setRender(false);
    },10000)
  });
 
  return (
    <>
     {render ?<MyComponent/> : <div></div>}
    </>
  )
}


// Functional Based Component
// function MyComponent() {
//   const [count, setCount] = useState(0);

//   const incrementCount = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={incrementCount}>Increment</button>
//     </div>
//   );
// }


// Class based components
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     );
//   }
// }



// Lifecycle Events
function MyComponent() {
  useEffect(() => {
 console.error("component mounted");

    return () => {
     console.log("component unmounted");
    };
  }, []);
return <div>
  from inside  my component
</div>
  // Render UI
}

export default App
