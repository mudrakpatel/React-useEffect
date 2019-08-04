import React, {useState, useEffect} from 'react';
import axios from 'axios';

function DataFetching(){
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  const handleClick = () => {
    setIdFromButtonClick(id);
  }

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
          .then(response => {
            setPost(response.data);
            console.log("Data fetched successfully.");
            //console.log(response);
          }).catch(error => {
            console.log(error);
          });
  }, [idFromButtonClick]);

  return(
    <div>
      <input type="text" value={id} onChange={event => setId(event.target.value)}/>
      <button type="button" onClick={handleClick}>Fetch Post</button>
      <div>{post.title}</div>
      {/*<ul>
        {
          posts.map(post => <li key={post.id}>{post.title}</li>)
        }
      </ul>*/}
    </div>
  )
}

export default DataFetching;
