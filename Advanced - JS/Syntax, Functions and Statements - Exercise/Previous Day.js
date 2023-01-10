function date(year, month, day) {

    let d = new Date(year, month + 1, day - 1);

    console.log(`${d.getFullYear()}-${d.getMonth() - 1}-${d.getDate()}`);
}
date(2016, 9, 30)