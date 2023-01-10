function heroInventory(params) {
    let buff = []

    for (let i = 0; i < params.length; i++) {
        const data = params[i].split(' / ');
        let [name, level, items] = data;

        items = items !== undefined ? items = items.split(', ') : [];

        level = Number(level);

        let hero = {
            name,
            level,
            items
        }
        buff.push(hero);
    }
    console.log(JSON.stringify(buff));
}
heroInventory(['Jake / 1000']
)