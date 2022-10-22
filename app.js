var inter


function start() {
    document.querySelector(".start").disabled = true
    document.querySelector(".stop").disabled = false
document.querySelector(".reset").disabled = false
    var input_hour = document.getElementById("input-hour").value
    var input_minut = document.getElementById("input_minut").value
    var input_second = document.getElementById("input_second").value
    
    var hour = input_hour
    var minut = input_minut
    var second = input_second
    var milisec = 10


    inter = setInterval(function () {
        milisec--
        if (milisec == 0  && second > 0) {
            milisec = 10
            second--
            if (second == 0 && minut > 0 ) {

                second = 60
                minut--
                if (minut == 0 && hour > 0) {
                    minut = 60
                    hour--
                }
            }

        }
if(milisec == 0){
    stop()
}
        document.getElementById("houre").innerHTML = hour
        document.getElementById("minut").innerHTML = minut
        document.getElementById("second").innerHTML = second
        document.getElementById("milisec").innerHTML = milisec

    
    }, 100)
}

function stop() {
    document.querySelector(".stop").disabled = true
    document.querySelector(".start").disabled = false
    clearInterval(inter);
}
function reset() {
    document.querySelector(".reset").disabled = true
    document.querySelector(".start").disabled = false
    milisec = "00"
    var hour = "00"
    var minut = "00"
    var second = "00"

    stop()
    document.getElementById("houre").innerHTML = hour
    document.getElementById("minut").innerHTML = minut
    document.getElementById("second").innerHTML =second
    document.getElementById("milisec").innerHTML = milisec
}