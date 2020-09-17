
export async function getProducts() {

    const response = await fetch(url);
    
    const results = await response.json();
    
    const data = results.data;
    
    resultsContainer.innerHTML = "";
    
      for (let i= 0; i < data.length; i++) {
    
          resultsContainer.innerHTML += `<div class="result">${data[i].name}</div>`;
          resultsContainer.innerHTML += `<div class="price">${data[i].price}</div>`;
      }
    }
    
    getProducts();
    