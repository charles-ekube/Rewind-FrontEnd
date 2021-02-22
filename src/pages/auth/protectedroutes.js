// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';

// const ProtectedRoutes = ({ user: user, component: Component, ...rest }) => {

//     return (
//         <Route
//             {...rest}
//             render={(props) => {
//                 if (user) {
//                     return <Component />
//                 }
//                 else {
//                     return <Redirect to={{
//                         pathname: '/Login',
//                         state: { from: props.location }
//                     }} />
//                 }
//             }}
//         />
//     )
// }

// export { ProtectedRoutes }