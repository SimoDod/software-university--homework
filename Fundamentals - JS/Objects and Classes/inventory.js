function inventory(input) {
    let resultArr = [];

    input.forEach(el => {
        let heroInfo = el.split(' / ');
        let heroName = heroInfo[0];
        let heroLvl = Number(heroInfo[1]);
        let heroItems = heroInfo[2];

        let currentHero = {
            name: heroName,
            level: heroLvl,
            items: heroItems,
        };
        
        resultArr.push(currentHero)
    })
    
    let sortedByLevel = resultArr.sort((a,b) => {
        return a.level - b.level;
    })
    
    sortedByLevel.forEach(el => {
        console.log(`Hero: ${el.name}`);
        console.log(`level => ${el.level}`);
        console.log(`items => ${el.items}`);
    })
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])
    