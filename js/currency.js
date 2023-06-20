




function rerender() {
  //get date
  let year = document.getElementById("yearDropdown").value;
  let month = document.getElementById("monthDropdown").value;
      month = month.padStart(2, '0');
  let day = document.getElementById("dayDropdown").value;
      day = day.padStart(2, '0');
  let selectedDate = year + "-" + month + "-" + day;
  
  console.log(selectedDate);
 
 //get base currency 
  let symbols = ['AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG','AZN','BAM','BBD', 'BDT','BGN','BHD','BIF','BMD','BND','BOB'];
  let baseCurrencyDropdown = document.getElementById("currencyDropdown");

  for (let eachSymbol of symbols) {
      let option = document.createElement('option');
      option.textContent = eachSymbol;
      option.value = eachSymbol;
      baseCurrencyDropdown.appendChild(option);
   }

  let baseCurrency = baseCurrencyDropdown.value;
  console.log(baseCurrency);
  
 
  console.log('start fetching');
  fetch('./js/currencyrates.json?a=5')
   .then(response => response.json())
   .then(json => {
      console.log(json);
      console.log('after fetching');  
       let currencyContainer = document.getElementById('CurrencyContainer');  
       currencyContainer.innerHTML = '';         
       for (let item in json.rates) {
          //if (selectedCurrencies.includes(item)) {}
	      let theRate = json.rates[item];
	      let roundedRate = theRate.toFixed(2);
	      let div =document.createElement('div');
	      div.classList.add('classstyle');
	     
	      div.style.height = `${parseInt(roundedRate * 50)}px`;
	      div.style.backgroundColor = getRandomColor(); 
              let p = document.createElement('p');
              p.innerHTML = `${item} <br /> rate:${roundedRate}`;
              div.appendChild(p);
              currencyContainer.appendChild(div);
        
      
    }
   
  });

 } 
 

 
 
 // loop random colors 
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
 
 
  // get symbol
  //let showSomeCurrencies = ["AZN","AFN","CNY","KRW","AMD","EUR","USD","AUD","GBP","ANG","AOA","AED"];
  //let combinedSymbols = selectedCurrencies.join(',');
  
  
  //fetch(`http://api.exchangeratesapi.io/v1/${selectedDate}?access_key=70aa05c4b4b42702473a6cca6aba8a6b&base=${baseCurrency}`)
 //fetch(`http://api.exchangeratesapi.io/v1/${selectedDate}?access_key=70aa05c4b4b42702473a6cca6aba8a6b&base=${baseCurrency}&symbols=${combinedSymbols}`)
