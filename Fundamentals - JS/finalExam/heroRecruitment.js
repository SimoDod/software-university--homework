function heroRecruit(data) {
    let i = 0;

    let heroes = {};

    while (data[i] !== 'End') {
        let dataLine = data[i].split(' ');
        let command = dataLine[0];

        switch (command) {

            case 'Enroll':
                let enrolHeroName = dataLine[1];

                if (heroes.hasOwnProperty(enrolHeroName)) {
                    console.log(`${enrolHeroName} is already enrolled.`);
                } else {

                    heroes[enrolHeroName] = [];
                }
                break;

            case 'Learn':
                let learnHeroName = dataLine[1];
                let learnSpellName = dataLine[2];

                if (heroes.hasOwnProperty(learnHeroName)) {

                    if (heroes[learnHeroName].includes(learnSpellName)) {
                        console.log(`${learnHeroName} has already learnt ${learnSpellName}.`);
                    } else {
                        heroes[learnHeroName].push(learnSpellName)
                    }

                } else {
                    console.log(`${learnHeroName} doesn't exist.`);
                }
                break;

            case 'Unlearn':
                let unlearnHeroName = dataLine[1];
                let unlearnSpellName = dataLine[2];

                if (!heroes.hasOwnProperty(unlearnHeroName)) {
                    console.log(`${unlearnHeroName} doesn't exist.`);
                } else {
                    let indexOf = heroes[unlearnHeroName].indexOf(unlearnSpellName);

                    if (indexOf === -1) {
                        console.log(`${unlearnHeroName} doesn't know ${unlearnSpellName}.`);
                    } else {
                        heroes[unlearnHeroName].splice(indexOf, 1)
                    }
                }
                break;

            default:
                break;
        }
        i++
    }

    console.log('Heroes:');

    for (const key in heroes) {
        console.log(`== ${key}: ${heroes[key].join(', ')}`)
    }
}
heroRecruit(["Enroll Stefan",
    "Learn Stefan ItShouldWork",
    "Learn Stefan ItShouldWork",
    "Unlearn Stefan NotFound",
    "End"])

