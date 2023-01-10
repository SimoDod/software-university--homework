function cookingByNumbers(...params) {
    let num = params.shift();
    let funcList = {
        chop: num => num / 2,
        dice: num => Math.sqrt(num),
        spice: num => num + 1,
        bake: num => num * 3,
        fillet: num => num * 0.8,
    }

    for (const el of params) {
        num = funcList[el](num);
        console.log(num);
    }
}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')