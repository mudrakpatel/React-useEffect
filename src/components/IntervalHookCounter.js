import React, { useState, useEffect } from 'react';

function IntervalHookCounter(){
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(previousCount => previousCount + 1);
  }

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    //The below function should be
    //returned if the developer
    //wants to mimic componentWillUnmount
    //lifecycle method behaviour found
    //in React Class Components
    //i.e. Code to execute when
    //the component unmounts
    return() => {
      clearInterval(interval);
      console.log("Interval cleared.");
    }
  }, [
    //Only pass this empty array
    //if you want to mimic
    //componentDidMount behaviour
    //of React Class Component in
    //React functional component
    //i.e. Only pass this empty array
    //in useEffect if you want to
    //call useEffect JUST ONCE when the
    //React Functional component
    //is mounted and NOT when it
    //is re-rendered everytime
    /////////////////////////////
    //useEffect dependency variables list
    //count
  ]);

  return(
    <div>
      {count}
    </div>
  )
}

export default IntervalHookCounter;
