
function donate(amount) {
    document.getElementById("donationMessage").innerText =
        "Thank you! You selected ₹" + amount +
        ". This is a demo donation.";
}

document.getElementById("volunteerForm").onsubmit = function(event) {
    event.preventDefault();

    document.getElementById("thanks").innerText =
        "Thank you for joining Umeed Foundation! 💚";

    this.reset();
};