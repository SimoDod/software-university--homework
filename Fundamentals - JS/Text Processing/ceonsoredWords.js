function censor(input, match) {
    let text = input.split(match);
    let res = text.join('*'.repeat(match.length));
    
    console.log(res);
}
censor('A small small sentence withh some words', 'small');