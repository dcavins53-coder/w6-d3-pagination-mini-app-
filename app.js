"use strict";
const url ="https://rickandmortyapi.com/api/character";
const message = document.getElementById("status-message");
const results = document.getElementById("results");
const previous = document.getElementById("previous-btn");
const next = document.getElementById("next-btn");
const page = document.getElementById("page-display");
let currentPage =1
async function fetchCharacters(page) {
 try {
   const response = await fetch(`${url}?page=${page}`) 
   if(response.status=== 429){
   message.textContent ="you hit rate limit" 
   }
   if(!response.ok){
    console.error("error fetching characters");
    
   }
   const data = await response.json()
   console.log (data)
   renderCharacters(data.results);
 } catch (error) {
    console.error("error fetching characters");
 } 
 
 
}
function renderCharacters(data){
    data.forEach(item=>{
        const li = document.createElement("li")
li.textContent =`${item.name}-${item.species}`
results.appendChild(li)
    });
}
//prevous
fetchCharacters(currentPage);
