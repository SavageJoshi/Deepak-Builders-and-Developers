function SendMail() {
    // Get form input values
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email_id").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Check if any field is empty
    if (fullName === "" || email === "" || subject === "" || message === "") {
        // Display alert for empty fields
        alert("Please fill out all the fields.");
        return; // Exit function if any field is empty
    }

    // Phone number validation rules
    if (!/^\d{10}$/.test(email)) {
        // Display alert if phone number is invalid
        alert("Please enter a valid 10-digit phone number without spaces or special characters.");
        return; // Exit function if phone number is invalid
    }

    // If all fields are filled, proceed to send the email
    var params = {
        from_name: fullName,
        email_id: email,
        subject: subject,
        message: message,
    }

    emailjs.send("service_12534z5", "template_1gwupj6", params).then(
        function (res) {
            if (res.status === 200) {
                // Successful response
                alert("Message sent! Thank you for reaching out.");
            } else {
                // Error response
                alert("Error. Please try again later.");
            }
        },
        function (error) {
            // Handle any errors during the API request
            alert("Error. Please try again later.");
        }
    );
}