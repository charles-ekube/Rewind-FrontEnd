// import React from "react";
// import "./tabs.css";
// const TabNav = (props) => {
//     return (
//         <>
//           <section>
//             <ul className="nav nav-tabs" id="tabnav">
//                 {
//                     props.tabs.map(tab => {
//                         const active = (tab === props.selected ? 'active' : '');
                        
//                         return (
//                             <li className="nav-item" key={tab}>
//                                 <a href='#'
//                                 className={"nav-link" + active}
//                                 onClick={() => props.setSelected(tab)}
//                                 >
//                                     {tab}
//                                 </a>
//                             </li>
//                         )
//                     })
//                 }
//             </ul>
//             {props.children}
//           </section>  
//         </>
//     )
// }


// export {TabNav}
