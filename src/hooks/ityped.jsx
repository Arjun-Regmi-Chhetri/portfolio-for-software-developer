import React, { useEffect, useRef } from "react";
import Typed from 'typed.js';


export default function App() {
  const text = React.useMemo(()=> ["Arjun Chhetri"]);
  const divRef = useRef();

  useEffect(()=> {
   const options = {
       strings: text,
      stringsElement: "#typed-string",
      typeSpeed: 50,
      showCursor: true,
      cursorChar: '|',
      backSpeed: 20,
      smartBackspace: false,
      shuffle: true,
      startDelay: 500,
      backDelay: 1000,
      loop: true,
      loopCount: Infinity
   };

   const typed = new Typed(divRef.current, options);

   return ()=> {
     typed.destroy();
   }

  }, [text]);

  return (

     
      <span ref={divRef}></span>
 
  );
}
