function suReception(input) {

    let firstEmployeeCpacityHour = Number(input[0]);
    let secondEmployeeCapacityHour = Number(input[1]);
    let thirdEmployeeCapacityHour = Number(input[2]);
    let studentsCount = Number(input[3]);

    let totalCapacityHour = firstEmployeeCpacityHour
        + secondEmployeeCapacityHour
        + thirdEmployeeCapacityHour

    let hoursNeeded = 0;

    for (let i = studentsCount; i > 0; i -= totalCapacityHour) {
        hoursNeeded++;
        if (hoursNeeded % 4 === 0) {
            i += totalCapacityHour;
        }

    }
    console.log(`Time needed: ${hoursNeeded}h.`);
}
suReception(['1', '2', '3', '45']);