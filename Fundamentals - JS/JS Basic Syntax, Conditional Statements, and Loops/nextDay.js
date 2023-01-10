function nextDay (year, month, day) {

    
    let dateObj = new Date();
    month = dateObj.getUTCMonth() + 1;
    day = dateObj.getUTCDate();
    year = dateObj.getUTCFullYear();

    let newdate = year + "/" + month + "/" + day;
    console.log(newdate);
}
nextDay(2016, 9, 30);