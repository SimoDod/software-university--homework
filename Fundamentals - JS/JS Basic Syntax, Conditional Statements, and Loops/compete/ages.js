function ages(x) {

    if (x < 2 && x >= 0) {

        console.log("baby");

    } else if (x <= 13 && x >= 3) {

        console.log("child");

    } else if (x <= 19 && x >= 14) {
        
        console.log("teenager");

    } else if (x <= 65 && x >= 20) {

        console.log("adult");

    } else if (x >= 66) {

        console.log("elder");

    } else {
        
        console.log("out of bounds");
    }

}
ages(-1);