import React, {useState, useEffect} from 'react';

function HookMouse(){
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (event) => {
    console.log("mousemove event");
    setX(event.clientX);
    setY(event.clientY);
  }

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);

    //componentWillUnmount() lifecycle method equivalent
    //for useEffect given below
    return() => {
      console.log("Component unmounting started...");
      window.removeEventListener("mousemove", logMousePosition);
      console.log("Component unmounted successfully.");
    }
  }, []);

  return(
    <div>
      Hooks - [X: {x}][Y: {y}]
    </div>
  )
}

export default HookMouse;
