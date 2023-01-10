function login(input) {

    let index = 0;
    let username = input[index];
    index++;
    let correctPass = ""
    let counter = 1;

    for (let i = username.length; 0 < i; i--) {
        
        correctPass += username.charAt(i - 1);
    }

    while (input[index] !== correctPass) {
        
        if (counter === 4) {
            
            console.log(`User ${username} blocked!`)
            break;
        }
        
        console.log("Incorrect password. Try again."); 
        counter++;
        index++;
    }

    if (input[index] === correctPass) {
        
        console.log(`User ${username} logged in.`)
    }
}
login(['sunny','rainy','cloudy','sunny','not sunny']);
