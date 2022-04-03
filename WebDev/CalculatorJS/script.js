const keys = document.querySelectorAll(".key")
let displayActual = document.getElementById("display").innerText

var operation = ""
var firstValue = ""

function reset() {
    operation = ""
    firstValue = ""
}


function keyPressed(event) {
    let btnCalc = event.target.dataset.key;
    let newValue = ""
   
    // Para limpar o display quando chamamos algum operador
    function clearDisplay() {
        newValue = ""
        displayActual = ""
        document.getElementById("display").innerText = ""
    }

    function sum() {
        let result = parseFloat(firstValue) + parseFloat(displayActual)
        reset()  
        displayActual = result
        return
    }

    function sub() {
        let result = parseFloat(firstValue) - parseFloat(displayActual)
        reset()  
        displayActual = result
        return
    }

    function obelus() {
        let result = parseFloat(firstValue) / parseFloat(displayActual)
        reset()  
        displayActual = result
        return
    }

    function times() {
        let result = parseFloat(firstValue) * parseFloat(displayActual)
        reset()  
        displayActual = result
        return
    }

    // Clear display 
    if (btnCalc === "C") {
        document.getElementById("acumulator").innerText = ""
        clearDisplay()
        return 
    }

    if (btnCalc === "=") {
       document.getElementById("acumulator").innerText = displayActual

       if (operation == "+") {
            sum()
       }
       else if (operation == "-") {
            sub() 
       }
       else if(operation == "/") {
            obelus()
       }
       else if (operation == "*") {
            times()
       }
    }

    const operations = ["/", "*", "-", "+"]
    if (operations.includes(btnCalc) == true) {
        document.getElementById("acumulator").innerText = displayActual + btnCalc
        firstValue = displayActual
        operation = btnCalc
        console.log(operation)
        clearDisplay()
        return
    }


    // Para manter a contrução dos números digitados no display 
    newValue = displayActual+btnCalc
    displayActual = newValue

    document.getElementById("display").innerText = displayActual

    return
}

keys.forEach(function(key) {
    key.addEventListener("click", keyPressed)
})