function oddOccurrences(data) {
    let toLowCase = data.toLowerCase().split(' ');
    let result = new Map();

    for (const item of toLowCase) {

        if (!result.has(item)) {
            result.set(item, 0);
        }
        let oldValue = result.get(item);
        result.set(item, oldValue + 1);
    };
    
    let buffer = '';
    
    for (const [key, value] of result) {

        if (value % 2 !== 0) {
            buffer += key + " "
        }
    };
    console.log(buffer);
};
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')