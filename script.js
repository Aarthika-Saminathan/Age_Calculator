// Assuming HTML input element with id="date"
let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0]; // Set max date to today
let result = document.getElementById('result')

function calculateAge() {
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1; // +1 because getMonth() returns zero-based month
    let y1 = birthDate.getFullYear();

    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1; // +1 because getMonth() returns zero-based month
    let y2 = today.getFullYear();

    let y3, m3, d3;

    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) +d2-d1;
    }

    result.innerHTML = `You are<span> ${y3}</span> years, <span>${m3}</span> months, <span>${d3}</span> days old`
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
