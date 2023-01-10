function blackFlag(input) {
    let piratingDays = Number(input[0]);
    let plunderForAday = Number(input[1]);
    let expectedPlunder = Number(input[2]);

    let totalPlunder = 0;
    let counter = 0;
    for (let i = piratingDays; i > 0; i--) {
        counter++;

        if (counter % 3 === 0) {
            let thirdDayPlunder = plunderForAday * 1.5
            totalPlunder += thirdDayPlunder
        } else {
            totalPlunder += plunderForAday;
        }

        if (counter % 5 === 0) {
            totalPlunder -= totalPlunder * 0.3;
        }
    }

    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${((totalPlunder / expectedPlunder) * 100).toFixed(2)}% of the plunder.`);
    }
}
blackFlag((["10",
    "20",
    "380"])

)