

function countdownTime() {
    // Set the date we're counting down to
    var countDownDate = new Date("Nov 5, 2021 00:00:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("countdown-time").innerHTML = days + " dia(s) " + hours + " horas(s) "
            + minutes + " minuto(s) " + seconds + " segundo(s) ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown-time").innerHTML = "EXPIRED";
        }
    }, 1000);
}


function saveData() {
    var name = document.getElementById('nome').value;
    var email = document.getElementById('email').value;

    document.querySelector("form").addEventListener("submit", event => {
        // let data = `Nome: ${name} \nE-mail: ${email}`;
        // console.log(data);
        localStorage.setItem("Nome", name);
        localStorage.setItem("e-mail", email);

    event.preventDefault();
    })
}


countdownTime();
saveData();

