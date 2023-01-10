function addRemove(params) {

    let res = [];

    for (let i = 0; i < params.length; i++) {
        switch (params[i]) {
            case 'add':
                res.push(i + 1)
                break;

            case 'remove':
                res.pop();
                break;

            default:
                break;
        }
    }

    if (res.length === 0) {
        console.log('Empty');
    } else {
        res.forEach(x => console.log(x));
    }
}