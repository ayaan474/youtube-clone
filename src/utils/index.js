// import axios from 'axios';

// export const BASE_URL = 'https://www.googleapis.com/youtube/v3';
// export const options = {
//   params: {
//     maxResults: 50,
//   },
//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
//   },
// };

// export const axiosGetReq = async (url) => {
//   const res = await axios.get(`${BASE_URL}/${url}`, options);
//   return res.data;
// };


import axios from 'axios';



 const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'd3eb9070f8mshbd3cc0cb87f07a0p17d642jsna8e2e517dc96',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};






export const axiosGetReq = async (url) => {
  const res = await axios.get(`${BASE_URL}/${url}`, options);
  return res.data;
};
