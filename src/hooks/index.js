import { useState ,useEffect} from "react";
export  function  useDemo (){
    const [loading,setLoading]=useState(false)
    const Demo=function(){
        setLoading(true)
    }
    return{
        loading,
        Demo
    }
}
export function useScroll(){
    const [position,setPosition]=useState({})
    const handle=(e)=>{
        setPosition(e)
    }
    useEffect(() => {
       document.addEventListener('scroll',handle)
       return()=>{
        document.removeEventListener('scroll',handle)
       }
    }, []);
    return {position}
}