export const fetchList = (page = 1) => {
  return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters?perPage=20&page=${page}`)
    .then(res => res.json())
    .then(json => json.results.map(({ name, description, image }) => ({
      name,
      description,
      image: image.includes('Maxresdefault.jpg') ? 'http://www.placecage.com/c/200/300' : image
    })));
};
