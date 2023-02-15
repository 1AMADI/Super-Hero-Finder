//This is the search button.
const button=document.getElementById("searchButton");
const image=document.getElementById("image");
const searchButton=document.getElementById("inputSearchButton");
const baseUrl="https://superheroapi.com/api.php/198881436070044"
const searchField=document.getElementById("searchInput")
const getHeroImage=(id)=>{
    fetch(`${baseUrl}/${id}`)
    .then(response=>response.json())
    .then(json=>{
        // This fetches the name of the hero from the json file and binds it to the variable heroName.

        const heroName=`<h2>${json.name}</h2>`
        const stats=showHeroStats(json)
        //This changes the inner html of the image div for inserting the picture as well as adds a h2 which has the name of the character.

        image.innerHTML=`${heroName}<img id="superHeroImage" src="${json.image.url}" height=300 width=300 <br> ${stats}`
})
}

// this function is called when the search button is clicked.
const searchedHero=(name)=>{
    fetch(`${baseUrl}/search/${name}`)
    .then(response=>response.json())
    .then(json=>{
       
        const hero=json.results[0]
        const stats=showHeroStats(hero)
        const heroName=`<h2>${hero.name}</h2>`
        image.innerHTML=`${heroName}<img id="superHeroImage" src="${hero.image.url}" height=300 width=300/ <br> ${stats}`
})
}
const statToEmoji={
    intelligence:"🧠",
    strength:"💪",
    speed:"⚡",
    durability:"🪢",
    power:"📊",
    combat:"⚔️"
}
const showHeroStats=(character)=>{
    const stats=Object.keys(character.powerstats).map(stat=>{
        return `<p>${statToEmoji[stat]} ${stat.toUpperCase()} :${character.powerstats[stat]}</p>`})
    return stats.join("")


}
button.onclick=()=>{
    // this random num randomly selects  a number out of 730 available hero ids and calls the function with that id number as input
    let randomNum=Math.floor(Math.random()*730);
    getHeroImage(randomNum)}
searchButton.onclick=()=>{
    searchedHero(searchField.value)
}
