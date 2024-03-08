function SendMail() {
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
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
