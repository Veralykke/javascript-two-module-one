const url= "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/products";

const resultsContainer =document.querySelector(".results");

async function getProducts() {

    //fetch
const response = await fetch(url);

const results = await response.json();

const facts = results.all;

  for(let i= 0; i < facts.length; i++) {
      console.log(facts[i].text);

      resultsContainer.innerHTML += `<div class="results">${facts[i].text}</div>`;
  }
}

getProducts();