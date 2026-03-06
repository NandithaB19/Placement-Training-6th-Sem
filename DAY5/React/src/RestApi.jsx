import {useState, useEffect} from "react";

function App(){
    const API_URL = 'https://jsonplaceholder.typicode.com/posts';
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(()=>{
        fetch(API_URL+"?_limit=5")
            .then((res)=>{
                if(!res.ok){
                    throw new Error("Failed to fetch");
                }
                return res.json();
            })
            .then((data)=>{
                setPosts(data);

            })
    },[] );

    return (
        <div>
            <ul>
                {posts.map((post)=>(
                    <li key={post.id}>{post.title}</li>
                )
                )}
            </ul>
        </div>
    )
}

export default App;