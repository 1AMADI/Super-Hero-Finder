const showHeroStats=(character)=>{
    Object.keys(character.powerstats).map(stat=>{
        `<p>${stat}:${character.powerstats[stat]}</p>`})
}