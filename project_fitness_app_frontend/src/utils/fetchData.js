export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': '078177a898mshedcdc8916339fbap110137jsnd504f322b400',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '078177a898mshedcdc8916339fbap110137jsnd504f322b400',
  },
};

export const calorieOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '078177a898mshedcdc8916339fbap110137jsnd504f322b400',
    'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com'
  }
};
export const bmiOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com',
   // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Key':'078177a898mshedcdc8916339fbap110137jsnd504f322b400'
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
