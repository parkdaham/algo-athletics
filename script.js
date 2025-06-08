console.log("Script loaded! This is where you can add interactive JavaScript."); 

document.addEventListener("DOMContentLoaded", function() {
    const dateElement = document.getElementById("current-date-day");
    const today = new Date();
    const options = {
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    };
    const formattedDate = today.toLocaleDateString("ko-KR", options);
    dateElement.textContent = formattedDate;
}); 