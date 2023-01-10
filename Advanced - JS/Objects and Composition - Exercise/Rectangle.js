function rectangle(num1, num2, color) {
    let firstLetter =  color[0].toUpperCase();
    let restLetters = color.substring(1);
    color = firstLetter + restLetters;
    
    let rect = {
        width: num1,
        height: num2,
        color,
        calcArea: () => num1 * num2
    }
    /* console.log(rect.width);
    console.log(rect.height);
    console.log(rect.color);
    console.log(rect.calcArea(num1, num2)); */
    return rect;
}

console.log(rectangle(4, 5, 'red'));





