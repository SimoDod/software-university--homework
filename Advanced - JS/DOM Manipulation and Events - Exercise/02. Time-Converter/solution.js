function attachEventsListeners() {
    function attachEventsListeners() {
        //days, hours, minutes, seconds => daysBtn, hoursBtn, minutesBtn, secondsBtn
        let buttons = Array.from(document.querySelectorAll("input[type=button]"));
        
        for (const button of buttons) {
            button.addEventListener("click", convert)
        }
        
        function convert(e) {
            let inputField = Number(e.target.parentElement.querySelector("input[type=text]").value);
    
            let command = e.target.id;
    
            switch (command) {
                case 'daysBtn':
                    populate(inputField)
                    //seconds = Number(inputField) * 24 * 60 * 60;
                    break;
                case 'hoursBtn':
                    populate(inputField / 24)
                    // seconds = Number(inputField) * 60 * 60
                    break;
                case 'minutesBtn':
                    populate(inputField / 24 / 60)
                    //seconds = Number(inputField) * 60
                    break;
                case 'secondsBtn':
                    populate(inputField / 24 / 60 / 60)
                    //seconds = Number(inputField);
                    break;
                default:
                    break;
            }
    
        }
    
        function populate(inputField) {
            let inputs = Array.from(document.querySelectorAll('input[type=text]'))
            inputs.shift().value = inputField;
            let currValue = inputField * 24;
    
            for (const input of inputs) {
                input.value = currValue;
                currValue *= 60;
            }
        }
    }
}