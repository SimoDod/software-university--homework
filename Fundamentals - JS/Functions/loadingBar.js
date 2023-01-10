function loadingBar(input) {    
    
    let completed = '%'.repeat(input / 10);
    let unCompleted = `.`.repeat(10 - (input / 10));
    
    console.log(`${input}% [${completed}${unCompleted}]`);
    if (input < 100) {
        console.log(`Still loading...`);
    } else {
        console.log('100% Complete!');
    }
}
loadingBar(100)