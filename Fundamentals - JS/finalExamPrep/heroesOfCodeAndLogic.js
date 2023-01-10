function heroesOfCodeAndLogic(data) {
    let countOfHeroesToChoseFrom = Number(data.shift());
 
    let heroes = {};

    for (let i = 0; i < countOfHeroesToChoseFrom; i++) {
        let currHeroInfo = data[i].split(' ');
        let currHero = currHeroInfo[0];

        heroes[currHero] = [Number(currHeroInfo[1]), Number(currHeroInfo[2])];
    };

    let index = countOfHeroesToChoseFrom;

    while (data[index] !== 'End') {
        let tokens = data[index].split(' - ');
        let command = tokens[0];
        let hero = tokens[1];


        switch (command) {
            case 'CastSpell':
                let neededMana = Number(tokens[2])
                let currMana = Number(heroes[hero][1]);
                let spellName = tokens[3];

                if (neededMana <= currMana) {
                        heroes[hero][1] =  heroes[hero][1] - neededMana;
                        console.log(`${hero} has successfully cast ${spellName} and now has ${heroes[hero][1]} MP!`);
                } else {
                    console.log(`${hero} does not have enough MP to cast ${spellName}!`);
                }
                break;

            case 'TakeDamage':
                    let damage = Number(tokens[2]);
                    let attacker = tokens[3];
                    let heroHealth = heroes[hero][0];
                    let healthStatus = heroHealth - damage;

                    if(healthStatus > 0) {
                        heroes[hero][0] = healthStatus;
                        console.log(`${hero} was hit for ${damage} HP by ${attacker} and now has ${healthStatus} HP left!`);
                    } else {
                        console.log(`${hero} has been killed by ${attacker}!`);
                        delete heroes[hero];
                    }
                    
                break;

            case 'Recharge':
                    let amount = Number(tokens[2]);
                    let currManaRecharge = Number(heroes[hero][1]);
                    let resultOfRecharge = currManaRecharge + amount;
                    
                    if(resultOfRecharge >= 200) {
                        amount = 200;
                        let amountRecharged = 200 - currManaRecharge;
                        console.log(`${hero} recharged for ${amountRecharged} MP!`);
                        heroes[hero][1] = 200;
                    } else {
                        console.log(`${hero} recharged for ${amount} MP!`);
                        heroes[hero][1] = resultOfRecharge;
                    }
                
                    break;

            case 'Heal':
                    let healingPower = Number(tokens[2]);
                    let heroHP = heroes[hero][0];
                    let resultOfHeal = heroHP + healingPower;

                    if(resultOfHeal >= 100) {
                        let amountHealed = 100 - heroHP;
                        console.log(`${hero} healed for ${amountHealed} HP!`);
                        heroes[hero][0] = 100;
                    } else {
                        console.log(`${hero} healed for ${healingPower} HP!`);
                        heroes[hero][0] = resultOfHeal;
                    }

                break;

            default:
                break;
        }

        index++;
    }
    
    for (const key in heroes) {
        console.log(key);
        console.log(`  HP: ${heroes[key][0]}`);
        console.log(`  MP: ${heroes[key][1]}`);
    }
}
heroesOfCodeAndLogic(["2",
    "Solmyr 100 200",
    "Kyrre 100 200",
    
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"
])