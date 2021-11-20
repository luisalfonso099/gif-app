const FetchGifi = async (category, text, limit) => {
  const apiKey = "b3lT70N0ZqThtwyUdZ3at5H5YdTIYkqP";
  const resp = await fetch(
    `https://api.giphy.com/v1/gifs/${category}?q=${text}&limit=${limit}&api_key=${apiKey}`
  );
  const data = await resp.json();

  return data;
};

export default FetchGifi;
