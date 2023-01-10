function messageTranslator(data) {

    let n = Number(data.shift())
    let regExp = /[!][A-Z][a-z]{2,}[!][:]\[[A-Za-z]{8,}\]/gm;
    let regExpMessage = /[A-Za-z]{8,}/gm;
    let regExpCommand = /[!][A-Z][a-z]{2,}[!][:]/gm;

    for (let i = 0; i < n; i++) {
        let message = data[i];

        if (regExp.test(message)) {
            let messageToCalc = message.match(regExpMessage).join('');
            let messageCommand = message.match(regExpCommand);

            let buffer = []
            for (const el of messageToCalc) {
                buffer.push(el.charCodeAt())
            }
            messageCommand = messageCommand.join('').split('!').join('');
            console.log(`${messageCommand} ${buffer.join(' ')}`);
        } else {
            console.log("The message is invalid");
        }
    }
}
messageTranslator(["2",
    "!Send!:[IvanisHere]",
    "*Time@:[Itis5amAlready"])
