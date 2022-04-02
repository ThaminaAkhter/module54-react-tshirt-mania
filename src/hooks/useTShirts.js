import { useEffect, useState } from "react";

const useTShirts=()=>{
    const [tshirts, setShirts]=useState([]);
    useEffect(()=>{
       fetch('tshirts.json')
       .then(res=>res.json())
       .then(data=>setShirts(data));
    },[]);

    return  [tshirts, setShirts];
}

export default useTShirts;