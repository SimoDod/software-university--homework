function extractFile(input) {
    let separator = input.split('\\')
    let lastPath = separator.pop();
    let separatedLastPath = lastPath.split('.');
    let extension = separatedLastPath.pop();
    let fileName = separatedLastPath.join('.');

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs')