// import React, {useState} from 'react';
// import RewindMoviesApi from "../../api/RewindMoviesApi"

// import "../widgets.css";
// import {Landingpagenav} from "../"
// const SearchFn = () => {

// const [query, setQuery] = useState('');
// const [movies, setMovies] = useState([]);

//     const searchMovies = async (e) => {
//         e.preventDefault();

//     //     RewindMoviesApi.get('/', data).then((d) =>{
//     //         console.log(d);
//     //  }).catch(err => alert(err));

//     try {
        
//         const url = 'https://rewind-test.herokuapp.com/';
//         const res = await fetch(url);
//         const data = await res.json();
//         setMovies(data.message);
//         console.log(data);
//     } catch(err) {
//         console.error(err);
//     } 




//     }
//     return (
//         <div>
//             <form className="form" onSubmit={searchMovies}>
//                 <label className="label" htmlFor="query">Movie Name</label>
//                 <input
//                  type="text"
//                  name="query" 
//                 className="input" 
//                 placeholder="search movies"
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}/>
//             </form>
//             <Landingpagenav movies={movies}/>
//         </div>
//     )
// }

// export {SearchFn}
