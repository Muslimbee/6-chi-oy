// import axios from 'axios';

// export const fetchData = async () => {
//   try {
//     const response = await axios.get('https://restcountries.com/v3.1/all');
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };


// import React from 'react';
// import { useQuery } from 'qidiruv-tizimi';
// import { fetchData } from './api';

// function App() {
//   const { data, error, isLoading } = useQuery('example', fetchData);

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <div>
//       <h1>Qidiruv Tizimi va API Misoli</h1>
//       <p>Data: {JSON.stringify(data)}</p>
//     </div>
//   );
// }

// export default App;
