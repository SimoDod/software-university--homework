function calorie(params) {

    let res = {};

    for (let i = 0; i < params.length; i += 2) {
        let calories = Number(params[i + 1])
        let item = params[i];

        res[item] = calories;
    }
    console.log(res);
}
calorie(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])