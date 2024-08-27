import {Scroll} from '../hooks/scroll';
import { createContext } from 'react';
export const ScrollContext = createContext({});
export default function ScrollProvider(props){
    const {isSticky} = Scroll();
    return(
        <>
         <ScrollContext.Provider value={{isSticky}}>
            {props.children}
         </ScrollContext.Provider>
        </>
    );
}