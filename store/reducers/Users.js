// import JOBS from '../../data/job-data';
// import React, { useState, useEffect } from 'react';


// const initialState = ()={
//     const [isLoading, setIsLoading] = useState(false);
//     const [data, setData] = useState([]);
//     const [error, setError] = useState(null);
//   const [query, setQuery] = useState('');
// const [fullData, setFullData] = useState([]);


//     useEffect(() => {
//         setIsLoading(true);
    
//         fetch(API_ENDPOINT)
//           .then(response => response.json())
//           .then(response => {
//             setData(response.results);
//             setFullData(response.results);
//             setIsLoading(false);
//           })
//           .catch(err => {
//             setIsLoading(false);
//             setError(err);
//           });
//       }, []);

// };

// export default (state = initialState, action) => {
//     return state;
// };



