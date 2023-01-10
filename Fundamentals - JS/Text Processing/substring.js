function substring(word, startIndex, count) {
    let lastIndex = startIndex + count;
    let text = word.substring(startIndex, lastIndex);

    console.log(text);
}
substring('ASentence', 1, 8)