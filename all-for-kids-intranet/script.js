// Toggle FAQ Answers
function toggleAnswer(id) {
    const answer = document.getElementById(id);
    answer.style.display = answer.style.display === "none" ? "block" : "none";
}

// Submit Inquiry Form
function sendInquiry(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    Email.send({
        SecureToken: "YOUR_EMAILJS_SECURE_TOKEN",
        To: 'PSS@allforkids.org, CynthiaMartinez@allforkids.org, CleliaVentura@allforkids.org',
        From: email,
        Subject: `Inquiry from ${name}`,
        Body: `Name: ${name}<br>Email: ${email}<br>Message: ${message}`
    }).then(
        message => alert("Inquiry successfully sent!")
    );
}
