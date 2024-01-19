const api = "bd0bb422314c400c9235518a037061e6";


const url = "https://newsapi.org/v2/everything?q=";
// run this is vs because request from brower/replit is not allowed , only allowed for localhost

window.addEventListener('load',()=> fetchnews("India"));

async function fetchnews(query){
  const resp = await fetch(`${url}${query}&apiKey=${api}`);
  const data =  await resp.json();
  console.log(data);
}