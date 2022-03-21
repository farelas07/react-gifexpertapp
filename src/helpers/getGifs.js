export const getGifts = async category => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=SmaBvTva6r9eE7SxspS8zFoFnomyNJJY&q=${category}&limit=25`;
  console.log(url);
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gifs;
};
