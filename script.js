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
        showHeroStats(json)

})
}

// this function is called when the search button is clicked.
const searchedHero=(name)=>{
    fetch(`${baseUrl}/search/${name}`)
    .then(response=>response.json())
    .then(json=>{
        const hero=json.results[0]
        showHeroStats(hero);
    })
}
// this is an object consisting of emojis to bind with the powerstats
const statToEmoji={
    intelligence:"🧠",
    strength:"💪",
    speed:"⚡",
    durability:"🪢",
    power:"📊",
    combat:"⚔️"
}
// this is a function that handles all the work of getting the name , image and all the power stats concerned with the required hero
const showHeroStats=(character)=>{
    // this line gets the name from the character.name and binds it to the variable heroName
    const heroName=`<h2>${character.name}</h2>`
    // this line gets the image url of the hero and binds the url to the img variable
    const img=`<img id="superHeroImage" src="${character.image.url}" height=300 width=300 />`
    // Object.keys is used to convert any object keys into an array and later we iterate through it using the .map function and joins all the values of the stats to it and later joins all the array using the .join() method.

    const stats=Object.keys(character.powerstats).map(stat=>{
        return `<p>${statToEmoji[stat]} ${stat.toUpperCase()} :${character.powerstats[stat]}</p>`}).join('')
        //This line updates the innerHTML of the image div to the following which includes the variables name , img, stats.
        image.innerHTML=`${heroName} ${img} <br> ${stats}>`
}
button.onclick=()=>{
    // this random num randomly selects  a number out of 730 available hero ids and calls the function with that id number as input
    let randomNum=Math.floor(Math.random()*730);
    getHeroImage(randomNum)}
searchButton.onclick=()=>{
    searchedHero(searchField.value)
}
