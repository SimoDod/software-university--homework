function rightPlace(string1, char, string2) {


    let buffer = "";

    for (let i = 0; i < string1.length; i++) {

        if (string1[i] === "_") {

            buffer += char;

        } else {
            buffer += string1[i];
        }

    }
    
    if (buffer === string2) {
        console.log("Matched")
    } else {
        console.log("Not Matched");
    }
    
}
rightPlace('Str_ng', 'i', 'String' );