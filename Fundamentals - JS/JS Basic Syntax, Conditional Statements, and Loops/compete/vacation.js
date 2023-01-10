function vacation(amount, classType, weekDay) {

    let totalPrice = 0;

    switch (weekDay) {
        case "Friday":

            if (classType === "Students") {
                
                totalPrice += amount * 8.45;
                
                if (amount >= 30) {
                    totalPrice = totalPrice * 0.85;
                    
                }

            } else if (classType === "Business") {


                if (amount >= 100) {
                    let freeStayPrice = (amount - 10) * 10.9;

                    totalPrice = freeStayPrice;
                } else {
                    totalPrice += amount * 10.9;
                }

            } else if (classType === "Regular") {
                totalPrice += amount * 15;

                if (amount >= 10 && amount <= 20) {
                    totalPrice = totalPrice * 0.95;
                }
            }
            break;
        
        case 'Saturday':

            if (classType === "Students") {
                totalPrice += amount * 9.8;
                

                if (amount >= 30) {
                    totalPrice = totalPrice * 0.85;
                    
                }

            } else if (classType === "Business") {


                if (amount >= 100) {
                    let freeStayPrice = (amount - 10) * 15.6;

                    totalPrice = freeStayPrice;
                } else {
                    totalPrice += amount * 15.6;
                }

            } else if (classType === "Regular") {
                totalPrice += amount * 20;

                if (amount >= 10 && amount <= 20) {
                    totalPrice = totalPrice * 0.95;
                }
            }
            break;

        case 'Sunday':

            if (classType === "Students") {
                totalPrice += amount * 10.46;
                

                if (amount >= 30) {
                    totalPrice = totalPrice * 0.85;
                    
                }

            } else if (classType === "Business") {


                if (amount >= 100) {
                    let freeStayPrice = (amount - 10) * 16;

                    totalPrice =  freeStayPrice;
                } else {
                    totalPrice += amount * 16;
                }

            } else if (classType === "Regular") {
                totalPrice += amount * 22.5;

                if (amount >= 10 && amount <= 20) {
                    totalPrice = totalPrice * 0.95;
                }
            }
            break;

    }
    
    
    

    console.log(`Total price: ${totalPrice.toFixed(2)}`)

}
vacation(120,
    "Business",
    "Friday")