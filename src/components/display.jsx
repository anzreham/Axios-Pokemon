import React, {useState, useEffect, useRef} from 'react';

import axios from 'axios';

const Display = (props)  =>{


   // useEffect(() => {
       
    
    const [pokes, setpokes] = useState([])
    const onClick = () => {
      axios.get("https://pokeapi.co/api/v2/pokemon?limit=807").then(response=>{
        setpokes(response.data.results);
      })
    }
    
    //  }, []);

    return (
        <div>
                  <button type="button" onClick={onClick}>Click</button>

            {pokes.length > 0 && pokes.map((pk, index)=>{
                return (<div key={index}>{pk.name}</div>)
            })}
        </div>
    );
}
    export default Display;