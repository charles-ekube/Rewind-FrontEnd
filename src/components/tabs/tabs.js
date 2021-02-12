import React from 'react'
import "./tabs.css"

const Tab = (props) => {
   
   if(props.isSelected) {
       return (
           <main classNames="holder">
            {props.children}
           </main>
       )
   }

   
    return null;
   
}

export {Tab}

