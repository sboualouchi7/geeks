 // DOM Elements
 const amountInput = document.getElementById('amount');
 const fromCurrencySelect = document.getElementById('from-currency');
 const toCurrencySelect = document.getElementById('to-currency');
 const switchBtn = document.getElementById('switch-currencies');
 const convertBtn = document.getElementById('convert-btn');
 const loadingIndicator = document.getElementById('loading');
 const resultDisplay = document.getElementById('result');
 const errorDisplay = document.getElementById('error');
 

 const apiKey = '529379bf7aa8d53c73484829'; 
 
 document.addEventListener('DOMContentLoaded', initApp);
 
 async function initApp() {
     try {
         showLoading();
         const currencies = await fetchSupportedCurrencies();
         currency(currencies);
         hideLoading();
         
         fromCurrencySelect.value = 'USD';
         toCurrencySelect.value = 'EUR';
     } catch (error) {
         showError('Failed to load currencies. Please try again later.');
         hideLoading();
     }
 }
 
 convertBtn.addEventListener('click', performConversion);
 switchBtn.addEventListener('click', switchCurrencies);
 
 async function fetchSupportedCurrencies() {
     const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/codes`);
     if (!response.ok) {
         throw new Error('Failed to fetch currencies');
     }
     const data = await response.json();
     return data.supported_codes;
 }
 
 // Populate currency dropdowns
 function currency(currencies) {
     const fromFragment = document.createDocumentFragment();
     const toFragment = document.createDocumentFragment();
     
     currencies.forEach(([code, name]) => {
         const fromOption = document.createElement('option');
         fromOption.value = code;
         fromOption.textContent = `${code} - ${name}`;
         fromFragment.appendChild(fromOption);
         
         const toOption = document.createElement('option');
         toOption.value = code;
         toOption.textContent = `${code} - ${name}`;
         toFragment.appendChild(toOption);
     });
     
     fromCurrencySelect.appendChild(fromFragment);
     toCurrencySelect.appendChild(toFragment);
 }
 
 async function performConversion() {
     const amount = parseFloat(amountInput.value);
     const fromCurrency = fromCurrencySelect.value;
     const toCurrency = toCurrencySelect.value;
     
     if (isNaN(amount) || amount <= 0) {
         showError('Please enter a valid amount');
         return;
     }
     
     try {
         showLoading();
         hideResult();
         hideError();
         
         const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`);
         if (!response.ok) {
             throw new Error('Conversion failed');
         }
         
         const data = await response.json();
         if (data.result === 'success') {
             const convertedAmount = data.conversion_result;
             const rate = data.conversion_rate;
             
             displayResult(amount, fromCurrency, toCurrency, convertedAmount, rate);
         } else {
             throw new Error(data.error || 'Conversion failed');
         }
     } catch (error) {
         showError(`Conversion failed: ${error.message}`);
     } finally {
         hideLoading();
     }
 }
 
 function switchCurrencies() {
     const fromValue = fromCurrencySelect.value;
     const toValue = toCurrencySelect.value;
     
     fromCurrencySelect.value = toValue;
     toCurrencySelect.value = fromValue;
     
     if (resultDisplay.classList.contains('show')) {
         performConversion();
     }
 }
 
 function displayResult(amount, fromCurrency, toCurrency, convertedAmount, rate) {
     resultDisplay.innerHTML = `
         <div>
             <strong>${amount.toFixed(2)} ${fromCurrency}</strong> = 
             <strong>${convertedAmount.toFixed(2)} ${toCurrency}</strong>
         </div>
         <div style="margin-top: 8px; font-size: 14px; color: #666;">
             1 ${fromCurrency} = ${rate.toFixed(6)} ${toCurrency}
         </div>
     `;
     
     showResult();
 }
 
 
 function showLoading() {
     loadingIndicator.style.display = 'flex';
 }
 
 function hideLoading() {
     loadingIndicator.style.display = 'none';
 }
 
 function showResult() {
     resultDisplay.classList.add('show');
 }
 
 function hideResult() {
     resultDisplay.classList.remove('show');
 }
 
 function showError(message) {
     errorDisplay.textContent = message;
     errorDisplay.classList.add('show');
 }
 
 function hideError() {
     errorDisplay.classList.remove('show');
 }