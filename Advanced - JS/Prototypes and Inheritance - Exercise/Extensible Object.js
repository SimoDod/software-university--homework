
function extensibleObject() { 
    return {
        extend(templateObj) {
            for (k in templateObj) {
                if (typeof templateObj[k] === 'function') {
                    Object.getPrototypeOf(this)[k] = templateObj[k];
                } else {
                    this[k] = templateObj[k];
                }
            }
        }
    }

} 
const myObj = extensibleObject();
