function sortBy2Criteria(params) {
    params.sort((a, b) => a.localeCompare(b))
        .sort((a, b) => a.length - b.length)
        .forEach(x => console.log(x));
}