export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e21a6b4dd7mshdb9903364e52c5dp170ba5jsn4115e8642cb9',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e21a6b4dd7mshdb9903364e52c5dp170ba5jsn4115e8642cb9',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}