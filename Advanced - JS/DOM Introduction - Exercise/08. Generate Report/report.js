function generateReport() {
    let checkBoxesEl = Array.from(document.querySelectorAll('input'));
    let dataInfo = Array.from(document.querySelectorAll('tbody tr'));


    let indexes = [];

    for (const index of checkBoxesEl) {
        if (index.checked) {
            indexes.push(checkBoxesEl.indexOf(index));
        }
    }

    let endRes = []

    for (const row of dataInfo) {
        let res = {};
        
        for (const index of indexes) { 
            let propName = checkBoxesEl[index].name;
            let propValue = row.children[index].textContent;
            res[propName] = propValue;
        }
        endRes.push(res)
    }

    document.getElementById('output').textContent = JSON.stringify(endRes);
}