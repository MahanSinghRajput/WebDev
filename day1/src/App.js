import './App.css';  //packages //shows directory structure './' shows same package

// (*) you can also write it as export default function App(){}
function App() {
  return (
    //always use div to store these values as without div these would be treated as seperate elements and we cant return two elements in a function.
    <>
    <h1> Hello </h1>
    <h2> bhai</h2>
    </>

    //whatever you want to show on the browser is written ion return() else things are written outside
  );
}

//if you do the (*) step then you dont need this statement
export default App;
