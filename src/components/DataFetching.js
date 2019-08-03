import React, {useState, useEffect} from 'react';
import axios from 'axios';

function DataFetching(){
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
          .then(response => {
            setPosts(response.data);
            console.log("Data fetched successfully.");
            //console.log(response);
          }).catch(error => {
            console.log(error);
          });
  }, []);

  return(
    <div>
      <ul>
        {
          posts.map(post => <li key={post.id}>{post.title}</li>)
        }
      </ul>
    </div>
  )
}

export default DataFetching;
