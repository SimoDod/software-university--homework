function solve(day, age) {

    let result = 0;

    let isFalse = false;

    if (age <= 18 && age >= 0) {

        if (day == "Weekday") {

            result = 12;

        } else if (day == "Weekend") {

            result = 15;

        } else if (day == "Holiday") {
            result = 5;
        }

    } else if (age <= 64 && age > 18) {

        if (day == "Weekday") {

            result = 18;

        } else if (day == "Weekend") {

            result = 20;

        } else if (day == "Holiday") {
            result = 12;
        }

    } else if (age <= 122 && age > 64) {

        if (day == "Weekday") {

            result = 12;

        } else if (day == "Weekend") {

            result = 15;

        } else if (day == "Holiday") {
            result = 10;
        }

    } else {
        console.log("Error!");
        isFalse = true;
    }

    if (!isFalse) {
        console.log(result + "$");
    }
}
solve("Holiday", 15);