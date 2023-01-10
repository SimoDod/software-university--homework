
class Request {
    constructor (method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
    
}



let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '')

for (const key in myData) {
    
        const element = myData[key];
        console.log(element);
    
}
console.log(myData);
