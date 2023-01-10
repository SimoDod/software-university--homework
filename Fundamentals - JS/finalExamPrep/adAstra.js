function adAstra(data) {
    let shadowCopy = data.slice();
    let dataToString = data.join('');
    let dataToString1 = shadowCopy.join('');

    let regexp = /([#|/|])(?<item>[A-Za-z\s]+)(\1)(?<date>\d{2}\/\d{2}\/\d{2})(\1)(?<calories>\d+)(\1)/gm;
    let regexp1 = /([#|/|])(?<item>[A-Za-z\s]+)(\1)(?<date>\d{2}\/\d{2}\/\d{2})(\1)(?<calories>\d+)(\1)/gm;
    
    let toGroups = regexp.exec(dataToString);
    
    let toGroups1 = regexp1.exec(dataToString1);
    
    let sumOfCalories = 0;
    
    while (toGroups !== null) {
        
        let calories = Number(toGroups.groups.calories);
        
        sumOfCalories += calories;
        toGroups = regexp.exec(dataToString);
        
    }

    let days = sumOfCalories / 2000;
    console.log(`You have food to last you for: ${Math.floor(days)} days!`);

    while (toGroups1 !== null) {
        toGroups1 = regexp.exec(dataToString1);
        if (toGroups1 === null) {
            break;
        }
        let item = toGroups1.groups.item;
        let date = toGroups1.groups.date;
        let calories = Number(toGroups1.groups.calories);

        console.log(`Item: ${item}, Best before: ${date}, Nutrition: ${calories}`);
    }
}
adAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ]
)