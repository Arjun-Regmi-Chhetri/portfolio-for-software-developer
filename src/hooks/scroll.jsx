import { useState, useEffect } from "react";
function Scroll(){
    const[isSticky, setSticky] = useState(false);

    useEffect(()=>{
        const handleOnScroll =()=>{
           
            if (window.pageYOffset > 100) {
                setSticky(true);
              } else {
                setSticky(false);
              }
        }
        window.addEventListener('scroll',handleOnScroll);

        return()=>{
            window.addEventListener('scroll',handleOnScroll);
        }
    },[]);
    return {isSticky};
};

export {Scroll};