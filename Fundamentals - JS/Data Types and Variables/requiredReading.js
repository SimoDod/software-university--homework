function timeRequired(pagesCounForCurrBook, pagesReadPerHour, daysLimit) {

    let totalTimeToRead = pagesCounForCurrBook / pagesReadPerHour;
    let toReadPerDay = totalTimeToRead / daysLimit;
    console.log(toReadPerDay);
}
timeRequired(212, 

    20 , 
    
    2 )