const gif = document.querySelector('img');
const y = document.querySelector('input')
const s = () => {
  gifBeer(y.value)
}
const gifBeer = async (search = 'beer') => {
  const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=YWtMRZ4SBquPtqp6VAzIqGyof3Z3KoNC&tag=+beer&rating=pg-13`, {mode: 'cors'});
  console.log(response)
  const beerData = await response.json();
  gif.src = beerData.data.images.original.url;
}
gifBeer();