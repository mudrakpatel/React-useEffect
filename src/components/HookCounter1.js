import React, {useState, useEffect} from 'react';

function HookCounter1(){
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Use Effect - Updating document title...");
    document.title = `You clicked ${count} times`;
  }, [count]);

  return(
    <div>
      <input type="text" value={name}
       onChange={event => setName(event.target.value)}/>
      <button onClick={() => setCount(count => count + 1)}>
        Clicked {count} times
      </button>
    </div>
  )
}

export default HookCounter1;
