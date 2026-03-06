import { useState,useEffect } from "react";
function App(){
    const[data,setData]=useState(null);
    useEffect(()=>{
        fetch('https://api.agify.io?name=nandithaaaaa')
      .then(response => response.json())
      .then(result => setData(result));
    },[]);
    return(
        <div>
            {data && (
            <p>
                Name: {data.name}
            </p>
            )}
        </div>
    )
}

export default App;