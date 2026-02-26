import { 
    getCities, getHighschool, getLanguages, 
    getUserData, submitUserData, makeLanguageConnections, 
    makeLocationConnections, 
    getAllOtherUserData
        } from "./backend_module.js"


const cityList = document.getElementById("cityList")
const searchButton = document.getElementById("searchButton")
const resultsDiv = document.getElementById("results")
const searchInput = document.getElementById("searchInput")

const fakeUser = {
    full_name:"Carls JR",
    highschool_name:"Kentuckyville HS",
    highschool_lat:45.0000,
    highschool_lon:175.343434,
    mis1_name:"NYC",
    mis1_lat:40.7128,
    mis1_lon:74.006,
    mis2_name:null,
    mis2_lat:null,
    mis2_lon:null
}


async function displayConnections() {
    const results = await makeLocationConnections(1) //1 just grabs the first user and connects every one to them
    resultsDiv.style.display = "block" // Now this will work
    cityList.innerHTML = ""
    
    results.forEach(element => {
      // console.log(element.name)
      cityList.innerHTML += `<li><h3>${element.name}</h3><p>${element.connection}</p></li>`
      for (const key in element) {
        // console.log(`${key}:${element[key]}`)
      }
    });

    console.log(cityList.innerHTML)
    
}

searchButton.addEventListener('click', async function() {
  console.log('Button clicked!');
  const results = await submitUserData(fakeUser)
  console.log(`the user id is: ${results}`)


  displayConnections()
})

