const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const container = document.querySelector('.container')
let searchQuery = '';
const APP_ID = '0afafdc7'
const APP_key = '160d4b73196746f44612e1a7bbe0af'

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('inpute').value;
     fetchAPI();
});

async function fetchAPI (){
    const baseURL = `https://api.edaman.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_key}$to=20`;
    const response = await fetch(baseURL);
    const data = await response.json();
    generateHTML(data.hits);    
    console
}
