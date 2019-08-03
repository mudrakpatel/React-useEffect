import React, {useState, useEffect} from 'react';
import axios from 'axios';

function DataFetching(){
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then(response => {
            setPost(response.data);
            console.log("Data fetched successfully.");
            //console.log(response);
          }).catch(error => {
            console.log(error);
          });
  }, [id]);

  return(
    <div>
      <input type="text" value={id} onChange={event => setId(event.target.value)}/>
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
