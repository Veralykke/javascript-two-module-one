/*import {error-message} from "./conmponents/error-message.js";

const simulateError = true;
const limit= 8; */

/*import {createHtml} from "./components/createHTML.js";*/

const url = "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/products";


const resultsContainer=document.querySelector(".results");


 async function getProducts() {

  const response = await fetch(url);
  
  const results = await response.json();
  
  const data = results.data;
  
  resultsContainer.innerHTML = "";
  
    for (let i= 0; i < data.length; i++) {
  
      if (i === 10){
        break
      }
        resultsContainer.innerHTML += `<div class="result">${data[i].name}</div>`;
        resultsContainer.innerHTML += `<div class="price">${data[i].price}</div>`;
    }
  }
  
  getProducts();
  


/*TESTE TESTE ERROR MESSAGE if wrong API
function displayMessage (messageType, message) {
  return `<div class= "message ${messageType}">${message}</div>`;
}

try {
  if (simulateError) {
throw "Bad things happened aunau";
  }
  
  for (let i = 0; i < data.length; i++) {
 //Exit loop
  if (limit && i === limit) {
    break;
  }

  resultsContainer.innerHTML += getProducts(data[i]);
  }
 
{ catch (error) {
  console.log(error);
  resultsContainer.innerHTML = displayMessage("error", error);
}*/
 















