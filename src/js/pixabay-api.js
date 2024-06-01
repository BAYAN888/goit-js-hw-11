export function searchImg(yellow, flower) {
  const mainUrl = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: '44177733-63c355e78480ae17b664c6dfc',
    q: yellow,
    flower,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const url = `${mainUrl}?${params}`;
  return fetch(url).then(res => {
    if (!res) {
      throw new Error(res.statusText);
    }
    return res.json();
  });
}
