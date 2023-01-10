function arrayRotation(myArr, rotations) {
    
    
    for (let i = 0; i < rotations; i++) {
        let currElement = myArr.shift()
        myArr.push(currElement)
    }
    console.log(myArr.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2)